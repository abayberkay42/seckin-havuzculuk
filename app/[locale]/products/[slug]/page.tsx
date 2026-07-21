import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { isAppLocale, locales } from '@/i18n/routing';
import {
  products,
  categories,
  getProduct,
  localize,
  localizeProduct,
  productsByCategory,
  type CategoryKey,
} from '@/content/catalogue';
import { ProductHero } from '@/components/products/ProductHero';
import { ProductBody } from '@/components/products/ProductBody';
import { RelatedProducts } from '@/components/products/RelatedProducts';
import { ProductCTAs } from '@/components/products/ProductCTAs';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    products.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${localize(p.name, locale)} — Seçkin`,
    description: localize(p.description, locale),
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);

  const product = getProduct(slug);
  if (!product) notFound();

  const lp = localizeProduct(product, locale);
  const t = await getTranslations('catalogue');

  const catMap = Object.fromEntries(
    categories.map((c) => [c.key, localize(c.name, locale)]),
  ) as Record<CategoryKey, string>;

  const related = productsByCategory(product.category)
    .filter((p) => p.slug !== slug)
    .slice(0, 4)
    .map((p) => ({
      slug: p.slug,
      name: localize(p.name, locale),
      tagline: localize(p.tagline, locale),
      category: catMap[p.category],
    }));

  return (
    <main>
      <ProductHero lp={lp} category={catMap[product.category]} />
      <ProductBody lp={lp} />
      <RelatedProducts items={related} />

      <section
        data-nav-theme="dark"
        className="bg-deep px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)] text-center"
      >
        <h2 className="mb-4 font-display text-title text-canvas">{lp.name}</h2>
        <p className="mb-10 font-mono text-label uppercase text-canvas/45">
          {t('notForSale')}
        </p>
        <div className="flex justify-center">
          <ProductCTAs productName={lp.name} tone="dark" />
        </div>
      </section>
    </main>
  );
}
