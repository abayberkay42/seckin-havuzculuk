'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { SplitReveal } from '@/components/ui/SplitReveal';
import { Eyebrow } from '@/components/ui/Eyebrow';

type Stat = { value: string; suffix?: string; label: string };

/**
 * The numbers are simply stated, not performed. A count-up animation reads as a
 * startup metrics slide; a house this assured presents its record plainly and
 * lets the reader take it in. Confidence over spectacle.
 */
function StatBlock({ value, suffix, label }: Stat) {
  return (
    <div className="border-t border-canvas/15 pt-6 text-center">
      <span className="block font-display text-[clamp(3.5rem,7vw,6.25rem)] leading-[0.88] tabular-nums text-canvas">
        {value}
        {suffix ?? ''}
      </span>
      <span className="mt-5 block font-mono text-label uppercase text-canvas/45">
        {label}
      </span>
    </div>
  );
}

export function Proof() {
  const t = useTranslations('proof');
  const stats = t.raw('stats') as Stat[];
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-fade]', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: 'top 82%' },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-nav-theme="dark"
      className="bg-navy px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
    >
      <Eyebrow data-fade index="VI" tone="light" className="mb-8 justify-center">
        {t('eyebrow')}
      </Eyebrow>
      <SplitReveal
        as="p"
        className="mx-auto mb-[clamp(4rem,8vh,7rem)] max-w-[50rem] text-center font-display text-title text-canvas"
      >
        {t('statement')}
      </SplitReveal>

      <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} data-fade>
            <StatBlock {...stat} />
          </div>
        ))}
      </div>
    </section>
  );
}
