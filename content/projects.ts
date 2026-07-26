/**
 * Project content — not UI strings, so it lives here rather than in next-intl.
 * Each field carries both locales; `localize` picks one. Swap the Frame
 * placeholders for real drone/finished photography when it arrives.
 */

export type ProjectType = 'completed' | 'ongoing' | 'before-after';

type L = { tr: string; en: string };

export type Project = {
  slug: string;
  type: ProjectType;
  cover: string;
  name: L;
  place: L;
  year: string;
  overview: L;
  duration: L;
  area: string;
  galleryCount: number;
  hasBeforeAfter: boolean;
  timeline: { date: L; title: L; desc: L }[];
  stages: { title: L; desc: L }[];
  materials: L[];
  highlights: { label: L; value: L }[];
};

export const projects: Project[] = [
  {
    slug: 'antrasit-aydinlatmali-renovasyon',
    type: 'before-after',
    cover: '/proj-antrasit-renovasyon.webp',
    name: { tr: 'Antrasit Aydınlatmalı Renovasyon', en: 'Anthracite-Lit Renovation' },
    place: { tr: 'Çeşme, İzmir', en: 'Çeşme, İzmir' },
    year: '2024',
    overview: {
      tr: '4×6×1.80 m havuzun tam renovasyonu. Kenar mermerleri Bursa siyaha, iç kaplama 60×1.20 verde seramiğe dönüştü; seramiğe uyumlu antrasit aydınlatma ve nozul çerçeveleriyle havuz, gece bambaşka bir atmosfer kazandı.',
      en: 'A full renovation of a 4×6×1.80 m pool. The coping was changed to Bursa black and the lining to 60×1.20 verde ceramic; with matching anthracite lighting and nozzle frames, the pool takes on a whole new character at night.',
    },
    duration: { tr: '6 hafta', en: '6 weeks' },
    area: '4×6 m',
    galleryCount: 6,
    hasBeforeAfter: true,
    timeline: [
      { date: { tr: 'Söküm', en: 'Strip-out' }, title: { tr: 'Söküm', en: 'Strip-out' }, desc: { tr: 'Eski kaplama ve kenar mermerleri kaldırıldı.', en: 'Old lining and coping removed.' } },
      { date: { tr: 'Yenileme', en: 'Renewal' }, title: { tr: 'Kaplama', en: 'Re-clad' }, desc: { tr: 'Verde seramik ve Bursa siyah mermer uygulandı.', en: 'Verde ceramic and Bursa black marble applied.' } },
      { date: { tr: 'Bitiş', en: 'Finish' }, title: { tr: 'Aydınlatma', en: 'Lighting' }, desc: { tr: 'Antrasit aydınlatma, nozul çerçeveleri ve granit döşeme.', en: 'Anthracite lighting, nozzle frames and granite paving.' } },
    ],
    stages: [
      { title: { tr: 'Kenar & İç Kaplama', en: 'Coping & Lining' }, desc: { tr: 'Bursa siyah kenar mermeri, 60×1.20 verde seramik.', en: 'Bursa black coping, 60×1.20 verde ceramic.' } },
      { title: { tr: 'Aydınlatma', en: 'Lighting' }, desc: { tr: 'Seramiğe uyumlu antrasit LED ve nozul çerçeveleri.', en: 'Anthracite LED and nozzle frames matched to the ceramic.' } },
      { title: { tr: 'Çevre Düzeni', en: 'Surrounds' }, desc: { tr: 'Güneşlenme alanı ve 60×1.20 antrasit granit döşeme.', en: 'A sun deck and 60×1.20 anthracite granite paving.' } },
    ],
    materials: [
      { tr: 'Bursa siyah mermer', en: 'Bursa black marble' },
      { tr: '60×1.20 verde seramik', en: '60×1.20 verde ceramic' },
      { tr: 'Antrasit LED aydınlatma', en: 'Anthracite LED lighting' },
      { tr: '60×1.20 antrasit granit', en: '60×1.20 anthracite granite' },
    ],
    highlights: [
      { label: { tr: 'Ölçü', en: 'Size' }, value: { tr: '4×6×1.80 m', en: '4×6×1.80 m' } },
      { label: { tr: 'Kenar', en: 'Coping' }, value: { tr: 'Bursa siyah', en: 'Bursa black' } },
      { label: { tr: 'Kaplama', en: 'Lining' }, value: { tr: 'Verde seramik', en: 'Verde ceramic' } },
      { label: { tr: 'Aydınlatma', en: 'Lighting' }, value: { tr: 'Antrasit LED', en: 'Anthracite LED' } },
    ],
  },
  {
    slug: 'jakuzili-havuz-renovasyonu',
    type: 'before-after',
    cover: '/proj-bahce-yenileme.webp',
    name: { tr: 'Jakuzili Havuz Renovasyonu', en: 'Jacuzzi Pool Renovation' },
    place: { tr: 'Alaçatı, İzmir', en: 'Alaçatı, İzmir' },
    year: '2024',
    overview: {
      tr: '4.5×8×1.60 m havuzun renovasyonu. Su kaçağı giderildi, jakuzi hattı baştan sona yenilendi ve iç yüzey 30×60 serapool seramikle kaplandı; renk uyumu gözetilerek yaşam alanına modern bir hava kazandırıldı.',
      en: 'A renovation of a 4.5×8×1.60 m pool. A water leak was fixed, the jacuzzi line renewed end to end and the interior clad in 30×60 serapool ceramic; with a careful colour palette, the whole space gained a modern feel.',
    },
    duration: { tr: '5 hafta', en: '5 weeks' },
    area: '4.5×8 m',
    galleryCount: 5,
    hasBeforeAfter: true,
    timeline: [
      { date: { tr: 'Tespit', en: 'Survey' }, title: { tr: 'Su Kaçağı', en: 'Leak' }, desc: { tr: 'Su kaçağı tespit edilip giderildi.', en: 'The water leak was located and repaired.' } },
      { date: { tr: 'Yenileme', en: 'Renewal' }, title: { tr: 'Jakuzi Hattı', en: 'Jacuzzi Line' }, desc: { tr: 'Jakuzi tesisatı baştan sona yenilendi.', en: 'The jacuzzi plumbing was renewed end to end.' } },
      { date: { tr: 'Bitiş', en: 'Finish' }, title: { tr: 'Kaplama', en: 'Cladding' }, desc: { tr: '30×60 serapool seramik ve renk uyumu.', en: '30×60 serapool ceramic and a matched palette.' } },
    ],
    stages: [
      { title: { tr: 'Onarım', en: 'Repair' }, desc: { tr: 'Su kaçağının giderilmesi ve yalıtım.', en: 'Fixing the leak and re-sealing.' } },
      { title: { tr: 'Jakuzi', en: 'Jacuzzi' }, desc: { tr: 'Jakuzi hattının komple yenilenmesi.', en: 'A complete renewal of the jacuzzi line.' } },
      { title: { tr: 'İç Kaplama', en: 'Lining' }, desc: { tr: '30×60 serapool seramik ile modern yüzey.', en: 'A modern surface in 30×60 serapool ceramic.' } },
    ],
    materials: [
      { tr: '30×60 serapool seramik', en: '30×60 serapool ceramic' },
      { tr: 'Jakuzi sistemi', en: 'Jacuzzi system' },
      { tr: 'Su yalıtımı', en: 'Waterproofing' },
      { tr: 'Doğal taş', en: 'Natural stone' },
    ],
    highlights: [
      { label: { tr: 'Ölçü', en: 'Size' }, value: { tr: '4.5×8×1.60 m', en: '4.5×8×1.60 m' } },
      { label: { tr: 'Kaplama', en: 'Lining' }, value: { tr: '30×60 serapool', en: '30×60 serapool' } },
      { label: { tr: 'Jakuzi', en: 'Jacuzzi' }, value: { tr: 'Yenilendi', en: 'Renewed' } },
      { label: { tr: 'Su kaçağı', en: 'Leak' }, value: { tr: 'Giderildi', en: 'Fixed' } },
    ],
  },
  {
    slug: 'gizli-savakli-renovasyon',
    type: 'before-after',
    cover: '/proj-deniz-terasi.webp',
    name: { tr: 'Gizli Savaklı Renovasyon', en: 'Hidden-Weir Renovation' },
    place: { tr: 'Ilıca, Çeşme', en: 'Ilıca, Çeşme' },
    year: '2024',
    overview: {
      tr: '4×8×1.60 m havuzun renovasyonu. Bursa siyah mermer kaymaz hâle getirildi ve gizli savak uygulandı; iç kaplama ile güneşlenme alanı 33×66 verde lamarca porselenle bütünleştirilerek tek bir yüzeye dönüştü.',
      en: 'A renovation of a 4×8×1.60 m pool. The Bursa black marble was made anti-slip and a hidden weir added; the lining and sun deck were unified into one surface in 33×66 verde lamarca porcelain.',
    },
    duration: { tr: '6 hafta', en: '6 weeks' },
    area: '4×8 m',
    galleryCount: 5,
    hasBeforeAfter: true,
    timeline: [
      { date: { tr: 'Söküm', en: 'Strip-out' }, title: { tr: 'Söküm', en: 'Strip-out' }, desc: { tr: 'Eski yüzey kaldırıldı, savak hazırlığı yapıldı.', en: 'Old surface removed, weir prepared.' } },
      { date: { tr: 'Uygulama', en: 'Build' }, title: { tr: 'Gizli Savak', en: 'Hidden Weir' }, desc: { tr: 'Gizli savak ve kaymaz mermer işlemi.', en: 'Hidden weir and anti-slip marble treatment.' } },
      { date: { tr: 'Bitiş', en: 'Finish' }, title: { tr: 'Porselen', en: 'Porcelain' }, desc: { tr: '33×66 verde lamarca porselen ile bütünleşme.', en: 'Unified in 33×66 verde lamarca porcelain.' } },
    ],
    stages: [
      { title: { tr: 'Kenar İşleme', en: 'Coping Treatment' }, desc: { tr: 'Bursa siyah mermerin kaymaz hâle getirilmesi.', en: 'Making the Bursa black marble anti-slip.' } },
      { title: { tr: 'Gizli Savak', en: 'Hidden Weir' }, desc: { tr: 'Görünmeyen taşma kanalı uygulaması.', en: 'A concealed overflow channel.' } },
      { title: { tr: 'Bütünleşik Yüzey', en: 'Unified Surface' }, desc: { tr: 'Havuz ve güneşlenme alanı aynı porselenle.', en: 'Pool and sun deck in the same porcelain.' } },
    ],
    materials: [
      { tr: 'Bursa siyah kaymaz mermer', en: 'Bursa black anti-slip marble' },
      { tr: '33×66 verde lamarca porselen', en: '33×66 verde lamarca porcelain' },
      { tr: 'Gizli savak', en: 'Hidden weir' },
      { tr: 'Doğal taş', en: 'Natural stone' },
    ],
    highlights: [
      { label: { tr: 'Ölçü', en: 'Size' }, value: { tr: '4×8×1.60 m', en: '4×8×1.60 m' } },
      { label: { tr: 'Kenar', en: 'Edge' }, value: { tr: 'Gizli savak', en: 'Hidden weir' } },
      { label: { tr: 'Kaplama', en: 'Lining' }, value: { tr: 'Verde lamarca', en: 'Verde lamarca' } },
      { label: { tr: 'Mermer', en: 'Marble' }, value: { tr: 'Bursa siyah, kaymaz', en: 'Bursa black, anti-slip' } },
    ],
  },
  {
    slug: 'sifirdan-villa-havuzu',
    type: 'ongoing',
    cover: '/proj-tepe-malikane.webp',
    name: { tr: 'Sıfırdan Villa Havuzu', en: 'New-Build Villa Pool' },
    place: { tr: 'Çeşme, İzmir', en: 'Çeşme, İzmir' },
    year: '2025',
    overview: {
      tr: 'Sıfırdan inşa edilen bir villa havuzu; şu an betonarme iskelet ve izolasyon aşamasında. Kabuk üzerine plazma taşma sistemi ve bej traverten kenar planlandı.',
      en: 'A pool built from scratch, currently at the reinforced-concrete and waterproofing stage. A deck-level overflow system and beige travertine coping are planned on the shell.',
    },
    duration: { tr: 'Devam ediyor', en: 'In progress' },
    area: '5×10 m',
    galleryCount: 4,
    hasBeforeAfter: false,
    timeline: [
      { date: { tr: 'Kazı', en: 'Excavation' }, title: { tr: 'Kazı & Temel', en: 'Excavation' }, desc: { tr: 'Kazı ve donatı yerleşimi tamamlandı.', en: 'Excavation and rebar placement completed.' } },
      { date: { tr: 'Şu an', en: 'Now' }, title: { tr: 'Betonarme', en: 'Concrete' }, desc: { tr: 'Kabuk ve izolasyon sürüyor.', en: 'Shell and waterproofing under way.' } },
      { date: { tr: 'Sırada', en: 'Next' }, title: { tr: 'Kaplama', en: 'Cladding' }, desc: { tr: 'Plazma taşma ve traverten kenar planlandı.', en: 'Deck-level overflow and travertine coping planned.' } },
    ],
    stages: [
      { title: { tr: 'Kazı & Donatı', en: 'Excavation & Rebar' }, desc: { tr: 'Havuz çukuru ve çelik donatı örgüsü.', en: 'The pit and its steel reinforcement cage.' } },
      { title: { tr: 'Betonarme Kabuk', en: 'Concrete Shell' }, desc: { tr: 'Püskürtme beton ve su yalıtımı.', en: 'Sprayed concrete and waterproofing.' } },
      { title: { tr: 'Planlı Bitiş', en: 'Planned Finish' }, desc: { tr: 'Plazma taşma sistemi ve bej traverten.', en: 'Deck-level overflow and beige travertine.' } },
    ],
    materials: [
      { tr: 'Betonarme / gunit', en: 'Reinforced concrete / gunite' },
      { tr: 'Su yalıtımı', en: 'Waterproofing' },
      { tr: 'Plazma taşma (planlı)', en: 'Deck-level overflow (planned)' },
      { tr: 'Bej traverten (planlı)', en: 'Beige travertine (planned)' },
    ],
    highlights: [
      { label: { tr: 'Ölçü', en: 'Size' }, value: { tr: '5×10 m', en: '5×10 m' } },
      { label: { tr: 'Sistem', en: 'System' }, value: { tr: 'Plazma taşma', en: 'Deck-level overflow' } },
      { label: { tr: 'Durum', en: 'Status' }, value: { tr: 'İnşa halinde', en: 'Under construction' } },
      { label: { tr: 'Kenar', en: 'Coping' }, value: { tr: 'Bej traverten', en: 'Beige travertine' } },
    ],
  },
  {
    slug: 'plazma-tasmali-villa-havuzu',
    type: 'completed',
    cover: '/proj-zeytinlik.webp',
    name: { tr: 'Plazma Taşmalı Villa Havuzu', en: 'Deck-Level Villa Pool' },
    place: { tr: 'Alaçatı, İzmir', en: 'Alaçatı, İzmir' },
    year: '2024',
    overview: {
      tr: '4×8×1.50 m plazma taşma modeli bir villa havuzu. Sade çizgiler ve dengeli oranlarla, bulunduğu mekâna modern ve zamansız bir karakter kazandırıyor. Bej traverten kenar ve 33×66 seramik ile ıslak zeminli, ferah bir yüzme alanı.',
      en: 'A 4×8×1.50 m deck-level (overflow) villa pool. Clean lines and balanced proportions give it a modern, timeless character. A beige travertine coping and 33×66 ceramic form an airy, wet-deck swimming area.',
    },
    duration: { tr: '8 hafta', en: '8 weeks' },
    area: '4×8 m',
    galleryCount: 5,
    hasBeforeAfter: false,
    timeline: [
      { date: { tr: 'Kabuk', en: 'Shell' }, title: { tr: 'Betonarme', en: 'Concrete' }, desc: { tr: 'Gunit kabuk ve taşma kanalı.', en: 'Gunite shell and overflow channel.' } },
      { date: { tr: 'Kaplama', en: 'Cladding' }, title: { tr: 'Porselen & Traverten', en: 'Porcelain & Travertine' }, desc: { tr: '33×66 seramik ve bej traverten kenar.', en: '33×66 ceramic and beige travertine coping.' } },
      { date: { tr: 'Teslim', en: 'Handover' }, title: { tr: 'Devreye Alma', en: 'Commissioning' }, desc: { tr: 'Islak zemin ve devreye alma.', en: 'Wet deck and commissioning.' } },
    ],
    stages: [
      { title: { tr: 'Plazma Taşma', en: 'Deck-Level Overflow' }, desc: { tr: 'Zeminle aynı hizada taşma kanalı.', en: 'An overflow channel flush with the deck.' } },
      { title: { tr: 'Kenar & Kaplama', en: 'Coping & Lining' }, desc: { tr: 'Bej traverten kenar, 33×66 seramik.', en: 'Beige travertine coping, 33×66 ceramic.' } },
      { title: { tr: 'Islak Zemin', en: 'Wet Deck' }, desc: { tr: 'Havuzla bütünleşen ıslak zemin alanı.', en: 'A wet-deck area continuous with the pool.' } },
    ],
    materials: [
      { tr: 'Bej traverten', en: 'Beige travertine' },
      { tr: '33×66 seramik', en: '33×66 ceramic' },
      { tr: 'Plazma taşma sistemi', en: 'Deck-level overflow system' },
      { tr: 'Doğal taş', en: 'Natural stone' },
    ],
    highlights: [
      { label: { tr: 'Ölçü', en: 'Size' }, value: { tr: '4×8×1.50 m', en: '4×8×1.50 m' } },
      { label: { tr: 'Kenar', en: 'Edge' }, value: { tr: 'Plazma taşma', en: 'Deck-level' } },
      { label: { tr: 'Kaplama', en: 'Lining' }, value: { tr: '33×66 seramik', en: '33×66 ceramic' } },
      { label: { tr: 'Zemin', en: 'Deck' }, value: { tr: 'Bej traverten', en: 'Beige travertine' } },
    ],
  },
];

export const localize = (l: L, locale: string): string =>
  locale === 'en' ? l.en : l.tr;

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const projectsByType = (type: ProjectType): Project[] =>
  projects.filter((p) => p.type === type);

export type LocalizedProject = {
  slug: string;
  type: ProjectType;
  cover: string;
  year: string;
  area: string;
  galleryCount: number;
  hasBeforeAfter: boolean;
  name: string;
  place: string;
  overview: string;
  duration: string;
  timeline: { date: string; title: string; desc: string }[];
  stages: { title: string; desc: string }[];
  materials: string[];
  highlights: { label: string; value: string }[];
};

/** Resolve a project's bilingual fields to one locale (server-side) so client
 *  components ship one plain object rather than the whole content module. */
export function localizeProject(p: Project, locale: string): LocalizedProject {
  const pick = (x: L) => localize(x, locale);
  return {
    slug: p.slug,
    type: p.type,
    cover: p.cover,
    year: p.year,
    area: p.area,
    galleryCount: p.galleryCount,
    hasBeforeAfter: p.hasBeforeAfter,
    name: pick(p.name),
    place: pick(p.place),
    overview: pick(p.overview),
    duration: pick(p.duration),
    timeline: p.timeline.map((t) => ({ date: pick(t.date), title: pick(t.title), desc: pick(t.desc) })),
    stages: p.stages.map((s) => ({ title: pick(s.title), desc: pick(s.desc) })),
    materials: p.materials.map(pick),
    highlights: p.highlights.map((h) => ({ label: pick(h.label), value: pick(h.value) })),
  };
}
