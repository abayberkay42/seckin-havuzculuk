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

// The hero film is scrubbed by scroll as a pre-decoded WebP frame sequence
// drawn to a <canvas> — the Apple / Antalya scroll-film technique. We do NOT
// seek a <video>: a large mp4 stalls when you scrub past the part that isn't
// buffered yet, so on the first visit the film sat motionless until the whole
// file cached (a refresh "fixed" it). Frames stream in independently and we
// always draw the nearest loaded one, so the film moves from the very first
// frame, on first load, with no stall — on both desktop and mobile.
//
// Two frame sets, chosen by screen; each screen fetches only its own:
//   Desktop — landscape 1440-wide frames (matches the wide viewport).
//   Mobile  — a lighter portrait cut (fewer, smaller frames) — DO NOT CHANGE,
//             it's tuned and already smooth on phones.
const DESKTOP = { dir: '/frames-desktop', count: 72, w: 1912, h: 1080 };
const MOBILE = { dir: '/frames-mobile', count: 64, w: 608, h: 1080 };

export function Hero({
  eyebrow,
  line1,
  line2,
  supporting,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  const root = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(
    () => {
      const mobile = window.matchMedia('(max-width: 900px)').matches;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const set = mobile ? MOBILE : DESKTOP;

      // `scrub(t)` advances the film to progress t ∈ [0,1] by drawing the frame
      // at that point; `cleanup` tears down any listeners it registered. Same
      // canvas engine for both screens — only the frame `set` differs, so the
      // mobile behaviour is byte-for-byte what it was.
      let scrub: (t: number) => void = () => {};
      let cleanup: (() => void) | undefined;

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d') ?? null;

      if (canvas && ctx) {
        const frames: HTMLImageElement[] = new Array(set.count);
        let lastDrawn = -1;
        // the frame the scroll position currently wants (may not be loaded yet)
        let wanted = 0;

        const draw = (img: HTMLImageElement) => {
          const cw = canvas.width;
          const ch = canvas.height;
          const iw = img.naturalWidth || set.w;
          const ih = img.naturalHeight || set.h;
          const scale = Math.max(cw / iw, ch / ih);
          const dw = iw * scale;
          const dh = ih * scale;
          ctx.fillStyle = '#0d1f29';
          ctx.fillRect(0, 0, cw, ch);
          ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
        };

        // Draw the requested frame, or the nearest already-loaded one, so a
        // fast scrub over not-yet-downloaded frames never stalls or blanks.
        const drawIndex = (index: number) => {
          const i = Math.max(0, Math.min(set.count - 1, index));
          wanted = i;
          if (frames[i]) {
            draw(frames[i]);
            lastDrawn = i;
            return;
          }
          for (let d = 1; d < set.count; d++) {
            if (frames[i - d]) return draw(frames[i - d]);
            if (frames[i + d]) return draw(frames[i + d]);
          }
        };

        const resize = () => {
          // Back the canvas at the device's true pixel density (capped at 3)
          // so it draws at full resolution — a lower cap would downscale it.
          const dpr = Math.min(window.devicePixelRatio || 1, 3);
          canvas.width = Math.round(window.innerWidth * dpr);
          canvas.height = Math.round(window.innerHeight * dpr);
          if (lastDrawn >= 0 && frames[lastDrawn]) draw(frames[lastDrawn]);
        };
        resize();
        window.addEventListener('resize', resize);

        for (let i = 0; i < set.count; i++) {
          const img = new window.Image();
          img.src = `${set.dir}/frame_${String(i + 1).padStart(4, '0')}.webp`;
          img.onload = () => {
            frames[i] = img;
            if (i === 0 && canvas.dataset.ready !== 'true') {
              draw(img);
              lastDrawn = 0;
              canvas.dataset.ready = 'true';
            }
            // Only refresh the frame the scroll position is actually asking for
            // right now — never walk forward frame-by-frame as they load. That
            // frame-walk made the film play by itself when a remount (e.g. a
            // language switch) loaded all frames instantly from cache.
            if (i === wanted) drawIndex(wanted);
          };
        }

        scrub = (t) => drawIndex(Math.floor(t * (set.count - 1)));
        cleanup = () => window.removeEventListener('resize', resize);
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

        {/* THE FILM — a scrubbed WebP frame sequence drawn to canvas (phase 1),
            on every screen. The frame set is chosen by viewport in the effect. */}
        <canvas
          ref={canvasRef}
          data-ready="false"
          aria-hidden="true"
          className="absolute inset-0 block h-full w-full opacity-0 transition-opacity duration-700 data-[ready=true]:opacity-100"
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

            {/* Sized fluidly so the longer line ("Seçkin yaşam alanlarına,")
                always fits on ONE line — the headline stays exactly two lines,
                never wrapping to three, from phones up to desktop. */}
            <h1 className="font-display font-[380] leading-[0.98] tracking-[-0.028em] text-[clamp(1.6rem,7.4vw,9rem)] text-canvas">
              <span className="block whitespace-nowrap">{line1}</span>
              <span className="block whitespace-nowrap">{line2}</span>
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
