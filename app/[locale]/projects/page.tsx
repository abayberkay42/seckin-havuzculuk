import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { isAppLocale } from '@/i18n/routing';
import { ProjectsHub } from '@/components/projects/ProjectsHub';
import { SplitReveal } from '@/components/ui/SplitReveal';
import { Eyebrow } from '@/components/ui/Eyebrow';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projectsPage' });
  return { title: `${t('eyebrow')} — Seçkin`, description: t('intro') };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('projectsPage');

  return (
    <main>
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden bg-deep px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(3rem,6vh,5rem)] pt-[clamp(7.5rem,16vh,11rem)]"
      >
        {/* section background — a photo washed in deep navy so the light
            headline stays legible over it. */}
        <Image
          src="/projects-hero-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,31,41,0.8)_0%,rgba(13,31,41,0.66)_52%,rgba(13,31,41,0.52)_100%)]" />
        {/* the water dissolves into the page cream at the foot — a soft breath,
            not a hard shadow band. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[clamp(2rem,4.5vh,3.5rem)]"
          style={{ background: 'linear-gradient(to bottom, rgba(245,240,232,0), var(--color-canvas))' }}
        />

        <div className="relative z-10">
          <Eyebrow tone="light" className="mb-8 justify-center">
            {t('eyebrow')}
          </Eyebrow>
          <SplitReveal as="h1" className="mx-auto mb-9 max-w-[18ch] text-center font-display text-display text-canvas">
            {t('title')}
          </SplitReveal>
          <p className="mx-auto max-w-[42rem] text-center text-lead font-light text-canvas/75">
            {t('intro')}
          </p>
        </div>
      </section>
      <ProjectsHub />
    </main>
  );
}
