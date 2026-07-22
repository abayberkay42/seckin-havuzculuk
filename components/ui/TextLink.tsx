import { type ReactNode } from 'react';
import { Link } from '@/i18n/navigation';

type Href = React.ComponentProps<typeof Link>['href'];

/**
 * The canonical inline link. A rising waterline underline (.link-water) plus an
 * optional arrow that drifts on hover. Server-safe — no client JS — so it can be
 * used anywhere, including server components like the footer. For the magnetic,
 * illuminated pill CTA use <Button> instead; this is for text in the flow.
 */
export function TextLink({
  children,
  href,
  externalHref,
  arrow = false,
  accent = false,
  className = '',
}: {
  children: ReactNode;
  href?: Href;
  externalHref?: string;
  /** Trailing arrow that slides forward on hover — for "read more" style links. */
  arrow?: boolean;
  /** Bronze waterline instead of matching the text colour. */
  accent?: boolean;
  className?: string;
}) {
  const cls = `group inline-flex items-center gap-2 ${className}`;
  const line = `link-water${accent ? ' link-water--bronze' : ''}`;

  const inner = (
    <>
      <span className={line}>{children}</span>
      {arrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-[var(--dur-base)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );

  if (externalHref) {
    return (
      <a href={externalHref} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return <span className={cls}>{inner}</span>;
}
