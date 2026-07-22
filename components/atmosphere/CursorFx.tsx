'use client';

import { useEffect, useState } from 'react';
import { Water } from '@/components/water/Water';
import { Ripple } from '@/components/atmosphere/Ripple';
import { isGoogleChrome } from '@/lib/isChrome';

/**
 * Picks the cursor water effect per browser. The rich fullscreen WebGL water
 * sheet is beautiful everywhere EXCEPT Google Chrome, where it composites the
 * whole viewport every frame and crawls (a Chrome-specific compositor issue —
 * Firefox/Safari/Edge/Opera all handle it fine). So:
 *
 *   • Google Chrome  → the cheap CSS click-ripple (a ring per tap, no per-frame cost)
 *   • every other browser → the original WebGL water
 */
export function CursorFx() {
  // null until we know the browser (SSR + first paint render nothing).
  const [chrome, setChrome] = useState<boolean | null>(null);

  useEffect(() => {
    setChrome(isGoogleChrome());
  }, []);

  if (chrome === null) return null;
  return chrome ? <Ripple /> : <Water />;
}
