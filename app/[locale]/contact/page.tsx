import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { isAppLocale } from '@/i18n/routing';
import { PageHero } from '@/components/site/PageHero';
import { ContactForm } from '@/components/site/ContactForm';
import { Seam } from '@/components/ui/Seam';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SplitReveal } from '@/components/ui/SplitReveal';
import { PHONE_DISPLAY, EMAIL, whatsappLink } from '@/lib/contact';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return { title: `${t('eyebrow')} — Seçkin`, description: t('intro') };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAppLocale(locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  const channels = [
    { label: t('whatsappLabel'), value: t('whatsappValue'), href: whatsappLink(t('whatsappText')), external: true },
    { label: t('phoneLabel'), value: PHONE_DISPLAY, href: `tel:${PHONE_DISPLAY.replace(/[^\d+]/g, '')}` },
    { label: t('emailLabel'), value: EMAIL, href: `mailto:${EMAIL}` },
  ];

  return (
    <main>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')} />

      <Seam from="canvas" to="surface" />

      <section
        data-nav-theme="light"
        className="bg-surface px-[clamp(1.5rem,6vw,8rem)] py-[clamp(7rem,14vh,12rem)]"
      >
        <div className="grid gap-x-[clamp(2.5rem,7vw,7rem)] gap-y-[clamp(4rem,8vh,6rem)] md:grid-cols-12">
          {/* Direct channels + studio */}
          <div className="md:col-span-5">
            <Eyebrow tone="dark" className="mb-[clamp(2rem,4vh,3rem)]">
              {t('channelsEyebrow')}
            </Eyebrow>

            <ul className="border-t border-ink/12">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-baseline justify-between gap-6 border-b border-ink/12 py-6"
                  >
                    <span className="font-mono text-label uppercase text-ink/40">{c.label}</span>
                    <span className="flex items-baseline gap-3">
                      <span className="link-water font-display text-[clamp(1.35rem,2.4vw,1.9rem)] text-ink/85">
                        {c.value}
                      </span>
                      <span className="text-ink/35 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-[clamp(3rem,6vh,4.5rem)] grid grid-cols-2 gap-8">
              <div>
                <span className="mb-2 block font-mono text-label uppercase text-ink/40">
                  {t('addressLabel')}
                </span>
                <span className="text-body text-ink/70">{t('address')}</span>
              </div>
              <div>
                <span className="mb-2 block font-mono text-label uppercase text-ink/40">
                  {t('hoursLabel')}
                </span>
                <span className="text-body text-ink/70">{t('hours')}</span>
              </div>
            </div>
          </div>

          {/* Message form */}
          <div className="md:col-span-6 md:col-start-7">
            <Eyebrow tone="dark" className="mb-8">
              {t('formEyebrow')}
            </Eyebrow>
            <SplitReveal as="h2" className="mb-[clamp(2.5rem,5vh,3.5rem)] max-w-[16ch] font-display text-title text-ink">
              {t('formTitle')}
            </SplitReveal>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
