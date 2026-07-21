'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { Frame } from '@/components/ui/Frame';

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

      panels.forEach((panel, i) => {
        if (i === 0) return;
        tl.to(panels[i - 1], { autoAlpha: 0, yPercent: -6, ease: 'power2.inOut', duration: 1 }, i)
          .fromTo(
            panel,
            { autoAlpha: 0, yPercent: 6 },
            { autoAlpha: 1, yPercent: 0, ease: 'power2.inOut', duration: 1 },
            i,
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
        {/* persistent header */}
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-[clamp(1.5rem,6vw,8rem)] pt-[clamp(5.5rem,11vh,8rem)]">
          <span className="flex items-center gap-4 font-mono text-label uppercase text-canvas/50">
            <span className="h-px w-10 bg-steel/60" />
            {t('eyebrow')}
          </span>
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
            <div className="grid w-full items-center gap-[clamp(2rem,5vw,5rem)] md:grid-cols-2">
              <div>
                <span className="mb-6 block font-mono text-label uppercase text-steel">
                  {item.no}
                </span>
                <h3 className="mb-7 font-display text-display text-canvas">
                  {item.name}
                </h3>
                <p className="max-w-[30rem] text-lead font-light text-canvas/70">
                  {item.desc}
                </p>
              </div>
              <Frame
                variant={i === 1 ? 'stone' : 'water'}
                label={item.name}
                className="aspect-[4/5] w-full max-w-[30rem] justify-self-end md:aspect-[3/4]"
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
