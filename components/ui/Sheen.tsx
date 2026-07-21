'use client';

import { useEffect, useRef } from 'react';

/**
 * A soft glass reflection that follows the cursor across its parent — light on
 * water. Drop into any `relative` container. Pure CSS paint (a repositioned
 * radial gradient + opacity), pointer updates throttled to one per frame, so it
 * costs almost nothing and never blocks clicks.
 */
export function Sheen({ tint = 'light' }: { tint?: 'light' | 'steel' }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    if (window.matchMedia('(pointer: coarse)').matches) return; // touch: no hover

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--sx', `${x}%`);
        el.style.setProperty('--sy', `${y}%`);
      });
    };
    const enter = () => el.style.setProperty('--so', '1');
    const leave = () => el.style.setProperty('--so', '0');

    parent.addEventListener('pointermove', onMove);
    parent.addEventListener('pointerenter', enter);
    parent.addEventListener('pointerleave', leave);
    return () => {
      parent.removeEventListener('pointermove', onMove);
      parent.removeEventListener('pointerenter', enter);
      parent.removeEventListener('pointerleave', leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const color =
    tint === 'steel' ? 'rgba(130,175,216,0.22)' : 'rgba(255,255,255,0.16)';

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[var(--so,0)] transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        background: `radial-gradient(circle at var(--sx,50%) var(--sy,50%), ${color}, transparent 42%)`,
      }}
    />
  );
}
