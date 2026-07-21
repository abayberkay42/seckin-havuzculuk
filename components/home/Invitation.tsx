'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { gsap, useGSAP } from '@/lib/gsap';
import { Button } from '@/components/ui/Button';
import { SplitReveal } from '@/components/ui/SplitReveal';

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
        <SplitReveal
          as="h2"
          className="mb-8 max-w-[24ch] font-display text-display text-canvas"
        >
          {t('title')}
        </SplitReveal>
        <p
          data-fade
          className="mb-12 max-w-[38rem] text-lead font-light text-canvas/70"
        >
          {t('desc')}
        </p>

        <span data-fade className="inline-block">
          <Button variant="primary" tone="light" href="/contact">
            {t('cta')}
          </Button>
        </span>
      </div>
    </section>
  );
}
