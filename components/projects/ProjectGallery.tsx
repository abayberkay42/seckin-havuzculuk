'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Sheen } from '@/components/ui/Sheen';
import { EASE_WATER } from '@/lib/motion';
import type { LocalizedProject } from '@/content/projects';

const WATER =
  'bg-[radial-gradient(130%_130%_at_28%_18%,#20516a_0%,#16303c_58%,#0d1f29_100%)]';

/**
 * Draggable gallery carousel — a centred row of small cards the visitor grabs
 * and flings left/right (pointer or touch). When the cards fit the viewport
 * they sit centred and static; when they overflow, the track becomes draggable
 * and left-aligned so all of it is reachable. Labelled as the project's
 * construction-stage / before state.
 */
export function ProjectGallery({ lp }: { lp: LocalizedProject }) {
  const t = useTranslations('projectsPage');
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(0);

  const shots = lp.gallery.length
    ? lp.gallery
    : Array.from({ length: Math.max(lp.galleryCount, 5) }, () => '');

  // How far the track may travel = its overflow past the viewport.
  useEffect(() => {
    const measure = () => {
      if (!viewport.current || !track.current) return;
      setMaxDrag(Math.max(0, track.current.scrollWidth - viewport.current.offsetWidth));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [shots.length]);

  const fits = maxDrag <= 0;

  return (
    <section
      data-nav-theme="light"
      className="overflow-hidden bg-canvas pb-[clamp(6rem,12vh,10rem)]"
    >
      <div className="mb-[clamp(2.5rem,5vh,4rem)] flex flex-col items-center gap-2.5 px-[clamp(1.5rem,6vw,8rem)] text-center">
        <Eyebrow tone="dark" className="justify-center">
          {t('gallery')}
        </Eyebrow>
        <span className="font-mono text-label uppercase tracking-[0.14em] text-ink/45">
          {t('galleryState')}
        </span>
        {!fits && (
          <span className="mt-1 inline-flex select-none items-center gap-2 font-mono text-label uppercase text-ink/35">
            {t('dragHint')} <span aria-hidden>↔</span>
          </span>
        )}
      </div>

      <div
        ref={viewport}
        className={`overflow-hidden ${fits ? '' : 'cursor-grab active:cursor-grabbing'}`}
      >
        <motion.div
          ref={track}
          drag={fits ? false : 'x'}
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.08}
          dragTransition={{ power: 0.3, timeConstant: 200 }}
          className={`flex w-max gap-[clamp(0.9rem,1.8vw,1.6rem)] ${
            fits
              ? 'mx-auto px-[clamp(1.5rem,4vw,3rem)]'
              : 'px-[clamp(1.5rem,6vw,8rem)]'
          }`}
        >
          {shots.map((src, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.7, delay: Math.min(i, 6) * 0.05, ease: EASE_WATER }}
              className="relative aspect-[4/5] w-[clamp(190px,24vw,280px)] shrink-0 overflow-hidden rounded-[1.4rem] ring-1 ring-ink/8 shadow-[0_24px_50px_-38px_rgba(9,22,30,0.5)]"
            >
              {src ? (
                <Image
                  src={src}
                  alt={`${lp.name} — ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 60vw, 280px"
                  draggable={false}
                  className="pointer-events-none object-cover"
                />
              ) : (
                <div className={`h-full w-full ${WATER}`}>
                  <div className="absolute -right-1/4 -top-1/4 h-[70%] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(169,203,227,0.18),transparent_72%)]" />
                </div>
              )}
              <Sheen tint="light" />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
