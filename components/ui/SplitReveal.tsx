'use client';

import { type ElementType, type ReactNode, useRef } from 'react';
import { gsap, SplitText, useGSAP } from '@/lib/gsap';

/**
 * Heading reveal with real craft: each line rises from behind its own mask.
 * The SplitText `mask` option supplies the clipping wrapper. Runs before paint
 * (useGSAP → layout effect) so there is no flash. Skipped for reduced motion.
 */
export function SplitReveal({
  as: Tag = 'h2',
  className = '',
  children,
  start = 'top 82%',
  delay = 0,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  start?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const split = new SplitText(el, { type: 'lines', mask: 'lines' });
      gsap.from(split.lines, {
        yPercent: 115,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.1,
        delay,
        scrollTrigger: { trigger: el, start },
      });
      return () => split.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
