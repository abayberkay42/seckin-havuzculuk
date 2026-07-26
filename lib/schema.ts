import { SITE_URL, SITE_NAME } from '@/lib/seo';
import { PHONE_DISPLAY, EMAIL } from '@/lib/contact';

/**
 * JSON-LD builders. Kept as plain objects so pages can compose a graph and
 * render it through <JsonLd>. The business identity is the anchor node — an
 * @id every other node references, so Google reads one connected entity rather
 * than scattered snippets.
 */

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/logo.png`;

/** Telephone in E.164 for schema (display string carries spaces). */
const PHONE_E164 = '+' + PHONE_DISPLAY.replace(/[^\d]/g, '');

/** Districts the firm actually serves — grounds the local intent. */
const AREA_SERVED = ['Çeşme', 'Alaçatı', 'Ilıca', 'Seferihisar', 'Karaburun', 'Urla', 'İzmir'].map(
  (name) => ({ '@type': 'City', name }),
);

/**
 * The firm as a local, on-site construction business. Pool building/renovation
 * has no dedicated schema type, so HomeAndConstructionBusiness (a LocalBusiness
 * subtype) is the closest honest fit.
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': ORG_ID,
    name: SITE_NAME,
    legalName: 'STC Royal A.Ş.',
    url: SITE_URL,
    logo: LOGO_URL,
    image: `${SITE_URL}/og-default.jpg`,
    telephone: PHONE_E164,
    email: EMAIL,
    priceRange: '₺₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Alaçatı, 16088 Sokak C Blok No: 2-A',
      addressLocality: 'Çeşme',
      addressRegion: 'İzmir',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.29994608,
      longitude: 26.37410778,
    },
    areaServed: AREA_SERVED,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    foundingDate: '2017',
    knowsAbout: [
      'Havuz tasarımı',
      'Havuz inşaatı',
      'Havuz renovasyonu',
      'Havuz bakımı',
      'Sonsuzluk havuzu',
      'Havuz kimyasalları',
    ],
    // No public social profiles supplied yet; add here when available.
    sameAs: [] as string[],
  };
}

/** Site-level node so sitelinks/site name resolve cleanly. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: ['tr', 'en'],
    publisher: { '@id': ORG_ID },
  };
}

/** Breadcrumb trail. items = [{name, url}] in order, home first. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** A catalogue product. These aren't sold online, so no Offer/price. */
export function productSchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
  brand?: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: input.name,
    description: input.description,
    url: input.url,
    ...(input.image ? { image: `${SITE_URL}${input.image}` } : {}),
    ...(input.brand ? { brand: { '@type': 'Brand', name: input.brand } } : {}),
    ...(input.category ? { category: input.category } : {}),
    seller: { '@id': ORG_ID },
  };
}

/** FAQ block -> FAQPage rich result. items = [{q, a}]. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

/** A service the firm offers (construction, maintenance). */
export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: input.url,
    serviceType: input.serviceType,
    provider: { '@id': ORG_ID },
    areaServed: AREA_SERVED,
  };
}
