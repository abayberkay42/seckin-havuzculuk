import type { Metadata } from 'next';
import { getPathname } from '@/i18n/navigation';
import { routing, type AppLocale, type AppPathname } from '@/i18n/routing';

/**
 * Single source of truth for anything that needs the production origin —
 * metadataBase, canonical URLs, hreflang alternates, sitemap, JSON-LD.
 * The site hasn't been pointed at the domain yet; the domain is bought and
 * everything is authored against it so the cutover is a no-op.
 */
export const SITE_URL = 'https://seckinhavuzculuk.com';
export const SITE_NAME = 'Seçkin Havuzculuk';
export const DEFAULT_OG_IMAGE = '/og-default.jpg';

/** next-intl locale -> OpenGraph locale tag. */
const OG_LOCALE: Record<AppLocale, string> = { tr: 'tr_TR', en: 'en_US' };

/**
 * A getPathname `href` — either a plain internal key (`/about`) or a
 * parameterised one (`{ pathname: '/projects/[slug]', params: { slug } }`).
 */
export type SeoHref =
  | AppPathname
  | { pathname: AppPathname; params: Record<string, string> };

/** Absolute URL for an internal route in a given locale. */
export function absoluteUrl(href: SeoHref, locale: AppLocale): string {
  // getPathname's typing is intentionally strict; our SeoHref is a safe subset.
  const path = getPathname({ href: href as never, locale });
  return `${SITE_URL}${path}`;
}

/**
 * canonical (self, current locale) + hreflang map for every locale, plus
 * x-default pointing at the default locale (tr). Google needs each localised
 * URL to declare the whole cluster for the TR/EN pair to be understood.
 */
export function buildAlternates(href: SeoHref, locale: AppLocale): Metadata['alternates'] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = absoluteUrl(href, l);
  }
  languages['x-default'] = absoluteUrl(href, routing.defaultLocale);
  return { canonical: absoluteUrl(href, locale), languages };
}

type PageMetaInput = {
  locale: AppLocale;
  href: SeoHref;
  title: string;
  description: string;
  /** Route-specific social image; falls back to the site default. */
  image?: string;
  /** article for blog/project storytelling, website otherwise. */
  ogType?: 'website' | 'article';
};

/**
 * The one helper every page's generateMetadata calls. Produces canonical +
 * hreflang + OpenGraph + Twitter in one shot so no route can silently ship
 * without them. `title` is the short, page-specific part — the locale layout's
 * template appends the brand.
 */
export function pageMetadata({
  locale,
  href,
  title,
  description,
  image,
  ogType = 'website',
}: PageMetaInput): Metadata {
  const alternates = buildAlternates(href, locale);
  const canonical = typeof alternates?.canonical === 'string' ? alternates.canonical : SITE_URL;
  const img = image ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates,
    openGraph: {
      type: ogType,
      url: canonical,
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      title,
      description,
      images: [{ url: img, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [img],
    },
  };
}
