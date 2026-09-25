'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { readConsent, writeConsent, CONSENT_EVENT } from '@/lib/consent';

/**
 * Google Maps, loaded only once the visitor allows it.
 *
 * Rendering the embed hands the visitor's IP address to Google before they
 * have asked to see a map, so until consent exists we show a still placeholder
 * with a load button. Clicking it loads the map for this visit and remembers
 * the choice. As a side effect the footer map — which sits on every page —
 * stops costing a third-party request on first load.
 */
export function MapEmbed({
  src,
  className,
  tone = 'light',
}: {
  src: string;
  className: string;
  /** Matches the surrounding section: the footer is deep navy, contact is cream. */
  tone?: 'light' | 'dark';
}) {
  const t = useTranslations('privacy');
  // Start closed on the server and on first paint so the markup matches; the
  // stored choice is read after mount to avoid a hydration mismatch.
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(readConsent() === 'granted');
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  if (allowed) {
    return (
      <iframe
        title={t('mapTitle')}
        src={src}
        className={className}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  const dark = tone === 'dark';
  return (
    <div
      className={`${className} flex flex-col items-center justify-center gap-4 px-6 text-center ring-1 ring-inset ${
        dark ? 'bg-canvas/[0.04] ring-canvas/12' : 'bg-ink/[0.04] ring-ink/10'
      }`}
    >
      <p
        className={`max-w-[26rem] text-[0.85rem] leading-relaxed ${
          dark ? 'text-canvas/55' : 'text-ink/55'
        }`}
      >
        {t('mapBlocked')}
      </p>
      <button
        type="button"
        onClick={() => writeConsent('granted')}
        className={`rounded-full border px-5 py-2 font-mono text-label uppercase tracking-wide transition-colors duration-300 ${
          dark
            ? 'border-canvas/25 text-canvas/70 hover:border-canvas/50 hover:text-canvas'
            : 'border-ink/25 text-ink/70 hover:border-ink/50 hover:text-ink'
        }`}
      >
        {t('mapLoad')}
      </button>
    </div>
  );
}
