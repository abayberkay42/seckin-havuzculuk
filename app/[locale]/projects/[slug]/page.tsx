import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { isAppLocale, locales, type AppLocale } from '@/i18n/routing';
import { pageMetadata, absoluteUrl } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  projects,
  getProject,
  localize,
  localizeProject,
} from '@/content/projects';
import { Button } from '@/components/ui/Button';
import { ProjectHero } from '@/components/projects/ProjectHero';
import { ProjectStory } from '@/components/projects/ProjectStory';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { ProjectProcess } from '@/components/projects/ProjectProcess';
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
  return pageMetadata({
    locale: locale as AppLocale,
    href: { pathname: '/projects/[slug]', params: { slug } },
    title: localize(p.name, locale),
    description: localize(p.overview, locale),
    image: p.cover,
    ogType: 'article',
  });
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
    cover: p.cover,
    name: localize(p.name, locale),
    place: localize(p.place, locale),
    year: p.year,
    type: p.type,
  }));

  const crumbs = breadcrumbSchema([
    { name: locale === 'tr' ? 'Ana Sayfa' : 'Home', url: absoluteUrl('/', locale) },
    { name: t('eyebrow'), url: absoluteUrl('/projects', locale) },
    {
      name: lp.name,
      url: absoluteUrl({ pathname: '/projects/[slug]', params: { slug } }, locale),
    },
  ]);

  return (
    <main>
      <JsonLd data={crumbs} />
      <ProjectHero lp={lp} />
      <ProjectStory lp={lp} />

      {/* Project cover — medium, between the story timeline and the gallery */}
      <section
        data-nav-theme="light"
        className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(4rem,9vh,7rem)]"
      >
        <div className="relative mx-auto aspect-[16/9] w-full max-w-[64rem] overflow-hidden rounded-[1.75rem] ring-1 ring-ink/8 shadow-[0_40px_90px_-55px_rgba(9,22,30,0.55)]">
          <Image
            src={lp.cover}
            alt={lp.name}
            fill
            sizes="(max-width: 768px) 92vw, 64rem"
            className="object-cover"
          />
        </div>
      </section>

      <ProjectGallery lp={lp} />
      <ProjectProcess lp={lp} />
      <RelatedProjects items={related} />

      <section
        data-nav-theme="dark"
        className="bg-deep px-[clamp(1.5rem,6vw,8rem)] py-[clamp(8rem,16vh,14rem)] text-center"
      >
        <h2 className="mx-auto mb-10 max-w-[20ch] font-display text-display text-canvas">
          {t('ctaTitle')}
        </h2>
        <Button variant="primary" tone="light" href="/contact">
          {t('ctaButton')}
        </Button>
      </section>
    </main>
  );
}
