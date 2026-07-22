'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// three.js loads only when the effect is actually enabled.
const WaterScene = dynamic(() => import('./WaterScene'), { ssr: false });

/**
 * Mounts the invisible water sheet over the whole page. Calm water is truly
 * invisible (alpha ≈ 0); a drop only ever adds faint light. Runs everywhere
 * except reduced-motion — on touch it responds to taps (a drop per touch); a
 * built-in FPS guard retires it on any device that can't keep up. Paused when
 * the tab is hidden.
 */
export function Water() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [dead, setDead] = useState(false); // retired after a sustained slow-frame streak

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(!reduce);
  }, []);

  useEffect(() => {
    const onVis = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  if (!enabled || dead) return null;

  return (
    <div
      aria-hidden="true"
      className="water-layer pointer-events-none fixed inset-0 z-[35]"
    >
      <WaterScene paused={!visible} onSlow={() => setDead(true)} />
    </div>
  );
}
