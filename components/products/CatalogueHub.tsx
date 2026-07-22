'use client';

import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from '@/i18n/navigation';
import {
  visibleProducts,
  visibleCategories,
  localize,
  productPhoto,
  type CategoryKey,
  type Product,
} from '@/content/catalogue';
import { ProductShot } from '@/components/products/ProductShot';
import { Sheen } from '@/components/ui/Sheen';
import { reveal, layoutTransition } from '@/lib/motion';

type FilterKey = 'all' | CategoryKey;

export function CatalogueHub() {
  const t = useTranslations('catalogue');
  const locale = useLocale();
  const [filter, setFilter] = useState<FilterKey>('all');

  const chips: { key: FilterKey; label: string }[] = [
    { key: 'all', label: t('filterAll') },
    ...visibleCategories.map((c) => ({ key: c.key, label: localize(c.name, locale) })),
  ];
  const catName = Object.fromEntries(
    visibleCategories.map((c) => [c.key, localize(c.name, locale)]),
  ) as Record<CategoryKey, string>;

  const list = useMemo(
    () => visibleProducts.filter((p) => filter === 'all' || p.category === filter),
    [filter],
  );

  return (
    <section
      data-nav-theme="light"
      className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(7rem,14vh,12rem)] pt-[clamp(3rem,7vh,6rem)]"
    >
      {/* sticky category filter */}
      <div className="sticky top-[5.25rem] z-30 -mx-[clamp(1.5rem,6vw,8rem)] mb-[clamp(3rem,6vh,5rem)] border-b border-ink/10 bg-canvas/85 px-[clamp(1.5rem,6vw,8rem)] py-4 backdrop-blur-xl">
        <div className="flex gap-x-7 gap-y-2 overflow-x-auto whitespace-nowrap [scrollbar-width:none]">
          {chips.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`relative shrink-0 pb-1 font-mono text-label uppercase transition-colors duration-300 ${
                filter === c.key ? 'text-ink' : 'text-ink/40 hover:text-ink/70'
              }`}
            >
              {c.label}
              {filter === c.key && (
                <motion.span
                  layoutId="cat-underline"
                  className="absolute -bottom-px left-0 h-px w-full bg-bronze"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 gap-x-[clamp(1rem,2.5vw,2.5rem)] gap-y-[clamp(2.5rem,5vh,4.5rem)] md:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <ProductCard
              key={p.slug}
              product={p}
              name={localize(p.name, locale)}
              tagline={localize(p.tagline, locale)}
              category={catName[p.category]}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function ProductCard({
  product,
  name,
  tagline,
  category,
}: {
  product: Product;
  name: string;
  tagline: string;
  category: string;
}) {
  return (
    <motion.article layout exit={{ opacity: 0 }} {...reveal(40)} transition={layoutTransition}>
      <Link
        href={{ pathname: '/products/[slug]', params: { slug: product.slug } }}
        className="group block"
      >
        <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_26px_60px_-34px_rgba(26,23,18,0.45)] ring-1 ring-ink/5">
          <div className="transition-transform duration-[var(--dur-slow)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]">
            <ProductShot src={productPhoto(product.slug)} alt={name} className="aspect-[4/5]" />
          </div>
          <Sheen tint="steel" />
        </div>
        <span className="mt-5 block font-mono text-label uppercase text-ink/40">
          {category}
        </span>
        <h3 className="mt-2 font-display text-[1.4rem] leading-tight text-ink transition-colors duration-[var(--dur-quick)] group-hover:text-bronze">
          {name}
        </h3>
        <span className="mt-1 block text-[0.95rem] text-ink/55">{tagline}</span>
      </Link>
    </motion.article>
  );
}
