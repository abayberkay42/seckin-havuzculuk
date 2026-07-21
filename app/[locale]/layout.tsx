import type { Metadata } from 'next';
import { Fraunces, Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { isAppLocale, locales } from '@/i18n/routing';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import { Nav, type NavItem } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Grain } from '@/components/atmosphere/Grain';
import '../globals.css';

// Fraunces = editorial display; Geist = UI; Geist Mono = specs/labels. All free.
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
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

  // Client's order, not alphabetical.
  const navItems: NavItem[] = [
    { href: '/', label: tNav('home') },
    { href: '/about', label: tNav('about') },
    { href: '/construction', label: tNav('construction') },
    { href: '/maintenance', label: tNav('maintenance') },
    { href: '/products', label: tNav('products') },
    { href: '/projects', label: tNav('projects') },
    { href: '/blog', label: tNav('blog') },
    { href: '/contact', label: tNav('contact') },
  ];

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh bg-canvas text-ink">
        <Grain />
        <NextIntlClientProvider messages={messages}>
          <Nav
            items={navItems}
            locale={locale}
            switchLabel={tNav('switchLanguage')}
            menuLabel={tNav('menu')}
          />
          <SmoothScroll>
            {children}
            <Footer />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
