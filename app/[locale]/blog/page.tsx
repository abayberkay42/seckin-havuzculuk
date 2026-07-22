import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { isAppLocale } from '@/i18n/routing';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { Seam } from '@/components/ui/Seam';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

type Entry = { tag: string; title: string; teaser: string };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'journal' });
  return { title: `${t('eyebrow')} — Seçkin`, description: t('intro') };
}

export default async function JournalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('journal');
  const upcoming = t.raw('upcoming') as Entry[];

  return (
    <main>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        intro={t('intro')}
        aside={
          <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 px-4 py-2 font-mono text-label uppercase text-ink/50">
            <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
            {t('stateLabel')}
          </span>
        }
      />

      <Seam from="canvas" to="surface" />

      {/* Upcoming — an editorial list, deliberately quiet until the pieces land */}
      <section
        data-nav-theme="light"
        className="bg-surface px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <Eyebrow tone="dark" className="mb-[clamp(2.5rem,5vh,4rem)] justify-center">
          {t('upcomingEyebrow')}
        </Eyebrow>
        <ul className="border-t border-ink/12">
          {upcoming.map((e) => (
            <Reveal
              as="li"
              key={e.title}
              className="grid gap-x-10 gap-y-3 border-b border-ink/12 py-[clamp(2rem,4vh,3.5rem)] md:grid-cols-12 md:items-baseline"
            >
              <span className="font-mono text-label uppercase text-bronze/70 md:col-span-2">
                {e.tag}
              </span>
              <h2 className="font-display text-[clamp(1.6rem,3vw,2.5rem)] leading-tight text-ink/85 md:col-span-6">
                {e.title}
              </h2>
              <p className="text-body text-ink/55 md:col-span-4">{e.teaser}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <Seam from="surface" to="deep" />

      <CtaBand title={t('ctaTitle')} buttonLabel={t('ctaButton')} />
    </main>
  );
}
