'use client';

import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';
import { Button } from '@/components/ui/Button';

type HeroProps = {
  eyebrow: string;
  line1: string;
  line2: string;
  supporting: string;
  ctaPrimary: string;
  ctaSecondary: string;
  scroll: string;
};

export function Hero({
  eyebrow,
  line1,
  line2,
  supporting,
  ctaPrimary,
  ctaSecondary,
  scroll,
}: HeroProps) {
  const root = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);

      // INTRO — content surfaces and settles, like water finding its level.
      gsap.set(q('[data-reveal]'), {
        yPercent: 45,
        opacity: 0,
        filter: 'blur(12px)',
      });
      gsap.to(q('[data-reveal]'), {
        yPercent: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.25,
      });

      // SCROLL-OUT — the hero dissolves into the story. Background drifts up and
      // scales; content lifts and fades. The cream manifesto surfaces beneath
      // with no hard cut. Transform + opacity only, so it stays on the GPU.
      gsap
        .timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
        .to(q('[data-hero-media]'), { yPercent: 14, scale: 1.12, ease: 'none' }, 0)
        .to(
          q('[data-hero-content]'),
          { yPercent: -16, opacity: 0, ease: 'none' },
          0,
        );

      // If a real video is present, scrub its playhead with scroll too.
      const video = videoRef.current;
      if (video) {
        const attach = () => {
          if (!video.duration || !isFinite(video.duration)) return;
          ScrollTrigger.create({
            trigger: root.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
            onUpdate: (self) => {
              video.currentTime = self.progress * video.duration;
            },
          });
        };
        if (video.readyState >= 1) attach();
        else video.addEventListener('loadedmetadata', attach, { once: true });
      }
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-nav-theme="dark"
      className="relative min-h-[100dvh] w-full overflow-hidden bg-deep"
    >
      {/* MEDIA — cinematic background. A living water gradient holds the frame
          until the client's 15–20s video is dropped into /public/videos. */}
      <div
        data-hero-media
        className="absolute inset-0 will-change-transform"
      >
        {/* deep-water base */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_70%_18%,#1d4658_0%,#16303c_45%,#0d1f29_100%)]" />

        {/* ambient sunlight glow — warm, top-right, drifting + breathing.
            Radial gradients are already feathered, so no blur filter is needed —
            animating a 64px blur over a 60vmax element stalls the compositor. */}
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

        {/* the real video, fades in once it can play */}
        <video
          ref={videoRef}
          data-ready="false"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000 data-[ready=true]:opacity-100"
          poster="/videos/hero-poster.jpg"
          muted
          playsInline
          preload="metadata"
          onLoadedData={(e) => {
            e.currentTarget.dataset.ready = 'true';
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* legibility scrim — only the lower-left, so the frame stays open */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(13,31,41,0.72)_0%,transparent_46%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(90%_85%_at_14%_88%,rgba(13,31,41,0.5),transparent_58%)]" />
        {/* soft vignette focuses the shot */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_220px_70px_rgba(9,22,30,0.5)]" />
      </div>

      {/* CONTENT — lower-left, deliberately holds under a third of the frame */}
      <div
        data-hero-content
        className="relative z-10 flex min-h-[100dvh] flex-col justify-end px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(3.5rem,10vh,7rem)] pt-[clamp(7rem,14vh,10rem)]"
      >
        <div className="w-full max-w-[80rem]">
          <span
            data-reveal
            className="mb-7 block font-mono text-label uppercase text-aqua/80"
          >
            {eyebrow}
          </span>

          <h1 className="font-display text-hero text-canvas">
            <span data-reveal className="block">
              {line1}
            </span>
            <span data-reveal className="block">
              {line2}
            </span>
          </h1>

          <p
            data-reveal
            className="mt-8 max-w-[34rem] text-lead font-light text-canvas/75"
          >
            {supporting}
          </p>

          <div data-reveal className="mt-11 flex flex-wrap items-center gap-5">
            <Button variant="primary" tone="light" href="/contact">
              {ctaPrimary}
            </Button>
            <Button variant="secondary" tone="light" href="/projects">
              {ctaSecondary}
            </Button>
          </div>
        </div>
      </div>

      {/* SCROLL CUE — a waterline that drips */}
      <div
        data-reveal
        className="absolute bottom-[clamp(1.5rem,4vh,2.5rem)] right-[clamp(1.5rem,6vw,8rem)] z-10 hidden flex-col items-center gap-3 sm:flex"
      >
        <span className="font-mono text-label uppercase text-canvas/55 [writing-mode:vertical-rl]">
          {scroll}
        </span>
        <span className="relative block h-16 w-px overflow-hidden bg-canvas/20">
          <span className="animate-scroll-drop absolute inset-x-0 top-0 block h-1/2 bg-aqua" />
        </span>
      </div>
    </section>
  );
}
