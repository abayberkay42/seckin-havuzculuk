import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { isAppLocale } from '@/i18n/routing';
import { products } from '@/content/catalogue';
import { CatalogueHub } from '@/components/products/CatalogueHub';
import { SplitReveal } from '@/components/ui/SplitReveal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'catalogue' });
  return { title: `${t('eyebrow')} — Seçkin`, description: t('intro') };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('catalogue');

  return (
    <main>
      <section
        data-nav-theme="light"
        className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(3rem,6vh,5rem)] pt-[clamp(9rem,20vh,14rem)]"
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="mb-8 flex items-center gap-4 font-mono text-label uppercase text-ink/50">
              <span className="h-px w-10 bg-bronze/60" />
              {t('eyebrow')}
            </span>
            <SplitReveal as="h1" className="max-w-[18ch] font-display text-display text-ink">
              {t('title')}
            </SplitReveal>
          </div>
          <span className="font-mono text-label uppercase text-ink/40">
            {t('productCount', { count: products.length })} · {t('notForSale')}
          </span>
        </div>
        <p className="mt-9 max-w-[44rem] text-lead font-light text-ink/65">
          {t('intro')}
        </p>
      </section>
      <CatalogueHub />
    </main>
  );
}
