import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { LocalizedPost } from '@/content/blog';

/**
 * The article itself — a readable measure column. H2 per section keeps the
 * heading outline valid (h1 in the hero -> h2 here). A related-service callout
 * links the informational piece to the commercial page it supports.
 */
export async function BlogPostBody({ lp }: { lp: LocalizedPost }) {
  const t = await getTranslations('journal');

  return (
    <section
      data-nav-theme="light"
      className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] py-[clamp(5rem,10vh,9rem)]"
    >
      <div className="mx-auto max-w-[46rem]">
        <p className="mb-[clamp(3rem,6vh,4.5rem)] font-display text-[clamp(1.35rem,2.4vw,1.7rem)] leading-relaxed text-ink/80">
          {lp.intro}
        </p>

        <div className="space-y-[clamp(2.5rem,5vh,4rem)]">
          {lp.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-5 font-display text-[clamp(1.5rem,3vw,2.15rem)] leading-tight text-ink">
                {s.heading}
              </h2>
              <div className="space-y-5">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-body leading-relaxed text-ink/72">
                    {p}
                  </p>
                ))}
              </div>
              {s.bullets && (
                <ul className="mt-6 space-y-3 border-l-2 border-bronze/40 pl-6">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="text-body leading-relaxed text-ink/72">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Related service — links the article to the page it supports */}
        <div className="mt-[clamp(3.5rem,7vh,5.5rem)] rounded-[1.5rem] bg-surface p-8 ring-1 ring-ink/8">
          <span className="mb-2 block font-mono text-label uppercase text-bronze/70">
            {t('relatedServiceLead')}
          </span>
          <Link
            href={lp.relatedService}
            className="group inline-flex items-center gap-2 font-display text-[1.5rem] text-ink transition-colors duration-300 hover:text-bronze"
          >
            {lp.relatedServiceLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
