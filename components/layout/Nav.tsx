'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import type { AppPathname } from '@/i18n/routing';

export type NavItem = { href: AppPathname; label: string };

type NavProps = {
  items: NavItem[];
  locale: string;
  switchLabel: string;
  menuLabel: string;
};

export function Nav({ items, locale, switchLabel, menuLabel }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // The pill sits over sections of different lightness. Each section declares
  // data-nav-theme; the nav adopts whichever one is currently under it, so its
  // text stays readable over dark water and cream stone alike.
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scrollspy: a thin detection band just below the nav. Whichever tagged
  // section crosses it wins the theme.
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-nav-theme]'),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const next = entry.target.getAttribute('data-nav-theme');
            if (next === 'dark' || next === 'light') setTheme(next);
          }
        });
      },
      { rootMargin: '-72px 0px -99% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const switchLocale = () => {
    const next = locale === 'tr' ? 'en' : 'tr';
    router.replace(pathname, { locale: next });
  };

  const dark = theme === 'dark';

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-[clamp(1rem,4vw,2.5rem)]">
      <nav
        className={`pointer-events-auto mt-[clamp(1rem,2.5vh,1.75rem)] flex w-full max-w-[1600px] items-center justify-between rounded-full border pl-6 pr-2 backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? 'py-1.5' : 'py-2.5'
        } ${
          dark
            ? 'border-canvas/15 bg-deep/20'
            : 'border-ink/10 bg-canvas/70'
        }`}
      >
        {/* logotype */}
        <Link
          href="/"
          className={`font-display text-[1.35rem] tracking-tight transition-colors duration-500 ${
            dark ? 'text-canvas' : 'text-ink'
          }`}
        >
          Seçkin
        </Link>

        {/* desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {items.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`group relative text-[0.82rem] transition-colors duration-300 ${
                  dark
                    ? 'text-canvas/80 hover:text-canvas'
                    : 'text-ink/70 hover:text-ink'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 ${
                    dark ? 'bg-steel' : 'bg-bronze'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={switchLocale}
            className={`rounded-full px-3.5 py-2 font-mono text-label uppercase transition-colors duration-300 ${
              dark
                ? 'text-canvas/75 hover:text-canvas'
                : 'text-ink/70 hover:text-ink'
            }`}
            aria-label={switchLabel}
          >
            {switchLabel}
          </button>

          {/* mobile menu trigger — morphing bars */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              dark ? 'bg-canvas/10' : 'bg-ink/5'
            }`}
            aria-label={menuLabel}
            aria-expanded={open}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  dark ? 'bg-canvas' : 'bg-ink'
                } ${open ? 'top-1/2 rotate-45' : 'top-0'}`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-px w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  dark ? 'bg-canvas' : 'bg-ink'
                } ${open ? 'bottom-1/2 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* mobile overlay — always the dark water treatment */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto fixed inset-0 z-40 flex flex-col justify-center bg-deep/95 px-8 backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {items.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-[2rem] text-canvas/90"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
