import type { Variants, Transition } from 'motion/react';

/**
 * The motion system — one rhythm for the whole site.
 *
 * Everything that moves reads from here so the experience feels authored by a
 * single hand: water finding its level. Restraint is the rule — soft rise, soft
 * fade, never a bounce, never a spin. GSAP-driven pieces share the same easing
 * via WATER_EASE in `lib/gsap.ts`; this file is the `motion/react` half.
 */

/** The one easing, as a cubic-bezier array for motion/react. Mirrors --ease-water. */
export const EASE_WATER = [0.16, 1, 0.3, 1] as const;

/** Three tempos, in seconds. Mirror --dur-quick / --dur-base / --dur-slow. */
export const DUR = { quick: 0.3, base: 0.55, slow: 0.9 } as const;

/** The canonical reveal transition — deliberate, calm. */
export const revealTransition: Transition = {
  duration: DUR.slow,
  ease: EASE_WATER,
};

/**
 * Reveal-on-scroll: content surfaces from just below, gaining presence. `y` is
 * the rise distance in px (smaller for dense items, larger for hero blocks).
 */
export function reveal(y = 44, delay = 0) {
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-10%' },
    transition: { ...revealTransition, delay },
  } as const;
}

/** Parent that staggers `data`-driven children into view, one after another. */
export function revealStagger(stagger = 0.1): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };
}

/** Child variant to pair with `revealStagger`. */
export function revealChild(y = 40): Variants {
  return {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: revealTransition },
  };
}

/** Shared layout transition for filtered grids so nothing snaps. */
export const layoutTransition: Transition = {
  duration: DUR.base,
  ease: EASE_WATER,
};
