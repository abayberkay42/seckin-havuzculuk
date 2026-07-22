'use client';

import { useEffect, useRef } from 'react';

/**
 * A single water ring on every click / tap — the "drop breaks the surface" cue,
 * without the cost of the old fullscreen WebGL water sheet (which re-composited
 * the whole viewport every frame and crawled in Chrome).
 *
 * Each press spawns ONE short-lived <span> at the pointer that expands and fades
 * on a pure transform+opacity CSS animation (GPU compositor only), then removes
 * itself. Nothing renders between clicks — idle cost is exactly zero. Works the
 * same on desktop and touch; honours reduced-motion.
 */
export function Ripple() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = layer.current;
    if (!el) return;

    const onDown = (e: PointerEvent) => {
      const drop = document.createElement('span');
      drop.className = 'ripple-drop';
      drop.style.left = `${e.clientX}px`;
      drop.style.top = `${e.clientY}px`;
      drop.addEventListener('animationend', () => drop.remove(), { once: true });
      el.appendChild(drop);
    };

    window.addEventListener('pointerdown', onDown, { passive: true });
    return () => window.removeEventListener('pointerdown', onDown);
  }, []);

  return (
    <div
      ref={layer}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[35] overflow-hidden"
    />
  );
}
