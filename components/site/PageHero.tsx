import { type ReactNode } from 'react';
import { SplitReveal } from '@/components/ui/SplitReveal';
import { Eyebrow } from '@/components/ui/Eyebrow';

/**
 * The opening of every interior page — one calm, generous frame: the section
 * marker, a display headline that reveals line by line, and a lead paragraph.
 * Kept identical across pages so the site reads as one hand.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  aside,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  aside?: ReactNode;
}) {
  return (
    <section
      data-nav-theme="light"
      className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(3rem,6vh,5rem)] pt-[clamp(9rem,20vh,14rem)]"
    >
      <div className="flex flex-col items-center text-center">
        <Eyebrow tone="dark" className="mb-8 justify-center">
          {eyebrow}
        </Eyebrow>
        <SplitReveal as="h1" className="mx-auto max-w-[20ch] font-display text-display text-ink">
          {title}
        </SplitReveal>
        {aside && <div className="mt-9">{aside}</div>}
      </div>
      {intro && (
        <p className="mx-auto mt-9 max-w-[46rem] text-center text-lead font-light text-ink/65">
          {intro}
        </p>
      )}
    </section>
  );
}
