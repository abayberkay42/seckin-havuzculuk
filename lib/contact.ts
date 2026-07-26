/**
 * Contact endpoints. WHATSAPP_NUMBER is digits only, international format, no
 * + or spaces. EMAIL is still a placeholder — replace with the firm's real one.
 */
export const WHATSAPP_NUMBER = '905346107986';
export const PHONE_DISPLAY = '+90 534 610 79 86';
export const EMAIL = 'stcroyalinsaat@gmail.com';

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/**
 * Public profiles — the single source for both the Organization `sameAs` entity
 * graph and the visible footer links. Add new profiles here (YouTube, Facebook…)
 * and both surfaces pick them up.
 */
export const INSTAGRAM_URL = 'https://www.instagram.com/seckinhavuzculuk/';
export const GBP_URL = 'https://maps.app.goo.gl/Tcisg7HNpE3qzTVx7';

export const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: 'Instagram', href: INSTAGRAM_URL },
  { label: 'Google', href: GBP_URL },
];
