import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { isAppLocale, type AppLocale } from '@/i18n/routing';
import { pageMetadata, absoluteUrl } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { Link } from '@/i18n/navigation';
import { posts, localizePost } from '@/content/blog';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { Seam } from '@/components/ui/Seam';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'journal' });
  return pageMetadata({
    locale: locale as AppLocale,
    href: '/blog',
    title: t('seoTitle'),
    description: t('seoDescription'),
  });
}

export default async function JournalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('journal');

  const list = posts.map((p) => localizePost(p, locale));
  const crumbs = breadcrumbSchema([
    { name: locale === 'tr' ? 'Ana Sayfa' : 'Home', url: absoluteUrl('/', locale) },
    { name: t('eyebrow'), url: absoluteUrl('/blog', locale) },
  ]);

  return (
    <main>
      <JsonLd data={crumbs} />
      <PageHero eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')} />

      <Seam from="canvas" to="surface" />

      <section
        data-nav-theme="light"
        className="bg-surface px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <Eyebrow tone="dark" className="mb-[clamp(2.5rem,5vh,4rem)] justify-center">
          {t('postsEyebrow')}
        </Eyebrow>

        <div className="mx-auto grid max-w-[80rem] gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-[clamp(3rem,6vh,5rem)] md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => {
            const dateLabel = new Date(p.date).toLocaleDateString(
              locale === 'en' ? 'en-GB' : 'tr-TR',
              { year: 'numeric', month: 'long', day: 'numeric' },
            );
            return (
              <Reveal key={p.slug}>
                <Link
                  href={{ pathname: '/blog/[slug]', params: { slug: p.slug } }}
                  className="group flex h-full flex-col"
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[1.25rem] ring-1 ring-ink/8">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 30vw"
                      className="object-cover transition-transform duration-[var(--dur-slow)] ease-[var(--ease-water)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-6 flex items-center gap-3 font-mono text-label uppercase text-bronze/70">
                    <span>{p.category}</span>
                    <span aria-hidden className="text-ink/25">·</span>
                    <span className="text-ink/45">{p.readMinutes} {t('readMinutes')}</span>
                  </div>
                  <h2 className="mt-3 font-display text-[clamp(1.4rem,2.4vw,1.85rem)] leading-tight text-ink transition-colors duration-[var(--dur-quick)] group-hover:text-bronze">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-body leading-relaxed text-ink/60">{p.excerpt}</p>
                  <div className="mt-auto pt-5 font-mono text-label uppercase text-ink/40">
                    {dateLabel}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Seam from="surface" to="deep" />

      <CtaBand title={t('ctaTitle')} buttonLabel={t('ctaButton')} />
    </main>
  );
}
