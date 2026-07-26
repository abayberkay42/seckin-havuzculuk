import type { MetadataRoute } from 'next';
import { routing, type AppLocale, type AppPathname } from '@/i18n/routing';
import { absoluteUrl, type SeoHref } from '@/lib/seo';
import { visibleProducts, hasPhoto } from '@/content/catalogue';
import { projects } from '@/content/projects';

/**
 * One entry per page, keyed on the default-locale URL, each carrying the full
 * hreflang cluster in `alternates.languages`. Only product pages that actually
 * have a photo are listed — the detail route 404s otherwise, so an unphotographed
 * slug in the sitemap would be a soft-404 invitation.
 */
// A stable content date rather than Date.now() at generation time — otherwise
// every URL's <lastmod> churns on each build and Google learns to ignore the
// signal. Bump this when content is meaningfully revised.
const LAST_MODIFIED = new Date('2026-07-26');

function entry(
  href: SeoHref,
  opts: { priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] },
): MetadataRoute.Sitemap[number] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = absoluteUrl(href, l as AppLocale);
  return {
    url: absoluteUrl(href, routing.defaultLocale),
    lastModified: LAST_MODIFIED,
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: AppPathname; priority: number; cf: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1.0, cf: 'weekly' },
    { path: '/about', priority: 0.8, cf: 'monthly' },
    { path: '/construction', priority: 0.9, cf: 'monthly' },
    { path: '/maintenance', priority: 0.9, cf: 'monthly' },
    { path: '/products', priority: 0.8, cf: 'weekly' },
    { path: '/projects', priority: 0.8, cf: 'weekly' },
    // '/blog' intentionally omitted until it has real published articles — it is
    // noindex for now (see app/[locale]/blog/page.tsx).
    { path: '/contact', priority: 0.7, cf: 'monthly' },
  ];

  const staticEntries = staticRoutes.map((r) =>
    entry(r.path, { priority: r.priority, changeFrequency: r.cf }),
  );

  const productEntries = visibleProducts
    .filter((p) => hasPhoto(p.slug))
    .map((p) =>
      entry(
        { pathname: '/products/[slug]', params: { slug: p.slug } },
        { priority: 0.6, changeFrequency: 'monthly' },
      ),
    );

  const projectEntries = projects.map((p) =>
    entry(
      { pathname: '/projects/[slug]', params: { slug: p.slug } },
      { priority: 0.7, changeFrequency: 'monthly' },
    ),
  );

  return [...staticEntries, ...productEntries, ...projectEntries];
}
