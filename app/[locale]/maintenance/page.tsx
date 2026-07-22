import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { isAppLocale } from '@/i18n/routing';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { Seam } from '@/components/ui/Seam';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SplitReveal } from '@/components/ui/SplitReveal';
import { Reveal } from '@/components/ui/Reveal';
import { Frame } from '@/components/ui/Frame';

type Item = { no: string; name: string; desc: string };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'maintenance' });
  return { title: `${t('eyebrow')} — Seçkin`, description: t('intro') };
}

export default async function MaintenancePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('maintenance');
  const included = t.raw('included') as Item[];

  return (
    <main>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')} />

      <Seam from="canvas" to="surface" />

      {/* Included */}
      <section
        data-nav-theme="light"
        className="bg-surface px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <Eyebrow tone="dark" className="mb-8 justify-center">
          {t('includedEyebrow')}
        </Eyebrow>
        <SplitReveal as="h2" className="mx-auto mb-[clamp(3.5rem,7vh,6rem)] max-w-[22ch] text-center font-display text-title text-ink">
          {t('includedTitle')}
        </SplitReveal>
        <div className="grid gap-x-[clamp(2rem,5vw,5rem)] gap-y-14 md:grid-cols-2">
          {included.map((c) => (
            <Reveal key={c.no} className="border-t border-ink/12 pt-7 text-center">
              <span className="mb-6 block font-mono text-label uppercase tabular-nums text-bronze/70">{c.no}</span>
              <h3 className="mb-3 font-display text-[1.6rem] text-ink">{c.name}</h3>
              <p className="mx-auto max-w-[30rem] text-body text-ink/65">{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Seam from="surface" to="navy" />

      {/* Rhythm */}
      <section
        data-nav-theme="dark"
        className="bg-navy px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <div className="grid items-center gap-[clamp(2.5rem,6vw,6rem)] md:grid-cols-12">
          <div className="text-center md:col-span-6">
            <Eyebrow tone="light" className="mb-8 justify-center">
              {t('rhythmEyebrow')}
            </Eyebrow>
            <SplitReveal as="h2" className="mx-auto mb-8 max-w-[16ch] font-display text-title text-canvas">
              {t('rhythmTitle')}
            </SplitReveal>
            <Reveal as="p" className="mx-auto max-w-[34rem] text-lead font-light text-canvas/70">
              {t('rhythmBody')}
            </Reveal>
          </div>
          <div className="md:col-span-6">
            <Frame variant="water" className="aspect-[4/5] w-full" />
          </div>
        </div>
      </section>

      <Seam from="navy" to="deep" />

      <CtaBand title={t('ctaTitle')} buttonLabel={t('ctaButton')} />
    </main>
  );
}
