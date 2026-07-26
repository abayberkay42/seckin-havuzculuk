import { Eyebrow } from '@/components/ui/Eyebrow';

type QA = { q: string; a: string };

/**
 * Accessible FAQ built on native <details>/<summary> — expands without client
 * JS, so the answers are in the initial HTML for crawlers and AI retrieval
 * (this content is the most snippet/AI-citable on the site). Rendered on the
 * service pages alongside FAQPage JSON-LD.
 */
export function Faq({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: QA[];
}) {
  return (
    <section
      data-nav-theme="light"
      className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
    >
      <div className="mx-auto max-w-[52rem]">
        <Eyebrow tone="dark" className="mb-8 justify-center">
          {eyebrow}
        </Eyebrow>
        <h2 className="mb-[clamp(3rem,6vh,5rem)] text-center font-display text-title text-ink">
          {title}
        </h2>

        <div className="divide-y divide-ink/12 border-y border-ink/12">
          {items.map((it) => (
            <details key={it.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <h3 className="font-display text-[1.35rem] leading-snug text-ink">
                  {it.q}
                </h3>
                <span
                  aria-hidden
                  className="mt-1 shrink-0 font-mono text-xl text-bronze transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-[46rem] text-body leading-relaxed text-ink/65">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
