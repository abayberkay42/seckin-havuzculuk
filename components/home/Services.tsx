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
      const panels = gsap.utils.toArray<HTMLElement>('[data-panel]', root.current);
      gsap.set(panels, { autoAlpha: 0, yPercent: 6 });
      gsap.set(panels[0], { autoAlpha: 1, yPercent: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: '+=' + panels.length * 90 + '%',
          pin: true,
          scrub: 1,
        },
      });

      // Cleaner hand-off: the outgoing panel leaves first (down + shrink), the
      // incoming arrives a beat later (up + settle) — so they never sit at 50%
      // opacity together and ghost.
      panels.forEach((panel, i) => {
        if (i === 0) return;
        tl.to(
          panels[i - 1],
          { autoAlpha: 0, yPercent: -8, scale: 0.97, ease: 'power2.in', duration: 0.5 },
          i,
        ).fromTo(
          panel,
          { autoAlpha: 0, yPercent: 12, scale: 1.03 },
          { autoAlpha: 1, yPercent: 0, scale: 1, ease: 'power3.out', duration: 0.6 },
          i + 0.4,
        );
      });

      // progress bar tracks the whole pinned journey
      gsap.fromTo(
        '[data-progress]',
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=' + panels.length * 90 + '%',
            scrub: true,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section data-nav-theme="dark" className="bg-navy">
      <div ref={root} className="relative h-[100dvh] overflow-hidden">
        {/* section background — a photo held behind the panels, darkened so the
            navy stays and the content reads. */}
        <Image
          src="/services-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(28,38,52,0.92)_0%,rgba(28,38,52,0.74)_52%,rgba(28,38,52,0.6)_100%)]" />

        {/* persistent header */}
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-[clamp(1.5rem,6vw,8rem)] pt-[clamp(5.5rem,11vh,8rem)]">
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
            className="absolute inset-0 flex items-center px-[clamp(1.5rem,6vw,8rem)]"
          >
            <div className="mx-auto grid w-full max-w-[62rem] items-center gap-[clamp(1.5rem,3vw,3rem)] md:grid-cols-2">
              <div className="text-center">
                <span className="mb-6 block font-mono text-label uppercase text-steel">
                  {item.no}
                </span>
                <h3 className="mb-7 font-display text-display text-canvas">
                  {item.name}
                </h3>
                <p className="mx-auto max-w-[30rem] text-lead font-light text-canvas/70">
                  {item.desc}
                </p>
              </div>
              <Frame
                variant={i === 1 ? 'stone' : 'water'}
                src={
                  ['/havuz-insaati-v2.webp', '/renovasyon-v2.webp', '/havuz-bakimi.webp'][i]
                }
                label={item.name}
                alt={item.name}
                className="aspect-[4/5] w-full max-w-[30rem] justify-self-center shadow-[0_48px_90px_-28px_rgba(0,0,0,0.75)] md:aspect-[3/4]"
              />
            </div>
          </div>
        ))}

        {/* progress bar */}
        <div className="absolute inset-x-[clamp(1.5rem,6vw,8rem)] bottom-[clamp(2.5rem,6vh,4rem)] h-px bg-canvas/15">
          <div data-progress className="h-full w-full origin-left scale-x-0 bg-steel" />
        </div>
      </div>
    </section>
  );
}
