'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { gsap, useGSAP } from '@/lib/gsap';
import { Link } from '@/i18n/navigation';

// three.js only loads here, client-side, and only for the home page's closing.
const WaterSurface = dynamic(
  () => import('@/components/atmosphere/WaterSurface').then((m) => m.WaterSurface),
  { ssr: false },
);

/**
 * The closing frame — the film resolves to still water, bookending the hero.
 * The two nested squares echo the logo's interlocking mark.
 */
export function Invitation() {
  const t = useTranslations('invitation');
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-fade]', {
        opacity: 0,
        y: 44,
        filter: 'blur(8px)',
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.14,
        scrollTrigger: { trigger: root.current, start: 'top 70%' },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-nav-theme="dark"
      className="relative overflow-hidden bg-deep px-[clamp(1.5rem,6vw,8rem)] py-[clamp(9rem,20vh,18rem)]"
    >
      {/* still-water ambient — the calm bookend of the hero */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_120%,#1d4658_0%,#16303c_50%,#0d1f29_100%)]" />
      <div className="animate-glow-breathe absolute left-1/2 top-1/3 h-[50vmax] w-[50vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(130,175,216,0.16),transparent_72%)]" />

      {/* interactive water surface — covers the gradient when WebGL is available */}
      <WaterSurface />
      {/* legibility scrim so the centred text stays readable over the caustics */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(65%_60%_at_50%_50%,rgba(13,31,41,0.5),transparent_75%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* interlocking mark */}
        <span data-fade className="relative mb-12 inline-block h-14 w-14">
          <span className="absolute inset-0 rotate-45 rounded-[7px] border border-steel/40" />
          <span className="absolute inset-[7px] rotate-45 rounded-[5px] border border-steel/70" />
        </span>

        <span
          data-fade
          className="mb-8 block font-mono text-label uppercase text-aqua/70"
        >
          {t('eyebrow')}
        </span>
        <h2
          data-fade
          className="mb-8 max-w-[24ch] font-display text-display text-canvas"
        >
          {t('title')}
        </h2>
        <p
          data-fade
          className="mb-12 max-w-[38rem] text-lead font-light text-canvas/70"
        >
          {t('desc')}
        </p>

        <Link
          data-fade
          href="/contact"
          className="group inline-flex items-center gap-4 rounded-full bg-canvas py-2.5 pl-8 pr-2.5 text-ink transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
        >
          <span>{t('cta')}</span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-canvas transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M4 11L11 4M11 4H5M11 4V10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
