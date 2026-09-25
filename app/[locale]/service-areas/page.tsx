import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { isAppLocale, type AppLocale } from '@/i18n/routing';
import { pageMetadata, absoluteUrl } from '@/lib/seo';
import { breadcrumbSchema, itemListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { districts, localizeDistrict } from '@/content/districts';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { Seam } from '@/components/ui/Seam';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tr = locale === 'tr';
  return pageMetadata({
    locale: locale as AppLocale,
    href: '/service-areas',
    title: tr ? 'Hizmet Bölgeleri: Çeşme Yarımadası ve Urla' : 'Service Areas: Çeşme Peninsula & Urla',
    description: tr
      ? "Çeşme, Alaçatı, Ilıca, Seferihisar, Karaburun ve Urla'da havuz inşaatı, renovasyon ve düzenli bakım. Bölgenize özel bilgi ve ücretsiz keşif."
      : 'Pool construction, renovation and regular maintenance in Çeşme, Alaçatı, Ilıca, Seferihisar, Karaburun and Urla. Local know-how and a free site visit.',
  });
}

export default async function ServiceAreasHub({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const tr = locale === 'tr';
  const items = districts.map((d) => localizeDistrict(d, locale));
  const hubUrl = absoluteUrl('/service-areas', locale);

  const ld = [
    breadcrumbSchema([
      { name: tr ? 'Ana Sayfa' : 'Home', url: absoluteUrl('/', locale) },
      { name: tr ? 'Hizmet Bölgeleri' : 'Service Areas', url: hubUrl },
    ]),
    // Enumerable list of the districts — the service footprint as discrete, linked places.
    itemListSchema(
      tr ? 'Hizmet bölgeleri' : 'Service areas',
      items.map((d) => ({
        name: d.name,
        url: absoluteUrl({ pathname: '/service-areas/[slug]', params: { slug: d.slug } }, locale),
      })),
    ),
  ];

  return (
    <main>
      <JsonLd data={ld} />
      <PageHero
        eyebrow={tr ? 'Hizmet Bölgeleri' : 'Service Areas'}
        title={tr ? 'Yarımadanın her köşesinde.' : 'Across every corner of the peninsula.'}
        intro={
          tr
            ? "Çeşme yarımadasından Urla'ya, her bölgenin iklimi, arazisi ve mimarisi farklı. Havuzu da buna göre kuruyor ve bakıyoruz."
            : 'From the Çeşme peninsula to Urla, every area has its own climate, terrain and architecture. We build and care for pools accordingly.'
        }
      />

      <section
        data-nav-theme="light"
        className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(7rem,14vh,12rem)]"
      >
        {/* six districts → a balanced 3×2 on desktop (auto-fit left a 4+2 orphan row) */}
        <ul className="mx-auto grid max-w-[72rem] gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((d) => (
            <li key={d.slug}>
              <Link
                href={{ pathname: '/service-areas/[slug]', params: { slug: d.slug } }}
                className="group block"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] ring-1 ring-ink/10">
                  <Image
                    src={d.cover}
                    alt={d.h1}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <h2 className="mt-5 font-display text-[1.6rem] text-ink">{d.name}</h2>
                <p className="mt-2 line-clamp-3 text-body text-ink/60">{d.intro}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-mono text-label uppercase text-bronze">
                  <span className="link-water">{tr ? 'Bölgeyi inceleyin' : 'Explore the area'}</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Seam from="canvas" to="deep" />

      <CtaBand
        title={tr ? 'Bölgenizde havuzunuzu konuşalım.' : "Let's talk about the pool in your area."}
        buttonLabel={tr ? 'Ücretsiz keşif isteyin' : 'Request a free site visit'}
      />
    </main>
  );
}
