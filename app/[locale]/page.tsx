import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { isAppLocale } from '@/i18n/routing';
import { Hero } from '@/components/hero/Hero';
import { Manifesto } from '@/components/home/Manifesto';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations('hero');
  const tm = await getTranslations('manifesto');

  return (
    <main>
      <Hero
        eyebrow={t('eyebrow')}
        line1={t('headlineLine1')}
        line2={t('headlineLine2')}
        supporting={t('supporting')}
        ctaPrimary={t('ctaPrimary')}
        ctaSecondary={t('ctaSecondary')}
        scroll={t('scroll')}
      />
      <Manifesto eyebrow={tm('eyebrow')} body={tm('body')} />
    </main>
  );
}
