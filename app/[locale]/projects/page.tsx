import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { isAppLocale } from '@/i18n/routing';
import { ProjectsHub } from '@/components/projects/ProjectsHub';

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
        data-nav-theme="light"
        className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(3rem,6vh,5rem)] pt-[clamp(9rem,20vh,14rem)]"
      >
        <span className="mb-8 flex items-center gap-4 font-mono text-label uppercase text-ink/50">
          <span className="h-px w-10 bg-bronze/60" />
          {t('eyebrow')}
        </span>
        <h1 className="mb-9 max-w-[18ch] font-display text-display text-ink">
          {t('title')}
        </h1>
        <p className="max-w-[42rem] text-lead font-light text-ink/65">
          {t('intro')}
        </p>
      </section>
      <ProjectsHub />
    </main>
  );
}
