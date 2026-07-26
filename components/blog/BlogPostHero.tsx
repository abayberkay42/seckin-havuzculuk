import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { LocalizedPost } from '@/content/blog';

/** Editorial article opener — cover held behind a navy scrim, meta line, H1. */
export async function BlogPostHero({ lp, locale }: { lp: LocalizedPost; locale: string }) {
  const t = await getTranslations('journal');
  const dateLabel = new Date(lp.date).toLocaleDateString(locale === 'en' ? 'en-GB' : 'tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section
      data-nav-theme="dark"
      className="relative flex min-h-[58dvh] items-end overflow-hidden bg-deep"
    >
      <div className="absolute inset-0">
        <Image src={lp.cover} alt={lp.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(13,31,41,0.92)_0%,rgba(13,31,41,0.45)_55%,rgba(13,31,41,0.6)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[52rem] px-[clamp(1.5rem,6vw,8rem)] pb-[clamp(3rem,8vh,6rem)] pt-[clamp(8rem,16vh,10rem)] text-center">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 font-mono text-label uppercase text-canvas/70 transition-colors duration-300 hover:text-canvas"
        >
          ← {t('eyebrow')}
        </Link>
        <div className="mb-7 flex items-center justify-center gap-4 font-mono text-label uppercase text-canvas/60">
          <span className="rounded-full border border-canvas/25 px-3 py-1 text-canvas/80">
            {lp.category}
          </span>
          <span>{dateLabel}</span>
          <span aria-hidden>·</span>
          <span>{lp.readMinutes} {t('readMinutes')}</span>
        </div>
        <h1 className="mx-auto max-w-[26ch] font-display text-[clamp(1.7rem,3.1vw,2.9rem)] leading-[1.1] tracking-[-0.01em] text-canvas text-balance">
          {lp.title}
        </h1>
      </div>
    </section>
  );
}
