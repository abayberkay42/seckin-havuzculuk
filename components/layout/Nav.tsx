'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import type { AppPathname } from '@/i18n/routing';
import { Magnetic } from '@/components/ui/Magnetic';

export type NavLeaf = { href: AppPathname; label: string; desc?: string };
export type NavGroup = { label: string; panel: NavLeaf[] };
export type NavNode = NavLeaf | NavGroup;

const isGroup = (n: NavNode): n is NavGroup => 'panel' in n;
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function Nav({
  nav,
  locale,
  menuLabel,
}: {
  nav: NavNode[];
  locale: string;
  menuLabel: string;
}) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [open, setOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<number | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const barRef = useRef<HTMLElement>(null);
  const solidity = useRef(0);
  const themeMix = useRef(1); // 1 = dark, 0 = light (eased)
  const themeTarget = useRef(1);

  const dark = theme === 'dark';
  const leaves = nav.flatMap((n) => (isGroup(n) ? n.panel : [n]));
  const linkClass = dark
    ? 'text-canvas/70 hover:text-canvas'
    : 'text-ink/60 hover:text-ink';
  const logoClass = dark ? 'text-canvas' : 'text-ink';

  // Which section is under the bar decides its colour.
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-nav-theme]'),
    );
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const next = e.target.getAttribute('data-nav-theme');
            if (next === 'dark' || next === 'light') setTheme(next);
          }
        }),
      { rootMargin: '-72px 0px -99% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    themeTarget.current = dark ? 1 : 0;
  }, [dark]);

  // One frame loop eases BOTH scroll-solidity and theme — nothing ever jumps.
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      solidity.current += (Math.min(window.scrollY / 220, 1) - solidity.current) * 0.08;
      themeMix.current += (themeTarget.current - themeMix.current) * 0.1;
      const el = barRef.current;
      if (el) {
        const s = solidity.current;
        const m = themeMix.current;
        const bg = `rgba(${lerp(247, 18, m).toFixed(0)}, ${lerp(243, 40, m).toFixed(0)}, ${lerp(236, 51, m).toFixed(0)}, ${lerp(0.5 + s * 0.38, 0.14 + s * 0.36, m).toFixed(3)})`;
        const bd = `rgba(${lerp(26, 245, m).toFixed(0)}, ${lerp(23, 240, m).toFixed(0)}, ${lerp(18, 232, m).toFixed(0)}, ${lerp(0.08 + s * 0.07, 0.12 + s * 0.06, m).toFixed(3)})`;
        const blur = `blur(${(13 + s * 10).toFixed(1)}px) saturate(140%)`;
        el.style.backgroundColor = bg;
        el.style.borderColor = bd;
        el.style.backdropFilter = blur;
        el.style.setProperty('-webkit-backdrop-filter', blur);
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const switchLocale = (next: string) => {
    if (next !== locale) router.replace(pathname, { locale: next });
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-[clamp(1rem,4vw,2.5rem)]">
      <nav
        ref={barRef}
        className="pointer-events-auto relative mt-[clamp(1rem,2.5vh,1.75rem)] flex w-full max-w-[1600px] items-center justify-between rounded-full border py-2.5 pl-7 pr-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_26px_60px_-30px_rgba(6,18,24,0.5)]"
      >
        {/* clipped glass — top reflection + pointer-following light */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <PointerSheen tint={dark ? 'light' : 'steel'} />
        </span>

        <Link
          href="/"
          className={`relative z-10 font-display text-[1.35rem] tracking-tight transition-colors duration-700 ${logoClass}`}
        >
          Seçkin
        </Link>

        <ul className="relative z-10 hidden items-center gap-9 lg:flex">
          {nav.map((node, i) =>
            isGroup(node) ? (
              <GroupItem
                key={node.label}
                node={node}
                linkClass={linkClass}
                open={openPanel === i}
                onOpen={() => setOpenPanel(i)}
                onClose={() => setOpenPanel((v) => (v === i ? null : v))}
              />
            ) : (
              <li key={node.href}>
                <LeafLink node={node} linkClass={linkClass} />
              </li>
            ),
          )}
        </ul>

        <div className="relative z-10 flex items-center gap-3">
          <LangToggle locale={locale} dark={dark} onSwitch={switchLocale} />
          <button
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-700 lg:hidden ${
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

      <MobileMenu
        open={open}
        leaves={leaves}
        locale={locale}
        onClose={() => setOpen(false)}
        onSwitch={switchLocale}
      />
    </header>
  );
}

/* ── desktop leaf: liquid underline + magnetic ─────────────── */
function LeafLink({ node, linkClass }: { node: NavLeaf; linkClass: string }) {
  return (
    <Magnetic strength={0.4}>
      <Link
        href={node.href}
        className={`group relative block px-0.5 py-1 text-[0.82rem] transition-colors duration-300 ${linkClass}`}
      >
        <span className="relative z-10">{node.label}</span>
        <span className="pointer-events-none absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 rounded-full bg-steel shadow-[0_0_10px_rgba(130,175,216,0.7)] transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
      </Link>
    </Magnetic>
  );
}

/* ── desktop group: label + floating architectural panel ───── */
function GroupItem({
  node,
  linkClass,
  open,
  onOpen,
  onClose,
}: {
  node: NavGroup;
  linkClass: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <li className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        className={`group relative flex items-center gap-1.5 px-0.5 py-1 text-[0.82rem] transition-colors duration-300 ${linkClass}`}
      >
        <span className="relative z-10">{node.label}</span>
        <span
          className={`inline-block text-[0.7em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? 'rotate-180' : ''
          }`}
        >
          ↓
        </span>
        <span
          className={`pointer-events-none absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 rounded-full bg-steel shadow-[0_0_10px_rgba(130,175,216,0.7)] transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? 'w-full' : 'w-0'
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            transition={{ duration: 0.5, ease: EASE }}
            className="absolute left-1/2 top-full z-20 mt-5 w-[min(88vw,30rem)] -translate-x-1/2"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-canvas/15 bg-deep/70 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_40px_80px_-40px_rgba(6,18,24,0.85)] backdrop-blur-2xl">
              <span className="mb-1 block px-5 pt-3 font-mono text-label uppercase text-canvas/40">
                {node.label}
              </span>
              {node.panel.map((leaf) => (
                <Link
                  key={leaf.href}
                  href={leaf.href}
                  className="group flex items-center justify-between rounded-[1.1rem] px-5 py-5 transition-colors duration-300 hover:bg-canvas/5"
                >
                  <span>
                    <span className="block font-display text-[1.5rem] text-canvas">
                      {leaf.label}
                    </span>
                    {leaf.desc && (
                      <span className="mt-1 block text-[0.9rem] text-canvas/50">
                        {leaf.desc}
                      </span>
                    )}
                  </span>
                  <span className="text-canvas/40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/* ── language: segmented glass toggle with a sliding pane ───── */
function LangToggle({
  locale,
  dark,
  onSwitch,
}: {
  locale: string;
  dark: boolean;
  onSwitch: (l: string) => void;
}) {
  return (
    <div
      className={`relative flex items-center rounded-full border p-0.5 transition-colors duration-700 ${
        dark ? 'border-canvas/15' : 'border-ink/10'
      }`}
    >
      {['tr', 'en'].map((l) => {
        const active = l === locale;
        const activeText = dark ? 'text-deep' : 'text-canvas';
        const idleText = dark
          ? 'text-canvas/55 hover:text-canvas/80'
          : 'text-ink/45 hover:text-ink/70';
        return (
          <button
            key={l}
            onClick={() => onSwitch(l)}
            aria-pressed={active}
            className={`relative z-10 rounded-full px-3 py-1.5 font-mono text-label uppercase transition-colors duration-300 ${
              active ? activeText : idleText
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pane"
                transition={{ duration: 0.5, ease: EASE }}
                className={`absolute inset-0 -z-10 rounded-full ${
                  dark ? 'bg-canvas' : 'bg-ink'
                }`}
              />
            )}
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

/* ── pointer-following light reflection on the glass ───────── */
function PointerSheen({ tint }: { tint: 'light' | 'steel' }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement?.parentElement; // the <nav>
    if (!el || !parent) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--nx', `${x}%`);
        el.style.setProperty('--no', '1');
      });
    };
    const leave = () => el.style.setProperty('--no', '0');
    parent.addEventListener('pointermove', move);
    parent.addEventListener('pointerleave', leave);
    return () => {
      parent.removeEventListener('pointermove', move);
      parent.removeEventListener('pointerleave', leave);
      cancelAnimationFrame(raf);
    };
  }, []);
  const color = tint === 'steel' ? 'rgba(130,175,216,0.25)' : 'rgba(255,255,255,0.22)';
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 opacity-[var(--no,0)] transition-opacity duration-500"
      style={{
        background: `radial-gradient(140px 70px at var(--nx,50%) 50%, ${color}, transparent 70%)`,
      }}
    />
  );
}

/* ── mobile: cinematic fullscreen ──────────────────────────── */
function MobileMenu({
  open,
  leaves,
  locale,
  onClose,
  onSwitch,
}: {
  open: boolean;
  leaves: NavLeaf[];
  locale: string;
  onClose: () => void;
  onSwitch: (l: string) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, clipPath: 'circle(0% at 92% 6%)' }}
          animate={{ opacity: 1, clipPath: 'circle(150% at 92% 6%)' }}
          exit={{ opacity: 0, clipPath: 'circle(0% at 92% 6%)' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="pointer-events-auto fixed inset-0 z-40 flex flex-col justify-between overflow-hidden bg-deep px-8 pb-12 pt-32 lg:hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_80%_-10%,#1d4658_0%,#16303c_50%,#0d1f29_100%)]" />
          <nav className="relative flex flex-col gap-1">
            {leaves.map((leaf, i) => (
              <span key={leaf.href} className="block overflow-hidden">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '110%' }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: EASE }}
                  className="block"
                >
                  <Link
                    href={leaf.href}
                    onClick={onClose}
                    className="block py-1 font-display text-[clamp(2.25rem,11vw,3.75rem)] leading-tight text-canvas/90"
                  >
                    {leaf.label}
                  </Link>
                </motion.span>
              </span>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative flex items-center justify-between"
          >
            <div className="flex items-center gap-4 font-mono text-label uppercase">
              {['tr', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => onSwitch(l)}
                  className={l === locale ? 'text-canvas' : 'text-canvas/40'}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <span className="font-mono text-label uppercase text-canvas/40">
              Seçkin · STC Royal
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
