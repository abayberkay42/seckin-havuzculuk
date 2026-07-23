'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { Button } from '@/components/ui/Button';
import { Frame } from '@/components/ui/Frame';
import { Eyebrow } from '@/components/ui/Eyebrow';

type Project = { name: string; place: string; year: string };

/**
 * The peak. On desktop, vertical scroll drives a horizontal pan across the
 * portfolio — pinned so the viewport holds still while it plays. On phones a
 * pinned horizontal pan fights native scroll (and its pin-spacer destabilises
 * the sections below it), so the cards simply stack and flow, each revealing as
 * it enters. No pin on mobile.
 */
export function SignatureProjects() {
  const t = useTranslations('projects');
  const items = t.raw('items') as Project[];
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: pinned horizontal pan.
      mm.add('(min-width: 901px)', () => {
        const el = track.current;
        if (!el) return;
        const getDistance = () => el.scrollWidth - window.innerWidth;
        gsap.to(el, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => '+=' + getDistance(),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      // Mobile: no pin. Clear any leftover x-translate and reveal the stacked
      // cards gently as they scroll in.
      mm.add('(max-width: 900px)', () => {
        gsap.set(track.current, { x: 0 });
        gsap.from('[data-proj]', {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: root.current, start: 'top 72%' },
        });
      });
    },
    { scope: root },
  );

  return (
    <section data-nav-theme="dark" className="bg-deep">
      <div
        ref={root}
        className="relative overflow-hidden [touch-action:pan-y] min-[901px]:h-[100dvh]"
      >
        {/* section background — a photo held behind the cards, darkened so the
            deep water stays and the content reads. */}
        <Image
          src="/projects-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(13,31,41,0.94)_0%,rgba(13,31,41,0.78)_50%,rgba(13,31,41,0.62)_100%)]" />

        <div
          ref={track}
          className="relative flex flex-col gap-[clamp(2.5rem,6vh,4rem)] px-[clamp(1.5rem,6vw,8rem)] py-[clamp(4.5rem,10vh,6rem)] min-[901px]:h-full min-[901px]:flex-row min-[901px]:items-center min-[901px]:gap-[clamp(1.5rem,3vw,3rem)] min-[901px]:py-0 min-[901px]:will-change-transform"
        >
          {/* opening title panel */}
          <div
            data-proj
            className="flex w-full shrink-0 flex-col items-center justify-center text-center min-[901px]:h-full min-[901px]:w-[min(85vw,34rem)] min-[901px]:pr-8"
          >
            <Eyebrow index="III" tone="light" className="mb-8 justify-center">
              {t('eyebrow')}
            </Eyebrow>
            <h2 className="font-display text-display text-canvas">{t('title')}</h2>
          </div>

          {/* project cards */}
          {items.map((project, i) => (
            <article
              key={project.name}
              data-proj
              className="relative aspect-[4/5] w-full shrink-0 min-[901px]:aspect-auto min-[901px]:h-[68vh] min-[901px]:w-[min(80vw,32rem)]"
            >
              <Frame
                variant={i % 2 === 0 ? 'water' : 'stone'}
                src={i === 0 ? '/proje-ege-kiyisi.webp' : undefined}
                alt={project.name}
                className="h-full w-full"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
                <div>
                  <span className="font-mono text-label uppercase text-canvas/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-display text-[1.9rem] leading-tight text-canvas">
                    {project.name}
                  </h3>
                </div>
                <span className="font-mono text-label uppercase text-canvas/60">
                  {project.place} · {project.year}
                </span>
              </div>
            </article>
          ))}

          {/* closing CTA panel */}
          <div
            data-proj
            className="flex w-full shrink-0 flex-col items-center justify-center min-[901px]:h-full min-[901px]:w-[min(70vw,22rem)] min-[901px]:items-start"
          >
            <Button variant="secondary" tone="light" href="/projects">
              {t('cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
