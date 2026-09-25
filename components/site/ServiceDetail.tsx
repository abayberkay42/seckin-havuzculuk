import { Eyebrow } from '@/components/ui/Eyebrow';
import { SplitReveal } from '@/components/ui/SplitReveal';
import { Reveal } from '@/components/ui/Reveal';
import { RichText } from '@/components/blog/RichText';

export type DetailSection = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  bullets?: { title: string; desc: string }[];
};

/**
 * The depth sections on a service page — what determines cost and duration,
 * why the peninsula changes the job. The service pages were the most
 * commercial on the site yet the thinnest against competitors, and they had
 * no route into the guides that answer these questions; paragraphs here carry
 * in-sentence links (RichText) so a reader can follow one.
 *
 * All sections sit on cream and the page owns the seams around them, so the
 * caller controls the tonal rhythm rather than this component guessing it.
 */
export function ServiceDetail({ sections }: { sections: DetailSection[] }) {
  return (
    <>
      {sections.map((s) => (
        <section
          key={s.title}
          data-nav-theme="light"
          className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] py-[clamp(6rem,12vh,10rem)]"
        >
          <div className="mx-auto max-w-[48rem]">
            <Eyebrow tone="dark" className="mb-8 justify-center">
              {s.eyebrow}
            </Eyebrow>
            <SplitReveal
              as="h2"
              className="mx-auto mb-[clamp(2.5rem,5vh,3.5rem)] max-w-[22ch] text-center font-display text-title text-ink"
            >
              {s.title}
            </SplitReveal>
            <div className="space-y-6">
              {s.paragraphs.map((p, j) => (
                <Reveal as="p" key={j} delay={j * 0.06} className="text-body leading-relaxed text-ink/72">
                  <RichText text={p} />
                </Reveal>
              ))}
            </div>
            {s.bullets && s.bullets.length > 0 && (
              <dl className="mt-[clamp(2.5rem,5vh,3.5rem)] grid gap-x-10 gap-y-9 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <Reveal key={b.title} className="border-t border-ink/12 pt-6">
                    <dt className="mb-2 font-display text-[1.25rem] text-ink">{b.title}</dt>
                    <dd className="text-body leading-relaxed text-ink/65">{b.desc}</dd>
                  </Reveal>
                ))}
              </dl>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
