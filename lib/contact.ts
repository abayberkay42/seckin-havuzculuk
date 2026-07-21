/**
 * Contact endpoints — placeholders. Replace with the firm's real details.
 * WHATSAPP_NUMBER is digits only, international format, no + or spaces.
 */
export const WHATSAPP_NUMBER = '905000000000';
export const PHONE_DISPLAY = '+90 500 000 00 00';
export const EMAIL = 'info@seckinhavuzculuk.com';

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
