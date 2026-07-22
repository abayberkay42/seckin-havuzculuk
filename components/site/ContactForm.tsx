'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { EMAIL } from '@/lib/contact';

/**
 * A quiet, backend-free contact form. On send it composes a message and opens
 * the visitor's own mail client (mailto) — honest and functional without a
 * server. Underline inputs keep it editorial, not corporate.
 */
export function ContactForm() {
  const t = useTranslations('contact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const send = () => {
    const body = `${t('formName')}: ${name}\n${t('formEmail')}: ${email}\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      t('formSubject'),
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    'w-full border-b border-ink/20 bg-transparent py-3.5 text-[1.05rem] text-ink outline-none transition-colors duration-300 placeholder:text-ink/35 focus:border-ink';

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        send();
      }}
      className="flex flex-col gap-7"
    >
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t('formName')}
        aria-label={t('formName')}
        className={field}
      />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t('formEmail')}
        aria-label={t('formEmail')}
        className={field}
      />
      <textarea
        required
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={t('formMessage')}
        aria-label={t('formMessage')}
        className={`${field} resize-none`}
      />
      <div className="mt-2 flex flex-wrap items-center gap-5">
        <Button variant="primary" tone="dark" onClick={send}>
          {t('formSend')}
        </Button>
        <span className="max-w-[16rem] text-[0.8rem] leading-relaxed text-ink/40">
          {t('formNote')}
        </span>
      </div>
    </form>
  );
}
