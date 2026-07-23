'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
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
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      gsap.ticker.remove(raf);
    };
  }, []);

  // On every route change, land at the top of the new page. Desktop Lenis
  // keeps its own internal target; mobile native scroll gets nudged back by
  // the closing menu, Next's own scroll restoration, or the tall new page
  // settling its height a beat later — any of which can fire AFTER a single
  // reset. So reset every scroller (Lenis + window + document) immediately and
  // again across a short window (next frame, 80ms, 250ms) to outlast whatever
  // tries to restore the old position, then recompute the triggers.
  useEffect(() => {
    const jump = () => {
      lenisRef.current?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    jump();
    const raf = requestAnimationFrame(jump);
    const t1 = setTimeout(jump, 80);
    const t2 = setTimeout(() => {
      jump();
      ScrollTrigger.refresh();
    }, 250);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  return <>{children}</>;
}
