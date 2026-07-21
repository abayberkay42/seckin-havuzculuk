'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { whatsappLink } from '@/lib/contact';

/** Request-a-quote (internal) + WhatsApp (external). No prices, no cart. */
export function ProductCTAs({
  productName,
  tone = 'light',
}: {
  productName: string;
  tone?: 'light' | 'dark';
}) {
  const t = useTranslations('catalogue');
  const wa = whatsappLink(t('whatsappText', { product: productName }));
  // `tone` here is the section's lightness → the button takes the opposite.
  const btnTone = tone === 'dark' ? 'light' : 'dark';

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary" tone={btnTone} href="/contact">
        {t('requestQuote')}
      </Button>
      <Button variant="secondary" tone={btnTone} externalHref={wa} icon={null}>
        <span className="inline-flex items-center gap-2.5">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2.4a5.6 5.6 0 0 0-4.8 8.48L2.4 13.6l2.8-.77A5.6 5.6 0 1 0 8 2.4Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
            <path d="M6.2 5.9c.15 1.6 1.3 2.75 2.9 2.9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
          </svg>
          {t('whatsapp')}
        </span>
      </Button>
    </div>
  );
}
