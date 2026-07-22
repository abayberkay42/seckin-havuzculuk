'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { whatsappLink, PHONE_DISPLAY } from '@/lib/contact';

const TEL_HREF = `tel:${PHONE_DISPLAY.replace(/[^\d+]/g, '')}`;

/**
 * Floating contact stack — present on every page for instant reach. Two pills,
 * the call action resting above WhatsApp. Each stays recognisable (WhatsApp in
 * brand green with the official glyph; the call pill in the house ink) yet
 * crafted to fit: soft-shadowed, expanding to reveal its label on hover, a
 * gentle staggered mount, a whisper of lift. Same number behind both.
 */
export function WhatsAppButton() {
  const t = useTranslations('contact');
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setShown(true), 700);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="fixed bottom-[clamp(1.25rem,3vh,2rem)] right-[clamp(1.25rem,4vw,2rem)] z-40 flex flex-col items-end gap-3">
      {/* Call — the same number, one tap away */}
      <a
        href={TEL_HREF}
        aria-label={t('callLabel')}
        className={`group animate-neon-orange flex items-center rounded-full bg-[#ff7a1a] p-2 text-white transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:scale-[0.97] ${
          shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap font-sans text-[0.95rem] font-medium opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-w-[13rem] group-hover:pl-4 group-hover:pr-1.5 group-hover:opacity-100">
          {t('callLabel')}
        </span>
        <span className="grid h-11 w-11 shrink-0 place-items-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6.5 3.5h-2A1.5 1.5 0 003 5c0 8.284 6.716 15 15 15a1.5 1.5 0 001.5-1.5v-2a1.5 1.5 0 00-1.16-1.46l-3.1-.71a1.5 1.5 0 00-1.5.56l-.62.83a11.5 11.5 0 01-5.1-5.1l.83-.62a1.5 1.5 0 00.56-1.5l-.71-3.1A1.5 1.5 0 006.5 3.5z" />
          </svg>
        </span>
      </a>

      {/* WhatsApp — instant chat, pre-filled */}
      <a
        href={whatsappLink(t('whatsappText'))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('whatsappLabel')}
        className={`group animate-neon-green flex items-center rounded-full bg-[#25D366] p-2 text-white transition-[transform,opacity] delay-100 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:scale-[0.97] ${
          shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap font-sans text-[0.95rem] font-medium opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-w-[13rem] group-hover:pl-4 group-hover:pr-1.5 group-hover:opacity-100">
          {t('whatsappLabel')}
        </span>
        <span className="grid h-11 w-11 shrink-0 place-items-center">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
      </a>
    </div>
  );
}
