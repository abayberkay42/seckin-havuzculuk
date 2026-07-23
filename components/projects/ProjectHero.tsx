'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { Link } from '@/i18n/navigation';
import type { LocalizedProject } from '@/content/projects';

export function ProjectHero({ lp }: { lp: LocalizedProject }) {
  const t = useTranslations('projectsPage');
  const root = useRef<HTMLElement>(null);
  const typeLabel =
    lp.type === 'completed'
      ? t('typeCompleted')
      : lp.type === 'ongoing'
        ? t('typeOngoing')
        : t('typeBeforeAfter');

  useGSAP(
    () => {
      gsap.from('[data-reveal]', {
        opacity: 0,
        yPercent: 60,
        filter: 'blur(10px)',
        duration: 1.3,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.15,
      });
      gsap.to('[data-bg]', {
        yPercent: 16,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-nav-theme="dark"
      className="relative flex min-h-[92dvh] items-end overflow-hidden bg-deep"
    >
      <div data-bg className="absolute inset-0 will-change-transform">
        <Image
          src={lp.cover}
          alt={lp.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(13,31,41,0.9)_0%,rgba(13,31,41,0.35)_52%,rgba(13,31,41,0.55)_100%)]" />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(3rem,8vh,6rem)] pt-[clamp(8rem,16vh,10rem)] text-center">
        <Link
          data-reveal
          href="/projects"
          className="mb-9 inline-flex items-center gap-2 font-mono text-label uppercase text-canvas/70 transition-colors duration-300 hover:text-canvas"
        >
          ← {t('backToProjects')}
        </Link>
        <div data-reveal className="flex items-center justify-center gap-4">
          <span className="rounded-full border border-canvas/25 px-3 py-1 font-mono text-label uppercase text-canvas/80">
            {typeLabel}
          </span>
          <span className="font-mono text-label uppercase text-canvas/60">
            {lp.place} · {lp.year}
          </span>
        </div>
        <h1
          data-reveal
          className="mx-auto mt-7 max-w-[15ch] font-display text-hero text-canvas"
        >
          {lp.name}
        </h1>
      </div>
    </section>
  );
}
