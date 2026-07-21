'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import type { LocalizedProject } from '@/content/projects';

/**
 * The construction journey — dark, to read like the site rather than the villa.
 * Stages, materials and technical highlights: transparency and craft.
 */
export function ProjectProcess({ lp }: { lp: LocalizedProject }) {
  const t = useTranslations('projectsPage');
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-reveal]', {
        opacity: 0,
        y: 44,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: 'top 76%' },
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
      {/* construction stages */}
      <span
        data-reveal
        className="mb-12 flex items-center gap-4 font-mono text-label uppercase text-canvas/50"
      >
        <span className="h-px w-10 bg-steel/60" />
        {t('stages')}
      </span>
      <ol className="mb-[clamp(5rem,10vh,9rem)] grid gap-x-10 gap-y-12 md:grid-cols-3">
        {lp.stages.map((stage, i) => (
          <li key={stage.title} data-reveal className="border-t border-canvas/15 pt-7">
            <span className="mb-5 block font-mono text-label uppercase text-steel">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mb-4 font-display text-[1.6rem] text-canvas">
              {stage.title}
            </h3>
            <p className="max-w-[22rem] text-[1rem] leading-relaxed text-canvas/60">
              {stage.desc}
            </p>
          </li>
        ))}
      </ol>

      <div className="grid gap-x-[clamp(2rem,5vw,6rem)] gap-y-16 md:grid-cols-12">
        {/* materials */}
        <div className="md:col-span-5">
          <span
            data-reveal
            className="mb-8 block font-mono text-label uppercase text-canvas/50"
          >
            {t('materials')}
          </span>
          <ul className="flex flex-wrap gap-3">
            {lp.materials.map((m) => (
              <li
                key={m}
                data-reveal
                className="rounded-full border border-canvas/20 px-5 py-2.5 text-[0.95rem] text-canvas/80"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>

        {/* technical highlights */}
        <div className="md:col-span-6 md:col-start-7">
          <span
            data-reveal
            className="mb-8 block font-mono text-label uppercase text-canvas/50"
          >
            {t('highlights')}
          </span>
          <dl className="grid grid-cols-2 gap-x-8">
            {lp.highlights.map((h) => (
              <div
                key={h.label}
                data-reveal
                className="border-b border-canvas/12 py-5"
              >
                <dt className="mb-1.5 font-mono text-label uppercase text-canvas/40">
                  {h.label}
                </dt>
                <dd className="font-display text-[1.5rem] text-canvas">
                  {h.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
