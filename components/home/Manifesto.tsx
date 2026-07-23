'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { Eyebrow } from '@/components/ui/Eyebrow';

/**
 * The thesis. A short statement, held large and centred. As the section enters,
 * the whole sentence rises into place at once — a single, calm fade-up from
 * below. No pinning, no per-word writing; the same on desktop and phone.
 * Reduced-motion simply shows it fully lit.
 */
export function Manifesto() {
  const t = useTranslations('manifesto');
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        gsap.set('[data-line]', { opacity: 1, y: 0 });
        return;
      }

      gsap.from('[data-eyebrow]', {
        opacity: 0,
        y: 14,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 60%' },
      });

      // The whole statement rises up and inks in together — one motion, not word
      // by word — tied to scroll (scrub), so it reveals as you scroll down into
      // it rather than playing on its own the moment it enters.
      gsap.fromTo(
        '[data-line]',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top 82%',
            end: 'top 42%',
            scrub: true,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} data-nav-theme="light" className="bg-canvas">
      <div className="flex min-h-[100dvh] flex-col items-center justify-center px-[clamp(1.5rem,6vw,8rem)] py-[clamp(6rem,12vh,10rem)] text-center">
        <Eyebrow data-eyebrow index="I" tone="dark" className="mb-[clamp(2rem,5vh,3.5rem)] justify-center">
          {t('eyebrow')}
        </Eyebrow>

        <p
          data-line
          className="mx-auto max-w-[16ch] font-display text-[clamp(2.75rem,7.5vw,6.5rem)] font-[380] leading-[1.02] tracking-[-0.02em] text-ink opacity-0"
        >
          {t('body')}
        </p>
      </div>
    </section>
  );
}
