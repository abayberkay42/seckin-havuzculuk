'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { Eyebrow } from '@/components/ui/Eyebrow';

/**
 * The thesis. A short statement, held large and centred while the section pins;
 * as you scroll, the words ink in one by one — from faint ghost to full weight —
 * so the sentence writes itself. Pinned, scrubbed, deliberate. Reduced-motion
 * (and touch, where pinning is awkward) simply shows it fully lit.
 */
export function Manifesto() {
  const t = useTranslations('manifesto');
  const root = useRef<HTMLElement>(null);
  const words = t('body').split(' ');

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const coarse = window.matchMedia('(pointer: coarse)').matches;
      if (reduce || coarse) {
        gsap.set('[data-word]', { opacity: 1 });
        return;
      }

      gsap.from('[data-eyebrow]', {
        opacity: 0,
        y: 14,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 60%' },
      });

      // The section holds while the statement writes itself: each word is fully
      // invisible until the pinned scroll brings it in — no ghost beforehand.
      gsap.set('[data-word]', { opacity: 0 });
      gsap.to('[data-word]', {
        opacity: 1,
        ease: 'none',
        stagger: 1,
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: '+=90%',
          pin: true,
          scrub: 1,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} data-nav-theme="light" className="bg-canvas">
      <div className="flex min-h-[100dvh] flex-col items-center justify-center px-[clamp(1.5rem,6vw,8rem)] py-[clamp(6rem,12vh,10rem)] text-center">
        <Eyebrow data-eyebrow index="I" tone="dark" className="mb-[clamp(2rem,5vh,3.5rem)] justify-center">
          {t('eyebrow')}
        </Eyebrow>

        <p className="mx-auto max-w-[16ch] font-display text-[clamp(2.75rem,7.5vw,6.5rem)] font-[380] leading-[1.02] tracking-[-0.02em] text-ink">
          {words.map((word, i) => (
            <span key={i}>
              <span data-word className="inline-block opacity-0">
                {word}
              </span>
              {i < words.length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
