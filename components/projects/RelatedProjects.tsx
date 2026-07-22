'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { Link } from '@/i18n/navigation';
import { Sheen } from '@/components/ui/Sheen';
import { Tilt } from '@/components/ui/Tilt';
import { Eyebrow } from '@/components/ui/Eyebrow';
import type { ProjectType } from '@/content/projects';

type Item = {
  slug: string;
  name: string;
  place: string;
  year: string;
  type: ProjectType;
};

const WATER = 'bg-[radial-gradient(130%_130%_at_28%_18%,#20516a_0%,#16303c_58%,#0d1f29_100%)]';
const STONE = 'bg-[radial-gradient(130%_130%_at_28%_18%,#efe8da_0%,#d8ccb6_62%,#b7a789_100%)]';

export function RelatedProjects({ items }: { items: Item[] }) {
  const t = useTranslations('projectsPage');
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-reveal]', {
        opacity: 0,
        y: 44,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: 'top 82%' },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-nav-theme="light"
      className="bg-surface px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
    >
      <Eyebrow data-reveal tone="dark" className="mb-12 justify-center">
        {t('related')}
      </Eyebrow>

      <div className="grid gap-[clamp(2rem,3vw,3rem)] md:grid-cols-3">
        {items.map((p) => {
          const water = p.type !== 'ongoing';
          return (
            <Link
              key={p.slug}
              data-reveal
              href={{ pathname: '/projects/[slug]', params: { slug: p.slug } }}
              className="group"
            >
              <Tilt className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <div
                  className={`h-full w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] ${water ? WATER : STONE}`}
                />
                <Sheen tint={water ? 'light' : 'steel'} />
              </Tilt>
              <span className="mt-5 block font-mono text-label uppercase text-ink/40">
                {p.place} · {p.year}
              </span>
              <h3 className="mt-2 font-display text-[1.5rem] text-ink transition-colors duration-[var(--dur-quick)] group-hover:text-bronze">
                {p.name}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
