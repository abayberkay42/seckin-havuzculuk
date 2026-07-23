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
type WaterValue = { value: string; label: string; note: string };
type Plan = { no: string; name: string; tag: string; desc: string };

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
  const waterValues = t.raw('waterValues') as WaterValue[];
  const plans = t.raw('plans') as Plan[];

  return (
    <main>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')} />

      <Seam from="canvas" to="surface" />

      {/* Included */}
      <section
        data-nav-theme="light"
        className="bg-surface px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <Frame
          variant="water"
          src="/havuz-bakimi-servis.webp"
          alt={t('title')}
          sizes="100vw"
          className="mb-[clamp(4rem,8vh,7rem)] aspect-[16/9] w-full"
        />

        <Eyebrow tone="dark" className="mb-8 justify-center">
          {t('includedEyebrow')}
        </Eyebrow>
        <SplitReveal as="h2" className="mx-auto mb-[clamp(3.5rem,7vh,6rem)] max-w-[22ch] text-center font-display text-title text-ink">
          {t('includedTitle')}
        </SplitReveal>
        <div className="grid gap-x-[clamp(2rem,5vw,5rem)] gap-y-14 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Water chemistry — the domain-expertise centrepiece */}
      <section
        data-nav-theme="dark"
        className="bg-navy px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <Eyebrow tone="light" className="mb-8 justify-center">
          {t('waterEyebrow')}
        </Eyebrow>
        <SplitReveal as="h2" className="mx-auto mb-8 max-w-[20ch] text-center font-display text-title text-canvas">
          {t('waterTitle')}
        </SplitReveal>
        <Reveal as="p" className="mx-auto mb-[clamp(3.5rem,7vh,6rem)] max-w-[46rem] text-center text-lead font-light text-canvas/70">
          {t('waterIntro')}
        </Reveal>
        <dl className="mx-auto grid max-w-[68rem] gap-px overflow-hidden rounded-[1.5rem] bg-canvas/10 sm:grid-cols-2 lg:grid-cols-3">
          {waterValues.map((v) => (
            <Reveal key={v.label} className="bg-navy px-8 py-9 text-center">
              <dd className="mb-3 font-display text-[clamp(2rem,3.4vw,2.9rem)] leading-none tracking-tight text-aqua">
                {v.value}
              </dd>
              <dt className="mb-2 font-mono text-label uppercase tracking-wide text-canvas">{v.label}</dt>
              <p className="mx-auto max-w-[22rem] text-sm leading-relaxed text-canvas/55">{v.note}</p>
            </Reveal>
          ))}
        </dl>
      </section>

      <Seam from="navy" to="surface" />

      {/* Maintenance programmes */}
      <section
        data-nav-theme="light"
        className="bg-surface px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <Eyebrow tone="dark" className="mb-8 justify-center">
          {t('plansEyebrow')}
        </Eyebrow>
        <SplitReveal as="h2" className="mx-auto mb-8 max-w-[20ch] text-center font-display text-title text-ink">
          {t('plansTitle')}
        </SplitReveal>
        <Reveal as="p" className="mx-auto mb-[clamp(3.5rem,7vh,6rem)] max-w-[42rem] text-center text-lead font-light text-ink/65">
          {t('plansIntro')}
        </Reveal>
        <div className="grid gap-[clamp(1.25rem,2.5vw,2rem)] md:grid-cols-3">
          {plans.map((p) => (
            <Reveal
              key={p.no}
              className="flex h-full flex-col rounded-[1.5rem] bg-canvas p-9 ring-1 ring-ink/8 shadow-[0_24px_60px_-40px_rgba(9,22,30,0.4)]"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-label uppercase tabular-nums text-bronze/70">{p.no}</span>
                <span className="rounded-full bg-ink/5 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink/55">
                  {p.tag}
                </span>
              </div>
              <h3 className="mb-4 font-display text-[1.7rem] leading-tight text-ink">{p.name}</h3>
              <p className="text-body text-ink/65">{p.desc}</p>
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
          <div className="text-center md:col-span-6 md:text-left">
            <Eyebrow tone="light" className="mb-8 justify-center md:justify-start">
              {t('rhythmEyebrow')}
            </Eyebrow>
            <SplitReveal as="h2" className="mx-auto mb-8 max-w-[16ch] font-display text-title text-canvas md:mx-0">
              {t('rhythmTitle')}
            </SplitReveal>
            <Reveal as="p" className="mx-auto max-w-[34rem] text-lead font-light text-canvas/70 md:mx-0">
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
