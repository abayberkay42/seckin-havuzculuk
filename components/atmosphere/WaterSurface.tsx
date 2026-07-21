'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * A calm, interactive water surface — the "durgun su" bookend made real.
 * Caustic light, a reflection that follows the cursor, a ripple on pointer move
 * and a pulse on click. One fullscreen fragment pass, so it stays cheap.
 *
 * Performance guards (webgl-performance):
 *  - renders ONLY while the section is on screen (frameloop toggles to 'never')
 *  - dpr clamped to 1.5, antialias off (no geometry edges to smooth)
 *  - disabled entirely for reduced-motion and small screens → CSS gradient shows
 *  - lazy-loaded (dynamic import) so three.js stays out of the initial bundle
 */

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uRes;
  uniform float uClickTime;
  uniform vec2 uClickPos;
  varying vec2 vUv;

  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i), b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  float caustic(vec2 uv, float t){
    float v = sin(uv.x * 7.0 + t) * 0.5 + 0.5;
    v *= noise(uv * 3.0 + t * 0.6);
    v += noise(uv * 6.0 - t * 0.4) * 0.5;
    return v;
  }

  void main(){
    float aspect = uRes.x / max(uRes.y, 1.0);
    vec2 uv = vUv;
    vec2 auv = vec2(uv.x * aspect, uv.y);
    vec2 am = vec2(uMouse.x * aspect, uMouse.y);

    // pointer ripple — a soft refraction that trails the cursor
    float dm = distance(auv, am);
    uv += (auv - am) / max(dm, 0.001) * sin(dm * 26.0 - uTime * 3.0) * exp(-dm * 7.0) * 0.006;

    // click pulse — poke the water
    vec2 acp = vec2(uClickPos.x * aspect, uClickPos.y);
    float dc = distance(auv, acp);
    float ct = uTime - uClickTime;
    uv += (auv - acp) / max(dc, 0.001) * sin(dc * 22.0 - ct * 7.0) * exp(-dc * 4.0) * exp(-ct * 1.6) * 0.014;

    float t = uTime * 0.12;
    float c = caustic(uv * 2.2, t);
    c = pow(max(c, 0.0), 2.2) * 0.6;

    vec3 deep = vec3(0.086, 0.188, 0.235);
    vec3 navy = vec3(0.192, 0.239, 0.302);
    vec3 steel = vec3(0.510, 0.686, 0.847);

    vec3 col = mix(deep, navy, clamp(uv.y * 0.8 + 0.1, 0.0, 1.0));
    col += steel * c * 0.24;                    // caustic light veins
    col += steel * exp(-dm * 3.2) * 0.10;       // reflection follows the cursor
    col *= 1.0 - length(vUv - 0.5) * 0.5;       // gentle vignette

    gl_FragColor = vec4(col, 1.0);
  }
`;

type Pointer = { x: number; y: number; cx: number; cy: number; click: boolean };

function WaterMesh({ pointer }: { pointer: React.RefObject<Pointer> }) {
  const smoothed = useRef(new THREE.Vector2(0.5, 0.5));
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uRes: { value: new THREE.Vector2(1, 1) },
      uClickTime: { value: -10 },
      uClickPos: { value: new THREE.Vector2(0.5, 0.5) },
    }),
    [],
  );

  useFrame((state) => {
    const p = pointer.current;
    uniforms.uTime.value = state.clock.elapsedTime;
    if (p) {
      smoothed.current.lerp({ x: p.x, y: p.y } as THREE.Vector2, 0.06);
      uniforms.uMouse.value.copy(smoothed.current);
      if (p.click) {
        uniforms.uClickTime.value = state.clock.elapsedTime;
        uniforms.uClickPos.value.set(p.cx, p.cy);
        p.click = false;
      }
    }
    uniforms.uRes.value.set(state.size.width, state.size.height);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export function WaterSurface() {
  const [enabled, setEnabled] = useState(false);
  const [inView, setInView] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const pointer = useRef<Pointer>({ x: 0.5, y: 0.5, cx: 0.5, cy: 0.5, click: false });

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.matchMedia('(max-width: 767px)').matches;
    setEnabled(!reduce && !small);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const section = wrap.current?.parentElement;
    if (!section) return;

    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.04,
    });
    io.observe(section);

    const onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      pointer.current.x = (e.clientX - r.left) / r.width;
      pointer.current.y = 1 - (e.clientY - r.top) / r.height;
    };
    const onDown = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      pointer.current.cx = (e.clientX - r.left) / r.width;
      pointer.current.cy = 1 - (e.clientY - r.top) / r.height;
      pointer.current.click = true;
    };
    section.addEventListener('pointermove', onMove);
    section.addEventListener('pointerdown', onDown);

    return () => {
      io.disconnect();
      section.removeEventListener('pointermove', onMove);
      section.removeEventListener('pointerdown', onDown);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={wrap} className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={inView ? 'always' : 'never'}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
      >
        <WaterMesh pointer={pointer} />
      </Canvas>
    </div>
  );
}
