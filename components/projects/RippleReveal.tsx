'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * "Touch the water, and it transforms." Not a slider.
 *
 * At rest the frame shows the tired, tiled OLD pool. The cursor is a point of
 * clarity — new water follows your finger and clears the old away. A click
 * drops a stone: a ripple expands across the whole frame revealing the finished
 * build, then heals back so it can be explored again. All in one fragment pass.
 *
 * Perf: renders only while on screen (frameloop toggles), dpr clamped, lazy
 * three.js, disabled for reduced-motion / small screens (CSS fallback shows).
 */

const MAX = 8;

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uRes;
  uniform vec3 uRipples[${MAX}];
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

  vec3 afterColor(vec2 uv, float t){
    // finished pool — bright, clear, alive with caustic light
    float c = caustic(uv * 2.4, t);
    c = pow(max(c, 0.0), 2.0) * 0.9;
    vec3 col = mix(vec3(0.09, 0.24, 0.33), vec3(0.17, 0.44, 0.58), clamp(uv.y * 0.7 + 0.16, 0.0, 1.0));
    col += vec3(0.64, 0.82, 0.96) * c * 0.5;
    return col;
  }
  vec3 beforeColor(vec2 uv, float t){
    // neglected pool water — dull green, gently alive, faded tiles beneath
    float m = caustic(uv * 1.5, t * 0.5);
    vec3 base = mix(vec3(0.17, 0.26, 0.22), vec3(0.10, 0.17, 0.16), clamp(uv.y, 0.0, 1.0));
    base += vec3(0.09, 0.13, 0.09) * m * 0.5;
    vec2 g = abs(fract(uv * 10.0) - 0.5);
    float grid = smoothstep(0.47, 0.5, max(g.x, g.y));
    base = mix(base, base * 0.85, grid * 0.28);   // tiles, barely there
    base *= 0.9 + 0.12 * noise(uv * 4.0 + t * 0.08);
    return base;
  }

  void main(){
    float aspect = uRes.x / max(uRes.y, 1.0);
    vec2 uv = vUv;
    vec2 auv = vec2(uv.x * aspect, uv.y);
    vec2 am = vec2(uMouse.x * aspect, uMouse.y);

    vec2 distort = vec2(0.0);
    float reveal = 0.0;

    // cursor clarity — new water follows the finger
    float dc = distance(auv, am);
    reveal = max(reveal, smoothstep(0.34, 0.07, dc));
    distort += (auv - am) / max(dc, 0.001) * sin(dc * 24.0 - uTime * 3.0) * exp(-dc * 8.0) * 0.007;

    // click ripples — a stone dropped in water
    for (int i = 0; i < ${MAX}; i++){
      vec3 rp = uRipples[i];
      if (rp.z < -50.0) continue;
      float age = uTime - rp.z;
      if (age < 0.0 || age > 4.5) continue;
      vec2 c = vec2(rp.x * aspect, rp.y);
      float d = distance(auv, c);
      float radius = age * 0.62;
      float inside = smoothstep(radius, radius - 0.16, d);
      float heal = exp(-age * 0.38);
      reveal = max(reveal, inside * heal);
      float ring = exp(-abs(d - radius) * 8.0) * heal;
      distort += (auv - c) / max(d, 0.001) * ring * 0.038;
    }

    reveal = clamp(reveal, 0.0, 1.0);
    vec2 ruv = uv + distort;

    vec3 col = mix(beforeColor(ruv, uTime), afterColor(ruv, uTime * 0.14), reveal);
    // a bright glint rides the boundary where old meets new
    col += vec3(0.64, 0.82, 0.96) * smoothstep(0.32, 0.5, reveal) * (1.0 - smoothstep(0.5, 0.68, reveal)) * 0.22;
    col *= 1.0 - length(vUv - 0.5) * 0.32;

    gl_FragColor = vec4(col, 1.0);
  }
`;

type Pointer = { x: number; y: number };

function RippleMesh({
  pointer,
  clicks,
}: {
  pointer: React.RefObject<Pointer>;
  clicks: React.RefObject<Pointer[]>;
}) {
  const smoothed = useRef(new THREE.Vector2(0.5, 0.5));
  const head = useRef(0);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uRes: { value: new THREE.Vector2(1, 1) },
      uRipples: {
        value: Array.from({ length: MAX }, () => new THREE.Vector3(0, 0, -100)),
      },
    }),
    [],
  );

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
    const p = pointer.current;
    if (p) {
      smoothed.current.lerp({ x: p.x, y: p.y } as THREE.Vector2, 0.12);
      uniforms.uMouse.value.copy(smoothed.current);
    }
    uniforms.uRes.value.set(state.size.width, state.size.height);

    const q = clicks.current;
    while (q && q.length) {
      const c = q.shift()!;
      uniforms.uRipples.value[head.current].set(c.x, c.y, state.clock.elapsedTime);
      head.current = (head.current + 1) % MAX;
    }
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

export function RippleReveal() {
  const [enabled, setEnabled] = useState(false);
  const [inView, setInView] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const pointer = useRef<Pointer>({ x: 0.5, y: 0.5 });
  const clicks = useRef<Pointer[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.matchMedia('(max-width: 767px)').matches;
    setEnabled(!reduce && !small);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = wrap.current?.parentElement;
    if (!el) return;

    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.05,
    });
    io.observe(el);

    const norm = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      return { x: (e.clientX - r.left) / r.width, y: 1 - (e.clientY - r.top) / r.height };
    };
    const move = (e: PointerEvent) => {
      pointer.current = norm(e);
    };
    const down = (e: PointerEvent) => {
      clicks.current.push(norm(e));
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerdown', down);

    return () => {
      io.disconnect();
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerdown', down);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={wrap} className="absolute inset-0 z-[1]">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={inView ? 'always' : 'never'}
        gl={{ antialias: false, powerPreference: 'default' }}
      >
        <RippleMesh pointer={pointer} clicks={clicks} />
      </Canvas>
    </div>
  );
}
