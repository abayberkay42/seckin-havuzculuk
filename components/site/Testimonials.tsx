import { getTranslations } from 'next-intl/server';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SplitReveal } from '@/components/ui/SplitReveal';
import { Reveal } from '@/components/ui/Reveal';
import { TextLink } from '@/components/ui/TextLink';
import { GBP_URL } from '@/lib/contact';
import { testimonials } from '@/content/testimonials';

/**
 * Customer words, attributed. Every audit pass flagged the same gap: visitors
 * choosing between small local firms look for proof other people trusted this
 * one, and the site offered none. These are the real Google reviews, quoted
 * as text rather than marked up as rating stars (see content/testimonials.ts).
 */
export async function Testimonials() {
  const t = await getTranslations('testimonials');
  if (testimonials.length === 0) return null;

  return (
    <section
      data-nav-theme="light"
      className="bg-surface px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
    >
      <div className="mx-auto max-w-[72rem]">
        <Eyebrow tone="dark" className="mb-8 justify-center">
          {t('eyebrow')}
        </Eyebrow>
        <SplitReveal
          as="h2"
          className="mx-auto mb-[clamp(3.5rem,7vh,5.5rem)] max-w-[22ch] text-center font-display text-title text-ink"
        >
          {t('title')}
        </SplitReveal>

        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((r, i) => (
            <Reveal as="li" key={r.name} delay={i * 0.06} className="flex">
              <figure className="flex flex-col rounded-[1.5rem] bg-canvas p-7 ring-1 ring-ink/8">
                <blockquote className="flex-1 text-body leading-relaxed text-ink/75">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-4">
                  <span className="block font-display text-[1.05rem] text-ink">{r.name}</span>
                  {r.services && (
                    <span className="mt-1 block font-mono text-label uppercase tracking-wide text-ink/40">
                      {r.services}
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <p className="mt-[clamp(2.5rem,5vh,3.5rem)] text-center font-mono text-label uppercase tracking-wide text-ink/45">
          <TextLink externalHref={GBP_URL} arrow accent className="text-ink/60">
            {t('source')}
          </TextLink>
        </p>
      </div>
    </section>
  );
}
