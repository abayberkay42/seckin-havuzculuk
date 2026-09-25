import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { isAppLocale, type AppLocale } from '@/i18n/routing';
import { pageMetadata, absoluteUrl } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { privacySections, PRIVACY_UPDATED } from '@/content/legal';
import { PageHero } from '@/components/site/PageHero';
import { Seam } from '@/components/ui/Seam';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });
  return pageMetadata({
    locale: locale as AppLocale,
    href: '/privacy',
    title: t('seoTitle'),
    description: t('seoDescription'),
  });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('privacy');
  const tr = locale === 'tr';
  const pick = (x: { tr: string; en: string }) => (tr ? x.tr : x.en);

  const crumbs = breadcrumbSchema([
    { name: tr ? 'Ana Sayfa' : 'Home', url: absoluteUrl('/', locale) },
    { name: t('title'), url: absoluteUrl('/privacy', locale) },
  ]);

  const updated = new Date(PRIVACY_UPDATED).toLocaleDateString(tr ? 'tr-TR' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main>
      <JsonLd data={crumbs} />
      <PageHero eyebrow={t('eyebrow')} title={t('title')} />

      <Seam from="canvas" to="surface" />

      <section
        data-nav-theme="light"
        className="bg-surface px-[clamp(1.5rem,6vw,8rem)] py-[clamp(5rem,10vh,9rem)]"
      >
        <div className="mx-auto max-w-[46rem]">
          <p className="mb-[clamp(3rem,6vh,4.5rem)] font-mono text-label uppercase tracking-wide text-ink/40">
            {t('updatedLabel')}: {updated}
          </p>

          <div className="space-y-[clamp(2.5rem,5vh,4rem)]">
            {privacySections.map((s) => (
              <section key={pick(s.heading)}>
                <h2 className="mb-5 font-display text-[clamp(1.4rem,2.6vw,1.9rem)] leading-tight text-ink">
                  {pick(s.heading)}
                </h2>
                <div className="space-y-5">
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="text-body leading-relaxed text-ink/72">
                      {pick(p)}
                    </p>
                  ))}
                </div>
                {s.bullets && (
                  <ul className="mt-6 space-y-4 border-l-2 border-bronze/40 pl-6">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="text-body leading-relaxed text-ink/72">
                        {pick(b)}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
