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

// The hero film is scrubbed by scroll. Two engines, chosen by screen:
//
//   Desktop — seek a <video> element (video.currentTime). Buttery on desktop
//             hardware and keeps the full 1080p file.
//
//   Mobile  — draw a pre-decoded WebP frame sequence to a <canvas>. Mobile
//             Safari throttles / ignores rapid video seeks, so a seeked video
//             simply doesn't move on phones; drawing a cached image is instant.
//             (The Apple / Antalya scroll-film technique.)
//
// Only the engine for the current screen loads its assets — desktop never
// fetches the frames, mobile never fetches the video.
const MOBILE = { dir: '/frames-mobile', count: 64, w: 828, h: 468 };

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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(
    () => {
      const mobile = window.matchMedia('(max-width: 900px)').matches;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // `scrub(t)` advances the film to progress t ∈ [0,1]. Each engine wires it
      // to its own medium; `cleanup` tears down any listeners it registered.
      let scrub: (t: number) => void = () => {};
      let cleanup: (() => void) | undefined;

      if (mobile) {
        // ── Mobile: canvas frame sequence ─────────────────────────────────
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d') ?? null;

        if (canvas && ctx) {
          const frames: HTMLImageElement[] = new Array(MOBILE.count);
          let lastDrawn = -1;

          const draw = (img: HTMLImageElement) => {
            const cw = canvas.width;
            const ch = canvas.height;
            const iw = img.naturalWidth || MOBILE.w;
            const ih = img.naturalHeight || MOBILE.h;
            const scale = Math.max(cw / iw, ch / ih);
            const dw = iw * scale;
            const dh = ih * scale;
            ctx.fillStyle = '#0d1f29';
            ctx.fillRect(0, 0, cw, ch);
            ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
          };

          const drawIndex = (index: number) => {
            const i = Math.max(0, Math.min(MOBILE.count - 1, index));
            if (frames[i]) {
              draw(frames[i]);
              lastDrawn = i;
              return;
            }
            for (let d = 1; d < MOBILE.count; d++) {
              if (frames[i - d]) return draw(frames[i - d]);
              if (frames[i + d]) return draw(frames[i + d]);
            }
          };

          const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(window.innerWidth * dpr);
            canvas.height = Math.round(window.innerHeight * dpr);
            if (lastDrawn >= 0 && frames[lastDrawn]) draw(frames[lastDrawn]);
          };
          resize();
          window.addEventListener('resize', resize);

          for (let i = 0; i < MOBILE.count; i++) {
            const img = new window.Image();
            img.src = `${MOBILE.dir}/frame_${String(i + 1).padStart(4, '0')}.webp`;
            img.onload = () => {
              frames[i] = img;
              if (i === 0) {
                draw(img);
                lastDrawn = 0;
                canvas.dataset.ready = 'true';
              } else if (i === lastDrawn + 1) {
                drawIndex(i);
              }
            };
          }

          scrub = (t) => drawIndex(Math.floor(t * (MOBILE.count - 1)));
          cleanup = () => window.removeEventListener('resize', resize);
        }
      } else {
        // ── Desktop: seek the <video> ─────────────────────────────────────
        const video = videoRef.current;
        if (video) {
          if (!video.currentSrc.endsWith('/videos/hero.mp4')) {
            video.src = '/videos/hero.mp4';
            video.load();
          }
          const reveal = () => {
            video.dataset.ready = 'true';
          };
          if (video.readyState >= 2) reveal();
          else video.addEventListener('loadeddata', reveal, { once: true });

          scrub = (t) => {
            if (video.duration && isFinite(video.duration)) {
              video.currentTime = t * video.duration;
            }
          };
        }
      }

      // ── Reduced motion: show everything, park the film on its last frame ──
      if (reduce) {
        gsap.set('[data-hero-navy]', { opacity: 1 });
        gsap.set('[data-hero-content]', { autoAlpha: 1, yPercent: 0 });
        scrub(1);
        return cleanup;
      }

      gsap.set('[data-hero-navy]', { opacity: 0 });
      gsap.set('[data-hero-content]', { autoAlpha: 0, yPercent: 6 });

      // The section is 2 viewports tall; its inner frame is CSS-sticky, so it
      // holds still while a single scrubbed timeline plays:
      //   Phase 1 (0 → 0.7)  — the film scrubs first→last frame; nothing else.
      //   Phase 2 (0.7 → 1)  — the navy atmosphere fades in over the finished
      //                        film and the words surface.
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
        { t: 1, ease: 'none', duration: 0.7, onUpdate: () => scrub(vp.t) },
        0,
      );
      tl.to('[data-hero-navy]', { opacity: 1, ease: 'power2.out', duration: 0.3 }, 0.7);
      tl.to(
        '[data-hero-content]',
        { autoAlpha: 1, yPercent: 0, ease: 'power2.out', duration: 0.28 },
        0.74,
      );

      return cleanup;
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
        {/* poster — instant paint before the film medium is ready */}
        <div
          className="absolute inset-0 bg-deep bg-cover bg-center"
          style={{ backgroundImage: 'url(/videos/hero-poster.jpg)' }}
          aria-hidden="true"
        />

        {/* THE FILM — desktop: a scrubbed <video>; mobile: a scrubbed <canvas>
            frame sequence. Only one is activated per screen (see the effect);
            the other stays hidden and loads nothing. */}
        <video
          ref={videoRef}
          data-ready="false"
          aria-hidden="true"
          className="absolute inset-0 hidden h-full w-full object-cover opacity-0 transition-opacity duration-700 data-[ready=true]:opacity-100 min-[901px]:block"
          poster="/videos/hero-poster.jpg"
          muted
          playsInline
          preload="auto"
          onLoadedData={(e) => {
            e.currentTarget.dataset.ready = 'true';
          }}
        />
        <canvas
          ref={canvasRef}
          data-ready="false"
          aria-hidden="true"
          className="absolute inset-0 block h-full w-full opacity-0 transition-opacity duration-700 data-[ready=true]:opacity-100 min-[901px]:hidden"
        />

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
