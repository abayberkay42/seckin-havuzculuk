'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { Link } from '@/i18n/navigation';
import { ProductShot } from './ProductShot';
import { ProductCTAs } from './ProductCTAs';
import type { LocalizedProduct } from '@/content/catalogue';

export function ProductHero({
  lp,
  category,
}: {
  lp: LocalizedProduct;
  category: string;
}) {
  const t = useTranslations('catalogue');
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-shot]', {
        opacity: 0,
        scale: 0.94,
        duration: 1.3,
        ease: 'power3.out',
      });
      gsap.from('[data-reveal]', {
        opacity: 0,
        y: 40,
        filter: 'blur(8px)',
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.09,
        delay: 0.15,
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-nav-theme="light"
      className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(5rem,10vh,9rem)] pt-[clamp(8rem,16vh,11rem)]"
    >
      <Link
        href="/products"
        className="inline-flex items-center gap-2 font-mono text-label uppercase text-ink/60 transition-colors duration-300 hover:text-ink"
      >
        ← {t('backToProducts')}
      </Link>

      <div className="mt-[clamp(2.5rem,6vh,5rem)] grid items-center gap-[clamp(2.5rem,6vw,6rem)] md:grid-cols-2">
        <div
          data-shot
          className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_90px_-50px_rgba(26,23,18,0.5)] ring-1 ring-ink/5"
        >
          <ProductShot className="aspect-[4/5]" />
        </div>

        <div>
          <span
            data-reveal
            className="mb-6 block font-mono text-label uppercase text-bronze"
          >
            {category}
          </span>
          <h1 data-reveal className="font-display text-display text-ink">
            {lp.name}
          </h1>
          <p data-reveal className="mt-5 text-lead font-light text-ink/55">
            {lp.tagline}
          </p>
          <p
            data-reveal
            className="mt-8 max-w-[34rem] text-[1.0625rem] leading-relaxed text-ink/70"
          >
            {lp.description}
          </p>
          <div data-reveal className="mt-10">
            <ProductCTAs productName={lp.name} />
          </div>
          <span
            data-reveal
            className="mt-6 block font-mono text-label uppercase text-ink/35"
          >
            {t('notForSale')}
          </span>
        </div>
      </div>
    </section>
  );
}
