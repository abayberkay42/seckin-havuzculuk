'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * A gentle "keep scrolling" nudge for the whole home page. It hides while the
 * visitor is scrolling down and reappears when they pause — so it invites the
 * next move without ever nagging. It also adapts to the section beneath it
 * (light text on dark sections, dark on light) and disappears near the very
 * bottom, where there's nothing left to scroll to.
 */
export function ScrollCue({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);
  const [dark, setDark] = useState(true);
  const idle = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // is the viewport within ~0.6 screens of the page bottom?
    const nearBottom = () =>
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - window.innerHeight * 0.6;

    // read the theme of whatever section sits under the cue's spot
    const detectTheme = () => {
      const el = document.elementFromPoint(
        window.innerWidth / 2,
        window.innerHeight - 56,
      );
      const themed = el?.closest('[data-nav-theme]');
      setDark(themed?.getAttribute('data-nav-theme') !== 'light');
    };

    const reveal = () => {
      if (nearBottom()) {
        setVisible(false);
        return;
      }
      detectTheme();
      setVisible(true);
    };

    const onScroll = () => {
      setVisible(false); // scrolling → hide
      if (idle.current) clearTimeout(idle.current);
      idle.current = window.setTimeout(reveal, 650); // paused → reappear
    };

    reveal(); // show on load (unless already at the bottom)
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (idle.current) clearTimeout(idle.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      data-visible={visible}
      className="pointer-events-none fixed inset-x-0 bottom-[clamp(1.5rem,4vh,2.75rem)] z-30 flex flex-col items-center gap-3 opacity-0 transition-opacity duration-500 data-[visible=true]:opacity-100"
    >
      <span
        className={`animate-scroll-cue font-mono text-[0.72rem] font-medium uppercase tracking-[0.32em] ${
          dark ? 'text-canvas [text-shadow:0_1px_14px_rgba(0,0,0,0.55)]' : 'text-ink'
        }`}
      >
        {label}
      </span>
      <span
        className={`relative flex h-11 w-6 items-start justify-center rounded-full border pt-2 ${
          dark
            ? 'border-canvas/60 [box-shadow:0_1px_14px_rgba(0,0,0,0.4)]'
            : 'border-ink/35'
        }`}
      >
        <span
          className={`animate-scroll-cue-dot block h-2 w-1 rounded-full ${
            dark ? 'bg-aqua' : 'bg-bronze'
          }`}
        />
      </span>
    </div>
  );
}
