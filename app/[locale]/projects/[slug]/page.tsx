import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { isAppLocale, locales } from '@/i18n/routing';
import {
  projects,
  getProject,
  localize,
  localizeProject,
} from '@/content/projects';
import { Link } from '@/i18n/navigation';
import { ProjectHero } from '@/components/projects/ProjectHero';
import { ProjectStory } from '@/components/projects/ProjectStory';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { ProjectProcess } from '@/components/projects/ProjectProcess';
import { BeforeAfter } from '@/components/projects/BeforeAfter';
import { RelatedProjects } from '@/components/projects/RelatedProjects';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${localize(p.name, locale)} — Seçkin`,
    description: localize(p.overview, locale),
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);

  const project = getProject(slug);
  if (!project) notFound();

  const lp = localizeProject(project, locale);
  const t = await getTranslations('projectsPage');

  const sameType = projects.filter(
    (p) => p.slug !== slug && p.type === project.type,
  );
  const others = projects.filter(
    (p) => p.slug !== slug && p.type !== project.type,
  );
  const related = [...sameType, ...others].slice(0, 3).map((p) => ({
    slug: p.slug,
    name: localize(p.name, locale),
    place: localize(p.place, locale),
    year: p.year,
    type: p.type,
  }));

  return (
    <main>
      <ProjectHero lp={lp} />
      <ProjectStory lp={lp} />
      <ProjectGallery lp={lp} />
      <ProjectProcess lp={lp} />
      {lp.hasBeforeAfter && <BeforeAfter />}
      <RelatedProjects items={related} />

      <section
        data-nav-theme="dark"
        className="bg-deep px-[clamp(1.5rem,6vw,8rem)] py-[clamp(8rem,16vh,14rem)] text-center"
      >
        <h2 className="mx-auto mb-10 max-w-[20ch] font-display text-display text-canvas">
          {t('ctaTitle')}
        </h2>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-4 rounded-full bg-canvas py-2.5 pl-8 pr-2.5 text-ink transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
        >
          <span>{t('ctaButton')}</span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-canvas transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M4 11L11 4M11 4H5M11 4V10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </section>
    </main>
  );
}
