/**
 * Contact endpoints. WHATSAPP_NUMBER is digits only, international format, no
 * + or spaces. EMAIL is still a placeholder — replace with the firm's real one.
 */
export const WHATSAPP_NUMBER = '905346107986';
export const PHONE_DISPLAY = '+90 534 610 79 86';
export const EMAIL = 'info@seckinhavuzculuk.com';

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
