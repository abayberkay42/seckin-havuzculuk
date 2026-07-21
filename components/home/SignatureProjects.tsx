'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { Link } from '@/i18n/navigation';
import { Frame } from '@/components/ui/Frame';

type Project = { name: string; place: string; year: string };

/**
 * The peak. Vertical scroll drives a horizontal pan across the portfolio — the
 * camera glides along a wall of finished pools. Pinned because the horizontal
 * translation needs the viewport held still while it plays.
 */
export function SignatureProjects() {
  const t = useTranslations('projects');
  const items = t.raw('items') as Project[];
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
      <div ref={root} className="relative h-[100dvh] overflow-hidden">
        <div
          ref={track}
          className="flex h-full items-center gap-[clamp(1.5rem,3vw,3rem)] pl-[clamp(1.5rem,6vw,8rem)] pr-[clamp(1.5rem,6vw,8rem)] will-change-transform"
        >
          {/* opening title panel */}
          <div className="flex h-full w-[min(85vw,34rem)] shrink-0 flex-col justify-center pr-8">
            <span className="mb-8 flex items-center gap-4 font-mono text-label uppercase text-canvas/50">
              <span className="h-px w-10 bg-steel/60" />
              {t('eyebrow')}
            </span>
            <h2 className="font-display text-display text-canvas">{t('title')}</h2>
          </div>

          {/* project cards */}
          {items.map((project, i) => (
            <article
              key={project.name}
              className="relative h-[68vh] w-[min(80vw,32rem)] shrink-0"
            >
              <Frame
                variant={i % 2 === 0 ? 'water' : 'stone'}
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
            <Link
              href="/projects"
              className="group inline-flex items-center gap-4 self-start rounded-full border border-canvas/25 py-3 pl-6 pr-3 text-canvas transition-colors duration-500 hover:border-canvas/50"
            >
              <span>{t('cta')}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-canvas text-ink transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path d="M4 11L11 4M11 4H5M11 4V10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
