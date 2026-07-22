'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * The page surface behaves like a body of still water. As the cursor moves it
 * lets fall drops — each one breaks the surface into concentric ripples that
 * expand, catch the light and settle. A click is a heavier object hitting the
 * water. A real damped-wave simulation on the GPU (FBO ping-pong); the wave
 * normals glint, screen-blended so still water stays invisible.
 */

const RES = 256; // wave field resolution — 256 keeps the ripples crisp; the real
// Chrome win came from powerPreference:'default' (no cross-GPU copy), not from
// shrinking this, so keep the resolution up.

const QUAD_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

// ── damped wave equation; a drop is added as a soft impulse ──
const SIM_FRAG = /* glsl */ `
  precision highp float;
  uniform sampler2D uPrev;
  uniform vec2 uDrop;
  uniform float uDropAmp;
  uniform float uDropRadius;
  uniform float uAspect;
  varying vec2 vUv;
  const float RES = ${RES.toFixed(1)};

  void main(){
    vec2 texel = vec2(1.0 / RES);
    vec4 data = texture2D(uPrev, vUv);
    float cur = data.r;
    float prev = data.g;

    float l = texture2D(uPrev, vUv - vec2(texel.x, 0.0)).r;
    float r = texture2D(uPrev, vUv + vec2(texel.x, 0.0)).r;
    float u = texture2D(uPrev, vUv + vec2(0.0, texel.y)).r;
    float d = texture2D(uPrev, vUv - vec2(0.0, texel.y)).r;

    // wave propagation + damping (surface tension pulls it back to calm)
    float next = (l + r + u + d) * 0.5 - prev;
    next *= 0.958;

    // the drop
    if (uDropAmp > 0.0) {
      vec2 auv = vec2(vUv.x * uAspect, vUv.y);
      vec2 ad = vec2(uDrop.x * uAspect, uDrop.y);
      float dist = distance(auv, ad);
      next -= uDropAmp * smoothstep(uDropRadius, 0.0, dist);
    }

    gl_FragColor = vec4(next, cur, 0.0, 1.0);
  }
`;

// ── render the wave normals as light glinting off the disturbed surface ──
const DISPLAY_FRAG = /* glsl */ `
  precision highp float;
  uniform sampler2D uState;
  uniform vec2 uRes;
  uniform float uOpacity;
  varying vec2 vUv;

  void main(){
    vec2 texel = 1.0 / uRes;
    float dx = texture2D(uState, vUv + vec2(texel.x, 0.0)).r - texture2D(uState, vUv - vec2(texel.x, 0.0)).r;
    float dy = texture2D(uState, vUv + vec2(0.0, texel.y)).r - texture2D(uState, vUv - vec2(0.0, texel.y)).r;

    vec3 n = normalize(vec3(-dx * 13.0, -dy * 13.0, 1.0));
    vec3 L = normalize(vec3(0.35, 0.5, 0.8));

    float diff = clamp(dot(n, L), 0.0, 1.0);
    float base = L.z; // the value of a perfectly flat surface
    float sheen = abs(diff - base) * 2.4;

    vec3 rfl = reflect(-L, n);
    float spec = pow(clamp(rfl.z, 0.0, 1.0), 60.0) * 1.05;

    float light = sheen + spec;
    // cool steel-water tint — the crest catches light but never washes to pure
    // white on the dark pool, so it reads as disturbed water, not a neon streak.
    vec3 col = vec3(0.40, 0.60, 0.80) * light;
    col += spec * vec3(0.14, 0.18, 0.22); // faint tinted crest, still not white

    gl_FragColor = vec4(col, clamp(light * 1.3, 0.0, 0.72) * uOpacity);
  }
`;

function Field({ onSlow }: { onSlow?: () => void }) {
  const { gl, size, invalidate } = useThree();

  // raw cursor in uv (y up) + drop bookkeeping
  const cursor = useRef({ x: 0.5, y: 0.5, has: false });
  const prevCursor = useRef({ x: 0.5, y: 0.5 });
  const accum = useRef(0);
  const click = useRef<{ x: number; y: number } | null>(null);
  // advance the wave sim only every Nth frame so ripples open and settle slowly.
  // spatial reach stays the same (decay-in-steps is unchanged); only wall-clock
  // time stretches, giving a calmer, more graceful motion.
  const SIM_EVERY = 4;
  const frame = useRef(0);

  // On-demand rendering: only draw while there's ripple energy. `activeUntil`
  // is pushed forward on every interaction; the frame loop keeps itself alive
  // until it passes, then stops — idle water costs zero GPU.
  const activeUntil = useRef(0);
  // FPS guard: if the device/browser can't keep up (e.g. Chrome with hardware
  // acceleration off → software WebGL), retire the effect rather than crawl.
  const lastT = useRef(0);
  const slow = useRef(0);
  const wake = () => {
    activeUntil.current = performance.now() + 2400; // ripple play + tail fade-out
    invalidate();
  };

  const rt = useMemo(() => {
    const opts = {
      type: THREE.HalfFloatType,
      magFilter: THREE.LinearFilter,
      minFilter: THREE.LinearFilter,
      depthBuffer: false,
      stencilBuffer: false,
    } as const;
    return {
      read: new THREE.WebGLRenderTarget(RES, RES, opts),
      write: new THREE.WebGLRenderTarget(RES, RES, opts),
    };
  }, []);
  const rtRef = useRef(rt);

  const sim = useMemo(() => {
    const scene = new THREE.Scene();
    const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const mat = new THREE.ShaderMaterial({
      vertexShader: QUAD_VERT,
      fragmentShader: SIM_FRAG,
      depthTest: false,
      uniforms: {
        uPrev: { value: null },
        uDrop: { value: new THREE.Vector2(0.5, 0.5) },
        uDropAmp: { value: 0 },
        uDropRadius: { value: 0.012 },
        uAspect: { value: 1 },
      },
    });
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));
    return { scene, cam, mat };
  }, []);

  const display = useMemo(() => {
    const mat = new THREE.ShaderMaterial({
      vertexShader: QUAD_VERT,
      fragmentShader: DISPLAY_FRAG,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uState: { value: null },
        uRes: { value: new THREE.Vector2(RES, RES) },
        uOpacity: { value: 1 },
      },
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    mesh.frustumCulled = false;
    return { mat, mesh };
  }, []);

  // clear both targets to still water once
  useEffect(() => {
    const c = gl.getClearColor(new THREE.Color()).clone();
    const a = gl.getClearAlpha();
    gl.setClearColor(0x000000, 0);
    for (const t of [rt.read, rt.write]) {
      gl.setRenderTarget(t);
      gl.clear();
    }
    gl.setRenderTarget(null);
    gl.setClearColor(c, a);
  }, [gl, rt]);

  useEffect(() => {
    const toUv = (e: PointerEvent) => ({
      x: e.clientX / window.innerWidth,
      y: 1 - e.clientY / window.innerHeight,
    });
    const onMove = (e: PointerEvent) => {
      // Touch "moves" are scroll-drags — following them would spray ripples and
      // wake the GPU all through a scroll. On touch we only drop on taps
      // (onDown); the cursor-trail is a fine-pointer (mouse/pen) affordance.
      if (e.pointerType === 'touch') return;
      const p = toUv(e);
      cursor.current.x = p.x;
      cursor.current.y = p.y;
      cursor.current.has = true;
      wake();
    };
    const onDown = (e: PointerEvent) => {
      // A drop on every press — mouse click or finger tap alike.
      click.current = toUv(e);
      wake();
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
    };
  }, []);

  useEffect(() => {
    return () => {
      rt.read.dispose();
      rt.write.dispose();
      sim.mat.dispose();
      display.mat.dispose();
      display.mesh.geometry.dispose();
    };
  }, [rt, sim, display]);

  useFrame(() => {
    // FPS guard: judge only continuous frames (ignore resume gaps > 400ms).
    const now = performance.now();
    const dt = lastT.current ? now - lastT.current : 0;
    lastT.current = now;
    if (dt > 0 && dt < 400) {
      if (dt > 55) {
        if (++slow.current > 14) {
          onSlow?.();
          return;
        }
      } else if (slow.current > 0) {
        slow.current--;
      }
    }
    // keep the on-demand loop running until the ripples have settled
    if (now < activeUntil.current) invalidate();

    // Fade the sheet out over the last stretch of the active window, so when the
    // on-demand loop stops the canvas is already invisible — otherwise it holds
    // its last framebuffer and a half-formed ripple "freezes" on screen. A fresh
    // move/tap pushes activeUntil forward, snapping opacity straight back to 1.
    const remaining = activeUntil.current - now;
    display.mat.uniforms.uOpacity.value = Math.max(0, Math.min(1, remaining / 650));

    // throttle the simulation: hold most frames so the ripple plays out slowly
    frame.current += 1;
    if (frame.current % SIM_EVERY !== 0) return;

    const aspect = size.width / Math.max(size.height, 1);
    const u = sim.mat.uniforms;
    u.uAspect.value = aspect;

    // decide the drop for this frame
    let amp = 0;
    let radius = 0.007;
    let dropX = cursor.current.x;
    let dropY = cursor.current.y;

    if (click.current) {
      amp = 0.55;
      radius = 0.016;
      dropX = click.current.x;
      dropY = click.current.y;
      click.current = null;
    } else if (cursor.current.has) {
      const mvx = (cursor.current.x - prevCursor.current.x) * aspect;
      const mvy = cursor.current.y - prevCursor.current.y;
      accum.current += Math.hypot(mvx, mvy);
      if (accum.current > 0.02) {
        accum.current = 0;
        amp = 0.28;
        radius = 0.007;
      }
    }
    prevCursor.current.x = cursor.current.x;
    prevCursor.current.y = cursor.current.y;

    u.uDrop.value.set(dropX, dropY);
    u.uDropAmp.value = amp;
    u.uDropRadius.value = radius;
    u.uPrev.value = rtRef.current.read.texture;

    gl.setRenderTarget(rtRef.current.write);
    gl.render(sim.scene, sim.cam);
    gl.setRenderTarget(null);

    const swap = rtRef.current.read;
    rtRef.current.read = rtRef.current.write;
    rtRef.current.write = swap;

    display.mat.uniforms.uState.value = rtRef.current.read.texture;
    display.mat.uniforms.uRes.value.set(RES, RES);
  });

  return <primitive object={display.mesh} />;
}

export default function WaterScene({
  paused,
  onSlow,
}: {
  paused?: boolean;
  onSlow?: () => void;
}) {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 10], zoom: 1 }}
      dpr={1}
      // On demand: renders only while ripples are alive (see Field). Idle water
      // draws nothing — no fullscreen shader, no screen-blend composite per frame.
      frameloop={paused ? 'never' : 'demand'}
      // 'default' (not 'high-performance'): on hybrid-GPU laptops Chrome renders
      // a high-performance context on the discrete GPU while compositing on the
      // integrated one, forcing an expensive cross-GPU copy every frame — the
      // classic "smooth in Firefox, awful in Chrome" WebGL jank. 'default' keeps
      // the canvas on the compositor's GPU.
      gl={{ alpha: true, antialias: false, powerPreference: 'default' }}
    >
      <Field onSlow={onSlow} />
    </Canvas>
  );
}
