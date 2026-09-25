import { getTranslations } from 'next-intl/server';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SplitReveal } from '@/components/ui/SplitReveal';
import { TextLink } from '@/components/ui/TextLink';
import { Faq } from '@/components/site/Faq';

type QA = { q: string; a: string };

/**
 * The home page's one plain-spoken passage. Everything else on the home page is
 * brand voice (slogans, imagery) — which gives search and AI engines nothing
 * factual to extract. This block states who, what, where and since when in one
 * self-contained paragraph, followed by a short FAQ (FAQPage JSON-LD is emitted
 * by the page). Server-rendered so it is in the initial HTML.
 */
export async function AtAGlance() {
  const t = await getTranslations('glance');
  const faq = t.raw('faq') as QA[];

  return (
    <>
      <section
        data-nav-theme="light"
        className="bg-canvas px-[clamp(1.5rem,6vw,8rem)] pt-[clamp(7rem,14vh,12rem)]"
      >
        <div className="mx-auto max-w-[52rem] text-center">
          <Eyebrow tone="dark" className="mb-8 justify-center">
            {t('eyebrow')}
          </Eyebrow>
          <SplitReveal as="h2" className="mx-auto mb-9 max-w-[22ch] font-display text-title text-ink">
            {t('title')}
          </SplitReveal>
          <p className="text-lead font-light leading-relaxed text-ink/70">{t('summary')}</p>
          <div className="mt-9 flex justify-center">
            <TextLink href="/service-areas" arrow accent className="font-mono text-label uppercase text-ink/70">
              {t('areasLink')}
            </TextLink>
          </div>
        </div>
      </section>
      <Faq eyebrow={t('faqEyebrow')} title={t('faqTitle')} items={faq} />
    </>
  );
}
