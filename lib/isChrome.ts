'use client';

import { useEffect, useState } from 'react';

/**
 * True ONLY for real Google Chrome — not Edge, Opera, Brave or Samsung Internet,
 * which are all Chromium and carry "Chrome" in the UA string. Chrome has a
 * compositor issue that makes transform-driven smooth scroll (Lenis) and
 * `backdrop-filter` stutter where every other engine is fine, so a few effects
 * are toned down for it specifically.
 *
 * `userAgentData.brands` names the real vendor when available; otherwise a
 * careful UA parse excludes the other Chromium browsers.
 */
export function isGoogleChrome(): boolean {
  if (typeof navigator === 'undefined') return false;

  const nav = navigator as Navigator & {
    userAgentData?: { brands?: { brand: string }[] };
    brave?: unknown;
  };

  if (nav.brave) return false; // Brave is Chromium but self-identifies

  const brands = nav.userAgentData?.brands;
  if (brands?.length) {
    const names = brands.map((b) => b.brand);
    const chromium = names.some((b) => b === 'Google Chrome');
    const otherVendor = names.some(
      (b) => b === 'Microsoft Edge' || b === 'Opera' || b === 'Opera GX' || b === 'Brave',
    );
    return chromium && !otherVendor;
  }

  const ua = navigator.userAgent;
  return (
    /Chrome\//.test(ua) &&
    !/Edg\//.test(ua) &&
    !/OPR\//.test(ua) &&
    !/Brave/.test(ua) &&
    !/SamsungBrowser/.test(ua)
  );
}

/** Client hook form — false during SSR / first paint, resolves after mount. */
export function useIsChrome(): boolean {
  const [chrome, setChrome] = useState(false);
  useEffect(() => {
    setChrome(isGoogleChrome());
  }, []);
  return chrome;
}
