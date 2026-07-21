import { defineRouting } from 'next-intl/routing';

export const locales = ['tr', 'en'] as const;
export type AppLocale = (typeof locales)[number];

/**
 * Internal path -> per-locale public slug.
 *
 * Folders under app/[locale] are named after the INTERNAL key (e.g. `construction`),
 * while visitors see /tr/havuz-insaati or /en/pool-construction. Turkish clients
 * search in Turkish, so the Turkish slug is the primary one, not an afterthought.
 */
export const pathnames = {
  '/': '/',
  '/about': { tr: '/hakkimizda', en: '/about' },
  '/construction': { tr: '/havuz-insaati', en: '/pool-construction' },
  '/maintenance': { tr: '/havuz-bakimi', en: '/pool-maintenance' },
  '/products': { tr: '/urunler', en: '/products' },
  '/projects': { tr: '/projeler', en: '/projects' },
  '/blog': '/blog',
  '/contact': { tr: '/iletisim', en: '/contact' },
} as const;

export const routing = defineRouting({
  locales,
  defaultLocale: 'tr',
  localePrefix: 'always',
  pathnames,
});

export type AppPathname = keyof typeof pathnames;

export function isAppLocale(value: string | undefined): value is AppLocale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}
