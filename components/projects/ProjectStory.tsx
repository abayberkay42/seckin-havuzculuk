'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { Eyebrow } from '@/components/ui/Eyebrow';
import type { LocalizedProject } from '@/content/projects';

export function ProjectStory({ lp }: { lp: LocalizedProject }) {
  const t = useTranslations('projectsPage');
  const root = useRef<HTMLElement>(null);
  const typeLabel =
    lp.type === 'completed'
      ? t('typeCompleted')
      : lp.type === 'ongoing'
        ? t('typeOngoing')
        : t('typeBeforeAfter');

  const facts: { label: string; value: string }[] = [
    { label: t('location'), value: lp.place },
    { label: t('type'), value: typeLabel },
    { label: t('duration'), value: lp.duration },
    { label: t('area'), value: lp.area },
    { label: t('year'), value: lp.year },
  ];

  useGSAP(
    () => {
      gsap.from('[data-reveal]', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: 'top 74%' },
      });
      gsap.fromTo(
        '[data-line]',
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-timeline]',
            start: 'top 78%',
            end: 'bottom 80%',
            scrub: true,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-nav-theme="light"
      className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
    >
      <div className="grid gap-x-[clamp(2rem,5vw,6rem)] gap-y-16 md:grid-cols-12">
        <div className="text-center md:col-span-7">
          <Eyebrow data-reveal tone="dark" className="mb-8 justify-center">
            {t('overview')}
          </Eyebrow>
          <p data-reveal className="font-display text-title text-ink">
            {lp.overview}
          </p>
        </div>

        <dl className="md:col-span-4 md:col-start-9">
          {facts.map((f) => (
            <div
              key={f.label}
              data-reveal
              className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-5"
            >
              <dt className="font-mono text-label uppercase text-ink/40">
                {f.label}
              </dt>
              <dd className="text-right text-[1.0625rem] text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* timeline */}
      <div data-timeline className="relative mt-[clamp(5rem,10vh,9rem)]">
        <span
          data-reveal
          className="mb-12 block text-center font-mono text-label uppercase text-ink/50"
        >
          {t('timeline')}
        </span>
        <div className="absolute left-0 right-0 top-[4.5rem] hidden h-px origin-left bg-ink/15 md:block">
          <div data-line className="h-full w-full origin-left bg-bronze" />
        </div>
        <ol className="grid gap-x-10 gap-y-12 md:grid-cols-3">
          {lp.timeline.map((item) => (
            <li key={item.title} data-reveal className="text-center">
              <span className="mb-4 block font-mono text-label uppercase text-bronze">
                {item.date}
              </span>
              <h3 className="mb-3 font-display text-[1.6rem] text-ink">
                {item.title}
              </h3>
              <p className="mx-auto max-w-[20rem] text-[1rem] leading-relaxed text-ink/60">
                {item.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
