'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { isGoogleChrome } from '@/lib/isChrome';

/**
 * Scroll strategy, tuned per device. Reduced-motion opts out of everything.
 *
 *  • `ignoreMobileResize` (all): stop ScrollTrigger from refreshing (and the
 *    pinned sections from jumping) when the mobile URL bar shows/hides. This is
 *    the SAFE half of the mobile fix — it never touches how scrolling itself
 *    feels, unlike normalizeScroll, which hijacked touch and made iOS almost
 *    impossible to scroll.
 *  • Desktop Google Chrome: native scroll (Lenis stutters in Chrome here).
 *  • Everything else (incl. iOS Safari): Lenis. On touch Lenis leaves the native
 *    momentum scroll alone (it only smooths the wheel), so phones scroll normally.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    ScrollTrigger.config({ ignoreMobileResize: true });

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
