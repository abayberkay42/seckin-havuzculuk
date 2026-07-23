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

type Principle = { no: string; name: string; desc: string };
type Figure = { value: string; suffix?: string; label: string };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return { title: `${t('eyebrow')} — Seçkin`, description: t('intro') };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const principles = t.raw('principles') as Principle[];
  const figures = t.raw('figures') as Figure[];

  return (
    <main>
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        intro={t('intro')}
        aside={
          <dl className="flex flex-wrap justify-center gap-x-10 gap-y-6 sm:flex-row sm:gap-y-7">
            {figures.map((f) => (
              <div key={f.label} className="text-center">
                <dd className="font-display text-[clamp(2rem,3vw,2.75rem)] leading-none tabular-nums text-ink">
                  {f.value}
                  {f.suffix ?? ''}
                </dd>
                <dt className="mt-2 font-mono text-label uppercase text-ink/40">{f.label}</dt>
              </div>
            ))}
          </dl>
        }
      />

      <Seam from="canvas" to="surface" />

      {/* Story */}
      <section
        data-nav-theme="light"
        className="bg-surface px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <div className="grid items-center gap-[clamp(2.5rem,6vw,6rem)] md:grid-cols-12">
          <div className="text-center md:col-span-6">
            <Eyebrow tone="dark" className="mb-8 justify-center">
              {t('storyEyebrow')}
            </Eyebrow>
            <SplitReveal as="h2" className="mb-8 font-display text-title text-ink">
              {t('storyTitle')}
            </SplitReveal>
            <Reveal as="p" className="mx-auto mb-6 max-w-[34rem] text-body text-ink/70">
              {t('storyBody1')}
            </Reveal>
            <Reveal as="p" delay={0.08} className="mx-auto max-w-[34rem] text-body text-ink/70">
              {t('storyBody2')}
            </Reveal>
          </div>
          <div className="md:col-span-6">
            <Frame
              variant="water"
              src="/about-story.webp"
              alt={t('storyTitle')}
              sizes="(max-width: 768px) 90vw, 45vw"
              className="aspect-[4/5] w-full"
            />
          </div>
        </div>
      </section>

      <Seam from="surface" to="navy" />

      {/* Principles */}
      <section
        data-nav-theme="dark"
        className="bg-navy px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <Eyebrow tone="light" className="mb-8 justify-center">
          {t('principlesEyebrow')}
        </Eyebrow>
        <SplitReveal as="h2" className="mx-auto mb-[clamp(3.5rem,7vh,6rem)] max-w-[24ch] text-center font-display text-title text-canvas">
          {t('principlesTitle')}
        </SplitReveal>
        <ol className="grid gap-x-10 gap-y-14 md:grid-cols-3">
          {principles.map((p) => (
            <Reveal as="li" key={p.no} className="border-t border-canvas/15 pt-7 text-center">
              <span className="mb-6 block font-mono text-label uppercase text-steel">{p.no}</span>
              <h3 className="mb-4 font-display text-[1.6rem] text-canvas">{p.name}</h3>
              <p className="mx-auto max-w-[24rem] text-body text-canvas/60">{p.desc}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <Seam from="navy" to="deep" />

      <CtaBand title={t('ctaTitle')} buttonLabel={t('ctaButton')} />
    </main>
  );
}
