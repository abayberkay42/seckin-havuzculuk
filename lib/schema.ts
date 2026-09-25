import { SITE_URL, SITE_NAME } from '@/lib/seo';
import { PHONE_DISPLAY, EMAIL, INSTAGRAM_URL, GBP_URL } from '@/lib/contact';

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
    sameAs: [INSTAGRAM_URL, GBP_URL],
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

/** A blog post -> BlogPosting rich result. Author/publisher = the firm. */
export function articleSchema(input: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  inLanguage?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.headline,
    description: input.description,
    url: input.url,
    mainEntityOfPage: input.url,
    ...(input.image ? { image: `${SITE_URL}${input.image}` } : {}),
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: input.inLanguage ?? 'tr',
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

/**
 * An ordered list of the entries on a listing page (products, projects,
 * service areas). Lets search and AI engines enumerate the items as discrete,
 * linked things rather than inferring them from a card grid.
 */
export function itemListSchema(name: string, items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  };
}

/**
 * A completed pool project as a portfolio piece. schema.org has no "built
 * structure" type, so CreativeWork (the work the firm made) is the honest fit;
 * creator points at the business node, locationCreated at the real place.
 */
export function projectSchema(input: {
  name: string;
  description: string;
  url: string;
  image: string;
  place: string;
  year: string;
  inLanguage: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: input.name,
    description: input.description,
    url: input.url,
    image: `${SITE_URL}${input.image}`,
    creator: { '@id': ORG_ID },
    locationCreated: { '@type': 'Place', name: input.place },
    dateCreated: input.year,
    inLanguage: input.inLanguage,
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

/**
 * A service scoped to ONE district — areaServed narrowed to that single city so
 * Google reads "this URL = this district", the schema leg of the per-district
 * service pages. Provider points back to the one business node via @id.
 */
export function districtServiceSchema(input: {
  districtName: string;
  url: string;
  description: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${input.serviceType} — ${input.districtName}`,
    serviceType: input.serviceType,
    description: input.description,
    url: input.url,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'City', name: input.districtName },
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
