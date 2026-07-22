'use client';

import { useEffect, useState } from 'react';
import { Water } from '@/components/water/Water';
import { Ripple } from '@/components/atmosphere/Ripple';

/**
 * Picks the cursor water effect per browser. The rich fullscreen WebGL water
 * sheet is beautiful everywhere EXCEPT Google Chrome, where it composites the
 * whole viewport every frame and crawls (a Chrome-specific compositor issue —
 * Firefox/Safari/Edge/Opera all handle it fine). So:
 *
 *   • Google Chrome  → the cheap CSS click-ripple (a ring per tap, no per-frame cost)
 *   • every other browser → the original WebGL water
 *
 * Detecting Chrome specifically is the catch: Edge, Opera and Brave are all
 * Chromium and carry "Chrome" in the UA string. userAgentData.brands names the
 * real vendor, so we use it when present and fall back to a careful UA parse.
 */
function isGoogleChrome(): boolean {
  const nav = navigator as Navigator & {
    userAgentData?: { brands?: { brand: string }[] };
    brave?: unknown;
  };

  // Brave is Chromium but exposes navigator.brave — treat it as "not Chrome"
  // so it keeps the WebGL water.
  if (nav.brave) return false;

  const brands = nav.userAgentData?.brands;
  if (brands?.length) {
    const names = brands.map((b) => b.brand);
    const chromium = names.some((b) => b === 'Google Chrome');
    const otherVendor = names.some(
      (b) => b === 'Microsoft Edge' || b === 'Opera' || b === 'Opera GX' || b === 'Brave',
    );
    return chromium && !otherVendor;
  }

  // Fallback: UA string. Chrome carries "Chrome/"; the other Chromium browsers
  // add their own token (Edg/, OPR/, Brave) which we exclude.
  const ua = navigator.userAgent;
  return (
    /Chrome\//.test(ua) &&
    !/Edg\//.test(ua) &&
    !/OPR\//.test(ua) &&
    !/Brave/.test(ua) &&
    !/SamsungBrowser/.test(ua)
  );
}

export function CursorFx() {
  // null until we know the browser (SSR + first paint render nothing).
  const [chrome, setChrome] = useState<boolean | null>(null);

  useEffect(() => {
    setChrome(isGoogleChrome());
  }, []);

  if (chrome === null) return null;
  return chrome ? <Ripple /> : <Water />;
}
