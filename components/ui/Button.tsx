'use client';

import { type ReactNode } from 'react';
import { Link } from '@/i18n/navigation';
import { Magnetic } from '@/components/ui/Magnetic';

type Href = React.ComponentProps<typeof Link>['href'];

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  /** The button's own colour scheme: 'light' for dark sections, 'dark' for light sections. */
  tone?: 'light' | 'dark';
  href?: Href;
  externalHref?: string;
  onClick?: () => void;
  /** Trailing icon. Omit for the default arrow; pass null to hide it. */
  icon?: ReactNode | null;
  className?: string;
};

function Arrow({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path
        d="M4 11L11 4M11 4H5M11 4V10"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * One button, held with confidence. A luxury object, not a UI control:
 *  - glass top highlight, delicate ambient shadow, architectural padding
 *  - a gentle magnetic pull, a whisper of lift, an icon that travels
 * That is all. No cursor-chasing glow, no click ripple — restraint reads as
 * certainty. Transform/opacity only. Primary commands; secondary stays lighter.
 */
export function Button({
  children,
  variant = 'primary',
  tone = 'dark',
  href,
  externalHref,
  onClick,
  icon,
  className = '',
}: ButtonProps) {
  const primary = variant === 'primary';
  const light = tone === 'light';

  const base =
    'group relative inline-flex items-center gap-4 overflow-hidden rounded-full transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]';
  const size = primary ? 'py-2.5 pl-8 pr-2.5' : 'px-7 py-3';
  const skin = primary
    ? light
      ? 'bg-canvas text-ink shadow-[0_12px_34px_-14px_rgba(6,18,24,0.55)] hover:shadow-[0_22px_48px_-16px_rgba(6,18,24,0.6)]'
      : 'bg-ink text-canvas shadow-[0_12px_34px_-14px_rgba(6,18,24,0.5)] hover:shadow-[0_22px_48px_-16px_rgba(6,18,24,0.55)]'
    : light
      ? 'border border-canvas/25 text-canvas hover:border-canvas/55'
      : 'border border-ink/20 text-ink hover:border-ink/45';

  const iconEl = icon === null ? null : (icon ?? <Arrow size={primary ? 15 : 14} />);

  const content = (
    <>
      {primary && (
        <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/25" />
      )}
      <span className="relative z-10 text-[0.95rem]">{children}</span>
      {iconEl !== null &&
        (primary ? (
          <span
            className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
              light ? 'bg-ink text-canvas' : 'bg-canvas text-ink'
            }`}
          >
            {iconEl}
          </span>
        ) : (
          <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
            {iconEl}
          </span>
        ))}
    </>
  );

  const cls = `${base} ${size} ${skin} ${className}`;

  const el = href ? (
    <Link href={href} className={cls}>
      {content}
    </Link>
  ) : externalHref ? (
    <a href={externalHref} target="_blank" rel="noopener noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>
      {content}
    </button>
  );

  return <Magnetic strength={0.3}>{el}</Magnetic>;
}
