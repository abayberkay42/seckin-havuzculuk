'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';

type Stat = { value: string; suffix?: string; label: string };

function StatBlock({ value, suffix, label }: Stat) {
  const numRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const target = parseInt(value, 10);
      if (Number.isNaN(target) || !numRef.current) return;
      const counter = { v: 0 };
      gsap.to(counter, {
        v: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: { trigger: numRef.current, start: 'top 88%', once: true },
        onUpdate: () => {
          if (numRef.current) {
            numRef.current.textContent = String(Math.round(counter.v)) + (suffix ?? '');
          }
        },
      });
    },
    { scope: numRef },
  );

  return (
    <div className="border-t border-canvas/15 pt-6">
      <span
        ref={numRef}
        className="block font-display text-[clamp(3rem,6vw,5rem)] leading-none text-canvas"
      >
        {value}
        {suffix ?? ''}
      </span>
      <span className="mt-4 block font-mono text-label uppercase text-canvas/50">
        {label}
      </span>
    </div>
  );
}

export function Proof() {
  const t = useTranslations('proof');
  const stats = t.raw('stats') as Stat[];
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-fade]', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: 'top 72%' },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      data-nav-theme="dark"
      className="bg-navy px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
    >
      <span
        data-fade
        className="mb-10 flex items-center gap-4 font-mono text-label uppercase text-canvas/50"
      >
        <span className="h-px w-10 bg-steel/60" />
        {t('eyebrow')}
      </span>
      <p
        data-fade
        className="mb-[clamp(4rem,8vh,7rem)] max-w-[50rem] font-display text-title text-canvas"
      >
        {t('statement')}
      </p>

      <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} data-fade>
            <StatBlock {...stat} />
          </div>
        ))}
      </div>
    </section>
  );
}
