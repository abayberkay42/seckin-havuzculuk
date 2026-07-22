/**
 * Product catalogue — presentation only, no commerce. Built from the firm's real
 * product list (Ürünler.md). Variants (size/colour/diameter) are grouped into
 * one product and listed in its specs, so the catalogue reads as a considered
 * range rather than a raw SKU dump. Bilingual via L; descriptions are concise
 * and generic per product — swap for real copy and photography when available.
 */

export type CategoryKey =
  | 'chemicals'
  | 'plumbing'
  | 'lighting'
  | 'circulation'
  | 'decorative'
  | 'cleaning';

type L = { tr: string; en: string };
type Spec = { label: L; value: string };

export type Product = {
  slug: string;
  category: CategoryKey;
  brand?: string;
  name: L;
  tagline: L;
  description: L;
  specs: Spec[];
  features: L[];
  usage: L;
  galleryCount: number;
  pdf?: string;
};

export const categories: { key: CategoryKey; name: L; desc: L }[] = [
  { key: 'chemicals', name: { tr: 'Havuz Kimyasalları', en: 'Pool Chemicals' }, desc: { tr: 'Berrak ve dengeli su.', en: 'Clear, balanced water.' } },
  { key: 'plumbing', name: { tr: 'Tesisat & Bağlantı', en: 'Plumbing & Fittings' }, desc: { tr: 'Suyun görünmez altyapısı.', en: 'The unseen infrastructure.' } },
  { key: 'lighting', name: { tr: 'Aydınlatma', en: 'Lighting' }, desc: { tr: 'Suya düşen ışık.', en: 'Light on water.' } },
  { key: 'circulation', name: { tr: 'Nozul, Filtre & Pompa', en: 'Circulation & Filtration' }, desc: { tr: 'Sessiz, dengeli sirkülasyon.', en: 'Quiet, even circulation.' } },
  { key: 'decorative', name: { tr: 'Dekoratif & Su Oyunları', en: 'Decorative & Water Features' }, desc: { tr: 'Işık, renk ve hareket.', en: 'Light, colour and motion.' } },
  { key: 'cleaning', name: { tr: 'Temizlik & Test Ekipmanları', en: 'Cleaning & Testing' }, desc: { tr: 'Ömür boyu özen.', en: 'Care for a lifetime.' } },
];

export const products: Product[] = [
  // ══ Havuz Kimyasalları ═══════════════════════════════════════
  {
    slug: 'sivi-ph-dusurucu', category: 'chemicals', brand: 'Quardex · Selenoid',
    name: { tr: 'Sıvı pH Düşürücü', en: 'Liquid pH Reducer' },
    tagline: { tr: 'Dengeyi korur', en: 'Keeps the balance' },
    description: { tr: 'Suyun pH değerini ideal aralığa çeken sıvı çözüm; cilde ve ekipmana dost.', en: 'A liquid that draws pH into its ideal range — gentle on skin and equipment.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Sıvı / Liquid' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '20 L · 25 kg' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Quardex · Selenoid' },
    ],
    features: [
      { tr: 'Hızlı çözünür', en: 'Fast acting' },
      { tr: 'Dozaj pompasıyla uyumlu', en: 'Dosing-pump ready' },
    ],
    usage: { tr: 'Tüm havuz tipleri', en: 'All pool types' },
    galleryCount: 2,
  },
  {
    slug: 'toz-ph-dusurucu', category: 'chemicals', brand: 'Quardex · Selenoid',
    name: { tr: 'Toz / Granül pH Düşürücü', en: 'Powder / Granular pH Reducer' },
    tagline: { tr: 'Ölçülü ayar', en: 'Measured control' },
    description: { tr: 'Granül formda, kolay dozlanan pH düşürücü; hassas su dengesi için.', en: 'An easy-to-dose granular pH reducer for precise water balance.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Granül / Granular' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '25 kg' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Quardex · Selenoid' },
    ],
    features: [
      { tr: 'Kolay dozaj', en: 'Easy dosing' },
      { tr: 'Kararlı sonuç', en: 'Stable result' },
    ],
    usage: { tr: 'Manuel bakım', en: 'Manual upkeep' },
    galleryCount: 2,
  },
  {
    slug: 'sivi-klor', category: 'chemicals', brand: 'Quardex · Selenoid',
    name: { tr: 'Sıvı Klor', en: 'Liquid Chlorine' },
    tagline: { tr: 'Sürekli dezenfeksiyon', en: 'Continuous disinfection' },
    description: { tr: 'Otomatik dozaj sistemleriyle uyumlu, güçlü sıvı sodyum hipoklorit.', en: 'A strong liquid sodium hypochlorite, ideal for automatic dosing systems.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Sıvı / Liquid' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '20 L · 25 kg' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Quardex · Selenoid' },
    ],
    features: [
      { tr: 'Güçlü etki', en: 'Strong action' },
      { tr: 'Dozaj sistemi uyumlu', en: 'Dosing-system ready' },
    ],
    usage: { tr: 'Otomatik dozaj', en: 'Automatic dosing' },
    galleryCount: 2,
  },
  {
    slug: 'granul-klor', category: 'chemicals', brand: 'Quardex',
    name: { tr: 'Granül Klor %90', en: 'Granular Chlorine 90%' },
    tagline: { tr: 'Hızlı müdahale', en: 'Rapid reset' },
    description: { tr: 'Bulanıklık ve yoğun kirlilikte suyu hızla toparlayan yüksek oranlı granül klor.', en: 'A high-strength granular chlorine that recovers cloudy, heavily loaded water fast.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Granül / Granular' },
      { label: { tr: 'Klor', en: 'Chlorine' }, value: '%90' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '10 kg · 25 kg' },
    ],
    features: [
      { tr: 'Anında çözünür', en: 'Instantly soluble' },
      { tr: 'Şok dozlama', en: 'Shock dosing' },
    ],
    usage: { tr: 'Sezon açılışı & şok', en: 'Season opening & shock' },
    galleryCount: 2,
  },
  {
    slug: 'multi-tablet-klor', category: 'chemicals', brand: 'WTR',
    name: { tr: 'Multi Tablet Klor', en: 'Multi-Tablet Chlorine' },
    tagline: { tr: 'Yavaş, kararlı', en: 'Slow, steady' },
    description: { tr: 'Uzun süreli dezenfeksiyon için yavaş çözünen çok fonksiyonlu tablet.', en: 'A slow-dissolving multifunction tablet for long-lasting disinfection.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Tablet' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '10 kg · 25 kg' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'WTR' },
    ],
    features: [
      { tr: 'Yavaş çözünür', en: 'Slow dissolving' },
      { tr: 'Çok fonksiyonlu', en: 'Multifunction' },
    ],
    usage: { tr: 'Haftalık bakım', en: 'Weekly upkeep' },
    galleryCount: 2,
  },
  {
    slug: 'trikloro-tablet', category: 'chemicals', brand: 'Selenoid',
    name: { tr: 'Trikloro Tablet', en: 'Trichloro Tablet' },
    tagline: { tr: 'Stabil klor', en: 'Stabilised chlorine' },
    description: { tr: 'Güneşe karşı stabilizatörlü, uzun ömürlü triklor tablet.', en: 'A stabilised, long-lasting trichlor tablet that resists sunlight.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Tablet' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '25 kg' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Selenoid' },
    ],
    features: [
      { tr: 'Stabilizatörlü', en: 'Stabilised' },
      { tr: 'Uzun ömür', en: 'Long-lasting' },
    ],
    usage: { tr: 'Skimmer / dozajlayıcı', en: 'Skimmer or feeder' },
    galleryCount: 2,
  },
  {
    slug: 'yosun-onleyici', category: 'chemicals', brand: 'Quardex · Selenoid · Poolbox',
    name: { tr: 'Yosun Önleyici', en: 'Algaecide' },
    tagline: { tr: 'Berraklığı korur', en: 'Protects clarity' },
    description: { tr: 'Yosun oluşumunu baştan engelleyen, sıvı ve toz seçenekli koruyucu.', en: 'A preventive treatment that stops algae before it forms — liquid or powder.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Sıvı · Toz / Liquid · Powder' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '10 kg / 10 L' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Quardex · Selenoid · Poolbox' },
    ],
    features: [
      { tr: 'Önleyici etki', en: 'Preventive action' },
      { tr: 'Köpürmez formül', en: 'Non-foaming' },
    ],
    usage: { tr: 'Düzenli bakım', en: 'Regular upkeep' },
    galleryCount: 2,
  },
  {
    slug: 'yosun-giderici', category: 'chemicals', brand: 'Quardex',
    name: { tr: 'Yosun Giderici', en: 'Algae Remover' },
    tagline: { tr: 'Hızlı arındırma', en: 'Fast recovery' },
    description: { tr: 'Yerleşmiş yosunu hızla çözen güçlü giderici; şok bakımı tamamlar.', en: 'A strong remover that clears established algae fast, completing a shock treatment.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Sıvı / Liquid' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '10 kg' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Quardex' },
    ],
    features: [
      { tr: 'Güçlü etki', en: 'Strong action' },
      { tr: 'Şokla uyumlu', en: 'Pairs with shock' },
    ],
    usage: { tr: 'Yosun müdahalesi', en: 'Algae treatment' },
    galleryCount: 2,
  },
  {
    slug: 'berraklastirici', category: 'chemicals', brand: 'Quardex · Selenoid · Poolbox',
    name: { tr: 'Berraklaştırıcı & Parlatıcı', en: 'Clarifier & Brightener' },
    tagline: { tr: 'Kristal berraklık', en: 'Crystal clarity' },
    description: { tr: 'Mikro partikülleri toplayarak suya cam gibi bir berraklık kazandırır.', en: 'Gathers micro-particles to give the water a glass-like clarity.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Sıvı · Toz / Liquid · Powder' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '10 kg / 10 L' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Quardex · Selenoid · Poolbox' },
    ],
    features: [
      { tr: 'Mikro partikül toplar', en: 'Traps micro-particles' },
      { tr: 'Filtre verimini artırır', en: 'Boosts filter efficiency' },
    ],
    usage: { tr: 'Haftalık parlatma', en: 'Weekly polish' },
    galleryCount: 2,
  },
  {
    slug: 'cokturucu-flok', category: 'chemicals', brand: 'Selenoid · WTR · Poolbox',
    name: { tr: 'Çöktürücü (Flok)', en: 'Flocculant' },
    tagline: { tr: 'Dibe indirir', en: 'Settles it down' },
    description: { tr: 'Bulanıklığı topaklayıp dibe çöktüren; tablet ve toz seçenekli flokülant.', en: 'Clumps cloudiness and settles it to the floor — tablet or powder.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Tablet · Toz / Tablet · Powder' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '1600 gr · 10–11 kg' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Selenoid · WTR · Poolbox' },
    ],
    features: [
      { tr: 'Güçlü çöktürme', en: 'Strong settling' },
      { tr: 'Vakumla temizlenir', en: 'Vacuum away' },
    ],
    usage: { tr: 'Ağır bulanıklık', en: 'Heavy cloudiness' },
    galleryCount: 2,
  },
  {
    slug: 'anti-iyon', category: 'chemicals', brand: 'Quardex · Poolbox',
    name: { tr: 'Anti İyon & İyon Topu', en: 'Anti-Ion & Ion Ball' },
    tagline: { tr: 'Metale karşı', en: 'Guards against metals' },
    description: { tr: 'Metal iyonlarını bağlayarak leke ve renk değişimini önler.', en: 'Binds metal ions to prevent staining and discolouration.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Sıvı · Top / Liquid · Ball' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '200 gr · 400 gr · 10 kg' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Quardex · Poolbox' },
    ],
    features: [
      { tr: 'Metal iyonu bağlar', en: 'Sequesters metals' },
      { tr: 'Leke önler', en: 'Prevents staining' },
    ],
    usage: { tr: 'Sert / kuyu suyu', en: 'Hard / well water' },
    galleryCount: 2,
  },
  {
    slug: 'kompleks-bakim', category: 'chemicals', brand: 'Selenoid',
    name: { tr: 'Kompleks Bakım', en: 'Complex Care' },
    tagline: { tr: 'Çok yönlü koruma', en: 'All-in-one care' },
    description: { tr: 'Dezenfeksiyon, berraklık ve yosun korumasını tek üründe birleştirir.', en: 'Combines disinfection, clarity and algae protection in one product.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Sıvı / Liquid' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '10 L · 10,5 kg' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Selenoid' },
    ],
    features: [
      { tr: 'Çok fonksiyonlu', en: 'Multifunction' },
      { tr: 'Pratik bakım', en: 'Simple upkeep' },
    ],
    usage: { tr: 'Genel bakım', en: 'General care' },
    galleryCount: 2,
  },
  {
    slug: 'hucre-temizleyici', category: 'chemicals', brand: 'Selenoid',
    name: { tr: 'Hücre Temizleyici', en: 'Cell Cleaner' },
    tagline: { tr: 'Sistemi korur', en: 'Protects the system' },
    description: { tr: 'Tuz klorinatör hücrelerindeki kireç ve tortuyu çözen bakım ürünü.', en: 'Dissolves scale and deposits in salt-chlorinator cells.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Sıvı / Liquid' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '10 kg' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Selenoid' },
    ],
    features: [
      { tr: 'Kireç çözer', en: 'Descales' },
      { tr: 'Hücre ömrünü uzatır', en: 'Extends cell life' },
    ],
    usage: { tr: 'Tuz sistemleri', en: 'Salt systems' },
    galleryCount: 2,
  },
  {
    slug: 'bagli-klor', category: 'chemicals', brand: 'Poolbox',
    name: { tr: 'Bağlı Klor', en: 'Combined Chlorine' },
    tagline: { tr: 'Kararlı koruma', en: 'Stable protection' },
    description: { tr: 'Stabilizatörle bağlı, güneşe dayanıklı ve uzun etkili klor.', en: 'A stabiliser-bound chlorine that resists sunlight for lasting protection.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Granül / Granular' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Poolbox' },
      { label: { tr: 'Etki', en: 'Action' }, value: 'Uzun / Lasting' },
    ],
    features: [
      { tr: 'Güneşe dayanıklı', en: 'UV-resistant' },
      { tr: 'Uzun etki', en: 'Lasting action' },
    ],
    usage: { tr: 'Açık havuz', en: 'Outdoor pools' },
    galleryCount: 2,
  },
  {
    slug: 'cevre-temizlik', category: 'chemicals', brand: 'Quardex',
    name: { tr: 'Ayak & Çevre Temizlik', en: 'Foot & Surround Cleaner' },
    tagline: { tr: 'Temiz çevre', en: 'A clean surround' },
    description: { tr: 'Ayak yıkama ve havuz çevresi için hijyen sağlayan temizlik ürünü.', en: 'A hygiene cleaner for foot baths and the poolside surround.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Sıvı / Liquid' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '10 kg' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Quardex' },
    ],
    features: [
      { tr: 'Hijyenik', en: 'Hygienic' },
      { tr: 'Çevre dostu doz', en: 'Gentle dosing' },
    ],
    usage: { tr: 'Ayak yıkama & çevre', en: 'Foot bath & surround' },
    galleryCount: 2,
  },
  {
    slug: 'alkalinite-dusurucu', category: 'chemicals', brand: 'Selenoid',
    name: { tr: 'Alkalinite Düşürücü', en: 'Alkalinity Reducer' },
    tagline: { tr: 'pH’ı stabilize eder', en: 'Stabilises pH' },
    description: { tr: 'Toplam alkaliniteyi düşürerek pH dengesini kararlı ve kalıcı kılar.', en: 'Lowers total alkalinity to keep the pH balance stable and lasting.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Sıvı / Liquid' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '20 L · 25 kg' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Selenoid' },
    ],
    features: [
      { tr: 'pH salınımını azaltır', en: 'Reduces pH swing' },
      { tr: 'Kararlı denge', en: 'Stable balance' },
    ],
    usage: { tr: 'Yüksek alkalinite', en: 'High alkalinity' },
    galleryCount: 2,
  },
  {
    slug: 'temizlik-asidi', category: 'chemicals', brand: 'Selenoid',
    name: { tr: 'Temizlik Asidi', en: 'Descaling Acid' },
    tagline: { tr: 'Kireç ve tortuya karşı', en: 'Against scale' },
    description: { tr: 'Yüzey, ekipman ve su hattındaki kireç ile tortuyu çözen güçlü temizlik asidi.', en: 'A strong acid that dissolves scale and deposits on surfaces, equipment and the waterline.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Sıvı / Liquid' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '25 kg' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Selenoid' },
    ],
    features: [
      { tr: 'Kireç çözer', en: 'Descales' },
      { tr: 'Su hattı temizliği', en: 'Waterline cleaning' },
    ],
    usage: { tr: 'Sezon bakımı', en: 'Seasonal service' },
    galleryCount: 2,
  },

  // ══ Tesisat & Bağlantı (Pimtaş) ══════════════════════════════
  {
    slug: 'pvc-boru', category: 'plumbing', brand: 'Pimtaş',
    name: { tr: 'PVC Basınçlı Boru (10 Atü)', en: 'PVC Pressure Pipe (10 Atm)' },
    tagline: { tr: 'Sağlam altyapı', en: 'A solid backbone' },
    description: { tr: 'Havuz tesisatının omurgası; 10 atü basınca dayanıklı sert PVC boru.', en: 'The backbone of pool plumbing — rigid PVC pipe rated to 10 atmospheres.' },
    specs: [
      { label: { tr: 'Çap', en: 'Diameter' }, value: 'Ø 32 · Ø 50 · Ø 63' },
      { label: { tr: 'Basınç', en: 'Pressure' }, value: '10 Atü / Atm' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Pimtaş' },
    ],
    features: [
      { tr: 'Yüksek basınç dayanımı', en: 'High pressure rating' },
      { tr: 'Uzun ömürlü', en: 'Long service life' },
    ],
    usage: { tr: 'Tesisat hattı', en: 'Plumbing lines' },
    galleryCount: 2,
  },
  {
    slug: 'pvc-dirsek', category: 'plumbing', brand: 'Pimtaş',
    name: { tr: 'PVC Dirsek (90° / 45°)', en: 'PVC Elbow (90° / 45°)' },
    tagline: { tr: 'Akışı yönlendirir', en: 'Turns the flow' },
    description: { tr: 'Hattı sızdırmadan yönlendiren yapıştırmalı 90° ve 45° PVC dirsekler.', en: 'Solvent-weld 90° and 45° elbows that turn the line without leaks.' },
    specs: [
      { label: { tr: 'Çap', en: 'Diameter' }, value: 'Ø 50 · Ø 63' },
      { label: { tr: 'Açı', en: 'Angle' }, value: '90° · 45°' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Pimtaş' },
    ],
    features: [
      { tr: 'Sızdırmaz birleşim', en: 'Leak-free joint' },
      { tr: 'Yapıştırmalı', en: 'Solvent weld' },
    ],
    usage: { tr: 'Hat dönüşleri', en: 'Line turns' },
    galleryCount: 2,
  },
  {
    slug: 'pvc-te', category: 'plumbing', brand: 'Pimtaş',
    name: { tr: 'PVC Te & Kruva Te', en: 'PVC Tee & Cross Tee' },
    tagline: { tr: 'Hattı böler', en: 'Splits the line' },
    description: { tr: 'Hattı ikiye ya da çapraz dört yöne ayıran yapıştırmalı te bağlantılar.', en: 'Solvent-weld tees that split the line in two or across four ways.' },
    specs: [
      { label: { tr: 'Çap', en: 'Diameter' }, value: 'Ø 50 · Ø 63' },
      { label: { tr: 'Tip', en: 'Type' }, value: 'Te · Kruva Te' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Pimtaş' },
    ],
    features: [
      { tr: 'Çok yönlü dağıtım', en: 'Multi-way branch' },
      { tr: 'Sağlam gövde', en: 'Sturdy body' },
    ],
    usage: { tr: 'Hat dağıtımı', en: 'Line distribution' },
    galleryCount: 2,
  },
  {
    slug: 'pvc-manson', category: 'plumbing', brand: 'Pimtaş',
    name: { tr: 'PVC Manşon', en: 'PVC Coupling' },
    tagline: { tr: 'Boruyu birleştirir', en: 'Joins the pipe' },
    description: { tr: 'İki boruyu düz ve sızdırmaz biçimde ekleyen yapıştırmalı manşon.', en: 'A solvent-weld coupling that joins two pipes straight and tight.' },
    specs: [
      { label: { tr: 'Çap', en: 'Diameter' }, value: 'Ø 50 · Ø 63' },
      { label: { tr: 'Tip', en: 'Type' }, value: 'Yapıştırmalı' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Pimtaş' },
    ],
    features: [
      { tr: 'Düz ekleme', en: 'Straight join' },
      { tr: 'Sızdırmaz', en: 'Leak-free' },
    ],
    usage: { tr: 'Boru ekleme', en: 'Pipe joins' },
    galleryCount: 2,
  },
  {
    slug: 'pvc-kortapa', category: 'plumbing', brand: 'Pimtaş',
    name: { tr: 'Kör Tapa', en: 'End Cap' },
    tagline: { tr: 'Hattı kapatır', en: 'Seals the line' },
    description: { tr: 'Hat ucunu kalıcı ve sızdırmaz biçimde kapatan yapıştırmalı tapa.', en: 'A solvent-weld cap that seals a line end permanently and tightly.' },
    specs: [
      { label: { tr: 'Çap', en: 'Diameter' }, value: 'Ø 50 · Ø 63' },
      { label: { tr: 'Tip', en: 'Type' }, value: 'Kör Tapa' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Pimtaş' },
    ],
    features: [
      { tr: 'Tam sızdırmazlık', en: 'Full seal' },
      { tr: 'Kolay montaj', en: 'Easy fit' },
    ],
    usage: { tr: 'Hat sonu', en: 'Line ends' },
    galleryCount: 2,
  },
  {
    slug: 'kuresel-vana', category: 'plumbing', brand: 'Pimtaş',
    name: { tr: 'PVC Küresel Vana', en: 'PVC Ball Valve' },
    tagline: { tr: 'Akışı keser', en: 'Shuts the flow' },
    description: { tr: 'Çeyrek turla tam açma-kapama sağlayan dayanıklı PVC küresel vana.', en: 'A durable PVC ball valve giving full on-off in a quarter turn.' },
    specs: [
      { label: { tr: 'Çap', en: 'Diameter' }, value: 'Ø 32 · Ø 50 · Ø 63' },
      { label: { tr: 'Tip', en: 'Type' }, value: 'Küresel / Ball' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Pimtaş' },
    ],
    features: [
      { tr: 'Çeyrek tur kontrol', en: 'Quarter-turn control' },
      { tr: 'Sızdırmaz', en: 'Leak-free' },
    ],
    usage: { tr: 'Hat kontrolü', en: 'Line control' },
    galleryCount: 2,
  },
  {
    slug: 'cekvalf', category: 'plumbing', brand: 'Pimtaş',
    name: { tr: 'Çekvalf', en: 'Check Valve' },
    tagline: { tr: 'Tek yön', en: 'One-way only' },
    description: { tr: 'Suyun geri kaçmasını önleyen, pompayı koruyan tek yönlü çekvalf.', en: 'A one-way check valve that stops backflow and protects the pump.' },
    specs: [
      { label: { tr: 'Çap', en: 'Diameter' }, value: 'Ø 32 · Ø 50 · Ø 63' },
      { label: { tr: 'Yön', en: 'Flow' }, value: 'Tek yönlü / One-way' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Pimtaş' },
    ],
    features: [
      { tr: 'Geri akışı önler', en: 'Prevents backflow' },
      { tr: 'Pompayı korur', en: 'Protects the pump' },
    ],
    usage: { tr: 'Pompa çıkışı', en: 'Pump outlet' },
    galleryCount: 2,
  },
  {
    slug: 'reduksiyon', category: 'plumbing', brand: 'Pimtaş',
    name: { tr: 'Redüksiyon', en: 'Reducer' },
    tagline: { tr: 'Çapı düşürür', en: 'Steps the size' },
    description: { tr: 'Farklı çaptaki boruları sorunsuz birleştiren yapıştırmalı redüksiyon.', en: 'A solvent-weld reducer that joins pipes of different diameters smoothly.' },
    specs: [
      { label: { tr: 'Ölçü', en: 'Size' }, value: '63–50 · 50–32' },
      { label: { tr: 'Tip', en: 'Type' }, value: 'Redüksiyon' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Pimtaş' },
    ],
    features: [
      { tr: 'Sorunsuz geçiş', en: 'Smooth transition' },
      { tr: 'Sağlam birleşim', en: 'Strong joint' },
    ],
    usage: { tr: 'Çap geçişi', en: 'Diameter change' },
    galleryCount: 2,
  },
  {
    slug: 'dis-disli-adaptor', category: 'plumbing', brand: 'Pimtaş',
    name: { tr: 'Dış Dişli Adaptör', en: 'Male Threaded Adapter' },
    tagline: { tr: 'Dişliye geçiş', en: 'Pipe to thread' },
    description: { tr: 'Yapıştırmalı boruyu dişli ekipmana bağlayan dış dişli adaptör.', en: 'Connects solvent-weld pipe to threaded equipment.' },
    specs: [
      { label: { tr: 'Çap', en: 'Diameter' }, value: 'Ø 32' },
      { label: { tr: 'Tip', en: 'Type' }, value: 'Dış dişli / Male' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Pimtaş' },
    ],
    features: [
      { tr: 'Dişli bağlantı', en: 'Threaded link' },
      { tr: 'Sızdırmaz', en: 'Leak-free' },
    ],
    usage: { tr: 'Ekipman bağlantısı', en: 'Equipment link' },
    galleryCount: 2,
  },
  {
    slug: 'pvc-yapistirici', category: 'plumbing', brand: 'Pimtaş',
    name: { tr: 'PVC Yapıştırıcı', en: 'PVC Solvent Cement' },
    tagline: { tr: 'Kalıcı birleşim', en: 'A permanent bond' },
    description: { tr: 'Sert PVC bağlantılarını kaynaklayan, sızdırmaz ve dayanıklı yapıştırıcı.', en: 'Welds rigid PVC joints into a durable, leak-free bond.' },
    specs: [
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '1 kg' },
      { label: { tr: 'Tip', en: 'Type' }, value: 'Sert PVC / Rigid PVC' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Pimtaş' },
    ],
    features: [
      { tr: 'Hızlı kürlenme', en: 'Fast curing' },
      { tr: 'Yüksek mukavemet', en: 'High strength' },
    ],
    usage: { tr: 'Tüm PVC ekler', en: 'All PVC joints' },
    galleryCount: 2,
  },

  // ══ Aydınlatma (Aquativ) ═════════════════════════════════════
  {
    slug: 'led-smart-23w', category: 'lighting', brand: 'Aquativ',
    name: { tr: '23W SMART Sıva Üstü LED', en: '23W SMART Surface LED' },
    tagline: { tr: 'Suya düşen ışık', en: 'Light on water' },
    description: { tr: 'Sıva üstü montajlı, ince çerçeveli güçlü sualtı LED armatürü.', en: 'A surface-mounted, slim-bezel underwater LED with strong output.' },
    specs: [
      { label: { tr: 'Güç', en: 'Power' }, value: '23 W' },
      { label: { tr: 'Işık', en: 'Colour' }, value: 'Beyaz · Gün ışığı · Mavibeyaz' },
      { label: { tr: 'Çerçeve', en: 'Frame' }, value: 'Beyaz · Antrasit' },
    ],
    features: [
      { tr: 'Sıva üstü montaj', en: 'Surface mount' },
      { tr: 'Çoklu ışık rengi', en: 'Multiple colours' },
    ],
    usage: { tr: 'Beton & prefabrik', en: 'Concrete & liner' },
    galleryCount: 2,
  },
  {
    slug: 'led-mini-9w', category: 'lighting', brand: 'Aquativ',
    name: { tr: '9W MINI SMART LED', en: '9W MINI SMART LED' },
    tagline: { tr: 'İnce vurgular', en: 'Subtle accents' },
    description: { tr: 'Küçük havuz ve vurgu aydınlatması için kompakt mini sualtı LED.', en: 'A compact mini underwater LED for small pools and accent lighting.' },
    specs: [
      { label: { tr: 'Güç', en: 'Power' }, value: '9 W' },
      { label: { tr: 'Işık', en: 'Colour' }, value: 'Beyaz · Gün ışığı · Mavibeyaz' },
      { label: { tr: 'Çerçeve', en: 'Frame' }, value: 'Beyaz · Antrasit' },
    ],
    features: [
      { tr: 'Kompakt gövde', en: 'Compact body' },
      { tr: 'Vurgu aydınlatma', en: 'Accent lighting' },
    ],
    usage: { tr: 'Küçük havuz & vurgu', en: 'Small pools & accents' },
    galleryCount: 2,
  },
  {
    slug: 'led-thin-23w', category: 'lighting', brand: 'Aquativ',
    name: { tr: '23W SMART THIN LED', en: '23W SMART THIN LED' },
    tagline: { tr: 'Neredeyse görünmez', en: 'Almost flush' },
    description: { tr: 'Ultra ince gövdesiyle yüzeyle bütünleşen 23W sualtı LED.', en: 'An ultra-slim 23W underwater LED that sits nearly flush with the surface.' },
    specs: [
      { label: { tr: 'Güç', en: 'Power' }, value: '23 W' },
      { label: { tr: 'Işık', en: 'Colour' }, value: 'Beyaz · Gün ışığı · Mavibeyaz' },
      { label: { tr: 'Çerçeve', en: 'Frame' }, value: 'Beyaz · Antrasit' },
    ],
    features: [
      { tr: 'Ultra ince', en: 'Ultra-slim' },
      { tr: 'Yüzeyle bütünleşir', en: 'Near-flush' },
    ],
    usage: { tr: 'Mimari havuz', en: 'Architectural pools' },
    galleryCount: 2,
  },
  {
    slug: 'led-trafo', category: 'lighting', brand: 'Aquativ',
    name: { tr: 'İzolasyonlu Trafo 300W 12V', en: 'Isolated Transformer 300W 12V' },
    tagline: { tr: 'Güvenli besleme', en: 'Safe supply' },
    description: { tr: 'Sualtı LED armatürleri güvenle besleyen izolasyonlu 12V trafo.', en: 'An isolated 12V transformer that safely powers underwater LEDs.' },
    specs: [
      { label: { tr: 'Güç', en: 'Power' }, value: '300 W' },
      { label: { tr: 'Çıkış', en: 'Output' }, value: '12 V' },
      { label: { tr: 'Kod', en: 'Code' }, value: 'DMT03' },
    ],
    features: [
      { tr: 'İzolasyonlu', en: 'Isolated' },
      { tr: 'Güvenli düşük voltaj', en: 'Safe low voltage' },
    ],
    usage: { tr: 'LED besleme', en: 'LED supply' },
    galleryCount: 2,
  },
  {
    slug: 'montaj-pabucu', category: 'lighting', brand: 'Aquativ',
    name: { tr: 'Montaj Pabucu', en: 'Mounting Shoe' },
    tagline: { tr: 'Sağlam yuva', en: 'A solid seat' },
    description: { tr: 'Sualtı armatürünün beton yapıya sızdırmaz montajını sağlayan pabuç.', en: 'Seats an underwater fixture into the concrete shell, leak-free.' },
    specs: [
      { label: { tr: 'Kod', en: 'Code' }, value: 'PMP' },
      { label: { tr: 'Uyum', en: 'Fit' }, value: 'SMART seri' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Aquativ' },
    ],
    features: [
      { tr: 'Sızdırmaz yuva', en: 'Leak-free seat' },
      { tr: 'Kolay montaj', en: 'Easy install' },
    ],
    usage: { tr: 'Beton havuz', en: 'Concrete pools' },
    galleryCount: 2,
  },

  // ══ Nozul, Filtre & Pompa (Tenda) ════════════════════════════
  {
    slug: 'taban-nozul', category: 'circulation', brand: 'Tenda',
    name: { tr: 'Taban Besleme Nozulu', en: 'Floor Inlet Nozzle' },
    tagline: { tr: 'Dipten dengeli akış', en: 'Even flow from below' },
    description: { tr: 'Temiz suyu havuz tabanından dengeli dağıtan besleme nozulu; özel renk seçenekli.', en: 'Distributes clean water evenly from the pool floor — custom colours available.' },
    specs: [
      { label: { tr: 'Bağlantı', en: 'Port' }, value: 'Ø 63' },
      { label: { tr: 'Renk', en: 'Colour' }, value: 'Standart · Özel renk' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Tenda' },
    ],
    features: [
      { tr: 'Dengeli dağıtım', en: 'Even distribution' },
      { tr: 'Özel renk', en: 'Custom colour' },
    ],
    usage: { tr: 'Taban sirkülasyonu', en: 'Floor circulation' },
    galleryCount: 2,
  },
  {
    slug: 'duvar-nozul', category: 'circulation', brand: 'Tenda',
    name: { tr: 'Duvar Besleme Nozulu', en: 'Wall Inlet Nozzle' },
    tagline: { tr: 'Yönlü akış', en: 'Directed flow' },
    description: { tr: 'Suyu duvardan istenen yöne veren, yönlendirilebilir besleme nozulu.', en: 'An adjustable wall inlet that aims the return flow where you want it.' },
    specs: [
      { label: { tr: 'Bağlantı', en: 'Port' }, value: 'Ø 50 · Ø 63' },
      { label: { tr: 'Renk', en: 'Colour' }, value: 'Standart · Özel renk' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Tenda' },
    ],
    features: [
      { tr: 'Yönlendirilebilir', en: 'Adjustable aim' },
      { tr: 'Özel renk', en: 'Custom colour' },
    ],
    usage: { tr: 'Duvar sirkülasyonu', en: 'Wall circulation' },
    galleryCount: 2,
  },
  {
    slug: 'vakum-nozul', category: 'circulation', brand: 'Tenda',
    name: { tr: 'Vakum Nozulu', en: 'Vacuum Nozzle' },
    tagline: { tr: 'Süpürge bağlantısı', en: 'Cleaner connection' },
    description: { tr: 'Süpürge hortumunu emiş hattına bağlayan duvar tipi vakum nozulu.', en: 'A wall vacuum point that connects the cleaner hose to the suction line.' },
    specs: [
      { label: { tr: 'Bağlantı', en: 'Port' }, value: 'Ø 50 · Ø 63' },
      { label: { tr: 'Renk', en: 'Colour' }, value: 'Standart · Özel renk' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Tenda' },
    ],
    features: [
      { tr: 'Sızdırmaz bağlantı', en: 'Sealed connection' },
      { tr: 'Özel renk', en: 'Custom colour' },
    ],
    usage: { tr: 'Manuel süpürge', en: 'Manual vacuuming' },
    galleryCount: 2,
  },
  {
    slug: 'dip-izgara', category: 'circulation', brand: 'Tenda',
    name: { tr: 'Kare Dip Emiş Izgarası', en: 'Square Main-Drain Grille' },
    tagline: { tr: 'Güvenli emiş', en: 'Safe suction' },
    description: { tr: 'Havuz dibinden güvenli ve dengeli emiş sağlayan kare ızgara; özel renk seçenekli.', en: 'A square main-drain grille for safe, even suction from the pool floor.' },
    specs: [
      { label: { tr: 'Ölçü', en: 'Size' }, value: '26,5 × 26,5 cm' },
      { label: { tr: 'Renk', en: 'Colour' }, value: 'Standart · Özel renk' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Tenda' },
    ],
    features: [
      { tr: 'Güvenli emiş', en: 'Safe suction' },
      { tr: 'Özel renk', en: 'Custom colour' },
    ],
    usage: { tr: 'Dip emiş hattı', en: 'Main-drain line' },
    galleryCount: 2,
  },
  {
    slug: 'su-perdesi', category: 'circulation', brand: 'Tenda',
    name: { tr: 'Su Perdesi (Şelale) 316 Krom', en: 'Water Curtain 316 Chrome' },
    tagline: { tr: 'Sessiz şelale', en: 'A quiet cascade' },
    description: { tr: 'Duvardan ince bir perde hâlinde dökülen 316 paslanmaz krom şelale.', en: 'A 316 stainless-chrome blade that pours a thin curtain of water.' },
    specs: [
      { label: { tr: 'Ölçü', en: 'Size' }, value: '60 × 40 cm' },
      { label: { tr: 'Malzeme', en: 'Material' }, value: 'AISI 316 Krom' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Tenda' },
    ],
    features: [
      { tr: 'Paslanmaz 316', en: '316 stainless' },
      { tr: 'İnce su perdesi', en: 'Thin water blade' },
    ],
    usage: { tr: 'Dekoratif şelale', en: 'Decorative cascade' },
    galleryCount: 2,
  },
  {
    slug: 'plastik-filtre', category: 'circulation', brand: 'Tenda',
    name: { tr: 'Plastik Kum Filtresi 600mm', en: 'Plastic Sand Filter 600mm' },
    tagline: { tr: 'Kanıtlanmış berraklık', en: 'Proven clarity' },
    description: { tr: 'Yüksek debili, dayanıklı gövdeli klasik kum filtresi; orta ölçekli havuzlar için.', en: 'A durable, high-flow classic sand filter for mid-size pools.' },
    specs: [
      { label: { tr: 'Çap', en: 'Diameter' }, value: 'Ø 600 mm' },
      { label: { tr: 'Gövde', en: 'Body' }, value: 'Plastik / Plastic' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Tenda' },
    ],
    features: [
      { tr: 'Dayanıklı gövde', en: 'Durable shell' },
      { tr: 'Kolay bakım', en: 'Easy service' },
    ],
    usage: { tr: 'Orta havuz', en: 'Mid-size pools' },
    galleryCount: 2,
  },
  {
    slug: 'monofaze-pompa', category: 'circulation', brand: 'Tenda',
    name: { tr: 'Monofaze Havuz Pompası 1 HP', en: 'Single-Phase Pool Pump 1 HP' },
    tagline: { tr: 'Kararlı sirkülasyon', en: 'Steady circulation' },
    description: { tr: 'Ön filtre sepetli, sessiz ve güvenilir monofaze sirkülasyon pompası.', en: 'A quiet, reliable single-phase circulation pump with a prefilter basket.' },
    specs: [
      { label: { tr: 'Güç', en: 'Power' }, value: '1 HP' },
      { label: { tr: 'Besleme', en: 'Supply' }, value: 'Monofaze / Single-phase' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Tenda' },
    ],
    features: [
      { tr: 'Ön filtre sepeti', en: 'Prefilter basket' },
      { tr: 'Sessiz motor', en: 'Quiet motor' },
    ],
    usage: { tr: 'Küçük–orta havuz', en: 'Small–mid pools' },
    galleryCount: 2,
  },

  // ══ Dekoratif & Su Oyunları (Aquativ) ════════════════════════
  {
    slug: 'rgb-fiskiye', category: 'decorative', brand: 'Aquativ',
    name: { tr: 'RGB LED Işıklı Fıskiye', en: 'RGB LED Fountain' },
    tagline: { tr: 'Renkli su gösterisi', en: 'A colour show' },
    description: { tr: 'Su jetini RGB ışıkla renklendiren, gece havuza hareket katan fıskiye.', en: 'Lights the water jet with RGB colour, bringing the pool alive at night.' },
    specs: [
      { label: { tr: 'Işık', en: 'Light' }, value: 'RGB LED' },
      { label: { tr: 'Kod', en: 'Code' }, value: 'CT507' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Aquativ' },
    ],
    features: [
      { tr: 'RGB renk', en: 'RGB colour' },
      { tr: 'Su + ışık gösterisi', en: 'Water & light show' },
    ],
    usage: { tr: 'Dekoratif havuz', en: 'Decorative pools' },
    galleryCount: 2,
  },
  {
    slug: 'rgb-solar-fiskiye', category: 'decorative', brand: 'Aquativ',
    name: { tr: 'RGB Solar LED Fıskiye', en: 'RGB Solar LED Fountain' },
    tagline: { tr: 'Kablosuz, güneşle', en: 'Wireless, solar-powered' },
    description: { tr: 'Güneş enerjisiyle çalışan, kablosuz ve kolay konumlanan RGB fıskiye.', en: 'A wireless, solar-powered RGB fountain you can place anywhere.' },
    specs: [
      { label: { tr: 'Enerji', en: 'Power' }, value: 'Solar' },
      { label: { tr: 'Kod', en: 'Code' }, value: 'CT508' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Aquativ' },
    ],
    features: [
      { tr: 'Kablosuz', en: 'Wireless' },
      { tr: 'Güneş enerjili', en: 'Solar-powered' },
    ],
    usage: { tr: 'Süs havuzu & bahçe', en: 'Ponds & gardens' },
    galleryCount: 2,
  },
  {
    slug: 'yuzen-speaker', category: 'decorative', brand: 'Aquativ',
    name: { tr: 'Yüzen RGB Speaker', en: 'Floating RGB Speaker' },
    tagline: { tr: 'Işık ve müzik', en: 'Light and music' },
    description: { tr: 'Suda yüzen, su geçirmez RGB ışıklı kablosuz hoparlör; balık figürlü seçeneği ile.', en: 'A floating, waterproof RGB speaker — including a playful fish-shaped option.' },
    specs: [
      { label: { tr: 'Koruma', en: 'Rating' }, value: 'Su geçirmez / Waterproof' },
      { label: { tr: 'Kod', en: 'Code' }, value: 'HK605 · HK703' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Aquativ' },
    ],
    features: [
      { tr: 'Su geçirmez', en: 'Waterproof' },
      { tr: 'RGB ışık + ses', en: 'RGB light + audio' },
    ],
    usage: { tr: 'Havuz eğlencesi', en: 'Poolside fun' },
    galleryCount: 2,
  },
  {
    slug: 'deniz-yildizi-led', category: 'decorative', brand: 'Aquativ',
    name: { tr: 'Deniz Yıldızı RGB LED', en: 'Starfish RGB LED' },
    tagline: { tr: 'Yumuşak parıltı', en: 'A soft glow' },
    description: { tr: 'Su yüzeyine yumuşak renkli parıltı katan deniz yıldızı figürlü RGB lamba.', en: 'A starfish RGB lamp that casts a soft colour glow across the surface.' },
    specs: [
      { label: { tr: 'Işık', en: 'Light' }, value: 'RGB LED' },
      { label: { tr: 'Kod', en: 'Code' }, value: 'CT008' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Aquativ' },
    ],
    features: [
      { tr: 'Dekoratif figür', en: 'Decorative form' },
      { tr: 'Yumuşak RGB', en: 'Soft RGB' },
    ],
    usage: { tr: 'Dekoratif aydınlatma', en: 'Decorative lighting' },
    galleryCount: 2,
  },

  // ══ Temizlik & Test Ekipmanları (Divitech · Sutest) ═════════
  {
    slug: 'havuz-robotu', category: 'cleaning', brand: 'Spino',
    name: { tr: 'Otomatik Havuz Robotu', en: 'Robotic Pool Cleaner' },
    tagline: { tr: 'Kendi kendine temiz', en: 'Cleans on its own' },
    description: { tr: 'Zemini, duvarları ve su hattını tarayarak temizleyen bağımsız havuz robotu.', en: 'An autonomous robot that scans and cleans floor, walls and waterline.' },
    specs: [
      { label: { tr: 'Tip', en: 'Type' }, value: 'Otomatik / Robotic' },
      { label: { tr: 'Filtre', en: 'Filter' }, value: 'Yıkanabilir' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Spino' },
    ],
    features: [
      { tr: 'Bağımsız temizlik', en: 'Autonomous cleaning' },
      { tr: 'Duvar & su hattı', en: 'Walls & waterline' },
    ],
    usage: { tr: 'Orta–büyük havuz', en: 'Mid–large pools' },
    galleryCount: 2,
  },
  {
    slug: 'havuz-supurgesi', category: 'cleaning', brand: 'Divitech · Tenda',
    name: { tr: 'Havuz Süpürgesi (Vakum Başlığı)', en: 'Pool Vacuum Head' },
    tagline: { tr: 'Dibi toparlar', en: 'Clears the floor' },
    description: { tr: 'Klipsli bağlantılı, tabanı ve köşeleri toparlayan vakum süpürge başlığı.', en: 'A clip-fit vacuum head that clears the floor and corners.' },
    specs: [
      { label: { tr: 'Bağlantı', en: 'Fitting' }, value: '1,5" · 2" Klipsli' },
      { label: { tr: 'Genişlik', en: 'Width' }, value: '44,5 cm' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Divitech · Tenda' },
    ],
    features: [
      { tr: 'Klipsli bağlantı', en: 'Clip-fit' },
      { tr: 'Geniş kapsama', en: 'Wide coverage' },
    ],
    usage: { tr: 'Manuel süpürme', en: 'Manual vacuuming' },
    galleryCount: 2,
  },
  {
    slug: 'havuz-hortumu', category: 'cleaning', brand: 'Divitech',
    name: { tr: 'Havuz Hortumu', en: 'Pool Hose' },
    tagline: { tr: 'Esnek, dayanıklı', en: 'Flexible, durable' },
    description: { tr: 'Süpürge başlığını emiş hattına bağlayan esnek ve dayanıklı havuz hortumu.', en: 'A flexible, durable hose linking the vacuum head to the suction line.' },
    specs: [
      { label: { tr: 'Çap', en: 'Diameter' }, value: '38 mm · 50 mm' },
      { label: { tr: 'Yapı', en: 'Build' }, value: 'Spiral takviyeli' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Divitech' },
    ],
    features: [
      { tr: 'Esnek', en: 'Flexible' },
      { tr: 'Ezilmez yapı', en: 'Crush-resistant' },
    ],
    usage: { tr: 'Süpürge hattı', en: 'Vacuum line' },
    galleryCount: 2,
  },
  {
    slug: 'yuzey-kepcesi', category: 'cleaning', brand: 'Divitech',
    name: { tr: 'Derin Yüzey Kepçesi', en: 'Deep Skimmer Net' },
    tagline: { tr: 'Yüzeyi berrak tutar', en: 'Keeps the surface clear' },
    description: { tr: 'Yaprak ve tortuyu tek geçişte toplayan derin fileli lüks yüzey kepçesi.', en: 'A deep-bag skimmer net that lifts leaves and debris in a single pass.' },
    specs: [
      { label: { tr: 'File', en: 'Mesh' }, value: 'Derin / Deep' },
      { label: { tr: 'Gövde', en: 'Body' }, value: 'Lüks plastik' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Divitech' },
    ],
    features: [
      { tr: 'Derin file', en: 'Deep bag' },
      { tr: 'Sapa uyumlu', en: 'Pole compatible' },
    ],
    usage: { tr: 'Günlük yüzey', en: 'Daily surface' },
    galleryCount: 2,
  },
  {
    slug: 'havuz-fircasi', category: 'cleaning', brand: 'Divitech',
    name: { tr: 'Havuz Fırçası', en: 'Pool Brush' },
    tagline: { tr: 'Duvarları parlatır', en: 'Scrubs the walls' },
    description: { tr: 'Duvar ve tabandaki biofilmi çözen kavisli, geniş havuz fırçası.', en: 'A curved, wide brush that lifts biofilm from walls and floor.' },
    specs: [
      { label: { tr: 'Genişlik', en: 'Width' }, value: '45 cm' },
      { label: { tr: 'Form', en: 'Form' }, value: 'Kavisli / Curved' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Divitech' },
    ],
    features: [
      { tr: 'Kavisli tasarım', en: 'Curved design' },
      { tr: 'Sapa uyumlu', en: 'Pole compatible' },
    ],
    usage: { tr: 'Duvar & taban', en: 'Walls & floor' },
    galleryCount: 2,
  },
  {
    slug: 'teleskopik-sap', category: 'cleaning', brand: 'Divitech',
    name: { tr: 'Teleskopik Sap', en: 'Telescopic Pole' },
    tagline: { tr: 'Her köşeye ulaşır', en: 'Reaches every corner' },
    description: { tr: 'Hafif alüminyum, uzayabilen sap; ağ, fırça ve vakum başlığına uyumlu.', en: 'A light aluminium extendable pole for nets, brushes and vacuum heads.' },
    specs: [
      { label: { tr: 'Malzeme', en: 'Material' }, value: 'Alüminyum' },
      { label: { tr: 'Uzunluk', en: 'Length' }, value: '2 × 2,4 m · 2 × 3 m' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Divitech' },
    ],
    features: [
      { tr: 'Kilitli teleskop', en: 'Locking telescope' },
      { tr: 'Korozyona dayanıklı', en: 'Corrosion resistant' },
    ],
    usage: { tr: 'Genel temizlik', en: 'General cleaning' },
    galleryCount: 2,
  },
  {
    slug: 'termometre', category: 'cleaning', brand: 'Divitech',
    name: { tr: 'Havuz Termometresi', en: 'Pool Thermometer' },
    tagline: { tr: 'Su sıcaklığı', en: 'Water temperature' },
    description: { tr: 'İpli, yüzen ve figürlü tasarımıyla su sıcaklığını anlık gösteren termometre.', en: 'A corded floating thermometer that reads water temperature at a glance.' },
    specs: [
      { label: { tr: 'Tip', en: 'Type' }, value: 'Yüzer / Floating' },
      { label: { tr: 'Bağlantı', en: 'Cord' }, value: 'İpli / Corded' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Divitech' },
    ],
    features: [
      { tr: 'Anlık okuma', en: 'Instant read' },
      { tr: 'Yüzer tasarım', en: 'Floating design' },
    ],
    usage: { tr: 'Günlük kontrol', en: 'Daily check' },
    galleryCount: 2,
  },
  {
    slug: 'dispanser', category: 'cleaning', brand: 'Divitech',
    name: { tr: 'Yüzer Klor Dispanseri', en: 'Floating Chlorine Dispenser' },
    tagline: { tr: 'Kararlı dozaj', en: 'Steady dosing' },
    description: { tr: 'Klor tabletini yüzerken kademeli salan, ayarlanabilir büyük tip dispanser.', en: 'A large adjustable floater that releases chlorine tablets gradually.' },
    specs: [
      { label: { tr: 'Tip', en: 'Type' }, value: 'Büyük yüzer / Large float' },
      { label: { tr: 'Ayar', en: 'Control' }, value: 'Ayarlanabilir' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Divitech' },
    ],
    features: [
      { tr: 'Kademeli salım', en: 'Gradual release' },
      { tr: 'Ayarlanabilir doz', en: 'Adjustable dose' },
    ],
    usage: { tr: 'Tablet klor', en: 'Tablet chlorine' },
    galleryCount: 2,
  },
  {
    slug: 'ayak-havuzu', category: 'cleaning', brand: 'Divitech',
    name: { tr: 'Ayak Yıkama Havuzu', en: 'Foot Wash Basin' },
    tagline: { tr: 'Temiz giriş', en: 'A clean entry' },
    description: { tr: 'Havuza girişte ayak hijyenini sağlayan, dayanıklı ayak yıkama havuzu.', en: 'A durable foot basin that keeps entry hygienic.' },
    specs: [
      { label: { tr: 'Tip', en: 'Type' }, value: 'Ayak yıkama' },
      { label: { tr: 'Malzeme', en: 'Material' }, value: 'Dayanıklı plastik' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Divitech' },
    ],
    features: [
      { tr: 'Hijyenik giriş', en: 'Hygienic entry' },
      { tr: 'Dayanıklı', en: 'Durable' },
    ],
    usage: { tr: 'Havuz girişi', en: 'Pool entry' },
    galleryCount: 2,
  },
  {
    slug: 'su-test-kiti', category: 'cleaning', brand: 'Sutest · ColorQ',
    name: { tr: 'Su Test Kiti', en: 'Water Test Kit' },
    tagline: { tr: 'Suyu okuyun', en: 'Read your water' },
    description: { tr: 'pH ve kloru ölçen; sıvı damla ve dijital fotometre seçenekli su test kiti.', en: 'Measures pH and chlorine — available as liquid drop tests or a digital photometer.' },
    specs: [
      { label: { tr: 'Tip', en: 'Type' }, value: 'Damla · Dijital / Drop · Digital' },
      { label: { tr: 'Parametre', en: 'Parameters' }, value: 'pH · Klor · +' },
      { label: { tr: 'Marka', en: 'Brand' }, value: 'Sutest · ColorQ · Insta' },
    ],
    features: [
      { tr: 'Hızlı sonuç', en: 'Fast results' },
      { tr: 'Damla & dijital', en: 'Drop & digital' },
    ],
    usage: { tr: 'Haftalık kontrol', en: 'Weekly checks' },
    galleryCount: 2,
  },
];

// ── helpers ────────────────────────────────────────────────
export const localize = (l: L, locale: string): string =>
  locale === 'en' ? l.en : l.tr;

/** Slugs that have real photography under /public/products/<slug>.webp (4:5).
 *  Everything else falls back to the ProductShot studio placeholder. */
const PHOTO_SLUGS = new Set<string>([
  'sivi-ph-dusurucu', 'toz-ph-dusurucu', 'sivi-klor', 'granul-klor',
  'multi-tablet-klor', 'yosun-onleyici', 'yosun-giderici', 'berraklastirici',
  'cokturucu-flok', 'anti-iyon', 'hucre-temizleyici', 'bagli-klor',
  'cevre-temizlik', 'alkalinite-dusurucu', 'temizlik-asidi',
  'led-smart-23w', 'led-mini-9w', 'led-thin-23w',
  'plastik-filtre', 'monofaze-pompa',
  'rgb-fiskiye', 'rgb-solar-fiskiye', 'yuzen-speaker', 'deniz-yildizi-led',
  'havuz-robotu', 'havuz-supurgesi', 'havuz-hortumu', 'yuzey-kepcesi',
  'havuz-fircasi', 'termometre', 'dispanser', 'su-test-kiti',
]);

export const productPhoto = (slug: string): string | undefined =>
  PHOTO_SLUGS.has(slug) ? `/products/${slug}.webp` : undefined;

export const hasPhoto = (slug: string): boolean => PHOTO_SLUGS.has(slug);

/** Only products with real photography are shown on the site for now; the rest
 *  (and any category left empty by that) are hidden until photos arrive. */
export const visibleProducts = products.filter((p) => hasPhoto(p.slug));
export const visibleCategories = categories.filter((c) =>
  visibleProducts.some((p) => p.category === c.key),
);

export const getProduct = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const productsByCategory = (key: CategoryKey): Product[] =>
  products.filter((p) => p.category === key);

export type LocalizedProduct = {
  slug: string;
  category: CategoryKey;
  brand?: string;
  name: string;
  tagline: string;
  description: string;
  usage: string;
  galleryCount: number;
  pdf?: string;
  photo?: string;
  specs: { label: string; value: string }[];
  features: string[];
};

export function localizeProduct(p: Product, locale: string): LocalizedProduct {
  const pick = (x: L) => localize(x, locale);
  return {
    slug: p.slug,
    category: p.category,
    brand: p.brand,
    name: pick(p.name),
    tagline: pick(p.tagline),
    description: pick(p.description),
    usage: pick(p.usage),
    galleryCount: p.galleryCount,
    pdf: p.pdf,
    photo: productPhoto(p.slug),
    specs: p.specs.map((s) => ({ label: pick(s.label), value: s.value })),
    features: p.features.map(pick),
  };
}
