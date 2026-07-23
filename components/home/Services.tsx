'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { Frame } from '@/components/ui/Frame';
import { Eyebrow } from '@/components/ui/Eyebrow';

type Item = { no: string; name: string; desc: string };

/**
 * Pinned takeover — Apple-style. The frame holds while three services cross-fade
 * through it, one owning the screen at a time. Pinning is earned here: each
 * discipline gets the whole viewport, not a card in a row.
 */
export function Services() {
  const t = useTranslations('services');
  const items = t.raw('items') as Item[];
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // ── Desktop: the Apple-style pinned cross-fade takeover. The frame holds
      // while the three services fade through it, one owning the screen. ──────
      mm.add('(min-width: 901px)', () => {
        const panels = gsap.utils.toArray<HTMLElement>('[data-panel]', root.current);
        // Cross-fade in place: every panel sits at the exact same spot (no
        // vertical drift), so the cards never appear scattered or overlapping —
        // only opacity and a whisper of scale change between them.
        gsap.set(panels, { autoAlpha: 0, scale: 1.02 });
        gsap.set(panels[0], { autoAlpha: 1, scale: 1 });

        const PIN = panels.length * 58; // vh of scroll for the whole sequence

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=' + PIN + '%',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        panels.forEach((panel, i) => {
          if (i === 0) return;
          const at = (i - 1) * 0.9 + 0.3;
          tl.to(
            panels[i - 1],
            { autoAlpha: 0, scale: 0.99, ease: 'power2.in', duration: 0.35 },
            at,
          ).fromTo(
            panel,
            { autoAlpha: 0, scale: 1.02 },
            { autoAlpha: 1, scale: 1, ease: 'power2.out', duration: 0.45 },
            at + 0.3,
          );
        });

        gsap.fromTo(
          '[data-progress]',
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: root.current,
              start: 'top top',
              end: '+=' + PIN + '%',
              scrub: true,
            },
          },
        );
      });

      // ── Mobile: NO pin, NO scrub. Pinning + scrubbed cross-fades snap and
      // stutter on phones. Instead the three cards simply stack and flow, and
      // each fades gently up as it scrolls into view — buttery on native scroll. ─
      mm.add('(max-width: 900px)', () => {
        const panels = gsap.utils.toArray<HTMLElement>('[data-panel]', root.current);
        gsap.set(panels, { autoAlpha: 1, yPercent: 0, scale: 1 });
        panels.forEach((panel) => {
          gsap.from(panel, {
            opacity: 0,
            y: 40,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: panel, start: 'top 82%' },
          });
        });
      });
    },
    { scope: root },
  );

  return (
    <section data-nav-theme="dark" className="bg-navy">
      <div ref={root} className="relative overflow-hidden min-[901px]:h-[100svh]">
        {/* section background — a photo held behind the panels, darkened so the
            navy stays and the content reads. */}
        <Image
          src="/services-bg.webp"
          alt=""
          fill
          sizes="100vw"
          // Desktop only: while this section is pinned, mobile browsers re-raster
          // the whole fixed layer every scroll frame — a full-bleed photo in it is
          // the biggest cost and the main source of the phone stutter. On mobile
          // the navy gradient below carries the mood instead; the cards keep their
          // own photos and the animation is unchanged.
          className="hidden object-cover min-[901px]:block"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(28,38,52,0.92)_0%,rgba(28,38,52,0.74)_52%,rgba(28,38,52,0.6)_100%)]" />

        {/* persistent header — desktop only; on a tall phone the vertically
            centred card content rises into this top row and the two collide, so
            it's hidden on mobile (each card already carries its own marker). */}
        <div className="absolute inset-x-0 top-0 z-10 hidden items-center justify-between px-[clamp(1.5rem,6vw,8rem)] pt-[clamp(5.5rem,11vh,8rem)] min-[901px]:flex">
          <Eyebrow index="II" tone="light">{t('eyebrow')}</Eyebrow>
          <span className="hidden max-w-[16rem] text-right font-display text-[1.25rem] text-canvas/70 md:block">
            {t('title')}
          </span>
        </div>

        {/* panels */}
        {items.map((item, i) => (
          <div
            key={item.no}
            data-panel
            className="flex items-center px-[clamp(1.5rem,6vw,8rem)] py-[clamp(3.5rem,9vh,5rem)] min-[901px]:absolute min-[901px]:inset-0 min-[901px]:py-0"
          >
            <div className="mx-auto grid w-full max-w-[62rem] items-center gap-[clamp(1.25rem,3vw,3rem)] md:grid-cols-2">
              <div className="text-center">
                <span className="mb-3 block font-mono text-label uppercase text-steel md:mb-6">
                  {item.no}
                </span>
                <h3 className="mb-4 font-display text-display text-canvas md:mb-7">
                  {item.name}
                </h3>
                <p className="mx-auto max-w-[30rem] text-lead font-light text-canvas/70">
                  {item.desc}
                </p>
              </div>
              <Frame
                variant={i === 1 ? 'stone' : 'water'}
                src={
                  ['/havuz-insaati-v2.webp', '/renovasyon-v2.webp', '/havuz-bakimi-v2.webp'][i]
                }
                label={item.name}
                alt={item.name}
                className="aspect-[4/5] max-h-[42vh] w-full max-w-[30rem] justify-self-center shadow-none md:aspect-[3/4] md:max-h-none md:shadow-[0_48px_90px_-28px_rgba(0,0,0,0.75)]"
              />
            </div>
          </div>
        ))}

        {/* progress bar — desktop only (tracks the pinned scrub) */}
        <div className="absolute inset-x-[clamp(1.5rem,6vw,8rem)] bottom-[clamp(2.5rem,6vh,4rem)] hidden h-px bg-canvas/15 min-[901px]:block">
          <div data-progress className="h-full w-full origin-left scale-x-0 bg-steel" />
        </div>
      </div>
    </section>
  );
}
