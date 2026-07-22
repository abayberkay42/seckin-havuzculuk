import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

/**
 * The section marker. Not the generic agency hairline-and-kicker — every opener
 * carries Seçkin's own interlocking mark (the logo motif, echoed in the closing
 * invitation and the product plinths). A quiet maker's stamp that could belong
 * to no other house. Tone follows the ground: 'light' for dark sections, 'dark'
 * for light ones. Extra props (data-* for scroll reveals) pass straight through.
 */
export function Eyebrow({
  children,
  tone = 'dark',
  index,
  className = '',
  ...rest
}: {
  children: ReactNode;
  tone?: 'light' | 'dark';
  /** Optional chapter numeral (e.g. a Roman "III") — a monograph spine for the
   *  homepage's major sections. Distinct from the Arabic "01/02" step numbers. */
  index?: string;
} & ComponentPropsWithoutRef<'span'>) {
  const light = tone === 'light';
  const accent = light ? 'text-steel' : 'text-bronze';
  const label = light ? 'text-canvas/55' : 'text-ink/45';

  return (
    <span
      className={`flex items-center gap-3 font-mono text-label uppercase ${label} ${className}`}
      {...rest}
    >
      {index && (
        <span
          className={`font-display text-[1.05rem] italic leading-none ${accent}`}
          aria-hidden="true"
        >
          {index}
        </span>
      )}
      {/* interlocking mark — the brand's own signature, ~11px */}
      <span className={`relative block h-[0.7rem] w-[0.7rem] shrink-0 ${accent}`} aria-hidden="true">
        <span className="absolute inset-0 rotate-45 rounded-[2px] border border-current opacity-45" />
        <span className="absolute inset-[3px] rotate-45 rounded-[1px] border border-current" />
      </span>
      {children}
    </span>
  );
}
