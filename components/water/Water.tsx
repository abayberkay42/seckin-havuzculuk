'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// three.js loads only when the effect is actually enabled.
const WaterScene = dynamic(() => import('./WaterScene'), { ssr: false });

/**
 * Mounts the invisible water sheet over the whole page. Screen-blended so it
 * only ever adds faint light — calm water is truly invisible. Desktop / fine
 * pointers only; paused when the tab is hidden.
 */
export function Water() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [dead, setDead] = useState(false); // retired after a sustained slow-frame streak

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.matchMedia('(max-width: 900px)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    setEnabled(!reduce && !small && !coarse);
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
      style={{ mixBlendMode: 'screen' }}
    >
      <WaterScene paused={!visible} onSlow={() => setDead(true)} />
    </div>
  );
}
