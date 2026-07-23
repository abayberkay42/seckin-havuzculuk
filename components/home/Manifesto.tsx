'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';

/**
 * The thesis, as a cinematic bridge — modelled on Doğrular's manifesto scene.
 * The section is 2 viewports tall; its inner frame is CSS-`sticky` so it holds
 * still (smoother than a ScrollTrigger pin, no pin-spacer / URL-bar jump) while a
 * single scrubbed timeline plays: a hairline opens from the centre, the sentence
 * lifts in in three beats, it holds, then drifts up and fades as a bronze line
 * stretches across. Reduced-motion shows it fully lit at once.
 */
export function Manifesto() {
  const t = useTranslations('manifesto');

  // Split the localised statement into three beats: the first clause splits at
  // its last word, the second clause is the closing line.
  //   TR: "Biz havuz" · "değil," · "sükûnet tasarlarız."
  //   EN: "We don't design" · "pools," · "we design stillness."
  const body = t('body');
  const [clause1 = body, clause2 = ''] = body.split(', ');
  const cut = clause1.lastIndexOf(' ');
  const beat1 = cut > 0 ? clause1.slice(0, cut) : clause1;
  const beat2 = (cut > 0 ? clause1.slice(cut + 1) : '') + (clause2 ? ',' : '');
  const line2 = clause2;

  const section = useRef<HTMLElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);
  const w1 = useRef<HTMLSpanElement>(null);
  const w2 = useRef<HTMLSpanElement>(null);
  const l2 = useRef<HTMLDivElement>(null);
  const gold = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        gsap.set([w1.current, w2.current, l2.current], { opacity: 1, y: 0 });
        gsap.set([intro.current, gold.current], { scaleX: 1 });
        return;
      }

      gsap.set(intro.current, { scaleX: 0 });
      gsap.set([w1.current, w2.current], { opacity: 0, y: 20 });
      gsap.set(l2.current, { opacity: 0, y: 28 });
      gsap.set(gold.current, { scaleX: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2, // ~2s lag → luxurious, unhurried
        },
      });

      tl.to(intro.current, { scaleX: 1, ease: 'none', duration: 0.18 }, 0)
        .to(w1.current, { opacity: 1, y: 0, ease: 'none', duration: 0.13 }, 0.18)
        .to(w2.current, { opacity: 1, y: 0, ease: 'none', duration: 0.13 }, 0.28)
        .to(l2.current, { opacity: 1, y: 0, ease: 'none', duration: 0.2 }, 0.42)
        // still moment 0.64 → 0.76, then drift up + fade, ending exactly at 1.0
        .to(text.current, { y: -52, opacity: 0, ease: 'none', duration: 0.24 }, 0.76)
        .to(gold.current, { scaleX: 1, ease: 'none', duration: 0.22 }, 0.78);
    },
    { scope: section },
  );

  return (
    <section
      ref={section}
      data-nav-theme="light"
      className="relative h-[200svh] bg-canvas"
      aria-label={t('eyebrow')}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden px-[clamp(1.5rem,6vw,8rem)]">
        {/* intro hairline — opens from centre */}
        <div
          ref={intro}
          aria-hidden="true"
          className="mb-[clamp(2rem,5vh,4rem)] h-px w-[clamp(60px,8vw,120px)] origin-center bg-ink/25"
        />

        {/* the statement */}
        <div ref={text} className="select-none text-center">
          <div className="mb-[0.06em] flex items-baseline justify-center">
            <span
              ref={w1}
              className="mr-[0.26em] inline-block font-display text-[clamp(2.75rem,9vw,9rem)] font-normal leading-none tracking-[-0.03em] text-ink"
            >
              {beat1}
            </span>
            <span
              ref={w2}
              className="inline-block font-display text-[clamp(2.75rem,9vw,9rem)] font-normal leading-none tracking-[-0.03em] text-ink"
            >
              {beat2}
            </span>
          </div>
          <div
            ref={l2}
            className="font-display text-[clamp(2.75rem,9vw,9rem)] font-normal leading-none tracking-[-0.03em] text-ink"
          >
            {line2}
          </div>
        </div>

        {/* bronze accent line — stretches as the text drifts away */}
        <div
          ref={gold}
          aria-hidden="true"
          className="mt-[clamp(2rem,5vh,4rem)] h-px w-[clamp(160px,52vw,780px)] origin-left bg-bronze/85"
        />
      </div>
    </section>
  );
}
