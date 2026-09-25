import type { MetadataRoute } from 'next';
import { routing, type AppLocale, type AppPathname } from '@/i18n/routing';
import { absoluteUrl, type SeoHref } from '@/lib/seo';
import { visibleProducts, hasPhoto } from '@/content/catalogue';
import { projects } from '@/content/projects';
import { posts } from '@/content/blog';
import { districts } from '@/content/districts';

/**
 * One entry per page, keyed on the default-locale URL, each carrying the full
 * hreflang cluster in `alternates.languages`. Only product pages that actually
 * have a photo are listed — the detail route 404s otherwise, so an unphotographed
 * slug in the sitemap would be a soft-404 invitation.
 */
// Stable content dates rather than Date.now() at generation time — otherwise
// every URL's <lastmod> churns on each build and Google learns to ignore the
// signal entirely.
//
// But one site-wide constant is just as useless in the other direction: pages
// created or rewritten later still claimed the original launch date, so the
// sitemap told Google "nothing here has changed" about brand-new district pages
// and rewritten product pages. Each body of content now carries the date it was
// genuinely last revised. Bump the relevant one when you revise that content —
// and only then, so the signal stays honest.
const LAUNCH = new Date('2026-07-26');
/** Districts created, product body copy written, service pages expanded,
 *  home summary + privacy page added. */
const REVISED_2026_09_25 = new Date('2026-09-25');

/** Per-route revision dates for the static pages. Anything absent is untouched
 *  since launch and keeps the launch date. */
const STATIC_REVISED: Partial<Record<AppPathname, Date>> = {
  '/': REVISED_2026_09_25, // "Kısaca Seçkin" summary + FAQ
  '/about': REVISED_2026_09_25, // founder named
  '/construction': REVISED_2026_09_25, // depth sections, proof, FAQ 6 -> 10
  '/maintenance': REVISED_2026_09_25, // same
  '/products': REVISED_2026_09_25, // every product gained body copy
  '/contact': REVISED_2026_09_25, // consent-gated map
  '/service-areas': REVISED_2026_09_25, // new
  '/privacy': REVISED_2026_09_25, // new
};

function entry(
  href: SeoHref,
  opts: {
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    lastModified?: Date;
  },
): MetadataRoute.Sitemap[number] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = absoluteUrl(href, l as AppLocale);
  // Mirror the HTML <head> hreflang cluster, which also emits x-default -> TR.
  languages['x-default'] = absoluteUrl(href, routing.defaultLocale);
  return {
    url: absoluteUrl(href, routing.defaultLocale),
    lastModified: opts.lastModified ?? LAUNCH,
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
    { path: '/service-areas', priority: 0.8, cf: 'monthly' },
    { path: '/blog', priority: 0.7, cf: 'weekly' },
    { path: '/contact', priority: 0.7, cf: 'monthly' },
    { path: '/privacy', priority: 0.3, cf: 'yearly' },
  ];

  const staticEntries = staticRoutes.map((r) =>
    entry(r.path, {
      priority: r.priority,
      changeFrequency: r.cf,
      lastModified: STATIC_REVISED[r.path],
    }),
  );

  const productEntries = visibleProducts
    .filter((p) => hasPhoto(p.slug))
    .map((p) =>
      entry(
        { pathname: '/products/[slug]', params: { slug: p.slug } },
        // Each product went from a single sentence to 2-3 paragraphs.
        { priority: 0.6, changeFrequency: 'monthly', lastModified: REVISED_2026_09_25 },
      ),
    );

  const projectEntries = projects.map((p) =>
    entry(
      { pathname: '/projects/[slug]', params: { slug: p.slug } },
      { priority: 0.7, changeFrequency: 'monthly' },
    ),
  );

  const blogEntries = posts.map((p) =>
    entry(
      { pathname: '/blog/[slug]', params: { slug: p.slug } },
      // Posts carry real publish/update dates — use them instead of the site-wide
      // constant so the crawl-priority signal is meaningful for fresh content.
      { priority: 0.6, changeFrequency: 'monthly', lastModified: new Date(p.updated) },
    ),
  );

  const districtEntries = districts.map((d) =>
    entry(
      { pathname: '/service-areas/[slug]', params: { slug: d.slug } },
      // These pages did not exist before this date.
      { priority: 0.8, changeFrequency: 'monthly', lastModified: REVISED_2026_09_25 },
    ),
  );

  return [
    ...staticEntries,
    ...productEntries,
    ...projectEntries,
    ...blogEntries,
    ...districtEntries,
  ];
}
