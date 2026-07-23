'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap, ScrollTrigger } from '@/lib/gsap';

/**
 * One simple, consistent scroll strategy:
 *
 *  • Desktop (fine pointer, every browser): Lenis smooth scroll, driven by GSAP's
 *    ticker so Lenis and ScrollTrigger share one clock — scrubbed/pinned
 *    timelines stay glued to the scroll instead of stepping. This is the canonical
 *    smooth-scroll + ScrollTrigger pairing.
 *  • Touch (phones/tablets): plain native momentum scrolling. No Lenis, no
 *    normalizeScroll, no ignoreMobileResize — those all fought the OS and caused
 *    the jumps/judder. There are no pinned sections on mobile anymore, so native
 *    scroll is smooth on its own.
 *  • Reduced-motion: native scrolling, untouched.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

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
