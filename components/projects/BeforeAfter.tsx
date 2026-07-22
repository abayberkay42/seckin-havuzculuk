'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { Eyebrow } from '@/components/ui/Eyebrow';

// three.js loads only for this section, client-side.
const RippleReveal = dynamic(
  () => import('./RippleReveal').then((m) => m.RippleReveal),
  { ssr: false },
);

const BEFORE = 'bg-[radial-gradient(130%_130%_at_30%_20%,#6e7168_0%,#4b4e46_60%,#34352f_100%)]';
const AFTER = 'bg-[radial-gradient(130%_130%_at_28%_18%,#20516a_0%,#16303c_58%,#0d1f29_100%)]';

/**
 * A before/after that is NOT a slider. The WebGL layer (RippleReveal) turns the
 * frame into water you reveal by touch. Where WebGL is unavailable
 * (reduced-motion / small screens) the CSS layer beneath provides an accessible
 * hover/tap cross-fade instead.
 */
export function BeforeAfter() {
  const t = useTranslations('projectsPage');

  return (
    <section
      data-nav-theme="light"
      className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(6rem,12vh,10rem)]"
    >
      <Eyebrow tone="dark" className="mb-12 justify-center">
        {t('beforeAfter')}
      </Eyebrow>

      <div className="group relative aspect-[16/9] max-h-[82vh] w-full overflow-hidden rounded-[1.75rem]">
        {/* Accessible fallback: old pool, cross-fading to new on hover/tap */}
        <div className={`absolute inset-0 z-0 ${BEFORE}`} />
        <div
          className={`absolute inset-0 z-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-focus-within:opacity-100 ${AFTER}`}
        />

        {/* The surprise: reveal-by-touch water (covers the fallback where able) */}
        <RippleReveal />

        {/* labels + hint, above everything, non-interactive */}
        <div className="pointer-events-none absolute inset-0 z-[2]">
          <span className="absolute left-6 top-6 rounded-full bg-black/30 px-3 py-1 font-mono text-label uppercase text-canvas/85 backdrop-blur-sm">
            {t('beforeLabel')}
          </span>
          <span className="absolute right-6 top-6 rounded-full bg-black/25 px-3 py-1 font-mono text-label uppercase text-canvas/85 backdrop-blur-sm">
            {t('afterLabel')}
          </span>
          <span className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-label uppercase text-canvas/55">
            <span className="inline-block h-1.5 w-1.5 animate-glow-breathe rounded-full bg-aqua" />
            {t('touchHint')}
          </span>
        </div>
      </div>
    </section>
  );
}
