import { getTranslations } from 'next-intl/server';
import { TextLink } from '@/components/ui/TextLink';
import type { AppPathname } from '@/i18n/routing';

/** Static (non-parameterised) routes — the footer never links to [slug] pages. */
type StaticPathname = Exclude<AppPathname, '/products/[slug]' | '/projects/[slug]'>;

/** Quiet close. Dark to continue from the invitation; no motion, just anchor. */
export async function Footer() {
  const t = await getTranslations('footer');
  const tNav = await getTranslations('nav');

  const links: { href: StaticPathname; label: string }[] = [
    { href: '/about', label: tNav('about') },
    { href: '/construction', label: tNav('construction') },
    { href: '/maintenance', label: tNav('maintenance') },
    { href: '/products', label: tNav('products') },
    { href: '/projects', label: tNav('projects') },
    { href: '/blog', label: tNav('blog') },
    { href: '/contact', label: tNav('contact') },
  ];

  return (
    <footer
      data-nav-theme="dark"
      className="bg-deep px-[clamp(1.5rem,6vw,8rem)] pb-14 pt-[clamp(4rem,8vh,7rem)]"
    >
      <div className="flex flex-col gap-16 border-t border-canvas/10 pt-14 md:flex-row md:justify-between">
        <div className="max-w-[24rem]">
          <span className="font-display text-[1.6rem] text-canvas">Seçkin</span>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-canvas/55">
            {t('tagline')}
          </p>
        </div>

        <nav aria-label={t('navLabel')}>
          <ul className="grid grid-cols-2 gap-x-14 gap-y-3 sm:grid-cols-3">
            {links.map((link) => (
              <li key={link.href}>
                <TextLink
                  href={link.href}
                  className="text-[0.9rem] text-canvas/70 transition-colors duration-[var(--dur-quick)] hover:text-canvas"
                >
                  {link.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-16 flex flex-col gap-2 font-mono text-label uppercase text-canvas/40 sm:flex-row sm:justify-between">
        <span>Seçkin Havuzculuk · STC Royal A.Ş.</span>
        <span>
          © {new Date().getFullYear()} · {t('rights')}
        </span>
      </div>
    </footer>
  );
}
