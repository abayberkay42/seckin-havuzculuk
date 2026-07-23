'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { Button } from '@/components/ui/Button';

type HeroProps = {
  eyebrow: string;
  line1: string;
  line2: string;
  supporting: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export function Hero({
  eyebrow,
  line1,
  line2,
  supporting,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  const root = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      // Reveal the video once it has a frame (imperative too, so a cached/fast
      // video that fired `loadeddata` before React attached still shows).
      const video = videoRef.current;
      if (video) {
        const reveal = () => {
          video.dataset.ready = 'true';
        };
        if (video.readyState >= 2) reveal();
        else video.addEventListener('loadeddata', reveal, { once: true });
      }

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        gsap.set('[data-hero-navy]', { opacity: 1 });
        gsap.set('[data-hero-content]', { autoAlpha: 1, yPercent: 0 });
        return;
      }

      gsap.set('[data-hero-navy]', { opacity: 0 });
      gsap.set('[data-hero-content]', { autoAlpha: 0, yPercent: 6 });

      // The section is 2 viewports tall; its inner frame is CSS-sticky, so it
      // holds still while a single scrubbed timeline plays:
      //   Phase 1 (0 → 0.7)  — the video scrubs from first to last frame while
      //                        the page stays put; nothing else is visible.
      //   Phase 2 (0.7 → 1)  — the navy atmosphere fades in over the finished
      //                        video and the words surface.
      // Only past that does the pin release and the page scroll on.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      const vp = { t: 0 };
      tl.to(
        vp,
        {
          t: 1,
          ease: 'none',
          duration: 0.7,
          onUpdate: () => {
            const v = videoRef.current;
            if (v && v.duration && isFinite(v.duration)) {
              v.currentTime = vp.t * v.duration;
            }
          },
        },
        0,
      );

      tl.to('[data-hero-navy]', { opacity: 1, ease: 'power2.out', duration: 0.3 }, 0.7);
      tl.to(
        '[data-hero-content]',
        { autoAlpha: 1, yPercent: 0, ease: 'power2.out', duration: 0.28 },
        0.74,
      );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-nav-theme="dark"
      className="relative h-[200svh] w-full bg-deep"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* THE FILM — plays through as you scroll (phase 1) */}
        <video
          ref={videoRef}
          data-ready="false"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 data-[ready=true]:opacity-100"
          poster="/videos/hero-poster.jpg"
          muted
          playsInline
          preload="auto"
          onLoadedData={(e) => {
            e.currentTarget.dataset.ready = 'true';
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* NAVY ATMOSPHERE — hidden until the film finishes, then fades in over
            it (phase 2). The living water gradient the site opens on. */}
        <div data-hero-navy className="absolute inset-0 z-[1] opacity-0">
          {/* deep-water base */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_70%_18%,#1d4658_0%,#16303c_45%,#0d1f29_100%)]" />

          {/* ambient sunlight glow — warm, top-right, drifting + breathing */}
          <div className="absolute -top-1/4 right-[6%] h-[64vmax] w-[64vmax] animate-water-drift">
            <div className="animate-glow-breathe h-full w-full rounded-full bg-[radial-gradient(closest-side,rgba(200,183,158,0.32),transparent_72%)]" />
          </div>
          {/* caustic light glow — steel/aqua, lower-left, drifting out of phase */}
          <div
            className="absolute -bottom-1/3 left-[-6%] h-[58vmax] w-[58vmax] animate-water-drift"
            style={{ animationDelay: '-7s' }}
          >
            <div className="animate-glow-breathe h-full w-full rounded-full bg-[radial-gradient(closest-side,rgba(130,175,216,0.24),transparent_72%)]" />
          </div>

          {/* legibility scrims + vignette (only matter once the words are up) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(13,31,41,0.72)_0%,transparent_46%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(90%_85%_at_14%_88%,rgba(13,31,41,0.5),transparent_58%)]" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_220px_70px_rgba(9,22,30,0.5)]" />
        </div>

        {/* CONTENT — surfaces with the navy (phase 2) */}
        <div
          data-hero-content
          className="relative z-10 flex h-full flex-col items-center justify-center px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(3.5rem,10vh,7rem)] pt-[clamp(7rem,14vh,10rem)] text-center"
        >
          <div className="w-full max-w-[80rem]">
            <span className="mb-7 block font-mono text-label uppercase text-aqua/80">
              {eyebrow}
            </span>

            <h1 className="font-display text-hero text-canvas">
              <span className="block">{line1}</span>
              <span className="block">{line2}</span>
            </h1>

            <p className="mx-auto mt-8 max-w-[34rem] text-lead font-light text-canvas/75">
              {supporting}
            </p>

            <div className="mt-11 flex flex-wrap items-center justify-center gap-5">
              <Button variant="primary" tone="light" href="/contact">
                {ctaPrimary}
              </Button>
              <Button variant="secondary" tone="light" href="/projects">
                {ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
