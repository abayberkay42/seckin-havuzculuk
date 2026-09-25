import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { isAppLocale, locales, type AppLocale } from '@/i18n/routing';
import { pageMetadata, absoluteUrl } from '@/lib/seo';
import { districtServiceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { districts, getDistrict, localizeDistrict } from '@/content/districts';
import { getProject, localize as localizeProjectField } from '@/content/projects';
import { PageHero } from '@/components/site/PageHero';
import { Faq } from '@/components/site/Faq';
import { CtaBand } from '@/components/site/CtaBand';
import { Seam } from '@/components/ui/Seam';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SplitReveal } from '@/components/ui/SplitReveal';
import { Reveal } from '@/components/ui/Reveal';
import { Frame } from '@/components/ui/Frame';

export function generateStaticParams() {
  return locales.flatMap((locale) => districts.map((d) => ({ locale, slug: d.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const d = getDistrict(slug);
  if (!d) return {};
  const ld = localizeDistrict(d, locale);
  return pageMetadata({
    locale: locale as AppLocale,
    href: { pathname: '/service-areas/[slug]', params: { slug } },
    title: ld.seoTitle,
    description: ld.seoDescription,
    image: ld.cover,
  });
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);

  const district = getDistrict(slug);
  if (!district) notFound();
  const d = localizeDistrict(district, locale);
  const tr = locale === 'tr';

  const url = absoluteUrl({ pathname: '/service-areas/[slug]', params: { slug } }, locale);

  // Proof: real projects located in this district (linked to their detail pages)
  const localProjects = d.projectSlugs
    .map((s) => {
      const p = getProject(s);
      if (!p) return null;
      return {
        slug: p.slug,
        cover: p.cover,
        name: localizeProjectField(p.name, locale),
        place: localizeProjectField(p.place, locale),
      };
    })
    .filter((x): x is { slug: string; cover: string; name: string; place: string } => x !== null);

  const ld = [
    districtServiceSchema({
      districtName: d.name,
      url,
      description: d.seoDescription,
      serviceType: tr ? 'Havuz İnşaatı ve Bakımı' : 'Pool Construction & Maintenance',
    }),
    breadcrumbSchema([
      { name: tr ? 'Ana Sayfa' : 'Home', url: absoluteUrl('/', locale) },
      { name: tr ? 'Hizmet Bölgeleri' : 'Service Areas', url: absoluteUrl('/service-areas', locale) },
      { name: d.name, url },
    ]),
    faqSchema(d.faq),
  ];

  return (
    <main>
      <JsonLd data={ld} />
      <PageHero eyebrow={d.eyebrow} title={d.h1} intro={d.intro} />

      <Seam from="canvas" to="surface" />

      {/* Why this district — local context + a framed image */}
      <section
        data-nav-theme="light"
        className="bg-surface px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <div className="grid items-center gap-[clamp(2.5rem,6vw,6rem)] md:grid-cols-12">
          <div className="text-center md:col-span-6 md:text-left">
            <Eyebrow tone="dark" className="mb-8 justify-center md:justify-start">
              {tr ? `Neden ${d.name}` : `Why ${d.name}`}
            </Eyebrow>
            <SplitReveal as="h2" className="mb-8 font-display text-title text-ink">
              {tr ? `${d.name} ve çevresinde havuz` : `Pools in and around ${d.name}`}
            </SplitReveal>
            <Reveal as="p" className="mx-auto max-w-[36rem] text-body text-ink/70 md:mx-0">
              {d.localContext}
            </Reveal>
          </div>
          <div className="md:col-span-6">
            <Frame
              variant="water"
              src={d.cover}
              alt={d.h1}
              sizes="(max-width: 768px) 90vw, 45vw"
              className="aspect-[4/5] w-full"
            />
          </div>
        </div>
      </section>

      <Seam from="surface" to="navy" />

      {/* District-specific technical notes */}
      <section
        data-nav-theme="dark"
        className="bg-navy px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <Eyebrow tone="light" className="mb-8 justify-center">
          {tr ? `${d.name} için notlar` : `Notes for ${d.name}`}
        </Eyebrow>
        <SplitReveal
          as="h2"
          className="mx-auto mb-[clamp(3.5rem,7vh,6rem)] max-w-[24ch] text-center font-display text-title text-canvas"
        >
          {tr ? 'Bölgeye özgü dikkat edilenler' : 'What we account for locally'}
        </SplitReveal>
        <div className="grid gap-x-[clamp(2rem,5vw,5rem)] gap-y-14 md:grid-cols-2">
          {d.localNotes.map((n) => (
            <Reveal key={n.title} className="border-t border-canvas/15 pt-7 text-center">
              <h3 className="mb-3 font-display text-[1.6rem] text-canvas">{n.title}</h3>
              <p className="mx-auto max-w-[30rem] text-body text-canvas/60">{n.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Seam from="navy" to="canvas" />

      {/* Neighbourhoods + local projects */}
      <section
        data-nav-theme="light"
        className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <div className="mx-auto max-w-[60rem] text-center">
          <Eyebrow tone="dark" className="mb-8 justify-center">
            {tr ? 'Kapsanan mevkiler' : 'Localities covered'}
          </Eyebrow>
          <SplitReveal as="h2" className="mb-[clamp(2.5rem,5vh,4rem)] font-display text-title text-ink">
            {tr ? `${d.name} genelinde hizmet` : `Serving across ${d.name}`}
          </SplitReveal>
          <ul className="flex flex-wrap justify-center gap-3">
            {d.neighborhoods.map((n) => (
              <li
                key={n}
                className="rounded-full border border-ink/15 px-5 py-2 font-mono text-label uppercase tracking-wide text-ink/60"
              >
                {n}
              </li>
            ))}
          </ul>
        </div>

        {localProjects.length > 0 && (
          <div className="mx-auto mt-[clamp(4rem,9vh,7rem)] max-w-[72rem]">
            <Eyebrow tone="dark" className="mb-8 justify-center">
              {tr ? `${d.loc}ki projelerimiz` : `Our projects ${d.loc}`}
            </Eyebrow>
            {/* auto-fit + justify-center: 1–3 cards always sit centred under the
                centred heading instead of hugging the left of a 3-col grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,22rem))] justify-center gap-8">
              {localProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={{ pathname: '/projects/[slug]', params: { slug: p.slug } }}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] ring-1 ring-ink/10">
                    <Image
                      src={p.cover}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-[1.35rem] text-ink">{p.name}</h3>
                  <p className="mt-1 font-mono text-label uppercase text-ink/40">{p.place}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <Faq
        eyebrow={tr ? 'Sık sorulan sorular' : 'Frequently asked'}
        title={tr ? 'Merak edilenler.' : 'Common questions.'}
        items={d.faq}
      />

      <Seam from="canvas" to="deep" />

      <CtaBand
        title={tr ? `${d.loc} havuzunuzu konuşalım.` : `Let's talk about your pool ${d.loc}.`}
        buttonLabel={tr ? 'Ücretsiz keşif isteyin' : 'Request a free site visit'}
      />
    </main>
  );
}
