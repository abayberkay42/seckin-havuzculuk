'use client';

import { useRef, type ReactNode } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';

/**
 * Restrained card depth. As the cursor crosses a card it tilts a degree or two
 * toward the pointer and lifts a few pixels — the plane catching the light like
 * glass over water. Deliberately tiny (max ~2.2°): architectural, not playful.
 * Pairs with <Sheen> (cursor light) for full "glass movement + mouse proximity".
 *
 * quickTo keeps it on the compositor; disabled for coarse pointers and honoured
 * by reduced-motion (the global transition reset flattens it). Never blocks
 * clicks — it only wraps the visual.
 */
export function Tilt({
  children,
  className = '',
  max = 2.2,
  lift = 6,
}: {
  children: ReactNode;
  className?: string;
  /** Peak tilt in degrees. Keep small — this is a whisper of depth. */
  max?: number;
  /** Lift toward the viewer in px on hover. */
  lift?: number;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const w = wrap.current;
      const el = inner.current;
      if (!w || !el) return;
      if (window.matchMedia('(pointer: coarse)').matches) return;

      // GSAP's 3D rotation props are rotationX / rotationY (not rotateX/rotateY).
      const rx = gsap.quickTo(el, 'rotationX', { duration: 0.7, ease: 'power3.out' });
      const ry = gsap.quickTo(el, 'rotationY', { duration: 0.7, ease: 'power3.out' });
      const ty = gsap.quickTo(el, 'y', { duration: 0.7, ease: 'power3.out' });

      const move = (e: PointerEvent) => {
        const r = w.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5; // -0.5 … 0.5
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry(px * max * 2);
        rx(-py * max * 2);
        ty(-lift);
      };
      const leave = () => {
        rx(0);
        ry(0);
        ty(0);
      };

      w.addEventListener('pointermove', move);
      w.addEventListener('pointerleave', leave);
      return () => {
        w.removeEventListener('pointermove', move);
        w.removeEventListener('pointerleave', leave);
      };
    },
    { scope: wrap },
  );

  return (
    <div ref={wrap} className={className} style={{ perspective: '1200px' }}>
      {/* height:100% resolves to `auto` when the wrapper has no fixed height
          (content-sized cards) and fills the box when it does (aspect cards),
          so this one primitive works for both without collapsing. */}
      <div
        ref={inner}
        style={{
          height: '100%',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
