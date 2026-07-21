'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { Link } from '@/i18n/navigation';

/**
 * The catalogue, presented as a museum vitrine rather than a shop. Category names
 * drift past in a seamless marquee; the heading reveals on entry. No prices, no
 * cart — presentation only.
 */
export function Products() {
  const t = useTranslations('products');
  const categories = t.raw('categories') as string[];
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-fade]', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: 'top 72%' },
      });

      // Seamless marquee: the track holds two copies, so sliding by exactly half
      // its width loops invisibly.
      if (track.current) {
        const half = track.current.scrollWidth / 2;
        gsap.to(track.current, {
          x: -half,
          duration: 34,
          ease: 'none',
          repeat: -1,
        });
      }
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-nav-theme="light"
      className="overflow-hidden bg-canvas py-[clamp(7rem,14vh,12rem)]"
    >
      <div className="mb-[clamp(3.5rem,7vh,6rem)] px-[clamp(1.5rem,6vw,8rem)]">
        <span
          data-fade
          className="mb-8 flex items-center gap-4 font-mono text-label uppercase text-ink/50"
        >
          <span className="h-px w-10 bg-bronze/60" />
          {t('eyebrow')}
        </span>
        <h2 data-fade className="mb-6 max-w-[40rem] font-display text-title text-ink">
          {t('title')}
        </h2>
        <p data-fade className="mb-10 max-w-[34rem] text-lead font-light text-ink/65">
          {t('desc')}
        </p>
        <Link
          data-fade
          href="/products"
          className="group inline-flex items-center gap-4 rounded-full bg-ink py-2 pl-7 pr-2 text-canvas transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
        >
          <span className="text-[0.95rem]">{t('cta')}</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas text-ink transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M4 11L11 4M11 4H5M11 4V10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>

      {/* marquee */}
      <div className="relative flex select-none whitespace-nowrap">
        <div ref={track} className="flex will-change-transform">
          {[...categories, ...categories].map((cat, i) => (
            <span
              key={i}
              className="flex items-center font-display text-[clamp(2rem,4vw,3.5rem)] text-ink/25"
            >
              {cat}
              <span className="mx-8 text-bronze/50 md:mx-12">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
