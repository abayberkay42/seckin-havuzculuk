'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { isGoogleChrome } from '@/lib/isChrome';

/**
 * Lenis smooth scroll, driven by GSAP's ticker so Lenis and ScrollTrigger share
 * one clock — the sync that keeps scrubbed timelines from drifting. Disabled for
 * users who ask for reduced motion; native scrolling then remains untouched.
 *
 * Also disabled in Google Chrome: Lenis scrolls by transforming the page every
 * frame, and Chrome's compositor stutters badly on that with this page's layers
 * (fixed nav, full-bleed images, pinned sections) while Firefox/Safari/Edge stay
 * smooth. Chrome's native scroll is buttery, and ScrollTrigger works fine on it,
 * so Chrome just uses native scrolling.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced || isGoogleChrome()) return;

    const lenis = new Lenis({
      lerp: 0.09, // slow, luxurious glide — water, not a scrollbar
      smoothWheel: true,
    });

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
