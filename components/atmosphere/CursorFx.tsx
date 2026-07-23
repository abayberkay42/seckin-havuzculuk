'use client';

import { useEffect, useState } from 'react';
import { Water } from '@/components/water/Water';
import { Ripple } from '@/components/atmosphere/Ripple';
import { isGoogleChrome } from '@/lib/isChrome';

/**
 * Picks the cursor effect. It's a pointer affordance, so it runs on fine
 * pointers (mouse/trackpad) only — touch devices get nothing (no cursor, and a
 * drop on every tap was distracting). Among desktops:
 *
 *   • Google Chrome  → the cheap CSS click-ripple (Chrome crawls on the WebGL one)
 *   • every other browser → the original WebGL water
 */
type Mode = 'water' | 'ripple' | 'off';

export function CursorFx() {
  // null until resolved (SSR + first paint render nothing).
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (coarse) {
      setMode('off'); // touch device — no cursor effect at all
      return;
    }
    setMode(isGoogleChrome() ? 'ripple' : 'water');
  }, []);

  if (mode === 'ripple') return <Ripple />;
  if (mode === 'water') return <Water />;
  return null;
}
