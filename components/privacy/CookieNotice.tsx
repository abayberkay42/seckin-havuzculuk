'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { readConsent, writeConsent } from '@/lib/consent';

/**
 * A one-time notice, not a consent theatre.
 *
 * The site runs no analytics and sets one strictly necessary cookie, so the
 * bar states that plainly instead of claiming categories that do not exist.
 * The single real choice it offers is whether Google Maps may load — and both
 * buttons are a genuine decision, so declining is exactly as easy as accepting.
 */
export function CookieNotice() {
  const t = useTranslations('privacy');
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Mount-time read: nothing renders server-side, so no hydration mismatch.
    if (readConsent() === null) setShow(true);
  }, []);

  if (!show) return null;

  const decide = (v: 'granted' | 'denied') => {
    writeConsent(v);
    setShow(false);
  };

  return (
    <div
      role="dialog"
      aria-label={t('noticeTitle')}
      className="fixed inset-x-0 bottom-0 z-[60] px-[clamp(1rem,4vw,2.5rem)] pb-[clamp(1rem,3vh,2rem)]"
    >
      <div className="mx-auto flex max-w-[64rem] flex-col gap-5 rounded-[1.5rem] bg-deep/95 p-6 text-canvas shadow-[0_30px_80px_-40px_rgba(9,22,30,0.8)] ring-1 ring-canvas/12 backdrop-blur-xl sm:flex-row sm:items-center sm:gap-8 sm:p-7">
        <p className="flex-1 text-[0.9rem] leading-relaxed text-canvas/75">
          {t('noticeBody')}{' '}
          <Link href="/privacy" className="link-water text-canvas">
            {t('noticeLink')}
          </Link>
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={() => decide('denied')}
            className="rounded-full border border-canvas/25 px-5 py-2.5 font-mono text-label uppercase tracking-wide text-canvas/75 transition-colors duration-300 hover:border-canvas/50 hover:text-canvas"
          >
            {t('noticeDeny')}
          </button>
          <button
            type="button"
            onClick={() => decide('granted')}
            className="rounded-full bg-canvas px-5 py-2.5 font-mono text-label uppercase tracking-wide text-ink transition-opacity duration-300 hover:opacity-85"
          >
            {t('noticeAccept')}
          </button>
        </div>
      </div>
    </div>
  );
}
