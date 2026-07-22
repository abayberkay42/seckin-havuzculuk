'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { Link } from '@/i18n/navigation';
import { ProductShot } from './ProductShot';
import { Sheen } from '@/components/ui/Sheen';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { productPhoto } from '@/content/catalogue';

type Item = { slug: string; name: string; tagline: string; category: string };

export function RelatedProducts({ items }: { items: Item[] }) {
  const t = useTranslations('catalogue');
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-reveal]', {
        opacity: 0,
        y: 44,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: 'top 82%' },
      });
    },
    { scope: root },
  );

  if (!items.length) return null;

  return (
    <section
      ref={root}
      data-nav-theme="light"
      className="bg-surface px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
    >
      <Eyebrow data-reveal tone="dark" className="mb-12 justify-center">
        {t('related')}
      </Eyebrow>

      <div className="grid grid-cols-2 gap-[clamp(1rem,2.5vw,2.5rem)] md:grid-cols-4">
        {items.map((p) => (
          <Link
            key={p.slug}
            data-reveal
            href={{ pathname: '/products/[slug]', params: { slug: p.slug } }}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_26px_60px_-36px_rgba(26,23,18,0.42)] ring-1 ring-ink/5">
              <div className="transition-transform duration-[var(--dur-slow)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]">
                <ProductShot src={productPhoto(p.slug)} alt={p.name} className="aspect-[4/5]" />
              </div>
              <Sheen tint="steel" />
            </div>
            <span className="mt-4 block font-mono text-label uppercase text-ink/40">
              {p.category}
            </span>
            <h3 className="mt-1.5 font-display text-[1.25rem] leading-tight text-ink transition-colors duration-300 group-hover:text-bronze">
              {p.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
