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
    slug: 'ege-kiyisi-villasi',
    type: 'completed',
    cover: '/proj-ege-kiyisi.webp',
    name: { tr: 'Sonsuzluk Kenarlı Deniz Havuzu', en: 'Sea-Facing Infinity Pool' },
    place: { tr: 'Çeşme, İzmir', en: 'Çeşme, İzmir' },
    year: '2024',
    overview: {
      tr: 'Denize açılan bir sonsuzluk havuzu — su, ufuk çizgisinde gökyüzüyle birleşiyor. Doğal taş ve cam, mimarinin dilini suya taşıyor.',
      en: 'An infinity pool opening to the sea — water meeting the sky at the horizon. Natural stone and glass carry the architecture into the water.',
    },
    duration: { tr: '9 ay', en: '9 months' },
    area: '240 m²',
    galleryCount: 6,
    hasBeforeAfter: true,
    timeline: [
      { date: { tr: 'Oca 2024', en: 'Jan 2024' }, title: { tr: 'Tasarım', en: 'Design' }, desc: { tr: 'Arazi etüdü ve 3B modelleme.', en: 'Site survey and 3D modelling.' } },
      { date: { tr: 'Nis 2024', en: 'Apr 2024' }, title: { tr: 'İnşa', en: 'Build' }, desc: { tr: 'Kazı, betonarme ve izolasyon.', en: 'Excavation, concrete and waterproofing.' } },
      { date: { tr: 'Eyl 2024', en: 'Sep 2024' }, title: { tr: 'Teslim', en: 'Handover' }, desc: { tr: 'Devreye alma ve ince işçilik.', en: 'Commissioning and finishing.' } },
    ],
    stages: [
      { title: { tr: 'Kazı & İskelet', en: 'Excavation & Shell' }, desc: { tr: 'Arazinin eğimine oturan betonarme havuz kabuğu.', en: 'A reinforced shell set into the slope of the land.' } },
      { title: { tr: 'İzolasyon & Kaplama', en: 'Waterproofing & Cladding' }, desc: { tr: 'Çok katmanlı su yalıtımı ve doğal taş kaplama.', en: 'Multi-layer waterproofing and natural stone cladding.' } },
      { title: { tr: 'Sonsuzluk Kenarı', en: 'Infinity Edge' }, desc: { tr: 'Milimetrik hassasiyetle terazilenen taşma kanalı.', en: 'An overflow channel levelled to the millimetre.' } },
    ],
    materials: [
      { tr: 'Traverten', en: 'Travertine' },
      { tr: 'Cam mozaik', en: 'Glass mosaic' },
      { tr: 'Paslanmaz çelik', en: 'Stainless steel' },
      { tr: 'Doğal taş', en: 'Natural stone' },
      { tr: 'Temperli cam', en: 'Tempered glass' },
    ],
    highlights: [
      { label: { tr: 'Kenar', en: 'Edge' }, value: { tr: 'Sonsuzluk', en: 'Infinity' } },
      { label: { tr: 'Filtrasyon', en: 'Filtration' }, value: { tr: 'Kumlu, tam otomatik', en: 'Sand, fully automated' } },
      { label: { tr: 'Isıtma', en: 'Heating' }, value: { tr: 'Isı pompası', en: 'Heat pump' } },
      { label: { tr: 'Aydınlatma', en: 'Lighting' }, value: { tr: 'RGB LED', en: 'RGB LED' } },
    ],
  },
  {
    slug: 'zeytinlik-rezidans',
    type: 'completed',
    cover: '/proj-zeytinlik.webp',
    name: { tr: 'Doğal Taşlı Bahçe Havuzu', en: 'Natural-Stone Garden Pool' },
    place: { tr: 'Bodrum, Muğla', en: 'Bodrum, Muğla' },
    year: '2023',
    overview: {
      tr: 'Zeytin ağaçlarının arasına yerleşen dingin bir havuz. Toprak tonları ve mat taş, doğayla sessiz bir uyum kuruyor.',
      en: 'A serene pool nestled among olive trees. Earth tones and matte stone form a quiet harmony with nature.',
    },
    duration: { tr: '7 ay', en: '7 months' },
    area: '180 m²',
    galleryCount: 5,
    hasBeforeAfter: false,
    timeline: [
      { date: { tr: 'Mar 2023', en: 'Mar 2023' }, title: { tr: 'Tasarım', en: 'Design' }, desc: { tr: 'Peyzajla bütünleşik yerleşim.', en: 'A layout integrated with the landscape.' } },
      { date: { tr: 'May 2023', en: 'May 2023' }, title: { tr: 'İnşa', en: 'Build' }, desc: { tr: 'Havuz kabuğu ve teras.', en: 'Pool shell and terrace.' } },
      { date: { tr: 'Eki 2023', en: 'Oct 2023' }, title: { tr: 'Teslim', en: 'Handover' }, desc: { tr: 'Peyzaj ve devreye alma.', en: 'Landscaping and commissioning.' } },
    ],
    stages: [
      { title: { tr: 'Yerleşim', en: 'Siting' }, desc: { tr: 'Mevcut ağaçlar korunarak konumlandırma.', en: 'Positioned around the existing trees.' } },
      { title: { tr: 'Kabuk & Teras', en: 'Shell & Terrace' }, desc: { tr: 'Havuzla süreklilik kuran taş teras.', en: 'A stone terrace continuous with the pool.' } },
      { title: { tr: 'Bitiş', en: 'Finish' }, desc: { tr: 'Mat yüzeyler ve gizli tesisat.', en: 'Matte surfaces and concealed services.' } },
    ],
    materials: [
      { tr: 'Andezit', en: 'Andesite' },
      { tr: 'Mat seramik', en: 'Matte ceramic' },
      { tr: 'Ahşap dek', en: 'Wood deck' },
      { tr: 'Doğal taş', en: 'Natural stone' },
    ],
    highlights: [
      { label: { tr: 'Kenar', en: 'Edge' }, value: { tr: 'Skimmer', en: 'Skimmer' } },
      { label: { tr: 'Filtrasyon', en: 'Filtration' }, value: { tr: 'Kumlu', en: 'Sand' } },
      { label: { tr: 'Isıtma', en: 'Heating' }, value: { tr: 'Güneş destekli', en: 'Solar-assisted' } },
      { label: { tr: 'Otomasyon', en: 'Automation' }, value: { tr: 'Mobil kontrol', en: 'Mobile control' } },
    ],
  },
  {
    slug: 'deniz-terasi',
    type: 'completed',
    cover: '/proj-deniz-terasi.webp',
    name: { tr: 'Cam Korkuluklu Teras Havuzu', en: 'Glass-Railed Terrace Pool' },
    place: { tr: 'Kalkan, Antalya', en: 'Kalkan, Antalya' },
    year: '2023',
    overview: {
      tr: 'Kayalık bir yamaca asılı, denize bakan bir teras havuzu. Cam korkuluklar, suyla ufuk arasındaki sınırı siliyor.',
      en: 'A terrace pool suspended on a rocky slope, facing the sea. Glass balustrades erase the line between water and horizon.',
    },
    duration: { tr: '10 ay', en: '10 months' },
    area: '160 m²',
    galleryCount: 5,
    hasBeforeAfter: false,
    timeline: [
      { date: { tr: 'Şub 2023', en: 'Feb 2023' }, title: { tr: 'Tasarım', en: 'Design' }, desc: { tr: 'Zemin analizi ve statik.', en: 'Ground analysis and structure.' } },
      { date: { tr: 'May 2023', en: 'May 2023' }, title: { tr: 'İnşa', en: 'Build' }, desc: { tr: 'Konsol taşıyıcı ve kabuk.', en: 'Cantilever structure and shell.' } },
      { date: { tr: 'Kas 2023', en: 'Nov 2023' }, title: { tr: 'Teslim', en: 'Handover' }, desc: { tr: 'Cam ve devreye alma.', en: 'Glazing and commissioning.' } },
    ],
    stages: [
      { title: { tr: 'Taşıyıcı Sistem', en: 'Structure' }, desc: { tr: 'Yamaca ankastre konsol platform.', en: 'A cantilever platform anchored to the slope.' } },
      { title: { tr: 'Havuz Kabuğu', en: 'Pool Shell' }, desc: { tr: 'Hafifletilmiş betonarme kabuk.', en: 'A lightened reinforced shell.' } },
      { title: { tr: 'Cam Cephe', en: 'Glass Face' }, desc: { tr: 'Kenarları saran temperli cam.', en: 'Tempered glass wrapping the edge.' } },
    ],
    materials: [
      { tr: 'Temperli cam', en: 'Tempered glass' },
      { tr: 'Traverten', en: 'Travertine' },
      { tr: 'Paslanmaz çelik', en: 'Stainless steel' },
      { tr: 'Cam mozaik', en: 'Glass mosaic' },
    ],
    highlights: [
      { label: { tr: 'Kenar', en: 'Edge' }, value: { tr: 'Taşmalı', en: 'Overflow' } },
      { label: { tr: 'Filtrasyon', en: 'Filtration' }, value: { tr: 'Kartuş', en: 'Cartridge' } },
      { label: { tr: 'Isıtma', en: 'Heating' }, value: { tr: 'Isı pompası', en: 'Heat pump' } },
      { label: { tr: 'Aydınlatma', en: 'Lighting' }, value: { tr: 'Sıcak beyaz', en: 'Warm white' } },
    ],
  },
  {
    slug: 'tepe-malikane',
    type: 'ongoing',
    cover: '/proj-tepe-malikane.webp',
    name: { tr: 'İki Kademeli Tepe Havuzu', en: 'Two-Tier Hillside Pool' },
    place: { tr: 'Yalıkavak, Muğla', en: 'Yalıkavak, Muğla' },
    year: '2025',
    overview: {
      tr: 'Devam eden bir inşaat: tepeye kurulan iki kademeli havuz. Şu an betonarme ve izolasyon aşamasında.',
      en: 'A build in progress: a two-tier pool set on a hilltop, currently at the concrete and waterproofing stage.',
    },
    duration: { tr: 'Devam ediyor · ~11 ay', en: 'In progress · ~11 months' },
    area: '320 m²',
    galleryCount: 4,
    hasBeforeAfter: false,
    timeline: [
      { date: { tr: 'Kas 2024', en: 'Nov 2024' }, title: { tr: 'Tasarım', en: 'Design' }, desc: { tr: 'İki kademeli konsept onaylandı.', en: 'Two-tier concept approved.' } },
      { date: { tr: 'Şub 2025', en: 'Feb 2025' }, title: { tr: 'Kazı', en: 'Excavation' }, desc: { tr: 'Kaya kazı ve temel.', en: 'Rock excavation and foundation.' } },
      { date: { tr: 'Şu an', en: 'Now' }, title: { tr: 'Betonarme', en: 'Concrete' }, desc: { tr: 'Kabuk ve izolasyon sürüyor.', en: 'Shell and waterproofing under way.' } },
    ],
    stages: [
      { title: { tr: 'Kaya Kazı', en: 'Rock Excavation' }, desc: { tr: 'Sert zeminde kademeli oyma.', en: 'Terraced cutting into hard ground.' } },
      { title: { tr: 'Betonarme', en: 'Reinforced Concrete' }, desc: { tr: 'İki havuzu bağlayan taşıyıcı.', en: 'A structure linking the two pools.' } },
      { title: { tr: 'İzolasyon', en: 'Waterproofing' }, desc: { tr: 'Kademeler arası su yalıtımı.', en: 'Waterproofing between the tiers.' } },
    ],
    materials: [
      { tr: 'Betonarme', en: 'Reinforced concrete' },
      { tr: 'Bitümlü membran', en: 'Bituminous membrane' },
      { tr: 'Traverten (planlı)', en: 'Travertine (planned)' },
      { tr: 'Paslanmaz çelik', en: 'Stainless steel' },
    ],
    highlights: [
      { label: { tr: 'Kademe', en: 'Tiers' }, value: { tr: '2', en: '2' } },
      { label: { tr: 'Durum', en: 'Status' }, value: { tr: '%55', en: '55%' } },
      { label: { tr: 'Kenar', en: 'Edge' }, value: { tr: 'Taşmalı', en: 'Overflow' } },
      { label: { tr: 'Tahmini teslim', en: 'Est. handover' }, value: { tr: 'Eki 2025', en: 'Oct 2025' } },
    ],
  },
  {
    slug: 'bahce-havuzu-yenileme',
    type: 'before-after',
    cover: '/proj-bahce-yenileme.webp',
    name: { tr: 'Havuz Yenileme & Dönüşüm', en: 'Pool Renovation & Transformation' },
    place: { tr: 'Urla, İzmir', en: 'Urla, İzmir' },
    year: '2024',
    overview: {
      tr: 'Yorulmuş 20 yıllık bir havuzun tam dönüşümü. Eskiyen kaplama, modern bir taşmalı sisteme ve doğal taşa evrildi.',
      en: 'A full transformation of a tired 20-year-old pool. Worn tiling gave way to a modern overflow system and natural stone.',
    },
    duration: { tr: '4 ay', en: '4 months' },
    area: '140 m²',
    galleryCount: 4,
    hasBeforeAfter: true,
    timeline: [
      { date: { tr: 'May 2024', en: 'May 2024' }, title: { tr: 'Söküm', en: 'Strip-out' }, desc: { tr: 'Eski kaplama ve tesisat söküldü.', en: 'Old tiling and services removed.' } },
      { date: { tr: 'Haz 2024', en: 'Jun 2024' }, title: { tr: 'Yenileme', en: 'Renewal' }, desc: { tr: 'Yeni izolasyon ve taşmalı kanal.', en: 'New waterproofing and overflow channel.' } },
      { date: { tr: 'Ağu 2024', en: 'Aug 2024' }, title: { tr: 'Teslim', en: 'Handover' }, desc: { tr: 'Doğal taş ve devreye alma.', en: 'Natural stone and commissioning.' } },
    ],
    stages: [
      { title: { tr: 'Söküm', en: 'Strip-out' }, desc: { tr: 'Kabuğa kadar temizleme.', en: 'Cleared back to the shell.' } },
      { title: { tr: 'Yeni Sistem', en: 'New System' }, desc: { tr: 'Skimmer\'dan taşmalıya geçiş.', en: 'From skimmer to overflow.' } },
      { title: { tr: 'Kaplama', en: 'Cladding' }, desc: { tr: 'Doğal taş ve cam mozaik.', en: 'Natural stone and glass mosaic.' } },
    ],
    materials: [
      { tr: 'Doğal taş', en: 'Natural stone' },
      { tr: 'Cam mozaik', en: 'Glass mosaic' },
      { tr: 'EPDM membran', en: 'EPDM membrane' },
      { tr: 'Paslanmaz çelik', en: 'Stainless steel' },
    ],
    highlights: [
      { label: { tr: 'Önce', en: 'Before' }, value: { tr: 'Skimmer, 2004', en: 'Skimmer, 2004' } },
      { label: { tr: 'Sonra', en: 'After' }, value: { tr: 'Taşmalı, 2024', en: 'Overflow, 2024' } },
      { label: { tr: 'Filtrasyon', en: 'Filtration' }, value: { tr: 'Tam otomatik', en: 'Fully automated' } },
      { label: { tr: 'Süre', en: 'Duration' }, value: { tr: '4 ay', en: '4 months' } },
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
