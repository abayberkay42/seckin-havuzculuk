import { Fragment, type ReactNode } from 'react';
import { Link } from '@/i18n/navigation';
import { LINK_TOKEN, PAGE_TARGETS, type PageKey } from '@/content/blog';

/**
 * Renders article prose with contextual internal links. Authors write
 *   [anchor text](product:sivi-ph-quardex)   → product detail page
 *   [anchor text](post:havuz-suyu-yesermesi)  → another article
 *   [anchor text](area:alacati)               → a service-area (district) page
 *   [anchor text](page:maintenance)           → a static service/hub page
 * inside a paragraph or bullet. Every target is validated at build time in
 * content/blog.ts, so a typo'd slug fails the build instead of shipping a 404.
 * In-sentence links with descriptive anchors carry far more weight than a
 * list of links bolted under the article.
 */
export function RichText({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(new RegExp(LINK_TOKEN.source, 'g'))) {
    const [whole, anchor, kind, target] = m;
    const at = m.index ?? 0;
    if (at > last) out.push(<Fragment key={i++}>{text.slice(last, at)}</Fragment>);
    out.push(
      // In running prose a link must be recognisable at rest, not only on hover
      // (and not by colour alone) — a persistent hairline bronze underline that
      // firms up on hover keeps it legible yet quiet.
      <Link
        key={i++}
        href={hrefFor(kind, target)}
        className="text-ink underline decoration-bronze/45 decoration-1 underline-offset-[0.22em] transition-colors duration-300 hover:text-bronze hover:decoration-bronze"
      >
        {anchor}
      </Link>,
    );
    last = at + whole.length;
  }
  if (last < text.length) out.push(<Fragment key={i++}>{text.slice(last)}</Fragment>);
  return <>{out}</>;
}

function hrefFor(kind: string, target: string) {
  switch (kind) {
    case 'product':
      return { pathname: '/products/[slug]' as const, params: { slug: target } };
    case 'post':
      return { pathname: '/blog/[slug]' as const, params: { slug: target } };
    case 'area':
      return { pathname: '/service-areas/[slug]' as const, params: { slug: target } };
    default:
      return PAGE_TARGETS[target as PageKey];
  }
}
