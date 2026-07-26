import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { isAppLocale, locales, type AppLocale } from '@/i18n/routing';
import { pageMetadata, absoluteUrl } from '@/lib/seo';
import { articleSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { posts, getPost, localizePost } from '@/content/blog';
import { BlogPostHero } from '@/components/blog/BlogPostHero';
import { BlogPostBody } from '@/components/blog/BlogPostBody';
import { Faq } from '@/components/site/Faq';
import { CtaBand } from '@/components/site/CtaBand';
import { Seam } from '@/components/ui/Seam';

export function generateStaticParams() {
  return locales.flatMap((locale) => posts.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const lp = localizePost(p, locale);
  return pageMetadata({
    locale: locale as AppLocale,
    href: { pathname: '/blog/[slug]', params: { slug } },
    title: lp.seoTitle,
    description: lp.excerpt,
    image: lp.cover,
    ogType: 'article',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);

  const post = getPost(slug);
  if (!post) notFound();
  const lp = localizePost(post, locale);

  const url = absoluteUrl({ pathname: '/blog/[slug]', params: { slug } }, locale);
  const ld = [
    articleSchema({
      headline: lp.title,
      description: lp.excerpt,
      url,
      image: lp.cover,
      datePublished: post.date,
      dateModified: post.updated,
    }),
    breadcrumbSchema([
      { name: locale === 'tr' ? 'Ana Sayfa' : 'Home', url: absoluteUrl('/', locale) },
      { name: locale === 'tr' ? 'Günce' : 'Journal', url: absoluteUrl('/blog', locale) },
      { name: lp.title, url },
    ]),
    faqSchema(lp.faq.map((f) => ({ q: f.q, a: f.a }))),
  ];

  return (
    <main>
      <JsonLd data={ld} />
      <BlogPostHero lp={lp} locale={locale} />
      <BlogPostBody lp={lp} />

      <Seam from="canvas" to="canvas" />

      <Faq
        eyebrow={locale === 'tr' ? 'Sık sorulan sorular' : 'Frequently asked'}
        title={locale === 'tr' ? 'Merak edilenler.' : 'Common questions.'}
        items={lp.faq}
      />

      <Seam from="canvas" to="deep" />

      <CtaBand
        title={locale === 'tr' ? 'Projenizi konuşalım.' : "Let's talk about your project."}
        buttonLabel={locale === 'tr' ? 'İletişime geçin' : 'Get in touch'}
      />
    </main>
  );
}
