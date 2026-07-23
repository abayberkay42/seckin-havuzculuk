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
  const t = await getTranslations({ locale, namespace: 'construction' });
  return { title: `${t('eyebrow')} — Seçkin`, description: t('intro') };
}

export default async function ConstructionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('construction');
  const capabilities = t.raw('capabilities') as Item[];
  const steps = t.raw('steps') as Item[];

  return (
    <main>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')} />

      <Seam from="canvas" to="surface" />

      {/* Capabilities */}
      <section
        data-nav-theme="light"
        className="bg-surface px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <Frame
          variant="water"
          src="/havuz-insaati-hero.webp"
          alt={t('title')}
          sizes="100vw"
          className="mb-[clamp(4rem,8vh,7rem)] aspect-[16/9] w-full"
        />

        <Eyebrow tone="dark" className="mb-8 justify-center">
          {t('capabilitiesEyebrow')}
        </Eyebrow>
        <SplitReveal as="h2" className="mx-auto mb-[clamp(3.5rem,7vh,6rem)] max-w-[24ch] text-center font-display text-title text-ink">
          {t('capabilitiesTitle')}
        </SplitReveal>
        <div className="grid gap-x-[clamp(2rem,5vw,5rem)] gap-y-14 md:grid-cols-2">
          {capabilities.map((c) => (
            <Reveal key={c.no} className="border-t border-ink/12 pt-7 text-center">
              <span className="mb-6 block font-mono text-label uppercase tabular-nums text-bronze/70">{c.no}</span>
              <h3 className="mb-3 font-display text-[1.6rem] text-ink">{c.name}</h3>
              <p className="mx-auto max-w-[30rem] text-body text-ink/65">{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Seam from="surface" to="navy" />

      {/* Process */}
      <section
        data-nav-theme="dark"
        className="bg-navy px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <Eyebrow tone="light" className="mb-8 justify-center">
          {t('processEyebrow')}
        </Eyebrow>
        <SplitReveal as="h2" className="mx-auto mb-[clamp(3.5rem,7vh,6rem)] max-w-[22ch] text-center font-display text-title text-canvas">
          {t('processTitle')}
        </SplitReveal>
        <ol className="grid gap-x-10 gap-y-14 md:grid-cols-3">
          {steps.map((s) => (
            <Reveal as="li" key={s.no} className="border-t border-canvas/15 pt-7 text-center">
              <span className="mb-6 block font-mono text-label uppercase text-steel">{s.no}</span>
              <h3 className="mb-4 font-display text-[1.6rem] text-canvas">{s.name}</h3>
              <p className="mx-auto max-w-[24rem] text-body text-canvas/60">{s.desc}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <Seam from="navy" to="deep" />

      <CtaBand title={t('ctaTitle')} buttonLabel={t('ctaButton')} />
    </main>
  );
}
