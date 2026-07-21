'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { ProductShot } from './ProductShot';
import { Sheen } from '@/components/ui/Sheen';
import type { LocalizedProduct } from '@/content/catalogue';

export function ProductBody({ lp }: { lp: LocalizedProduct }) {
  const t = useTranslations('catalogue');
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('[data-block]').forEach((block) => {
        gsap.from(block.querySelectorAll('[data-reveal]'), {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: block, start: 'top 78%' },
        });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root}>
      {/* Technical — dark, to read as spec sheet */}
      <section
        data-block
        data-nav-theme="dark"
        className="bg-navy px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <div className="grid gap-x-[clamp(2rem,5vw,6rem)] gap-y-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <span
              data-reveal
              className="mb-9 flex items-center gap-4 font-mono text-label uppercase text-canvas/50"
            >
              <span className="h-px w-10 bg-steel/60" />
              {t('specs')}
            </span>
            <dl>
              {lp.specs.map((s) => (
                <div
                  key={s.label}
                  data-reveal
                  className="flex items-baseline justify-between gap-6 border-b border-canvas/12 py-5"
                >
                  <dt className="font-mono text-label uppercase text-canvas/40">
                    {s.label}
                  </dt>
                  <dd className="text-right text-[1.0625rem] text-canvas">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <span
              data-reveal
              className="mb-9 flex items-center gap-4 font-mono text-label uppercase text-canvas/50"
            >
              <span className="h-px w-10 bg-steel/60" />
              {t('features')}
            </span>
            <ul className="mb-12 space-y-4">
              {lp.features.map((f) => (
                <li
                  key={f}
                  data-reveal
                  className="flex items-center gap-4 text-[1.0625rem] text-canvas/85"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-steel" />
                  {f}
                </li>
              ))}
            </ul>
            <div data-reveal className="border-t border-canvas/12 pt-6">
              <span className="mb-2 block font-mono text-label uppercase text-canvas/40">
                {t('usage')}
              </span>
              <span className="font-display text-[1.5rem] text-canvas">
                {lp.usage}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery + PDF — light */}
      <section
        data-block
        data-nav-theme="light"
        className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <span
            data-reveal
            className="flex items-center gap-4 font-mono text-label uppercase text-ink/50"
          >
            <span className="h-px w-10 bg-bronze/60" />
            {t('gallery')}
          </span>
          <a
            data-reveal
            href={`/docs/${lp.slug}.pdf`}
            download
            className="group inline-flex items-center gap-3 rounded-full border border-ink/20 px-6 py-3 text-[0.95rem] text-ink transition-colors duration-300 hover:border-ink/50"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M7.5 2v8m0 0L4 6.5M7.5 10 11 6.5M3 12.5h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t('downloadPdf')}
            <span className="font-mono text-label uppercase text-ink/40">
              {t('pdfNote')}
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-[clamp(1rem,2.5vw,2.5rem)] md:grid-cols-3">
          {Array.from({ length: lp.galleryCount }, (_, i) => (
            <figure
              key={i}
              data-reveal
              className="group relative overflow-hidden rounded-[1.5rem] shadow-[0_26px_60px_-36px_rgba(26,23,18,0.4)] ring-1 ring-ink/5"
            >
              <div className="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]">
                <ProductShot className={i === 0 ? 'aspect-[4/3] md:col-span-2' : 'aspect-square'} />
              </div>
              <Sheen tint="steel" />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
