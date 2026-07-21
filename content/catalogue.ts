/**
 * Product catalogue content — presentation only, no commerce.
 * Bilingual fields via L; spec values are language-neutral (units/numbers).
 * A representative set across every category; scales to ~60 by adding entries.
 * Swap the ProductShot placeholders for real studio photography later.
 */

export type CategoryKey =
  | 'chemicals'
  | 'cleaning'
  | 'pumps'
  | 'lighting'
  | 'filters'
  | 'accessories'
  | 'maintenance';

type L = { tr: string; en: string };
type Spec = { label: L; value: string };

export type Product = {
  slug: string;
  category: CategoryKey;
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
  { key: 'cleaning', name: { tr: 'Temizlik Ekipmanları', en: 'Cleaning Equipment' }, desc: { tr: 'Zahmetsiz temizlik.', en: 'Effortless cleaning.' } },
  { key: 'pumps', name: { tr: 'Havuz Pompaları', en: 'Pool Pumps' }, desc: { tr: 'Sessiz, verimli sirkülasyon.', en: 'Quiet, efficient circulation.' } },
  { key: 'lighting', name: { tr: 'Aydınlatma', en: 'Lighting' }, desc: { tr: 'Suya düşen ışık.', en: 'Light on water.' } },
  { key: 'filters', name: { tr: 'Filtreler', en: 'Filters' }, desc: { tr: 'Kristal berraklık.', en: 'Crystal clarity.' } },
  { key: 'accessories', name: { tr: 'Aksesuarlar', en: 'Accessories' }, desc: { tr: 'İnce detaylar.', en: 'The fine details.' } },
  { key: 'maintenance', name: { tr: 'Bakım Ekipmanları', en: 'Maintenance Equipment' }, desc: { tr: 'Ömür boyu özen.', en: 'Care for a lifetime.' } },
];

export const products: Product[] = [
  // ── Chemicals ─────────────────────────────────────────────
  {
    slug: 'ph-dusurucu', category: 'chemicals',
    name: { tr: 'pH Düşürücü', en: 'pH Reducer' },
    tagline: { tr: 'Dengeyi korur', en: 'Keeps the balance' },
    description: { tr: 'Suyun pH değerini ideal aralığa çeken sıvı çözüm. Cilde ve ekipmana dost.', en: 'A liquid that draws pH into its ideal range — gentle on skin and equipment.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Sıvı / Liquid' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '20 L' },
      { label: { tr: 'Dozaj', en: 'Dosage' }, value: '~1 L / 100 m³' },
    ],
    features: [
      { tr: 'Hızlı çözünür', en: 'Fast acting' },
      { tr: 'Dozaj pompasıyla uyumlu', en: 'Dosing-pump ready' },
      { tr: 'Berrak su', en: 'Clearer water' },
    ],
    usage: { tr: 'Tüm havuz tipleri', en: 'All pool types' },
    galleryCount: 3,
  },
  {
    slug: 'klor-tablet', category: 'chemicals',
    name: { tr: 'Klor Tablet 200g', en: 'Chlorine Tablet 200g' },
    tagline: { tr: 'Yavaş, kararlı', en: 'Slow, steady' },
    description: { tr: 'Uzun süreli dezenfeksiyon için yavaş çözünen sıkıştırılmış tablet.', en: 'A slow-dissolving compressed tablet for long-lasting disinfection.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Tablet' },
      { label: { tr: 'Ağırlık', en: 'Weight' }, value: '200 g' },
      { label: { tr: 'Klor', en: 'Chlorine' }, value: '%90' },
    ],
    features: [
      { tr: 'Yavaş çözünür', en: 'Slow dissolving' },
      { tr: 'Stabilizatörlü', en: 'Stabilised' },
      { tr: 'Skimmer/dozajlayıcı', en: 'Skimmer or feeder' },
    ],
    usage: { tr: 'Haftalık bakım', en: 'Weekly upkeep' },
    galleryCount: 3,
  },
  {
    slug: 'sok-klor', category: 'chemicals',
    name: { tr: 'Şok Klor', en: 'Shock Chlorine' },
    tagline: { tr: 'Hızlı müdahale', en: 'Rapid reset' },
    description: { tr: 'Bulanıklık ve yüksek kirlilikte suyu hızla toparlayan granül klor.', en: 'A granular chlorine that recovers cloudy, heavily loaded water fast.' },
    specs: [
      { label: { tr: 'Form', en: 'Form' }, value: 'Granül / Granular' },
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '10 kg' },
      { label: { tr: 'Etki', en: 'Action' }, value: 'Hızlı / Fast' },
    ],
    features: [
      { tr: 'Anında çözünür', en: 'Instantly soluble' },
      { tr: 'Yosun/bulanıklık', en: 'Algae & cloudiness' },
      { tr: 'Sezon açılışı', en: 'Season opening' },
    ],
    usage: { tr: 'Şok dozlama', en: 'Shock dosing' },
    galleryCount: 3,
  },
  // ── Cleaning ──────────────────────────────────────────────
  {
    slug: 'havuz-robotu', category: 'cleaning',
    name: { tr: 'Otomatik Havuz Robotu', en: 'Robotic Pool Cleaner' },
    tagline: { tr: 'Kendi kendine temiz', en: 'Cleans on its own' },
    description: { tr: 'Zemini, duvarları ve su hattını haritalayarak temizleyen bağımsız robot.', en: 'An autonomous robot that maps and cleans floor, walls and waterline.' },
    specs: [
      { label: { tr: 'Kablo', en: 'Cable' }, value: '18 m' },
      { label: { tr: 'Döngü', en: 'Cycle' }, value: '2.5 saat / h' },
      { label: { tr: 'Filtre', en: 'Filter' }, value: 'Çift / Dual' },
    ],
    features: [
      { tr: 'Akıllı navigasyon', en: 'Smart navigation' },
      { tr: 'Su hattı fırçası', en: 'Waterline brush' },
      { tr: 'Uygulama kontrolü', en: 'App control' },
    ],
    usage: { tr: '12 m’ye kadar havuz', en: 'Pools up to 12 m' },
    galleryCount: 4,
  },
  {
    slug: 'teleskopik-sap', category: 'cleaning',
    name: { tr: 'Teleskopik Sap', en: 'Telescopic Pole' },
    tagline: { tr: 'Her köşeye ulaşır', en: 'Reaches every corner' },
    description: { tr: 'Alüminyum, hafif ve uzayabilen sap. Ağ, fırça ve vakuma uyumlu.', en: 'A light, extendable aluminium pole for nets, brushes and vacuum heads.' },
    specs: [
      { label: { tr: 'Malzeme', en: 'Material' }, value: 'Anodize alüminyum' },
      { label: { tr: 'Uzunluk', en: 'Length' }, value: '1.8 – 3.6 m' },
      { label: { tr: 'Bağlantı', en: 'Fitting' }, value: 'Universal' },
    ],
    features: [
      { tr: 'Kilitli teleskop', en: 'Locking telescope' },
      { tr: 'Korozyona dayanıklı', en: 'Corrosion resistant' },
      { tr: 'Ergonomik', en: 'Ergonomic' },
    ],
    usage: { tr: 'Genel temizlik', en: 'General cleaning' },
    galleryCount: 3,
  },
  {
    slug: 'yaprak-agi', category: 'cleaning',
    name: { tr: 'Yaprak Toplama Ağı', en: 'Leaf Skimmer Net' },
    tagline: { tr: 'Yüzeyi berrak tutar', en: 'Keeps the surface clear' },
    description: { tr: 'Derin file ile yaprak ve tortuyu tek geçişte toplayan ağ.', en: 'A deep-bag net that lifts leaves and debris in a single pass.' },
    specs: [
      { label: { tr: 'Çerçeve', en: 'Frame' }, value: 'Alüminyum' },
      { label: { tr: 'File', en: 'Mesh' }, value: 'İnce / Fine' },
      { label: { tr: 'Genişlik', en: 'Width' }, value: '45 cm' },
    ],
    features: [
      { tr: 'Derin file', en: 'Deep bag' },
      { tr: 'Hafif', en: 'Lightweight' },
      { tr: 'Sapa uyumlu', en: 'Pole compatible' },
    ],
    usage: { tr: 'Günlük yüzey', en: 'Daily surface' },
    galleryCount: 3,
  },
  // ── Pumps ─────────────────────────────────────────────────
  {
    slug: 'degisken-hiz-pompa', category: 'pumps',
    name: { tr: 'Değişken Hız Pompası', en: 'Variable Speed Pump' },
    tagline: { tr: 'Sessiz ve verimli', en: 'Quiet and efficient' },
    description: { tr: 'İhtiyaca göre hız ayarlayan, enerjiyi %70’e kadar azaltan sirkülasyon pompası.', en: 'A circulation pump that tunes its speed to demand, cutting energy up to 70%.' },
    specs: [
      { label: { tr: 'Güç', en: 'Power' }, value: '1.1 kW' },
      { label: { tr: 'Debi', en: 'Flow' }, value: '28 m³/h' },
      { label: { tr: 'Hız', en: 'Speed' }, value: '3 kademe / stages' },
    ],
    features: [
      { tr: 'Değişken hız', en: 'Variable speed' },
      { tr: 'Düşük ses', en: 'Low noise' },
      { tr: 'Enerji A sınıfı', en: 'A-class energy' },
    ],
    usage: { tr: 'Orta–büyük havuz', en: 'Mid–large pools' },
    galleryCount: 4,
  },
  {
    slug: 'isi-pompasi', category: 'pumps',
    name: { tr: 'Havuz Isı Pompası', en: 'Pool Heat Pump' },
    tagline: { tr: 'Uzayan sezon', en: 'A longer season' },
    description: { tr: 'Havadan ısı çekerek suyu ekonomik biçimde ısıtan inverter ünite.', en: 'An inverter unit that draws heat from the air to warm water economically.' },
    specs: [
      { label: { tr: 'Kapasite', en: 'Capacity' }, value: '17 kW' },
      { label: { tr: 'COP', en: 'COP' }, value: '≤ 12' },
      { label: { tr: 'Ses', en: 'Noise' }, value: '38 dB(A)' },
    ],
    features: [
      { tr: 'Inverter', en: 'Full inverter' },
      { tr: 'Titanyum eşanjör', en: 'Titanium exchanger' },
      { tr: 'Uygulama kontrolü', en: 'App control' },
    ],
    usage: { tr: '40–70 m³ havuz', en: '40–70 m³ pools' },
    galleryCount: 4,
  },
  {
    slug: 'booster-pompa', category: 'pumps',
    name: { tr: 'Booster Pompa', en: 'Booster Pump' },
    tagline: { tr: 'Ek basınç gücü', en: 'Extra pressure' },
    description: { tr: 'Basınçlı temizlik süpürgeleri için ek basınç sağlayan kompakt pompa.', en: 'A compact pump adding pressure for suction-side cleaners.' },
    specs: [
      { label: { tr: 'Güç', en: 'Power' }, value: '0.75 kW' },
      { label: { tr: 'Basınç', en: 'Pressure' }, value: '2.1 bar' },
      { label: { tr: 'Bağlantı', en: 'Port' }, value: 'Ø 50 mm' },
    ],
    features: [
      { tr: 'Kompakt', en: 'Compact' },
      { tr: 'Sessiz motor', en: 'Quiet motor' },
      { tr: 'Kolay montaj', en: 'Easy install' },
    ],
    usage: { tr: 'Basınçlı süpürge', en: 'Pressure cleaners' },
    galleryCount: 3,
  },
  // ── Lighting ──────────────────────────────────────────────
  {
    slug: 'led-spot-rgb', category: 'lighting',
    name: { tr: 'LED Spot RGB', en: 'RGB LED Spot' },
    tagline: { tr: 'Renk, suyun içinde', en: 'Colour, underwater' },
    description: { tr: 'Sualtı için tam renk yelpazesi sunan, ince çerçeveli LED armatür.', en: 'A slim-bezel underwater LED with the full colour spectrum.' },
    specs: [
      { label: { tr: 'Güç', en: 'Power' }, value: '25 W' },
      { label: { tr: 'Koruma', en: 'Rating' }, value: 'IP68' },
      { label: { tr: 'Renk', en: 'Colour' }, value: 'RGB' },
    ],
    features: [
      { tr: 'Tam renk', en: 'Full colour' },
      { tr: 'İnce çerçeve', en: 'Slim bezel' },
      { tr: 'Uzaktan kumanda', en: 'Remote control' },
    ],
    usage: { tr: 'Beton & prefabrik', en: 'Concrete & liner' },
    galleryCount: 4,
  },
  {
    slug: 'sualti-armatur', category: 'lighting',
    name: { tr: 'Sualtı Armatür Sıcak Beyaz', en: 'Underwater Warm White' },
    tagline: { tr: 'Sakin parıltı', en: 'A calm glow' },
    description: { tr: 'Doğal taşla uyumlu, sıcak beyaz ışıkla dingin bir atmosfer.', en: 'Warm white light for a serene mood, at home with natural stone.' },
    specs: [
      { label: { tr: 'Güç', en: 'Power' }, value: '18 W' },
      { label: { tr: 'Renk sıcaklığı', en: 'CCT' }, value: '3000 K' },
      { label: { tr: 'Koruma', en: 'Rating' }, value: 'IP68' },
    ],
    features: [
      { tr: 'Sıcak beyaz', en: 'Warm white' },
      { tr: 'Paslanmaz gövde', en: 'Stainless body' },
      { tr: 'Kısılabilir', en: 'Dimmable' },
    ],
    usage: { tr: 'Lüks villa havuzu', en: 'Luxury villa pools' },
    galleryCount: 3,
  },
  {
    slug: 'aydinlatma-kontrol', category: 'lighting',
    name: { tr: 'Aydınlatma Kontrol Ünitesi', en: 'Lighting Controller' },
    tagline: { tr: 'Tek dokunuş', en: 'One touch' },
    description: { tr: 'Sahne, renk ve zamanlamayı yöneten kablosuz kontrol ünitesi.', en: 'A wireless unit orchestrating scenes, colour and timing.' },
    specs: [
      { label: { tr: 'Kanal', en: 'Channels' }, value: '4' },
      { label: { tr: 'Bağlantı', en: 'Link' }, value: 'Wi-Fi' },
      { label: { tr: 'Sahne', en: 'Scenes' }, value: '12' },
    ],
    features: [
      { tr: 'Sahne hafızası', en: 'Scene memory' },
      { tr: 'Zamanlayıcı', en: 'Scheduler' },
      { tr: 'Uygulama', en: 'Mobile app' },
    ],
    usage: { tr: 'Çoklu armatür', en: 'Multi-fixture' },
    galleryCount: 3,
  },
  // ── Filters ───────────────────────────────────────────────
  {
    slug: 'kum-filtresi', category: 'filters',
    name: { tr: 'Kum Filtresi', en: 'Sand Filter' },
    tagline: { tr: 'Kanıtlanmış berraklık', en: 'Proven clarity' },
    description: { tr: 'Yüksek debili, dayanıklı gövdeli klasik kum filtresi.', en: 'A durable, high-flow classic sand filter.' },
    specs: [
      { label: { tr: 'Çap', en: 'Diameter' }, value: 'Ø 600 mm' },
      { label: { tr: 'Debi', en: 'Flow' }, value: '14 m³/h' },
      { label: { tr: 'Vana', en: 'Valve' }, value: '6 yön / way' },
    ],
    features: [
      { tr: 'Dayanıklı gövde', en: 'Durable shell' },
      { tr: '6 yönlü vana', en: '6-way valve' },
      { tr: 'Kolay bakım', en: 'Easy service' },
    ],
    usage: { tr: 'Orta havuz', en: 'Mid-size pools' },
    galleryCount: 3,
  },
  {
    slug: 'cam-medya', category: 'filters',
    name: { tr: 'Cam Filtre Medyası', en: 'Glass Filter Media' },
    tagline: { tr: 'Kumdan öte', en: 'Beyond sand' },
    description: { tr: 'Daha ince filtrasyon ve daha az su tüketimi için geri dönüştürülmüş cam.', en: 'Recycled glass for finer filtration and lower water use.' },
    specs: [
      { label: { tr: 'Ambalaj', en: 'Pack' }, value: '20 kg' },
      { label: { tr: 'Filtrasyon', en: 'Filtration' }, value: '≤ 5 µm' },
      { label: { tr: 'Ömür', en: 'Life' }, value: '2× kum' },
    ],
    features: [
      { tr: 'İnce filtrasyon', en: 'Finer filtration' },
      { tr: 'Az geri yıkama', en: 'Less backwash' },
      { tr: 'Uzun ömür', en: 'Long life' },
    ],
    usage: { tr: 'Kum filtresi dolgusu', en: 'Sand-filter media' },
    galleryCount: 3,
  },
  {
    slug: 'kartus-filtre', category: 'filters',
    name: { tr: 'Kartuş Filtre', en: 'Cartridge Filter' },
    tagline: { tr: 'Kompakt, susuz', en: 'Compact, no waste' },
    description: { tr: 'Geri yıkama gerektirmeyen, yer kazandıran kartuş filtre.', en: 'A space-saving cartridge filter that needs no backwash.' },
    specs: [
      { label: { tr: 'Alan', en: 'Area' }, value: '10 m²' },
      { label: { tr: 'Debi', en: 'Flow' }, value: '12 m³/h' },
      { label: { tr: 'Kartuş', en: 'Cartridge' }, value: 'Yıkanabilir' },
    ],
    features: [
      { tr: 'Geri yıkama yok', en: 'No backwash' },
      { tr: 'Su tasarrufu', en: 'Water saving' },
      { tr: 'Yıkanabilir', en: 'Washable' },
    ],
    usage: { tr: 'Küçük–orta havuz', en: 'Small–mid pools' },
    galleryCount: 3,
  },
  // ── Accessories ───────────────────────────────────────────
  {
    slug: 'paslanmaz-merdiven', category: 'accessories',
    name: { tr: 'Paslanmaz Merdiven', en: 'Stainless Ladder' },
    tagline: { tr: 'Zarif iniş', en: 'An elegant descent' },
    description: { tr: 'Parlak paslanmaz çelik, kaymaz basamaklı havuz merdiveni.', en: 'A polished stainless ladder with non-slip treads.' },
    specs: [
      { label: { tr: 'Basamak', en: 'Steps' }, value: '4' },
      { label: { tr: 'Malzeme', en: 'Material' }, value: 'AISI 316' },
      { label: { tr: 'Tutamak', en: 'Rails' }, value: 'Ø 43 mm' },
    ],
    features: [
      { tr: 'Deniz sınıfı çelik', en: 'Marine-grade steel' },
      { tr: 'Kaymaz basamak', en: 'Non-slip treads' },
      { tr: 'Parlak yüzey', en: 'Polished finish' },
    ],
    usage: { tr: 'Skimmer & taşmalı', en: 'Skimmer & overflow' },
    galleryCount: 3,
  },
  {
    slug: 'havuz-ortusu', category: 'accessories',
    name: { tr: 'Otomatik Havuz Örtüsü', en: 'Automatic Pool Cover' },
    tagline: { tr: 'Isı, güvenlik, sükûnet', en: 'Warmth, safety, calm' },
    description: { tr: 'Isıyı koruyan, kiri önleyen ve güvenlik sağlayan motorlu örtü.', en: 'A motorised cover that holds heat, blocks debris and adds safety.' },
    specs: [
      { label: { tr: 'Tahrik', en: 'Drive' }, value: 'Motorlu / Motorised' },
      { label: { tr: 'Lamel', en: 'Slat' }, value: 'Polikarbonat' },
      { label: { tr: 'Kontrol', en: 'Control' }, value: 'Anahtar / Key' },
    ],
    features: [
      { tr: 'Isı yalıtımı', en: 'Heat retention' },
      { tr: 'Güvenlik', en: 'Safety' },
      { tr: 'Sessiz motor', en: 'Quiet motor' },
    ],
    usage: { tr: 'Dikdörtgen havuz', en: 'Rectangular pools' },
    galleryCount: 4,
  },
  {
    slug: 'skimmer-kapagi', category: 'accessories',
    name: { tr: 'Gizli Skimmer Kapağı', en: 'Concealed Skimmer Lid' },
    tagline: { tr: 'Görünmez detay', en: 'The invisible detail' },
    description: { tr: 'Havuz kaplamasıyla bütünleşen, göze görünmeyen skimmer kapağı.', en: 'A skimmer lid that disappears into the pool’s cladding.' },
    specs: [
      { label: { tr: 'Tip', en: 'Type' }, value: 'Gizli / Concealed' },
      { label: { tr: 'Kaplama', en: 'Finish' }, value: 'Taş dolgu' },
      { label: { tr: 'Standart', en: 'Standard' }, value: 'Universal' },
    ],
    features: [
      { tr: 'Kaplamayla bütünleşir', en: 'Blends with cladding' },
      { tr: 'Paslanmaz çerçeve', en: 'Stainless frame' },
      { tr: 'Kolay erişim', en: 'Easy access' },
    ],
    usage: { tr: 'Doğal taş havuz', en: 'Natural-stone pools' },
    galleryCount: 3,
  },
  // ── Maintenance ───────────────────────────────────────────
  {
    slug: 'otomasyon-paneli', category: 'maintenance',
    name: { tr: 'Havuz Otomasyon Paneli', en: 'Pool Automation Panel' },
    tagline: { tr: 'Her şey tek ekranda', en: 'Everything, one screen' },
    description: { tr: 'Filtrasyon, ısıtma, dozaj ve aydınlatmayı tek panelden yöneten sistem.', en: 'One panel that runs filtration, heating, dosing and lighting.' },
    specs: [
      { label: { tr: 'Röle', en: 'Relays' }, value: '6' },
      { label: { tr: 'Bağlantı', en: 'Link' }, value: 'Wi-Fi / LAN' },
      { label: { tr: 'Ekran', en: 'Display' }, value: 'Dokunmatik' },
    ],
    features: [
      { tr: 'Merkezî kontrol', en: 'Central control' },
      { tr: 'Uzaktan erişim', en: 'Remote access' },
      { tr: 'Otomatik dozaj', en: 'Auto dosing' },
    ],
    usage: { tr: 'Tam otomatik havuz', en: 'Fully automated pools' },
    galleryCount: 4,
  },
  {
    slug: 'dozaj-pompasi', category: 'maintenance',
    name: { tr: 'Dozaj Pompası', en: 'Dosing Pump' },
    tagline: { tr: 'Ölçülü kimya', en: 'Measured chemistry' },
    description: { tr: 'pH ve kloru sürekli ölçüp otomatik dozlayan hassas ünite.', en: 'A precise unit that measures pH and chlorine and doses automatically.' },
    specs: [
      { label: { tr: 'Kanal', en: 'Channels' }, value: '2 (pH/Rx)' },
      { label: { tr: 'Debi', en: 'Output' }, value: '1.5 L/h' },
      { label: { tr: 'Prob', en: 'Probes' }, value: 'pH + ORP' },
    ],
    features: [
      { tr: 'Sürekli ölçüm', en: 'Continuous reading' },
      { tr: 'Otomatik dozaj', en: 'Auto dosing' },
      { tr: 'Alarm', en: 'Alerts' },
    ],
    usage: { tr: 'Otomatik su bakımı', en: 'Automated water care' },
    galleryCount: 3,
  },
  {
    slug: 'test-kiti', category: 'maintenance',
    name: { tr: 'Dijital Test Kiti', en: 'Digital Test Kit' },
    tagline: { tr: 'Suyu okuyun', en: 'Read your water' },
    description: { tr: 'pH, klor ve alkaliniteyi saniyeler içinde ölçen dijital fotometre.', en: 'A digital photometer reading pH, chlorine and alkalinity in seconds.' },
    specs: [
      { label: { tr: 'Parametre', en: 'Parameters' }, value: '5' },
      { label: { tr: 'Okuma', en: 'Reading' }, value: 'Dijital' },
      { label: { tr: 'Bellek', en: 'Memory' }, value: '30 kayıt' },
    ],
    features: [
      { tr: 'Hızlı sonuç', en: 'Fast results' },
      { tr: 'Yüksek hassasiyet', en: 'High accuracy' },
      { tr: 'Taşınabilir', en: 'Portable' },
    ],
    usage: { tr: 'Haftalık kontrol', en: 'Weekly checks' },
    galleryCount: 3,
  },
];

// ── helpers ────────────────────────────────────────────────
export const localize = (l: L, locale: string): string =>
  locale === 'en' ? l.en : l.tr;

export const getProduct = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const productsByCategory = (key: CategoryKey): Product[] =>
  products.filter((p) => p.category === key);

export type LocalizedProduct = {
  slug: string;
  category: CategoryKey;
  name: string;
  tagline: string;
  description: string;
  usage: string;
  galleryCount: number;
  pdf?: string;
  specs: { label: string; value: string }[];
  features: string[];
};

export function localizeProduct(p: Product, locale: string): LocalizedProduct {
  const pick = (x: L) => localize(x, locale);
  return {
    slug: p.slug,
    category: p.category,
    name: pick(p.name),
    tagline: pick(p.tagline),
    description: pick(p.description),
    usage: pick(p.usage),
    galleryCount: p.galleryCount,
    pdf: p.pdf,
    specs: p.specs.map((s) => ({ label: pick(s.label), value: s.value })),
    features: p.features.map(pick),
  };
}
