'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import { Sheen } from '@/components/ui/Sheen';
import { Eyebrow } from '@/components/ui/Eyebrow';
import type { LocalizedProject } from '@/content/projects';

const WATER = 'bg-[radial-gradient(130%_130%_at_28%_18%,#20516a_0%,#16303c_58%,#0d1f29_100%)]';

function GalleryImage({
  aspect,
  label,
}: {
  aspect: string;
  label?: string;
}) {
  return (
    <figure
      data-fig
      className={`group relative overflow-hidden rounded-[1.75rem] ${aspect}`}
    >
      {/* over-scanned so the parallax translate never reveals an edge */}
      <div data-parallax className="absolute inset-[-8%]">
        <div
          className={`h-full w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] ${WATER}`}
        >
          <div className="absolute -right-1/4 -top-1/4 h-[70%] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(169,203,227,0.18),transparent_72%)]" />
        </div>
      </div>
      <Sheen tint="light" />
      {label && (
        <figcaption className="absolute left-5 top-5 rounded-full bg-black/25 px-3 py-1 font-mono text-label uppercase text-canvas/85 backdrop-blur-sm">
          {label}
        </figcaption>
      )}
    </figure>
  );
}

export function ProjectGallery({ lp }: { lp: LocalizedProject }) {
  const t = useTranslations('projectsPage');
  const root = useRef<HTMLElement>(null);
  const rest = Math.max(lp.galleryCount - 1, 0);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: el.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      });
      gsap.from('[data-fig]', {
        opacity: 0,
        y: 52,
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: 'top 78%' },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-nav-theme="light"
      className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(6rem,12vh,10rem)]"
    >
      <Eyebrow tone="dark" className="mb-12 justify-center">
        {t('gallery')}
      </Eyebrow>

      <div className="flex flex-col gap-[clamp(1.5rem,3vw,2.5rem)]">
        {/* the drone establishing shot */}
        <GalleryImage aspect="aspect-[21/9]" label={t('drone')} />

        {rest > 0 && (
          <div className="grid gap-[clamp(1.5rem,3vw,2.5rem)] md:grid-cols-2">
            {Array.from({ length: rest }, (_, i) => (
              <GalleryImage
                key={i}
                aspect={i % 3 === 2 ? 'aspect-[4/3] md:col-span-2' : 'aspect-[4/5]'}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
