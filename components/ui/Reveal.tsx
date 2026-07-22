'use client';

import { type ElementType, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { reveal } from '@/lib/motion';

/**
 * The opacity rhythm — content surfaces from just below as it enters view, on
 * the one water easing. A drop-in for blocks that aren't headings (headings use
 * <SplitReveal> for the line-mask treatment). Motion honours reduced-motion, so
 * this quietly does nothing for users who ask for stillness.
 */
export function Reveal({
  children,
  as = 'div',
  y = 44,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  as?: ElementType;
  /** Rise distance in px — smaller for dense items, larger for feature blocks. */
  y?: number;
  delay?: number;
  className?: string;
}) {
  const M = motion[as as keyof typeof motion] as typeof motion.div;
  return (
    <M className={className} {...reveal(y, delay)}>
      {children}
    </M>
  );
}
