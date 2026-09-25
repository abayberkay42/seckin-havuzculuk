/**
 * Real customer reviews, copied verbatim from the firm's Google Business
 * Profile with the reviewer's own name as shown there.
 *
 * Deliberately NOT marked up as schema.org Review/AggregateRating: Google does
 * not allow a business to put its own Google-profile ratings back on its site
 * as rich-result stars, and doing so risks a manual action. They are published
 * here as plain, attributed quotes — which is both allowed and what actually
 * persuades a visitor.
 *
 * Only add entries that exist on the public profile, word for word. Never
 * write one.
 */

export type Testimonial = {
  /** Reviewer name exactly as it appears on the public profile. */
  name: string;
  /** The review text, verbatim. Turkish only — these were written in Turkish
   *  and translating someone's words would misrepresent them. */
  quote: string;
  /** Services the reviewer tagged on the profile, if any. */
  services?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Berkay Abay',
    quote:
      'Yaptırmış olduğum havuz projesini layığı ile yerine getirdikleri için ve sonrasında vermiş oldukları havuz bakım hizmeti için kendilerine çok teşekkür ediyorum.',
    services: 'Genel inşaat, Tasarım, Bakım',
  },
  {
    name: 'Gönül',
    quote:
      'Havuz yapımı konusunda çok başarılı bir ekip. Sonrasında bakım hizmetlerinde de aynı özeni göstermeleri bizim için büyük bir avantaj oldu. İşçiliklerinden ve ilgilerinden memnun kaldık, tavsiye ederiz.',
    services: 'Temizleme',
  },
  {
    name: 'Zehra Cebenoyan',
    quote:
      'Havuz bakımı konusunda da düzenli ve güvenilir hizmet veriyorlar. İşçilikleri ve ilgileri gerçekten çok iyi. Kesinlikle tavsiye ederim.',
    services: 'Temizleme',
  },
  {
    name: 'GÜNEY çınar',
    quote:
      'Havuz yapımı, bakımı ve gerekli tüm ekipmanlar için güvenerek tercih edebileceğiniz bir yer. İlgi ve alakaları çok iyi, ürün konusunda da yardımcı oluyorlar. Teşekkür ederiz.',
  },
  {
    name: 'berk çelik',
    quote:
      'Havuz malzemeleri ve ekipmanları konusunda oldukça başarılı bir mağaza. Ürün seçenekleri fazla, çalışanlar neye ihtiyacınız olduğunu anlayıp yardımcı oluyor. Hem alışverişten hem hizmetten memnun kaldık.',
    services: 'Tasarım, Genel onarım ve bakım',
  },
];
