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
 * The peak. Vertical scroll drives a horizontal pan across the portfolio — the
 * camera glides along a wall of finished pools. Pinned (on every screen size)
 * because the horizontal translation needs the viewport held still while it
 * plays.
 */
export function SignatureProjects() {
  const t = useTranslations('projects');
  const items = t.raw('items') as Project[];
  // covers align to the items order (Ege · Zeytinlik · Tepe Malikâne · Deniz Terası)
  const covers = [
    '/proj-ege-kiyisi.webp',
    '/proj-zeytinlik.webp',
    '/proj-tepe-malikane.webp',
    '/proj-deniz-terasi.webp',
  ];
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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
    },
    { scope: root },
  );

  return (
    <section data-nav-theme="dark" className="bg-deep">
      <div ref={root} className="relative h-[100svh] overflow-hidden [touch-action:pan-y]">
        {/* section background — a photo held behind the panning cards, darkened
            so the deep water stays and the content reads. */}
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
          className="flex h-full items-center gap-[clamp(1.5rem,3vw,3rem)] pl-[clamp(1.5rem,6vw,8rem)] pr-[clamp(1.5rem,6vw,8rem)] will-change-transform"
        >
          {/* opening title panel */}
          <div className="flex h-full w-[min(85vw,34rem)] shrink-0 flex-col items-center justify-center pr-8 text-center">
            <Eyebrow index="III" tone="light" className="mb-8 justify-center">
              {t('eyebrow')}
            </Eyebrow>
            <h2 className="font-display text-display text-canvas">{t('title')}</h2>
          </div>

          {/* project cards */}
          {items.map((project, i) => (
            <article
              key={project.name}
              className="relative aspect-[3/2] h-[min(62vh,600px)] w-auto shrink-0"
            >
              <Frame
                variant={i % 2 === 0 ? 'water' : 'stone'}
                src={covers[i]}
                alt={project.name}
                sizes="(max-width: 768px) 88vw, 1170px"
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
          <div className="flex h-full w-[min(70vw,22rem)] shrink-0 flex-col justify-center">
            <div className="self-start">
              <Button variant="secondary" tone="light" href="/projects">
                {t('cta')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
