import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { TextLink } from '@/components/ui/TextLink';
import type { AppPathname } from '@/i18n/routing';
import { PHONE_DISPLAY, EMAIL, whatsappLink } from '@/lib/contact';

/** Static (non-parameterised) routes — the footer never links to [slug] pages. */
type StaticPathname = Exclude<AppPathname, '/products/[slug]' | '/projects/[slug]'>;

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.11746756088!2d26.37410777643129!3d38.29994608173414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb793e314ab417%3A0x9fc07db0ca0d761e!2sSe%C3%A7kin%20Havuzculuk!5e0!3m2!1str!2str!4v1784819832872!5m2!1str!2str';

/**
 * Quiet close. Dark to continue from the invitation; no motion, just anchor.
 * Carries the firm's contact details, address and a live map on every page —
 * so a visitor can reach or find Seçkin from wherever they happen to land.
 */
export async function Footer() {
  const t = await getTranslations('footer');
  const tNav = await getTranslations('nav');
  const tContact = await getTranslations('contact');

  const links: { href: StaticPathname; label: string }[] = [
    { href: '/about', label: tNav('about') },
    { href: '/construction', label: tNav('construction') },
    { href: '/maintenance', label: tNav('maintenance') },
    { href: '/products', label: tNav('products') },
    { href: '/projects', label: tNav('projects') },
    { href: '/blog', label: tNav('blog') },
    { href: '/contact', label: tNav('contact') },
  ];

  const tel = `tel:${PHONE_DISPLAY.replace(/[^\d+]/g, '')}`;

  return (
    <footer
      data-nav-theme="dark"
      className="bg-deep px-[clamp(1.5rem,6vw,8rem)] pb-14 pt-[clamp(4rem,8vh,7rem)]"
    >
      <div className="border-t border-canvas/10 pt-[clamp(3rem,6vh,4.5rem)]">
        {/* Brand mark — centred above everything, on every screen */}
        <Link
          href="/"
          aria-label="Seçkin Havuzculuk"
          className="mx-auto mb-[clamp(3rem,7vh,5rem)] flex w-fit justify-center"
        >
          <Image
            src="/logo.png"
            alt="Seçkin Havuzculuk"
            width={453}
            height={500}
            className="h-24 w-auto"
          />
        </Link>

        <div className="grid gap-x-[clamp(2.5rem,5vw,5rem)] gap-y-14 md:grid-cols-12">
          {/* Reach */}
          <div className="md:col-span-4">
            <p className="max-w-[24rem] text-[0.95rem] leading-relaxed text-canvas/55">
              {t('tagline')}
            </p>

          <ul className="mt-9 space-y-5">
            <li>
              <span className="mb-1.5 block font-mono text-label uppercase text-canvas/40">
                {tContact('addressLabel')}
              </span>
              <span className="text-[0.92rem] leading-relaxed text-canvas/75">
                {tContact('address')}
              </span>
            </li>
            <li className="flex flex-wrap gap-x-10 gap-y-5">
              <div>
                <span className="mb-1.5 block font-mono text-label uppercase text-canvas/40">
                  {tContact('phoneLabel')}
                </span>
                <a href={tel} className="link-water text-[0.92rem] text-canvas/75">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <span className="mb-1.5 block font-mono text-label uppercase text-canvas/40">
                  {tContact('whatsappLabel')}
                </span>
                <a
                  href={whatsappLink(tContact('whatsappText'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-water text-[0.92rem] text-canvas/75"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </li>
            <li className="flex flex-wrap gap-x-10 gap-y-5">
              <div>
                <span className="mb-1.5 block font-mono text-label uppercase text-canvas/40">
                  {tContact('emailLabel')}
                </span>
                <a href={`mailto:${EMAIL}`} className="link-water text-[0.92rem] text-canvas/75">
                  {EMAIL}
                </a>
              </div>
              <div>
                <span className="mb-1.5 block font-mono text-label uppercase text-canvas/40">
                  {tContact('hoursLabel')}
                </span>
                <span className="text-[0.92rem] text-canvas/75">{tContact('hours')}</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Sitemap */}
        <nav aria-label={t('navLabel')} className="md:col-span-3">
          <span className="mb-5 block font-mono text-label uppercase text-canvas/40">
            {t('navLabel')}
          </span>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
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

        {/* Live map */}
        <div className="md:col-span-5">
          <span className="mb-5 block font-mono text-label uppercase text-canvas/40">
            {tContact('mapEyebrow')}
          </span>
          <div className="overflow-hidden rounded-[1.25rem] ring-1 ring-canvas/12">
            <iframe
              title={tContact('mapTitle')}
              src={MAP_SRC}
              className="block h-[clamp(13rem,26vh,17rem)] w-full border-0 [filter:grayscale(0.25)_contrast(1.03)]"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
        </div>
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
