'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { Button } from '@/components/ui/Button';
import { SplitReveal } from '@/components/ui/SplitReveal';
import { Eyebrow } from '@/components/ui/Eyebrow';

/**
 * The catalogue as a monograph's index, not a shop window. The disciplines are
 * set down once — a still, numbered, hairline-ruled list — and the eye reads
 * them at its own pace. No prices, no cart, and no perpetual marquee: breadth
 * stated with confidence reads richer than breadth kept in motion.
 */
export function Products() {
  const t = useTranslations('products');
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-fade]', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: 'top 82%' },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-nav-theme="light"
      className="bg-canvas py-[clamp(7rem,14vh,12rem)]"
    >
      <div className="mx-auto mb-[clamp(3.5rem,7vh,6rem)] max-w-[46rem] px-[clamp(1.5rem,6vw,8rem)] text-center">
        <Eyebrow data-fade index="V" tone="dark" className="mb-8 justify-center">
          {t('eyebrow')}
        </Eyebrow>
        <SplitReveal as="h2" className="mx-auto mb-7 max-w-[40rem] font-display text-title text-ink">
          {t('title')}
        </SplitReveal>
        <p data-fade className="mx-auto mb-10 max-w-[38rem] text-lead font-light text-ink/65">
          {t('desc')}
        </p>
        <span data-fade className="inline-block">
          <Button variant="primary" tone="dark" href="/products">
            {t('cta')}
          </Button>
        </span>
      </div>

    </section>
  );
}
