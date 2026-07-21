'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';

/**
 * The documentary's thesis. As you scroll through, the words lift from a faint
 * ghost to full ink — the statement "writes itself". No pin; the reveal is
 * simply tied to scroll progress.
 */
export function Manifesto() {
  const t = useTranslations('manifesto');
  const root = useRef<HTMLElement>(null);
  const words = t('body').split(' ');

  useGSAP(
    () => {
      gsap.from('[data-eyebrow]', {
        opacity: 0,
        x: -24,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 80%' },
      });

      gsap.to('[data-word]', {
        opacity: 1,
        ease: 'none',
        stagger: 0.4,
        scrollTrigger: {
          trigger: root.current,
          start: 'top 68%',
          end: 'bottom 78%',
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-nav-theme="light"
      className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] py-[clamp(8rem,18vh,16rem)]"
    >
      <div className="max-w-[66rem]">
        <span
          data-eyebrow
          className="mb-10 flex items-center gap-4 font-mono text-label uppercase text-ink/50"
        >
          <span className="h-px w-10 bg-bronze/60" />
          {t('eyebrow')}
        </span>

        <p className="font-display text-display text-ink">
          {words.map((word, i) => (
            <span key={i} data-word className="opacity-[0.14]">
              {word}
              {i < words.length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
