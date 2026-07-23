'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { isGoogleChrome } from '@/lib/isChrome';

/**
 * Scroll strategy, tuned per device — one clock shared with ScrollTrigger so
 * scrubbed timelines never drift. Reduced-motion opts out of everything.
 *
 *  • Touch (phones/tablets): NO Lenis (it lags on touch). Instead GSAP takes
 *    over the scroll — `normalizeScroll` + `ignoreMobileResize` are the official
 *    fix for pinned sections jumping/juddering when the mobile URL bar shows or
 *    hides, the header flicker, and the momentum "snap to bottom".
 *  • Desktop Google Chrome: native scroll (Lenis stutters in Chrome with this
 *    page's fixed/backdrop/pinned layers).
 *  • Desktop, other engines: Lenis smooth scroll.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const coarse = window.matchMedia('(pointer: coarse)').matches;

    if (coarse) {
      ScrollTrigger.config({ ignoreMobileResize: true });
      const normalizer = ScrollTrigger.normalizeScroll(true);
      return () => {
        normalizer?.kill();
        ScrollTrigger.normalizeScroll(false);
      };
    }

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
