'use client';

import { useMemo, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { Link } from '@/i18n/navigation';
import { projects, localize, type ProjectType } from '@/content/projects';
import { Sheen } from '@/components/ui/Sheen';

type FilterKey = 'all' | ProjectType;

/**
 * Not a grid. A filterable editorial run of full-width case-study openers that
 * alternate side to side, each image drifting on a gentle parallax. Filtering
 * relayouts with motion's shared layout so nothing snaps.
 */
export function ProjectsHub() {
  const t = useTranslations('projectsPage');
  const locale = useLocale();
  const [filter, setFilter] = useState<FilterKey>('all');

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: t('filterAll') },
    { key: 'completed', label: t('filterCompleted') },
    { key: 'ongoing', label: t('filterOngoing') },
    { key: 'before-after', label: t('filterBeforeAfter') },
  ];

  const typeLabel: Record<ProjectType, string> = {
    completed: t('typeCompleted'),
    ongoing: t('typeOngoing'),
    'before-after': t('typeBeforeAfter'),
  };

  const list = useMemo(
    () => projects.filter((p) => filter === 'all' || p.type === filter),
    [filter],
  );

  return (
    <section
      data-nav-theme="light"
      className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(7rem,14vh,12rem)]"
    >
      <div className="mb-[clamp(3.5rem,8vh,7rem)] flex flex-wrap gap-x-9 gap-y-3 border-t border-ink/10 pt-8">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`relative pb-1 font-mono text-label uppercase transition-colors duration-300 ${
              filter === f.key ? 'text-ink' : 'text-ink/40 hover:text-ink/70'
            }`}
          >
            {f.label}
            {filter === f.key && (
              <motion.span
                layoutId="filter-underline"
                className="absolute -bottom-px left-0 h-px w-full bg-bronze"
              />
            )}
          </button>
        ))}
      </div>

      <motion.div layout className="flex flex-col gap-[clamp(5rem,12vh,11rem)]">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <ProjectRow
              key={p.slug}
              slug={p.slug}
              name={localize(p.name, locale)}
              place={localize(p.place, locale)}
              year={p.year}
              overview={localize(p.overview, locale)}
              type={p.type}
              typeLabel={typeLabel[p.type]}
              viewLabel={t('viewProject')}
              index={i}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function ProjectRow({
  slug,
  name,
  place,
  year,
  overview,
  type,
  typeLabel,
  viewLabel,
  index,
}: {
  slug: string;
  name: string;
  place: string;
  year: string;
  overview: string;
  type: ProjectType;
  typeLabel: string;
  viewLabel: string;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const flip = index % 2 === 1;
  const water = type !== 'ongoing';
  const href = { pathname: '/projects/[slug]', params: { slug } } as const;

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 64 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="grid items-center gap-[clamp(2rem,5vw,5rem)] md:grid-cols-12"
    >
      <Link
        href={href}
        className={`group relative block overflow-hidden rounded-[1.75rem] md:col-span-8 ${
          flip ? 'md:order-2 md:col-start-5' : ''
        }`}
      >
        <motion.div
          style={{ y }}
          className={`relative aspect-[16/10] w-full scale-[1.14] ${
            water
              ? 'bg-[radial-gradient(130%_130%_at_28%_18%,#20516a_0%,#16303c_58%,#0d1f29_100%)]'
              : 'bg-[radial-gradient(130%_130%_at_28%_18%,#efe8da_0%,#d8ccb6_62%,#b7a789_100%)]'
          }`}
        >
          {water && (
            <div className="animate-water-drift absolute -right-1/4 -top-1/4 h-[70%] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(169,203,227,0.22),transparent_72%)]" />
          )}
        </motion.div>
        <Sheen tint={water ? 'light' : 'steel'} />
        <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-6">
          <span className="rounded-full bg-black/25 px-3 py-1 font-mono text-label uppercase text-canvas/90 backdrop-blur-sm">
            {typeLabel}
          </span>
          <span className="flex translate-y-2 items-center gap-2 font-mono text-label uppercase text-canvas opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {viewLabel} ↗
          </span>
        </div>
      </Link>

      <div className={`md:col-span-4 ${flip ? 'md:order-1 md:col-start-1' : ''}`}>
        <span className="mb-4 block font-mono text-label uppercase text-ink/40">
          {place} · {year}
        </span>
        <h2 className="mb-5 font-display text-title text-ink">{name}</h2>
        <p className="mb-7 max-w-[30rem] text-[1.0625rem] leading-relaxed text-ink/65">
          {overview}
        </p>
        <Link
          href={href}
          className="group inline-flex items-center gap-2 font-mono text-label uppercase text-ink"
        >
          <span className="relative">
            {viewLabel}
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-bronze transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
          </span>
          <span className="transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </motion.article>
  );
}
