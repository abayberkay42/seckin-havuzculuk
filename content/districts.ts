/**
 * Service-area (district) content — one page per district the firm serves.
 * Bilingual like projects & catalogue (L = {tr, en}); `localizeDistrict` picks
 * one locale server-side so the page ships plain strings.
 *
 * DOORWAY-PAGE GUARD (why the type is strict): Google penalises "location pages
 * with only the city name swapped into identical text". So the unique, per-
 * district fields below are REQUIRED, not optional — a district with empty
 * localContext / localNotes / neighborhoods / faq won't type-check, which makes
 * a copy-paste template page impossible to ship. Each district must carry real,
 * different local substance (climate, terrain, villa stock, logistics, permits).
 */

type L = { tr: string; en: string };
type QA = { q: L; a: L };

export type District = {
  slug: string;
  /** Bare district name, e.g. "Alaçatı". */
  name: L;
  /** Locative form, hand-written because Turkish vowel harmony varies:
   *  "Alaçatı'da" / "Çeşme'de" (en: "in Alaçatı"). Never concatenate "'da". */
  loc: L;
  /** Full inflected headline — Turkish suffix varies per name, so it's authored
   *  per district rather than string-concatenated ("Alaçatı'da", "Çeşme'de"). */
  h1: L;
  /** Section-marker label above the H1. */
  eyebrow: L;
  seoTitle: L;
  seoDescription: L;
  cover: string;
  /** PageHero lead paragraph — district-specific. */
  intro: L;
  /** ≥100 words, unique per district: why building/maintaining a pool here is
   *  particular (climate, terrain, architecture, logistics). */
  localContext: L;
  /** ≥3 district-specific technical notes (real local variables). */
  localNotes: { title: L; desc: L }[];
  /** ≥4 real neighbourhoods / localities served within the district. */
  neighborhoods: string[];
  /** ≥3 district FAQ (its name appears in the questions) — feeds FAQPage. */
  faq: QA[];
  /** Project slugs whose `place` includes this district (for the proof block). */
  projectSlugs: string[];
  geo?: { lat: number; lng: number };
};

function localize(x: L, locale: string): string {
  return locale === 'en' ? x.en : x.tr;
}

export const districts: District[] = [
  {
    slug: 'alacati',
    name: { tr: 'Alaçatı', en: 'Alaçatı' },
    loc: { tr: "Alaçatı'da", en: 'in Alaçatı' },
    h1: {
      tr: "Alaçatı'da Havuz Yapımı ve Bakımı",
      en: 'Pool Construction & Maintenance in Alaçatı',
    },
    eyebrow: { tr: 'Hizmet Bölgesi · Alaçatı', en: 'Service Area · Alaçatı' },
    seoTitle: { tr: 'Alaçatı Havuz Yapımı ve Bakımı', en: 'Alaçatı Pool Construction & Maintenance' },
    seoDescription: {
      tr: "Alaçatı'da taş ev ve butik villalara özel havuz inşaatı, renovasyon ve düzenli bakım. Koruma dokusuna uyumlu tasarım, ücretsiz keşif.",
      en: 'Pool construction, renovation and regular maintenance for stone houses and boutique villas in Alaçatı. Design that respects the conservation fabric.',
    },
    cover: '/proj-bahce-yenileme.webp',
    intro: {
      tr: "Alaçatı'nın taş evleri, dar sokakları ve koruma altındaki dokusu, havuzu da bu estetiğe saygılı bir dille kurmayı gerektirir. Alaçatı ve çevresinde sıfırdan havuz inşaatı, renovasyon ve düzenli bakım — araziyi, evi ve rüzgârı okuyarak.",
      en: "Alaçatı's stone houses, narrow lanes and protected fabric call for a pool built in a language that respects that aesthetic. Pool construction from scratch, renovation and regular maintenance across Alaçatı and its surroundings — reading the site, the house and the wind.",
    },
    localContext: {
      tr: "Alaçatı, taş ev mimarisi ve koruma bölgesi kimliğiyle İzmir'in en özel yazlık dokularından biri. Burada bir havuz, sadece bir su havzası değil; avlunun, bahçenin ve taş dokunun bütününe eklemlenen bir öğe olarak tasarlanır. Bej traverten kenar mermerleri, gizli savak ve plazma taşma detayları, havuzun mimariyle tek parça gibi okunmasını sağlar. Bölgenin güçlü imbat ve lodos rüzgârları su yüzeyinden buharlaşmayı artırdığı için otomatik su tamamlama ve örtü çözümleri önem kazanır. Yoğun yaz sezonu ve butik otel–pansiyon yoğunluğu, hem inşaatta dayanıklı ekipman seçimini hem de sezon boyu kesintisiz bakımı gerektirir. Alaçatı'da tamamladığımız projelerin çoğu, tam da bu dengeyi — estetik incelik ile teknik dayanıklılığı — birlikte kurma üzerine kuruludur.",
      en: "With its stone-house architecture and conservation-area identity, Alaçatı is one of İzmir's most distinctive summer fabrics. Here a pool is not merely a basin of water; it is designed as an element woven into the whole of the courtyard, the garden and the stone texture. Beige travertine coping, hidden weirs and plasma-overflow details let the pool read as one piece with the architecture. Because the region's strong imbat and lodos winds increase evaporation from the water surface, automatic top-up and cover solutions matter here. The intense summer season and the density of boutique hotels and guesthouses demand both durable equipment at the build stage and uninterrupted maintenance through the season. Most of the projects we have completed in Alaçatı are built on exactly this balance — aesthetic finesse together with technical durability.",
    },
    localNotes: [
      {
        title: { tr: 'Taş dokuya uyum', en: 'Fitting the stone fabric' },
        desc: {
          tr: 'Kenar mermeri ve kaplama, taş ev ve avlu ile bütünlük kuracak şekilde seçilir; bej traverten ve mat dokular Alaçatı estetiğine oturur.',
          en: 'Coping and finishes are chosen to unify with the stone house and courtyard; beige travertine and matte textures sit naturally in the Alaçatı aesthetic.',
        },
      },
      {
        title: { tr: 'Koruma bölgesi ve imar', en: 'Conservation zone & permits' },
        desc: {
          tr: "Alaçatı'da bazı parseller koruma/SİT kapsamındadır; ruhsat, zemin etüdü ve imar durumu süreci baştan doğru planlanır.",
          en: 'Some plots in Alaçatı fall under conservation status; permits, soil surveys and zoning are planned correctly from the outset.',
        },
      },
      {
        title: { tr: 'Rüzgâr ve buharlaşma', en: 'Wind & evaporation' },
        desc: {
          tr: 'İmbat ve lodos su yüzeyinden buharlaşmayı artırır; otomatik su tamamlama ve havuz örtüsü ile su seviyesi ve kimyası korunur.',
          en: 'Imbat and lodos winds raise surface evaporation; automatic top-up and a pool cover keep the level and chemistry stable.',
        },
      },
      {
        title: { tr: 'Butik konaklama havuzları', en: 'Boutique-stay pools' },
        desc: {
          tr: 'Pansiyon ve otel havuzlarında yoğun sezon kullanımı için dayanıklı ekipman ve günlük bakım rutini kurulur.',
          en: 'For guesthouse and hotel pools, durable equipment and a daily maintenance routine are set up for heavy season use.',
        },
      },
    ],
    neighborhoods: ['Alaçatı Merkez', 'Port Alaçatı', 'Hacımemiş', 'Yeni Mecidiye', 'Tokmak'],
    faq: [
      {
        q: { tr: "Alaçatı'da havuz yapımı için ruhsat gerekir mi?", en: 'Do you need a permit to build a pool in Alaçatı?' },
        a: {
          tr: "Alaçatı'da bazı parseller koruma/SİT kapsamında olduğundan imar durumu ve ruhsat süreci parsele göre değişir. Süreci baştan belediye ve ilgili kurum onaylarıyla planlıyor, zemin etüdüyle birlikte yürütüyoruz.",
          en: "Because some plots in Alaçatı fall under conservation status, zoning and the permit process vary by parcel. We plan it from the start with municipal and relevant-authority approvals, alongside a soil survey.",
        },
      },
      {
        q: { tr: "Alaçatı'nın rüzgârı havuzu etkiler mi?", en: "Does Alaçatı's wind affect the pool?" },
        a: {
          tr: 'Evet. Güçlü imbat ve lodos, su yüzeyinden buharlaşmayı ve yaprak/toz taşınımını artırır. Otomatik su tamamlama, havuz örtüsü ve düzenli bakım ile su seviyesi ve kimyası dengede tutulur.',
          en: 'Yes. Strong imbat and lodos winds increase surface evaporation and carry in leaves and dust. Automatic top-up, a pool cover and regular maintenance keep the water level and chemistry balanced.',
        },
      },
      {
        q: { tr: "Alaçatı'da hangi havuz tipi öne çıkar?", en: 'Which pool type stands out in Alaçatı?' },
        a: {
          tr: 'Taş ev ve avlu dokusuyla bütünleşen, gizli savaklı veya plazma taşmalı, bej traverten kenarlı havuzlar öne çıkar. Havuzun mimariyle tek parça okunması Alaçatı için önceliğimizdir.',
          en: 'Pools that integrate with the stone house and courtyard — hidden-weir or plasma-overflow designs with beige travertine coping — stand out. Making the pool read as one piece with the architecture is our priority in Alaçatı.',
        },
      },
      {
        q: { tr: "Alaçatı'da havuz bakımı hizmeti veriyor musunuz?", en: 'Do you offer pool maintenance in Alaçatı?' },
        a: {
          tr: 'Evet. Villa ve butik otel havuzları için haftalık düzenli bakım, su kimyası dengesi, sezon açılışı ve kışa hazırlık dahil sözleşmeli bakım sunuyoruz.',
          en: 'Yes. For villa and boutique-hotel pools we offer contracted maintenance including weekly service, water-chemistry balancing, season opening and winterizing.',
        },
      },
    ],
    projectSlugs: ['selaleli-bahce-havuzu', 'plazma-tasmali-villa-havuzu', 'ates-cukurlu-villa-havuzu'],
    geo: { lat: 38.2836, lng: 26.3739 },
  },
  {
    slug: 'cesme',
    name: { tr: 'Çeşme', en: 'Çeşme' },
    loc: { tr: "Çeşme'de", en: 'in Çeşme' },
    h1: {
      tr: "Çeşme'de Havuz Yapımı ve Bakımı",
      en: 'Pool Construction & Maintenance in Çeşme',
    },
    eyebrow: { tr: 'Hizmet Bölgesi · Çeşme', en: 'Service Area · Çeşme' },
    seoTitle: { tr: 'Çeşme Havuz Yapımı ve Bakımı', en: 'Çeşme Pool Construction & Maintenance' },
    seoDescription: {
      tr: "Çeşme'de villa havuzu inşaatı, renovasyon ve düzenli bakım. Tuzlu deniz havasına dayanıklı ekipman ve sezon boyu bakım. Ücretsiz keşif.",
      en: 'Villa pool construction, renovation and regular maintenance in Çeşme. Equipment built for salty sea air and service through the whole season.',
    },
    cover: '/proj-antrasit-renovasyon.webp',
    intro: {
      tr: "Yarımadanın merkezi Çeşme'de havuz; deniz havasının, rüzgârın ve uzun yaz sezonunun sınadığı bir yapıdır. Çeşme genelinde villa havuzu inşaatı, renovasyon ve düzenli bakım — malzemeyi bu koşullara göre seçerek.",
      en: 'In Çeşme, the heart of the peninsula, a pool is a structure tested by sea air, wind and a long summer season. Villa pool construction, renovation and regular maintenance across Çeşme — with materials chosen for these conditions.',
    },
    localContext: {
      tr: "Çeşme, üç yanı denizle çevrili yarımadanın merkezi olarak hem yerleşik villaların hem de yazlık konutların yoğun olduğu bir bölge. Denize yakınlık, havadaki tuz oranını yükseltir; bu da açıkta kalan metal aksam, pompa gövdeleri, merdiven ve aydınlatma çerçevelerinde korozyonu hızlandırır. Bu yüzden Çeşme'de paslanmaz kalite seçimi ve ekipman korumasını en baştan planlıyoruz. Bölgedeki havuzların önemli bir kısmı on beş–yirmi yıllık; eskiyen kaplama, yorulan tesisat ve yetersiz filtrasyon, sıfırdan yapım kadar renovasyon talebini de doğuruyor. Çeşme'de tamamladığımız renovasyonlarda kenar mermerini, iç kaplamayı ve aydınlatmayı birlikte yenileyerek havuza yeni bir karakter kazandırdık. Uzun yaz sezonu ve yoğun kullanım ise su kimyasının haftalık, düzenli bakımla dengede tutulmasını gerektiriyor.",
      en: "As the centre of a peninsula bordered by sea on three sides, Çeşme is dense with both year-round villas and summer homes. Proximity to the sea raises the salt content of the air, which accelerates corrosion in exposed metal parts, pump housings, ladders and light frames. That is why in Çeşme we plan stainless-grade choices and equipment protection from the very start. A large share of the area's pools are fifteen to twenty years old; ageing finishes, tired plumbing and undersized filtration create as much demand for renovation as for new builds. In the renovations we have completed in Çeşme, we renewed the coping, the lining and the lighting together to give the pool a new character. The long summer season and heavy use, meanwhile, demand that water chemistry be kept in balance through weekly, regular maintenance.",
    },
    localNotes: [
      {
        title: { tr: 'Tuzlu havaya karşı ekipman', en: 'Equipment against salt air' },
        desc: {
          tr: 'Merdiven, aydınlatma çerçevesi ve açıktaki metal aksamda paslanmaz kalite seçilir; pompa ve filtre korunaklı bir makine odasına alınır.',
          en: 'Stainless grades are chosen for ladders, light frames and exposed metal; the pump and filter are housed in a protected plant room.',
        },
      },
      {
        title: { tr: 'Yaşlanan havuzlara renovasyon', en: 'Renovating ageing pools' },
        desc: {
          tr: 'Eski kaplama, derz ve tesisat yenilenirken havuzun formu korunur; kenar, kaplama ve aydınlatma tek bir tasarım diliyle yeniden kurulur.',
          en: "Old finishes, grout and plumbing are renewed while the pool's form is kept; coping, lining and lighting are rebuilt in one design language.",
        },
      },
      {
        title: { tr: 'Lodos ve kıyı tozu', en: 'Lodos wind & coastal dust' },
        desc: {
          tr: 'Lodos taşıdığı toz ve yaprakla filtre yükünü artırır; skimmer kapasitesi ve ters yıkama sıklığı buna göre ayarlanır.',
          en: 'The lodos raises the filter load with the dust and leaves it carries; skimmer capacity and backwash frequency are set accordingly.',
        },
      },
      {
        title: { tr: 'Uzun sezon, yoğun kullanım', en: 'Long season, heavy use' },
        desc: {
          tr: 'Mayıs–Ekim arası yoğun kullanımda pH ve klor haftalık ölçülür; sezon açılışı ve kışa hazırlık sözleşmeye dahil edilir.',
          en: 'With heavy use from May to October, pH and chlorine are measured weekly; season opening and winterizing are included in the contract.',
        },
      },
    ],
    neighborhoods: ['Çeşme Merkez', 'Dalyan', 'Çiftlikköy', 'Ovacık', 'Germiyan', 'Ardıç'],
    faq: [
      {
        q: { tr: "Çeşme'de havuz renovasyonu ne kadar sürer?", en: 'How long does a pool renovation take in Çeşme?' },
        a: {
          tr: "Kapsama göre değişmekle birlikte kenar, kaplama ve aydınlatmayı birlikte yenilediğimiz renovasyonlar Çeşme'de genellikle 4–6 hafta sürüyor. Sezon öncesine yetişmesi için işe kış ya da erken bahar aylarında başlamayı öneriyoruz.",
          en: 'It depends on scope, but renovations where we renew the coping, lining and lighting together typically take 4–6 weeks in Çeşme. To be ready before the season, we recommend starting in winter or early spring.',
        },
      },
      {
        q: { tr: "Çeşme'de deniz havası havuz ekipmanına zarar verir mi?", en: "Does Çeşme's sea air damage pool equipment?" },
        a: {
          tr: 'Tuzlu hava açıktaki metal parçalarda korozyonu hızlandırır. Paslanmaz kalite seçimi, korunaklı makine odası ve düzenli bakımla ekipman ömrü belirgin biçimde uzar.',
          en: 'Salty air speeds up corrosion on exposed metal parts. Stainless-grade choices, a protected plant room and regular maintenance noticeably extend equipment life.',
        },
      },
      {
        q: { tr: "Çeşme'de sezonluk bakım anlaşması yapıyor musunuz?", en: 'Do you offer seasonal maintenance contracts in Çeşme?' },
        a: {
          tr: 'Evet. Çeşme genelinde haftalık düzenli bakım, su kimyası dengesi, sezon açılışı ve kışa hazırlığı kapsayan sözleşmeli bakım sunuyoruz.',
          en: 'Yes. Across Çeşme we offer contracted maintenance covering weekly service, water-chemistry balancing, season opening and winterizing.',
        },
      },
    ],
    projectSlugs: ['antrasit-aydinlatmali-renovasyon', 'tundra-gri-renovasyon'],
    geo: { lat: 38.3236, lng: 26.3029 },
  },
  {
    slug: 'ilica',
    name: { tr: 'Ilıca', en: 'Ilıca' },
    loc: { tr: "Ilıca'da", en: 'in Ilıca' },
    h1: {
      tr: "Ilıca'da Havuz Yapımı ve Bakımı",
      en: 'Pool Construction & Maintenance in Ilıca',
    },
    eyebrow: { tr: 'Hizmet Bölgesi · Ilıca', en: 'Service Area · Ilıca' },
    seoTitle: { tr: 'Ilıca Havuz Yapımı ve Bakımı', en: 'Ilıca Pool Construction & Maintenance' },
    seoDescription: {
      tr: "Ilıca'da villa ve site havuzları için inşaat, renovasyon ve bakım. Isıtmalı havuz ve ısı pompası entegrasyonu, düzenli bakım. Ücretsiz keşif.",
      en: 'Construction, renovation and maintenance for villa and residential-complex pools in Ilıca. Heated pools, heat-pump integration and regular service.',
    },
    cover: '/proj-gizli-savakli-cover.webp',
    intro: {
      tr: "Termal kaynakları ve uzun kumsalıyla bilinen Ilıca'da havuz, denize alternatif değil, sezonu uzatan bir yaşam alanıdır. Ilıca ve Boyalık çevresinde havuz inşaatı, renovasyon ve düzenli bakım.",
      en: 'In Ilıca, known for its thermal springs and long sandy beach, a pool is not an alternative to the sea but a living space that extends the season. Pool construction, renovation and regular maintenance around Ilıca and Boyalık.',
    },
    localContext: {
      tr: "Ilıca, termal kaynakları ve sığ, uzun kumsalıyla yarımadanın en çok tercih edilen tatil noktalarından biri. Bölgede müstakil villaların yanında ortak havuzlu siteler de yoğun; bu da hem tek aile havuzu hem de çok kullanıcılı site havuzu ihtiyacını bir arada getiriyor. Site havuzlarında kullanıcı sayısı yüksek olduğundan filtrasyon kapasitesi ve dezenfeksiyon, tek aile havuzuna göre çok daha titiz planlanmalı. Ilıca'da havuzunu ilkbahar ve sonbaharda da kullanmak isteyen ev sahipleri için ısı pompası ile ısıtma entegrasyonu öne çıkıyor; bu, yaz dışındaki ayları da havuz sezonuna katıyor. Ilıca'da tamamladığımız renovasyonda gizli savak detayıyla havuzun kenarını sadeleştirdik ve su yüzeyini zeminle aynı hizaya taşıdık. Isıtmalı ya da ısıtmasız, her havuzda su kimyasını düzenli ölçüp dengede tutmak Ilıca'daki bakımın temelini oluşturuyor.",
      en: "With its thermal springs and long, shallow sandy beach, Ilıca is one of the peninsula's most popular holiday spots. Alongside detached villas, the area is dense with residential complexes sharing a pool, which brings together the needs of a single-family pool and a multi-user complex pool. Because complex pools serve many swimmers, filtration capacity and disinfection must be planned far more carefully than for a single-family pool. For owners in Ilıca who want to swim in spring and autumn too, heat-pump heating integration stands out, adding the months outside summer to the pool season. In the renovation we completed in Ilıca, we simplified the pool edge with a hidden-weir detail and brought the water surface level with the deck. Heated or not, measuring water chemistry regularly and keeping it balanced is the foundation of maintenance in Ilıca.",
    },
    localNotes: [
      {
        title: { tr: 'Site havuzlarında kapasite', en: 'Capacity for complex pools' },
        desc: {
          tr: 'Çok kullanıcılı site havuzlarında filtre ve pompa, kullanıcı yüküne göre büyütülür; dezenfeksiyon otomatik dozajla sabit tutulur.',
          en: 'In multi-user complex pools, the filter and pump are sized to the bather load; disinfection is kept steady with automatic dosing.',
        },
      },
      {
        title: { tr: 'Isı pompası entegrasyonu', en: 'Heat-pump integration' },
        desc: {
          tr: 'Sezonu ilkbahar ve sonbahara uzatmak için ısı pompası ve havuz örtüsü birlikte planlanır; örtü ısı kaybını belirgin şekilde azaltır.',
          en: 'To stretch the season into spring and autumn, a heat pump and pool cover are planned together; the cover markedly reduces heat loss.',
        },
      },
      {
        title: { tr: 'Gizli savak ve sade kenar', en: 'Hidden weir, clean edge' },
        desc: {
          tr: 'Gizli savakla su yüzeyi zemin hizasına taşınır; kenar sadeleşir, havuz bahçeyle tek düzlemde okunur.',
          en: 'A hidden weir brings the water surface to deck level; the edge becomes minimal and the pool reads on one plane with the garden.',
        },
      },
      {
        title: { tr: 'Kum ve plaj taşınımı', en: 'Sand carried from the beach' },
        desc: {
          tr: 'Plaja yakın havuzlarda ayakla taşınan kum filtreyi yorar; duş/ayak yıkama noktası ve düzenli ters yıkama önerilir.',
          en: 'In pools near the beach, sand carried in on feet strains the filter; a rinse point and regular backwashing are recommended.',
        },
      },
    ],
    neighborhoods: ['Ilıca Merkez', 'Boyalık', 'Şifne', 'Reisdere'],
    faq: [
      {
        q: { tr: "Ilıca'da ısıtmalı havuz yaptırmak mantıklı mı?", en: 'Is a heated pool worthwhile in Ilıca?' },
        a: {
          tr: "Havuzu yalnızca yaz aylarında değil ilkbahar ve sonbaharda da kullanmak istiyorsanız evet. Ilıca'da ısı pompası ve havuz örtüsünü birlikte planlayarak sezonu birkaç ay uzatmak mümkün.",
          en: "Yes, if you want to use the pool in spring and autumn as well as summer. In Ilıca, planning a heat pump together with a pool cover can extend the season by several months.",
        },
      },
      {
        q: { tr: "Ilıca'da site havuzlarına bakım veriyor musunuz?", en: 'Do you maintain residential-complex pools in Ilıca?' },
        a: {
          tr: 'Evet. Çok kullanıcılı site havuzları için kullanıcı yüküne uygun filtrasyon, otomatik dozaj ve sıklaştırılmış su testiyle sözleşmeli bakım sunuyoruz.',
          en: 'Yes. For multi-user complex pools we offer contracted maintenance with filtration sized to the bather load, automatic dosing and more frequent water testing.',
        },
      },
      {
        q: { tr: "Ilıca'daki eski havuzum gizli savaklı hale getirilebilir mi?", en: 'Can my older pool in Ilıca be converted to a hidden weir?' },
        a: {
          tr: "Çoğu durumda evet. Mevcut kabuğun durumuna ve tesisata bakarak renovasyonla gizli savak detayına geçiş yapılabiliyor; Ilıca'da bu dönüşümü tamamladığımız bir proje de var.",
          en: 'In most cases, yes. Depending on the existing shell and plumbing, a renovation can convert the pool to a hidden-weir detail; we have completed exactly this conversion in Ilıca.',
        },
      },
    ],
    projectSlugs: ['gizli-savakli-renovasyon'],
    geo: { lat: 38.31, lng: 26.374 },
  },
  {
    slug: 'seferihisar',
    name: { tr: 'Seferihisar', en: 'Seferihisar' },
    loc: { tr: "Seferihisar'da", en: 'in Seferihisar' },
    h1: {
      tr: "Seferihisar'da Havuz Yapımı ve Bakımı",
      en: 'Pool Construction & Maintenance in Seferihisar',
    },
    eyebrow: { tr: 'Hizmet Bölgesi · Seferihisar', en: 'Service Area · Seferihisar' },
    seoTitle: { tr: 'Seferihisar Havuz Yapımı ve Bakımı', en: 'Seferihisar Pool Construction & Maintenance' },
    seoDescription: {
      tr: "Seferihisar, Sığacık ve Ürkmez'de müstakil ev ve villa havuzları: inşaat, renovasyon ve düzenli bakım. Bahçeyle uyumlu tasarım. Ücretsiz keşif.",
      en: 'Pools for detached homes and villas in Seferihisar, Sığacık and Ürkmez: construction, renovation and regular maintenance, designed around the garden.',
    },
    cover: '/proj-ege-kiyisi.webp',
    intro: {
      tr: "Sakin şehir kimliğiyle Seferihisar'da havuz, aceleye getirilmeyen bir yaşamın parçası. Seferihisar, Sığacık ve Ürkmez'de müstakil ev ve villa havuzları için inşaat, renovasyon ve düzenli bakım.",
      en: "In Seferihisar, with its slow-city identity, a pool is part of an unhurried life. Construction, renovation and regular maintenance for detached-home and villa pools in Seferihisar, Sığacık and Ürkmez.",
    },
    localContext: {
      tr: "Seferihisar, Türkiye'nin ilk sakin şehri (Cittaslow) unvanını taşıyan, bahçeli müstakil evlerin ve mandalina bahçelerinin arasına dağılmış bir yerleşim. Buradaki havuz talebi çoğunlukla yıl boyu yaşanan evlerden ve kalabalık ailelerden geliyor; bu da havuzun sadece estetik değil, güvenli ve kolay yönetilebilir olmasını öne çıkarıyor. Çocuklu aileler için sığ giriş basamakları, oturma bankları ve kaymaz kenar malzemesi tasarımın ilk maddeleri arasında yer alıyor. Geniş bahçeli parsellerde havuzu bitki dokusuyla birlikte kurgulamak, ağaç köklerinin ve yaprak yükünün hesaba katılmasını gerektiriyor; skimmer yerleşimini hâkim rüzgâr ve ağaçların konumuna göre belirliyoruz. Seferihisar merkeze uzak konumuyla da bizim için planlama gerektiren bir bölge: ekipman ve malzeme lojistiğini, bakım ziyaretlerini rota bazlı düzenleyerek hizmetin aksamamasını sağlıyoruz.",
      en: "Seferihisar, the first town in Türkiye to hold the Cittaslow (slow city) title, is spread among detached homes with gardens and mandarin orchards. Pool demand here comes mostly from year-round homes and large families, which puts safety and easy management at the forefront alongside aesthetics. For families with children, shallow entry steps, bench seating and non-slip coping are among the first items in the design. On large garden plots, shaping the pool together with the planting means accounting for tree roots and leaf load; we place skimmers according to the prevailing wind and the position of the trees. Seferihisar's distance from the peninsula centre also makes it a region that calls for planning on our side: we organise equipment and material logistics and maintenance visits by route so the service never falters.",
    },
    localNotes: [
      {
        title: { tr: 'Aile havuzunda güvenlik', en: 'Safety in a family pool' },
        desc: {
          tr: 'Sığ giriş basamakları, oturma bankları, kaymaz kenar ve isteğe bağlı güvenlik örtüsü çocuklu aileler için tasarıma baştan eklenir.',
          en: 'Shallow entry steps, bench seating, non-slip coping and an optional safety cover are built into the design from the start for families with children.',
        },
      },
      {
        title: { tr: 'Bahçe, ağaç ve yaprak yükü', en: 'Garden, trees & leaf load' },
        desc: {
          tr: 'Mandalina ve meyve ağaçlarına yakın havuzlarda kök mesafesi korunur; skimmer yeri rüzgâr ve ağaç konumuna göre seçilir.',
          en: 'Near mandarin and fruit trees, root clearance is kept; skimmer placement is chosen by wind direction and tree position.',
        },
      },
      {
        title: { tr: 'Yıl boyu yaşanan evler', en: 'Year-round homes' },
        desc: {
          tr: 'Yazlıktan çok sürekli oturulan evler olduğu için bakım yalnızca sezona değil, kış aylarındaki koruyucu bakıma da yayılır.',
          en: 'As these are mostly lived-in homes rather than summer houses, maintenance extends beyond the season into protective winter care.',
        },
      },
      {
        title: { tr: 'Rota bazlı servis', en: 'Route-based service' },
        desc: {
          tr: 'Yarımada merkezine mesafe nedeniyle malzeme sevkiyatı ve bakım ziyaretleri rota planıyla aksatmadan yürütülür.',
          en: 'Given the distance from the peninsula centre, material deliveries and maintenance visits are run on a route plan without interruption.',
        },
      },
    ],
    neighborhoods: ['Seferihisar Merkez', 'Sığacık', 'Ürkmez', 'Doğanbey', 'Payamlı'],
    faq: [
      {
        q: { tr: "Seferihisar'a da havuz yapımı ve bakımı hizmeti veriyor musunuz?", en: 'Do you provide pool construction and maintenance in Seferihisar?' },
        a: {
          tr: "Evet. Seferihisar merkez, Sığacık, Ürkmez ve çevresinde havuz inşaatı, renovasyon ve sözleşmeli bakım hizmeti veriyoruz; ziyaretleri rota planıyla düzenliyoruz.",
          en: 'Yes. We provide pool construction, renovation and contracted maintenance in central Seferihisar, Sığacık, Ürkmez and the surrounding area, organising visits on a route plan.',
        },
      },
      {
        q: { tr: "Seferihisar'da çocuklu aileler için havuz nasıl tasarlanmalı?", en: 'How should a pool be designed for families with children in Seferihisar?' },
        a: {
          tr: 'Sığ giriş basamakları, geniş oturma bankları, kaymaz kenar malzemesi ve güvenlik örtüsü öncelikli. Derin ve sığ bölümü net ayırmak da kullanım güvenliğini artırır.',
          en: 'Shallow entry steps, wide bench seating, non-slip coping and a safety cover come first. Clearly separating the deep and shallow zones also improves safety.',
        },
      },
      {
        q: { tr: "Seferihisar'da havuzu kışın da bakımlı tutmak gerekir mi?", en: 'Does a pool in Seferihisar need winter care?' },
        a: {
          tr: 'Yıl boyu yaşanan evlerde evet. Kışa hazırlık, düzenli kimyasal kontrol ve tesisatın korunması havuzu bahara sorunsuz çıkarır.',
          en: 'In year-round homes, yes. Winterizing, regular chemical checks and protecting the plumbing bring the pool through to spring without trouble.',
        },
      },
    ],
    projectSlugs: [],
    geo: { lat: 38.1965, lng: 26.8387 },
  },
  {
    slug: 'karaburun',
    name: { tr: 'Karaburun', en: 'Karaburun' },
    loc: { tr: "Karaburun'da", en: 'in Karaburun' },
    h1: {
      tr: "Karaburun'da Havuz Yapımı ve Bakımı",
      en: 'Pool Construction & Maintenance in Karaburun',
    },
    eyebrow: { tr: 'Hizmet Bölgesi · Karaburun', en: 'Service Area · Karaburun' },
    seoTitle: { tr: 'Karaburun Havuz Yapımı ve Bakımı', en: 'Karaburun Pool Construction & Maintenance' },
    seoDescription: {
      tr: "Karaburun ve Mordoğan'da havuz inşaatı, renovasyon ve bakım. Eğimli ve kayalık arazide mühendislik, uzak şantiyeye tam ekipmanlı ekip. Ücretsiz keşif.",
      en: 'Pool construction, renovation and maintenance in Karaburun and Mordoğan. Engineering on sloping, rocky land and a fully equipped team for remote sites.',
    },
    cover: '/proj-tepe-malikane.webp',
    intro: {
      tr: "Dağlık yarımadanın ucundaki Karaburun'da havuz, manzarayla ve araziyle mücadele ederek değil, onlarla birlikte kurulur. Karaburun ve Mordoğan'da havuz inşaatı, renovasyon ve bakım.",
      en: "In Karaburun, at the tip of a mountainous peninsula, a pool is built with the view and the terrain rather than against them. Pool construction, renovation and maintenance in Karaburun and Mordoğan.",
    },
    localContext: {
      tr: "Karaburun, İzmir'in en az yapılaşmış, dağlık ve doğal kalmış yarımadası. Parsellerin çoğu eğimli ve kayalık; bu da havuz yapımını düz bir bahçeye kıyasla bambaşka bir mühendislik işine dönüştürüyor. Kaya zeminde kazı özel ekipman gerektiriyor, eğimli arazide ise havuzun oturacağı teras için istinat duvarı ve sağlam bir temel hesabı yapılması şart. Buna karşılık bu eğim, denize bakan sonsuzluk kenarlı havuzlar için yarımadanın en etkileyici manzaralarını sunuyor. Karaburun'un yarımada merkezine uzaklığı ve dar, virajlı yolları ise işin lojistik tarafını belirliyor: şantiyeye tam ekipmanlı mobil ekiple gidiyor, malzemeyi tek seferde ve planlı taşıyarak gidiş-dönüş sayısını azaltıyoruz. Bakımda da aynı yaklaşım geçerli; ziyaret aralıklarını ve yedek parça stoğunu, sahaya her gidişte işi tamamlayacak şekilde planlıyoruz.",
      en: "Karaburun is İzmir's least developed, most mountainous and most natural peninsula. Most plots are sloping and rocky, which turns building a pool into an entirely different engineering job compared with a flat garden. Excavating rock calls for special equipment, and on sloping land a retaining wall and a sound foundation must be calculated for the terrace the pool will sit on. In return, that slope offers the peninsula's most striking views for sea-facing infinity-edge pools. Karaburun's distance from the peninsula centre and its narrow, winding roads shape the logistics: we go to site with a fully equipped mobile team and move materials in one planned delivery, cutting down the number of round trips. The same approach applies to maintenance; we plan visit intervals and spare-parts stock so that every trip to site finishes the job.",
    },
    localNotes: [
      {
        title: { tr: 'Kaya zeminde kazı', en: 'Excavating rock' },
        desc: {
          tr: 'Kayalık parsellerde kazı özel ekipmanla yapılır; zemin etüdü, kazı yöntemini ve süresini baştan netleştirir.',
          en: 'On rocky plots, excavation is done with special equipment; a soil survey settles the method and duration from the outset.',
        },
      },
      {
        title: { tr: 'Eğimde istinat ve teras', en: 'Retaining walls on slopes' },
        desc: {
          tr: 'Eğimli arazide havuzun oturacağı teras için istinat duvarı ve temel hesabı yapılır; yapı yük altında güvenle çalışır.',
          en: 'On sloping land, a retaining wall and foundation are calculated for the pool terrace so the structure performs safely under load.',
        },
      },
      {
        title: { tr: 'Manzaraya sonsuzluk kenarı', en: 'An infinity edge to the view' },
        desc: {
          tr: 'Denize bakan eğim, sonsuzluk kenarlı havuz için doğal bir fırsattır; taşma kanalı ve denge tankı buna göre tasarlanır.',
          en: 'A sea-facing slope is a natural opportunity for an infinity pool; the overflow channel and balance tank are designed to suit.',
        },
      },
      {
        title: { tr: 'Uzak şantiye lojistiği', en: 'Remote-site logistics' },
        desc: {
          tr: 'Dar ve virajlı yollar nedeniyle tam ekipmanlı mobil ekip ve tek seferde planlı malzeme sevkiyatı ile çalışılır.',
          en: 'Because of narrow, winding roads, we work with a fully equipped mobile team and a single, planned material delivery.',
        },
      },
    ],
    neighborhoods: ['Karaburun Merkez', 'Mordoğan', 'Saip', 'Bozköy', 'Küçükbahçe'],
    faq: [
      {
        q: { tr: "Karaburun'daki eğimli arsama havuz yapılabilir mi?", en: 'Can a pool be built on my sloping plot in Karaburun?' },
        a: {
          tr: "Evet. Eğimli arazide istinat duvarı ve teras temeliyle havuz güvenle inşa edilebilir; hatta denize bakan eğim, Karaburun'da sonsuzluk kenarlı havuz için ideal bir zemin sunar.",
          en: "Yes. With a retaining wall and a terrace foundation, a pool can be built safely on sloping land; a sea-facing slope in Karaburun is in fact an ideal base for an infinity-edge pool.",
        },
      },
      {
        q: { tr: "Karaburun'da kayalık zemin havuz yapımını zorlaştırır mı?", en: 'Does rocky ground in Karaburun complicate a pool build?' },
        a: {
          tr: 'Kaya zemin özel kazı ekipmanı ve daha uzun kazı süresi gerektirir. Zemin etüdüyle yöntemi baştan belirleyerek süreci ve bütçeyi öngörülebilir kılıyoruz.',
          en: 'Rock calls for special excavation equipment and a longer dig. By settling the method with a soil survey at the start, we keep the schedule and budget predictable.',
        },
      },
      {
        q: { tr: "Karaburun'a düzenli bakım için geliyor musunuz?", en: 'Do you come to Karaburun for regular maintenance?' },
        a: {
          tr: 'Evet. Mordoğan ve Karaburun merkez dahil bölgeye, ziyaret aralıklarını ve yedek parça stoğunu önceden planlayarak düzenli bakım hizmeti veriyoruz.',
          en: 'Yes. We provide regular maintenance across the area, including Mordoğan and central Karaburun, planning visit intervals and spare-parts stock in advance.',
        },
      },
    ],
    projectSlugs: [],
    geo: { lat: 38.6385, lng: 26.5129 },
  },
  {
    slug: 'urla',
    name: { tr: 'Urla', en: 'Urla' },
    loc: { tr: "Urla'da", en: 'in Urla' },
    h1: {
      tr: "Urla'da Havuz Yapımı ve Bakımı",
      en: 'Pool Construction & Maintenance in Urla',
    },
    eyebrow: { tr: 'Hizmet Bölgesi · Urla', en: 'Service Area · Urla' },
    seoTitle: { tr: 'Urla Havuz Yapımı ve Bakımı', en: 'Urla Pool Construction & Maintenance' },
    seoDescription: {
      tr: "Urla'da bağ evleri, zeytinlik ve çiftlik villaları için havuz inşaatı, renovasyon ve bakım. Geniş arazide manzara odaklı tasarım. Ücretsiz keşif.",
      en: 'Pool construction, renovation and maintenance for vineyard houses, olive-grove and farm villas in Urla. View-led design on generous land.',
    },
    cover: '/proj-zeytinlik.webp',
    intro: {
      tr: "Bağ yolları ve zeytinlikleriyle Urla'da havuz, geniş bir arazinin ve açık bir manzaranın içine yerleşir. Urla'da bağ evi, zeytinlik ve çiftlik villaları için havuz inşaatı, renovasyon ve bakım.",
      en: "In Urla, with its vineyard routes and olive groves, a pool settles into generous land and an open view. Pool construction, renovation and maintenance for vineyard houses, olive-grove and farm villas in Urla.",
    },
    localContext: {
      tr: "Urla, bağ yolu, zeytinlikleri ve kırsal dokusuyla İzmir'in en sevilen yaşam bölgelerinden biri. Buradaki parseller çoğunlukla geniş; bağ evleri, zeytinlik içindeki villalar ve çiftlik tipi konutlar, havuzu da büyük ölçekli ve manzara odaklı tasarlamaya imkân veriyor. Geniş arazide havuzun yerini belirlerken güneşin günlük hareketini, rüzgâr yönünü ve evden görüş aksını birlikte değerlendiriyoruz; havuz çoğu zaman bağa ya da vadiye bakan bir teras olarak kurgulanıyor. Doğal taş, mat kaplama ve toprak tonları Urla'nın kırsal karakterine uyum sağlıyor. Ev ile havuz arasındaki mesafenin uzun olduğu parsellerde tesisat hattı ve makine odası yerleşimi ayrıca planlanmalı; aksi halde enerji ve basınç kaybı artar. Zeytinlik ve bağlara yakın havuzlarda ise mevsimsel yaprak, polen ve toz yükü bakım sıklığını belirleyen başlıca etken oluyor.",
      en: "With its vineyard route, olive groves and rural fabric, Urla is one of İzmir's best-loved places to live. Plots here are mostly large; vineyard houses, villas set within olive groves and farm-style homes allow the pool to be designed at a large scale and around the view. When siting a pool on generous land, we weigh the sun's daily path, the wind direction and the sightline from the house together; the pool is often conceived as a terrace looking over the vineyard or the valley. Natural stone, matte finishes and earthy tones suit Urla's rural character. On plots where the house sits far from the pool, the plumbing run and plant-room placement must be planned separately; otherwise energy and pressure losses rise. For pools near olive groves and vineyards, seasonal leaf, pollen and dust loads become the main factor in setting maintenance frequency.",
    },
    localNotes: [
      {
        title: { tr: 'Manzara ve görüş aksı', en: 'View & sightline' },
        desc: {
          tr: 'Geniş arazide havuzun yeri güneş, rüzgâr ve evden görüş aksına göre seçilir; bağa ya da vadiye bakan teras kurgusu öne çıkar.',
          en: "On generous land, the pool is sited by sun, wind and the sightline from the house; a terrace looking over vineyard or valley stands out.",
        },
      },
      {
        title: { tr: 'Uzun tesisat hattı', en: 'Long plumbing runs' },
        desc: {
          tr: 'Ev ile havuz arası mesafe uzunsa makine odası havuza yakın konumlandırılır; boru çapı basınç ve enerji kaybına göre hesaplanır.',
          en: 'Where the house is far from the pool, the plant room is placed near the pool; pipe diameters are sized against pressure and energy loss.',
        },
      },
      {
        title: { tr: 'Kırsal dokuya uyum', en: 'Fitting the rural fabric' },
        desc: {
          tr: "Doğal taş, mat kaplama ve toprak tonları Urla'nın kırsal karakteriyle bütünleşir; havuz arazinin doğal bir parçası gibi okunur.",
          en: "Natural stone, matte finishes and earthy tones blend with Urla's rural character; the pool reads as a natural part of the land.",
        },
      },
      {
        title: { tr: 'Yaprak, polen ve toz', en: 'Leaves, pollen & dust' },
        desc: {
          tr: 'Zeytinlik ve bağlara yakın havuzlarda mevsimsel yük artar; skimmer kapasitesi, örtü ve bakım sıklığı buna göre ayarlanır.',
          en: 'Near olive groves and vineyards, seasonal load rises; skimmer capacity, cover use and maintenance frequency are adjusted to match.',
        },
      },
    ],
    neighborhoods: ['Urla İskele', 'Zeytineli', 'Bademler', 'Kuşçular', 'Barbaros'],
    faq: [
      {
        q: { tr: "Urla'da havuz yapımı ve bakımı hizmeti veriyor musunuz?", en: 'Do you provide pool construction and maintenance in Urla?' },
        a: {
          tr: "Evet. Urla merkez, İskele, Zeytineli, Bademler ve çevresindeki bağ evi ve villalarda havuz inşaatı, renovasyon ve sözleşmeli bakım hizmeti veriyoruz.",
          en: 'Yes. We provide pool construction, renovation and contracted maintenance for vineyard houses and villas in central Urla, İskele, Zeytineli, Bademler and the surrounding area.',
        },
      },
      {
        q: { tr: "Urla'da geniş arazide havuzun yeri nasıl belirlenir?", en: 'How is the pool sited on a large plot in Urla?' },
        a: {
          tr: 'Güneşin günlük hareketi, hâkim rüzgâr, evden görüş aksı ve tesisat mesafesi birlikte değerlendirilir. Amaç hem gün boyu güneş alan hem de manzaraya açılan bir konum bulmaktır.',
          en: "The sun's daily path, the prevailing wind, the sightline from the house and the plumbing distance are weighed together. The aim is a spot that gets sun all day and opens onto the view.",
        },
      },
      {
        q: { tr: "Urla'da zeytinliğe yakın havuzun bakımı zor mu?", en: 'Is a pool near an olive grove in Urla hard to maintain?' },
        a: {
          tr: 'Mevsimsel yaprak ve polen yükü bakım sıklığını artırır. Yeterli skimmer kapasitesi, havuz örtüsü ve düzenli bakım ile su berrak ve dengeli kalır.',
          en: 'Seasonal leaf and pollen loads raise maintenance frequency. With enough skimmer capacity, a pool cover and regular service, the water stays clear and balanced.',
        },
      },
    ],
    projectSlugs: [],
    geo: { lat: 38.3228, lng: 26.7647 },
  },
];

export function getDistrict(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug);
}

export type LocalizedDistrict = {
  slug: string;
  name: string;
  loc: string;
  h1: string;
  eyebrow: string;
  seoTitle: string;
  seoDescription: string;
  cover: string;
  intro: string;
  localContext: string;
  localNotes: { title: string; desc: string }[];
  neighborhoods: string[];
  faq: { q: string; a: string }[];
  projectSlugs: string[];
  geo?: { lat: number; lng: number };
};

export function localizeDistrict(d: District, locale: string): LocalizedDistrict {
  const pick = (x: L) => localize(x, locale);
  return {
    slug: d.slug,
    name: pick(d.name),
    loc: pick(d.loc),
    h1: pick(d.h1),
    eyebrow: pick(d.eyebrow),
    seoTitle: pick(d.seoTitle),
    seoDescription: pick(d.seoDescription),
    cover: d.cover,
    intro: pick(d.intro),
    localContext: pick(d.localContext),
    localNotes: d.localNotes.map((n) => ({ title: pick(n.title), desc: pick(n.desc) })),
    neighborhoods: d.neighborhoods,
    faq: d.faq.map((f) => ({ q: pick(f.q), a: pick(f.a) })),
    projectSlugs: d.projectSlugs,
    geo: d.geo,
  };
}
