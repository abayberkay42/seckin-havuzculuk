'use client';

/**
 * Consent for third-party embeds.
 *
 * The site itself sets exactly one cookie (NEXT_LOCALE, the language choice)
 * and runs no analytics, so there is nothing to ask permission for there —
 * a strictly necessary cookie needs disclosure, not consent. The one thing
 * that genuinely does is the Google Maps embed: rendering it sends the
 * visitor's IP address to Google before they have asked for a map. So consent
 * here gates exactly that, and nothing else pretends to need it.
 *
 * Stored in localStorage rather than a cookie so the choice itself does not
 * create the thing it is asking about.
 */

const KEY = 'sh-consent-maps';
export const CONSENT_EVENT = 'sh-consent-change';

export type Consent = 'granted' | 'denied' | null;

export function readConsent(): Consent {
  if (typeof window === 'undefined') return null;
  try {
    const v = window.localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    // private mode / blocked storage — behave as "not decided", never throw
    return null;
  }
}

export function writeConsent(value: Exclude<Consent, null>) {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* storage blocked: the choice applies to this page view only */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
