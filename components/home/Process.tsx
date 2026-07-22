'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { SplitReveal } from '@/components/ui/SplitReveal';
import { Eyebrow } from '@/components/ui/Eyebrow';

type Step = { no: string; name: string; desc: string };

/**
 * The journey — design → build → handover. A hairline draws left-to-right as you
 * scroll and the three steps surface in sequence. Meaningful, not decorative:
 * the line literally traces the passage of time.
 */
export function Process() {
  const t = useTranslations('process');
  const steps = t.raw('steps') as Step[];
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-head]', {
        opacity: 0,
        y: 30,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 82%' },
      });

      gsap.fromTo(
        '[data-line]',
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-steps]',
            start: 'top 72%',
            end: 'bottom 75%',
            scrub: true,
          },
        },
      );

      gsap.from('[data-step]', {
        opacity: 0,
        y: 48,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: { trigger: '[data-steps]', start: 'top 84%' },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-nav-theme="light"
      className="bg-surface px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
    >
      <div className="mx-auto mb-[clamp(4rem,8vh,7rem)] max-w-[46rem] text-center">
        <Eyebrow data-head index="IV" tone="dark" className="mb-8 justify-center">
          {t('eyebrow')}
        </Eyebrow>
        <SplitReveal as="h2" className="font-display text-title text-ink">
          {t('title')}
        </SplitReveal>
      </div>

      <div data-steps className="relative">
        {/* the drawing line */}
        <div className="absolute left-0 right-0 top-3 hidden h-px origin-left bg-ink/15 md:block">
          <div
            data-line
            className="h-full w-full origin-left bg-bronze"
          />
        </div>

        <ol className="grid gap-x-10 gap-y-14 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.no} data-step className="relative text-center">
              <span className="relative z-10 mx-auto mb-8 block h-6 w-6 rounded-full border border-ink/20 bg-canvas">
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze" />
              </span>
              <span className="mb-3 block font-mono text-label uppercase text-ink/40">
                {step.no}
              </span>
              <h3 className="mb-4 font-display text-[1.75rem] text-ink">
                {step.name}
              </h3>
              <p className="mx-auto max-w-[24rem] text-body text-ink/65">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
