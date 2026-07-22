import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { isAppLocale, locales } from '@/i18n/routing';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import { Nav, type NavNode } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Grain } from '@/components/atmosphere/Grain';
import { CursorFx } from '@/components/atmosphere/CursorFx';
import { WhatsAppButton } from '@/components/site/WhatsAppButton';
import '../globals.css';

// Same pairing as the Doğrular reference: Syne for display headings, DM Sans
// for body and labels. latin-ext carries the Turkish glyphs (ş ğ ı İ ö ç ü).
const syne = Syne({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return { title: t('title'), description: t('description') };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isAppLocale(locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();
  const tNav = await getTranslations('nav');

  // Client's order. Services opens a floating architectural panel.
  const nav: NavNode[] = [
    { href: '/about', label: tNav('about') },
    {
      label: tNav('services'),
      panel: [
        { href: '/construction', label: tNav('construction'), desc: tNav('constructionDesc') },
        { href: '/maintenance', label: tNav('maintenance'), desc: tNav('maintenanceDesc') },
      ],
    },
    { href: '/products', label: tNav('products') },
    { href: '/projects', label: tNav('projects') },
    { href: '/blog', label: tNav('blog') },
    { href: '/contact', label: tNav('contact') },
  ];

  return (
    <html lang={locale} className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-dvh bg-canvas text-ink">
        <Grain />
        <CursorFx />
        <NextIntlClientProvider messages={messages}>
          <Nav nav={nav} locale={locale} menuLabel={tNav('menu')} />
          <SmoothScroll>
            {children}
            <Footer />
          </SmoothScroll>
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
