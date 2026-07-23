'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { isGoogleChrome } from '@/lib/isChrome';

/**
 * Scroll strategy, tuned per device. Reduced-motion opts out of everything.
 *
 *  • Desktop Google Chrome: native scroll (Lenis stutters in Chrome here).
 *  • Everything else (incl. iOS Safari): Lenis. On touch Lenis leaves the native
 *    momentum scroll alone (it only smooths the wheel), so phones scroll normally.
 *
 * Note: no `ignoreMobileResize` / `normalizeScroll` — both were tried and made
 * the pinned card section snap/jump (or, for normalizeScroll, broke iOS touch
 * scrolling entirely). Letting ScrollTrigger refresh normally is what kept the
 * pins smooth on iOS.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (isGoogleChrome()) return;

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  return <>{children}</>;
}
