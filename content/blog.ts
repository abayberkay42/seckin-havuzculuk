import { getProduct } from '@/content/catalogue';
import { getDistrict } from '@/content/districts';

/** Only static service pages are ever linked as "related service". */
type ServiceHref = '/construction' | '/maintenance';

/**
 * Blog / Günce content. Bilingual like projects & catalogue (L = {tr, en}).
 * Fixed metadata (META) lives here; the prose (PROSE) is authored per article.
 * Posts render at /blog/[slug] with BlogPosting + FAQPage + Breadcrumb schema.
 */

type L = { tr: string; en: string };
export type BlogSection = { heading: L; paragraphs: L[]; bullets?: L[] };
type QA = { q: L; a: L };

type Meta = {
  slug: string;
  category: L;
  /** ISO date; hand-set (Date.now() is unavailable and churns freshness). */
  date: string;
  updated: string;
  readMinutes: number;
  cover: string;
  relatedService: ServiceHref;
  relatedServiceLabel: L;
};

type Prose = {
  title: L;
  seoTitle: L;
  excerpt: L;
  intro: L;
  sections: BlogSection[];
  faq: QA[];
};

export type Post = Meta & Prose;

const SERVICE_LABEL = {
  '/construction': { tr: 'Havuz İnşaatı', en: 'Pool Construction' },
  '/maintenance': { tr: 'Havuz Bakımı', en: 'Pool Maintenance' },
} as const;

const META: Meta[] = [
  {
    slug: 'havuz-bakimi-nasil-yapilir',
    category: { tr: 'Bakım', en: 'Maintenance' },
    date: '2026-06-10',
    updated: '2026-06-10',
    readMinutes: 7,
    cover: '/havuz-bakimi-servis.webp',
    relatedService: '/maintenance',
    relatedServiceLabel: SERVICE_LABEL['/maintenance'],
  },
  {
    slug: 'sonsuzluk-havuzu-nedir',
    category: { tr: 'Tasarım', en: 'Design' },
    date: '2026-06-24',
    updated: '2026-06-24',
    readMinutes: 8,
    cover: '/proj-deniz-terasi.webp',
    relatedService: '/construction',
    relatedServiceLabel: SERVICE_LABEL['/construction'],
  },
  {
    slug: 'havuz-suyu-yesermesi',
    category: { tr: 'Bakım', en: 'Maintenance' },
    date: '2026-07-01',
    updated: '2026-07-01',
    readMinutes: 6,
    cover: '/havuz-bakimi-v2.webp',
    relatedService: '/maintenance',
    relatedServiceLabel: SERVICE_LABEL['/maintenance'],
  },
  {
    slug: 'cesme-alacati-havuz-yapimi',
    category: { tr: 'İnşaat', en: 'Construction' },
    date: '2026-07-08',
    updated: '2026-07-08',
    readMinutes: 8,
    cover: '/havuz-insaati.webp',
    relatedService: '/construction',
    relatedServiceLabel: SERVICE_LABEL['/construction'],
  },
  {
    slug: 'fiber-havuz-mu-beton-havuz-mu',
    category: { tr: 'İnşaat', en: 'Construction' },
    date: '2026-07-15',
    updated: '2026-07-15',
    readMinutes: 7,
    cover: '/proj-antrasit-renovasyon.webp',
    relatedService: '/construction',
    relatedServiceLabel: SERVICE_LABEL['/construction'],
  },
  {
    slug: 'havuzu-kisa-hazirlama',
    category: { tr: 'Bakım', en: 'Maintenance' },
    date: '2026-07-22',
    updated: '2026-07-22',
    readMinutes: 6,
    cover: '/proj-tundra-gri.webp',
    relatedService: '/maintenance',
    relatedServiceLabel: SERVICE_LABEL['/maintenance'],
  },
  {
    slug: 'havuz-bakim-fiyatlari-izmir',
    category: { tr: 'Bakım', en: 'Maintenance' },
    date: '2026-09-25',
    updated: '2026-09-25',
    readMinutes: 7,
    cover: '/services-bg.webp',
    relatedService: '/maintenance',
    relatedServiceLabel: SERVICE_LABEL['/maintenance'],
  },
  {
    slug: 'havuz-yapim-maliyeti-izmir',
    category: { tr: 'İnşaat', en: 'Construction' },
    date: '2026-09-25',
    updated: '2026-09-25',
    readMinutes: 7,
    cover: '/havuz-insaati-v2.webp',
    relatedService: '/construction',
    relatedServiceLabel: SERVICE_LABEL['/construction'],
  },
  {
    slug: 'havuz-su-kacagi-tamiri',
    category: { tr: 'Bakım', en: 'Maintenance' },
    date: '2026-09-25',
    updated: '2026-09-25',
    readMinutes: 7,
    cover: '/renovasyon-v2.webp',
    relatedService: '/maintenance',
    relatedServiceLabel: SERVICE_LABEL['/maintenance'],
  },
  {
    slug: 'havuz-kimyasallari-rehberi',
    category: { tr: 'Bakım', en: 'Maintenance' },
    date: '2026-09-25',
    updated: '2026-09-25',
    readMinutes: 10,
    cover: '/products-bg.webp',
    relatedService: '/maintenance',
    relatedServiceLabel: SERVICE_LABEL['/maintenance'],
  },
  {
    slug: 'havuz-renovasyonu-rehberi',
    category: { tr: 'İnşaat', en: 'Construction' },
    date: '2026-09-25',
    updated: '2026-09-25',
    readMinutes: 7,
    cover: '/renovasyon.webp',
    relatedService: '/construction',
    relatedServiceLabel: SERVICE_LABEL['/construction'],
  },
  {
    slug: 'havuz-ph-klor-dozaj',
    category: { tr: 'Bakım', en: 'Maintenance' },
    date: '2026-09-25',
    updated: '2026-09-25',
    readMinutes: 8,
    cover: '/proj-ege-kiyisi.webp',
    relatedService: '/maintenance',
    relatedServiceLabel: SERVICE_LABEL['/maintenance'],
  },
  {
    slug: 'havuz-bahar-acilisi',
    category: { tr: 'Bakım', en: 'Maintenance' },
    date: '2026-09-25',
    updated: '2026-09-25',
    readMinutes: 8,
    cover: '/proj-bahce-yenileme.webp',
    relatedService: '/maintenance',
    relatedServiceLabel: SERVICE_LABEL['/maintenance'],
  },
  {
    slug: 'urla-seferihisar-havuz-yaptirma',
    category: { tr: 'İnşaat', en: 'Construction' },
    date: '2026-09-25',
    updated: '2026-09-25',
    readMinutes: 7,
    cover: '/proj-zeytinlik.webp',
    relatedService: '/construction',
    relatedServiceLabel: SERVICE_LABEL['/construction'],
  },
  {
    slug: 'havuz-derz-fayans-yenileme',
    category: { tr: 'İnşaat', en: 'Construction' },
    date: '2026-09-25',
    updated: '2026-09-25',
    readMinutes: 7,
    cover: '/proj-gizli-savakli-cover.webp',
    relatedService: '/construction',
    relatedServiceLabel: SERVICE_LABEL['/construction'],
  },
  {
    slug: 'havuz-test-kiti-karsilastirma',
    category: { tr: 'Bakım', en: 'Maintenance' },
    date: '2026-09-25',
    updated: '2026-09-25',
    readMinutes: 8,
    cover: '/products/test-colorq-dijital.webp',
    relatedService: '/maintenance',
    relatedServiceLabel: SERVICE_LABEL['/maintenance'],
  },
  {
    slug: 'havuz-suyu-bulanikligi-kokusu',
    category: { tr: 'Bakım', en: 'Maintenance' },
    date: '2026-09-25',
    updated: '2026-09-25',
    readMinutes: 7,
    cover: '/proj-ates-cukuru.webp',
    relatedService: '/maintenance',
    relatedServiceLabel: SERVICE_LABEL['/maintenance'],
  },
  {
    slug: 'havuz-pompasi-arizalari',
    category: { tr: 'Bakım', en: 'Maintenance' },
    date: '2026-09-25',
    updated: '2026-09-25',
    readMinutes: 7,
    cover: '/havuz-insaati-hero.webp',
    relatedService: '/maintenance',
    relatedServiceLabel: SERVICE_LABEL['/maintenance'],
  },
];

// PROSE_START — real article content, authored per slug. Replaced wholesale.
const PROSE: Record<string, Prose> = {
  "cesme-alacati-havuz-yapimi": {
    "title": {
      "tr": "Çeşme ve Alaçatı'da Havuz Yapımı: Süreç, Ruhsat ve Dikkat Edilmesi Gerekenler",
      "en": "Building a Pool in Çeşme and Alaçatı: Process, Permits and Key Considerations"
    },
    "seoTitle": {
      "tr": "Çeşme Havuz Yapımı Rehberi",
      "en": "Çeşme Pool Construction Guide"
    },
    "excerpt": {
      "tr": "Çeşme ve Alaçatı'da havuz yapımı: zemin etüdünden ruhsata, kaplamadan teslime kadar sürecin tamamı ve yarımadaya özgü ipuçları.",
      "en": "Building a pool in Çeşme and Alaçatı: the full process from soil survey to permits, finishing and handover, plus peninsula-specific advice."
    },
    "intro": {
      "tr": "Çeşme ve Alaçatı'da havuz yaptırmak, doğru kurgulandığında villanızın en çok yaşanan alanına dönüşür. Ancak yarımadanın kayalık zemini, tuzlu deniz havası ve yoğun yaz temposu, süreci baştan doğru planlamayı gerektirir. Bu rehberde adım adım süreci, ruhsat konusunu ve yerel koşullarda dikkat edilmesi gerekenleri aktarıyoruz.",
      "en": "Building a pool in Çeşme and Alaçatı, when planned correctly, becomes the most-lived space of your villa. Yet the peninsula's rocky ground, salty sea air and intense summer rhythm demand careful planning from the outset. This guide walks through the process step by step, the permit question, and what to watch for in local conditions."
    },
    "sections": [
      {
        "heading": {
          "tr": "Çeşme'de havuz yapım süreci hangi adımlardan oluşur?",
          "en": "What steps make up the pool construction process in Çeşme?"
        },
        "paragraphs": [
          {
            "tr": "Çeşme'de havuz yapım süreci, sağlıklı ilerlemesi için belirli bir sırayı takip eder. Süreç, arazi ve zemin etüdüyle başlar; ardından 3B tasarım ve mühendislik hesaplarıyla havuzun formu, taşma tipi ve tesisatı netleşir. Bu aşamadan sonra ruhsat ve imar durumu kontrol edilir, kazı yapılır ve gunit ya da betonarme iskelet oluşturulur. İzolasyon, tesisat ve kaplama tamamlandığında havuz devreye alınır, testleri yapılır ve size teslim edilir. Son olarak düzenli bakım devreye girer. Alaçatı ve Ilıca'daki villa projelerinde bu adımların her birini sahaya özel koşullara göre planlamak, sonradan çıkabilecek sürprizleri en aza indirir.",
            "en": "In Çeşme, the pool construction process follows a defined sequence to progress soundly. It begins with a land and soil survey; then 3D design and engineering calculations settle the pool's form, overflow type and plumbing. After this, the permit and zoning status are checked, excavation is carried out, and a gunite or reinforced-concrete shell is formed. Once waterproofing, plumbing and finishing are complete, the pool is commissioned, tested and handed over to you. Finally, regular maintenance begins. In villa projects across Alaçatı and Ilıca, planning each of these steps to the site's specific conditions minimizes surprises later on."
          }
        ]
      },
      {
        "heading": {
          "tr": "Alaçatı'da havuz için ruhsat gerekir mi?",
          "en": "Do you need a permit for a pool in Alaçatı?"
        },
        "paragraphs": [
          {
            "tr": "Alaçatı'da havuz yaptırmadan önce ruhsat ve imar durumunu netleştirmek şarttır. Belediyeye, parselin imar durumuna ve yapının konumuna göre havuz için ruhsat veya bildirim gerekebilir; bu koşullar bölgeden bölgeye ve parselden parsele değişir. Bu nedenle en doğru yaklaşım, projeye başlamadan önce ilgili belediyeden yapı ve ruhsat durumunu resmi olarak öğrenmektir. İmar durumu, çekme mesafeleri ve varsa koruma statüleri havuzun konumunu ve boyutunu doğrudan etkiler. Süreci ruhsat tarafı belirsizken başlatmak, ilerleyen aşamalarda maliyet ve zaman kaybına yol açabilir. Çeşme yarımadasındaki deneyimimiz, bu adımı proje başında doğru yönetmenin önemini gösteriyor.",
            "en": "Before building a pool in Alaçatı, it is essential to clarify the permit and zoning status. Depending on the municipality, the parcel's zoning status and the structure's location, a pool may require a permit or a notification; these conditions vary from area to area and from parcel to parcel. The soundest approach is therefore to formally confirm the building and permit status with the relevant municipality before the project begins. Zoning status, setback distances and any conservation designations directly affect the pool's location and size. Starting while the permit side is uncertain can lead to cost and time losses at later stages. Our experience across the Çeşme peninsula shows how important it is to manage this step correctly at the project's outset."
          }
        ]
      },
      {
        "heading": {
          "tr": "Çeşme yarımadasının zemini havuz yapımını nasıl etkiler?",
          "en": "How does the Çeşme peninsula's terrain affect pool construction?"
        },
        "paragraphs": [
          {
            "tr": "Çeşme yarımadasının kayalık ve çoğu zaman eğimli zemini, havuz yapımında en belirleyici yerel koşuldur. Sert kaya zeminlerde kazı daha uzun sürebilir ve özel ekipman gerektirir; eğimli arazilerde ise istinat duvarları ve doğru statik çözümler zorunlu hâle gelebilir. Öte yandan bu eğim, aslında bir avantaja dönüştürülebilir: sonsuzluk (taşma/infinity) havuzları için ideal bir zemin sunar ve manzarayla suyun birleştiği o etkiyi mümkün kılar. Alaçatı ve Çeşme'deki eğimli parsellerde tasarımı araziye göre kurgulamak, hem güvenli hem de estetik bir sonuç verir. Zemin etüdünün baştan doğru yapılması, bu kararların sağlam temele oturmasını sağlar.",
            "en": "The Çeşme peninsula's rocky and often sloping ground is the most decisive local factor in pool construction. On hard rock, excavation can take longer and require special equipment; on sloping plots, retaining walls and correct structural solutions may become mandatory. On the other hand, this slope can be turned into an advantage: it offers ideal ground for infinity (overflow) pools and makes possible that effect where water meets the horizon. On sloping parcels in Alaçatı and Çeşme, shaping the design around the terrain delivers a result that is both safe and beautiful. A properly conducted soil survey at the start ensures these decisions rest on a solid foundation."
          }
        ]
      },
      {
        "heading": {
          "tr": "Tuzlu deniz havası ve rüzgar için hangi önlemler alınmalı?",
          "en": "What precautions are needed for salty sea air and wind?"
        },
        "paragraphs": [
          {
            "tr": "Çeşme ve Alaçatı'nın tuzlu, nemli deniz havası ve güçlü rüzgarı, havuz malzemesi seçimini doğrudan etkiler. Tuzlu hava, uygun olmayan metal aksamda korozyonu hızlandırdığı için paslanmaz çelik ve deniz koşullarına dayanıklı malzemeler tercih edilmelidir. Aynı şekilde doğru izolasyon, suyun betonarme yapıya ve zemine sızmasını engelleyerek havuzun ömrünü uzatır. Yoğun yaz kullanımı ve rüzgarla taşınan toz-yaprak yükü ise güçlü bir filtrasyon sistemini ve otomasyonu önemli kılar. Bu koşullara uygun seçilen malzeme ve ekipman, ilk yıl kadar onuncu yılda da sorunsuz bir havuz demektir.",
            "en": "The salty, humid sea air and strong winds of Çeşme and Alaçatı directly shape the choice of pool materials. Because salty air accelerates corrosion in unsuitable metal fittings, stainless steel and marine-grade materials should be preferred. Likewise, correct waterproofing extends the pool's life by preventing water from seeping into the concrete structure and the ground. The intense summer use and the load of dust and leaves carried by the wind make a strong filtration system and automation important. Materials and equipment chosen to suit these conditions mean a trouble-free pool in the tenth year just as much as the first."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz yapımında hangi noktalara dikkat edilmeli?",
          "en": "What points deserve attention during pool construction?"
        },
        "paragraphs": [
          {
            "tr": "Çeşme ve Alaçatı'da havuz yaptırırken doğru kararlar, projenin uzun ömürlü ve keyifli olmasını belirler. Aşağıdaki başlıklar, süreç boyunca en çok fark yaratan noktalardır:",
            "en": "When building a pool in Çeşme and Alaçatı, the right decisions determine whether the project is durable and enjoyable. The points below make the biggest difference throughout the process:"
          },
          {
            "tr": "Kararların temelinde her zaman zemin etüdü, doğru mühendislik ve kaliteli malzeme yer alır; görsel tercihler bu sağlam altyapının üzerine kurulur.",
            "en": "At the base of every decision lie the soil survey, sound engineering and quality materials; aesthetic choices are built on top of this solid foundation."
          }
        ],
        "bullets": [
          {
            "tr": "Zemin ve eğim: kazı, istinat ve statik çözümlerin baştan planlanması.",
            "en": "Ground and slope: planning excavation, retaining and structural solutions from the start."
          },
          {
            "tr": "Taşma tipi: sonsuzluk, taşmalı ya da skimmerli sistem tercihinin manzaraya göre seçimi.",
            "en": "Overflow type: choosing an infinity, overflow or skimmer system to suit the view."
          },
          {
            "tr": "İzolasyon kalitesi: su sızıntısını ve ileride onarım maliyetini önleyen kritik katman.",
            "en": "Waterproofing quality: the critical layer that prevents leaks and future repair costs."
          },
          {
            "tr": "Filtrasyon ve otomasyon: yoğun yaz kullanımına dayanacak güçte kurgulanması.",
            "en": "Filtration and automation: sized to withstand intense summer use."
          },
          {
            "tr": "Malzeme dayanıklılığı: tuzlu deniz havasına uygun paslanmaz ve kaliteli kaplama seçimi.",
            "en": "Material durability: choosing stainless and quality finishes suited to salty sea air."
          }
        ]
      },
      {
        "heading": {
          "tr": "Çeşme'de havuz yapımı ne kadar sürer ve ne zaman planlanmalı?",
          "en": "How long does pool construction in Çeşme take, and when should it be planned?"
        },
        "paragraphs": [
          {
            "tr": "Çeşme'de bir havuzun yapımı, projeye göre tipik olarak 8–14 hafta arasında sürer. Bu süre; havuzun ölçüsü, taşma tipi, kaplama seçimi, zemin koşulları ve donanım detaylarına göre değişir. Kayalık zeminde kazının uzaması ya da özel bir tasarım, süreyi doğal olarak etkiler. Maliyet de aynı değişkenlere bağlı olduğundan tek bir rakam vermek doğru olmaz; her proje kendi koşullarına göre fiyatlanır. Zamanlama açısından en önemli konu, yoğun turizm ve yaz sezonudur: Çeşme, Alaçatı ve Ilıca'da havuzun yaza hazır olması için çalışmaların sonbahar veya kış aylarında başlaması idealdir. Böylece villanız sezona tam kapasite girer.",
            "en": "In Çeşme, building a pool typically takes between 8 and 14 weeks, depending on the project. This duration varies with the pool's size, overflow type, finish selection, ground conditions and equipment details. Extended excavation on rocky ground or a bespoke design naturally affects the timeline. Because cost depends on the same variables, quoting a single figure would be misleading; each project is priced according to its own conditions. In terms of timing, the key issue is the intense tourism and summer season: in Çeşme, Alaçatı and Ilıca, it is ideal for work to begin in autumn or winter so the pool is ready for summer. This way your villa enters the season at full capacity."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Çeşme'de havuz yapımı için ruhsat almak zorunda mıyım?",
          "en": "Am I required to obtain a permit to build a pool in Çeşme?"
        },
        "a": {
          "tr": "Belediyeye, parselin imar durumuna ve yapının konumuna göre havuz için ruhsat veya bildirim gerekebilir. Bu koşullar parselden parsele değişir; en doğru yaklaşım, projeye başlamadan önce ilgili belediyeden yapı ve ruhsat durumunu resmi olarak netleştirmektir.",
          "en": "Depending on the municipality, the parcel's zoning status and the structure's location, a pool may require a permit or a notification. These conditions vary from parcel to parcel; the soundest approach is to formally confirm the building and permit status with the relevant municipality before starting the project."
        }
      },
      {
        "q": {
          "tr": "Alaçatı'nın eğimli arazisi havuz için dezavantaj mı?",
          "en": "Is Alaçatı's sloping terrain a disadvantage for a pool?"
        },
        "a": {
          "tr": "Mutlaka değil. Eğim, istinat ve doğru statik çözümler gerektirse de sonsuzluk havuzları için ideal bir zemin sunar. Doğru tasarlandığında bu eğim, manzarayla suyun birleştiği etkileyici bir sonuca ve villaya değer katan bir avantaja dönüşebilir.",
          "en": "Not necessarily. Although a slope requires retaining and correct structural solutions, it offers ideal ground for infinity pools. When designed well, this slope can become a striking result where water meets the horizon and an advantage that adds value to the villa."
        }
      },
      {
        "q": {
          "tr": "Havuzumun yaza hazır olması için ne zaman başlamalıyım?",
          "en": "When should I start so my pool is ready for summer?"
        },
        "a": {
          "tr": "Yapım süresi projeye göre tipik olarak 8–14 hafta olduğundan ve yaz sezonu Çeşme'de çok yoğun geçtiğinden, çalışmaların sonbahar ya da kış aylarında başlaması idealdir. Böylece havuz, turizm sezonu açılmadan tamamlanır ve villanız yaza tam hazır girer.",
          "en": "Since construction typically takes 8 to 14 weeks depending on the project, and summer is very busy in Çeşme, it is ideal for work to begin in autumn or winter. This way the pool is completed before the tourism season opens and your villa enters summer fully ready."
        }
      }
    ]
  },
  "havuz-suyu-yesermesi": {
    "title": {
      "tr": "Havuz Suyu Yeşerdi: Nedenleri ve Adım Adım Çözümü",
      "en": "Green Pool Water: Causes and a Step-by-Step Fix"
    },
    "seoTitle": {
      "tr": "Havuz Suyu Yeşermesi Çözümü",
      "en": "Green Pool Water: The Fix"
    },
    "excerpt": {
      "tr": "Çeşme ve Alaçatı'da havuz suyu yeşermesinin nedenleri ve adım adım çözümü: pH, şok klorlama, algaecide ve filtrasyon.",
      "en": "Why pool water turns green in Çeşme and Alaçatı, plus a step-by-step fix: pH, shock chlorination, algaecide and filtration."
    },
    "intro": {
      "tr": "Sabah havuzun başına gelip suyun bir gecede yeşile döndüğünü görmek, Çeşme ve Alaçatı'daki villa sahiplerinin en sık yaşadığı sorunlardan biridir. Havuz suyu yeşermesi paniğe gerek duymadan, doğru sırayla çözülebilen bir durumdur. Bu yazıda nedenleri ve adım adım çözümü anlatıyoruz.",
      "en": "Walking up to your pool and finding the water has turned green overnight is one of the most common problems villa owners face in Çeşme and Alaçatı. Green pool water is a situation that can be resolved calmly, in the right order. Here we explain the causes and a step-by-step fix."
    },
    "sections": [
      {
        "heading": {
          "tr": "Havuz suyu neden yeşerir?",
          "en": "Why does pool water turn green?"
        },
        "paragraphs": [
          {
            "tr": "Havuz suyu yeşermesinin tek gerçek nedeni yosun (alg) çoğalmasıdır. Suyu yeşile boyayan bu mikroskobik canlılar, dezenfeksiyon zayıfladığı anda hızla ürer. En yaygın tetikleyici yetersiz veya dengesiz klordur; klor tükendiğinde yosun serbestçe büyür. İkinci büyük etken yüksek pH'tır: pH 7,6'nın üzerine çıktığında sudaki klorun etkinliği ciddi biçimde düşer, yani klorunuz olsa bile işini yapamaz. Zayıf filtrasyon, kirli filtre ve yetersiz sirkülasyon da askıda kalan yosun sporlarının çökmesine ve tutunmasına zemin hazırlar. Çeşme ve Alaçatı'nın sıcak, güneşli ve uzun yaz günleri bu sürecı hızlandırır; su sıcaklığı arttıkça yosun bir günden kısa sürede tüm havuzu yeşile çevirebilir.",
            "en": "The only real cause of green pool water is the proliferation of algae. These microscopic organisms that tint the water green multiply rapidly the moment disinfection weakens. The most common trigger is insufficient or unbalanced chlorine; when chlorine is depleted, algae grow freely. The second major factor is high pH: when pH rises above 7.6, the effectiveness of chlorine in the water drops sharply, meaning even the chlorine you have cannot do its job. Weak filtration, a dirty filter and poor circulation also create the conditions for suspended algae spores to settle and take hold. The hot, sunny and long summer days of Çeşme and Alaçatı accelerate this process; as water temperature rises, algae can turn an entire pool green in less than a day."
          }
        ]
      },
      {
        "heading": {
          "tr": "Stabilizatör fazlalığı ve klor kilidi nedir?",
          "en": "What is over-stabilisation and chlorine lock?"
        },
        "paragraphs": [
          {
            "tr": "Havuz suyu yeşermesinin sinsi bir nedeni de stabilizatör, yani siyanürik asit fazlalığıdır. Siyanürik asit klorun güneş altında hızla bozulmasını önleyen faydalı bir kimyasaldır; ancak seviyesi çok yükseldiğinde klorun dezenfeksiyon gücünü adeta kilitler. Bu duruma halk arasında klor kilidi denir: test kiti suda klor gösterse bile, klor yosunu öldüremeyecek kadar etkisizleşmiştir. Özellikle her hafta tablet klor kullanılan havuzlarda siyanürik asit zamanla birikir ve fark edilmeden yükselir. Böyle bir havuz düzenli klorlanıyor görünse de yeşerebilir. Değerlerden şüpheleniyorsanız suyun stabilizatör seviyesini ölçtürmek, bazı durumlarda ise havuzun bir kısmını taze suyla seyreltmek gerekir. Doğru teşhis olmadan sürekli klor eklemek sorunu çözmez.",
            "en": "A more insidious cause of green pool water is over-stabilisation, meaning an excess of cyanuric acid. Cyanuric acid is a helpful chemical that prevents chlorine from breaking down quickly under sunlight; however, when its level rises too high it effectively locks the disinfecting power of chlorine. This is commonly called chlorine lock: even if your test kit shows chlorine in the water, that chlorine has become too ineffective to kill algae. Especially in pools where chlorine tablets are used every week, cyanuric acid accumulates over time and creeps up unnoticed. Such a pool can turn green even though it appears to be chlorinated regularly. If you suspect this, the stabiliser level should be measured, and in some cases part of the pool must be diluted with fresh water. Constantly adding chlorine without a correct diagnosis will not solve the problem."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz suyu yeşermesi adım adım nasıl çözülür?",
          "en": "How do you fix green pool water step by step?"
        },
        "paragraphs": [
          {
            "tr": "Havuz suyu yeşermesini çözmenin anahtarı, kimyasalları doğru sırayla uygulamaktır; adımları atlamak süreyi uzatır ve kimyasal israfına yol açar. Aşağıdaki sıra, hafif yeşilliklerden koyu, bulanık yeşile kadar çoğu vaka için geçerlidir. Önce dengeyi kurar, sonra dezenfekte eder, en son suyu berraklaştırırsınız. Yosun yoğunluğu arttıkça şok dozu ve filtrasyon süresi de artar.",
            "en": "The key to fixing green pool water is applying the chemicals in the correct order; skipping steps prolongs the process and wastes chemicals. The sequence below applies to most cases, from a light green tint to a dark, cloudy green. First you establish balance, then disinfect, and finally clarify the water. As algae density increases, the shock dose and filtration time increase accordingly."
          }
        ],
        "bullets": [
          {
            "tr": "pH'ı dengeleyin: Suyu 7,2–7,6 aralığına çekin ki klor tam etkili olsun.",
            "en": "Balance pH: Bring the water into the 7.2–7.6 range so chlorine works at full strength."
          },
          {
            "tr": "Şok klorlama yapın: Yosun yoğunluğuna göre yüksek doz klor uygulayın, tercihen akşam.",
            "en": "Shock chlorinate: Apply a high dose of chlorine based on algae density, preferably in the evening."
          },
          {
            "tr": "Gerekirse algaecide ekleyin: İnatçı yosun için yosun öldürücü (algaecide) kullanın.",
            "en": "Add algaecide if needed: Use an algaecide for stubborn algae."
          },
          {
            "tr": "Fırçalayın: Havuzun duvarlarını ve tabanını iyice fırçalayarak tutunan yosunu kaldırın.",
            "en": "Brush: Scrub the pool walls and floor thoroughly to dislodge clinging algae."
          },
          {
            "tr": "Çöktürün ve süpürün: Flokülant ile askıdaki partikülleri çöktürüp dibe süpürün.",
            "en": "Flocculate and vacuum: Use a flocculant to settle suspended particles, then vacuum them from the bottom."
          },
          {
            "tr": "Filtreyi uzun süre çalıştırın: Gerekirse ters yıkama (backwash) yapın.",
            "en": "Run the filter for long periods: Backwash if necessary."
          },
          {
            "tr": "Değerleri yeniden dengeleyin: pH, klor ve alkaliniteyi son kez ölçüp ayarlayın.",
            "en": "Rebalance: Measure and adjust pH, chlorine and alkalinity one final time."
          }
        ]
      },
      {
        "heading": {
          "tr": "Yeşil havuz kaç günde berraklaşır?",
          "en": "How many days until a green pool clears?"
        },
        "paragraphs": [
          {
            "tr": "Havuzunuz yeşerdikten sonra suyun tekrar berraklaşması, yosunun ne kadar ilerlediğine ve filtrasyonun gücüne bağlı olarak genellikle birkaç gün sürer. Hafif yeşil bir suda şok klorlama ve sürekli filtrasyonla 24–48 saat içinde belirgin bir düzelme görülür. Suyun dibinin görünmediği koyu yeşil ve bulanık vakalarda ise süreç bir haftaya yaklaşabilir ve şok işleminin tekrarlanması gerekebilir; çünkü ölen yosun suyu bulanık bırakır ve filtrenin bu ölü hücreleri temizlemesi zaman ister. Bu aşamada sabırlı olmak, filtreyi mümkün olduğunca uzun çalıştırmak ve ölü yosun filtreyi doldurdukça ters yıkama yapmak kritiktir. Berraklık geri geldiğinde suyu tekrar dengelemeden yüzülmemelidir. Çeşme ve Alaçatı'daki yoğun sezon havuzlarında, süreci hızlandırmak için profesyonel destek almak en pratik çözümdür.",
            "en": "After your pool turns green, the water clearing again usually takes a few days, depending on how far the algae has advanced and the power of your filtration. In lightly green water, shock chlorination and continuous filtration produce a noticeable improvement within 24–48 hours. In dark green, cloudy cases where you cannot see the pool floor, the process can approach a week and the shock treatment may need to be repeated, because dying algae leaves the water cloudy and the filter needs time to clear these dead cells. At this stage it is critical to be patient, run the filter as long as possible, and backwash as dead algae fills the filter. Once clarity returns, no one should swim before the water is rebalanced. For busy-season pools in Çeşme and Alaçatı, professional support is the most practical way to speed things up."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz suyunun yeşermesi nasıl önlenir?",
          "en": "How do you prevent pool water from turning green?"
        },
        "paragraphs": [
          {
            "tr": "Havuz suyu yeşermesini önlemenin yolu, sorunu çözmekten çok daha kolaydır ve tamamen düzenli bakıma dayanır. Serbest klor seviyesini genellikle 1–3 ppm aralığında tutmak, pH'ı 7,2–7,6 bandında sabitlemek ve filtreyi her gün yeterli süre çalıştırmak yosunun tutunmasına hiçbir zaman fırsat vermez. Haftalık rutinde suyun test edilmesi, sepetlerin ve filtrenin temizlenmesi, gerektiğinde ters yıkama yapılması esastır. Özellikle Çeşme, Alaçatı ve İzmir çevresindeki sıcak yaz aylarında su sıcaklığı ve güneş yosunu tetiklediği için bakım aralığını sıklaştırmak akıllıcadır. Kimyasalların kaliteli ürünlerle ve doğru dozda kullanılması da uzun vadede hem suyu güvenli tutar hem de maliyeti düşürür. Kendi programını yönetmek istemeyen villa sahipleri için düzenli haftalık bakım hizmeti, havuzun tüm sezon berrak kalmasının en güvenli yoludur.",
            "en": "Preventing green pool water is far easier than fixing it, and it rests entirely on regular maintenance. Keeping free chlorine generally in the 1–3 ppm range, holding pH steady in the 7.2–7.6 band, and running the filter for a sufficient time each day never gives algae the chance to take hold. In the weekly routine, testing the water, cleaning the baskets and filter, and backwashing when needed are essential. Especially during the hot summer months around Çeşme, Alaçatı and İzmir, where water temperature and sun trigger algae, it is wise to shorten the maintenance interval. Using quality products at the correct dose also keeps the water safe and lowers costs over the long term. For villa owners who would rather not manage their own schedule, a regular weekly maintenance service is the safest way to keep the pool clear all season."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Yeşermiş havuzda hemen şok klor atmak yeterli mi?",
          "en": "Is throwing in shock chlorine enough for a green pool?"
        },
        "a": {
          "tr": "Genellikle yeterli değildir. Şok klorlama öncesinde pH mutlaka 7,2–7,6 aralığına çekilmelidir; aksi halde yüksek pH klorun etkisini düşürür. Ayrıca fırçalama, flokülant ile çöktürme ve uzun filtrasyon olmadan su berraklaşmaz. Adımların doğru sırayla uygulanması sonucu belirler.",
          "en": "Usually it is not enough. Before shock chlorination, pH must be brought into the 7.2–7.6 range; otherwise high pH weakens the chlorine. Without brushing, flocculation and long filtration, the water will not clear. Applying the steps in the correct order determines the outcome."
        }
      },
      {
        "q": {
          "tr": "Havuzun suyunu tamamen boşaltmam gerekir mi?",
          "en": "Do I need to drain the pool completely?"
        },
        "a": {
          "tr": "Çoğu yeşerme vakasında suyu boşaltmak gerekmez; şok klorlama, algaecide ve filtrasyonla su geri kazanılır. Tam boşaltım yalnızca çok yüksek stabilizatör (siyanürik asit) birikimi veya onarılamayacak kadar kirli su gibi özel durumlarda düşünülür. Karar suyun test sonuçlarına göre, projeye göre değişir.",
          "en": "In most green-water cases draining is not necessary; the water is recovered with shock chlorination, algaecide and filtration. A full drain is only considered in special situations such as very high stabiliser (cyanuric acid) build-up or water too contaminated to recover. The decision depends on test results and varies by project."
        }
      },
      {
        "q": {
          "tr": "Havuzum sık sık yeşeriyor, sorun ne olabilir?",
          "en": "My pool turns green often, what could be wrong?"
        },
        "a": {
          "tr": "Tekrarlayan yeşerme genellikle üç nedene işaret eder: yetersiz filtrasyon süresi, sürekli düşük klor veya birikmiş stabilizatör kaynaklı klor kilidi. Çeşme ve Alaçatı'nın sıcak yazlarında bakım aralığı da çok geniş olabilir. Suyun tam analizi ve düzenli haftalık bakım programı kalıcı çözümdür.",
          "en": "Recurring green water usually points to three causes: insufficient filtration time, chronically low chlorine, or chlorine lock from accumulated stabiliser. In the hot summers of Çeşme and Alaçatı, the maintenance interval may also be too wide. A full water analysis and a regular weekly maintenance programme are the lasting solution."
        }
      }
    ]
  },
  "havuzu-kisa-hazirlama": {
    "title": {
      "tr": "Havuzu Kışa Hazırlama (Kışlama) Rehberi",
      "en": "Guide to Winterizing Your Pool"
    },
    "seoTitle": {
      "tr": "Havuz Kışa Hazırlık Rehberi",
      "en": "Pool Winterizing Guide"
    },
    "excerpt": {
      "tr": "Çeşme ve Alaçatı'da havuz kışa hazırlık: su seviyesi, kimyasal denge, tesisat koruması ve örtüyle bahara sağlıklı çıkın.",
      "en": "Pool winterizing in Çeşme and Alaçatı: water level, chemical balance, plumbing protection and covers for a healthy spring."
    },
    "intro": {
      "tr": "Havuz kışa hazırlık, yaz boyunca kullandığınız havuzu, ekipmanı ve suyu bahar açılışına sağlıklı taşımanın en güvenilir yoludur. Çeşme ve Alaçatı'da kışlar ılıman geçse de don ve fırtına riski gerçektir. Doğru yapılan kışlama, hem kaplamayı hem tesisatı korur.",
      "en": "Winterizing your pool is the most reliable way to carry the water, equipment and structure safely through to the spring reopening. Winters in Çeşme and Alaçatı are mild, yet frost and storms remain a real risk. Proper winterizing protects both the lining and the plumbing."
    },
    "sections": [
      {
        "heading": {
          "tr": "Havuz kışa hazırlık neden gereklidir?",
          "en": "Why is winterizing a pool necessary?"
        },
        "paragraphs": [
          {
            "tr": "Havuz kışa hazırlık, kışın kullanılmayan havuzu kontrolsüz bırakmamak için yapılır. Amacı, suyu, kaplamayı ve mekanik ekipmanı bahar açılışına sağlıklı taşımaktır. Durgun ve dengelenmemiş su, kışın yosunlanır, kireç ve leke bırakır; korumasız tesisat ise donma nedeniyle çatlayabilir. Bu yüzden Çeşme ve Alaçatı'daki villa havuzlarında kışlama, isteğe bağlı değil, kaplamayı ve sistemi ciddi masraflardan kurtaran temel bir bakım adımıdır. İyi yapılan bir kışlamada bahar açılışı yalnızca örtüyü almak, temizlemek ve sistemleri devreye almaktan ibaret olur; kötü kışlanan bir havuzsa çoğu zaman baştan temizlik, kimyasal şok ve onarım gerektirir. Kısacası kışa hazırlık, gelecek sezonun maliyetini ve işini bugünden azaltan bir yatırımdır.",
            "en": "Winterizing a pool exists so that an unused pool is never left unattended over winter. Its purpose is to carry the water, the lining and the mechanical equipment safely into spring. Still, unbalanced water grows algae and leaves scale and stains, while unprotected plumbing can crack from freezing. For villa pools in Çeşme and Alaçatı, winterizing is therefore not optional but a core maintenance step that spares the lining and system from serious costs. When done well, spring reopening means only removing the cover, cleaning and restarting the systems; a poorly winterized pool usually needs full cleaning, shock chemicals and repairs. In short, winter preparation is an investment that reduces next season's cost and effort today."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz suyu kışın tamamen boşaltılmalı mı?",
          "en": "Should pool water be fully drained in winter?"
        },
        "paragraphs": [
          {
            "tr": "Hayır, havuz suyu kışın tamamen boşaltılmamalıdır. Bu, kışa hazırlıkta en sık yapılan hatadır. Tamamen boş bir havuz, zemin suyu basıncına ve dona karşı savunmasız kalır; özellikle beton ve gunit havuzlarda kaplama zamanla kabarabilir, çatlayabilir ya da yerinden oynayabilir. Doğru yöntem, suyu boşaltmak değil, seviyesini savak veya skimmer ağzının biraz altına indirmektir. Bu sayede havuz kütlesi yerinde kalır, tesisat hattındaki su ise donma riskinden uzaklaştırılır. Çeşme ve Alaçatı gibi kışı ılıman geçen bölgelerde bile bu kural değişmez; su, havuzun yapısal dengesini koruyan bir ağırlık görevi görür. Suyu tümüyle boşaltmak yerine değerlerini dengeleyip seviyesini ayarlamak, hem kaplamayı hem de bütçenizi korur.",
            "en": "No, pool water should not be fully drained in winter. This is the most common winterizing mistake. A completely empty pool is defenceless against groundwater pressure and frost; in concrete and gunite pools especially, the lining can bulge, crack or shift over time. The correct method is not to empty the water but to lower it slightly below the overflow or skimmer mouth. This keeps the pool's mass in place while moving water in the plumbing lines out of freezing risk. Even in mild-wintered areas like Çeşme and Alaçatı this rule holds; the water acts as a weight that preserves the pool's structural balance. Rather than draining fully, balancing the values and setting the level protects both the lining and your budget."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz kışa hazırlık adımları nelerdir?",
          "en": "What are the steps to winterize a pool?"
        },
        "paragraphs": [
          {
            "tr": "Havuz kışa hazırlık, belirli bir sırayla yapıldığında en verimli sonucu verir. Her adım bir sonrakinin sağlıklı işlemesini sağlar; bu yüzden temizlikten örtüye kadar sıra atlanmamalıdır. Aşağıdaki adımlar, Çeşme ve Alaçatı'daki villa havuzları için tipik bir kışlama sürecini özetler; havuzun tipi ve ekipmanına göre detaylar projeye göre değişir.",
            "en": "Winterizing a pool gives the best result when done in a set order. Each step lets the next work properly, so nothing from cleaning to covering should be skipped. The steps below summarise a typical winterizing process for villa pools in Çeşme and Alaçatı; details vary by project depending on pool type and equipment."
          }
        ],
        "bullets": [
          {
            "tr": "Havuzu ve filtreyi iyice temizleyin; dip, duvar ve su hattındaki kir ve yosunu alın.",
            "en": "Clean the pool and filter thoroughly; remove dirt and algae from the floor, walls and waterline."
          },
          {
            "tr": "Su değerlerini dengeleyin: pH 7.2–7.6 aralığına, klor uygun seviyeye getirin.",
            "en": "Balance the water values: bring pH to 7.2–7.6 and chlorine to the proper level."
          },
          {
            "tr": "Su seviyesini savak/skimmer ağzının altına indirin.",
            "en": "Lower the water level below the overflow/skimmer mouth."
          },
          {
            "tr": "Kışlık kimyasal (kış koruyucu/algaecide) uygulayın.",
            "en": "Apply winter chemicals (winterizer/algaecide)."
          },
          {
            "tr": "Pompa, filtre ve tesisatı boşaltıp donmaya karşı koruma altına alın (hava yastığı, gizli tapa vb.).",
            "en": "Drain the pump, filter and plumbing and protect them against freezing (air pillow, plugs, etc.)."
          },
          {
            "tr": "Havuz yüzeyini kışlık örtü veya brandayla kapatın.",
            "en": "Cover the pool surface with a winter cover or tarpaulin."
          },
          {
            "tr": "Kış boyunca havuzu periyodik olarak kontrol edin.",
            "en": "Check the pool periodically through the winter."
          }
        ]
      },
      {
        "heading": {
          "tr": "Kışlamada su değerleri ve kimyasal denge nasıl olmalı?",
          "en": "What water values and chemical balance are needed for winterizing?"
        },
        "paragraphs": [
          {
            "tr": "Kışa hazırlıkta su değerlerini dengelemek, uzun kış aylarında suyu berrak ve sağlıklı tutmanın anahtarıdır. Havuzu kapatmadan önce pH değeri 7.2 ile 7.6 aralığına getirilmeli, klor seviyesi uygun aralığa ayarlanmalıdır. Dengeli su, kireç birikimini ve metal korozyonunu yavaşlatır; asidik ya da bazik kalan su ise kaplamada leke ve donuklaşmaya yol açar. Değerler oturduktan sonra kışlık koruyucu kimyasal ve algaecide (yosun önleyici) uygulanır; bunlar su durgunken yosun ve bakteri oluşumunu baskılar. Çeşme ve Alaçatı'da güneşli kış günleri suyu ısıtıp yosunlanmayı tetikleyebildiği için bu koruma özellikle önemlidir. Doğru kimyasal denge, bahar açılışında yalnızca küçük bir düzeltmeyle havuzun yeniden kullanıma hazır olmasını sağlar.",
            "en": "Balancing the water values is the key to keeping water clear and healthy through the long winter months. Before closing the pool, pH should be brought to between 7.2 and 7.6 and chlorine set to its proper range. Balanced water slows scale build-up and metal corrosion, while water left acidic or alkaline causes staining and dullness on the lining. Once the values settle, a winter protective chemical and an algaecide are applied; these suppress algae and bacteria while the water is still. In Çeşme and Alaçatı, sunny winter days can warm the water and trigger algae, so this protection matters especially. Correct chemical balance means the pool needs only a small adjustment at spring reopening to be ready for use again."
          }
        ]
      },
      {
        "heading": {
          "tr": "Ege kıyısında don ve fırtınaya karşı tesisat nasıl korunur?",
          "en": "How is plumbing protected against frost and storms on the Aegean coast?"
        },
        "paragraphs": [
          {
            "tr": "Ege kıyısında kışlar ılıman geçse de gece donları ve şiddetli fırtınalar tesisat için gerçek bir tehdittir. Havuz kışa hazırlıkta en kritik adımlardan biri, pompa, filtre ve boru hatlarındaki suyun boşaltılarak donmaya karşı korunmasıdır. Hatta kalan su donunca genleşir ve boruları, pompa gövdesini ya da filtreyi çatlatabilir; bu da baharda maliyetli onarımlar demektir. Bunu önlemek için hatlar boşaltılır, gerekli noktalara hava yastığı, gizli tapa ve dondurmaz koruma uygulanır. Alaçatı ve Çeşme'nin rüzgârlı kışlarında fırtına, örtünün altına yaprak ve tuz taşıyabildiği için örtünün sağlam sabitlenmesi de bu adımın parçasıdır. Tesisatını doğru koruyan bir havuz, ılıman bir kışta bile bahara hasarsız çıkar; korumasız bir sistem ise tek bir don gecesinde zarar görebilir.",
            "en": "Although winters on the Aegean coast are mild, night frosts and fierce storms are a real threat to the plumbing. One of the most critical winterizing steps is draining the water from the pump, filter and pipe lines to protect them against freezing. Water left in the lines expands when it freezes and can crack pipes, the pump body or the filter, meaning costly repairs in spring. To prevent this, lines are drained and air pillows, plugs and anti-freeze protection are applied at the right points. In the windy winters of Alaçatı and Çeşme, storms can drive leaves and salt under the cover, so fixing the cover firmly is part of this step too. A pool with properly protected plumbing comes through even a mild winter undamaged, while an unprotected system can be harmed in a single frosty night."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuzu profesyonele kışlatmak neden mantıklı?",
          "en": "Why does professional winterizing make sense?"
        },
        "paragraphs": [
          {
            "tr": "Havuz kışa hazırlık, doğru sırayla ve doğru ürünlerle yapıldığında değer kazanan bir işlemdir; tek bir atlanmış adım bile baharda büyük bir masrafa dönüşebilir. Tesisatın eksik boşaltılması, yanlış su seviyesi ya da dengesiz kimyasal, kaplamada ve ekipmanda kalıcı hasar bırakabilir. Bir bakım sözleşmesi kapsamında profesyonel kışlama, tüm adımların uzman elinden geçmesini ve kış boyunca periyodik kontrolün yapılmasını güvence altına alır. Seçkin Havuzculuk olarak Çeşme, Alaçatı, Ilıca, Urla ve çevresindeki villa havuzlarında kışlamayı, temizlikten örtüye ve bahar açılışına kadar bütünsel bir hizmet olarak ele alıyoruz. Böylece havuz sahibi kış boyunca havuzunu düşünmek zorunda kalmaz; bahar geldiğinde havuz, ilk günkü berraklığıyla yeniden kullanıma hazır olur. Detaylar ve süre havuzun tipine göre değişir.",
            "en": "Winterizing a pool is a task that pays off when done in the right order with the right products; a single skipped step can turn into a large expense in spring. Under-draining the plumbing, an incorrect water level or unbalanced chemistry can leave permanent damage on the lining and equipment. Under a maintenance contract, professional winterizing guarantees that every step passes through expert hands and that periodic checks are carried out through the winter. At Seçkin Havuzculuk, we treat winterizing villa pools across Çeşme, Alaçatı, Ilıca, Urla and the surrounding area as a complete service, from cleaning to covering and spring reopening. That way the pool owner need not think about the pool all winter; when spring arrives, it is ready for use again with its original clarity. Details and duration vary by pool type."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Havuz kışa hazırlık ne zaman yapılmalı?",
          "en": "When should a pool be winterized?"
        },
        "a": {
          "tr": "Havuz kışa hazırlık, havuzun düzenli kullanımı bittikten ve su sıcaklığı belirgin şekilde düştükten sonra, genellikle sonbaharın sonlarında yapılır. Çeşme ve Alaçatı'da ılıman iklim nedeniyle zamanlama esnektir; önemli olan ilk don ve fırtınalar gelmeden tesisatı korumak ve örtüyü takmaktır. Kesin tarih projeye göre değişir.",
          "en": "A pool should be winterized after regular use ends and water temperature drops noticeably, usually in late autumn. In Çeşme and Alaçatı the mild climate makes timing flexible; what matters is protecting the plumbing and fitting the cover before the first frosts and storms arrive. The exact date varies by project."
        }
      },
      {
        "q": {
          "tr": "Kışın havuz suyu boşaltılırsa ne olur?",
          "en": "What happens if pool water is drained in winter?"
        },
        "a": {
          "tr": "Kışın havuz suyu tamamen boşaltılırsa havuz, zemin suyu basıncına ve dona karşı korumasız kalır. Özellikle beton ve gunit havuzlarda kaplama kabarabilir, çatlayabilir veya yerinden oynayabilir. Bu yüzden su boşaltılmaz; seviyesi savak/skimmer altına indirilir ve havuz kütlesi yapısal ağırlık olarak yerinde bırakılır.",
          "en": "If pool water is fully drained in winter, the pool is left unprotected against groundwater pressure and frost. In concrete and gunite pools especially, the lining can bulge, crack or shift. This is why the water is not drained; its level is lowered below the overflow/skimmer and the pool's mass is left in place as structural weight."
        }
      }
    ]
  },
  "fiber-havuz-mu-beton-havuz-mu": {
    "title": {
      "tr": "Fiber Havuz mu, Beton (Gunit) Havuz mu? Kapsamlı Karşılaştırma",
      "en": "Fiberglass Pool or Concrete (Gunite) Pool? A Complete Comparison"
    },
    "seoTitle": {
      "tr": "Fiber Havuz Beton Havuz Farkı",
      "en": "Fiberglass vs Gunite Pool Difference"
    },
    "excerpt": {
      "tr": "Çeşme ve Alaçatı'da fiber havuz beton havuz farkı: kurulum, dayanıklılık, tasarım ve maliyet açısından dürüst karşılaştırma.",
      "en": "Fiberglass vs gunite pool difference in Çeşme and Alaçatı: an honest comparison of installation, durability, design and cost."
    },
    "intro": {
      "tr": "Havuz yaptırmaya karar verdiğinizde ilk karşınıza çıkan seçim genellikle şudur: hazır fiber havuz mu, yoksa yerinde inşa edilen beton (gunit) havuz mu? İkisinin de yeri vardır; doğru tercih arsanıza, bütçenize ve beklediğiniz kalıcılığa bağlıdır. Bu yazıda fiber havuz beton havuz farkını dürüstçe ele alıyoruz.",
      "en": "When you decide to build a pool, the first choice you face is usually this: a ready-made fiberglass pool, or a concrete (gunite) pool built on site? Both have their place; the right choice depends on your plot, your budget and the permanence you expect. Here we look honestly at the fiberglass versus gunite pool difference."
    },
    "sections": [
      {
        "heading": {
          "tr": "Fiber havuz nedir ve nasıl kurulur?",
          "en": "What is a fiberglass pool and how is it installed?"
        },
        "paragraphs": [
          {
            "tr": "Fiber havuz, fiberglas malzemeden fabrikada tek parça kalıp olarak üretilen, sahaya hazır getirilen prefabrik bir havuzdur. Fiber havuzun en belirgin avantajı hızıdır: uygun bir zemin ve drenaj hazırlandıktan sonra kalıp yerine oturtulup bağlantıları tamamlanır ve kurulum çoğu zaman haftalar yerine günler sürer. Yüzeyi jelkot kaplaması sayesinde pürüzsüz ve boşluksuzdur, bu da başlangıçta yosun tutunmasını zorlaştırır. Başlangıç maliyeti büyük ölçüde belirlidir çünkü ürün standarttır. Ancak fiber havuzda zemine doğru oturtma, kum yatağı ve drenaj kritik önemdedir; hatalı montaj zeminde oynama ve gövdede gerilmeye yol açabilir. Çeşme gibi eğimli villa arazilerinde bu hazırlık işçiliği çoğu zaman göz ardı edilmemesi gereken bir kalemdir.",
            "en": "A fiberglass pool is a prefabricated shell moulded in one piece at a factory from fibreglass and delivered ready to the site. Its clearest advantage is speed: once a proper base and drainage are prepared, the shell is set in place and connected, and installation often takes days rather than weeks. Thanks to its gelcoat finish the surface is smooth and seamless, which initially makes it harder for algae to take hold. The starting cost is largely fixed because the product is standardised. However, correct seating on the base, the sand bed and drainage are critical; poor installation can cause ground movement and stress in the shell. On the sloping villa plots common around Çeşme, this preparation work is an item that should never be overlooked."
          }
        ]
      },
      {
        "heading": {
          "tr": "Gunit (beton) havuz nedir ve neden tercih edilir?",
          "en": "What is a gunite (concrete) pool and why is it preferred?"
        },
        "paragraphs": [
          {
            "tr": "Gunit havuz, çelik donatı hasırı üzerine yüksek basınçla püskürtülen özel beton (shotcrete/gunite) ile tamamen sahada inşa edilen bir havuzdur. Bu yöntemin en büyük gücü özgürlüktür: gunit havuz her form, her ölçü ve her derinlikte yapılabilir; sonsuzluk kenarı (infinity), özel geometriler, oturma sekileri ve manzaraya göre şekillendirme mümkündür. Betonarme gövde son derece uzun ömürlüdür ve yıllar sonra gerektiğinde onarılabilir, kaplaması yenilenebilir. Kaplama seçenekleri de geniştir: seramik, cam mozaik veya traverten gibi malzemelerle havuz, villanın mimarisiyle bütünleşen bir tasarım nesnesine dönüşür. Buna karşılık inşa süresi daha uzundur ve genellikle haftalarla ölçülür; maliyet ise seçilen tasarıma, kaplamaya ve ölçüye göre değişir. Alaçatı ve Çeşme'deki lüks villalarda gunit havuz, kalıcılık ve tasarım özgürlüğü aradığınızda öne çıkar.",
            "en": "A gunite pool is built entirely on site with special concrete (shotcrete/gunite) sprayed at high pressure over a steel reinforcement mesh. The greatest strength of this method is freedom: a gunite pool can be made in any shape, any size and any depth; infinity edges, custom geometries, seating ledges and forms shaped to the view are all possible. The reinforced concrete body is extremely long-lived and can be repaired or re-finished years later when needed. Finish options are also broad: with materials such as ceramic, glass mosaic or travertine the pool becomes a design object integrated with the villa's architecture. In return, construction takes longer and is usually measured in weeks; cost varies by the chosen design, finish and size. In the luxury villas of Alaçatı and Çeşme, the gunite pool stands out when you want permanence and design freedom."
          }
        ]
      },
      {
        "heading": {
          "tr": "Fiber havuz beton havuz farkı: madde madde karşılaştırma",
          "en": "Fiberglass vs gunite pool difference: a point-by-point comparison"
        },
        "paragraphs": [
          {
            "tr": "Fiber havuz beton havuz farkını en net gösteren yol, ikisini aynı başlıklar altında yan yana koymaktır. Aşağıdaki liste her iki sistemin de güçlü ve zayıf yönlerini dürüstçe özetler; amaç fiberi küçümsemek değil, doğru arsa ve beklenti için doğru sistemi seçmenize yardımcı olmaktır.",
            "en": "The clearest way to show the fiberglass versus gunite pool difference is to place them side by side under the same headings. The list below honestly summarises the strengths and weaknesses of both systems; the aim is not to dismiss fiberglass, but to help you choose the right system for the right plot and expectation."
          }
        ],
        "bullets": [
          {
            "tr": "Kurulum süresi: Fiber günler; gunit haftalar.",
            "en": "Installation time: fiberglass takes days; gunite takes weeks."
          },
          {
            "tr": "Tasarım özgürlüğü: Fiber hazır ölçü ve formlarla sınırlı; gunit her form, ölçü ve derinlikte serbest.",
            "en": "Design freedom: fiberglass is limited to ready sizes and shapes; gunite is free in any form, size and depth."
          },
          {
            "tr": "Boyut sınırı: Fiber, karayolu nakliyesiyle kısıtlı; gunitte pratik bir boyut sınırı yoktur.",
            "en": "Size limit: fiberglass is constrained by road transport; gunite has no practical size limit."
          },
          {
            "tr": "Yüzey: Fiber jelkot ile pürüzsüz; gunit seramik, cam mozaik veya traverten ile kaplanabilir.",
            "en": "Surface: fiberglass is smooth gelcoat; gunite can be finished in ceramic, glass mosaic or travertine."
          },
          {
            "tr": "Onarım ve yenileme: Fiberde sınırlı; gunit onarılabilir ve kaplaması yenilenebilir.",
            "en": "Repair and renovation: limited on fiberglass; gunite can be repaired and re-finished."
          },
          {
            "tr": "Maliyet: Fiber başlangıçta büyük ölçüde belirli; gunit tasarıma göre değişir.",
            "en": "Cost: fiberglass is largely fixed at the start; gunite varies by design."
          }
        ]
      },
      {
        "heading": {
          "tr": "Hangi durumda fiber havuz mantıklıdır?",
          "en": "When does a fiberglass pool make sense?"
        },
        "paragraphs": [
          {
            "tr": "Fiber havuz her zaman ikinci seçenek değildir; doğru koşullarda son derece pratik bir çözümdür. Küçük veya standart ölçülerde bir havuz istiyorsanız, hızlı bir sonuç bekliyorsanız ve tasarımda özel bir geometri ya da sonsuzluk kenarı gibi beklentiniz yoksa fiber havuz sizin için yeterli olabilir. Düz ve sağlam zeminli, nakliye aracının rahatça ulaşabildiği bir arazi bu sistemi kolaylaştırır. Başlangıç maliyetinin baştan belli olması, bütçesini net tutmak isteyenler için de rahatlatıcıdır. Ancak burada belirleyici olan zemin hazırlığı ve drenajdır: fiber havuzun uzun yıllar sorunsuz kalması, kalıbın doğru oturtulmasına ve suyun tahliyesine bağlıdır. İzmir çevresindeki daha standart bahçelerde fiber, doğru işçilikle güzel bir çözüm sunabilir.",
            "en": "A fiberglass pool is not always the second choice; under the right conditions it is a highly practical solution. If you want a pool in a small or standard size, expect a fast result and have no special expectation such as a custom geometry or an infinity edge, a fiberglass pool may be enough for you. A flat, solid plot that a delivery vehicle can easily reach makes this system easier. Knowing the starting cost up front is also reassuring for those who want to keep their budget clear. What matters most here is base preparation and drainage: a fiberglass pool staying trouble-free for years depends on the shell being seated correctly and on water being drained away. In the more standard gardens around İzmir, fiberglass can offer a fine solution with the right workmanship."
          }
        ]
      },
      {
        "heading": {
          "tr": "Villa ve özel tasarım için neden gunit beton?",
          "en": "Why gunite concrete for villas and custom design?"
        },
        "paragraphs": [
          {
            "tr": "Bir villanın manzarasına, mimarisine ve arazinin eğimine gerçekten uyan bir havuz istiyorsanız, gunit beton havuz size fiberin veremeyeceği bir esneklik sunar. Denize doğru akan bir sonsuzluk kenarı, taşma kanalı, farklı derinlik bölgeleri, geniş oturma sekileri ve villanın taşıyla uyumlu bir kaplama ancak yerinde inşa edilen bir sistemde mümkündür. Bunun ötesinde gunit havuz bir yatırımdır: betonarme gövde onlarca yıl dayanır, gerektiğinde onarılır ve kaplaması yenilenerek havuz baştan yapılmış gibi tazelenir; bu da mülkün değerini korur. Çeşme ve Alaçatı'daki lüks projelerde çoğu villa sahibinin gunit tercih etmesinin nedeni budur. Seçkin Havuzculuk da tam olarak bu kalıcılık ve tasarım özgürlüğü için gunit/betonarme sistemleri tercih eder ve projeleri bu felsefeyle kurgular.",
            "en": "If you want a pool that truly fits your villa's view, its architecture and the slope of the land, a gunite concrete pool offers a flexibility fiberglass cannot. An infinity edge flowing toward the sea, an overflow channel, different depth zones, wide seating ledges and a finish that harmonises with the villa's stone are only possible in a system built on site. Beyond that, a gunite pool is an investment: the reinforced concrete body lasts for decades, is repaired when needed, and is refreshed like new when its finish is renewed, which protects the property's value. This is why most villa owners in the luxury projects of Çeşme and Alaçatı choose gunite. Seçkin Havuzculuk likewise prefers gunite/reinforced-concrete systems precisely for this permanence and design freedom, and shapes its projects around this philosophy."
          }
        ]
      },
      {
        "heading": {
          "tr": "Kararı nasıl vermelisiniz?",
          "en": "How should you make the decision?"
        },
        "paragraphs": [
          {
            "tr": "Karar aslında iki soruya iner: Ne kadar kalıcılık ve ne kadar tasarım özgürlüğü istiyorsunuz? Bütçesi baştan net, küçük veya standart ölçülü, hızlı kurulan bir havuz önceliğinizse ve arsanız buna uygunsa fiber havuz makul bir tercihtir. Buna karşılık özel bir tasarım, manzaraya oturan bir form, uzun ömür ve mülkünüze kattığı değer sizin için önemliyse gunit/beton havuz doğru yoldur. En sağlıklısı, kararı vermeden önce arazinizi, zemininizi ve beklentilerinizi bir uzmanla yerinde değerlendirmektir; çünkü aynı bütçe farklı arsalarda çok farklı sonuçlar verebilir. Çeşme, Alaçatı ve İzmir çevresinde çalışan bir ekip, hangi sistemin sizin arsanıza gerçekten uyduğunu net biçimde söyleyebilir.",
            "en": "The decision really comes down to two questions: how much permanence and how much design freedom do you want? If a pool with a clear upfront budget, a small or standard size and fast installation is your priority and your plot suits it, a fiberglass pool is a reasonable choice. On the other hand, if a custom design, a form that sits with the view, long life and the value it adds to your property matter to you, a gunite/concrete pool is the right path. The soundest approach is to assess your land, your subsoil and your expectations on site with an expert before deciding, because the same budget can produce very different results on different plots. A team working around Çeşme, Alaçatı and İzmir can tell you clearly which system truly suits your plot."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Fiber havuz mu beton havuz mu daha uzun ömürlüdür?",
          "en": "Which lasts longer, a fiberglass or a concrete pool?"
        },
        "a": {
          "tr": "Gunit/beton havuz genel olarak daha uzun ömürlüdür; betonarme gövde onlarca yıl dayanır, gerektiğinde onarılabilir ve kaplaması yenilenebilir. Fiber havuz da doğru zemin ve drenajla uzun yıllar dayanır, ancak gövdesi onarım ve yenilemeye gunit kadar açık değildir. Kalıcılık öncelikse gunit öne çıkar.",
          "en": "A gunite/concrete pool is generally longer-lived; the reinforced body lasts decades, can be repaired when needed and its finish renewed. A fiberglass pool also lasts many years with proper base and drainage, but its shell is not as open to repair and renewal as gunite. If permanence is the priority, gunite stands out."
        }
      },
      {
        "q": {
          "tr": "Fiber havuz beton havuzdan daha mı ucuzdur?",
          "en": "Is a fiberglass pool cheaper than a concrete one?"
        },
        "a": {
          "tr": "Fiber havuzun başlangıç maliyeti çoğunlukla baştan bellidir çünkü ürün standarttır; bu bütçe planlamasını kolaylaştırır. Gunit havuzun maliyeti ise tasarıma, ölçüye ve kaplamaya göre değişir ve projeye göre değişir. Küçük standart bir havuzda fiber daha ekonomik olabilir; özel tasarımlarda karşılaştırma projeye özeldir.",
          "en": "A fiberglass pool's starting cost is usually fixed because the product is standardised, which eases budgeting. A gunite pool's cost varies by design, size and finish and varies by project. For a small standard pool fiberglass can be more economical; for custom designs the comparison is specific to the project."
        }
      },
      {
        "q": {
          "tr": "Sonsuzluk (infinity) kenarlı havuz fiberle yapılabilir mi?",
          "en": "Can an infinity-edge pool be built with fiberglass?"
        },
        "a": {
          "tr": "Sonsuzluk kenarı, özel geometri ve manzaraya göre şekillendirme yerinde inşa edilen gunit/beton sistemlerinin güçlü olduğu alanlardır. Fiber havuz hazır kalıp ölçüleriyle sınırlı olduğundan bu tür özel tasarımlar için uygun değildir. Çeşme ve Alaçatı'daki manzaralı villa havuzlarında infinity kenar için gunit tercih edilir.",
          "en": "Infinity edges, custom geometry and view-shaped forms are areas where on-site gunite/concrete systems are strong. Because a fiberglass pool is limited to ready shell sizes, it is not suitable for such custom designs. For the view-facing villa pools of Çeşme and Alaçatı, gunite is preferred for an infinity edge."
        }
      }
    ]
  },
  "sonsuzluk-havuzu-nedir": {
    "title": {
      "tr": "Sonsuzluk Havuzu Nedir? Maliyeti ve Yapım Süreci",
      "en": "What Is an Infinity Pool? Cost and Construction Process"
    },
    "seoTitle": {
      "tr": "Sonsuzluk Havuzu Nedir, Maliyeti?",
      "en": "Infinity Pool: Cost & Process"
    },
    "excerpt": {
      "tr": "Çeşme ve Alaçatı'da sonsuzluk havuzu nedir, nasıl çalışır, yapım süresi ve maliyetini belirleyen etkenler.",
      "en": "In Çeşme and Alaçatı: what an infinity pool is, how it works, its build time and the factors behind its cost."
    },
    "intro": {
      "tr": "Sonsuzluk havuzu, suyun bir kenardan görünmez biçimde taşarak manzarayla birleştiği havuz tipidir. Çeşme ve Alaçatı'nın deniz manzaralı eğimli arazilerinde etkileyici sonuç verir. Bu yazıda sonsuzluk havuzunun nasıl çalıştığını, yapım sürecini ve maliyetini belirleyen etkenleri açıklıyoruz.",
      "en": "An infinity pool is a design in which water spills invisibly over one edge and appears to merge with the view. On the sea-view slopes of Çeşme and Alaçatı, the effect is striking. Here we explain how an infinity pool works, how it is built and what drives its cost."
    },
    "sections": [
      {
        "heading": {
          "tr": "Sonsuzluk havuzu nedir ve nasıl çalışır?",
          "en": "What is an infinity pool and how does it work?"
        },
        "paragraphs": [
          {
            "tr": "Sonsuzluk havuzu, en az bir kenarında su seviyesinin kaplama kotuyla aynı hizada tutulduğu ve suyun bu taşma kenarından ince bir film hâlinde döküldüğü havuz tipidir. Taşan su serbestçe akmaz; kenarın hemen altındaki oluğa toplanır ve buradan alt katta konumlanan denge (balans) deposuna iner. Pompa sistemi suyu bu depodan alıp filtrasyon ve dezenfeksiyon hattından geçirerek havuza geri basar, böylece taşma sürekli döner. Bu kapalı devre sayesinde havuz kenarı gözle görülür bir bordür yerine adeta ufukta biter. Sonsuzluk havuzunun büyüsü tümüyle su seviyesinin milimetrik korunmasına bağlıdır; kot doğru ayarlanmazsa taşma kesintili görünür veya rahatsız edici bir ses oluşur.",
            "en": "An infinity pool is a design in which the water level along at least one edge is held exactly flush with the coping, so the water pours over that vanishing edge as a thin film. The overflowing water is not lost: it collects in a channel just below the edge and drops into a balancing (surge) tank set on a lower level. A pump draws water from this tank, runs it through the filtration and disinfection line, and returns it to the pool, so the overflow circulates continuously. Thanks to this closed loop the pool edge seems to end at the horizon rather than at a visible curb. The whole illusion depends on holding the water level to the millimetre; if the level is off, the sheet of water looks broken or produces an unpleasant noise."
          }
        ]
      },
      {
        "heading": {
          "tr": "Sonsuzluk havuzu hangi arazilerde en iyi sonucu verir?",
          "en": "On which sites does an infinity pool work best?"
        },
        "paragraphs": [
          {
            "tr": "Sonsuzluk havuzu en etkileyici sonucu deniz veya vadi manzaralı, eğimli arazilerde verir. Taşma kenarının önünde arazinin aşağı doğru inmesi gerekir; bu kot farkı sayesinde göz, su yüzeyini arkadaki manzarayla aynı düzlemde algılar ve havuz sanki boşluğa açılır. Çeşme, Alaçatı ve Karaburun'un denize bakan yamaçları bu tip havuzlar için doğal olarak uygundur; villa terasından Ege'ye açılan bir görüş hattı, sonsuzluk kenarını gerçek anlamda öne çıkarır. Düz bir bahçede de teknik olarak sonsuzluk kenarı uygulanabilir, ancak manzara ve kot farkı olmadan görsel etki büyük ölçüde kaybolur. Bu nedenle İzmir çevresindeki projelerde tasarıma başlamadan önce arazi eğimi, manzara yönü ve taşma kenarının hangi cepheye bakacağı dikkatle değerlendirilir.",
            "en": "An infinity pool delivers its most dramatic effect on sloping sites with a sea or valley view. The ground needs to fall away in front of the vanishing edge; this level difference lets the eye read the water surface as continuous with the landscape behind it, so the pool seems to open onto empty space. The sea-facing slopes of Çeşme, Alaçatı and Karaburun are naturally suited to these pools, and a sightline from the villa terrace out to the Aegean is exactly what makes the infinity edge sing. A flat garden can also carry an infinity edge technically, but without a view and a change in level much of the visual payoff is lost. For that reason, in projects around İzmir we assess the ground slope, the direction of the view and which façade the vanishing edge should face before any design begins."
          }
        ]
      },
      {
        "heading": {
          "tr": "Sonsuzluk havuzu ile plaj girişi ve deck-level taşma arasındaki fark nedir?",
          "en": "How does an infinity pool differ from beach-entry and deck-level overflow pools?"
        },
        "paragraphs": [
          {
            "tr": "Sonsuzluk havuzu, taşmanın yalnızca tek bir manzara kenarında toplandığı ve suyun o kenardan aşağı döküldüğü bir sistemdir; amaç görsel bir illüzyon yaratmaktır. Deck-level, yani plazma taşma sisteminde ise su havuzun dört kenarından da tahliye kanalına taşar ve su yüzeyi çevredeki döşemeyle aynı hizada kalır. Bu, hijyen ve su yüzeyi temizliği açısından çok verimli bir çözümdür ama sonsuzluk kenarının o 'boşluğa akan' etkisini vermez. Plaj girişi ise farklı bir konudur: havuzun bir ucunun deniz kıyısı gibi giderek alçalan bir rampayla suya inmesidir ve tamamen giriş konforuyla ilgilidir, taşma tekniğiyle değil. Kısaca sonsuzluk havuzu manzara odaklı, deck-level yüzey hijyeni odaklı, plaj girişi ise erişim konforu odaklıdır. Birçok Çeşme projesinde bu yaklaşımlar tek havuzda birleştirilebilir.",
            "en": "An infinity pool concentrates the overflow along a single view edge, where the water spills downward; the goal is a visual illusion. In a deck-level (perimeter) overflow system, by contrast, the water overflows into a channel on all four sides and the surface sits flush with the surrounding paving. That is highly effective for hygiene and surface skimming, but it does not create the vanishing edge's sense of water pouring into space. Beach entry is a separate matter altogether: it is a gradually sloping ramp into the water, like a shoreline, and is entirely about entry comfort rather than overflow technique. In short, the infinity pool is view-driven, deck-level is surface-hygiene-driven, and beach entry is access-driven. In many Çeşme projects these approaches can be combined in a single pool."
          }
        ]
      },
      {
        "heading": {
          "tr": "Sonsuzluk havuzu nasıl inşa edilir?",
          "en": "How is an infinity pool built?"
        },
        "paragraphs": [
          {
            "tr": "Sonsuzluk havuzu, dayanıklılığı ve serbest form imkânı nedeniyle genellikle gunit (püskürtme beton) ve betonarme ile inşa edilir. Süreç, arazi eğimine ve manzaraya göre hazırlanan tasarımın onaylanmasıyla başlar; ardından kazı, temel ve donatı çalışması yapılır. Taşma kenarı, denge deposu ve tesisat hesaplarının doğru kurgulanması bu aşamanın kalbidir. Kaplama olarak seramik, cam mozaik veya traverten tercih edilebilir; koyu tonlar suyun manzarayı yansıtmasını güçlendirir. İnşa sırasında öne çıkan başlıca kalemler şunlardır:",
            "en": "Because of its durability and freedom of form, an infinity pool is usually built with gunite (sprayed concrete) and reinforced concrete. The process starts once the design, shaped to the slope and the view, is approved; then come excavation, the base and the reinforcement work. Getting the vanishing edge, the balancing tank and the plumbing calculations right is the heart of this stage. For the finish, ceramic, glass mosaic or travertine can be chosen; darker tones strengthen the water's reflection of the view. The main items that stand out during construction are:"
          }
        ],
        "bullets": [
          {
            "tr": "Milimetrik hassasiyetle terazilenen taşma kenarı",
            "en": "A vanishing edge levelled to the millimetre"
          },
          {
            "tr": "Doğru hacimde hesaplanmış denge (balans) deposu",
            "en": "A balancing tank sized to the correct volume"
          },
          {
            "tr": "Taşma debisine uygun pompa ve filtrasyon seçimi",
            "en": "Pump and filtration matched to the overflow flow rate"
          },
          {
            "tr": "Su geçirimsizlik (izolasyon) ve dayanıklı kaplama",
            "en": "Waterproofing and a durable finish"
          },
          {
            "tr": "İsteğe bağlı otomasyon ve aydınlatma altyapısı",
            "en": "Optional automation and lighting infrastructure"
          }
        ]
      },
      {
        "heading": {
          "tr": "Sonsuzluk havuzu yapım süresi ne kadardır?",
          "en": "How long does building an infinity pool take?"
        },
        "paragraphs": [
          {
            "tr": "Tipik bir villa havuzunun yapımı, tasarım onayından sonra genellikle 8 ila 14 hafta arasında tamamlanır. Ancak sonsuzluk kenarı bu süreyi bir miktar uzatır; çünkü taşma oluğu, denge deposu ve kot hassasiyeti ek işçilik ve dikkatli kontrol gerektirir. Otomasyon, ısıtma, karşı akıntı veya aydınlatma gibi donanımlar eklendiğinde tesisat ve devreye alma aşaması da uzayabilir. Süreyi etkileyen diğer etkenler arasında arazinin ulaşılabilirliği, zemin yapısı, hava koşulları ve kaplama malzemesinin temini yer alır; örneğin cam mozaik uygulaması seramiğe göre daha uzun sürebilir. Çeşme ve Alaçatı'daki yoğun sezon planlaması nedeniyle projeye erken başlamak, havuzun yaz başında hazır olmasını sağlamak açısından önemlidir. Kesin süre her zaman projenin ölçeğine ve donanımına göre değişir.",
            "en": "A typical villa pool is usually completed in about 8 to 14 weeks after design approval. The infinity edge, however, extends this somewhat, because the overflow channel, the balancing tank and the level precision call for extra labour and careful checking. When equipment such as automation, heating, a counter-current jet or lighting is added, the plumbing and commissioning stage can also lengthen. Other factors affecting the timeline include site access, ground conditions, the weather and the availability of the finishing material; a glass-mosaic finish, for instance, can take longer than ceramic. Because of the busy season in Çeşme and Alaçatı, starting early matters if the pool is to be ready by the beginning of summer. The exact duration always varies with the scale and equipment of the project."
          }
        ]
      },
      {
        "heading": {
          "tr": "Sonsuzluk havuzu maliyetini ne belirler?",
          "en": "What determines the cost of an infinity pool?"
        },
        "paragraphs": [
          {
            "tr": "Sonsuzluk havuzunun maliyeti sabit bir rakam değildir; birçok değişkene bağlı olarak projeye göre belirlenir. Ölçü ve derinlik en temel etkendir; havuz büyüdükçe kazı, beton, kaplama ve su hacmi hepsi artar. Taşma tipi de belirleyicidir: tek kenarlı bir sonsuzluk kenarı ile çok cepheli veya deck-level taşma birleşimi farklı işçilik ve tesisat gerektirir. Kaplama seçimi (seramik, cam mozaik, traverten), zemin ve arazi koşulları, denge deposunun büyüklüğü ve pompa/filtrasyon kapasitesi de bütçeyi doğrudan etkiler. Isıtma, otomasyon ve aydınlatma gibi donanımlar eklendikçe maliyet yükselir. Bu nedenle sağlıklı bir fiyat ancak arazi görüldükten ve proje netleştikten sonra verilebilir. Çeşme çevresindeki projelerde biz de her villaya özel bir keşif ve tasarım sonrası şeffaf bir bütçe sunmayı tercih ediyoruz.",
            "en": "The cost of an infinity pool is not a fixed figure; it is set per project according to many variables. Size and depth are the most basic drivers; as the pool grows, excavation, concrete, finish and water volume all increase with it. The type of overflow matters too: a single-edge infinity design and a multi-sided or deck-level combination require different labour and plumbing. The choice of finish (ceramic, glass mosaic, travertine), the ground and site conditions, the size of the balancing tank and the pump and filtration capacity all bear directly on the budget. As equipment such as heating, automation and lighting is added, the cost rises. For this reason a reliable price can only be given after the site has been seen and the project settled. For projects around Çeşme, we prefer to offer a site survey for each villa and a transparent budget once the design is clear."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Sonsuzluk havuzu düz bir bahçede yapılabilir mi?",
          "en": "Can an infinity pool be built in a flat garden?"
        },
        "a": {
          "tr": "Teknik olarak evet; taşma kenarı ve denge deposu düz arazide de uygulanabilir. Ancak sonsuzluk etkisi arkadaki manzarayla kot farkına dayanır. Çeşme ve Alaçatı'nın eğimli, deniz manzaralı yamaçları en etkileyici sonucu verir; düz bahçede görsel etki büyük ölçüde azalır.",
          "en": "Technically yes; the vanishing edge and balancing tank can be built on flat ground too. But the infinity effect relies on a level difference with the view behind. The sloping, sea-view sites of Çeşme and Alaçatı give the most striking result; on a flat garden the visual impact is greatly reduced."
        }
      },
      {
        "q": {
          "tr": "Sonsuzluk havuzunun taşan suyu boşa mı gider?",
          "en": "Is the water that spills over an infinity pool wasted?"
        },
        "a": {
          "tr": "Hayır. Taşan su kenarın altındaki oluktan denge (balans) deposuna iner, oradan pompayla filtrasyon hattına alınır ve havuza geri basılır. Sistem kapalı bir devredir; su sürekli döner. Yalnızca buharlaşma kadar doğal kayıp olur, o da otomatik tamamlama ile giderilebilir.",
          "en": "No. The overflowing water drops through a channel into the balancing tank, is drawn by the pump into the filtration line and returned to the pool. It is a closed loop; the water circulates continuously. Only natural loss through evaporation occurs, and that can be topped up automatically."
        }
      },
      {
        "q": {
          "tr": "Sonsuzluk havuzu bakımı normal havuzdan zor mudur?",
          "en": "Is an infinity pool harder to maintain than a normal pool?"
        },
        "a": {
          "tr": "Bakım mantığı benzerdir; su dengesi, dezenfeksiyon ve filtrasyon aynı prensiplerle yürür. Ek olarak denge deposu, taşma oluğu ve su seviyesinin düzenli kontrolü gerekir. Doğru mühendislikle kurulmuş bir sistemde bu kontroller rutindir. Çeşme çevresinde düzenli bakım hizmetiyle havuz sezon boyunca sorunsuz çalışır.",
          "en": "The logic is similar; water balance, disinfection and filtration follow the same principles. In addition, the balancing tank, overflow channel and water level need regular checking. In a properly engineered system these checks are routine. With regular maintenance around Çeşme, the pool runs smoothly throughout the season."
        }
      }
    ]
  },
  "havuz-bakimi-nasil-yapilir": {
    "title": {
      "tr": "Havuz Bakımı Nasıl Yapılır? Adım Adım Rehber",
      "en": "How to Maintain a Pool: A Step-by-Step Guide"
    },
    "seoTitle": {
      "tr": "Havuz Bakımı Nasıl Yapılır?",
      "en": "How to Maintain a Pool"
    },
    "excerpt": {
      "tr": "Çeşme ve Alaçatı villaları için havuz bakımı rehberi: su değerleri, haftalık rutin, klorlama ve filtre bakımı adım adım.",
      "en": "A pool maintenance guide for Çeşme and Alaçatı villas: water balance, weekly routine, chlorination and filter care, step by step."
    },
    "intro": {
      "tr": "Havuz bakımı, suyun berrak ve sağlıklı kalması için düzenli ölçüm, kimyasal denge ve temizliğin bir araya geldiği sürekli bir iştir. Çeşme ve Alaçatı'nın sıcak yazlarında bu rutin daha da önem kazanır. Bu rehberde havuz bakımını adım adım, doğru değerler ve haftalık kontrol listesiyle anlatıyoruz.",
      "en": "Pool maintenance is an ongoing routine that combines regular testing, chemical balance and cleaning to keep the water clear and healthy. In the hot summers of Çeşme and Alaçatı this routine matters even more. In this guide we explain pool maintenance step by step, with correct values and a weekly checklist."
    },
    "sections": [
      {
        "heading": {
          "tr": "Havuz bakımı ne sıklıkla yapılmalı?",
          "en": "How often should pool maintenance be done?"
        },
        "paragraphs": [
          {
            "tr": "Havuz bakımı, sezon boyunca yani ilkbahardan sonbahara kadar düzenli olarak sürdürülmelidir. İdeal olan haftalık bir rutindir: su değerlerinin ölçülmesi, gerekli kimyasal dozajlamanın yapılması, yüzeyin kepçeyle temizlenmesi, dibin süpürülmesi veya robotla temizlenmesi, savak ve skimmer sepetlerinin boşaltılması ve filtrenin kontrol edilmesi. Bu adımlar bir arada yürütüldüğünde su hem berrak hem de hijyenik kalır.",
            "en": "Pool maintenance should be carried out regularly throughout the season, from spring to autumn. A weekly routine is ideal: testing the water values, dosing the necessary chemicals, skimming the surface, vacuuming the floor or using a robot cleaner, emptying the overflow and skimmer baskets, and checking the filter. When these steps run together, the water stays both clear and hygienic."
          },
          {
            "tr": "Bakım sıklığı sabit değildir; bulaşan yükü, su sıcaklığı ve havuzun kullanım yoğunluğu arttıkça artar. Çeşme ve Alaçatı gibi yoğun güneş alan bölgelerde, özellikle temmuz ve ağustosta havuzun daha sık kontrol edilmesi gerekebilir. Villalarda misafir sayısı arttığında ya da rüzgârla gelen toz ve polen fazlaysa haftalık rutin, hafta içi ek kontrollerle desteklenmelidir.",
            "en": "The frequency is not fixed; it rises as the contaminant load, water temperature and usage intensity increase. In sun-drenched areas such as Çeşme and Alaçatı, the pool may need more frequent checks, especially in July and August. When a villa hosts more guests, or when wind-borne dust and pollen are heavy, the weekly routine should be supported with extra mid-week checks."
          }
        ]
      },
      {
        "heading": {
          "tr": "İdeal havuz suyu değerleri nelerdir?",
          "en": "What are the ideal pool water values?"
        },
        "paragraphs": [
          {
            "tr": "Sağlıklı havuz bakımının temeli doğru su kimyasıdır. İdeal havuz suyu değerleri şöyledir: pH 7.2 ile 7.6 arasında, serbest klor 1 ile 3 ppm, toplam alkalinite 80 ile 120 ppm, kalsiyum sertliği yaklaşık 200 ile 400 ppm ve siyanürik asit (stabilizatör) 30 ile 50 ppm. pH suyun asitlik dengesini, klor ise dezenfeksiyonu belirler; ikisi birlikte doğru aralıkta tutulduğunda su hem güvenli hem de göze konforlu olur.",
            "en": "The foundation of healthy pool maintenance is correct water chemistry. The ideal pool water values are: pH between 7.2 and 7.6, free chlorine 1 to 3 ppm, total alkalinity 80 to 120 ppm, calcium hardness around 200 to 400 ppm, and cyanuric acid (stabiliser) 30 to 50 ppm. pH determines the water's acidity balance and chlorine handles disinfection; when both are kept in the correct range the water is safe and comfortable for the eyes."
          },
          {
            "tr": "Bu değerler haftalık, sıcak dönemlerde ise daha sık ölçülmelidir. Alkalinite pH'ı dengede tutan tampon görevi görür; düşükse pH iniş çıkış yapar, yüksekse su bulanıklaşabilir. Siyanürik asit klorun güneşte parçalanmasını yavaşlatır, bu yüzden Çeşme ve Alaçatı'nın güçlü güneşinde stabilizatör seviyesi kritik önemdedir. Değerler ideal aralığın dışına çıktığında düzeltici kimyasallar projeye göre değişen dozlarda uygulanır.",
            "en": "These values should be measured weekly, and more often in hot periods. Alkalinity acts as a buffer that keeps pH stable; if it is low the pH swings, if it is high the water can turn cloudy. Cyanuric acid slows the breakdown of chlorine in sunlight, so the stabiliser level is critical under the strong sun of Çeşme and Alaçatı. When values fall outside the ideal range, corrective chemicals are applied in doses that vary by project."
          }
        ]
      },
      {
        "heading": {
          "tr": "Haftalık havuz bakımı kontrol listesi",
          "en": "The weekly pool maintenance checklist"
        },
        "paragraphs": [
          {
            "tr": "Düzenli havuz bakımını kolaylaştırmak için haftalık bir kontrol listesi izlemek en pratik yöntemdir. Aşağıdaki adımlar sezon boyunca her hafta tekrarlandığında suyun dengesi bozulmadan korunur ve sorunlar büyümeden önlenir. Villalarda bu listeyi profesyonel bir ekiple yürütmek, hem zaman kazandırır hem de kimyasalların doğru dozda kullanılmasını garanti eder.",
            "en": "The most practical way to keep pool maintenance on track is to follow a weekly checklist. When the steps below are repeated every week through the season, the water balance is preserved and problems are prevented before they grow. In villas, running this list with a professional team saves time and guarantees that chemicals are used in the correct doses."
          }
        ],
        "bullets": [
          {
            "tr": "Su değerlerini ölçün: pH, klor ve alkaliniteyi test kiti veya cihazla kontrol edin.",
            "en": "Test the water: check pH, chlorine and alkalinity with a test kit or meter."
          },
          {
            "tr": "Kimyasal dozajlama yapın: değerleri ideal aralığa getirmek için gerekli kimyasalları ekleyin.",
            "en": "Dose chemicals: add what is needed to bring values into the ideal range."
          },
          {
            "tr": "Yüzeyi kepçeleyin: yaprak, böcek ve yüzen kirleri toplayın.",
            "en": "Skim the surface: collect leaves, insects and floating debris."
          },
          {
            "tr": "Dibi süpürün veya robotla temizleyin: tabana çöken tortuyu alın.",
            "en": "Vacuum the floor or use a robot cleaner: remove settled sediment."
          },
          {
            "tr": "Savak ve skimmer sepetlerini temizleyin: tıkanmayı önleyin.",
            "en": "Clean the overflow and skimmer baskets: prevent clogging."
          },
          {
            "tr": "Filtreyi kontrol edin: basıncı izleyin, gerekirse ters yıkama yapın.",
            "en": "Check the filter: watch the pressure and backwash if needed."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz filtresi bakımı nasıl yapılır?",
          "en": "How is pool filter maintenance done?"
        },
        "paragraphs": [
          {
            "tr": "Filtre, havuz bakımının kalbidir; suyu sürekli dolaştırarak asılı partikülleri tutar. Kum filtrelerde zamanla biriken kir, akışı zorlaştırır ve manometrede basıncı yükseltir. Bu durumda periyodik olarak ters yıkama (backwash) yapılır: su ters yönde akıtılarak kum yatağındaki kir dışarı atılır. Basınç normale döndüğünde filtre yeniden verimli çalışır. Ters yıkama sıklığı kullanım ve bulaşan yüküne göre değişir.",
            "en": "The filter is the heart of pool maintenance; it continuously circulates the water and traps suspended particles. In sand filters, dirt that builds up over time restricts flow and raises the pressure on the gauge. When this happens, a periodic backwash is performed: water is run in reverse to flush the dirt out of the sand bed. Once the pressure returns to normal, the filter works efficiently again. Backwash frequency varies with usage and contaminant load."
          },
          {
            "tr": "Kartuş filtrelerde ise ters yıkama yerine kartuşun sökülüp yıkanması, zamanı geldiğinde ise değiştirilmesi gerekir. Kartuş, basınçlı suyla durulanarak gözeneklerindeki kir temizlenir; yıprandığında yenisiyle değiştirilir. Hangi filtre tipi olursa olsun, pompa ve filtrenin düzenli kontrolü suyun berraklığını doğrudan etkiler. İzmir ve Çeşme'deki villalarda filtre bakımını ihmal etmemek, uzun vadede ekipman ömrünü de uzatır.",
            "en": "In cartridge filters, instead of backwashing, the cartridge is removed and washed, and replaced when its time comes. The cartridge is rinsed with pressurised water to clear the dirt from its pores, and swapped for a new one when worn. Whatever the filter type, regular checks of the pump and filter directly affect water clarity. In villas across İzmir and Çeşme, not neglecting filter maintenance also extends the life of the equipment over time."
          }
        ]
      },
      {
        "heading": {
          "tr": "Sıcak havada klor neden hızla tükenir?",
          "en": "Why does chlorine deplete quickly in hot weather?"
        },
        "paragraphs": [
          {
            "tr": "Klor, güneş ışığı ve yüksek su sıcaklığında daha hızlı parçalanan bir dezenfektandır. Çeşme ve Alaçatı'nın sıcak yaz aylarında güçlü güneş ve yükselen su sıcaklığı, klor talebini belirgin şekilde artırır; sabah dengede olan klor öğleden sonra ideal aralığın altına inebilir. Bu nedenle yaz boyunca klor seviyesi daha sık ölçülmeli ve gerektiğinde takviye edilmelidir. Stabilizatör (siyanürik asit) doğru seviyedeyse klorun güneşte kaybı yavaşlar.",
            "en": "Chlorine is a disinfectant that breaks down faster under sunlight and high water temperature. In the hot summer months of Çeşme and Alaçatı, strong sun and rising water temperature noticeably increase chlorine demand; chlorine that is balanced in the morning can drop below the ideal range by the afternoon. For this reason the chlorine level should be measured more often through summer and topped up when needed. When the stabiliser (cyanuric acid) is at the right level, chlorine loss in the sun slows down."
          },
          {
            "tr": "Klor beklenenden hızlı tükeniyorsa ya da su bulanıklaşıp koku oluşuyorsa, şok klorlama gerekebilir. Şok klorlama, suya normalden yüksek dozda klor verilerek birikmiş kirliliğin ve bağlı kloraminlerin parçalanmasıdır; genellikle akşam, güneş çekildikten sonra uygulanır ve su tekrar güvenli seviyeye dönene kadar havuza girilmez. Doz miktarı havuzun hacmine ve kirlilik durumuna göre değişir.",
            "en": "If chlorine depletes faster than expected, or the water turns cloudy and develops an odour, shock chlorination may be needed. Shock chlorination means adding a higher-than-normal dose of chlorine to break down accumulated contamination and bound chloramines; it is usually applied in the evening after the sun has gone down, and no one enters the pool until the water returns to a safe level. The dose amount varies with the pool's volume and the degree of contamination."
          }
        ]
      },
      {
        "heading": {
          "tr": "Yosun ve bulanıklıkla nasıl başa çıkılır?",
          "en": "How do you deal with algae and cloudiness?"
        },
        "paragraphs": [
          {
            "tr": "Yosun oluşumu ve suyun bulanıklaşması, genellikle bozulan kimyasal dengenin ve yetersiz filtrasyonun işaretidir. İlk adım her zaman su değerlerini düzeltmektir: pH ve kloru ideal aralığa getirin. Ardından havuzun duvarları ve tabanı fırçalanarak yosunun tutunduğu yüzeyler mekanik olarak temizlenir. Fırçalama, kimyasalların ve filtrasyonun yosuna daha etkili ulaşmasını sağlar, bu yüzden ihmal edilmemelidir.",
            "en": "Algae growth and cloudy water are usually signs of disrupted chemical balance and inadequate filtration. The first step is always to correct the water values: bring pH and chlorine into the ideal range. Then the pool walls and floor are brushed to mechanically clean the surfaces where algae cling. Brushing lets the chemicals and filtration reach the algae more effectively, so it should not be skipped."
          },
          {
            "tr": "Bulanıklık devam ederse, suya flokülant (çöktürücü) eklenebilir. Flokülant, suda asılı kalan mikro partikülleri bir araya toplayarak tabana çökmesini sağlar; ardından bu tortu dip süpürgesiyle alınır ve filtrasyon sürdürülür. Denge düzeltme, fırçalama ve gerektiğinde çöktürme adımları birlikte uygulandığında su genellikle kısa sürede berraklığına kavuşur. Sorun tekrar ediyorsa filtre ve dolaşım sisteminin profesyonelce kontrol edilmesi önerilir.",
            "en": "If cloudiness persists, a flocculant (clarifier) can be added to the water. The flocculant gathers the micro-particles suspended in the water so they settle to the floor; this sediment is then removed with a floor vacuum and filtration continues. When balancing, brushing and, where needed, flocculation are applied together, the water usually regains its clarity quickly. If the problem recurs, a professional check of the filter and circulation system is recommended."
          }
        ]
      },
      {
        "heading": {
          "tr": "Evde olmayan villa sahipleri için bakım sözleşmesi",
          "en": "A maintenance contract for villa owners who are away"
        },
        "paragraphs": [
          {
            "tr": "Çeşme ve Alaçatı'daki villaların çoğu yılın belirli dönemlerinde kullanılır; sahipleri sık sık şehir dışında ya da yurt dışında olur. Böyle bir durumda havuzun haftalık bakımı aksarsa, su birkaç gün içinde dengesini kaybedebilir, yosun tutabilir ya da ekipman zarar görebilir. Düzenli bir havuz bakımı sözleşmesi, siz orada olmasanız bile havuzun her hafta profesyonelce kontrol edilmesini ve suyun her zaman kullanıma hazır kalmasını sağlar.",
            "en": "Most villas in Çeşme and Alaçatı are used only in certain periods of the year; their owners are often out of town or abroad. In such cases, if the pool's weekly maintenance is interrupted, the water can lose its balance within a few days, algae can take hold, or the equipment can be damaged. A regular pool maintenance contract ensures that, even when you are not there, the pool is professionally checked every week and the water is always ready for use."
          },
          {
            "tr": "Seçkin Havuzculuk olarak İzmir ve Çeşme yarımadasında sunduğumuz düzenli bakım hizmetiyle su değerlerini ölçüyor, kimyasal dengeyi kuruyor, temizlik ve filtre kontrolünü sizin yerinize üstleniyoruz. Bakım sıklığı ve kapsamı havuzun büyüklüğüne, kullanım yoğunluğuna ve mevsime göre projeye özel planlanır. Böylece villaya döndüğünüzde havuzunuzu tertemiz ve dengede bulursunuz.",
            "en": "As Seçkin Havuzculuk, with the regular maintenance service we offer across İzmir and the Çeşme peninsula, we measure the water values, establish the chemical balance, and take on the cleaning and filter checks on your behalf. The frequency and scope of maintenance are planned specifically for each project according to the pool's size, usage intensity and the season. This way, when you return to the villa, you find your pool spotless and in balance."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Havuz suyu ne sıklıkla test edilmelidir?",
          "en": "How often should pool water be tested?"
        },
        "a": {
          "tr": "Sezon boyunca haftada en az bir kez test edilmesi idealdir. Ancak Çeşme ve Alaçatı'nın sıcak yaz aylarında, yoğun güneş ve kullanım klor tüketimini artırdığı için pH ve klor değerleri daha sık, mümkünse birkaç günde bir kontrol edilmelidir. Değerler ideal aralığın dışına çıktığında hemen düzeltici kimyasal uygulanmalıdır.",
          "en": "Testing at least once a week through the season is ideal. However, in the hot summer months of Çeşme and Alaçatı, where strong sun and heavy use raise chlorine consumption, pH and chlorine should be checked more often, ideally every few days. When values move outside the ideal range, corrective chemicals should be applied right away."
        }
      },
      {
        "q": {
          "tr": "Havuz suyunun pH değeri kaç olmalı?",
          "en": "What should the pH value of pool water be?"
        },
        "a": {
          "tr": "İdeal pH aralığı 7.2 ile 7.6 arasındadır. Bu aralık hem klorun etkin çalışmasını hem de suyun göze ve cilde konforlu olmasını sağlar. pH bu değerin altına düşerse su aşındırıcı, üstüne çıkarsa klor etkisiz ve su bulanık hale gelebilir. pH'ı dengede tutmak için alkalinite de 80–120 ppm aralığında olmalıdır.",
          "en": "The ideal pH range is between 7.2 and 7.6. This range lets chlorine work effectively and keeps the water comfortable for the eyes and skin. If pH drops below this, the water becomes corrosive; if it rises above, chlorine loses effectiveness and the water can turn cloudy. To keep pH stable, alkalinity should also stay in the 80–120 ppm range."
        }
      },
      {
        "q": {
          "tr": "Havuza şok klorlama ne zaman yapılır?",
          "en": "When should a pool be shock chlorinated?"
        },
        "a": {
          "tr": "Şok klorlama; su bulanıklaştığında, yosun belirtisi görüldüğünde, klor kokusu arttığında ya da yoğun kullanım ve sıcak havadan sonra gerekir. Genellikle akşam güneş çekildikten sonra uygulanır ve su güvenli seviyeye dönene kadar havuza girilmez. Doz, havuzun hacmine ve kirlilik durumuna göre projeye göre değişir.",
          "en": "Shock chlorination is needed when the water turns cloudy, when signs of algae appear, when a chlorine odour increases, or after heavy use and hot weather. It is usually applied in the evening after the sun has gone down, and no one enters the pool until the water returns to a safe level. The dose varies by project according to the pool's volume and degree of contamination."
        }
      }
    ]
  },
  "havuz-bakim-fiyatlari-izmir": {
    "title": {
      "tr": "İzmir Havuz Bakım Fiyatları: Neye Göre Belirlenir? (2026 Rehberi)",
      "en": "Pool Maintenance Prices in İzmir: What Determines Them? (2026 Guide)"
    },
    "seoTitle": {
      "tr": "İzmir Havuz Bakım Fiyatları 2026",
      "en": "Pool Maintenance Prices in İzmir 2026"
    },
    "excerpt": {
      "tr": "İzmir ve Çeşme'de havuz bakım fiyatını belirleyen faktörler, bakım paketlerinin kapsamı ve haftalık bakımın neden daha ekonomik olduğu.",
      "en": "The factors behind pool maintenance prices in İzmir and Çeşme, what each maintenance package covers and why weekly care costs less."
    },
    "intro": {
      "tr": "Havuz bakım fiyatları İzmir'de tek bir rakamla ifade edilemez; aynı sokaktaki iki villa havuzunun bakım bedeli bile birbirinden belirgin biçimde farklı olabilir. Fiyatı havuzun hacmi, tipi, bakım sıklığı, kimyasalların pakete dahil olup olmadığı ve havuzun bulunduğu konum belirler. Bu rehberde Çeşme yarımadasında sahada gördüğümüz tabloya dayanarak bu değişkenleri tek tek açıklıyor, tek seferlik temizlikten kışlamaya kadar her bakım paketinin neleri kapsadığını ortaya koyuyoruz. Amacımız, teklif aldığınızda neye ödeme yaptığınızı net biçimde bilmeniz ve farklı teklifleri aynı ölçütlerle, adil biçimde karşılaştırabilmeniz.",
      "en": "Pool maintenance prices in İzmir cannot be summed up in a single figure; even two villa pools on the same street can carry noticeably different maintenance costs. The price is shaped by the pool's volume, its type, how often it is serviced, whether chemicals are included and where the pool is located. In this guide, drawing on what we see in the field across the Çeşme peninsula, we explain these variables one by one and set out what each maintenance package covers, from a one-off clean to winterisation. Our aim is simple: when you receive a quote, you should know exactly what you are paying for and be able to compare different offers fairly, on the same terms."
    },
    "sections": [
      {
        "heading": {
          "tr": "Havuz bakım fiyatını hangi faktörler belirler?",
          "en": "Which factors determine the price of pool maintenance?"
        },
        "paragraphs": [
          {
            "tr": "Bir bakım teklifinin arkasında her zaman aynı soru vardır: Bu havuzu sağlıklı tutmak ne kadar zaman, ne kadar kimyasal ve ne kadar yol gerektiriyor? Aşağıdaki altı faktör bu sorunun cevabını büyük ölçüde belirler. Birini değiştirdiğinizde diğerleri de etkilenir; örneğin bakım sıklığını azaltmak ilk bakışta tasarruf gibi görünse de her ziyarette yapılacak iş ve harcanacak kimyasal miktarı artar. Bu yüzden teklifleri karşılaştırırken yalnızca toplam tutara değil, bu kalemlerin nasıl ele alındığına bakmak gerekir.",
            "en": "Behind every maintenance quote lies the same question: how much time, how many chemicals and how much travel does it take to keep this pool healthy? The six factors below largely answer that question. Change one and the others shift too; reducing the service frequency, for example, may look like a saving at first, yet the work required and the chemicals used on each visit go up. That is why, when comparing quotes, it pays to look not only at the total but at how each of these items is handled."
          }
        ],
        "bullets": [
          {
            "tr": "Havuz hacmi: Su miktarı arttıkça dengelemek için gereken kimyasal, süpürülecek yüzey ve filtrenin yükü de artar. Büyük havuz, her ziyarette daha uzun çalışma süresi demektir.",
            "en": "Pool volume: The more water there is, the more chemicals are needed to balance it, the larger the surface to vacuum and the heavier the load on the filter. A large pool means longer working time on every visit."
          },
          {
            "tr": "Havuz tipi: Skimmerli havuzlar görece sade bir rutin ister. Taşmalı ve sonsuzluk havuzlarında ise denge deposu, savak ızgaraları ve taşma kanalı da düzenli kontrol edildiği için iş kalemi çoğalır.",
            "en": "Pool type: Skimmer pools call for a relatively simple routine. Overflow and infinity pools add more tasks, since the balance tank, overflow grilles and gutter channel also need regular checks."
          },
          {
            "tr": "Bakım sıklığı: Haftalık, iki haftalık veya aylık ziyaret seçenekleri hem ziyaret başına işi hem de toplam maliyeti doğrudan değiştirir.",
            "en": "Service frequency: Weekly, fortnightly or monthly visits directly change both the work per visit and the overall cost."
          },
          {
            "tr": "Kimyasalların dahil olup olmaması: Bazı paketler yalnızca işçiliği kapsar, bazılarında klor, pH düzenleyici ve yosun önleyici gibi sarf malzemeleri de fiyata eklenir. Teklifte bunun açıkça yazılı olması gerekir.",
            "en": "Whether chemicals are included: Some packages cover labour only, while others add consumables such as chlorine, pH adjusters and algaecide to the price. This should be stated clearly in the quote."
          },
          {
            "tr": "Mesafe ve konum: Çeşme merkezdeki bir havuzla [Karaburun'daki bir villa havuzu](area:karaburun) arasında yol süresi ciddi fark yaratır. Ekiplerin güzergâh planı ve ilçeler arası mesafe maliyete yansır.",
            "en": "Distance and location: Travel time differs considerably between a pool in central Çeşme and [a villa pool in Karaburun](area:karaburun). Team routing and the distance between districts are reflected in the cost."
          },
          {
            "tr": "Sezon: Yoğun yaz aylarında su sıcaklığı ve kullanım arttığı için bakım daha sık ve daha yoğun yapılır. Kış aylarında ise ihtiyaç kontrol ziyaretlerine iner.",
            "en": "Season: In the busy summer months, higher water temperatures and heavier use make maintenance more frequent and more intensive. In winter the need drops to inspection visits."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz bakım paketleri neleri kapsar?",
          "en": "What do pool maintenance packages cover?"
        },
        "paragraphs": [
          {
            "tr": "Rakamlar karşılaştırılmadan önce paketlerin kapsamı karşılaştırılmalıdır; iki teklif aynı adı taşısa da içerik bakımından birbirinden çok farklı olabilir. Aşağıdaki matris, Çeşme yarımadasındaki villa havuzlarında en sık talep edilen beş bakım türünü ve her birinin içerdiği temel işleri özetler. Bir teklifte bu işlerden hangilerinin yer aldığını ve hangilerinin ek ücrete tabi olduğunu sormak, sonradan yaşanabilecek sürprizlerin önüne geçer. Temel adımların neden bu sırayla yapıldığını merak ediyorsanız [havuz bakımı nasıl yapılır](post:havuz-bakimi-nasil-yapilir) rehberimiz her adımı ayrıntılı olarak anlatıyor.",
            "en": "Before comparing figures, compare what the packages actually cover; two quotes may share the same name and still differ widely in content. The matrix below summarises the five types of service most often requested for villa pools on the Çeşme peninsula and the core tasks each one includes. Asking which of these tasks a quote includes, and which are charged as extras, prevents surprises later on. If you want to understand why the basic steps follow this order, our guide on [how to maintain a pool](post:havuz-bakimi-nasil-yapilir) explains each step in detail."
          }
        ],
        "bullets": [
          {
            "tr": "Tek seferlik temizlik: Uzun süre bakımsız kalmış ya da misafir öncesi hazırlanacak havuzlar içindir. Su testi, şok klorlama gerekiyorsa uygulanması, dip ve duvarların fırçalanması, süpürme, sepet temizliği ve filtrenin ters yıkanmasını kapsar.",
            "en": "One-off clean: For pools that have been neglected for a while or need preparing before guests arrive. It covers water testing, shock chlorination where needed, brushing the floor and walls, vacuuming, basket cleaning and backwashing the filter."
          },
          {
            "tr": "Haftalık düzenli bakım: Sezon boyunca her hafta su testi, pH ve klor ayarı, yüzeyin kepçeyle temizlenmesi, dibin süpürülmesi, duvar ve su hattının fırçalanması, skimmer ve pompa sepetlerinin boşaltılması, gerektiğinde ters yıkama.",
            "en": "Weekly regular maintenance: Every week through the season, water testing, pH and chlorine adjustment, skimming the surface, vacuuming the floor, brushing the walls and waterline, emptying the skimmer and pump baskets, and backwashing when needed."
          },
          {
            "tr": "Aylık kontrol: Havuzu kendisi bakan ya da az kullanan sahipler için bir teknik kontrol ziyaretidir. Su değerlerinin ölçülmesi, filtre basıncının ve pompanın kontrolü, ekipman ve aydınlatmanın gözden geçirilmesi ile dozaj önerisini içerir.",
            "en": "Monthly inspection: A technical check-up visit for owners who look after the pool themselves or use it lightly. It includes measuring water values, checking filter pressure and the pump, reviewing equipment and lighting, and giving dosing advice."
          },
          {
            "tr": "Sezon açılışı: Kış örtüsünün kaldırılması, su seviyesinin tamamlanması, ekipmanın devreye alınıp sızdırmazlığının kontrolü, kapsamlı temizlik, filtre bakımı ve suyun ideal değerlere getirilmesi.",
            "en": "Season opening: Removing the winter cover, topping up the water level, bringing the equipment back online and checking it for leaks, a thorough clean, filter servicing and bringing the water to its ideal values."
          },
          {
            "tr": "Kışlama: Suyun dengelenmesi, kış kimyasalının uygulanması, su seviyesinin ayarlanması, ekipman ve boruların korunması, örtünün serilmesi. Süreci [havuzu kışa hazırlama](post:havuzu-kisa-hazirlama) yazımızda adım adım bulabilirsiniz.",
            "en": "Winterisation: Balancing the water, applying winter chemicals, setting the water level, protecting equipment and pipework, and fitting the cover. You can follow the process step by step in our article on [preparing a pool for winter](post:havuzu-kisa-hazirlama)."
          }
        ]
      },
      {
        "heading": {
          "tr": "Haftalık bakım aboneliği neden en ekonomik seçenektir?",
          "en": "Why is a weekly maintenance subscription the most economical option?"
        },
        "paragraphs": [
          {
            "tr": "Havuz bakımında en pahalı iş, ihmal edilmiş bir havuzu yeniden kurtarmaktır. Yaz sıcağında birkaç gün kontrolsüz kalan suda klor hızla tükenir, pH kayar ve yosun çoğalmaya başlar. Bu noktadan sonra yoğun şok klorlama, çöktürücü, defalarca süpürme ve uzun filtrasyon süreleri gerekir; yani hem kimyasal hem de işçilik tüketimi artar. [Havuz suyu yeşerirse](post:havuz-suyu-yesermesi) neler yapılması gerektiğini ayrı bir yazıda anlattık, ancak en düşük maliyetli çözüm, suyun bu noktaya hiç gelmemesidir.",
            "en": "The most expensive job in pool care is rescuing a neglected pool. In summer heat, water left unchecked for a few days loses its chlorine quickly, the pH drifts and algae begins to spread. From then on it takes heavy shock chlorination, flocculant, repeated vacuuming and long filtration cycles, which means more chemicals and more labour. We have covered what to do [if your pool water turns green](post:havuz-suyu-yesermesi) in a separate article, but the lowest-cost solution is never letting the water reach that point."
          },
          {
            "tr": "Haftalık ritimde ise değerler küçük düzeltmelerle dengede tutulur; kimyasal az ve kontrollü kullanılır, filtre ve pompa daha az zorlanır, ekipmanın ömrü uzar. Sorunlar da büyümeden fark edilir: gevşeyen bir bağlantı, azalan bir su seviyesi ya da yükselen filtre basıncı erken yakalanır. Bu nedenle villa sahiplerine çoğunlukla sezon boyunca [düzenli havuz bakımı hizmeti](page:maintenance) öneriyoruz; ziyaret başına tutar daha yüksek görünse bile sezon sonundaki toplam maliyet genellikle daha öngörülebilir olur.",
            "en": "On a weekly rhythm, by contrast, values are kept in balance with small corrections; chemicals are used sparingly and in a controlled way, the filter and pump are under less strain and equipment lasts longer. Problems are also spotted before they grow: a loosening fitting, a dropping water level or rising filter pressure is caught early. That is why we usually recommend a [regular pool maintenance service](page:maintenance) throughout the season to villa owners; even if the cost per visit looks higher, the total at the end of the season tends to be far more predictable."
          }
        ]
      },
      {
        "heading": {
          "tr": "İzmir ve Çeşme yarımadasında bakım maliyetini artıran yerel koşullar nelerdir?",
          "en": "Which local conditions raise maintenance costs in İzmir and on the Çeşme peninsula?"
        },
        "paragraphs": [
          {
            "tr": "Çeşme yarımadası havuz sahipleri için keyifli olduğu kadar talepkâr bir bölgedir. Aynı büyüklükteki bir havuz, iç bölgelerdeki bir şehir havuzuna kıyasla burada daha fazla emek ister. Bunun nedeni tek bir etken değil, birbirini besleyen birkaç yerel koşuldur. Özellikle [Alaçatı'daki villa havuzlarında](area:alacati) rüzgârın etkisini her sezon açıkça görüyoruz. Aşağıdaki koşullar hem ziyaret süresini hem de kimyasal ihtiyacını doğrudan etkiler; bu yüzden bölgedeki bakım fiyatları, rüzgârdan korunaklı iç bölgelerdeki havuzlarla bire bir karşılaştırılmamalıdır.",
            "en": "The Çeşme peninsula is as demanding for pool owners as it is enjoyable. A pool of the same size needs more effort here than a city pool further inland. The reason is not a single factor but several local conditions that feed into one another. We see the effect of the wind clearly every season, especially [in villa pools in Alaçatı](area:alacati). The conditions below directly affect both visit length and chemical demand, so maintenance prices on the peninsula should not be compared like for like with sheltered pools further inland."
          },
          {
            "tr": "Aşağıda sıraladığımız koşulların maliyete etkisi yine de yönetilebilir. Havuzun rüzgâr alan tarafına uygun bitki seçimi, sezon dışında örtü kullanımı ve ekipmanın düzenli kontrol edilmesi bakım yükünü belirgin biçimde hafifletir. Keşif sırasında bahçenin rüzgâr yönünü, havuzun denize uzaklığını ve çevredeki ağaçları not ediyor, bakım planını bu verilere göre kuruyoruz. Böylece yoğun dönemde ek ziyaret gerekip gerekmediği baştan öngörülür ve teklif sezon ortasında sürpriz barındırmaz.",
            "en": "The cost impact of the conditions listed below can still be managed. Choosing suitable planting on the windward side of the pool, using a cover outside the season and checking equipment regularly all ease the maintenance load noticeably. During the site visit we note the garden's wind direction, the pool's distance from the sea and the surrounding trees, and build the maintenance plan around that information. This way, whether extra visits will be needed in the busy period is anticipated from the start, and the quote holds no mid-season surprises."
          }
        ],
        "bullets": [
          {
            "tr": "Tuzlu deniz havası: Kıyıya yakın havuzlarda metal aksam, merdiven, lamba çerçeveleri ve dış mekân ekipmanı korozyona daha açıktır. Bu da daha sık ekipman kontrolü ve özenli temizlik gerektirir.",
            "en": "Salty sea air: In pools close to the shore, metal fittings, ladders, light rims and outdoor equipment are more exposed to corrosion. That calls for more frequent equipment checks and careful cleaning."
          },
          {
            "tr": "Rüzgârla gelen toz, yaprak ve polen: İmbat ve lodos, bahçedeki yaprakları ve toprağı havuza taşır. Skimmer sepetleri hızla dolar, dip daha sık süpürülür ve filtre daha çabuk kirlenir.",
            "en": "Wind-borne dust, leaves and pollen: The imbat and lodos winds carry garden leaves and soil into the pool. Skimmer baskets fill quickly, the floor needs vacuuming more often and the filter clogs sooner."
          },
          {
            "tr": "Uzun ve yoğun sezon: Havuzlar ilkbahardan sonbahara kadar kullanılır; temmuz ve ağustosta ise misafir yüküyle birlikte bulaşan yük belirgin biçimde artar ve güçlü güneş klorun daha hızlı tükenmesine yol açar.",
            "en": "A long, busy season: Pools are in use from spring to autumn, and in July and August the bather load rises sharply with guests, while the strong sun burns off chlorine faster."
          },
          {
            "tr": "İlçeler arası mesafe: Çeşme, Alaçatı, Ilıca, Urla, Seferihisar ve Karaburun arasındaki yollar, özellikle yaz trafiğinde ziyaret planlamasını etkiler ve konuma göre maliyete yansır.",
            "en": "Distances between districts: The roads linking Çeşme, Alaçatı, Ilıca, Urla, Seferihisar and Karaburun affect visit planning, particularly in summer traffic, and are reflected in the cost depending on location."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz bakımını kendiniz mi yapmalısınız, profesyonele mi bırakmalısınız?",
          "en": "Should you maintain the pool yourself or leave it to a professional?"
        },
        "paragraphs": [
          {
            "tr": "Havuzu kendiniz bakmak mümkündür, ancak bu yol da bir maliyet taşır. Temel bir set için test kiti, fırça, kepçe ve süpürge gibi ekipmanların yanında düzenli kimyasal alımı gerekir: günlük dezenfeksiyon için [multifonksiyon klor tableti](product:multi-tablet-wtr), pH yükseldiğinde kullanılan [sıvı pH düşürücü](product:sivi-ph-selenoid), yosun önleyici ve berraklaştırıcı bunların başında gelir. Hangi ürünün ne işe yaradığını [havuz kimyasalları rehberimizde](post:havuz-kimyasallari-rehberi) ayrıntılı olarak anlattık. Kimyasalları asla birbirine karıştırmayın, her zaman kimyasalı suya ekleyin, ürün etiketindeki dozaja uyun ve ürünleri çocuklardan uzak, serin ve kuru bir yerde saklayın.",
            "en": "Looking after the pool yourself is possible, but that route has its own costs. Beyond basic equipment such as a test kit, brush, skimmer net and vacuum, you will need to buy chemicals regularly: a [multifunction chlorine tablet](product:multi-tablet-wtr) for daily disinfection, a [liquid pH reducer](product:sivi-ph-selenoid) for when the pH climbs, plus algaecide and clarifier are the essentials. We explain what each product does in our [pool chemicals guide](post:havuz-kimyasallari-rehberi). Never mix chemicals with one another, always add the chemical to the water, follow the dosage on the product label and store products in a cool, dry place out of children's reach."
          },
          {
            "tr": "Asıl gizli maliyet ise zaman ve hata payıdır. Her hafta ölçüm yapmak, değerleri pH 7,2–7,6 ve serbest klor 1–3 ppm aralığında tutmak, filtreyi doğru zamanda ters yıkamak ve sezon boyunca bu rutini aksatmamak ciddi bir disiplin ister. Yanlış dozaj, bulanık su ya da tahriş edici su olarak geri döner ve düzeltmesi ek kimyasal demektir. Villasında sürekli yaşamayan ya da havuzu kiraya veren sahipler için profesyonel bakım, genellikle hem daha güvenli hem de toplamda daha hesaplı bir seçenektir.",
            "en": "The real hidden cost, however, is time and the margin for error. Testing every week, keeping values within pH 7.2–7.6 and free chlorine 1–3 ppm, backwashing the filter at the right moment and sustaining that routine all season takes real discipline. Incorrect dosing comes back as cloudy or irritating water, and correcting it means more chemicals. For owners who do not live in their villa year-round, or who rent it out, professional maintenance is usually both the safer and, overall, the more economical choice."
          }
        ]
      },
      {
        "heading": {
          "tr": "Net bakım fiyatını nasıl öğrenebilirsiniz?",
          "en": "How can you get an exact maintenance price?"
        },
        "paragraphs": [
          {
            "tr": "Doğru fiyat, havuz görülmeden verilemez. Keşif ziyaretinde havuzun hacmini, tipini, filtrasyon sistemini, ekipmanın durumunu ve bahçenin rüzgâr alma biçimini yerinde değerlendiriyor; ardından ihtiyaca uygun paketi, kimyasalların dahil olup olmadığını ve ziyaret sıklığını açıkça yazan bir teklif hazırlıyoruz. Havuzunuzun bilgilerini paylaşmak ve keşif planlamak için [bizimle iletişime geçebilirsiniz](page:contact). Sezon yoğunlaşmadan, tercihen ilkbaharda görüşmek, açılış ve haftalık bakım takvimini rahatça planlamayı kolaylaştırır.",
            "en": "An accurate price cannot be given without seeing the pool. During a site visit we assess the pool's volume, type, filtration system, equipment condition and how exposed the garden is to wind; we then prepare a quote that sets out the right package, whether chemicals are included and how often we will visit. To share your pool's details and arrange a visit, you can [get in touch with us](page:contact). Talking before the season gets busy, ideally in spring, makes it much easier to plan the opening and the weekly maintenance schedule."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "İzmir'de havuz bakımı ne kadar tutar?",
          "en": "How much does pool maintenance cost in İzmir?"
        },
        "a": {
          "tr": "Tek bir sabit fiyat yoktur. Bedeli havuzun hacmi, tipi (skimmerli, taşmalı, sonsuzluk), bakım sıklığı, kimyasalların pakete dahil olup olmadığı, havuzun hangi ilçede bulunduğu ve sezon belirler. Bu yüzden sağlıklı bir fiyat için havuzun yerinde görülmesi gerekir. Keşif sonrasında kapsamı ve kimyasal durumunu açıkça yazan net bir teklif hazırlıyoruz.",
          "en": "There is no single fixed price. The cost depends on the pool's volume, its type (skimmer, overflow or infinity), service frequency, whether chemicals are included, which district the pool is in and the season. That is why a reliable price requires seeing the pool in person. After a site visit we prepare a clear quote that spells out the scope and how chemicals are handled."
        }
      },
      {
        "q": {
          "tr": "Haftalık havuz bakımı neleri içerir?",
          "en": "What does weekly pool maintenance include?"
        },
        "a": {
          "tr": "Haftalık bakım; su değerlerinin ölçülmesi, pH ve klorun ideal aralığa getirilmesi, yüzeyin kepçeyle temizlenmesi, dibin süpürülmesi, duvar ve su hattının fırçalanması, skimmer ve pompa sepetlerinin boşaltılması ve gerektiğinde filtrenin ters yıkanmasını kapsar. Ziyaret sırasında pompa, filtre basıncı ve aydınlatma da gözden geçirilir.",
          "en": "Weekly maintenance covers testing the water, bringing pH and chlorine into the ideal range, skimming the surface, vacuuming the floor, brushing the walls and waterline, emptying the skimmer and pump baskets, and backwashing the filter when needed. The pump, filter pressure and lighting are also reviewed during each visit."
        }
      },
      {
        "q": {
          "tr": "Kimyasallar bakım ücretine dahil mi?",
          "en": "Are chemicals included in the maintenance fee?"
        },
        "a": {
          "tr": "Bu, seçilen pakete bağlıdır. Bazı paketler yalnızca işçiliği kapsar ve kimyasallar ayrıca karşılanır; bazılarında ise klor, pH düzenleyici ve yosun önleyici gibi sarf malzemeleri fiyata dahildir. Hangi modelin uygulandığı teklifte açıkça belirtilmelidir. Karşılaştırma yaparken bu ayrıma mutlaka dikkat edin, çünkü toplam maliyeti belirgin biçimde değiştirir.",
          "en": "It depends on the package you choose. Some packages cover labour only, with chemicals charged separately; others include consumables such as chlorine, pH adjusters and algaecide in the price. The quote should state clearly which model applies. Pay close attention to this distinction when comparing offers, because it changes the total cost considerably."
        }
      },
      {
        "q": {
          "tr": "Urla, Seferihisar ve Karaburun'a da bakım hizmeti veriyor musunuz?",
          "en": "Do you also provide maintenance in Urla, Seferihisar and Karaburun?"
        },
        "a": {
          "tr": "Evet. Hizmet bölgemiz Çeşme, Alaçatı, Ilıca, Urla, Seferihisar ve Karaburun'u kapsar. Bu ilçelerdeki villa havuzlarına düzenli bakım, sezon açılışı ve kışlama hizmeti veriyoruz. Ziyaret takvimi ve fiyat, havuzun konumuna ve ekiplerimizin güzergâhına göre planlanır; keşif sırasında bu ayrıntıları sizinle birlikte netleştiriyoruz.",
          "en": "Yes. Our service area covers Çeşme, Alaçatı, Ilıca, Urla, Seferihisar and Karaburun. We provide regular maintenance, season opening and winterisation for villa pools in these districts. The visit schedule and price are planned around the pool's location and our teams' routes, and we finalise these details with you during the site visit."
        }
      }
    ]
  },
  "havuz-yapim-maliyeti-izmir": {
    "title": {
      "tr": "İzmir'de Havuz Yapım Maliyeti: Fiyatı Belirleyen Kalemler",
      "en": "Pool Construction Cost in İzmir: The Items That Set the Price"
    },
    "seoTitle": {
      "tr": "İzmir Havuz Yapım Maliyeti: Fiyat Kalemleri",
      "en": "İzmir Pool Construction Cost: Price Items"
    },
    "excerpt": {
      "tr": "İzmir ve Çeşme'de havuz yapım maliyetini belirleyen kalemler, fiber-beton farkı, taşma sistemi ve kaya zemin etkisi. Net fiyat için keşif şart.",
      "en": "The items behind pool construction cost in İzmir and Çeşme: fiberglass vs concrete, overflow systems and rocky ground. A site survey sets the price."
    },
    "intro": {
      "tr": "Havuz yapım maliyeti İzmir'de, özellikle Çeşme yarımadasında, tek bir metrekare fiyatıyla açıklanamaz. Aynı ölçüdeki iki havuzun bütçesi; arsanın zeminine, eğimine, seçilen yapım sistemine, taşma tipine ve kaplamaya göre belirgin biçimde ayrışabilir. Bu nedenle internette gördüğünüz tek rakamlı fiyatlar çoğu zaman eksik bir resim çizer. Bu yazıda kesin bir TL rakamı vermek yerine, havuz maliyetini oluşturan kalemleri tek tek ve şeffaf biçimde açıklıyoruz: hangi kalem neden var, hangi tercih bütçeyi nasıl etkiler ve Çeşme, Alaçatı, Karaburun gibi bölgelerde maliyeti hangi yerel koşullar yükseltir. Amacımız, keşif görüşmesine bilinçli ve doğru sorularla gelmenizi sağlamaktır.",
      "en": "Pool construction cost in İzmir, and especially on the Çeşme peninsula, cannot be explained by a single price per square metre. The budgets of two pools of the same size can differ markedly depending on the plot's ground, its slope, the chosen construction system, the overflow type and the finish. That is why single-figure prices you see online often paint an incomplete picture. In this article, instead of giving a fixed lira figure, we explain the items that make up the cost of a pool one by one and transparently: why each item exists, how each choice affects the budget, and which local conditions raise costs in areas such as Çeşme, Alaçatı and Karaburun. Our aim is to help you arrive at the site survey informed and with the right questions."
    },
    "sections": [
      {
        "heading": {
          "tr": "Havuz yapım maliyetini hangi kalemler oluşturur?",
          "en": "Which items make up the cost of building a pool?"
        },
        "paragraphs": [
          {
            "tr": "Bir havuz, göründüğünden çok daha fazla katmandan oluşur. Suyun altında kalan iskelet, izolasyon ve tesisat, bitmiş havuzda hiç görünmez ama bütçenin önemli bir bölümünü taşır ve havuzun yıllar boyunca sorunsuz çalışmasını belirler. Aşağıdaki liste, [havuz inşaatı hizmetimiz](page:construction) kapsamında bir teklifte yer alan temel maliyet kalemlerini sıralar. Her kalemin payı projeden projeye değişir; bu yüzden listeyi bir fiyat tablosu olarak değil, teklif karşılaştırırken kontrol edeceğiniz bir kapsam listesi olarak okuyun.",
            "en": "A pool consists of far more layers than it appears. The structure, waterproofing and plumbing that sit below the water are invisible in the finished pool, yet they carry a significant share of the budget and determine whether the pool works trouble-free for years. The list below sets out the core cost items included in a quote under [our pool construction service](page:construction). The share of each item varies from project to project, so read the list not as a price table but as a scope checklist to use when comparing quotes."
          }
        ],
        "bullets": [
          {
            "tr": "Zemin etüdü: Zeminin taşıma gücünü, kaya ya da dolgu durumunu ve yeraltı suyunu ortaya koyar; tasarımın ve kazı yönteminin temelidir.",
            "en": "Ground survey: reveals the ground's bearing capacity, whether it is rock or fill, and the groundwater situation; it underpins the design and the excavation method."
          },
          {
            "tr": "Kazı ve hafriyat: Yumuşak toprakta hızlı ilerleyen kazı, kaya zeminde kırıcı ekipman ve daha uzun süre gerektirir; hafriyatın sahadan taşınması da bu kaleme girer.",
            "en": "Excavation and spoil removal: digging moves quickly in soft soil but needs breaker equipment and more time in rock; hauling the spoil off site is also part of this item."
          },
          {
            "tr": "Betonarme veya gunit iskelet: Çelik donatı ve beton gövde, havuzun taşıyıcı sistemidir; ölçü, derinlik ve form bu kalemi doğrudan etkiler.",
            "en": "Reinforced concrete or gunite shell: the steel reinforcement and concrete body form the pool's structural system; size, depth and shape directly affect this item."
          },
          {
            "tr": "İzolasyon: Gövdenin su yalıtımı, ileride su kaçağı yaşamamanın en önemli güvencesidir; tasarruf edilmemesi gereken kalemdir.",
            "en": "Waterproofing: sealing the shell is the most important safeguard against future leaks; it is not an item to economise on."
          },
          {
            "tr": "Kaplama: Seramik, cam mozaik veya doğal taş seçimi hem görünümü hem bütçeyi belirgin biçimde değiştirir; kenar taşları ve çevre döşemesi de bu kaleme eklenir.",
            "en": "Finish: the choice of ceramic, glass mosaic or natural stone noticeably changes both the look and the budget; coping stones and surrounding paving are added to this item too."
          },
          {
            "tr": "Tesisat: Dip süzgeci, skimmer ya da taşma kanalı, nozullar ve boru hatları; hat uzunluğu makine dairesinin konumuna bağlıdır.",
            "en": "Plumbing: main drain, skimmers or overflow channel, return nozzles and pipework; the length of the lines depends on where the plant room sits."
          },
          {
            "tr": "Filtrasyon ve pompa: Havuz hacmine göre boyutlandırılmış bir [kum filtresi](product:kum-filtresi-600) ve [havuz pompası](product:pompa-1hp), suyun sağlığı ve işletme verimi için temel ekipmandır.",
            "en": "Filtration and pump: a [sand filter](product:kum-filtresi-600) and a [pool pump](product:pompa-1hp) sized to the pool's volume are core equipment for water health and running efficiency."
          },
          {
            "tr": "Aydınlatma: Sualtı [havuz LED aydınlatma](product:led-23w) armatürlerinin sayısı ve yerleşimi, gece görünümünü ve elektrik altyapısını belirler.",
            "en": "Lighting: the number and placement of underwater [pool LED lighting](product:led-23w) fixtures shape the night-time look and the electrical infrastructure."
          },
          {
            "tr": "Ruhsat ve proje: Gerekli izin, proje çizimi ve başvuru süreçleri; kapsamı belediyeden teyit edilmelidir.",
            "en": "Permits and design documents: the required permissions, drawings and application processes; their scope should be confirmed with the municipality."
          }
        ]
      },
      {
        "heading": {
          "tr": "Fiber havuz mu beton havuz mu: maliyet açısından hangisi?",
          "en": "Fiberglass or concrete pool: which makes more sense on cost?"
        },
        "paragraphs": [
          {
            "tr": "Maliyet sorusunda ilk ayrım yapım sistemidir. Fiber havuz fabrikada üretilen standart bir gövde olduğu için başlangıç fiyatı büyük ölçüde baştan bellidir ve kurulum kısa sürer. Gunit veya betonarme havuz ise sahada inşa edilir; bütçesi seçilen ölçüye, forma ve kaplamaya göre şekillenir ve inşa süresi haftalarla ölçülür. Ancak yalnızca başlangıç fiyatına bakmak yanıltıcı olabilir: fiberde nakliye, vinç, zemin hazırlığı ve drenaj ayrı kalemlerdir; eğimli ve dar erişimli bir villa arsasında bu kalemler beklenenden fazla yer tutabilir. Sistemlerin teknik farklarını [fiber havuz ile beton havuz karşılaştırmamızda](post:fiber-havuz-mu-beton-havuz-mu) ayrıntılı ele aldık; burada yalnızca maliyet mantığını özetliyoruz.",
            "en": "On the question of cost, the first distinction is the construction system. Because a fiberglass pool is a standard shell made in a factory, its starting price is largely known in advance and installation is quick. A gunite or reinforced-concrete pool, on the other hand, is built on site; its budget is shaped by the chosen size, form and finish, and construction is measured in weeks. Looking only at the starting price can be misleading, though: with fiberglass, transport, crane hire, base preparation and drainage are separate items, and on a sloping villa plot with narrow access they can take up more than expected. We covered the technical differences in detail in our [fiberglass versus concrete pool comparison](post:fiber-havuz-mu-beton-havuz-mu); here we only summarise the cost logic."
          }
        ],
        "bullets": [
          {
            "tr": "Başlangıç fiyatı: Fiberde standart ürün nedeniyle öngörülebilir; gunitte tasarıma göre değişken.",
            "en": "Starting price: predictable with fiberglass because the product is standard; variable with gunite depending on the design."
          },
          {
            "tr": "Saha koşulları: Fiberde nakliye ve vinç erişimi belirleyici; gunit dar ve eğimli sahaya daha kolay uyum sağlar.",
            "en": "Site conditions: with fiberglass, transport and crane access are decisive; gunite adapts more easily to narrow, sloping sites."
          },
          {
            "tr": "Tasarım esnekliği: Fiberde hazır ölçülerle sınırlı; gunitte özel form ve taşma sistemleri mümkün, bu da maliyete yansır.",
            "en": "Design flexibility: fiberglass is limited to ready sizes; gunite allows custom forms and overflow systems, which is reflected in the cost."
          },
          {
            "tr": "Uzun vadeli maliyet: Gunit gövde onarılabilir ve kaplaması yenilenebilir; bu, yatırımın ömrünü uzatır.",
            "en": "Long-term cost: a gunite shell can be repaired and re-finished, which extends the life of the investment."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz tipi ve taşma sistemi maliyeti nasıl etkiler?",
          "en": "How do pool type and overflow system affect cost?"
        },
        "paragraphs": [
          {
            "tr": "Aynı ölçüdeki havuzlar arasında bütçeyi en çok ayıran tercihlerden biri su yüzeyinin nasıl toplandığıdır. Skimmerli havuzda su, duvara yerleştirilen skimmer ağızlarından emilir; su seviyesi kenarın biraz altında kalır ve sistem görece yalındır. Taşmalı havuzda su, havuzun çevresini dolaşan bir taşma kanalına akar ve buradan bir denge deposuna iner. Bu yapı, su yüzeyini kenar taşıyla aynı hizaya getirerek çok daha zarif bir görünüm sağlar; ancak ek kanal, ızgara, denge deposu ve daha hassas bir tesisat gerektirir.",
            "en": "Among pools of the same size, one of the choices that most separates budgets is how the water surface is collected. In a skimmer pool, water is drawn through skimmer openings set into the wall; the water level sits slightly below the edge and the system is relatively simple. In an overflow pool, water spills into a channel running around the pool and drops from there into a balance tank. This brings the water surface level with the coping and gives a far more elegant look, but it requires an extra channel, grating, balance tank and more precise plumbing."
          },
          {
            "tr": "Sonsuzluk havuzu bu mantığın en ileri noktasıdır. Bir veya birkaç kenarda su, görünmeyen bir savaktan aşağıdaki toplama kanalına akar ve havuz ufukla birleşiyormuş gibi görünür. Bu etkiyi sağlamak için savak kenarının milimetrik hassasiyetle yapılması, alt kanalın ve deponun doğru hesaplanması ve çoğu zaman eğimli arazide ek taşıyıcı yapı kurulması gerekir. Dolayısıyla sonsuzluk kenarı, benzer ölçüdeki skimmerli bir havuza göre belirgin biçimde daha fazla işçilik ve malzeme ister. Sistemin nasıl çalıştığını [sonsuzluk havuzu rehberimizde](post:sonsuzluk-havuzu-nedir) anlattık.",
            "en": "The infinity pool is the most advanced form of this logic. On one or more edges, water flows over a hidden weir into a collection channel below, and the pool appears to merge with the horizon. Achieving this requires the weir edge to be built with millimetre precision, the lower channel and tank to be calculated correctly and, often on sloping land, additional structural support. An infinity edge therefore calls for noticeably more labour and material than a skimmer pool of similar size. We explained how the system works in our [infinity pool guide](post:sonsuzluk-havuzu-nedir)."
          },
          {
            "tr": "Taşma tipinin yanında ölçü, derinlik ve form da bütçeyi doğrudan etkiler. Havuz büyüdükçe kazı, donatı, beton ve kaplama miktarı artar; derinlik arttıkça hem kazı hem de gövdenin taşıması gereken su basıncı yükselir. Serbest formlu veya çok köşeli bir tasarım, dikdörtgen bir havuza göre daha fazla kalıp ve işçilik ister. Oturma sekileri, merdivenler, çocuk bölümü ya da jakuzi gibi ek alanlar da ayrı birer kalem olarak teklife yansır. Bu nedenle tasarım aşamasında hangi unsurun sizin için gerçekten önemli olduğunu belirlemek, bütçeyi bilinçli yönetmenin en etkili yoludur.",
            "en": "Alongside the overflow type, size, depth and form also directly affect the budget. As the pool grows, the amount of excavation, reinforcement, concrete and finish increases; as depth increases, both excavation and the water pressure the shell must withstand go up. A free-form or multi-cornered design needs more formwork and labour than a rectangular pool. Additional areas such as seating ledges, steps, a children's section or a spa are also reflected in the quote as separate items. That is why deciding at the design stage which elements truly matter to you is the most effective way to manage the budget consciously."
          }
        ]
      },
      {
        "heading": {
          "tr": "Çeşme yarımadasında maliyeti hangi yerel koşullar artırır?",
          "en": "Which local conditions raise costs on the Çeşme peninsula?"
        },
        "paragraphs": [
          {
            "tr": "Çeşme yarımadasında havuz yapımını düz bir İzmir bahçesinden ayıran en önemli etken zemindir. Kıyıya yakın pek çok villa arsası kayalık ve eğimlidir; kaya zeminde kazı, kepçe yerine kırıcı ekipman gerektirir, daha yavaş ilerler ve daha fazla hafriyat çıkarır. Eğimli arazide ise havuzun oturduğu platformu taşımak için istinat duvarı ve ek betonarme yapı gerekebilir. Bu koşullar özellikle [Karaburun'daki kayalık ve eğimli arsalarda](area:karaburun) ve Çeşme kıyılarında sık karşımıza çıkar. Bölgeye özgü inşaat sürecini [Çeşme ve Alaçatı'da havuz yapımı yazımızda](post:cesme-alacati-havuz-yapimi) adım adım anlattık.",
            "en": "The most important factor that sets pool construction on the Çeşme peninsula apart from a flat İzmir garden is the ground. Many villa plots near the coast are rocky and sloping; excavation in rock needs breaker equipment instead of a standard excavator, progresses more slowly and produces more spoil. On sloping land, a retaining wall and additional reinforced concrete structure may be needed to support the platform the pool sits on. We encounter these conditions especially on [the rocky, sloping plots of Karaburun](area:karaburun) and along the Çeşme coastline. We described the region-specific construction process step by step in our article on [pool construction in Çeşme and Alaçatı](post:cesme-alacati-havuz-yapimi)."
          },
          {
            "tr": "İkinci etken iklimdir. Tuzlu deniz havası, güçlü imbat ve lodos rüzgârları ile uzun, yoğun yaz sezonu malzemeyi zorlar. Bu nedenle kenar taşından metal aksama, pompa bağlantılarından aydınlatma armatürlerine kadar tuza ve UV'ye dayanıklı malzeme seçmek gerekir. Bu malzemeler başlangıçta daha fazla bütçe ister; ancak korozyon, renk kaybı ve erken yenileme gibi sorunları önleyerek uzun vadede tasarruf sağlar. Rüzgârın taşıdığı toz ve yaprak da filtrasyon yükünü artırır; bu yüzden bölgede ekipmanın biraz daha cömert boyutlandırılması çoğu zaman mantıklı bir tercihtir.",
            "en": "The second factor is the climate. Salty sea air, strong imbat and lodos winds and a long, intense summer season put materials under strain. That is why it is necessary to choose salt- and UV-resistant materials for everything from coping stones and metal fittings to pump connections and light fixtures. These materials require a larger budget at the outset, but by preventing corrosion, fading and premature replacement they save money in the long run. Dust and leaves carried by the wind also increase the load on filtration, so in this region sizing the equipment a little more generously is often a sensible choice."
          },
          {
            "tr": "Üçüncü etken erişim ve lojistiktir. Alaçatı'nın dar sokaklarında ya da yamaçtaki bir arsada beton pompası, kırıcı ve kamyonun sahaya ulaşması her zaman kolay değildir. Bazen malzemenin küçük araçlarla taşınması, ekipmanın parça parça sahaya indirilmesi veya komşu parsellerle çalışma saatlerinin planlanması gerekir. Yaz sezonunda bazı yerleşimlerde inşaat faaliyetlerine yönelik kısıtlamalar da gündeme gelebilir; bu da takvimi ve dolaylı olarak maliyeti etkiler. Bu nedenle keşifte yalnızca havuzun yerine değil, sahaya giden yola da bakarız.",
            "en": "The third factor is access and logistics. In the narrow streets of Alaçatı or on a hillside plot, getting a concrete pump, a breaker and a truck onto the site is not always easy. Sometimes materials have to be carried in with smaller vehicles, equipment has to be brought down to the site in parts, or working hours have to be planned around neighbouring plots. In summer, some settlements may also restrict construction activity, which affects the schedule and, indirectly, the cost. That is why during the survey we look not only at where the pool will go, but also at the road leading to the site."
          }
        ]
      },
      {
        "heading": {
          "tr": "Hangi maliyet kalemleri çoğu teklifte görünmez?",
          "en": "Which cost items stay hidden in most quotes?"
        },
        "paragraphs": [
          {
            "tr": "Teklifleri karşılaştırırken en sık yapılan hata, yalnızca havuz gövdesinin fiyatına bakmaktır. Oysa bazı kalemler ilk konuşmada gündeme gelmez ama proje ilerledikçe ortaya çıkar. Zemin etüdü, ruhsat ve proje çizimi, hafriyatın sahadan uzaklaştırılması, havuz çevresindeki döşeme ve peyzaj, makine dairesinin inşası, elektrik ve su bağlantıları ile havuz çevresi güvenlik önlemleri bu kalemlerin başında gelir. Ruhsat konusunda kesin bir hüküm vermek doğru olmaz; havuzun ölçüsüne, konumuna ve imar durumuna göre gereklilikler değişebileceği için süreci mutlaka belediyeden veya ilgili kurumdan teyit etmenizi öneririz.",
            "en": "The most common mistake when comparing quotes is to look only at the price of the pool shell. Yet some items are not raised in the first conversation and only surface as the project progresses. Chief among them are the ground survey, permits and drawings, removing spoil from the site, paving and landscaping around the pool, building the plant room, electrical and water connections, and safety measures around the pool. It would not be right to give a definitive ruling on permits; because requirements can vary with the pool's size, location and zoning status, we recommend always confirming the process with the municipality or the relevant authority."
          },
          {
            "tr": "Görünmeyen bir diğer kalem de işletme maliyetidir. Havuz teslim edildikten sonra elektrik, su, kimyasal ve düzenli bakım giderleri başlar. Doğru boyutlandırılmış ekipman ve iyi bir izolasyon bu giderleri yıllar boyunca düşük tutar; yapımda birkaç kalemden tasarruf etmek ise çoğu zaman işletme sırasında daha yüksek bir fatura olarak geri döner. Yapım bütçesini planlarken bu tabloyu da görmek isterseniz [İzmir'de havuz bakım fiyatlarını belirleyen etkenleri](post:havuz-bakim-fiyatlari-izmir) ayrıca inceleyebilirsiniz.",
            "en": "Another hidden item is running cost. Once the pool is handed over, electricity, water, chemicals and regular maintenance expenses begin. Correctly sized equipment and good waterproofing keep these expenses low for years, whereas cutting corners on a few items during construction often comes back as a higher bill during operation. If you want to see this side of the picture while planning your construction budget, you can also review [the factors that set pool maintenance prices in İzmir](post:havuz-bakim-fiyatlari-izmir)."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz yatırımı villanın değerine ne katar?",
          "en": "What does a pool investment add to a villa's value?"
        },
        "paragraphs": [
          {
            "tr": "Çeşme ve Alaçatı'da havuz, villa alıcılarının ve kiracılarının çoğu zaman beklediği bir unsurdur; havuzsuz bir villa aynı bölgedeki benzerleri arasında geri planda kalabilir. Ancak havuzun değere katkısı, kalitesiyle doğru orantılıdır. İyi yalıtılmış, doğru ekipmanla donatılmış, villanın mimarisine ve manzarasına uyan bir havuz mülkün çekiciliğini artırır. Buna karşılık sürekli su kaçıran, kaplaması erken bozulan bir havuz, alıcı gözünde bir onarım masrafına dönüşür. Bu yüzden maliyeti yalnızca bugünkü bütçe olarak değil, yıllarca kullanılacak ve mülkle birlikte değerlendirilecek bir yatırım olarak düşünmek gerekir. Net bir bütçe için en doğru adım, arsanızın yerinde incelendiği bir keşiftir.",
            "en": "In Çeşme and Alaçatı, a pool is often something villa buyers and tenants expect; a villa without one can fall behind comparable properties in the same area. However, a pool's contribution to value is directly proportional to its quality. A well-waterproofed pool, fitted with the right equipment and suited to the villa's architecture and view, increases the property's appeal. By contrast, a pool that constantly leaks or whose finish deteriorates early becomes a repair bill in a buyer's eyes. That is why cost should be viewed not only as today's budget, but as an investment that will be used for years and assessed together with the property. The most reliable step towards a clear budget is a site survey in which your plot is examined in person."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "İzmir'de havuz yapımı ne kadara mal olur?",
          "en": "How much does it cost to build a pool in İzmir?"
        },
        "a": {
          "tr": "Tek bir fiyat vermek doğru olmaz, çünkü maliyet arsanın zeminine ve eğimine, yapım sistemine, havuz ölçüsüne, taşma tipine, kaplamaya ve ekipman seçimine göre değişir. Metrekare üzerinden verilen fiyatlar çoğu zaman kazı, izolasyon, ruhsat ve çevre düzenlemesi gibi kalemleri kapsamaz. Net ve karşılaştırılabilir bir teklif için arsanın yerinde incelendiği bir keşif yapılması gerekir.",
          "en": "Giving a single price would not be accurate, because cost varies with the plot's ground and slope, the construction system, pool size, overflow type, finish and equipment choice. Prices quoted per square metre often exclude items such as excavation, waterproofing, permits and landscaping. A clear, comparable quote requires a site survey in which the plot is examined in person."
        }
      },
      {
        "q": {
          "tr": "Fiber havuz mu daha ucuz, beton havuz mu?",
          "en": "Is a fiberglass pool or a concrete pool cheaper?"
        },
        "a": {
          "tr": "Fiber havuzun başlangıç fiyatı standart ürün olduğu için genellikle daha öngörülebilirdir ve kurulumu hızlıdır. Ancak nakliye, vinç, zemin hazırlığı ve drenaj ayrı kalemlerdir; eğimli ve dar erişimli arsalarda bu fark kapanabilir. Beton (gunit) havuz tasarıma göre değişir, fakat onarılabilir ve kaplaması yenilenebilir olduğu için uzun vadede daha kalıcı bir yatırım sunar.",
          "en": "A fiberglass pool's starting price is usually more predictable because it is a standard product, and installation is quick. However, transport, crane hire, base preparation and drainage are separate items, and on sloping plots with narrow access this difference can close. A concrete (gunite) pool varies with the design, but because it can be repaired and re-finished it offers a more permanent investment in the long run."
        }
      },
      {
        "q": {
          "tr": "Kaya veya eğimli zemin havuz maliyetini artırır mı?",
          "en": "Does rocky or sloping ground increase pool cost?"
        },
        "a": {
          "tr": "Evet. Kaya zeminde kazı için kırıcı ekipman gerekir, iş daha yavaş ilerler ve daha fazla hafriyat çıkar. Eğimli arazide ise havuz platformunu taşımak için istinat duvarı ve ek betonarme yapı gerekebilir. Çeşme kıyılarında ve Karaburun'da bu koşullar sık görülür. Etkinin boyutu ancak zemin etüdü ve yerinde keşifle netleşir.",
          "en": "Yes. Excavating rock requires breaker equipment, the work progresses more slowly and more spoil is produced. On sloping land, a retaining wall and additional reinforced concrete structure may be needed to support the pool platform. These conditions are common along the Çeşme coast and in Karaburun. The extent of the impact only becomes clear through a ground survey and an on-site assessment."
        }
      },
      {
        "q": {
          "tr": "Havuz yapımı için ruhsat şart mı, maliyeti var mı?",
          "en": "Is a permit required to build a pool, and does it cost anything?"
        },
        "a": {
          "tr": "Gereklilikler havuzun ölçüsüne, konumuna ve arsanın imar durumuna göre değişebilir; bu nedenle kesin bir hüküm vermek doğru olmaz. Proje çizimi, başvuru ve harçlar gibi kalemler bütçeye eklenebilir. İnşaata başlamadan önce süreci ve olası giderleri mutlaka belediyeden veya ilgili kurumdan teyit etmenizi öneririz.",
          "en": "Requirements can vary with the pool's size, location and the plot's zoning status, so it would not be right to give a definitive ruling. Items such as drawings, applications and fees may be added to the budget. Before construction begins, we recommend always confirming the process and possible costs with the municipality or the relevant authority."
        }
      }
    ]
  },
  "havuz-su-kacagi-tamiri": {
    "title": {
      "tr": "Havuz Su Kaçağı Tamiri: Nasıl Anlaşılır ve Çözülür?",
      "en": "Pool Leak Repair: How to Spot a Leak and Fix It"
    },
    "seoTitle": {
      "tr": "Havuz Su Kaçağı Tamiri: Tespit ve Çözüm",
      "en": "Pool Leak Repair: Detection and Fixes"
    },
    "excerpt": {
      "tr": "Havuz su kaçağı belirtileri, kova testiyle buharlaşma ayrımı, olası kaçak kaynakları ve tamir yöntemleri. Çeşme ve Alaçatı için uzman rehberi.",
      "en": "Signs of a pool leak, the bucket test for telling evaporation apart, likely leak sources and repair methods. An expert guide for Çeşme and Alaçatı."
    },
    "intro": {
      "tr": "Havuz su kaçağı, villa sahiplerinin en çok endişelendiği sorunlardan biridir; ancak havuzdaki her su kaybı bir kaçak anlamına gelmez. Özellikle sıcak ve rüzgârlı yaz günlerinde su seviyesinin bir miktar düşmesi doğaldır ve bunun büyük kısmı buharlaşmadan kaynaklanır. Bu yüzden tamire geçmeden önce doğru teşhis gerekir. Bu yazıda kaçağın belirtilerini, evde uygulayabileceğiniz kova testini, kaçağın olası kaynaklarını, profesyonel tespit yöntemlerini ve kaynağa göre tamirin nasıl yapıldığını adım adım anlatıyoruz. Amaç, gereksiz masraftan kaçınmanızı ve gerçek bir kaçağı henüz büyümeden, erkenden yakalamanızı sağlamak.",
      "en": "A pool leak is one of the problems villa owners worry about most, yet not every drop in water level means a leak. On hot, windy summer days it is natural for the level to fall somewhat, and much of that loss comes from evaporation. That is why a proper diagnosis should come before any repair. In this article we walk through the signs of a leak, the bucket test you can carry out at home, the likely sources of a leak, the professional detection methods and how repairs are made depending on the source. The aim is to help you avoid unnecessary expense and catch a genuine leak early, before it has a chance to grow."
    },
    "sections": [
      {
        "heading": {
          "tr": "Havuzda su kaçağı belirtileri nelerdir?",
          "en": "What are the signs of a pool leak?"
        },
        "paragraphs": [
          {
            "tr": "Kaçak çoğu zaman tek bir belirtiyle değil, birbirini destekleyen birkaç işaretle kendini gösterir. Tek başına su seviyesindeki düşüş yanıltıcı olabilir; ancak aşağıdaki belirtilerden ikisi ya da daha fazlası aynı anda görülüyorsa havuzun daha yakından incelenmesi gerekir. Özellikle kimyasal dengenin sık sık bozulması gözden kaçan bir işarettir: sürekli eklenen taze su pH'ı, alkaliniteyi ve stabilizatör seviyesini seyrelterek dengeyi bozar ve suyun kolayca bulanmasına yol açar. Bu tablo çoğu zaman bir [kimyasal dengesizliği](post:havuz-suyu-yesermesi) sorunu gibi görünse de kökünde kaçak olabilir.",
            "en": "A leak rarely shows itself through a single sign; it usually appears as several clues that reinforce one another. A falling water level on its own can be misleading, but if two or more of the signs below appear at the same time, the pool deserves a closer look. Frequent swings in water chemistry are an often-overlooked clue: constant top-ups of fresh water dilute the pH, alkalinity and stabiliser levels, upsetting the balance and making the water cloud easily. This often looks like a [chemical imbalance](post:havuz-suyu-yesermesi) problem, yet a leak may be at its root."
          }
        ],
        "bullets": [
          {
            "tr": "Su seviyesinin normalden belirgin şekilde hızlı düşmesi",
            "en": "The water level dropping noticeably faster than usual"
          },
          {
            "tr": "Havuza neredeyse her gün su ekleme ihtiyacı duyulması",
            "en": "Needing to top up the pool almost every day"
          },
          {
            "tr": "Havuz çevresinde, bahçede veya teknik odada sürekli ıslak zemin, çökme ya da yosunlanma",
            "en": "Constantly wet ground, subsidence or moss around the pool, in the garden or in the plant room"
          },
          {
            "tr": "Kimyasal değerlerin sık sık bozulması ve suyun kolayca bulanması",
            "en": "Chemical readings drifting often and the water clouding easily"
          },
          {
            "tr": "Kullanımla açıklanamayan şekilde artan su faturası",
            "en": "A water bill rising in a way that usage cannot explain"
          },
          {
            "tr": "Kaplamada gözle görülen çatlak, kabaran ya da dökülen derzler",
            "en": "Visible cracks in the finish, or grout that is lifting or crumbling"
          }
        ]
      },
      {
        "heading": {
          "tr": "Buharlaşma mı, gerçek kaçak mı? Kova testi nasıl yapılır?",
          "en": "Evaporation or a real leak? How do you do the bucket test?"
        },
        "paragraphs": [
          {
            "tr": "Havuzun ne kadar su kaybettiği; hava sıcaklığına, rüzgâra, nem oranına, güneşlenme süresine ve havuzun örtülü olup olmamasına göre değişir. Bu nedenle 'normal kayıp' için herkese uyan tek bir rakam vermek doğru değildir. Kesin olan şudur: sıcak ve rüzgârlı günlerde buharlaşma belirgin şekilde artar. [Çeşme'de](area:cesme) yaz boyunca esen imbat ve zaman zaman gelen lodos, su yüzeyini sürekli yalayarak kaybı hızlandırır. Buharlaşmayı gerçek kaçaktan ayırmanın en pratik yolu, aynı koşullarda havuzla kıyaslanan bir kovadır. Test için aşağıdaki adımları izleyin; test süresince havuza su eklemeyin, havuzu kullanmayın ve yağmur beklenmeyen bir gün seçin.",
            "en": "How much water a pool loses depends on air temperature, wind, humidity, hours of sunshine and whether the pool is covered. It is therefore not right to give one 'normal loss' figure that fits everyone. What is certain is that evaporation rises markedly on hot, windy days. [In Çeşme](area:cesme), the imbat breeze that blows all summer and the occasional lodos sweep constantly across the water surface and speed up the loss. The most practical way to separate evaporation from a real leak is a bucket compared against the pool under the same conditions. Follow the steps below; during the test do not add water, do not use the pool, and choose a day with no rain forecast."
          },
          {
            "tr": "Kovadaki düşüş, o gün yaşanan buharlaşmayı temsil eder. Havuzdaki düşüş kovadakinden belirgin şekilde fazlaysa kaçak şüphesi güçlenir. Testi bir kez de pompa kapalıyken tekrarlamak, kaçağın yerine dair ipucu verir: kayıp pompa çalışırken artıyorsa sorun büyük olasılıkla basınçlı dönüş hattındadır; pompa kapalıyken daha fazlaysa emiş tarafı şüphelidir; iki durumda da aynıysa kaçak daha çok havuz kabuğunda, kaplamada veya gömme parçalardadır. Bu ayrım yön gösterir ama kesin teşhisin yerini tutmaz.",
            "en": "The drop in the bucket represents that day's evaporation. If the pool has dropped noticeably more than the bucket, a leak becomes more likely. Repeating the test once with the pump switched off gives a clue about where the leak is: if the loss increases while the pump runs, the problem is most likely on the pressurised return line; if it is greater with the pump off, the suction side is suspect; if the loss is the same either way, the leak is more likely in the shell, the finish or the built-in fittings. This distinction points you in the right direction, but it does not replace a definitive diagnosis."
          }
        ],
        "bullets": [
          {
            "tr": "1. Bir kovayı havuz suyuyla doldurun ve havuzun birinci ya da ikinci basamağına, kova ağzı su yüzeyinin üzerinde kalacak şekilde yerleştirin; kovanın içindeki su seviyesi havuz seviyesine yakın olsun.",
            "en": "1. Fill a bucket with pool water and set it on the first or second step of the pool, with its rim above the water surface; the water inside the bucket should sit close to the pool level."
          },
          {
            "tr": "2. Kovanın içine, kovadaki su seviyesini gösteren bir işaret koyun.",
            "en": "2. Mark the water level inside the bucket on its inner wall."
          },
          {
            "tr": "3. Kovanın dışına veya skimmer kenarına, havuzun su seviyesini gösteren ikinci bir işaret koyun.",
            "en": "3. Make a second mark, on the outside of the bucket or at the skimmer edge, showing the pool's water level."
          },
          {
            "tr": "4. Pompayı her zamanki çalışma düzeninde bırakın ve 24 saat bekleyin.",
            "en": "4. Leave the pump on its usual running schedule and wait 24 hours."
          },
          {
            "tr": "5. İki işaretteki düşüşü ölçüp karşılaştırın; gerekirse testi pompa kapalıyken tekrarlayın.",
            "en": "5. Measure and compare the drop at both marks; if needed, repeat the test with the pump switched off."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz su kaçağının olası kaynakları nelerdir?",
          "en": "What are the likely sources of a pool leak?"
        },
        "paragraphs": [
          {
            "tr": "Kaçak, havuzun yapısında ya da suyu dolaştıran tesisatta olabilir. Kabukta oluşan sorunlar genellikle zemin hareketi, eskiyen izolasyon veya işçilik kusurlarından kaynaklanır; tesisattaki sorunlar ise bağlantı noktalarında, contalarda ve toprağa gömülü borularda yoğunlaşır. Kış aylarında boşaltılmadan bırakılan hatlarda [donma nedeniyle tesisat çatlağı](post:havuzu-kisa-hazirlama) da sık rastlanan bir nedendir. Çeşme ve Karaburun kıyılarındaki kayalık, eğimli arazilerde zemin oturması kabukta kılcal çatlaklara yol açabilir; tuzlu deniz havası ise açıkta kalan metal bağlantıları zamanla yıpratır. En sık karşılaştığımız kaynaklar şunlardır:",
            "en": "A leak can be in the structure of the pool or in the plumbing that circulates the water. Problems in the shell usually stem from ground movement, ageing waterproofing or workmanship defects, while plumbing problems tend to cluster at joints, seals and buried pipes. In lines left full of water through winter, [a pipe crack caused by freezing](post:havuzu-kisa-hazirlama) is another common cause. On the rocky, sloping plots along the Çeşme and Karaburun coast, ground settlement can open hairline cracks in the shell, and the salty sea air gradually wears down exposed metal fittings. The sources we come across most often are:"
          }
        ],
        "bullets": [
          {
            "tr": "Kaplama ve beton çatlakları: zemin oturması veya eskiyen izolasyon nedeniyle kabukta oluşan kılcal ya da derin çatlaklar",
            "en": "Cracks in the finish and concrete: hairline or deeper cracks in the shell caused by ground settlement or ageing waterproofing"
          },
          {
            "tr": "Derzler: seramik veya mozaik aralarındaki dolgunun zamanla aşınması ve su geçirmeye başlaması",
            "en": "Grout joints: the filling between tiles or mosaics wearing away over time and starting to let water through"
          },
          {
            "tr": "Skimmer boğazı: skimmer gövdesinin beton kabukla birleştiği hat, hareket ve genleşme nedeniyle en sık açılan noktalardandır",
            "en": "The skimmer throat: the line where the skimmer body meets the concrete shell is one of the points that most often opens up through movement and expansion"
          },
          {
            "tr": "Nozul ve lamba contaları: dönüş nozulları ile havuz lambalarının gövdeye oturduğu contaların sertleşmesi veya yerinden oynaması",
            "en": "Nozzle and light seals: the gaskets where return nozzles and pool lights seat into the shell hardening or shifting"
          },
          {
            "tr": "Tesisat hattı: toprak altındaki emiş ve dönüş borularında çatlak ya da gevşeyen ek yerleri",
            "en": "The pipework: cracks or loosened joints in the buried suction and return pipes"
          },
          {
            "tr": "Vana ve pompa bağlantıları: teknik odadaki rakor, vana ve pompa girişlerinde damlama; yıpranmış bir [küresel vana](product:kuresel-vana) ya da görevini yapmayan bir [çekvalf](product:cekvalf) hem su kaybına hem de pompanın hava yapmasına neden olabilir",
            "en": "Valve and pump connections: drips at unions, valves and pump inlets in the plant room; a worn [ball valve](product:kuresel-vana) or a [check valve](product:cekvalf) that no longer seals can cause both water loss and air in the pump"
          }
        ]
      },
      {
        "heading": {
          "tr": "Kaçak nasıl tespit edilir? Profesyonel yöntemler nelerdir?",
          "en": "How is a leak located? What professional methods are used?"
        },
        "paragraphs": [
          {
            "tr": "Kova testi kaçağın varlığını gösterir, ama yerini söylemez. Kesin konum için sahada deneyim ve doğru ekipman gerekir. Profesyonel tespitte genellikle önce teknik oda ve görünür bağlantılar kontrol edilir, ardından yöntemler şüphelenilen bölgeye göre birlikte kullanılır. Boya testinde, durgun suda şüpheli çatlak, derz, skimmer boğazı veya conta çevresine özel bir test boyası yavaşça bırakılır; kaçak varsa boya o noktaya doğru emilir. Bu yöntem kabuk ve gömme parçalardaki kaçakları yerinde doğrulamak için çok etkilidir ve çoğu zaman havuza girilerek, yakından yapılır.",
            "en": "The bucket test shows that a leak exists, but not where it is. Pinpointing it takes field experience and the right equipment. A professional inspection usually starts with the plant room and visible connections, after which methods are combined according to the suspected area. In a dye test, a special test dye is released slowly in still water around a suspect crack, joint, skimmer throat or seal; if there is a leak, the dye is drawn towards that point. This method is highly effective for confirming leaks in the shell and built-in fittings on the spot, and is usually done up close from inside the pool."
          },
          {
            "tr": "Basınç testinde tesisat hatları tek tek kapatılır ve belirli bir basınçla sınanır; basıncı tutmayan hat, kaçağın hangi boruda olduğunu gösterir. Toprak altındaki hatlarda ise akustik dinleme cihazlarıyla suyun kaçarken çıkardığı ses zemin üzerinden izlenir ve kaçağın yeri daraltılır. Havuz içindeki gömme parçalar için ise dalış ekipmanıyla yakın inceleme yapılabilir. Bu yöntemler birlikte uygulandığında çoğu durumda gereksiz kazıya ve havuzun tamamen boşaltılmasına gerek kalmadan kaynağa ulaşılır.",
            "en": "In a pressure test, the plumbing lines are isolated one by one and tested at a set pressure; a line that will not hold pressure reveals which pipe is leaking. For buried lines, acoustic listening equipment is used to follow the sound of escaping water through the ground and narrow down the location. For built-in fittings inside the pool, a close inspection can also be made with diving equipment. Used together, these methods usually lead to the source without unnecessary digging or fully draining the pool."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz su kaçağı tamiri nasıl yapılır?",
          "en": "How is a pool leak repaired?"
        },
        "paragraphs": [
          {
            "tr": "Tamir yöntemi tamamen kaçağın kaynağına bağlıdır. Contası sertleşmiş bir nozul, lamba veya skimmer boğazı çoğu zaman conta yenileme ya da uygun sızdırmazlık malzemesiyle yerinde onarılabilir. Aşınmış derzler temizlenip suya dayanıklı dolguyla yeniden doldurulur. Kabuktaki çatlaklar ise önce nedenine göre değerlendirilir: yüzeysel bir kılcal çatlak lokal onarımla kapatılabilirken, zemin hareketinden kaynaklanan yapısal çatlaklar ya da genel olarak yıpranmış bir izolasyon, [havuz izolasyonu ve renovasyonu](page:construction) kapsamında kaplamanın ve su yalıtımının yenilenmesini gerektirebilir. Bu tür işlerde havuzun kısmen ya da tamamen boşaltılması gerekebilir.",
            "en": "The repair method depends entirely on the source of the leak. A nozzle, light or skimmer throat with a hardened seal can often be fixed in place by replacing the gasket or applying a suitable sealant. Worn grout is cleaned out and refilled with a water-resistant compound. Cracks in the shell are first assessed according to their cause: a superficial hairline crack can be closed with a local repair, whereas structural cracks caused by ground movement, or waterproofing that is worn overall, may require the finish and waterproofing to be renewed as part of [pool waterproofing and renovation](page:construction). Work of this kind may require the pool to be partly or fully drained."
          },
          {
            "tr": "Tesisat kaçaklarında yalnızca sorunlu bölüm açılır, hasarlı boru veya bağlantı değiştirilir ve hat yeniden basınç testiyle doğrulanır. Teknik odadaki vana ve rakor kaçakları genellikle en hızlı çözülen gruptur. Onarımdan sonra havuza giren taze su ve kullanılan malzemeler kimyasal dengeyi değiştirebilir; bu dönemde pH ve alkaliniteyi kontrol etmek, metal kaynaklı lekelenmeye karşı da bir [metal ve leke önleyici](product:anti-iyon-quardex) kullanmak su kalitesinin hızla toparlanmasına yardımcı olur. Ürün etiketindeki dozaja uyun ve kimyasalları asla birbirine karıştırmayın.",
            "en": "With plumbing leaks, only the problem section is opened up, the damaged pipe or fitting is replaced and the line is confirmed again with a pressure test. Valve and union leaks in the plant room are usually the quickest group to resolve. After the repair, the fresh water entering the pool and the materials used can shift the chemical balance; checking pH and alkalinity during this period, and using a [metal and stain preventer](product:anti-iyon-quardex) against metal-related staining, helps the water quality recover quickly. Follow the dosage on the product label and never mix chemicals together."
          }
        ]
      },
      {
        "heading": {
          "tr": "Kaçağı önlemek için düzenli bakım neden önemlidir?",
          "en": "Why does regular maintenance matter for preventing leaks?"
        },
        "paragraphs": [
          {
            "tr": "Kaçakların önemli bir kısmı, ilk ortaya çıktığında küçük ve kolay onarılabilir durumdadır. Sorun, fark edilmeden aylarca sürdüğünde büyür; sızan su zemini yumuşatabilir, çevre döşemesinde çökmelere ve daha kapsamlı onarımlara yol açabilir. [Düzenli havuz bakımı](page:maintenance) sırasında su seviyesinin takibi, contaların, skimmer boğazının ve derzlerin gözle kontrolü, teknik odadaki bağlantıların incelenmesi ve kimyasal dengenin korunması, kaçağı erken yakalamanın en etkili yoludur. Doğru kimyasal denge de önemlidir: uzun süre düşük pH ile çalışan su, derzleri ve kaplama yüzeyini aşındırabilir. İyi yapılmış bir izolasyon ve sezon başı ile sonunda yapılan kapsamlı bir kontrol, Ege'nin uzun ve yoğun yaz sezonunda havuzunuzun sorunsuz çalışmasını sağlar.",
            "en": "Many leaks are small and easy to repair when they first appear. The trouble grows when they go unnoticed for months: escaping water can soften the ground and lead to subsidence in the surrounding paving and to more extensive repairs. During [regular pool maintenance](page:maintenance), tracking the water level, visually checking seals, the skimmer throat and grout, inspecting connections in the plant room and keeping the chemistry balanced are the most effective ways to catch a leak early. Correct chemistry matters too: water that runs at low pH for long periods can erode grout and the surface of the finish. Well-executed waterproofing, together with a thorough inspection at the start and end of the season, keeps your pool running smoothly through the Aegean's long, busy summer."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Havuzda su kaçağı nasıl anlaşılır?",
          "en": "How can you tell if a pool is leaking?"
        },
        "a": {
          "tr": "En güvenilir ilk adım kova testidir. Havuz suyuyla dolu bir kovayı basamağa koyup kovanın içindeki ve havuzdaki su seviyesini işaretleyin, pompayı normal düzeninde çalıştırın ve 24 saat sonra iki düşüşü karşılaştırın. Havuz kovadan belirgin şekilde fazla düştüyse kaçak olasılığı yüksektir. Islak zemin, sık su ekleme ve bozulan kimyasal denge de bu şüpheyi destekler.",
          "en": "The most reliable first step is the bucket test. Place a bucket filled with pool water on a step, mark the water level inside the bucket and in the pool, run the pump on its normal schedule and compare the two drops after 24 hours. If the pool has dropped noticeably more than the bucket, a leak is likely. Wet ground, frequent top-ups and unstable chemistry also support that suspicion."
        }
      },
      {
        "q": {
          "tr": "Havuzun günlük ne kadar su kaybetmesi normaldir?",
          "en": "How much daily water loss is normal for a pool?"
        },
        "a": {
          "tr": "Herkes için geçerli tek bir rakam yoktur; buharlaşma sıcaklığa, rüzgâra, neme, güneşlenme süresine ve havuzun örtülü olup olmamasına göre değişir. Sıcak ve rüzgârlı günlerde, örneğin Çeşme'de imbat ya da lodos eserken, buharlaşma belirgin şekilde artar. Kaybın normal olup olmadığını anlamanın en doğru yolu, aynı koşullarda kova testi yapıp havuzu kovayla karşılaştırmaktır.",
          "en": "There is no single figure that applies to everyone; evaporation varies with temperature, wind, humidity, hours of sunshine and whether the pool is covered. On hot, windy days, for example when the imbat or lodos is blowing in Çeşme, evaporation rises markedly. The most accurate way to judge whether your loss is normal is to run a bucket test and compare the pool with the bucket under the same conditions."
        }
      },
      {
        "q": {
          "tr": "Kaçak tamiri için havuzun boşaltılması gerekir mi?",
          "en": "Does the pool need to be drained to repair a leak?"
        },
        "a": {
          "tr": "Her zaman değil. Teknik odadaki vana ve bağlantı kaçakları, toprak altındaki boru onarımları ve birçok conta ya da skimmer boğazı onarımı havuz boşaltılmadan yapılabilir. Buna karşılık yapısal kabuk çatlakları, geniş derz yenilemeleri veya kaplama ve izolasyonun yenilenmesi gibi işlerde havuzun kısmen ya da tamamen boşaltılması gerekebilir. Karar, kaçağın kaynağı kesinleştikten sonra verilir.",
          "en": "Not always. Valve and connection leaks in the plant room, repairs to buried pipes and many seal or skimmer throat repairs can be carried out without draining the pool. By contrast, structural cracks in the shell, extensive regrouting, or renewing the finish and waterproofing may require the pool to be partly or fully drained. The decision is made once the source of the leak has been confirmed."
        }
      },
      {
        "q": {
          "tr": "Su kaçağı tespiti ne kadar sürer?",
          "en": "How long does leak detection take?"
        },
        "a": {
          "tr": "Süre, kaçağın yerine ve havuzun tesisat yapısına göre değişir. Teknik odadaki görünür bir bağlantı kaçağı kısa bir kontrolle bulunabilirken, toprak altındaki bir boru ya da kabuktaki kılcal bir çatlak için boya testi, basınç testi ve akustik dinlemenin birlikte uygulanması gerekebilir. Keşif sırasında havuzunuzu yerinde değerlendirip size daha net bir süre bilgisi verebiliriz.",
          "en": "It depends on where the leak is and how the pool's plumbing is laid out. A visible connection leak in the plant room can be found with a short inspection, whereas a buried pipe or a hairline crack in the shell may call for dye testing, pressure testing and acoustic listening used together. During a site visit we can assess your pool in person and give you a clearer idea of the time involved."
        }
      }
    ]
  },
  "havuz-kimyasallari-rehberi": {
    "title": {
      "tr": "Havuz Kimyasalları Rehberi: Hangisi Ne İşe Yarar?",
      "en": "Pool Chemicals Guide: What Does Each One Do?"
    },
    "seoTitle": {
      "tr": "Havuz Kimyasalları Rehberi: Ne İşe Yarar?",
      "en": "Pool Chemicals Guide: What Each One Does"
    },
    "excerpt": {
      "tr": "pH, klor, yosun önleyici, flok ve daha fazlası: havuz kimyasallarının işlevi, ekleme sırası ve güvenli kullanımı tek rehberde.",
      "en": "pH, chlorine, algaecide, flocculant and more: what each pool chemical does, the order to add them and how to use them safely."
    },
    "intro": {
      "tr": "Havuz kimyasalları, berrak ve sağlıklı suyun görünmeyen yarısıdır. Raflarda onlarca şişe ve kova görmek kafa karıştırıcı olabilir; oysa hepsi birkaç işlev ailesine ayrılır: pH düzenleyiciler, klor ve dezenfektanlar, yosun önleyiciler, berraklaştırıcı ve çöktürücüler, metal tutucular ve birkaç özel amaçlı ürün. Bu rehberde her ailenin ne işe yaradığını, hangi durumda gerektiğini ve hangi sırayla kullanılacağını anlatıyoruz. Çeşme yarımadasında yıllardır villa havuzlarının suyunu yöneten bir ekip olarak, güvenlik kurallarını ve bölgenin sıcak, rüzgârlı ikliminde dikkat edilmesi gerekenleri de ekledik. Amaç, doğru ürünü doğru anda, doğru miktarda kullanmanız.",
      "en": "Pool chemicals are the invisible half of clear, healthy water. Seeing dozens of bottles and buckets on a shelf can be confusing, yet they all fall into a handful of functional families: pH adjusters, chlorine and disinfectants, algaecides, clarifiers and flocculants, metal sequestrants and a few special-purpose products. In this guide we explain what each family does, when you need it and in what order to use it. As a team that has managed villa pool water on the Çeşme peninsula for years, we have also included the safety rules and what to watch for in the region's hot, windy climate. The goal is simple: the right product, at the right moment, in the right amount."
    },
    "sections": [
      {
        "heading": {
          "tr": "Havuz suyunda hangi değerler dengede olmalı?",
          "en": "Which values need to be in balance in pool water?"
        },
        "paragraphs": [
          {
            "tr": "Kimyasal seçmeden önce neyi hedeflediğinizi bilmek gerekir. Havuz suyunun dengesi birbirine bağlı birkaç değerle tanımlanır ve bunlardan biri kaydığında diğerleri de etkilenir. Örneğin pH yükseldiğinde klorun etkinliği belirgin biçimde düşer; alkalinite düşükse pH bir günden ötekine savrulur. Bu yüzden kimyasal kullanımı her zaman ölçümle başlar. Günlük hızlı kontrol için klor ve pH ölçen bir [damla test kiti](product:test-damla) yeterlidir; alkalinite, sertlik ve stabilizatör dahil daha fazla parametreyi hassas izlemek istiyorsanız [WaterLink ColorQ dijital test cihazı](product:test-colorq) gibi fotometrik bir ölçüm daha net sonuç verir. Aşağıdaki aralıklar sektörde kabul gören hedef değerlerdir.",
            "en": "Before choosing a chemical, you need to know what you are aiming for. Pool water balance is defined by a few interconnected values, and when one drifts the others follow. When pH rises, for example, chlorine becomes markedly less effective; when alkalinity is low, pH swings from one day to the next. That is why chemical use always starts with measurement. For a quick daily check, a [drop test kit for chlorine and pH](product:test-damla) is enough; if you want to track more parameters precisely, including alkalinity, hardness and stabiliser, a photometric reading such as the [WaterLink ColorQ digital tester](product:test-colorq) gives clearer results. The ranges below are the widely accepted industry targets."
          }
        ],
        "bullets": [
          {
            "tr": "pH: 7,2–7,6 — hem klorun verimli çalıştığı hem de göz ve cildin rahat ettiği aralık.",
            "en": "pH: 7.2–7.6 — the range where chlorine works efficiently and eyes and skin stay comfortable."
          },
          {
            "tr": "Serbest klor: 1–3 ppm — suyu dezenfekte eden aktif klor miktarı.",
            "en": "Free chlorine: 1–3 ppm — the active chlorine that actually disinfects the water."
          },
          {
            "tr": "Toplam alkalinite: 80–120 ppm — pH'ın ani dalgalanmalarını tamponlayan değer.",
            "en": "Total alkalinity: 80–120 ppm — the buffer that keeps pH from swinging suddenly."
          },
          {
            "tr": "Siyanürik asit (stabilizatör): 30–50 ppm — klorun güneş ışığında hızla parçalanmasını yavaşlatır.",
            "en": "Cyanuric acid (stabiliser): 30–50 ppm — slows the rapid breakdown of chlorine in sunlight."
          },
          {
            "tr": "Kalsiyum sertliği: 200–400 ppm — yüzeyleri ve ekipmanı hem aşınmadan hem kireçlenmeden korur.",
            "en": "Calcium hardness: 200–400 ppm — protects surfaces and equipment from both corrosion and scaling."
          }
        ]
      },
      {
        "heading": {
          "tr": "pH düzenleyiciler ne işe yarar, sıvı mı toz mu seçilmeli?",
          "en": "What do pH adjusters do, and should you choose liquid or powder?"
        },
        "paragraphs": [
          {
            "tr": "Havuz suyunun pH'ı kendiliğinden yükselme eğilimindedir: taze su, klor ürünlerinin bir kısmı, havalanma ve sıcak hava pH'ı yukarı iter. pH 7,6'nın üzerine çıktığında klor işini yapamaz, su bulanıklaşmaya ve kireç bırakmaya başlar; bu yüzden en sık kullanılan düzenleyici pH düşürücüdür. Sıvı formlar dozlaması pratik olan ve suyla hızla karışan seçeneklerdir; [Quardex sıvı pH düşürücü](product:sivi-ph-quardex) ve [Selenoid sıvı pH düşürücü](product:sivi-ph-selenoid) bu gruptadır. Otomatik dozaj sistemi olan havuzlarda da genellikle sıvı form tercih edilir.",
            "en": "Pool water pH naturally tends to rise: fresh top-up water, some chlorine products, aeration and hot weather all push it upwards. Once pH climbs above 7.6, chlorine cannot do its job and the water starts to cloud and leave scale, which is why the most frequently used adjuster is a pH reducer. Liquid forms are easy to dose and blend into the water quickly; [Quardex liquid pH reducer](product:sivi-ph-quardex) and [Selenoid liquid pH reducer](product:sivi-ph-selenoid) belong to this group. Pools with automatic dosing systems also generally use the liquid form."
          },
          {
            "tr": "Granül formlar ise depolaması ve taşıması kolay, kontrollü düşüş sağlayan alternatiflerdir. [Quardex toz pH düşürücü](product:toz-ph-quardex) ile [Selenoid toz pH düşürücü](product:toz-ph-selenoid) önce bir kovada suyla çözülüp pompa çalışırken havuza yayılarak eklenir. Hangi formu seçerseniz seçin, pH'ı tek seferde büyük miktarla düşürmeye çalışmayın: etiketteki dozun bir kısmını ekleyin, birkaç saat sirkülasyondan sonra yeniden ölçün. pH'ınız düşükse, yani 7,2'nin altındaysa, ihtiyacınız düşürücü değil pH yükselticidir; bu durumda önce alkaliniteyi kontrol etmek genellikle kök nedeni gösterir.",
            "en": "Granular forms are easier to store and carry, and they give a controlled reduction. [Quardex powder pH reducer](product:toz-ph-quardex) and [Selenoid powder pH reducer](product:toz-ph-selenoid) are first dissolved in a bucket of water and then spread across the pool while the pump is running. Whichever form you choose, do not try to drop pH in one large dose: add part of the label dose, let it circulate for a few hours and measure again. If your pH is low, below 7.2, what you need is not a reducer but a pH increaser; in that case checking alkalinity first usually reveals the root cause."
          }
        ]
      },
      {
        "heading": {
          "tr": "Klor ve dezenfeksiyon ürünleri arasındaki fark nedir?",
          "en": "What is the difference between the chlorine and disinfection products?"
        },
        "paragraphs": [
          {
            "tr": "Klor, havuz suyundaki bakteri, virüs ve yosun sporlarını etkisiz hale getiren temel dezenfektandır ve serbest klorun 1–3 ppm aralığında sürekli tutulması gerekir. Sıvı klor (sodyum hipoklorit) hızlı etki eder, çözme gerektirmez ve stabilizatör içermez; bu yüzden siyanürik asit seviyesini yükseltmeden günlük takviye için elverişlidir. [Quardex sıvı klor](product:sivi-klor-quardex) ve [Selenoid sıvı klor](product:sivi-klor-selenoid) bu kullanım için uygundur. Sıvı klorun pH'ı hafifçe yükseltebileceğini ve ışık ile sıcakta zamanla güç kaybettiğini unutmayın; serin ve gölgede saklayın.",
            "en": "Chlorine is the core disinfectant that neutralises bacteria, viruses and algae spores in pool water, and free chlorine needs to stay within 1–3 ppm at all times. Liquid chlorine (sodium hypochlorite) acts quickly, needs no dissolving and contains no stabiliser, so it suits daily top-ups without raising cyanuric acid levels. [Quardex liquid chlorine](product:sivi-klor-quardex) and [Selenoid liquid chlorine](product:sivi-klor-selenoid) are suitable for this. Keep in mind that liquid chlorine can nudge pH up slightly and loses strength over time in light and heat, so store it somewhere cool and shaded."
          },
          {
            "tr": "Granül klor yüksek konsantrasyonuyla hem düzenli dozajda hem de şok klorlamada kullanılır; şok klorlama, yoğun kullanımdan, yağmurdan ya da yeşerme başlangıcından sonra klor seviyesini geçici olarak yükseltip suyu toparlamaktır. [Quardex granül klor %90](product:toz-klor-quardex) ve [Selenoid granül klor](product:toz-klor-selenoid) bu işler için pratik seçeneklerdir. Sürekli ve dengeli dezenfeksiyon istiyorsanız yavaş salınımlı tabletler işinizi kolaylaştırır: [WTR multi tablet klor](product:multi-tablet-wtr) dezenfeksiyonun yanında berraklaştırma ve yosun önleme desteği de verir. Tabletleri ürün etiketinin önerdiği şekilde, örneğin bir [yüzer klor dispanseri](product:dispanser) içinde kullanın; tableti doğrudan havuz zeminine ya da yüzeyine bırakmayın. Granül ve tablet klorların bir kısmı stabilizatör içerir, bu yüzden uzun süreli kullanımda siyanürik asidi de ölçün.",
            "en": "Granular chlorine, with its high concentration, is used both for routine dosing and for shock chlorination, which means temporarily raising chlorine levels to recover the water after heavy use, rain or the first signs of green. [Quardex 90% granular chlorine](product:toz-klor-quardex) and [Selenoid granular chlorine](product:toz-klor-selenoid) are practical options for these jobs. If you want continuous, steady disinfection, slow-release tablets make life easier: [WTR multifunction chlorine tablets](product:multi-tablet-wtr) also help with clarifying and algae prevention alongside disinfection. Use the tablets as the product label recommends, for example in a [floating chlorine dispenser](product:dispanser), and never drop a tablet directly onto the pool floor or surface. Some granular and tablet chlorines contain stabiliser, so measure cyanuric acid as well during long-term use."
          }
        ]
      },
      {
        "heading": {
          "tr": "Yosun önleyici ile yosun giderici arasında ne fark var?",
          "en": "What is the difference between an algaecide and an algae remover?"
        },
        "paragraphs": [
          {
            "tr": "İki ürün aynı sorunla ilgilenir ama farklı anlarda devreye girer. Yosun önleyici, doğru klor ve pH dengesinin yanında düzenli dozlanan koruyucu bir üründür; yosun sporlarının tutunup çoğalmasını baştan engeller. Özellikle sıcak yaz haftalarında, yoğun kullanım dönemlerinde ya da villanın uzun süre boş kaldığı zamanlarda haftalık rutininize eklemek mantıklıdır. [Selenoid yosun önleyici](product:yosun-onleyici-selenoid), konsantre formlarıyla [Poolbox yosun önleyici](product:yosun-onleyici-poolbox) ve [Quardex yosun önleyici](product:yosun-onleyici-quardex) bu gruptadır. Yosun önleyici klorun yerini tutmaz; dezenfeksiyon zayıfsa tek başına yeşermeyi durduramaz.",
            "en": "Both products deal with the same problem but come in at different moments. An algaecide is a protective product dosed regularly alongside correct chlorine and pH; it stops algae spores from settling and multiplying in the first place. It makes sense to add it to your weekly routine especially during hot summer weeks, busy periods or when the villa stands empty for a long time. [Selenoid algaecide](product:yosun-onleyici-selenoid), the concentrated [Poolbox algaecide](product:yosun-onleyici-poolbox) and [Quardex algaecide](product:yosun-onleyici-quardex) belong to this group. An algaecide does not replace chlorine; if disinfection is weak, it cannot stop the water turning green on its own."
          },
          {
            "tr": "Yosun giderici ise sorun ortaya çıktıktan sonra kullanılır. [Quardex yosun giderici](product:yosun-giderici-quardex), duvar ve zeminde oluşmuş yosun tabakalarını çözerek suyun toparlanmasını hızlandırır. Etkili sonuç için önce pH'ı dengeleyin, ardından şok klorlama yapın, duvarları fırçalayın ve filtreyi temizleyin; yosun giderici bu sürecin tamamlayıcısıdır. Su toparlandıktan sonra düzenli yosun önleyici kullanımına geri dönmek, sorunun birkaç hafta içinde tekrarlamasını büyük ölçüde engeller. Yeşermiş bir havuzu adım adım nasıl toparlayacağınızı [havuz suyu yeşermesi rehberimizde](post:havuz-suyu-yesermesi) ayrıntılı anlattık.",
            "en": "An algae remover, on the other hand, is used once the problem has appeared. [Quardex algae remover](product:yosun-giderici-quardex) breaks down algae layers that have formed on walls and floor, speeding up the water's recovery. For an effective result, first balance pH, then shock chlorinate, brush the walls and clean the filter; the algae remover completes this process. Returning to regular algaecide use once the water has recovered goes a long way towards stopping the problem from coming back within a few weeks. We explain step by step how to bring a green pool back in our [guide to green pool water](post:havuz-suyu-yesermesi)."
          }
        ]
      },
      {
        "heading": {
          "tr": "Bulanık suda berraklaştırıcı mı, çöktürücü (flok) mu kullanılmalı?",
          "en": "For cloudy water, should you use a clarifier or a flocculant?"
        },
        "paragraphs": [
          {
            "tr": "Değerleriniz dengede olduğu halde su matsa, sorun genellikle filtrenin tek başına yakalayamayacağı kadar ince partiküllerdir. Hafif bulanıklıkta berraklaştırıcı ya da parlatıcı kullanılır: bu ürünler ince partikülleri kümeleştirerek filtrede tutulmalarını sağlar, pompa normal çalışmaya devam eder. [Quardex berraklaştırıcı](product:berraklastirici-quardex), [Selenoid parlatıcı](product:parlatici-selenoid) ve [Poolbox parlatıcı](product:parlatici-poolbox) bu amaçla kullanılır. Birkaç gün süren filtrasyonla su belirgin şekilde parlar; bu süreçte filtre basıncını izleyip gerekiyorsa ters yıkama yapın.",
            "en": "If your values are balanced yet the water looks dull, the problem is usually particles too fine for the filter to catch on its own. For mild cloudiness you use a clarifier: these products clump fine particles together so the filter can hold them, while the pump keeps running as normal. [Quardex clarifier](product:berraklastirici-quardex), [Selenoid clarifier](product:parlatici-selenoid) and [Poolbox clarifier](product:parlatici-poolbox) are used for this. With a few days of filtration the water noticeably sparkles; during this time watch the filter pressure and backwash if needed."
          },
          {
            "tr": "Yoğun bulanıklıkta çöktürücü (flok) daha hızlı sonuç verir. [Selenoid çöktürücü](product:cokturucu-selenoid) ve [Poolbox çöktürücü](product:cokturucu-poolbox), askıdaki kirleri topaklayıp havuz tabanına indirir. Ürün ekledikten sonra etiketteki süre boyunca pompa kapalı bekletilir, ardından tabanda biriken tortu vakumla ve mümkünse filtreyi atığa alarak dışarı atılır; aksi halde tortu yeniden suya karışır. Kum filtreli havuzlarda sürekli ve hafif etki isteyenler için [Poolbox flok tablet](product:flok-tablet) skimmer sepetine konur ve yavaşça çözünerek filtre verimini destekler.",
            "en": "For heavy cloudiness a flocculant works faster. [Selenoid flocculant](product:cokturucu-selenoid) and [Poolbox flocculant](product:cokturucu-poolbox) bind suspended dirt into clumps and drop it to the pool floor. After adding the product, the pump is left off for the time stated on the label, and the sediment on the floor is then vacuumed out, ideally with the filter set to waste; otherwise the sediment simply mixes back into the water. For sand-filter pools where you want a gentle, continuous effect, [Poolbox flocculant tablets](product:flok-tablet) go into the skimmer basket and dissolve slowly, supporting filter performance."
          }
        ]
      },
      {
        "heading": {
          "tr": "Metal ve leke önleyiciler ne zaman gerekir?",
          "en": "When do you need metal and stain preventers?"
        },
        "paragraphs": [
          {
            "tr": "Kuyu suyu ya da tanker suyuyla doldurulan havuzlarda, bakır içeren eski tesisatlarda veya bazı yosun önleyicilerin uzun süreli kullanımında suda demir, bakır ve manganez gibi metaller birikebilir. Bu metaller klorla tepkimeye girdiğinde su yeşilimsi ya da kahverengimsi bir renk alabilir, yüzeylerde ve derzlerde inatçı lekeler oluşur. Metal tutucular, çözünmüş metal iyonlarını bağlayarak lekelenmenin önüne geçer. [Quardex anti iyon](product:anti-iyon-quardex) ve [Selenoid iyon tutucu](product:iyon-tutucu-selenoid), özellikle ilk dolumda ve dışarıdan su takviyesinden sonra kullanmak için uygundur. Bunun yanında [iyon topu](product:iyon-topu), suya kademeli olarak mineral bırakarak su dengesini destekleyen yardımcı bir üründür; kimyasal dengenin yerine değil, destekçisi olarak düşünülmelidir.",
            "en": "In pools filled from a well or a water tanker, with older copper-containing plumbing, or after long-term use of certain algaecides, metals such as iron, copper and manganese can build up in the water. When these metals react with chlorine, the water may take on a greenish or brownish tint and stubborn stains form on surfaces and grout lines. Metal sequestrants bind the dissolved metal ions and prevent staining. [Quardex anti-ion](product:anti-iyon-quardex) and [Selenoid metal sequestrant](product:iyon-tutucu-selenoid) are well suited to use at first fill and after topping up from an outside source. Alongside these, the [mineral ion ball](product:iyon-topu) is a supporting product that gradually releases minerals into the water to help keep it balanced; think of it as a helper to chemical balance, not a replacement for it."
          }
        ]
      },
      {
        "heading": {
          "tr": "Alkalinite düşürücü ve temizlik asidi nasıl kullanılır?",
          "en": "How are alkalinity reducer and cleaning acid used?"
        },
        "paragraphs": [
          {
            "tr": "Toplam alkalinite 120 ppm'in üzerine çıktığında pH sürekli yükselir ve pH düşürücü ekledikçe kısa süre sonra yine yukarı kaçar; bu, sorunun pH'ta değil alkalinitede olduğunun işaretidir. [Selenoid sıvı alkalinite düşürücü](product:alkalinite-dusurucu-selenoid), yüksek alkaliniteyi kademeli olarak 80–120 ppm aralığına indirir. Alkaliniteyi düzeltmek birkaç gün sürebilir; her uygulamadan sonra hem alkaliniteyi hem pH'ı ölçün. Alkalinite düşürücü de asidik bir ürün olduğu için pH'ı aynı anda aşağı çeker; bu nedenle uygulamadan sonra pH'ın 7,2'nin altına inmediğinden emin olun.",
            "en": "When total alkalinity rises above 120 ppm, pH keeps climbing and creeps back up soon after every dose of pH reducer; that is a sign the problem lies with alkalinity, not pH. [Selenoid liquid alkalinity reducer](product:alkalinite-dusurucu-selenoid) gradually brings high alkalinity down into the 80–120 ppm range. Correcting alkalinity can take several days, so measure both alkalinity and pH after each application. Because an alkalinity reducer is itself acidic, it pulls pH down at the same time, so make sure pH has not dropped below 7.2 after application."
          },
          {
            "tr": "Temizlik asidi ise suya değil yüzeylere yöneliktir: [Selenoid temizlik asidi](product:temizlik-asidi-selenoid), su hattındaki kireç halkası, taş ve derzlerdeki kalıntılar gibi mineral birikintileri çözmek için kullanılır. Etiketteki seyreltme oranına mutlaka uyun, eldiven ve koruyucu gözlük takın, uygulama sonrası yüzeyi bol suyla durulayın ve asidi asla klorlu bir ürünle aynı kapta ya da aynı anda kullanmayın. Seçkin Havuzculuk ekibi olarak, asitli yüzey temizliğini mümkünse havuz boşken ya da su seviyesi indirilmişken ve iyi havalandırılan bir ortamda yapmanızı öneririz.",
            "en": "Cleaning acid, on the other hand, is meant for surfaces rather than the water: [Selenoid cleaning acid](product:temizlik-asidi-selenoid) is used to dissolve mineral deposits such as the scale ring at the waterline and residue on stone and grout. Always follow the dilution ratio on the label, wear gloves and safety glasses, rinse the surface thoroughly afterwards, and never use the acid in the same container or at the same time as a chlorine product. As the Seçkin Havuzculuk team, we recommend doing acid surface cleaning, where possible, with the pool empty or the water level lowered, and in a well-ventilated setting."
          }
        ]
      },
      {
        "heading": {
          "tr": "Tuz klor hücresi ve kloramin için hangi özel ürünler kullanılır?",
          "en": "Which special products are used for salt cells and chloramines?"
        },
        "paragraphs": [
          {
            "tr": "Tuzlu su sistemli havuzlarda klor, bir elektroliz hücresinde üretilir. Zamanla hücre plakalarında kireç birikir ve klor üretimi düşer; [Selenoid hücre temizleme sıvısı](product:hucre-temizleyici-selenoid) bu birikintileri çözerek hücrenin verimini korur. Temizlik sıklığı suyunuzun sertliğine bağlıdır, üreticinin talimatına göre yapılmalıdır. Hücre temizliği sırasında sistemi kapatın, hücreyi üreticinin tarif ettiği şekilde sökün ve sıvıyı etiketteki orana göre kullanın. Klor üretiminde beklenmedik bir düşüş fark ettiğinizde ilk kontrol edilecek yer genellikle hücre plakalarıdır.",
            "en": "In saltwater pools, chlorine is produced in an electrolysis cell. Over time, scale builds up on the cell plates and chlorine output drops; [Selenoid salt cell cleaner](product:hucre-temizleyici-selenoid) dissolves these deposits and keeps the cell working efficiently. How often you clean depends on your water hardness and should follow the manufacturer's instructions. During cleaning, switch the system off, remove the cell as the manufacturer describes and use the liquid at the ratio given on the label. When you notice an unexpected drop in chlorine output, the cell plates are usually the first place to check."
          },
          {
            "tr": "Havuzdaki keskin klor kokusu ve göz yanması ise çoğu zaman fazla klordan değil, klorun ter ve kozmetik kalıntılarıyla birleşmesiyle oluşan bağlı klordan (kloramin) kaynaklanır. [Poolbox bağlı klor çözücü](product:bagli-klor-poolbox) bu bileşikleri parçalayarak suyun tazeliğini geri kazandırır. Havuz çevresinin temizliği de su kalitesinin parçasıdır: [Quardex ayak ve çevre temizlik ürünü](product:cevre-temizlik-quardex), havuz kenarı ve ayak yıkama alanlarındaki kir ve tortuyu temizleyerek suya taşınan kiri azaltır.",
            "en": "The sharp chlorine smell and stinging eyes around a pool usually come not from too much chlorine but from combined chlorine (chloramines), formed when chlorine binds with sweat and cosmetic residue. [Poolbox combined chlorine remover](product:bagli-klor-poolbox) breaks these compounds down and restores the water's freshness. Keeping the pool surroundings clean is part of water quality too: [Quardex poolside surface cleaner](product:cevre-temizlik-quardex) removes dirt and residue from the pool edge and foot-wash areas, reducing the dirt carried into the water."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz kimyasalları hangi sırayla eklenir ve nasıl güvenle kullanılır?",
          "en": "In what order are pool chemicals added, and how do you use them safely?"
        },
        "paragraphs": [
          {
            "tr": "Kimyasalların birbirinin etkisini artırması ya da boşa çıkarması, büyük ölçüde ekleme sırasına bağlıdır. Genel akış şöyledir: önce ölçün, sonra alkaliniteyi ve pH'ı dengeleyin, ardından dezenfekte edin ve en son berraklaştırma ile önleyici ürünlere geçin. Her ürün arasında pompa çalışır durumdayken suyun karışması için zaman tanıyın. Haftalık rutinin tamamını [havuz bakımı nasıl yapılır](post:havuz-bakimi-nasil-yapilir) yazımızda bulabilirsiniz. Güvenlik tarafında ise pazarlık payı yoktur; aşağıdaki kurallar her ürün için geçerlidir.",
            "en": "Whether chemicals reinforce or cancel each other out depends largely on the order in which they are added. The general flow is: measure first, then balance alkalinity and pH, then disinfect, and only then move on to clarifying and preventive products. Between each product, give the water time to mix with the pump running. You will find the full weekly routine in our article on [how to maintain a pool](post:havuz-bakimi-nasil-yapilir). On the safety side there is no room for compromise; the rules below apply to every product."
          }
        ],
        "bullets": [
          {
            "tr": "1. Test edin: klor, pH ve alkaliniteyi ölçmeden hiçbir ürün eklemeyin.",
            "en": "1. Test: do not add any product without first measuring chlorine, pH and alkalinity."
          },
          {
            "tr": "2. Alkaliniteyi, ardından pH'ı 7,2–7,6 aralığına getirin.",
            "en": "2. Adjust alkalinity, then bring pH into the 7.2–7.6 range."
          },
          {
            "tr": "3. Klorla dezenfekte edin; gerekiyorsa şok klorlamayı akşam saatlerinde yapın, çünkü güneş klorun bir kısmını hızla tüketir.",
            "en": "3. Disinfect with chlorine; if shock chlorination is needed, do it in the evening, because sunlight quickly consumes part of the chlorine."
          },
          {
            "tr": "4. Klor dengelendikten sonra yosun önleyici, berraklaştırıcı veya çöktürücü ekleyin.",
            "en": "4. Once chlorine is balanced, add algaecide, clarifier or flocculant."
          },
          {
            "tr": "Kimyasalları asla birbirine karıştırmayın; her ürünü ayrı ayrı, ayrı ve temiz bir kapla ekleyin.",
            "en": "Never mix chemicals together; add each product separately, using a separate, clean container."
          },
          {
            "tr": "Seyreltme gerekiyorsa her zaman suya kimyasal ekleyin; kimyasalın üzerine asla su dökmeyin.",
            "en": "If dilution is needed, always add the chemical to water; never pour water onto the chemical."
          },
          {
            "tr": "Asit içeren ürünlerle klorlu ürünleri asla yan yana saklamayın; temasları tehlikeli klor gazı açığa çıkarabilir.",
            "en": "Never store acid-based products next to chlorine products; contact between them can release dangerous chlorine gas."
          },
          {
            "tr": "Ürünleri orijinal ambalajında, kapağı kapalı, çocuklardan ve evcil hayvanlardan uzak, serin, kuru ve havadar bir yerde saklayın; uygulamada eldiven ve gözlük kullanın.",
            "en": "Keep products in their original packaging with lids closed, away from children and pets, in a cool, dry, well-ventilated place; wear gloves and goggles when applying them."
          },
          {
            "tr": "Havuzda yüzen biri varken kimyasal eklemeyin; yüzmeye dönmeden önce değerlerin normal aralığa indiğini ölçerek teyit edin.",
            "en": "Do not add chemicals while anyone is swimming; before swimming resumes, confirm by measuring that values are back in the normal range."
          }
        ]
      },
      {
        "heading": {
          "tr": "Çeşme ve Alaçatı ikliminde kimyasal kullanımında neye dikkat edilmeli?",
          "en": "What should you watch for when using chemicals in the Çeşme and Alaçatı climate?"
        },
        "paragraphs": [
          {
            "tr": "Çeşme yarımadasının uzun, güneşli ve sıcak yaz sezonu klor tüketimini belirgin biçimde artırır. Stabilizatörsüz klor güçlü güneş altında hızla parçalanır, bu yüzden siyanürik asidi 30–50 ppm aralığında tutmak klorun gün boyu işini yapmasını sağlar. Ancak stabilizatörlü tablet ve granülleri sürekli kullanmak bu değeri zamanla fazla yükseltir ve klorun etkinliğini düşürür; sezon boyunca düzenli ölçüm şarttır. İmbat ve lodos rüzgârı suya toz, polen ve yaprak taşır, filtreye ek yük bindirir; rüzgârlı dönemlerde skimmer ve filtre temizliğini sıklaştırmak, gerektiğinde berraklaştırıcıya başvurmak işe yarar. Yoğun buharlaşma nedeniyle eklenen taze su da pH ve alkaliniteyi değiştirir. Kiralık villalarda kullanıcı sayısı arttıkça kloramin ve klor ihtiyacı yükselir.",
            "en": "The long, sunny and hot summer season of the Çeşme peninsula noticeably increases chlorine consumption. Unstabilised chlorine breaks down quickly under strong sun, so keeping cyanuric acid in the 30–50 ppm range lets chlorine keep working throughout the day. However, constant use of stabilised tablets and granules raises this value too far over time and reduces chlorine's effectiveness, so regular measurement through the season is essential. The imbat and lodos winds carry dust, pollen and leaves into the water and put extra load on the filter; in windy spells it helps to clean the skimmer and filter more often and to reach for a clarifier when needed. Fresh water added to make up for heavy evaporation also shifts pH and alkalinity. In rental villas, chloramine levels and chlorine demand rise as the number of bathers grows."
          },
          {
            "tr": "Kıyıya yakın villalarda tuzlu deniz havası ve nem, metal ambalaj kapaklarını, dozaj pompalarını ve teknik odadaki bağlantı parçalarını zamanla aşındırır; kimyasal buharı da bu etkiyi hızlandırır. Bu yüzden kimyasallarınızı güneş alan terasta değil, gölgeli ve havadar bir teknik odada, kapakları sıkıca kapalı ve zeminden yüksekte saklayın. Sıcaklık klor ürünlerinin gücünü kaybetmesine yol açtığı için sezon başında ihtiyacınızdan fazla stok yapmamak da mantıklıdır. Villanın haftalarca boş kalacağı dönemlerde ayrılmadan önce değerleri dengeleyip yosun önleyici eklemek, dönüşte yeşil bir havuzla karşılaşma riskini azaltır. Suyun kimyasını sezon boyunca sizin yerinize yönetmemizi isterseniz [Çeşme'de profesyonel havuz bakımı](page:maintenance) hizmetimizi inceleyebilir, ihtiyaç duyduğunuz ürünlere ise [tüm havuz kimyasalları](page:products) sayfamızdan ulaşabilirsiniz.",
            "en": "Near the shore, salty sea air and humidity gradually corrode metal packaging caps, dosing pumps and fittings in the plant room, and chemical fumes speed this up. That is why you should store your chemicals in a shaded, ventilated plant room rather than on a sunny terrace, with lids tightly closed and off the floor. Because heat makes chlorine products lose strength, it also makes sense not to stock more than you need at the start of the season. When the villa will stand empty for weeks, balancing the values and adding an algaecide before you leave reduces the risk of coming back to a green pool. If you would like us to manage your water chemistry for you throughout the season, take a look at our [professional pool maintenance in Çeşme](page:maintenance) service, and you can find the products you need on our [full range of pool chemicals](page:products) page."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Havuza hangi kimyasallar gerekir?",
          "en": "Which chemicals does a pool need?"
        },
        "a": {
          "tr": "Her havuzun temel ihtiyacı iki ailedir: pH'ı 7,2–7,6 aralığında tutan pH düzenleyici ve serbest kloru 1–3 ppm'de tutan klor. Bunlara çoğu havuzda düzenli kullanılan bir yosun önleyici eklenir. Berraklaştırıcı, çöktürücü, metal tutucu, alkalinite düşürücü ve bağlı klor çözücü ise ölçüm sonucuna ya da ortaya çıkan soruna göre, gerektiğinde kullanılan ürünlerdir.",
          "en": "Every pool has two core needs: a pH adjuster that keeps pH within 7.2–7.6 and chlorine that holds free chlorine at 1–3 ppm. Most pools add a regularly dosed algaecide to these. Clarifiers, flocculants, metal sequestrants, alkalinity reducers and combined chlorine removers are used as needed, depending on test results or the problem that appears."
        }
      },
      {
        "q": {
          "tr": "Havuz kimyasalları hangi sırayla eklenir?",
          "en": "In what order are pool chemicals added?"
        },
        "a": {
          "tr": "Önce suyu test edin. Ardından alkaliniteyi 80–120 ppm aralığına, sonra pH'ı 7,2–7,6 aralığına getirin. Değerler dengelendikten sonra klorla dezenfekte edin; şok klorlamayı akşam yapın. En son yosun önleyici, berraklaştırıcı ya da çöktürücü gibi tamamlayıcı ürünleri ekleyin. Her ürün arasında pompa çalışırken suyun karışmasını bekleyin ve ürünleri asla birlikte eklemeyin.",
          "en": "Test the water first. Then bring alkalinity into the 80–120 ppm range, followed by pH into 7.2–7.6. Once the values are balanced, disinfect with chlorine, doing any shock chlorination in the evening. Finally, add supporting products such as algaecide, clarifier or flocculant. Let the water mix with the pump running between each product, and never add products together."
        }
      },
      {
        "q": {
          "tr": "İdeal pH ve klor değeri nedir?",
          "en": "What are the ideal pH and chlorine levels?"
        },
        "a": {
          "tr": "Sektörde kabul gören aralık pH için 7,2–7,6, serbest klor için 1–3 ppm'dir. pH bu aralığın üzerine çıktığında klorun etkinliği düşer, altına indiğinde su göz ve cildi tahriş eder, ekipmanı aşındırır. Bu iki değeri güvenilir tutmak için toplam alkaliniteyi 80–120 ppm, siyanürik asidi 30–50 ppm aralığında tutmak da gerekir.",
          "en": "The widely accepted range is 7.2–7.6 for pH and 1–3 ppm for free chlorine. When pH rises above this range, chlorine loses effectiveness; when it falls below, the water irritates eyes and skin and corrodes equipment. To hold these two values reliably, total alkalinity should also stay within 80–120 ppm and cyanuric acid within 30–50 ppm."
        }
      },
      {
        "q": {
          "tr": "Havuz kimyasalları birbirine karıştırılır mı, nasıl saklanmalı?",
          "en": "Can pool chemicals be mixed, and how should they be stored?"
        },
        "a": {
          "tr": "Hayır, havuz kimyasalları asla birbirine karıştırılmaz; özellikle asitli ürünlerle klorun teması tehlikeli klor gazı açığa çıkarabilir. Her ürünü ayrı ekleyin, seyreltirken suya kimyasal ekleyin. Ürünleri orijinal ambalajında, kapağı kapalı, çocuklardan uzak, serin, kuru ve havadar bir yerde saklayın. Asit içeren ürünleri klorlu ürünlerden ayrı raflarda tutun.",
          "en": "No, pool chemicals must never be mixed; contact between acid-based products and chlorine in particular can release dangerous chlorine gas. Add each product separately, and when diluting, add the chemical to water. Store products in their original packaging with lids closed, out of children's reach, in a cool, dry, ventilated place. Keep acid-based products on separate shelves from chlorine products."
        }
      }
    ]
  },
  "havuz-renovasyonu-rehberi": {
    "title": {
      "tr": "Havuz Renovasyonu: Ne Zaman Gerekir, Nasıl Planlanır?",
      "en": "Pool Renovation: When Is It Needed and How Is It Planned?"
    },
    "seoTitle": {
      "tr": "Havuz Renovasyonu Rehberi: Kapsam ve Süreç",
      "en": "Pool Renovation Guide: Scope and Process"
    },
    "excerpt": {
      "tr": "Havuz renovasyonu ne zaman gerekir, kapsam nasıl belirlenir, süreç hangi sırayla ilerler? Çeşme ve Alaçatı villa havuzları için uzman rehberi.",
      "en": "When is a pool renovation needed, how is the scope set and in what order does the work run? An expert guide for villa pools in Çeşme and Alaçatı."
    },
    "intro": {
      "tr": "Havuz renovasyonu, yıpranmış bir havuzu yeniden sağlam, verimli ve bakımı kolay bir yapıya kavuşturma işidir. Yılda birkaç kez yapılan küçük onarımlardan farklı olarak, sorunun kaynağına inen ve havuzun kabuğundan tesisatına, kaplamasından taşma sistemine kadar birden fazla kalemi aynı anda ele alan planlı bir çalışmadır. Doğru zamanda ve doğru kapsamda yapıldığında, bir havuzu yıllarca sorunsuz kullanmanın en ekonomik yoludur. Bu rehberde renovasyon gerektiren belirtileri, onarım ile tam yenileme arasındaki kararı, kapsamın işi nasıl büyüttüğünü, sürecin adımlarını ve en uygun mevsimi anlatıyoruz.",
      "en": "A pool renovation is the work of bringing a worn pool back to a sound, efficient and easily maintained condition. Unlike the small repairs made a few times a year, it is planned work that gets to the root of the problem and addresses several items at once, from the shell and the plumbing to the finish and the overflow system. Carried out at the right time and to the right scope, it is the most economical way to use a pool trouble-free for years. In this guide we cover the signs that call for a renovation, the decision between repair and full replacement, how scope drives the size of the job, the steps of the process and the best season for the work."
    },
    "sections": [
      {
        "heading": {
          "tr": "Havuzunuz renovasyon istediğini nasıl belli eder?",
          "en": "How does a pool show that it needs renovating?"
        },
        "paragraphs": [
          {
            "tr": "Havuzlar bir anda bozulmaz; yıllar içinde biriken küçük işaretler bir noktada birbirini besleyerek büyür. Tek bir belirti çoğu zaman sınırlı bir onarımla çözülür. Ancak aşağıdaki işaretlerden üçü ya da daha fazlası aynı havuzda bir aradaysa, artık tek tek müdahale etmek yerine bütünü ele alan bir renovasyon daha doğrudur. Çeşme yarımadasında bu süreç iç bölgelere göre daha hızlı işler: tuzlu deniz havası açıktaki metal parçaları ve derz dolgularını yıpratır, imbat ve lodos suyun yüzeyini sürekli hareket ettirir, uzun ve yoğun yaz sezonu ise ekipmanı normalden fazla çalıştırır.",
            "en": "Pools do not fail overnight; small signs build up over the years until they start feeding one another. A single symptom can usually be solved with a limited repair. But when three or more of the signs below appear in the same pool, it makes more sense to address the whole rather than patch each item separately. On the Çeşme peninsula this process runs faster than inland: the salty sea air wears down exposed metal parts and grout, the imbat and lodos winds keep the water surface in constant motion, and the long, busy summer season runs the equipment harder than usual."
          }
        ],
        "bullets": [
          {
            "tr": "Kaplamada yaygın çatlak, kabarma, renk atması ya da dökülmeye başlayan derzler; tek bir bölgeyle sınırlı değilse bu, [derz ve fayans yenileme](post:havuz-derz-fayans-yenileme) kaleminin gündeme geldiğinin işaretidir",
            "en": "Widespread cracking, blistering or fading in the finish, or grout that is starting to crumble; when it is not confined to one area, it signals that [regrouting and retiling](post:havuz-derz-fayans-yenileme) is on the agenda"
          },
          {
            "tr": "Onarıma rağmen tekrarlayan ve bir türlü kapanmayan su kaybı — önce kaynağın [su kaçağı teşhisiyle](post:havuz-su-kacagi-tamiri) kesinleştirilmesi gerekir",
            "en": "Water loss that keeps returning despite repairs — the source first needs to be confirmed through [leak detection](post:havuz-su-kacagi-tamiri)"
          },
          {
            "tr": "Filtrasyonun havuz hacmine yetmemesi: suyun berraklığını geç toparlaması, filtrenin çok sık geri yıkama istemesi",
            "en": "Filtration that no longer suits the pool's volume: water that takes too long to clear, a filter that needs backwashing far too often"
          },
          {
            "tr": "Teknik odadan gelen gürültü, titreşim ve ısınma; bunlar çoğu zaman bir [pompa arızasının](post:havuz-pompasi-arizalari) habercisidir",
            "en": "Noise, vibration and heat from the plant room; these are often the early warning of a [pump fault](post:havuz-pompasi-arizalari)"
          },
          {
            "tr": "Eski skimmerlı sistemin yetersiz kalması, yüzey temizliğinin zorlaşması ve modern taşma kanalı arzusu",
            "en": "An older skimmer system no longer coping, surface cleaning becoming harder, and the wish for a modern overflow channel"
          },
          {
            "tr": "Isıtmalı havuzlarda ısı kaybının artması, ısıtmanın giderek daha uzun sürmesi ve sezon dışında havuzun kullanılamaz hale gelmesi",
            "en": "In heated pools, growing heat loss, heating that takes ever longer, and a pool that becomes unusable outside the season"
          },
          {
            "tr": "Estetik eskime: havuzun rengi, aydınlatması ve çevre döşemesinin villanın yenilenmiş mimarisiyle artık uyuşmaması",
            "en": "Aesthetic ageing: the pool's colour, lighting and surrounding paving no longer matching the villa's updated architecture"
          }
        ]
      },
      {
        "heading": {
          "tr": "Onarım mı, renovasyon mu, tam yenileme mi?",
          "en": "Repair, renovation or full rebuild?"
        },
        "paragraphs": [
          {
            "tr": "Bu üçü arasındaki fark, işin büyüklüğünden çok kararın dayandığı soruda saklıdır. Onarım, nedeni belli ve sınırlı bir sorunu ortadan kaldırır: yerinden oynamış bir nozul contası, tek bir bölgede dökülen derz, arızalanan bir pompa. Havuzun geri kalanı sağlamsa doğru olan da budur. Renovasyon ise havuzun sağlam kalan yapısını koruyup yıpranan katmanlarını yenilemektir; kabuk ayakta kalır, üzerindeki su yalıtımı, kaplama, tesisat ve ekipman elden geçirilir. Tam yenileme, yani havuzun sökülüp yeniden inşa edilmesi, çoğu villa havuzunda gerekmez ve yalnızca kabuğun taşıyıcı bütünlüğü kaybolduğunda, havuzun konumu ya da geometrisi kullanımla temelden çeliştiğinde gündeme gelir.",
            "en": "The difference between the three lies less in the size of the job than in the question behind the decision. A repair removes a problem whose cause is known and contained: a return nozzle seal that has shifted, grout crumbling in one area, a pump that has failed. If the rest of the pool is sound, that is exactly the right answer. A renovation keeps the sound structure of the pool and renews its worn layers; the shell stays, while the waterproofing over it, the finish, the plumbing and the equipment are overhauled. A full rebuild, meaning demolishing the pool and building it again, is rarely needed in a villa pool and only arises when the shell has lost its structural integrity, or when the pool's position or geometry fundamentally conflicts with how it is used."
          },
          {
            "tr": "Kararı verirken en kritik ölçüt tekrar eden masraftır. Aynı sorun için yılda birkaç kez ekip çağırıyorsanız, her sezon yeni bir yama açılıyorsa ya da bir kalemi onarmak için zaten havuzun boşaltılması ve kaplamanın kısmen sökülmesi gerekiyorsa, parçalı onarımlar toplamda renovasyondan daha pahalıya gelir. Sağlıklı bir karar için önce kabuğun ve su yalıtımının durumu, ardından tesisatın ve ekipmanın yaşı yerinde değerlendirilmelidir. Bu değerlendirme keşifle başlar; havuzu görmeden verilen kapsam kararları çoğu zaman ya gereğinden geniş ya da eksik kalır.",
            "en": "The most telling criterion in this decision is recurring cost. If you are calling a team out several times a year for the same issue, if a new patch opens up every season, or if repairing one item already means draining the pool and partly stripping the finish, then piecemeal repairs add up to more than a renovation. To decide soundly, the condition of the shell and the waterproofing must be assessed first, then the age of the plumbing and equipment, and all of it on site. That assessment begins with a survey; scope decisions made without seeing the pool tend to be either broader than necessary or incomplete."
          }
        ]
      },
      {
        "heading": {
          "tr": "Kapsam renovasyonun maliyetini nasıl değiştirir?",
          "en": "How does scope change the cost of a renovation?"
        },
        "paragraphs": [
          {
            "tr": "Renovasyonda maliyeti belirleyen tek bir kalem yoktur; işi büyüten şey kapsamın katman katman derinleşmesidir. Yalnızca kaplamanın yenilendiği bir çalışma ile kabuğa kadar inip su yalıtımının tamamen yeniden yapıldığı bir çalışma, aynı havuzda bile birbirinden çok farklı iki iştir. Kapsamı genişleten başlıca etkenler; havuzun hacmi ve geometrisi, seçilen kaplama malzemesi, taşma sisteminin değişip değişmeyeceği, tesisatın ne kadarının yenileneceği, ısıtma ve otomasyon gibi yeni sistemlerin eklenip eklenmeyeceği ve şantiyeye erişim koşullarıdır.",
            "en": "No single item sets the cost of a renovation; what enlarges the job is scope deepening layer by layer. Work that renews only the finish and work that goes down to the shell and rebuilds the waterproofing entirely are two very different jobs, even in the same pool. The main factors that widen scope are the pool's volume and geometry, the finish material chosen, whether the overflow system changes, how much of the plumbing is renewed, whether new systems such as heating and automation are added, and the access conditions on site."
          },
          {
            "tr": "Erişim, bu bölgede sık hafife alınan bir kalemdir. Karaburun ve Çeşme kıyılarındaki kayalık, eğimli arazilerde söküm malzemesinin tahliyesi ve yeni malzemenin havuz başına taşınması, düz bir bahçedeki aynı işe göre belirgin şekilde daha fazla emek ister. Bütçe planlarken bir başka nokta da sürprizlere pay bırakmaktır: kaplama söküldüğünde ancak o zaman görünen kabuk çatlakları ya da yorulmuş bir izolasyon, kapsamı bir kademe büyütebilir. Havuzunuzun mevcut durumuna göre net bir kapsam ve fiyat için yerinde keşif şarttır; [havuz inşaatı ve renovasyon](page:construction) hizmetimiz kapsamında havuzu görüp kalem kalem bir plan çıkarıyoruz.",
            "en": "Access is an item that is often underestimated in this region. On the rocky, sloping plots along the Karaburun and Çeşme coast, removing demolition waste and carrying new material to the poolside takes noticeably more effort than the same job in a flat garden. Another point when budgeting is to leave room for surprises: cracks in the shell, or tired waterproofing that only becomes visible once the finish comes off, can push the scope up a level. For a clear scope and price based on your pool's actual condition, an on-site survey is essential; as part of our [pool construction and renovation](page:construction) service we inspect the pool and draw up an item-by-item plan."
          }
        ]
      },
      {
        "heading": {
          "tr": "Renovasyon süreci hangi sırayla ilerler?",
          "en": "In what order does a renovation proceed?"
        },
        "paragraphs": [
          {
            "tr": "Renovasyonun kalitesini belirleyen en önemli şey sıralamadır. Her katman, altındaki katman kusursuz olduğu için ayakta kalır; bu yüzden bir adımı atlamak ya da sırasını değiştirmek, birkaç sezon sonra aynı sorunun geri dönmesi anlamına gelir. Sıralamanın bir faydası daha vardır: her aşama, bir sonraki aşamanın kapsamını netleştirir. Söküm tamamlanmadan yapısal onarımın büyüklüğü, yapısal onarım bitmeden de kaplama takvimi kesinleşmez. Tipik bir villa havuzunda süreç aşağıdaki gibi ilerler ve her adımın sonunda, bir sonrakine geçmeden önce bir kontrol noktası bulunur.",
            "en": "The single most important factor in the quality of a renovation is sequence. Each layer holds because the one beneath it is sound, so skipping a step or changing its order means the same problem returns a few seasons later. Sequence has a second benefit: every stage clarifies the scope of the next. The extent of the structural repair is not known until the strip-out is complete, and the schedule for the finish is not fixed until the structural repair is done. In a typical villa pool the process runs as follows, with a checkpoint at the end of each step before the next begins."
          }
        ],
        "bullets": [
          {
            "tr": "1. Tespit ve keşif: havuz boşaltılmadan önce su kaybı, ekipman performansı, kaplama ve çevre döşemesinin durumu yerinde incelenir; varsa geçmiş onarımlar not edilir.",
            "en": "1. Assessment and survey: before the pool is drained, water loss, equipment performance and the condition of the finish and surrounding paving are examined on site, and any past repairs are noted."
          },
          {
            "tr": "2. Kapsam ve tasarım kararı: hangi kalemlerin yenileneceği, kaplama malzemesi, renk, aydınlatma ve taşma sistemi netleştirilir; iş programı çıkarılır.",
            "en": "2. Scope and design decisions: which items will be renewed, along with the finish material, colour, lighting and overflow system, are settled and a work programme is drawn up."
          },
          {
            "tr": "3. Söküm: havuz kontrollü biçimde boşaltılır, eski kaplama ve yıpranmış katmanlar kabuğa kadar alınır; ancak bu aşamada yapının gerçek durumu tam olarak görülebilir.",
            "en": "3. Strip-out: the pool is drained in a controlled way and the old finish and worn layers are taken back to the shell; only at this stage can the true condition of the structure be seen in full."
          },
          {
            "tr": "4. Yapısal onarım ve su yalıtımı: kabuktaki çatlaklar nedenine göre onarılır, yüzey düzeltilir ve su yalıtımı yeniden uygulanır. Renovasyonun ömrünü belirleyen adım budur.",
            "en": "4. Structural repair and waterproofing: cracks in the shell are repaired according to their cause, the surface is levelled and the waterproofing is reapplied. This is the step that determines how long the renovation lasts."
          },
          {
            "tr": "5. Tesisat ve ekipman: emiş ve dönüş hatları, vanalar, nozullar yenilenir; filtre ve pompa havuzun gerçek hacmine göre yeniden boyutlandırılır. Havuza küçük gelen bir filtre yerine hacme uygun bir [kum filtresi](product:kum-filtresi-600) seçmek, sonraki yılların su kalitesini baştan belirler.",
            "en": "5. Plumbing and equipment: suction and return lines, valves and nozzles are renewed, and the filter and pump are resized to the pool's actual volume. Choosing a [sand filter](product:kum-filtresi-600) matched to the volume, rather than one that is undersized, sets the water quality for years to come."
          },
          {
            "tr": "6. Kaplama: yeni seramik, mozaik ya da tercih edilen bitiş malzemesi uygulanır, derzler doldurulur ve gerekli kür süresi beklenir.",
            "en": "6. Finish: the new ceramic, mosaic or chosen finish material is applied, the joints are filled and the required curing time is observed."
          },
          {
            "tr": "7. Devreye alma: havuz doldurulur, tesisat basınçla ve kaçak kontrolüyle sınanır, kimyasal denge kurulur ve ekipmanın çalışma programı ayarlanır.",
            "en": "7. Commissioning: the pool is filled, the plumbing is tested under pressure and checked for leaks, the chemistry is balanced and the equipment's running schedule is set."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz renovasyonu için en uygun zaman ne zaman?",
          "en": "When is the best time for a pool renovation?"
        },
        "paragraphs": [
          {
            "tr": "Renovasyon için ideal dönem kış ve erken bahardır. Havuz zaten kapalı olduğu için kullanım kaybı yaşanmaz, söküm ve yapısal işler acele etmeden yürütülür, beton ve derz uygulamaları için gereken kür süreleri rahatça beklenebilir. Ege'nin ılıman kışı bu açıdan avantajlıdır; buna karşılık yağışlı günler ve nem, dış cephe ile çevre döşemesi işlerinde programı bir miktar uzatabilir. Bu yüzden iş programı hava koşullarına pay bırakacak şekilde kurulmalıdır.",
            "en": "The ideal period for a renovation is winter and early spring. The pool is closed anyway, so no use is lost, strip-out and structural work can proceed without haste, and the curing times needed for concrete and grout can be observed comfortably. The Aegean's mild winter is an advantage here, though rainy days and humidity can stretch the programme somewhat for exterior and paving work. The schedule should therefore be built with an allowance for the weather."
          },
          {
            "tr": "Sezona yetiştirmek istiyorsanız kararı geciktirmemek önemlidir. Kapsamı geniş bir renovasyonda malzeme tedariki, söküm, yapısal onarım ve kür süreleri arka arkaya gelir; haziran başında hazır bir havuz için planlamanın kışın başlamış olması gerekir. Havuzunuzu kış için zaten kapatıyorsanız, [kışa hazırlık](post:havuzu-kisa-hazirlama) sırasında yapılan kontroller renovasyon kapsamını belirlemek için doğal bir fırsattır. Sezonun tam ortasında başlanan işler ise hem tatil dönemini boşa çıkarır hem de acele nedeniyle kalitesiz sonuç riski taşır.",
            "en": "If you want the pool ready for the season, it matters not to delay the decision. In a wide-scope renovation, material supply, strip-out, structural repair and curing times follow one after another; for a pool that is ready in early June, planning needs to have started in winter. If you are closing the pool for winter anyway, the checks made during [winterising](post:havuzu-kisa-hazirlama) are a natural opportunity to define the renovation scope. Work started in the middle of the season, by contrast, writes off the holiday period and risks poor results through haste."
          }
        ]
      },
      {
        "heading": {
          "tr": "Renovasyonda en sık yapılan hatalar nelerdir?",
          "en": "What are the most common mistakes in a renovation?"
        },
        "paragraphs": [
          {
            "tr": "Renovasyonların çoğu kötü malzeme yüzünden değil, eksik teşhis ve aceleci sıralama yüzünden kısa ömürlü olur. Kullanılan malzemenin kalitesi elbette önemlidir; ancak doğru malzeme yanlış zeminin üzerine geldiğinde ya da yeterince beklenmediğinde aynı sonucu verir. Aşağıdaki hatalar, birkaç sezon sonra aynı işin yeniden yapılmasına yol açan en yaygın nedenlerdir ve neredeyse tamamı planlama aşamasında önlenebilir. Tamamlanmış işlerin nasıl bir bütünlük oluşturduğunu görmek de karar vermeyi kolaylaştırır; antrasit aydınlatmalı, gizli savaklı ve tundra gri renovasyonlarımızın öncesi ve sonrası [tamamlanan projelerimiz](page:projects) arasında yer alıyor.",
            "en": "Most renovations fall short not because of poor materials but because of incomplete diagnosis and a rushed sequence. The quality of the material used certainly matters, yet the right material laid over the wrong substrate, or given too little time, produces the same outcome. The mistakes below are the most common reasons the same work has to be redone a few seasons later, and nearly all of them can be avoided at the planning stage. Seeing how finished jobs come together as a whole also makes deciding easier; the before and after of our anthracite lit, hidden-weir and tundra grey renovations can be found among our [completed projects](page:projects)."
          }
        ],
        "bullets": [
          {
            "tr": "Nedeni bulunmadan yüzeyi yenilemek: altında devam eden bir su kaçağı ya da zemin hareketi varken yapılan kaplama, yeni derzleri kısa sürede geri verir.",
            "en": "Renewing the surface without finding the cause: a finish laid over an ongoing leak or continuing ground movement will give up its new grout within a short time."
          },
          {
            "tr": "Su yalıtımından tasarruf etmek: görünmeyen bu katman, renovasyonun görünen tüm kalemlerinin ömrünü belirler.",
            "en": "Economising on waterproofing: this invisible layer determines the life of every visible item in the renovation."
          },
          {
            "tr": "Kaplamayı yenileyip tesisatı olduğu gibi bırakmak: yıllanmış hatlar ve yetersiz filtrasyon, yeni kaplamanın altında aynı sorunları üretmeye devam eder.",
            "en": "Renewing the finish while leaving the plumbing untouched: ageing lines and inadequate filtration keep producing the same problems beneath the new surface."
          },
          {
            "tr": "Kür sürelerini beklememek: sezona yetişme telaşıyla erken doldurulan bir havuz, derzlerinde ve yalıtımında kalıcı zafiyet taşır.",
            "en": "Not waiting out the curing times: a pool filled too early in the rush to make the season carries permanent weakness in its joints and waterproofing."
          },
          {
            "tr": "Ekipmanı havuzun gerçek hacmine göre seçmemek: yetersiz pompa ve filtre, sonraki her sezon fazladan kimyasal ve emek olarak geri döner.",
            "en": "Not sizing the equipment to the pool's actual volume: an undersized pump and filter come back as extra chemicals and labour every season afterwards."
          },
          {
            "tr": "Devreye alma sonrasını planlamamak: yeni bir havuz kadar hassas olan bu dönemde [düzenli bakım](page:maintenance) programının kurulmaması, kimyasal dengenin ve yeni yüzeyin erkenden yıpranmasına yol açar.",
            "en": "Not planning for life after commissioning: in this period, which is as delicate as that of a brand-new pool, failing to set up a [regular maintenance](page:maintenance) programme leads to unstable chemistry and early wear on the new surface."
          },
          {
            "tr": "Yerel koşulları hesaba katmamak: [Çeşme'de](area:cesme) tuzlu hava ve rüzgâr, seçilen malzemenin ve metal parçaların dayanımını doğrudan etkiler.",
            "en": "Ignoring local conditions: [in Çeşme](area:cesme), salty air and wind directly affect the durability of the chosen materials and metal parts."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Havuz renovasyonu ne kadar sürer?",
          "en": "How long does a pool renovation take?"
        },
        "a": {
          "tr": "Süre tamamen kapsama bağlıdır. Yalnızca kaplama ve derzlerin yenilendiği bir çalışma birkaç hafta içinde tamamlanabilirken, kabuğa kadar inilen, su yalıtımı ve tesisatın da yenilendiği bir renovasyon belirgin şekilde uzar. Beton ve derz uygulamalarının kür süreleri kısaltılamaz. Havuzunuzu görmeden gerçekçi bir takvim vermek doğru olmaz; keşif sonrasında adım adım bir iş programı paylaşıyoruz.",
          "en": "The duration depends entirely on the scope. Work that renews only the finish and grout can be completed within a few weeks, while a renovation that goes down to the shell and also renews the waterproofing and plumbing takes considerably longer. The curing times for concrete and grout cannot be shortened. It would not be right to give a realistic timeline without seeing your pool; after a survey we share a step-by-step work programme."
        }
      },
      {
        "q": {
          "tr": "Havuz renovasyonunda havuzun tamamen boşaltılması gerekir mi?",
          "en": "Does the pool have to be fully drained for a renovation?"
        },
        "a": {
          "tr": "Kaplama, derz, su yalıtımı ve kabuk onarımı gerektiren her renovasyonda havuzun boşaltılması gerekir; bu işler kuru yüzeyde yapılır. Boşaltma kontrollü yapılmalıdır, çünkü yeraltı su seviyesinin yüksek olduğu arazilerde aniden boşaltılan bir havuz zemin basıncından zarar görebilir. Yalnızca teknik odayla sınırlı ekipman yenilemelerinde ise boşaltma çoğu zaman gerekmez.",
          "en": "Any renovation involving the finish, grout, waterproofing or shell repair requires the pool to be drained, as this work is done on a dry surface. Draining must be controlled, because on sites with a high water table a pool emptied suddenly can be damaged by ground pressure. For equipment renewals confined to the plant room, draining is usually not necessary."
        }
      },
      {
        "q": {
          "tr": "Eski skimmerlı havuz taşmalı havuza dönüştürülebilir mi?",
          "en": "Can an older skimmer pool be converted to an overflow pool?"
        },
        "a": {
          "tr": "Çoğu durumda mümkündür, ancak bu renovasyonun en kapsamlı kalemlerinden biridir. Taşma kanalı, denge deposu, yeni tesisat hatları ve çevre döşemesinin kot ayarı birlikte planlanmalıdır. Mevcut kabuğun yapısı, bahçedeki yer durumu ve teknik odanın kapasitesi kararı belirler. Bu dönüşüm yapılabilir mi ve hangi kapsamda yapılır, ancak yerinde keşifle netleşir.",
          "en": "In most cases it is possible, but it is one of the most extensive items in a renovation. The overflow channel, balance tank, new plumbing lines and the levels of the surrounding paving all have to be planned together. The structure of the existing shell, the space available in the garden and the capacity of the plant room shape the decision. Whether this conversion can be done, and to what scope, only becomes clear with an on-site survey."
        }
      },
      {
        "q": {
          "tr": "Havuz renovasyonu için ruhsat gerekir mi?",
          "en": "Is a permit required for a pool renovation?"
        },
        "a": {
          "tr": "Mevcut havuzun kaplamasının, tesisatının ve ekipmanının yenilenmesi genellikle yapının ölçüsünü ve konumunu değiştirmez. Ancak havuzun boyutu, derinliği ya da yeri değişiyorsa veya denge deposu gibi yeni bir yapı ekleniyorsa durum farklılaşabilir. İzin gereklilikleri belediyeden belediyeye değişir; işe başlamadan önce bağlı olduğunuz belediyeden ve ilgili kurumlardan teyit almanızı öneririz.",
          "en": "Renewing the finish, plumbing and equipment of an existing pool generally does not change the structure's dimensions or position. The situation can differ, however, if the pool's size, depth or location changes, or if a new structure such as a balance tank is added. Permit requirements vary from one municipality to another; we recommend confirming with your municipality and the relevant authorities before work begins."
        }
      }
    ]
  },
  "havuz-ph-klor-dozaj": {
    "title": {
      "tr": "Havuz pH ve Klor Dozajı Nasıl Ayarlanır?",
      "en": "How Do You Set Pool pH and Chlorine Dosage?"
    },
    "seoTitle": {
      "tr": "Havuz pH ve Klor Dozajı Nasıl Ayarlanır?",
      "en": "How to Set Pool pH and Chlorine Dosage"
    },
    "excerpt": {
      "tr": "Ölçmeden dozaj yapılmaz: havuz hacmi hesabı, ölçüm sırası, pH ile klorun ilişkisi ve küçük adımlarla doğru dozaj disiplini.",
      "en": "No dosing without measuring: pool volume, the right testing order, how pH and chlorine interact and the discipline of small, measured steps."
    },
    "intro": {
      "tr": "Havuz pH ve klor dozajı tahminle değil, ölçümle kurulur. Doğru sıra her zaman aynıdır: önce havuzunuzun su hacmini bilirsiniz, sonra suyu ölçersiniz, en sonunda ürün etiketindeki dozajı uygularsınız. Bu sıra bozulduğunda kimyasal hem israf olur hem de su bir gün aşırı klorlu, ertesi gün dengesiz hale gelir. Bu yazıda hacim hesabından ölçüm sırasına, pH'ın klor üzerindeki etkisinden stabilizatörün rolüne kadar dozaj mantığının tamamını anlatıyoruz. Amacımız size bir formül ezberletmek değil; hangi değeri neden ölçtüğünüzü ve müdahaleyi neden küçük adımlarla yapmanız gerektiğini anlaşılır kılmak.",
      "en": "Pool pH and chlorine dosage is built on measurement, not guesswork. The correct order is always the same: first you know your pool's water volume, then you test the water, and only then do you apply the dosage printed on the product label. When that order breaks down, chemicals are wasted and the water swings from over-chlorinated one day to unbalanced the next. In this article we explain the whole logic of dosing, from calculating volume and the order of testing to how pH affects chlorine and what the stabiliser actually does. Our aim is not to make you memorise a formula, but to make clear why you measure each value and why every correction should be made in small steps."
    },
    "sections": [
      {
        "heading": {
          "tr": "Havuzunuzun su hacmini nasıl hesaplarsınız?",
          "en": "How do you calculate your pool's water volume?"
        },
        "paragraphs": [
          {
            "tr": "Her dozaj hesabının çıkış noktası metreküp cinsinden su hacmidir, çünkü ürün etiketlerindeki miktarlar birim su hacmi üzerinden verilir. Dikdörtgen bir havuzda hesap basittir: en × boy × ortalama derinlik. Buradaki kritik kelime \"ortalama\"dır. Villa havuzlarının çoğunda taban eğimlidir; sığ uçta bel hizasında olan su, derin uçta bir insan boyunu geçebilir. Yalnızca derin ucun ölçüsünü kullanırsanız hacmi olduğundan büyük, yalnızca sığ ucu kullanırsanız küçük hesaplarsınız. Her iki uçtaki derinliği ölçüp ortalamasını almak, dozajınızın gerçekten havuzunuza ait olmasını sağlar.",
            "en": "Every dosing calculation starts with the water volume in cubic metres, because the quantities on product labels are always given per unit of water. For a rectangular pool the maths is simple: width × length × average depth. The critical word here is \"average\". Most villa pools have a sloping floor; water that reaches your waist at the shallow end can be over head height at the deep end. If you use only the deep-end measurement you will overestimate the volume, and if you use only the shallow end you will underestimate it. Measuring the depth at both ends and taking the average is what makes the dosage genuinely yours."
          },
          {
            "tr": "Serbest formlu, böbrek veya L biçimli havuzlarda hacmi yaklaşık olarak bulmak için havuzu birkaç dikdörtgen parçaya bölüp toplamak yeterlidir; mutlak kesinlik değil, tutarlı bir referans aranır. Basamaklar, oturma sekileri ve varsa taşma kanalı ile denge deposu da toplam su miktarını değiştirir. Bu yüzden hacmi bir kez dikkatle hesaplayıp yazılı bir yere not etmenizi öneririz. Düzenli olarak yürüttüğümüz [havuz bakım hizmetimizde](page:maintenance) her havuzun hacmi teknik dosyada kayıtlıdır ve sezon boyunca yapılan tüm dozaj hesapları bu tek sayıya dayanır.",
            "en": "For freeform, kidney or L-shaped pools it is enough to split the pool into a few rectangles and add the results; you are looking for a consistent reference, not absolute precision. Steps, seating ledges and, where present, the overflow channel and balance tank also change the total amount of water. That is why we recommend calculating the volume carefully once and writing it down. In our regular [pool maintenance service](page:maintenance), every pool's volume is recorded in its technical file, and all dosing calculations through the season rest on that single figure."
          }
        ]
      },
      {
        "heading": {
          "tr": "Ölçümü hangi sırayla yapmalısınız?",
          "en": "In which order should you run your tests?"
        },
        "paragraphs": [
          {
            "tr": "Su testinde sıra rastgele değildir: önce alkalinite, sonra pH, en son klor. Toplam alkalinite pH'ın tamponudur; 80–120 ppm aralığının altına düştüğünde pH bir günden ötekine savrulur ve pH'ı düzeltmek için yaptığınız her müdahale kısa ömürlü olur. Alkalinite yerinde olduğunda pH'ı 7,2–7,6 aralığına çekmek hem daha kolay hem de daha kalıcıdır. Klor ölçümünü en sona bırakmanın nedeni ise basit: pH yanlışken okuduğunuz klor değeri, suyun gerçekte ne kadar korunduğunu size doğru anlatmaz.",
            "en": "The order of testing is not arbitrary: alkalinity first, then pH, and chlorine last. Total alkalinity is the buffer for pH; once it falls below the 80–120 ppm range, pH swings from one day to the next and every correction you make to it is short-lived. When alkalinity sits where it should, bringing pH into the 7.2–7.6 range is both easier and longer-lasting. The reason chlorine comes last is simple: a chlorine reading taken while pH is wrong does not tell you how well the water is actually protected."
          },
          {
            "tr": "Ölçümü her zaman aynı koşullarda yapın: suyu yüzeyden değil dirsek derinliğinden, skimmer ve dönüş ağzından uzak bir noktadan alın, kabı önce havuz suyuyla çalkalayın. Reaktiflerin son kullanma tarihi geçmişse okuma sessizce yanlış çıkar; şişeleri sıcakta ve güneşte bırakmamak bu yüzden önemlidir. Ölçümü mümkünse günün aynı saatinde, filtrasyon çalıştıktan sonra tekrarlamak da sonuçları birbiriyle kıyaslanabilir kılar. Damla kitinden şerit teste, fotometrik cihazdan test setine kadar hangi ölçüm yönteminin size uyduğunu [havuz test kiti karşılaştırmamızda](post:havuz-test-kiti-karsilastirma) ayrıntılı olarak ele aldık.",
            "en": "Always test under the same conditions: take the sample at elbow depth rather than from the surface, away from the skimmer and the return inlet, and rinse the vial with pool water first. If the reagents are past their expiry date, the reading will be quietly wrong, which is why the bottles should never be left in heat or sunlight. Repeating the test at the same time of day, after the filtration has run, also makes your results comparable with one another. From drop kits and test strips to photometric devices and full test sets, we cover which testing method suits you in our [pool test kit comparison](post:havuz-test-kiti-karsilastirma)."
          }
        ],
        "bullets": [
          {
            "tr": "Toplam alkalinite: 80–120 ppm — pH'ı yerinde tutan tampon; önce bu değer oturmalı.",
            "en": "Total alkalinity: 80–120 ppm — the buffer that holds pH in place; settle this value first."
          },
          {
            "tr": "pH: 7,2–7,6 — klorun verimli çalıştığı, göz ve cildin rahat ettiği aralık.",
            "en": "pH: 7.2–7.6 — the range where chlorine works efficiently and eyes and skin stay comfortable."
          },
          {
            "tr": "Serbest klor: 1–3 ppm — suyu fiilen dezenfekte eden aktif klor miktarı.",
            "en": "Free chlorine: 1–3 ppm — the active chlorine that actually disinfects the water."
          },
          {
            "tr": "Siyanürik asit (stabilizatör): 30–50 ppm — uzun sezonda ayda bir kontrol etmek yeterlidir.",
            "en": "Cyanuric acid (stabiliser): 30–50 ppm — checking it once a month through a long season is enough."
          }
        ]
      },
      {
        "heading": {
          "tr": "pH, klorun etkinliğini nasıl değiştirir?",
          "en": "How does pH change the effectiveness of chlorine?"
        },
        "paragraphs": [
          {
            "tr": "Havuzdaki klorun tamamı aynı işi yapmaz. Suya giren klor, suyun pH'ına bağlı olarak iki biçim arasında paylaşılır ve bunlardan yalnızca biri güçlü bir dezenfektan gibi davranır. pH yükseldikçe bu etkili biçimin payı azalır: test kitiniz aynı serbest klor değerini gösterdiği halde suyun gerçek dezenfeksiyon gücü düşer. Klor koyup koyup sonuç alamadığını söyleyen havuz sahiplerinde çoğu zaman sorun klorda değil, yükselmiş pH'tadır.",
            "en": "Not all the chlorine in a pool does the same job. Once chlorine enters the water it is shared between two forms depending on pH, and only one of them behaves as a strong disinfectant. As pH rises, the share of that effective form falls: your test kit may show the same free chlorine figure while the water's real disinfecting power drops. When pool owners tell us they keep adding chlorine and see no result, the problem is usually not the chlorine but a pH that has crept up."
          },
          {
            "tr": "Havuz suyunun pH'ı doğal olarak yükselme eğilimindedir; taze takviye suyu, havalandırma ve sıcak hava bu yönde çalışır. Bu nedenle en sık ihtiyaç duyulan düzenleyici pH düşürücüdür ve [Quardex sıvı pH düşürücü](product:sivi-ph-quardex) gibi sıvı formlar suyla hızla karıştığı için pratik bir seçenektir. Ters yönde, pH 7,2'nin altına indiğinde su aşınmaya başlar, göz ve cilt rahatsız olur, klor ise hızla tükenir. Her iki durumda da hangi üründen hangi miktarı vereceğinizi ürün etiketi söyler; sizin işiniz pH'ı doğru aralığa getirip klorun çalışmasına izin vermektir.",
            "en": "Pool water pH naturally tends to rise; fresh top-up water, aeration and hot weather all push it that way. That is why a pH reducer is the adjuster most often needed, and liquid forms such as [Quardex liquid pH reducer](product:sivi-ph-quardex) are practical because they blend into the water quickly. In the other direction, once pH falls below 7.2 the water becomes corrosive, eyes and skin are irritated and chlorine burns off fast. In both cases the product label tells you which product and how much; your job is to bring pH into the right range and let the chlorine work."
          }
        ]
      },
      {
        "heading": {
          "tr": "Stabilizatör ne işe yarar, fazlası neye yol açar?",
          "en": "What does stabiliser do, and what happens when there is too much?"
        },
        "paragraphs": [
          {
            "tr": "Siyanürik asit, yaygın adıyla stabilizatör, klorun güneş ışığında parçalanmasını yavaşlatır. Korumasız bir havuzda yaz güneşi, sabah verdiğiniz klorun önemli bir bölümünü gün içinde tüketir; stabilizatör bu kaybı belirgin biçimde azaltır. Hedef aralık 30–50 ppm'dir. Bu aralığın altında klor tüketiminiz gereksiz yere yüksek olur, üstünde ise ters etki başlar: klor suda bulunmaya devam eder ama işini eskisi kadar hızlı yapamaz. Testte klor görünürken suyun kendini toparlayamaması çoğu zaman bu tablonun işaretidir.",
            "en": "Cyanuric acid, commonly known as stabiliser, slows the breakdown of chlorine in sunlight. In an unprotected pool, summer sun consumes a large part of the chlorine you added in the morning within the same day; stabiliser reduces that loss considerably. The target range is 30–50 ppm. Below it your chlorine consumption is needlessly high; above it the effect reverses: chlorine remains present in the water but no longer works as quickly. Water that will not recover while the test still shows chlorine is often a sign of exactly this."
          },
          {
            "tr": "Stabilizatörün en önemli özelliği kendiliğinden azalmamasıdır. Klor gibi tüketilmez; sadece ters yıkama, taşma ve takviye suyuyla seyrelir. Bu yüzden uzun sezon boyunca stabilizatör içeren ürün kullanıyorsanız değerin sessizce tırmandığını görebilirsiniz. Örneğin [WTR multifonksiyon klor tableti](product:multi-tablet-wtr) gibi yavaş salınımlı tabletler düzenli dezenfeksiyon için çok pratiktir, ancak sürekli kullanımda siyanürik asidi de ölçmek gerekir. Hangi ürün ailesinin hangi ihtiyaca karşılık geldiğini merak ediyorsanız [havuz kimyasalları rehberimiz](post:havuz-kimyasallari-rehberi) bu ayrımı ürün ürün anlatıyor.",
            "en": "The most important property of stabiliser is that it does not decrease on its own. Unlike chlorine it is not consumed; it is only diluted by backwashing, overflow and top-up water. So if you use stabilised products through a long season, you may find the value climbing quietly. Slow-release tablets such as [WTR multifunction chlorine tablets](product:multi-tablet-wtr), for instance, are very practical for steady disinfection, but with continuous use you need to measure cyanuric acid as well. If you are wondering which product family answers which need, our [pool chemicals guide](post:havuz-kimyasallari-rehberi) explains that distinction product by product."
          }
        ]
      },
      {
        "heading": {
          "tr": "Serbest klor, bağlı klor ve toplam klor arasındaki fark nedir?",
          "en": "What is the difference between free, combined and total chlorine?"
        },
        "paragraphs": [
          {
            "tr": "Test sonuçlarını doğru okumak için üç terimi ayırmak gerekir. Serbest klor, henüz hiçbir kirlilikle birleşmemiş, dezenfeksiyon işini yapmaya hazır olan klordur; hedefiniz olan 1–3 ppm bu değeri tanımlar. Bağlı klor, ter, güneş kremi, yaprak ve benzeri organik kirlilikle birleşmiş, artık dezenfekte edemeyen klordur; kloramin adıyla da anılır. Toplam klor ise bu ikisinin toplamıdır. Dolayısıyla toplam klor ile serbest klor arasındaki fark, suda ne kadar bağlı klor biriktiğini gösterir.",
            "en": "To read test results correctly you need to separate three terms. Free chlorine is chlorine that has not yet combined with any contaminant and is ready to do the disinfecting work; your 1–3 ppm target refers to this value. Combined chlorine has already bonded with organic load such as sweat, sunscreen or leaves and can no longer disinfect; it is also known as chloramine. Total chlorine is the sum of the two. The gap between total and free chlorine therefore tells you how much combined chlorine has built up in the water."
          },
          {
            "tr": "Bu ayrım pratikte önemlidir, çünkü bağlı klor havuzun tipik keskin \"klor kokusunu\" ve göz yanmasını yaratan asıl etkendir. Yani yoğun klor kokan bir havuzda sorun genellikle fazla klor değil, yorulmuş klordur ve çözüm klorla temas süresini azaltmak değil, suyu toparlamaktır. Bu durumda genellikle şok uygulaması gerekir; [Selenoid granül klor](product:toz-klor-selenoid) gibi yüksek konsantrasyonlu ürünler bu iş için kullanılır, miktar yine ürün etiketine göre belirlenir. Kokunun ve bulanıklığın diğer kök nedenlerini [havuz suyu bulanıklığı ve kokusu yazımızda](post:havuz-suyu-bulanikligi-kokusu) ayrıca ele aldık.",
            "en": "The distinction matters in practice, because combined chlorine is what creates the sharp \"chlorine smell\" and stinging eyes people associate with pools. In other words, in a strongly chlorine-smelling pool the problem is usually not too much chlorine but exhausted chlorine, and the answer is not less contact with chlorine but recovering the water. This normally calls for a shock treatment; high-concentration products such as [Selenoid granular chlorine](product:toz-klor-selenoid) are used for it, again in the quantity given on the label. We look at the other root causes of odour and cloudiness separately in our article on [cloudy and smelly pool water](post:havuz-suyu-bulanikligi-kokusu)."
          }
        ]
      },
      {
        "heading": {
          "tr": "Dozajı neden küçük adımlarla vermek gerekir?",
          "en": "Why should dosing be done in small steps?"
        },
        "paragraphs": [
          {
            "tr": "Havuz suyu anlık tepki veren bir sistem değildir. Eklediğiniz kimyasalın tüm hacme dağılması ve etkisinin ölçülebilir hale gelmesi, pompanın çalıştığı birkaç saatlik bir sirkülasyon ister. Bu yüzden deneyimli uygulamanın kuralı nettir: etiketin önerdiği dozun bir bölümünü verin, suyun dolaşmasını bekleyin, yeniden ölçün ve gerekiyorsa tamamlayın. Tek seferde büyük müdahale yapıldığında değer hedefin öbür tarafına geçer, onu düzeltmek için ters yönde kimyasal eklenir ve havuz bütün sezon boyunca bir sarkaç gibi salınmaya başlar.",
            "en": "Pool water is not a system that responds instantly. A chemical you add needs a few hours of circulation, with the pump running, to spread through the whole volume and produce a measurable effect. That is why the rule in experienced practice is clear: add part of the dose the label recommends, let the water circulate, measure again and top up if needed. When a large correction is made in one go, the value overshoots the target, the opposite chemical is added to fix it, and the pool swings like a pendulum for the rest of the season."
          },
          {
            "tr": "Aynı disiplin uygulama biçimi için de geçerlidir. Granül ürünler doğrudan havuza serpilmez; önce temiz bir kovada suyla çözülür, sonra pompa çalışırken havuz yüzeyine yayılarak eklenir. Tabletler zemine bırakılmaz, etiketin gösterdiği şekilde kullanılır. İki farklı kimyasal aynı anda verilmez; aralarına sirkülasyon süresi konur. Kimyasalı havuzun tek bir noktasına boşaltmak yerine derin uçtan başlayarak yüzeye dağıtmak, hem yüzey kaplamasını korur hem de karışımı hızlandırır. Bu adımlar haftalık rutinin bir parçasıdır ve rutinin tamamını [havuz bakımı nasıl yapılır yazımızda](post:havuz-bakimi-nasil-yapilir) adım adım anlattık.",
            "en": "The same discipline applies to how you apply the product. Granular products are never scattered straight into the pool; they are first dissolved in a clean bucket of water, then spread across the surface while the pump is running. Tablets are not dropped on the floor but used as the label indicates. Two different chemicals are never added at the same time; circulation time is left between them. Rather than emptying the product at a single spot, spread it across the surface starting from the deep end: this protects the pool finish and speeds up mixing. These steps are part of the weekly routine, and we set out that routine step by step in our article on [how to maintain a pool](post:havuz-bakimi-nasil-yapilir)."
          }
        ],
        "bullets": [
          {
            "tr": "Ölç, sonra doz ver: ölçüm sonucu olmadan hiçbir kimyasal havuza girmez.",
            "en": "Measure, then dose: no chemical goes into the pool without a test result behind it."
          },
          {
            "tr": "Etiketteki dozun tamamını değil, bir bölümünü uygulayın; eksiği tamamlamak kolay, fazlasını geri almak zordur.",
            "en": "Apply part of the label dose rather than all of it; topping up is easy, taking back an overdose is not."
          },
          {
            "tr": "Uygulamadan sonra pompayı çalıştırın ve yeniden ölçmeden önce suyun dolaşmasını bekleyin.",
            "en": "Run the pump after dosing and let the water circulate before you measure again."
          },
          {
            "tr": "Her ölçümü tarihiyle birlikte not edin; birkaç haftalık kayıt, havuzunuzun eğilimini tek bir testten daha iyi gösterir.",
            "en": "Record every reading with its date; a few weeks of notes reveal your pool's trend better than any single test."
          }
        ]
      },
      {
        "heading": {
          "tr": "Sıcak ve güneşli hava klor tüketimini nasıl artırır?",
          "en": "How do heat and sunshine increase chlorine consumption?"
        },
        "paragraphs": [
          {
            "tr": "Çeşme yarımadasında sezon uzun, güneş yoğundur ve bu doğrudan dozaja yansır. Ultraviyole ışık sudaki klorun bir bölümünü gün boyunca parçalar; su sıcaklığı yükseldikçe hem organik kirlilik daha hızlı çoğalır hem de klor daha çabuk tükenir. Buna yoğun kullanım eklenir: misafirli bir hafta sonu, havuzun kimyasal yükünü sessiz bir haftanın çok üzerine çıkarır. İmbat ve lodos ise yüzeye sürekli toz, tuz ve bitki artığı taşıyarak klorun bir kısmını daha en baştan meşgul eder.",
            "en": "On the Çeşme peninsula the season is long and the sun is intense, and that feeds straight into dosing. Ultraviolet light breaks down part of the chlorine in the water through the day; as water temperature rises, organic load multiplies faster and chlorine is used up more quickly. Heavy use adds to it: a weekend with guests puts far more chemical demand on a pool than a quiet week. The imbat and lodos winds, meanwhile, carry a constant film of dust, salt and plant debris onto the surface, occupying part of the chlorine before it does anything else."
          },
          {
            "tr": "Bunun pratik sonucu şudur: temmuz ve ağustostaki dozaj ritminiz mayıstakiyle aynı olmaz. Değişen şey etiketteki dozaj değil, ölçüm sıklığı ve takviye aralığıdır. Yaz ortasında serbest kloru daha sık kontrol etmek, stabilizatörü gözden kaçırmamak ve şok gerektiren durumları erken yakalamak gerekir. Klorun güneşten en az etkilendiği saatlerde, yani akşam serinliğinde takviye yapmak da aynı üründen daha fazla verim almanızı sağlar. [Alaçatı'da bakımını üstlendiğimiz havuzlarda](area:alacati) sezonun en yoğun haftalarında ölçüm aralığını kısaltmamızın nedeni tam olarak budur.",
            "en": "The practical consequence is this: your dosing rhythm in July and August will not be the same as in May. What changes is not the dosage on the label but how often you measure and how frequently you top up. In midsummer you need to check free chlorine more often, keep an eye on the stabiliser and catch situations that call for shock treatment early. Topping up when the sun affects chlorine least, in the cool of the evening, also gets more out of the same product. That is exactly why, [in the pools we maintain in Alaçatı](area:alacati), we shorten the interval between tests during the busiest weeks of the season."
          }
        ]
      },
      {
        "heading": {
          "tr": "Kimyasal uygularken hangi güvenlik kurallarına uymalısınız?",
          "en": "Which safety rules should you follow when applying chemicals?"
        },
        "paragraphs": [
          {
            "tr": "Havuz kimyasalları doğru kullanıldığında güvenlidir, ancak birkaç kural tartışmaya açık değildir. En önemlisi, iki kimyasalı asla birbiriyle karıştırmamaktır: aynı kovada, aynı ölçekte veya art arda aynı noktada uygulamak bile tehlikeli tepkimelere yol açabilir. İkincisi, her zaman kimyasal suya eklenir, su kimyasalın üzerine dökülmez. Uygulamayı mümkün olduğunca akşam saatlerinde yapmak hem güneşin ürünü boşa harcamasını önler hem de gece boyunca sirkülasyonla dengeli bir dağılım sağlar.",
            "en": "Pool chemicals are safe when used correctly, but a few rules are not open to debate. The most important is never to mix two chemicals with each other: using the same bucket, the same measuring cup, or applying them one after another at the same spot can all trigger dangerous reactions. Second, the chemical always goes into the water, never water onto the chemical. Applying in the evening where possible both keeps the sun from wasting the product and gives the water a full night of circulation for even distribution."
          }
        ],
        "bullets": [
          {
            "tr": "Kimyasalları birbirine karıştırmayın; her ürün için ayrı ve temiz kova, ölçek ve karıştırıcı kullanın.",
            "en": "Never mix chemicals; use a separate, clean bucket, measure and stirrer for each product."
          },
          {
            "tr": "Kimyasalı suya ekleyin, asla tersini yapmayın; toz ürünlerde yüzünüzü kovadan uzak tutun.",
            "en": "Add the chemical to water, never the other way round; with powders, keep your face away from the bucket."
          },
          {
            "tr": "Uygulamayı akşam ve rüzgârı arkanıza alacak şekilde yapın; eldiven ve koruyucu gözlük kullanın.",
            "en": "Apply in the evening and with the wind at your back; wear gloves and eye protection."
          },
          {
            "tr": "Ürünleri orijinal ambalajında, serin ve kuru bir yerde, çocukların ulaşamayacağı şekilde saklayın.",
            "en": "Store products in their original packaging, in a cool dry place, out of children's reach."
          },
          {
            "tr": "Uygulamadan sonra havuza girmek için ürün etiketinin belirttiği bekleme süresine uyun.",
            "en": "After dosing, respect the waiting time stated on the product label before anyone enters the pool."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Havuzun hacmini bilmeden kimyasal dozajı yapılabilir mi?",
          "en": "Can you dose chemicals without knowing the pool's volume?"
        },
        "a": {
          "tr": "Hayır. Ürün etiketlerindeki miktarlar belirli bir su hacmi için verilir; hacmi bilmeden yapılan uygulama ya yetersiz kalır ya da gereğinden fazla olur. En boy ve ortalama derinliği bir kez ölçüp metreküp cinsinden hacmi hesaplamak yeterlidir. Bu sayıyı yazılı tutun; sezon boyunca yapacağınız her dozaj hesabının dayanağı olacaktır.",
          "en": "No. The quantities on product labels are given for a specific water volume; dosing without knowing it will either fall short or overshoot. Measuring width, length and average depth once and working out the volume in cubic metres is enough. Write that figure down, because every dosing calculation you make through the season will rest on it."
        }
      },
      {
        "q": {
          "tr": "Önce pH mı yoksa klor mu ayarlanmalı?",
          "en": "Should pH or chlorine be adjusted first?"
        },
        "a": {
          "tr": "Önce alkalinite, sonra pH, en son klor. Alkalinite 80–120 ppm aralığında değilse pH sürekli savrulur ve yaptığınız düzeltme kalıcı olmaz. pH 7,2–7,6 aralığına geldikten sonra klor ölçümü anlamlı hale gelir, çünkü aynı klor miktarı yüksek pH'ta belirgin biçimde daha az iş görür. Sırayı atlamak çoğu dozaj hatasının kaynağıdır.",
          "en": "Alkalinity first, then pH, then chlorine. If alkalinity is outside the 80–120 ppm range, pH keeps drifting and your correction will not hold. Once pH is within 7.2–7.6, the chlorine reading becomes meaningful, because the same amount of chlorine does markedly less work at a high pH. Skipping that order is the source of most dosing mistakes."
        }
      },
      {
        "q": {
          "tr": "Klor değerim normal görünüyor ama havuz kokuyor ve gözüm yanıyor, neden?",
          "en": "My chlorine reading looks normal but the pool smells and my eyes sting. Why?"
        },
        "a": {
          "tr": "Bu tablo genellikle bağlı klor birikimini gösterir. Kirlilikle birleşmiş klor artık dezenfekte etmez ama keskin kokuyu ve göz yanmasını yaratır. Toplam klor ile serbest kloru ayrı ayrı ölçün; aradaki fark büyükse suyun toparlanması için şok uygulaması gerekir. Ayrıca yüksek pH da aynı şikâyetlere katkı verir, birlikte kontrol edin.",
          "en": "That picture usually points to a build-up of combined chlorine. Chlorine that has bonded with contaminants no longer disinfects, but it does produce the sharp smell and the stinging eyes. Measure total and free chlorine separately; if the gap is large, the water needs a shock treatment to recover. A high pH contributes to the same complaints, so check both together."
        }
      },
      {
        "q": {
          "tr": "Yaz aylarında havuz suyunu ne sıklıkla ölçmeliyim?",
          "en": "How often should I test pool water in summer?"
        },
        "a": {
          "tr": "Sıcak ve güneşli dönemde pH ve serbest kloru sık, alkalinite ve stabilizatörü daha seyrek kontrol etmek yeterlidir. Kesin bir takvimden çok kullanım belirleyicidir: kalabalık bir hafta sonu, sağanak yağmur, güçlü rüzgâr veya su sıcaklığının belirgin yükselmesi ölçümü öne çeken durumlardır. Yoğun sezonda ölçüm aralığını kısaltmak, sonradan müdahale etmekten daha ekonomiktir.",
          "en": "In hot, sunny periods it is enough to check pH and free chlorine frequently and alkalinity and stabiliser less often. Usage matters more than a fixed calendar: a crowded weekend, heavy rain, strong wind or a clear rise in water temperature are all reasons to test sooner. Shortening the interval during peak season costs less than correcting the water after the fact."
        }
      }
    ]
  },
  "havuz-bahar-acilisi": {
    "title": {
      "tr": "Havuzu Sezona Açma: Bahar Açılışı Adım Adım",
      "en": "Opening a Pool for the Season: A Step-by-Step Spring Guide"
    },
    "seoTitle": {
      "tr": "Havuzu Sezona Açma: Bahar Açılışı",
      "en": "Opening Your Pool for the Season"
    },
    "excerpt": {
      "tr": "Havuzu sezona açma rehberi: doğru zamanlama, örtünün sökülmesi, tesisatın kış konumundan çıkarılması, ekipmanın kontrollü devreye alınması ve su dengesi.",
      "en": "A guide to opening your pool for the season: right timing, removing the cover, reversing the winter setup, restarting equipment and rebalancing the water."
    },
    "intro": {
      "tr": "Havuzu sezona açma, kışlamanın tam tersi yönde ilerleyen tek seferlik bir iştir: kapatırken yaptığınız her şeyi sırayla geri alırsınız. Örtü kalkar, su seviyesi tamamlanır, vanalar çalışma konumuna döner, ekipman kontrollü biçimde devreye girer ve su dengesi neredeyse sıfırdan kurulur. Bu işin bir günde bitmesi beklenmez; havuzun kışı nasıl geçirdiğine göre birkaç güne yayılabilir. Çeşme yarımadasında sezon erken başladığı ve bahar rüzgârı bol toz taşıdığı için açılışın zamanlaması ayrıca önemlidir. Aşağıda açılışı doğru sırayla, her adımda nelere dikkat edileceğini ve kış hasarı gibi bir sürpriz çıktığında ne yapılacağını göstererek anlatıyoruz.",
      "en": "Opening a pool for the season is a one-off job that runs in exactly the opposite direction to winterising: you undo, in order, everything you did when you closed it. The cover comes off, the water level is topped up, the valves return to their running positions, the equipment is brought back on line under control, and the water balance is rebuilt almost from scratch. Do not expect it to be finished in a day; depending on how the pool came through the winter, it can spread over several. On the Çeşme peninsula the season starts early and the spring wind carries plenty of dust, so timing the opening matters all the more. Below we walk through the job in the right order, showing what to watch for at each step and what to do when a surprise such as frost damage turns up."
    },
    "sections": [
      {
        "heading": {
          "tr": "Havuzu sezona ne zaman açmak gerekir?",
          "en": "When should you open the pool for the season?"
        },
        "paragraphs": [
          {
            "tr": "Açılışın en yaygın hatası, havayı beklemektir. Çoğu villa sahibi ilk sıcak günleri görene kadar örtüyü yerinde bırakır; oysa örtünün altındaki su çoktan ısınmaya başlamıştır. Su sıcaklığı yaklaşık 15 °C'yi geçtiğinde algler hızla çoğalmaya başlar ve karanlık, durgun, klorsuz bir havuzda bu çoğalma engelsiz ilerler. Havuzu su henüz soğukken açmak, algi daha başlamadan durdurur; bu da ilk temizliği kısaltır, kimyasal tüketimini düşürür ve kaplamada kalıcı leke riskini azaltır. Pratik ölçüt basittir: gündüz sıcaklıkları istikrarlı biçimde 15-18 °C bandına yerleştiğinde açılışa başlayın.",
            "en": "The most common mistake at opening time is waiting for the weather. Most villa owners leave the cover in place until the first hot days arrive, by which point the water beneath it has already begun to warm. Once the water passes roughly 15 °C, algae start to multiply quickly, and in a dark, still, chlorine-free pool that growth meets no resistance. Opening the pool while the water is still cool stops algae before they start: it shortens the first clean, lowers chemical consumption and reduces the risk of permanent staining on the finish. The practical test is simple: begin the opening once daytime temperatures settle steadily into the 15-18 °C range."
          },
          {
            "tr": "Çeşme yarımadasında bu eşik iç bölgelere göre erken gelir. [Çeşme'de villa havuzu](area:cesme) kullanan bir ev sahibi mayıs başında havuzunu hazır görmek ister; nisan sonunda açılan bir havuz için hazırlık penceresi ise pratikte mart sonu ile nisan ortasıdır. Açılışı sezonun ilk misafirine bırakırsanız temizlik ve filtrasyon için zamanınız kalmaz. Erken açmanın maliyeti havuzun birkaç hafta daha uzun işletilmesidir; yeşermiş bir havuzu toparlamanın maliyeti ise neredeyse her zaman daha yüksektir.",
            "en": "On the Çeşme peninsula that threshold arrives earlier than inland. An owner with a [villa pool in Çeşme](area:cesme) wants the pool ready by early May, and for a pool that opens in late April the real preparation window runs from late March to mid-April. If you leave the opening until the first guests arrive, you will have no time left for cleaning and filtration. The cost of opening early is a few extra weeks of running the pool; the cost of recovering one that has already turned green is almost always higher."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuz örtüsü nasıl temiz sökülür ve saklanır?",
          "en": "How do you remove and store the pool cover cleanly?"
        },
        "paragraphs": [
          {
            "tr": "Örtünün üzerinde kış boyunca yağmur suyu, yaprak ve toz birikir. Acele edip örtüyü doğrudan çekerseniz bu kirli suyun tamamı havuza boşalır ve daha işe başlamadan suyu birkaç kat daha kötü hâle getirirsiniz. Doğru yöntem, önce örtü üzerindeki suyu dalgıç pompa ya da örtü pompasıyla bahçeye tahliye etmek, ardından yüzeydeki kuru yaprakları ve kaba kiri süpürerek almaktır. Örtü ancak bundan sonra, mümkünse iki kişiyle, kenarlardan ortaya doğru katlanarak çıkarılmalıdır; tek kişiyle çekilen büyük bir örtü hem yırtılır hem de kaplamanın kenarına iz bırakır.",
            "en": "Rainwater, leaves and dust collect on the cover all winter. If you rush and simply drag it off, all of that dirty water empties into the pool and you make the water several times worse before the job has even started. The right approach is to pump the standing water off the cover into the garden with a submersible or cover pump first, then sweep away the dry leaves and coarse debris. Only then should the cover be lifted, ideally by two people, folding it from the edges towards the middle. A large cover dragged off by one person tears easily and scuffs the edge of the finish on its way."
          }
        ],
        "bullets": [
          {
            "tr": "Örtüyü sökmeden önce üzerindeki suyu tamamen tahliye edin; kirli su havuza karışmasın.",
            "en": "Drain the standing water off the cover completely before removing it, so the dirty water never reaches the pool."
          },
          {
            "tr": "Örtüyü temiz bir zeminde serin, tatlı suyla durulayıp yumuşak fırçayla yıkayın; deterjan kullanmayın.",
            "en": "Spread the cover on clean ground, rinse it with fresh water and wash it with a soft brush; do not use detergent."
          },
          {
            "tr": "Tamamen kuruduktan sonra katlayın; nemli katlanan örtü küflenir ve ertesi kış kullanılamaz hâle gelir.",
            "en": "Fold it only once it is completely dry; a cover folded while damp goes mouldy and is unusable the following winter."
          },
          {
            "tr": "Serin, gölgeli ve kemirgen girmeyen bir yerde, doğrudan güneşten uzak saklayın.",
            "en": "Store it somewhere cool, shaded and rodent-proof, away from direct sunlight."
          },
          {
            "tr": "Sabitleme aparatlarını, kayış ve halatları ayrı bir kutuda toplayın.",
            "en": "Collect the fixings, straps and ropes in a separate box."
          }
        ]
      },
      {
        "heading": {
          "tr": "Su seviyesi ve tesisat kış konumundan nasıl çıkarılır?",
          "en": "How do you bring the water level and plumbing out of winter mode?"
        },
        "paragraphs": [
          {
            "tr": "Kışlamada su seviyesi skimmer ağzının altına indirilir, dönüş nozulları tıpalanır ve tesisatın bir bölümü boşaltılır. Açılışta bu adımların tamamı geri alınır. Önce tıpaları ve varsa kış şişelerini çıkarın, sonra suyu skimmer ağzının yaklaşık üçte iki yüksekliğine kadar tamamlayın. Seviye düşük kalırsa pompa hava çeker; fazla yükselirse skimmer yüzeydeki kiri toplayamaz. Vanaları kışın kapattığınız konumdan normal filtrasyon konumuna alın ve hangi vananın hangi hatta gittiğini bu aşamada bir kez daha doğrulayın. Kışlama adımlarının ayrıntısı ayrı bir konudur; havuzu kapatma tarafını [havuzu kışa hazırlama](post:havuzu-kisa-hazirlama) yazısında bulabilirsiniz.",
            "en": "When a pool is winterised the water level is dropped below the skimmer mouth, the return nozzles are plugged and part of the plumbing is drained. At opening, every one of those steps is reversed. Take out the plugs and any winter float bottles first, then top the water up to about two-thirds of the way up the skimmer mouth. If the level stays too low the pump draws air; if it rises too high the skimmer cannot collect surface debris. Move the valves from their winter positions back to normal filtration, and use this moment to confirm once more which valve feeds which line. The details of winterising are a topic of their own; you will find the closing side of the job in our guide to [preparing a pool for winter](post:havuzu-kisa-hazirlama)."
          },
          {
            "tr": "Su tamamlanırken havuzu gözle de okuyun. Seviyenin kış boyunca beklenenden çok düşmüş olması, çoğu zaman donmadan ya da kaplamadaki bir çatlaktan kaynaklanır. Suyu tamamladıktan sonra seviye bir iki gün içinde yeniden belirgin biçimde düşüyorsa bu bir açılış sorunu değil, yapısal bir sorundur ve teşhis gerektirir; [havuz su kaçağı tespiti](post:havuz-su-kacagi-tamiri) yazısındaki adımlarla ilerlemek en doğrusudur. Açılış sırasında fark edilen bir kaçak, sezon ortasında fark edilenden çok daha ucuza ve çok daha rahat onarılır, çünkü havuz zaten boş ve kullanımda değildir.",
            "en": "While you top up, read the pool with your eyes as well. A level that has fallen far more than expected over the winter usually points to frost damage or a crack in the finish. If the level drops noticeably again within a day or two after topping up, that is not an opening issue but a structural one and needs diagnosis; the steps in our article on [pool leak detection](post:havuz-su-kacagi-tamiri) are the right place to start. A leak caught during the opening is far cheaper and far easier to repair than one found mid-season, because the pool is already empty of guests and out of use."
          }
        ]
      },
      {
        "heading": {
          "tr": "Ekipman nasıl kontrollü devreye alınır?",
          "en": "How do you bring the equipment back on line safely?"
        },
        "paragraphs": [
          {
            "tr": "Teknik odayı çalıştırmadan önce gözle gezin: boru hatlarında çatlak, rakorlarda nem izi, contalarda sertleşme, pano içinde kemirgen ya da nem var mı? Kış boyunca hareketsiz kalan bir sistemde en sık görülen hasar donma çatlağıdır ve çoğu zaman pompa gövdesinde ya da filtre üzerindeki tahliye tapasında ince bir hat şeklinde görünür. Ardından pompa sepetini ve skimmer sepetlerini yerine takın, pompa gövdesini suyla doldurun ve kapağı contasını yağlayarak kapatın. Pompa kuru çalıştırılmaz; susuz dönen bir salmastra dakikalar içinde zarar görür.",
            "en": "Before you switch anything on, walk the plant room with your eyes: cracks in the pipework, damp traces at the unions, hardened seals, rodents or moisture inside the panel. In a system that has sat still all winter the most common damage is a frost crack, and it usually shows as a fine line on the pump body or on the drain plug of the filter. Then refit the pump basket and skimmer baskets, fill the pump housing with water and close the lid with its seal lightly greased. A pump must never run dry; a mechanical seal turning without water is damaged within minutes."
          },
          {
            "tr": "İlk çalıştırmada vanayı önce ters yıkama konumuna alıp filtre yatağını yıkayın, sonra durulama ve ardından filtrasyon konumuna geçin. Pompa çalışırken filtrenin üzerindeki hava tahliye vanasını açık tutarak hava tamamen çıkana ve düzgün bir su akışı gelene kadar bekleyin. Manometre tepkisiz kalıyor, pompa gürültülü çalışıyor veya emiş kurmuyorsa hemen kapatın ve sorunu arayın; bu belirtiler [havuz pompası arızaları](post:havuz-pompasi-arizalari) yazısında ayrıntılı ele alınıyor. Zorla çalıştırılan bir pompa, açılışın küçük bir ayrıntısını sezonun en pahalı kalemine dönüştürebilir.",
            "en": "On the first run, set the valve to backwash and clean the filter bed, then rinse, then move to filtration. With the pump running, keep the air bleed valve on top of the filter open until all the air has escaped and a steady flow of water appears. If the pressure gauge stays flat, the pump runs noisily or it fails to prime, shut it down straight away and find out why; those symptoms are covered in detail in our article on [pool pump faults](post:havuz-pompasi-arizalari). A pump forced to keep running can turn a small detail of the opening into the most expensive item of the season."
          }
        ]
      },
      {
        "heading": {
          "tr": "İlk temizlik ve uzun filtrasyon nasıl yapılır?",
          "en": "How should the first clean and long filtration run be done?"
        },
        "paragraphs": [
          {
            "tr": "Sistem döndükten sonra sıra kaba temizliktedir ve bu aşamada sıralama, kimyasal kadar belirleyicidir. Önce yüzey kepçesiyle yüzen yaprakları alın, sonra duvarları ve basamakları fırçalayarak kışın tutunmuş biyofilmi ve toz tabakasını askıya kaldırın; fırçalanmayan bir yüzeyde kimyasal etki etmez. Dipteki çökelti yoğun ve ince ise süpürgeyi filtreye değil atığa yönlendirmek filtrenin hemen tıkanmasını önler; bu sırada su seviyesi düşeceği için seviyeyi gözden kaçırmayın.",
            "en": "Once the system is circulating, the coarse clean comes next, and at this stage the order of the work matters as much as the chemicals. Skim the floating leaves off the surface first, then brush the walls and steps to lift the biofilm and dust layer that have taken hold over the winter; chemicals do nothing on a surface that has not been brushed. When vacuuming the sediment on the floor, sending the vacuum to waste rather than through the filter keeps a heavy, fine deposit from clogging the filter immediately. Because that lowers the water level, keep an eye on it while you vacuum."
          },
          {
            "tr": "Açılışta filtrasyon süresi sezon rutininden uzun tutulur. İlk günlerde sistemi kesintisiz ya da kesintisize yakın çalıştırmak, kışın biriken askıdaki maddenin toplanması için gerekir. Filtre basıncı normal değerinin belirgin üzerine çıktığında ters yıkama yapın; açılış haftasında bunu birkaç kez tekrarlamanız olağandır. Su berraklaştıkça filtrasyonu kademeli olarak normal sezon düzenine indirebilirsiniz. Sezon boyunca uygulanacak haftalık tempo ayrı bir konudur; [havuz bakımı nasıl yapılır](post:havuz-bakimi-nasil-yapilir) yazısı rutinin tamamını anlatıyor.",
            "en": "At opening, filtration runs longer than the in-season routine. Running the system continuously, or close to it, for the first few days is what collects the suspended matter built up over winter. Backwash whenever the filter pressure climbs clearly above its normal reading; doing this several times during opening week is entirely normal. As the water clears, you can step filtration back down to the usual seasonal schedule. The weekly rhythm you keep through the season is a separate subject; our guide to [how pool maintenance is done](post:havuz-bakimi-nasil-yapilir) covers the whole routine."
          }
        ]
      },
      {
        "heading": {
          "tr": "Su dengesi hangi sırayla kurulmalı?",
          "en": "In what order should the water balance be rebuilt?"
        },
        "paragraphs": [
          {
            "tr": "Açılışta su dengesi pratikte sıfırdan kurulur, çünkü kış boyunca eklenen yağmur suyu ve tamamlanan taze su değerleri seyreltmiştir. Sıra önemlidir: önce toplam alkaliniteyi 80-120 ppm aralığına getirin, çünkü alkalinite pH'ı sabit tutan tampondur ve düzeltilmeden yapılan pH ayarı kalıcı olmaz. Ardından pH'ı 7,2-7,6 bandına çekin. Sonra kalsiyum sertliğini 200-400 ppm aralığında doğrulayın; bu değer özellikle yeni doldurulan havuzlarda düşük kalır ve kaplamayı aşındırır. Stabilizatör (siyanürik asit) 30-50 ppm olmalıdır; Çeşme'nin uzun ve güneşli sezonunda klorun güneşe dayanması buna bağlıdır. Klor ayarı bu dört değer yerine oturduktan sonra yapılır.",
            "en": "At opening the water balance is effectively rebuilt from scratch, because winter rainfall and the fresh water used for topping up have diluted everything. The order matters: bring total alkalinity into the 80-120 ppm range first, since alkalinity is the buffer that holds pH steady and a pH adjustment made before it is corrected will not last. Next bring pH into the 7.2-7.6 band. Then confirm calcium hardness within 200-400 ppm; this reading tends to sit low in freshly filled pools and will etch the finish. Stabiliser (cyanuric acid) should be 30-50 ppm, which is what lets chlorine survive the sun through Çeşme's long, bright season. Chlorine is adjusted only once those four readings are settled."
          },
          {
            "tr": "Bu sıranın neden işe yaradığını ve ölçüm sonucunu doza çevirme mantığını ayrıntılı görmek isterseniz [pH ve klor dozajı](post:havuz-ph-klor-dozaj) yazısı konuyu hesabıyla birlikte ele alıyor. Açılışta iki noktaya dikkat edin: kışı geçirmiş test kitleri ve reaktifler yanlış okuma verebilir, bu yüzden sezona yeni reaktifle başlayın; kimyasalları hiçbir koşulda birbirine karıştırmayın ve her zaman kimyasalı suya ekleyin, suyu kimyasalın üzerine değil. Ürünleri serin, kuru, çocukların ulaşamayacağı bir yerde saklayın.",
            "en": "If you want to see why this order works, and how a test reading turns into a dose, our article on [pH and chlorine dosing](post:havuz-ph-klor-dozaj) sets out the reasoning with the arithmetic. Two points deserve care at opening: test kits and reagents that have sat through the winter can read incorrectly, so start the season with fresh reagent; and never mix chemicals with one another, always adding the chemical to the water rather than water to the chemical. Store products somewhere cool, dry and out of children's reach."
          }
        ]
      },
      {
        "heading": {
          "tr": "Şok klorlamadan sonra havuza ne zaman girilebilir?",
          "en": "When can you swim after the opening shock treatment?"
        },
        "paragraphs": [
          {
            "tr": "Denge kurulduktan sonra açılışın son adımı şok klorlamadır. Amaç, kış boyunca suda ve yüzeylerde tutunmuş organik yükü tek seferde oksitlemektir; bu iş normal sezon dozuyla değil, yüksek dozla yapılır. Şoku akşam saatlerinde, güneş çekildikten sonra uygulayın ve sistemi gece boyunca çalıştırın; gündüz uygulanan şokun önemli bir kısmı güneşte kaybolur. [Granül klorla şoklama](product:toz-klor-quardex) için doz her zaman ürün etiketinde belirtilen değere göre hesaplanmalıdır.",
            "en": "Once the balance is set, the final step of the opening is shock chlorination. The point is to oxidise, in one go, the organic load that has taken hold in the water and on the surfaces over winter, and that calls for a high dose rather than a normal seasonal one. Apply the shock in the evening, after the sun has gone off the water, and run the system overnight; a good part of a shock applied during the day is simply lost to sunlight. When [shocking with granular chlorine](product:toz-klor-quardex), the dose should always be calculated from the figure stated on the product label."
          },
          {
            "tr": "Havuza girme kararını takvimle değil ölçümle verin. Serbest klor 1-3 ppm bandına geri düşmüş, pH 7,2-7,6 aralığında ve su dibi görülecek kadar berraksa havuz kullanıma hazırdır. Bu noktaya ulaşmak çoğu havuzda bir ila iki gün sürer; örtüsüz kışlamış bir havuzda daha uzun sürer. Değerler oturmadan havuza girilmesi hem cilt ve göz tahrişine yol açar hem de ölçümü yanıltır. Şok sonrası ilk ölçümü, sistem bir gece çalıştıktan sonra sabah yapmak en doğru sonucu verir.",
            "en": "Decide when to swim by measurement, not by the calendar. When free chlorine has fallen back into the 1-3 ppm band, pH sits between 7.2 and 7.6 and the water is clear enough to see the floor, the pool is ready to use. Reaching that point takes one to two days in most pools, and longer in one that wintered without a cover. Swimming before the readings settle causes skin and eye irritation and makes the test results misleading. Taking the first post-shock reading in the morning, after the system has run overnight, gives the truest result."
          }
        ]
      },
      {
        "heading": {
          "tr": "Açılışta hangi sürprizlerle karşılaşılır?",
          "en": "What surprises come up during an opening?"
        },
        "paragraphs": [
          {
            "tr": "Açılış, havuzun kışı nasıl geçirdiğini gösteren ilk ve en dürüst rapordur; sürprizlerin çoğu bu aşamada ortaya çıkar ve neredeyse tamamı kışlamanın eksik yapılmasıyla ilişkilidir. İyi haber, hepsinin sezon başında havuz kullanım dışıyken çözülebilecek işler olmasıdır; aynı sorunlar temmuz ortasında hem daha pahalıya mal olur hem de havuzu günlerce kullanım dışı bırakır. Kaplamada leke, derzde açılma ya da tesisatta hasar gördüğünüzde ertelemek yerine sezon başlamadan [profesyonel havuz bakımı](page:maintenance) desteği almak en ekonomik yaklaşımdır.",
            "en": "The opening is the first and most honest report on how the pool came through the winter, which is why most surprises turn up at this stage, and why nearly all of them trace back to an incomplete winterisation. The good news is that every one of them can be dealt with at the start of the season while the pool is out of use; the same problems in mid-July cost more and put the pool out of action for days. When you find staining on the finish, open joints or damaged pipework, the cheapest approach is not to postpone but to bring in [professional pool maintenance](page:maintenance) before the season starts."
          }
        ],
        "bullets": [
          {
            "tr": "Donma hasarı: pompa gövdesinde, filtre tapasında veya yüzeye yakın borularda ince çatlaklar.",
            "en": "Frost damage: fine cracks in the pump body, the filter drain plug or pipework close to the surface."
          },
          {
            "tr": "Tıkalı ya da kırılmış tesisat: kış tıpasının içeride unutulması, sepetlerde kemirgen ve yaprak yuvası.",
            "en": "Blocked or broken plumbing: a winter plug left in place, rodent nests and leaves in the baskets."
          },
          {
            "tr": "Lekeli kaplama: örtü altında kalan yaprakların bıraktığı tanen izleri ya da metal kaynaklı kahverengi-yeşil lekeler.",
            "en": "Stained finish: tannin marks left by leaves under the cover, or brown-green metal staining."
          },
          {
            "tr": "Sertleşmiş contalar ve kuruyan salmastra: ilk çalıştırmada sızıntı olarak kendini gösterir.",
            "en": "Hardened seals and a dried-out mechanical seal: these show themselves as drips on the first run."
          },
          {
            "tr": "Beklenenden düşük su seviyesi: yalnızca buharlaşma değil, kış boyunca süren sessiz bir kaçağın işareti olabilir.",
            "en": "A lower water level than expected: not only evaporation, but possibly the sign of a quiet leak that ran all winter."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Havuzu sezona açmak ne kadar sürer?",
          "en": "How long does it take to open a pool for the season?"
        },
        "a": {
          "tr": "Fiziksel işler, yani örtünün sökülmesi, su tamamlama, tesisatın kış konumundan çıkarılması ve ekipmanın devreye alınması genellikle bir gün içinde biter. Ancak suyun berraklaşması ve dengeye oturması uzun filtrasyon gerektirdiği için havuzun girilebilir hâle gelmesi çoğu zaman iki ila dört gün alır. Kışı örtüsüz geçirmiş ya da yeşermiş havuzlarda bu süre bir haftaya kadar uzayabilir.",
          "en": "The physical work, namely removing the cover, topping up the water, reversing the winter plumbing setup and restarting the equipment, usually takes a single day. Because clearing the water and settling the balance need a long filtration run, however, getting the pool swimmable most often takes two to four days. In pools that spent the winter uncovered or turned green, that can stretch to a week."
        }
      },
      {
        "q": {
          "tr": "Havuz açılışında suyu tamamen değiştirmek gerekir mi?",
          "en": "Do you need to change all the water when opening a pool?"
        },
        "a": {
          "tr": "Çoğu durumda gerekmez. Yeşil ya da bulanık görünen su bile filtrasyon, fırçalama ve doğru sırayla kurulan kimyasal denge ile toparlanır; suyu boşaltmak hem masraflıdır hem de boş havuz kaplamada ve yapıda risk oluşturabilir. Su değişimi genellikle kimyasal denge kurulamayacak kadar bozulmuş, yüksek stabilizatör veya çok yüksek sertlik değerine sahip havuzlarda düşünülür.",
          "en": "In most cases, no. Even water that looks green or cloudy recovers with filtration, brushing and a chemical balance rebuilt in the right order; draining is expensive, and an empty pool can put the finish and the structure at risk. A water change is normally considered only where the balance cannot be restored, for example with very high stabiliser or very high hardness readings."
        }
      },
      {
        "q": {
          "tr": "Havuzu erken açmak kimyasal masrafını artırır mı?",
          "en": "Does opening the pool early increase chemical costs?"
        },
        "a": {
          "tr": "Sistem birkaç hafta daha uzun çalıştığı için elektrik ve kimyasal tüketimi bir miktar artar. Buna karşılık su soğukken açılan havuzda alg gelişmediği için şok, yosun giderici ve berraklaştırıcı ihtiyacı belirgin biçimde azalır. Pratikte erken açmanın toplam maliyeti, yeşermiş bir havuzu sezona yetiştirme maliyetinin altında kalır.",
          "en": "Running the system a few extra weeks does add somewhat to electricity and chemical use. On the other hand, a pool opened while the water is still cool has no algae growth, so the need for shock, algaecide and clarifier drops noticeably. In practice the total cost of opening early stays below the cost of rescuing a green pool in time for the season."
        }
      },
      {
        "q": {
          "tr": "Kışlaması yapılmamış bir havuz nasıl açılır?",
          "en": "How do you open a pool that was never winterised?"
        },
        "a": {
          "tr": "Sıra aynıdır, ancak her adım daha uzun sürer ve kontrol listesi genişler. Kışlama yapılmamış havuzlarda tesisat donma hasarı, filtre yatağında bozulma ve kaplamada kalıcı leke riski yüksektir; bu nedenle ekipman çalıştırılmadan önce mutlaka gözle detaylı kontrol yapılmalıdır. Su genellikle ağır organik yük taşıdığı için önce mekanik temizlik ve uzun filtrasyon, ardından denge ve şok adımları uygulanır.",
          "en": "The order is the same, but every step takes longer and the checklist grows. Pools that were not winterised carry a high risk of frost damage to the plumbing, a degraded filter bed and permanent staining, so a detailed visual inspection is essential before any equipment is started. As the water usually carries a heavy organic load, mechanical cleaning and a long filtration run come first, followed by balancing and the shock treatment."
        }
      }
    ]
  },
  "urla-seferihisar-havuz-yaptirma": {
    "title": {
      "tr": "Urla ve Seferihisar'da Havuz Yaptırmak: İki İlçenin Kendine Özgü Koşulları",
      "en": "Building a Pool in Urla and Seferihisar: What Makes These Two Districts Different"
    },
    "seoTitle": {
      "tr": "Urla ve Seferihisar'da Havuz Yaptırmak",
      "en": "Building a Pool in Urla and Seferihisar"
    },
    "excerpt": {
      "tr": "Urla'nın geniş bağ ve zeytinlik arazileri, Seferihisar'ın yıl boyu yaşanan evleri: iki ilçede havuz planlamasını değiştiren yerel koşullar.",
      "en": "Urla's wide vineyard and olive grove plots, Seferihisar's year-round homes: the local conditions that change how a pool is planned in each district."
    },
    "intro": {
      "tr": "Urla ve Seferihisar'da havuz yaptırmak, Çeşme kıyı hattındaki bir villa havuzuyla aynı soruları sordurmaz. Bu iki ilçede parseller genellikle daha geniş, yapı dokusu daha seyrek ve evle bahçe arasındaki ilişki daha farklıdır. Urla'da bağ ve zeytinlik arazilerinin ölçeği, Seferihisar'da ise yıl boyu yaşanan müstakil evlerin günlük düzeni, havuzun yerini, tesisatını ve işletme biçimini baştan belirler. İki ilçe birbirine komşu olsa da havuzun nasıl kurgulanacağı konusunda farklı öncelikler doğurur. Bu yazıda her birinin kendine özgü koşullarını; arazi seçimi, güneş ve rüzgâr aksı, yıl boyu kullanım isteği, lojistik ve süreç tarafıyla birlikte ele alıyoruz.",
      "en": "Building a pool in Urla and Seferihisar does not raise the same questions as a villa pool on the Çeşme coastline. In these two districts the plots are usually wider, the building fabric is sparser and the relationship between house and garden is different. In Urla the scale of vineyard and olive grove land, and in Seferihisar the daily rhythm of houses lived in year-round, determine the pool's position, its plumbing and the way it is run from the very beginning. Although the two districts are neighbours, they lead to different priorities in how a pool is laid out. In this article we look at the conditions particular to each, together with site selection, the sun and wind axis, the wish for year-round use, logistics and the process side."
    },
    "sections": [
      {
        "heading": {
          "tr": "Urla'da havuz planlaması neden farklı ilerler?",
          "en": "Why does pool planning work differently in Urla?"
        },
        "paragraphs": [
          {
            "tr": "Urla'da havuz projelerinin çoğu, bağ ve zeytinlik dokusu içinde yer alan geniş parsellerde kurgulanır. Bu ölçek bir özgürlük getirir: havuzu evin hemen yanına sıkıştırmak zorunda değilsinizdir, araziyi okuyup en iyi manzara aksının açıldığı noktayı seçebilirsiniz. Teraslanmış bir bağ yamacında suyun bittiği yerde bağların veya körfezin görünmesi, [sonsuzluk havuzu kurgusunun](post:sonsuzluk-havuzu-nedir) en güçlü olduğu durumlardan biridir. Ancak bu özgürlüğün bedeli, havuzun evden uzaklaşmasıdır ve bu mesafe teknik bir mesele hâline gelir. Karar verirken manzara kadar, o noktaya su, elektrik ve tesisatın nasıl ulaşacağını da birlikte düşünmek gerekir.",
            "en": "Most pool projects in Urla are set out on wide plots within a fabric of vineyards and olive groves. That scale brings freedom: you are not forced to squeeze the pool up against the house, you can read the land and choose the point where the best view axis opens up. On a terraced vineyard slope, having the vines or the gulf appear where the water ends is one of the situations in which [an infinity pool layout](post:sonsuzluk-havuzu-nedir) is at its strongest. The price of that freedom, however, is distance from the house, and that distance becomes a technical matter. When deciding, the view has to be weighed together with how water, electricity and plumbing will reach that point."
          },
          {
            "tr": "Havuzla makine dairesi arasındaki mesafe uzadıkça emiş ve basma hatlarındaki sürtünme kaybı artar; bu da boru çapının, pompa seçiminin ve hat güzergâhının projede baştan hesaplanmasını gerektirir. Makine dairesini havuza yakın, ancak yaşam alanından ses ve görüntü olarak ayrılmış bir noktaya yerleştirmek çoğu zaman en dengeli çözümdür; gömülü bir teknik hacim, zeytinliğin ortasına bırakılmış bir kulübeye göre hem sessiz hem de göze çarpmayan bir sonuç verir. Elektrik hattının çekilmesi, aydınlatma ve otomasyon kablolaması da aynı güzergâh planına dâhil edilmelidir. [Urla'daki havuz çalışmalarımızda](area:urla) bu altyapı kararlarının, havuzun görünen tarafı kadar belirleyici olduğunu görüyoruz.",
            "en": "As the distance between the pool and the plant room grows, friction loss in the suction and return lines increases, which means pipe diameter, pump selection and the route of the lines must be calculated in the project from the outset. Placing the plant room close to the pool but separated from the living area in terms of noise and sightlines is usually the most balanced solution; a sunken technical space gives a quieter and less conspicuous result than a shed left in the middle of an olive grove. Running the electrical supply and the lighting and automation cabling belongs to the same route plan. In [our pool work in Urla](area:urla) we see that these infrastructure decisions are every bit as decisive as the visible side of the pool."
          },
          {
            "tr": "Malzeme seçimi de bu kırsal dokuya uyum sağlamalıdır. Bağ ve zeytinlik manzarasının ortasında parlak ve keskin renkli bir kaplama yabancı durur; doğal taş çevre kaplamaları, toprak tonlarında veya gri-yeşil aralıktaki iç kaplamalar ve mat yüzeyler araziyle daha kolay bütünleşir. Havuz kenarındaki sert zeminin genişliği, gölgelik ve oturma alanı kurgusu da evle havuz arasındaki mesafeyi yaşanabilir kılan unsurlardır: havuz başında bir duş, gölgelikli bir alan ve küçük bir depolama, her seferinde eve dönme ihtiyacını ortadan kaldırır.",
            "en": "Material choices should also suit this rural fabric. In the middle of a vineyard and olive grove landscape, a glossy, sharply coloured finish looks foreign; natural stone coping, interior finishes in earth tones or the grey-green range and matt surfaces integrate more easily with the land. The width of the hard surface around the pool and the arrangement of shade and seating are what make the distance between house and pool liveable: a shower at the poolside, a shaded area and a small store remove the need to walk back to the house each time."
          }
        ]
      },
      {
        "heading": {
          "tr": "Seferihisar'da havuz kurgusunda neye dikkat edilmeli?",
          "en": "What should you watch for when planning a pool in Seferihisar?"
        },
        "paragraphs": [
          {
            "tr": "Seferihisar'ın sakin şehir kimliği, buradaki evlerin çoğunun yazlık değil, yıl boyu yaşanan konutlar olmasıyla doğrudan ilişkilidir. Bu da havuzu sezonluk bir süs olmaktan çıkarıp günlük yaşamın parçası hâline getirir. Yıl boyu yaşanan bir evde havuzun iki özelliği öne çıkar: güvenlik ve kolay yönetim. Çocuklu ailelerde sığ bölümün doğru konumlandırılması, kaymaz yüzeyli çevre kaplaması, basamakların net görünür olması ve havuz kullanılmadığı dönemler için güvenlik örtüsü ya da bahçe tarafında kontrollü geçiş, tasarımın sonradan eklenen değil baştan kurulan parçalarıdır.",
            "en": "Seferihisar's Cittaslow identity is directly connected to the fact that most houses here are not summer homes but residences lived in all year. That turns the pool from a seasonal ornament into part of daily life. In a house occupied year-round, two qualities come to the fore: safety and easy management. For families with children, correctly positioning the shallow section, non-slip surround, clearly visible steps, and a safety cover or a controlled garden-side access for periods when the pool is not in use are parts of the design set up at the start, not added later."
          },
          {
            "tr": "Kolay yönetim tarafında ise otomasyon ve donanım seçimi belirleyicidir. Filtrasyonun zaman ayarlı çalışması, dozaj sisteminin düzenli tutulması ve tabanın [havuz robotu](product:havuz-robotu) gibi bir ekipmanla temizlenmesi, evde yaşayan bir ailenin havuza ayırdığı süreyi belirgin biçimde kısaltır. Bu düzen kurulduğunda haftalık iş yükü öngörülebilir hâle gelir; günlük rutinin nasıl işlediğini [havuz bakımı hizmetimiz](page:maintenance) kapsamında ayrıntılı olarak ele alıyoruz. [Seferihisar'daki projelerde](area:seferihisar) en çok sorulan konu, havuzun yıl boyu ne kadar ilgi isteyeceğidir; doğru donanımla bu yük çoğu ailenin beklediğinden düşüktür.",
            "en": "On the management side, automation and equipment selection are decisive. Time-controlled filtration, keeping the dosing system in order and cleaning the floor with a piece of equipment such as [a pool robot](product:havuz-robotu) markedly shorten the time a resident family spends on the pool. Once that routine is established, the weekly workload becomes predictable; we cover how the daily routine works in detail under [our pool maintenance service](page:maintenance). In [projects in Seferihisar](area:seferihisar) the most frequent question is how much attention the pool will need across the year; with the right equipment that load is lower than most families expect."
          },
          {
            "tr": "İkinci belirleyici koşul bahçedeki ağaçlardır. Seferihisar bahçelerinde mandalina başta olmak üzere meyve ağaçları yaygındır ve bunlar havuza iki ayrı yük bindirir. Birincisi yüzeysel yüktür: çiçeklenme döneminde taç yaprakları, sonbaharda yaprak ve zaman zaman dökülen meyve, skimmer sepetlerini ve ön filtreyi hızla doldurur. İkincisi yeraltındadır: kökler yıllar içinde havuz kabuğuna, çevre kaplamasına ve tesisat hattına doğru ilerleyebilir. Bu yüzden ağaç dikimiyle havuz arasında yeterli mesafe bırakmak, gerekiyorsa kök bariyeri kullanmak ve hâkim rüzgârın taşıdığı yöne göre skimmer sayısını artırmak, sonradan çözülmesi zor sorunları baştan engeller.",
            "en": "The second decisive condition is the trees in the garden. Fruit trees, mandarins above all, are common in Seferihisar gardens, and they place two separate loads on the pool. The first is on the surface: petals during flowering, leaves in autumn and occasionally fallen fruit fill skimmer baskets and the pump strainer quickly. The second is underground: over the years roots can advance towards the pool shell, the surround and the pipe runs. Leaving enough distance between tree planting and the pool, using a root barrier where needed and increasing the number of skimmers according to the direction the prevailing wind carries debris prevent problems that are hard to solve later."
          }
        ],
        "bullets": [
          {
            "tr": "Sığ bölüm ve basamakların evden görünen tarafta konumlandırılması, çocuklu kullanımda gözetimi kolaylaştırır.",
            "en": "Positioning the shallow section and steps on the side visible from the house makes supervision easier when children use the pool."
          },
          {
            "tr": "Kaymaz yüzeyli çevre kaplaması ve düzgün bir su tahliye eğimi, ıslak zeminde kayma riskini azaltır.",
            "en": "A non-slip surround and a correct drainage fall reduce the risk of slipping on wet ground."
          },
          {
            "tr": "Olgun ağaçların taç genişliği dikkate alınarak havuza mesafe bırakılması, hem yaprak yükünü hem kök riskini düşürür.",
            "en": "Leaving distance from mature trees, accounting for their canopy spread, lowers both the leaf load and the root risk."
          },
          {
            "tr": "Skimmer sayısının ve filtre kapasitesinin bahçedeki yaprak yüküne göre seçilmesi, yaz boyunca temizlik süresini kısaltır.",
            "en": "Sizing the number of skimmers and the filter capacity to the garden's leaf load shortens cleaning time through the summer."
          },
          {
            "tr": "Dozaj ve filtrasyon otomasyonu, yıl boyu yaşanan evlerde haftalık iş yükünü öngörülebilir kılar.",
            "en": "Dosing and filtration automation makes the weekly workload predictable in homes lived in year-round."
          }
        ]
      },
      {
        "heading": {
          "tr": "Arazide havuzun yeri güneş ve rüzgâr aksına göre nasıl seçilir?",
          "en": "How is the pool's position chosen according to the sun and wind axis?"
        },
        "paragraphs": [
          {
            "tr": "Geniş bir arazide havuzun yeri, çoğu zaman manzaraya bakılarak seçilir; oysa güneş ve rüzgâr aksı, havuzun günün hangi saatlerinde kullanılabilir olacağını doğrudan belirler. Gün boyu güneş alan, öğleden sonra ev veya ağaç gölgesinde kalmayan bir konum, suyun doğal yoldan ısınmasına yardımcı olur ve kullanım süresini uzatır. Buna karşılık çevresinde hiç gölge bulunmayan bir havuz, yaz ortasında öğle saatlerinde kullanılmaz hâle gelir. Doğru kurgu, su yüzeyinin açık, oturma alanının ise gölgelenebilir olmasıdır; pergole, ağaç veya yapı gölgesi bu ikisini ayırarak çözülür.",
            "en": "On a wide plot the pool's position is usually chosen by looking at the view, yet the sun and wind axis directly determines the hours of the day at which the pool is usable. A position that receives sun through the day and is not left in the shade of the house or trees in the afternoon helps the water warm naturally and extends the usable season. A pool with no shade around it, on the other hand, becomes unusable at midday in high summer. The right arrangement leaves the water surface open while allowing the seating area to be shaded; a pergola, a tree or building shade resolves the two separately."
          },
          {
            "tr": "Rüzgâr tarafında ise yarımadanın yaz boyunca hissedilen imbatı belirleyicidir. Sürekli rüzgâr, yüzeyden buharlaşmayı ve dolayısıyla ısı kaybını artırır, su yüzeyindeki yaprak ve tozu tek bir kenara toplar. Havuzun uzun ekseninin ve skimmer konumlarının hâkim rüzgâr yönüne göre kurgulanması, yüzey temizliğinin kendiliğinden işlemesini sağlar. Urla ve Seferihisar'ın iç kesimlerinde rüzgâr, kıyı hattına göre daha kesiklidir; yine de bahçe duvarı, çit bitkisi ya da alçak bir sedde ile oluşturulan rüzgâr kırıcı, havuz çevresindeki oturma alanını belirgin biçimde konforlu hâle getirir.",
            "en": "On the wind side, the imbat that is felt across the peninsula through the summer is decisive. Constant wind increases evaporation from the surface and therefore heat loss, and gathers leaves and dust on the water at a single edge. Setting the pool's long axis and the skimmer positions according to the prevailing wind direction lets surface cleaning happen on its own. Inland in Urla and Seferihisar the wind is more broken than on the coastline; even so, a windbreak formed by a garden wall, hedge planting or a low bank makes the seating area around the pool noticeably more comfortable."
          }
        ]
      },
      {
        "heading": {
          "tr": "Havuzu yıl boyu kullanmak için ısıtma ve örtü gerekir mi?",
          "en": "Do you need heating and a cover to use the pool year-round?"
        },
        "paragraphs": [
          {
            "tr": "Isıtmasız bir havuz, bu bölgede tipik olarak geç ilkbahardan sonbahar başına kadar rahat kullanılır; bu sürenin dışına çıkmak istiyorsanız ısıtma ve örtü birlikte düşünülmelidir. Isıtmayı tek başına eklemek çoğu zaman yeterli olmaz, çünkü ısının büyük bölümü açık su yüzeyinden kaybolur. Yalıtımlı bir havuz örtüsü bu kaybı azaltarak ısıtmanın işletme yükünü düşürür; aynı zamanda kullanılmadığı saatlerde yüzeyi kapatarak yaprak yükünü ve buharlaşmayı da sınırlar. Seferihisar gibi evin yıl boyu kullanıldığı yerlerde bu ikili, havuzun sezon dışında da devrede kalmasını mümkün kılar.",
            "en": "Without heating, a pool in this region is typically comfortable to use from late spring to early autumn; to go beyond that window, heating and a cover should be considered together. Adding heating on its own is often not enough, because most of the heat is lost from the open water surface. An insulated pool cover reduces that loss and lowers the running load of the heating; it also limits leaf load and evaporation by closing the surface during unused hours. In places like Seferihisar, where the house is occupied year-round, this pairing makes it possible to keep the pool in service outside the season too."
          },
          {
            "tr": "Isıtma kararının projeye erken dâhil edilmesi önemlidir, çünkü ısı pompası ya da eşdeğeri bir sistem makine dairesinde yer, elektrik kapasitesi ve tesisat bağlantısı ister. Aynı şekilde otomatik bir örtü seçilecekse, örtü haznesi havuz kabuğuyla birlikte kurgulanmak zorundadır; bitmiş bir havuza sonradan eklemek hem daha zor hem daha maliyetlidir. Isıtma ve örtünün bütçeye etkisi, diğer yapım kalemleriyle birlikte [havuz yapım maliyetini belirleyen kalemler](post:havuz-yapim-maliyeti-izmir) yazımızda ayrıntılı olarak ele alınıyor.",
            "en": "Bringing the heating decision into the project early matters, because a heat pump or an equivalent system needs space in the plant room, electrical capacity and a plumbing connection. Likewise, if an automatic cover is to be chosen, the cover housing has to be planned together with the pool shell; adding it to a finished pool is both harder and more expensive. The budget effect of heating and covers, alongside the other construction items, is covered in detail in our article on [the items that set pool construction cost](post:havuz-yapim-maliyeti-izmir)."
          }
        ]
      },
      {
        "heading": {
          "tr": "Yarımada merkezine mesafe süreci nasıl etkiler?",
          "en": "How does distance from the centre of the peninsula affect the process?"
        },
        "paragraphs": [
          {
            "tr": "Urla ve Seferihisar, yarımadanın giriş tarafında yer aldığı için şehirle bağlantısı kolaydır; asıl mesafe sorusu parselin kendisinde başlar. Bağ yolundan, dar bir köy yolundan veya eğimli bir toprak yoldan erişilen arazilerde beton mikserinin, kazı makinesinin ve hafriyat kamyonunun manevra alanı bulup bulamayacağı, keşif sırasında net olarak görülmesi gereken bir konudur. Erişimin sınırlı olduğu yerlerde pompalı beton dökümü, daha küçük iş makineleri veya kademeli bir hafriyat planı devreye girer. Bu, çözülemez bir sorun değildir; ancak programın ve yöntemin baştan buna göre kurulmasını gerektirir.",
            "en": "Because Urla and Seferihisar sit at the entrance side of the peninsula, their connection to the city is easy; the real question of distance begins at the plot itself. On land reached by a vineyard track, a narrow village road or a sloping dirt road, whether a concrete mixer, excavator and spoil truck can find room to manoeuvre is something that must be seen clearly during the site survey. Where access is limited, pumped concrete placement, smaller machinery or a staged excavation plan come into play. This is not an unsolvable problem, but it does require the programme and method to be set up accordingly from the start."
          },
          {
            "tr": "Mesafe, inşaat bittikten sonra da devam eden bir konudur: düzenli bakım ziyaretlerinin sıklığı ve zamanlaması, arazinin erişilebilirliğine göre planlanır. Sürecin adım adım nasıl işlediğini ve kayalık kıyı parsellerindeki farkları [Çeşme ve Alaçatı'da havuz yapımı](post:cesme-alacati-havuz-yapimi) yazımızda ayrıca anlatıyoruz. Ruhsat tarafında ise kesin bir genelleme yapmak doğru olmaz: havuz için gereken izin, parselin imar durumuna, yapı ruhsatına ve arazinin tarımsal vasfına göre değişebilir. Zeytinlik ya da tarım arazisi statüsündeki parsellerde ek izinler gündeme gelebileceği için, projeye başlamadan önce ilgili belediyeden ve yetkili kurumlardan resmi teyit almak gerekir. [Havuz inşaatı sürecimizde](page:construction) bu adımı her zaman tasarımdan önce netleştiriyoruz.",
            "en": "Distance remains relevant after construction ends as well: the frequency and timing of regular maintenance visits are planned according to how accessible the site is. We describe how the process runs step by step, and the differences on rocky coastal plots, separately in our article on [pool construction in Çeşme and Alaçatı](post:cesme-alacati-havuz-yapimi). On the permit side, a firm generalisation would be wrong: the approval required for a pool can vary with the plot's zoning status, the building permit and the agricultural designation of the land. Since additional permissions may come into play on plots classed as olive grove or agricultural land, official confirmation should be obtained from the relevant municipality and competent authorities before the project begins. In [our pool construction process](page:construction) we always settle this step before design."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Urla'da havuz yaptırmak için ruhsat gerekir mi?",
          "en": "Is a permit required to build a pool in Urla?"
        },
        "a": {
          "tr": "Gereken izin, parselin imar durumuna, mevcut yapı ruhsatına ve arazinin tarımsal vasfına göre değişir. Urla'da bağ ve zeytinlik statüsündeki parsellerde ek izinler gündeme gelebilir. Bu nedenle tek bir genel cevap vermek doğru olmaz; projeye başlamadan önce ilgili belediyeden ve yetkili kurumlardan parselinize özel resmi teyit almanızı öneriyoruz. Bu adımın tasarımdan önce netleşmesi, sonradan doğabilecek zaman ve maliyet kaybını önler.",
          "en": "The approval required varies with the plot's zoning status, the existing building permit and the agricultural designation of the land. In Urla, additional permissions may come into play on plots classed as vineyard or olive grove. A single general answer would therefore be wrong; before starting the project, we recommend obtaining official confirmation specific to your plot from the relevant municipality and competent authorities. Settling this step before design prevents later losses of time and cost."
        }
      },
      {
        "q": {
          "tr": "Seferihisar'da havuz yıl boyu kullanılabilir mi?",
          "en": "Can a pool be used year-round in Seferihisar?"
        },
        "a": {
          "tr": "Isıtmasız bir havuz bu bölgede tipik olarak geç ilkbahardan sonbahar başına kadar rahat kullanılır. Sezonu uzatmak istiyorsanız ısıtma ve yalıtımlı örtüyü birlikte planlamak gerekir; ısı kaybının büyük bölümü açık su yüzeyinden olduğu için tek başına ısıtma çoğu zaman verimli olmaz. Yıl boyu yaşanan evlerde bu ikili, havuzun sezon dışında da kullanılabilir kalmasını sağlar. Kararı proje aşamasında vermek, sonradan eklemeye göre çok daha kolaydır.",
          "en": "Without heating, a pool in this region is typically comfortable to use from late spring to early autumn. To extend the season, heating and an insulated cover should be planned together; since most heat loss comes from the open water surface, heating alone is often inefficient. In homes lived in year-round, this pairing keeps the pool usable outside the season as well. Making the decision at the project stage is far easier than adding it later."
        }
      },
      {
        "q": {
          "tr": "Havuzu evden uzağa, manzaralı bir noktaya yapmak sorun olur mu?",
          "en": "Is it a problem to build the pool away from the house, at a point with a view?"
        },
        "a": {
          "tr": "Hayır, ancak mesafenin tesisat tarafı baştan hesaplanmalıdır. Havuzla makine dairesi arası uzadıkça boru hattındaki sürtünme kaybı artar; boru çapı, pompa seçimi ve hat güzergâhı buna göre belirlenir. Makine dairesini havuza yakın ama yaşam alanından sesçe ayrılmış bir noktaya yerleştirmek genellikle en dengeli çözümdür. Elektrik ve otomasyon kablolamasının da aynı güzergâh planına dâhil edilmesi, sonradan kazı yapma ihtiyacını ortadan kaldırır.",
          "en": "No, but the plumbing side of that distance must be calculated from the start. As the run between pool and plant room lengthens, friction loss in the pipework increases; pipe diameter, pump selection and the route of the lines are set accordingly. Placing the plant room near the pool but acoustically separated from the living area is usually the most balanced solution. Including the electrical and automation cabling in the same route plan removes the need to excavate again later."
        }
      },
      {
        "q": {
          "tr": "Meyve ağaçlarının yakınına havuz yapılabilir mi?",
          "en": "Can a pool be built near fruit trees?"
        },
        "a": {
          "tr": "Yapılabilir, ama iki şeye dikkat etmek gerekir. Birincisi yüzey yükü: çiçek, yaprak ve dökülen meyve skimmer sepetlerini hızla doldurur, bu yüzden skimmer sayısı ve filtre kapasitesi bahçedeki yük düşünülerek seçilmelidir. İkincisi kök mesafesi: kökler yıllar içinde kabuğa, çevre kaplamasına ve tesisata doğru ilerleyebilir. Olgun ağacın taç genişliğini dikkate alarak mesafe bırakmak, gerekiyorsa kök bariyeri kullanmak bu riski büyük ölçüde azaltır.",
          "en": "It can, but two things need attention. First, the surface load: blossom, leaves and fallen fruit fill skimmer baskets quickly, so the number of skimmers and the filter capacity should be chosen with the garden's load in mind. Second, root distance: over the years roots can advance towards the shell, the surround and the pipework. Leaving distance based on the mature tree's canopy spread, and using a root barrier where needed, greatly reduces that risk."
        }
      }
    ]
  },
  "havuz-derz-fayans-yenileme": {
    "title": {
      "tr": "Havuz Derz ve Fayans Yenileme: Teknik Uygulama Rehberi",
      "en": "Pool Grout and Tile Renewal: A Technical Application Guide"
    },
    "seoTitle": {
      "tr": "Havuz Derz ve Fayans Yenileme",
      "en": "Pool Grout and Tile Renewal"
    },
    "excerpt": {
      "tr": "Havuz derzi neden bozulur, ne zaman yenilenir? Raspa, yüzey hazırlığı, ürün seçimi ve kür dahil derz ve kaplama yenilemenin teknik uygulaması.",
      "en": "Why pool grout fails and when to renew it. The technical side of grout and tile renewal: removal, surface prep, product choice and curing."
    },
    "intro": {
      "tr": "Havuz derz ve fayans yenileme, çoğu villa havuzunun ömründe en az bir kez sırası gelen, görünürde küçük ama tekniği yüksek bir iştir. Derz aralarının boşalması ya da tek tük karonun kalkması ilk bakışta kozmetik bir kusur gibi görünür; oysa bu katman havuzun su ile beton kabuğu arasındaki sınırda çalışır ve bozulduğunda sorun yüzeyde kalmaz. Bu yazıda derzin gerçekte ne iş yaptığını, hangi nedenlerle yıprandığını, hangi belirtilerin yenileme zamanının geldiğini gösterdiğini ve yenilemenin hangi sırayla, hangi malzemelerle uygulandığını anlatıyoruz. Amaç, işin doğru yapıldığını yerinde ayırt edebilmenizi sağlamak.",
      "en": "Renewing pool grout and tiles is a job that comes up at least once in the life of most villa pools: small in appearance, demanding in technique. Empty joints or a single lifted tile look at first like a cosmetic flaw, yet this layer works at the boundary between the water and the concrete shell, and when it fails the problem does not stay on the surface. In this article we explain what grout actually does, what wears it down, which signs mean the time for renewal has come, and in what order and with which materials the work is carried out. The aim is to help you tell, on site, whether the job is being done properly."
    },
    "sections": [
      {
        "heading": {
          "tr": "Havuz derzi sadece bir dolgu mudur?",
          "en": "Is pool grout just a filler?"
        },
        "paragraphs": [
          {
            "tr": "Derz, karoların arasını kapatan dekoratif bir macun değildir. Havuzda üç iş birden yapar: su geçişini yavaşlatarak yapıştırıcı katmanını ve altındaki su yalıtımını korur, karolar arasındaki küçük hareketleri karşılayarak gerilmenin tek bir noktada toplanmasını engeller ve kaplamanın kenarlarını mekanik olarak destekler. Bu yüzden derz aralıkları rastgele bırakılmaz; kaplamanın cinsine ve karo ölçüsüne göre belirlenir. Derz boşaldığı anda su, tasarlanmamış bir yoldan yapıştırıcıya ve şaplara ulaşmaya başlar.",
            "en": "Grout is not a decorative paste that simply closes the gap between tiles. In a pool it does three jobs at once: it slows the passage of water and so protects the adhesive bed and the waterproofing beneath it, it absorbs the small movements between tiles so that stress does not gather at a single point, and it mechanically supports the edges of the finish. That is why joint widths are not left to chance; they follow the type of finish and the size of the tile. The moment a joint empties, water starts reaching the adhesive and the screed by a route no one designed for it."
          },
          {
            "tr": "Havuzun yükü süreklidir. Su kaplamaya gece gündüz basınç uygular, sıcaklık farkı beton kabuk ile seramiği farklı oranlarda genleştirir, suyun kimyası ise derzin bağlayıcısını sürekli sınar. Bir banyo derziyle havuz derzinin aynı ürün olmaması bundandır: havuzda su altında kalıcı, yüksek dayanımlı çimento esaslı ya da epoksi esaslı derzler kullanılır ve bu seçim yenilemenin en belirleyici kararlarından biridir.",
            "en": "The load on a pool is constant. Water presses on the finish day and night, temperature swings expand the concrete shell and the ceramic at different rates, and the chemistry of the water continuously tests the binder in the grout. This is why a bathroom grout and a pool grout are not the same product: pools call for high-performance cement-based or epoxy-based grouts that stay stable under permanent immersion, and that choice is one of the decisive calls in any renewal."
          }
        ]
      },
      {
        "heading": {
          "tr": "Derz ve kaplama neden zamanla bozulur?",
          "en": "Why do grout and tiles deteriorate over time?"
        },
        "paragraphs": [
          {
            "tr": "Bozulmanın tek bir sebebi yoktur; çoğu havuzda birkaç etken aynı anda çalışır. En yaygını su kimyasındaki dengesizliktir. Uzun süre düşük pH'ta tutulan su agresif hale gelir ve çimento esaslı derzin bağlayıcısını yavaş yavaş çözer; yüksek pH ve yüksek kalsiyum sertliği ise ters yönde, su hattında kireç birikmesine yol açar. Bu dengenin nasıl kurulduğunu ayrıntısıyla [pH ve klor dozajı yazısında](post:havuz-ph-klor-dozaj) anlattık; burada bilinmesi gereken şey, suyun sadece görünümü değil kaplamanın ömrünü de belirlediğidir.",
            "en": "There is rarely a single cause; in most pools several act at once. The most common is imbalanced water chemistry. Water held at a low pH for long periods turns aggressive and slowly dissolves the binder in cement-based grout, while high pH combined with high calcium hardness pushes the other way and builds scale along the waterline. We cover how that balance is set in detail in our [pH and chlorine dosing article](post:havuz-ph-klor-dozaj); what matters here is that the water governs not only how the pool looks but how long the finish lasts."
          }
        ],
        "bullets": [
          {
            "tr": "Kimyasal dengesizlik: uzun süre düşük pH'ta kalan agresif su derzi aşındırır, yüzeyi pürüzlendirir",
            "en": "Chemical imbalance: aggressive water left at a low pH erodes grout and roughens the surface"
          },
          {
            "tr": "Kireçlenme: yüksek pH ve sert suda su hattında biriken kalsiyum, derz kenarlarını kabuklandırır ve temizlik sırasında zorlar",
            "en": "Scaling: calcium building up at the waterline in hard, high-pH water crusts the joint edges and makes cleaning harsh"
          },
          {
            "tr": "Donma-çözülme: kışın derz gözeneklerine giren suyun donması, karo kenarlarını içeriden çatlatır",
            "en": "Freeze-thaw: water that has soaked into the joints freezing in winter cracks the tile edges from within"
          },
          {
            "tr": "Zemin hareketi: kayalık ve eğimli arazilerde oturma, kabukta kılcal çatlak ve kaplamada kabarma üretir",
            "en": "Ground movement: settlement on rocky, sloping plots produces hairline cracks in the shell and lifting in the finish"
          },
          {
            "tr": "Yaşlanma ve mekanik yük: yıllar içinde fırçalama, robot geçişi, merdiven ve oturma bölgesindeki yoğun kullanım derzi tüketir",
            "en": "Ageing and mechanical load: years of brushing, robot passes and heavy use around steps and benches wear the grout away"
          },
          {
            "tr": "Deniz havası: [Çeşme](area:cesme) ve Karaburun kıyılarında tuzlu rüzgâr, su hattı üstündeki derz ve metal aksamı hızlandırılmış biçimde yıpratır",
            "en": "Sea air: on the [Çeşme](area:cesme) and Karaburun coast, salt-laden wind accelerates wear on grout above the waterline and on metal fittings"
          }
        ]
      },
      {
        "heading": {
          "tr": "Hangi belirtiler yenileme zamanının geldiğini gösterir?",
          "en": "Which signs show that renewal is due?"
        },
        "paragraphs": [
          {
            "tr": "Kaplamadaki yaşlanma sessiz ilerler; sorun çoğu zaman gözle değil elle fark edilir. Boş havuzda yüzeyde gezdirilen bir el, derzin karo yüzeyinden ne kadar geride kaldığını ve kenarların keskinleşip keskinleşmediğini söyler. Aşağıdaki belirtilerden birkaçı bir arada görülüyorsa yenileme ertelenecek bir iş değildir. Su seviyesinde de düşüş varsa önce kaynağın teşhisi gerekir; yöntemlerini [su kaçağı tamiri yazısında](post:havuz-su-kacagi-tamiri) ele alıyoruz.",
            "en": "Ageing in a pool finish is quiet; the problem is usually felt rather than seen. A hand run over the surface of an empty pool tells you how far the joint has receded below the tile face and whether the edges have turned sharp. If several of the signs below appear together, renewal is not a job to postpone. If the water level is dropping too, the source needs diagnosing first, and we cover those methods in our [leak repair article](post:havuz-su-kacagi-tamiri)."
          }
        ],
        "bullets": [
          {
            "tr": "Derz boşalması: derz seviyesinin karo yüzeyinin belirgin biçimde altına düşmesi, parmakla ufalanması",
            "en": "Empty joints: the grout line sitting noticeably below the tile face, or crumbling under a fingertip"
          },
          {
            "tr": "Kabarmış ya da çıkmış karo: bölgesel şişme, vurulduğunda boş ses veren alanlar, yerinden oynayan tek tük karolar",
            "en": "Lifted or missing tiles: localised bulges, areas that sound hollow when tapped, individual tiles that have come loose"
          },
          {
            "tr": "Leke kuşağı: su hattı boyunca ilerleyen, temizlikle geçmeyen renk farkı veya kireç bandı",
            "en": "A stain band: a line of discolouration or scale running along the waterline that cleaning does not remove"
          },
          {
            "tr": "Pürüzlenme: yüzeyin çıplak ayağa kaba gelmesi, derz kenarlarının keskinleşmesi",
            "en": "Roughness: the surface feeling coarse underfoot and the joint edges turning sharp"
          },
          {
            "tr": "Suyun kolay bulanması ve kimyasal tüketiminin artması: gözenekli hale gelen yüzeyin kiri ve yosunu tutması",
            "en": "Water clouding easily and chemical use rising: a surface gone porous holding on to dirt and algae"
          }
        ]
      },
      {
        "heading": {
          "tr": "Kısmi onarım mı, tam yenileme mi doğru karar?",
          "en": "Partial repair or full renewal: which is right?"
        },
        "paragraphs": [
          {
            "tr": "Kararın ölçüsü hasarın yüzdesi değil, dağılımıdır. Tek bir bölgede toplanmış, sınırları belli bir bozulma, örneğin merdiven kenarında ya da tek bir nozul çevresinde kalan boşalma, kısmi onarımla çözülür. Buna karşılık bozulma havuzun farklı duvarlarında birbirinden bağımsız noktalarda görünüyorsa, sorun derzin kendisinden değil altındaki katmandan ya da yıllardır süren su kimyasından kaynaklanıyor demektir; böyle bir havuzda nokta onarımı birkaç sezon sonra aynı yerden değil, komşu bölgeden tekrarlar.",
            "en": "The measure is not the percentage of damage but its distribution. Deterioration confined to one area with clear boundaries, say around a step or a single return nozzle, is solved with a partial repair. If, on the other hand, the damage shows up at independent points on different walls, the cause lies not in the grout itself but in the layer beneath it or in years of water chemistry; in such a pool a spot repair simply reappears a few seasons later, not in the same place but next to it."
          },
          {
            "tr": "İki pratik ayırt edici daha vardır. Birincisi renk: yıllar önce döşenmiş bir kaplamanın tonunu kısmi onarımda birebir tutturmak neredeyse imkânsızdır, bu yüzden geniş ve görünür yüzeylerde yama estetik olarak tatmin etmez. İkincisi kapsam: altındaki izolasyona dokunulacaksa iş artık tek kalemlik bir onarım değil, planlanması gereken bir renovasyondur. Kapsam ve süreci [havuz renovasyonu rehberinde](post:havuz-renovasyonu-rehberi) ayrıca anlattık.",
            "en": "Two further practical tests help. The first is colour: matching the shade of a finish laid years ago is all but impossible in a partial repair, so on large, visible surfaces a patch does not satisfy. The second is scope: once the waterproofing beneath has to be touched, the job is no longer a single repair item but a renovation that needs planning. We set out scope and process in our [pool renovation guide](post:havuz-renovasyonu-rehberi)."
          }
        ]
      },
      {
        "heading": {
          "tr": "Derz ve kaplama yenileme hangi sırayla uygulanır?",
          "en": "In what order is grout and tile renewal carried out?"
        },
        "paragraphs": [
          {
            "tr": "Yenilemenin kalitesini son gün sürülen derz değil, ondan önceki hazırlık belirler; her adım bir sonrakinin tutunacağı yüzeyi ürettiği için sıra atlanmaz. Kuruma ve kür süreleri sıcaklığa, neme ve ürünün kendisine göre değiştiğinden burada gün ya da milimetre vermiyoruz: üreticinin teknik föyündeki süre ve kalınlık esastır. Uygulama sırası şu şekildedir:",
            "en": "The quality of a renewal is decided not by the grout applied on the final day but by the preparation before it; each step produces the surface the next will grip, so none is skipped. Because drying and curing times vary with temperature, humidity and the product itself, we give no figures in days or millimetres here: the times and thicknesses in the manufacturer's technical data sheet govern. The sequence runs as follows:"
          },
          {
            "tr": "Boşaltma kararı zemin suyunu da ilgilendirir: yüksek taban suyu olan arazilerde boş kabuk dışarıdan basınca maruz kalabildiği için boşaltma mevsimi ve süresi planlanır. Kuru, rüzgârsız ve aşırı sıcak olmayan bir çalışma penceresi seçmek, hem yapıştırıcının hem derzin düzgün priz almasını sağlar; yaz ortasında güneş altında çalışmak ürünlerin yüzeyden erken kurumasına ve dayanımın düşmesine yol açar.",
            "en": "The decision to drain also concerns groundwater: on plots with a high water table an empty shell can come under pressure from outside, so the season and duration of the drain-down are planned. Choosing a dry working window that is neither windy nor excessively hot lets both the adhesive and the grout set properly; working under midsummer sun causes products to skin over early and lose strength."
          }
        ],
        "bullets": [
          {
            "tr": "1. Boşaltma ve kurutma: havuz kontrollü biçimde boşaltılır, yüzeyin ve derz aralarının tamamen kuruması beklenir",
            "en": "1. Draining and drying: the pool is emptied in a controlled way and the surface and joints are left until fully dry"
          },
          {
            "tr": "2. Eski derzin raspası: bozulmuş derz, karo kenarına zarar vermeden derz açma aletiyle sökülür; yerinden oynamış karolar işaretlenip alınır",
            "en": "2. Removing the old grout: failed grout is raked out without damaging the tile edges, and loose tiles are marked and lifted"
          },
          {
            "tr": "3. Yüzey hazırlığı: toz, kireç, yosun ve eski yapıştırıcı kalıntısı temizlenir, gerekirse aşındırıcı temizlik yapılır ve yüzey yeniden kurutulur",
            "en": "3. Surface preparation: dust, scale, algae and old adhesive residue are cleaned off, an abrasive clean is carried out if needed, and the surface is dried again"
          },
          {
            "tr": "4. İzolasyon kontrolü: karo kalkan bölgelerde altındaki su yalıtımı açığa çıkar; kabarma, ayrışma ya da kabukta çatlak varsa kaplamaya geçilmeden önce bu katman onarılır",
            "en": "4. Checking the waterproofing: where tiles have lifted, the membrane beneath is exposed; if it is blistered, delaminated or the shell is cracked, that layer is repaired before any tiling begins"
          },
          {
            "tr": "5. Yapıştırıcı ve derz seçimi: sürekli su altında kalmaya uygun, havuz için sınıflandırılmış yapıştırıcı ve derz kullanılır; cam mozaikte beyaz renkli ürünler tercih edilir",
            "en": "5. Choosing adhesive and grout: products classified for pools and permanent immersion are used; with glass mosaic, white-bodied products are preferred"
          },
          {
            "tr": "6. Uygulama: karolar döşenir, ürün talimatındaki bekleme sonrası derz çekilir, fazlası yüzeyden alınır ve kenar birleşimlerinde elastik dolgu bırakılır",
            "en": "6. Application: tiles are laid, the grout is worked in after the wait stated in the product instructions, the excess is cleaned off and elastic sealant is left at perimeter junctions"
          },
          {
            "tr": "7. Kür ve doldurma: ürün talimatındaki kür süresi tamamlanmadan su verilmez; doldurma yavaş ve kesintisiz yapılır, ardından ilk denge ayarı yapılıp değerler birkaç gün takip edilir",
            "en": "7. Curing and filling: no water is added before the curing time in the product instructions has elapsed; filling is slow and uninterrupted, after which the first balance is set and the readings are followed for several days"
          }
        ]
      },
      {
        "heading": {
          "tr": "Seramik, cam mozaik ve traverten arasında nasıl seçim yapılır?",
          "en": "How do you choose between ceramic, glass mosaic and travertine?"
        },
        "paragraphs": [
          {
            "tr": "Havuz seramiği geniş yüzeylerde ekonomik ve hızlıdır; derz sayısı az olduğu için bakım yükü de düşüktür. Cam mozaik ışığı kırarak suya derinlik katar ve eğrisel yüzeylere uyum sağlar, ancak birim alanda çok daha fazla derz demektir; işçilik ve ürün seçimi burada daha da kritiktir. Traverten ise çoğunlukla havuz içinde değil kenar ve teras bölgesinde kullanılır: ıslakken tutan, güneşte fazla ısınmayan doğal bir yüzeydir ama gözenekli olduğu için koruyucuyla desteklenmesi gerekir. Malzeme tasarımla birlikte düşünülmesi gereken bir konu olduğundan bu kararı çoğu zaman [havuz inşaatı ekibiyle](page:construction) birlikte alıyoruz.",
            "en": "Pool ceramic is economical and quick over large surfaces, and with fewer joints it carries a lighter maintenance burden. Glass mosaic refracts light, gives the water depth and follows curved surfaces well, but it means far more joint length per square metre; workmanship and product choice matter even more here. Travertine is generally used not inside the pool but around the coping and terrace: a natural surface that grips when wet and does not overheat in the sun, though its porosity means it needs a sealer. Because the material has to be considered together with the design, we usually take this decision alongside our [pool construction team](page:construction)."
          },
          {
            "tr": "Derz rengi çoğu kişinin sandığından çok daha belirleyicidir. Karoya yakın ton seçildiğinde yüzey tek parça bir renk alanı gibi okunur ve su rengi öne çıkar; kontrast bir ton seçildiğinde ise desen ve karo ölçüsü vurgulanır, ama her kusur, her seviye farkı da aynı ölçüde görünür hale gelir. Su hattında kireç izi ve leke en çok koyu derzlerde belli olduğundan, sert suyla çalışan havuzlarda karoya yakın ve orta tonlu derzler daha bağışlayıcıdır.",
            "en": "Grout colour matters far more than most people assume. A tone close to the tile makes the surface read as a single field of colour and lets the water's own colour lead; a contrasting tone emphasises the pattern and the tile module, but it makes every flaw and every difference in level just as visible. Since scale marks and staining at the waterline show up most on dark grout, mid-tone colours close to the tile are more forgiving in pools running on hard water."
          }
        ]
      },
      {
        "heading": {
          "tr": "Yenilenen kaplamanın ömrü nasıl uzatılır?",
          "en": "How do you extend the life of a renewed finish?"
        },
        "paragraphs": [
          {
            "tr": "Yeni derzin ilk haftaları, ömrünün geri kalanını belirler. Havuz dolduktan sonra pH, toplam alkalinite ve kalsiyum sertliği birlikte ayarlanır; pH 7,2–7,6, toplam alkalinite 80–120 ppm ve kalsiyum sertliği 200–400 ppm aralığında tutulan bir su, ne derzi çözecek kadar agresif ne de yüzeyi kabuklandıracak kadar doygundur. Bu üç değerin birbirini dengelediği aralık korunduğunda kaplama yıllarca ilk günkü dokusunu korur; dengeden çıkıldığında ise en pahalı malzeme bile beklenen ömrü vermez.",
            "en": "The first weeks of new grout determine the rest of its life. Once the pool is full, pH, total alkalinity and calcium hardness are set together; water held at pH 7.2–7.6, total alkalinity 80–120 ppm and calcium hardness 200–400 ppm is neither aggressive enough to dissolve grout nor saturated enough to scale the surface. While those three values keep each other in balance, the finish holds its original texture for years; once the balance is lost, even the most expensive material will not last as expected."
          },
          {
            "tr": "Günlük alışkanlıklar da katkı sağlar. Su hattının düzenli temizlenmesi yağ ve kireç bandının kalıcı lekeye dönüşmesini önler; bu iş için kullanılan [havuz temizlik asidi](product:temizlik-asidi-selenoid) gibi ürünler seyreltilerek, etiketteki dozaja uyularak uygulanır ve asla başka bir kimyasalla karıştırılmaz. Sert telli fırça ve aşındırıcı aletler yeni derzi kısa sürede tüketir; fırça ve robot seçimi kaplamaya göre yapılmalıdır. Düzenli ölçüm yapan bir [havuz bakım programı](page:maintenance) ise kimyasal sapmaları derze zarar vermeden yakalar.",
            "en": "Daily habits contribute too. Cleaning the waterline regularly stops the band of oil and scale from turning into a permanent stain; products used for this, such as [pool cleaning acid](product:temizlik-asidi-selenoid), are diluted, applied at the dose on the label and never mixed with another chemical. Stiff wire brushes and abrasive tools wear new grout away quickly, so brush and robot should suit the finish. A [pool maintenance programme](page:maintenance) with regular testing catches chemical drift before it can harm the joints."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Derz yenilemesi havuz boşaltılmadan yapılabilir mi?",
          "en": "Can grout be renewed without emptying the pool?"
        },
        "a": {
          "tr": "Hayır. Hem eski derzin sökülmesi hem yeni derzin priz alması için yüzeyin kuru olması gerekir; su altında uygulanan dolgular kalıcı olmaz. Yalnızca su hattının üstünde kalan çok sınırlı bölgelerde, seviye düşürülerek çalışılabilir. Havuz içindeki gerçek bir yenileme ise kontrollü boşaltma, kurutma ve ürün talimatındaki kür süresinin tamamlanmasını gerektirir.",
          "en": "No. The surface must be dry both to rake out the old grout and to let the new grout set; fillers applied under water do not last. Only in very limited areas above the waterline can work be done by lowering the level. A genuine renewal inside the pool requires a controlled drain-down, drying, and completion of the curing time stated in the product instructions."
        }
      },
      {
        "q": {
          "tr": "Derz yenilemesi su kaçağını durdurur mu?",
          "en": "Will renewing the grout stop a leak?"
        },
        "a": {
          "tr": "Bazen durdurur, ama garanti edilemez. Kaçak gerçekten derz aralarındaki boşalmadan kaynaklanıyorsa yenileme sorunu çözer. Buna karşılık kaçağın kaynağı beton kabuktaki çatlak, skimmer boğazı, nozul contası ya da gömülü tesisat ise, derz yenilemek yalnızca görüntüyü düzeltir. Bu yüzden yenilemeden önce kaçağın kaynağı ayrı bir teşhisle netleştirilmelidir.",
          "en": "Sometimes it will, but it cannot be guaranteed. If the leak genuinely comes from empty joints, renewal solves it. If the source is a crack in the concrete shell, the skimmer throat, a nozzle seal or buried pipework, new grout only improves the appearance. That is why the source of a leak should be pinned down by a separate diagnosis before any renewal."
        }
      },
      {
        "q": {
          "tr": "Yenilemeden sonra havuz ne zaman kullanılabilir?",
          "en": "When can the pool be used after a renewal?"
        },
        "a": {
          "tr": "Kesin bir gün vermek doğru olmaz; süre kullanılan yapıştırıcı ve derzin tipine, hava sıcaklığına ve neme göre değişir. Esas olan, üreticinin teknik föyünde belirttiği kür süresinin tamamlanmasıdır. Kür bitmeden su verilen bir uygulamada derz dayanımını kazanamaz. Doldurmadan sonra da su dengesi kurulup değerler birkaç gün kararlı seyretmeden yoğun kullanım önerilmez.",
          "en": "It would be wrong to name a fixed number of days; it depends on the type of adhesive and grout, on air temperature and on humidity. What governs is completing the curing time given in the manufacturer's technical data sheet. Where water is added before curing finishes, the grout never reaches full strength. After filling, heavy use is also best delayed until the water is balanced and the readings have held steady for a few days."
        }
      },
      {
        "q": {
          "tr": "Açık renk derz mi, koyu renk derz mi daha iyi?",
          "en": "Is light or dark grout the better choice?"
        },
        "a": {
          "tr": "Teknik bir üstünlük değil, görünüm ve bakım tercihidir. Karoya yakın tonlar yüzeyi tek parça gösterir ve kusurları bağışlar; kontrast tonlar deseni vurgular ama her seviye farkını ortaya çıkarır. Sert suyla çalışan havuzlarda koyu derzlerde kireç izi daha belirgin görünür. Cam mozaikte ise beyaz gövdeli ürünler mozaiğin ışık geçirgenliğini bozmadığı için tercih edilir.",
          "en": "It is a question of look and upkeep rather than technical merit. Tones close to the tile make the surface read as one piece and forgive flaws; contrasting tones emphasise the pattern but reveal every difference in level. In pools running on hard water, scale marks show more clearly on dark grout. With glass mosaic, white-bodied products are preferred because they do not spoil the translucency of the mosaic."
        }
      }
    ]
  },
  "havuz-test-kiti-karsilastirma": {
    "title": {
      "tr": "Havuz Test Kiti Karşılaştırması: Şerit, Damla, Dijital",
      "en": "Pool Test Kits Compared: Strips, Drops, Digital"
    },
    "seoTitle": {
      "tr": "Havuz Test Kiti Karşılaştırma: Hangisi?",
      "en": "Pool Test Kits Compared: Which One?"
    },
    "excerpt": {
      "tr": "Havuz suyu testinde şerit, damla kiti ve dijital fotometre: hangisi ne işe yarar, numune nasıl alınır, sonuç hangi sırayla eyleme çevrilir.",
      "en": "Strips, drop kits and digital photometers for pool water testing: what each is for, how to take a sample and how to act on the result."
    },
    "intro": {
      "tr": "Havuz suyu testi, bakımın tahminden çıkıp ölçüme dayandığı andır. Elinizdeki havuz test kiti ister basit bir şerit ister dijital fotometre olsun, sonucun doğruluğu büyük ölçüde numuneyi nasıl aldığınıza ve rengi hangi koşullarda okuduğunuza bağlıdır. Bu yazıda havuz suyu testinin üç yöntemini, yani şeridi, damla kitini ve fotometreyi işleriyle ve sınırlarıyla karşılaştırıyoruz; doğru numune almayı, en sık yapılan okuma hatalarını ve hangi parametrenin ne sıklıkla ölçüleceğini anlatıyoruz. Amaç, renk skalasındaki ya da ekrandaki değeri güvenle okumanız ve o değeri doğru sırayla eyleme çevirmeniz.",
      "en": "Testing pool water is the moment maintenance stops being guesswork and starts resting on measurement. Whether your kit is a simple strip or a digital photometer, the accuracy of the result depends largely on how you take the sample and how you read the colour. In this article we compare the three methods of pool water testing, namely the strip, the drop kit and the photometer, with what each one is for and where it stops; we also cover taking a sample correctly, the most common reading mistakes and how often each parameter should be measured. The aim is for you to read the value on the colour chart or the screen with confidence, and to act on it in the right order."
    },
    "sections": [
      {
        "heading": {
          "tr": "Havuz suyu numunesi nereden ve nasıl alınmalı?",
          "en": "Where and how should a pool water sample be taken?"
        },
        "paragraphs": [
          {
            "tr": "Test sonucu, numune ne kadar temsil ediciyse o kadar doğrudur. Suyu yüzeyden almak en sık yapılan hatadır; yüzeyin ilk santimetreleri güneşten, yağ ve güneş kremi kalıntılarından ve havayla temastan etkilenir, havuzun genelini temsil etmez. Doğru numune dirsek derinliğinden, yani kolunuzu suya daldırıp bileğinizi rahatça aşağı çevirebileceğiniz derinlikten alınır. Alırken skimmer ağzından ve dönüş ağzından olabildiğince uzak durun: skimmerin önünde henüz filtreye gitmemiş yüzey suyu, dönüş ağzının önünde ise yeni dozlanmış ve havuza tam karışmamış su bulunur. İkisi de gerçek değeri gizler.",
            "en": "A test result is only as accurate as the sample is representative. Taking water from the surface is the most common mistake; the top few centimetres are affected by sun, oil and sunscreen residue and contact with the air, and they do not represent the pool as a whole. A correct sample is taken at elbow depth, that is, deep enough for you to sink your arm in and turn your wrist comfortably downwards. As you do it, stay as far as you can from the skimmer mouth and the return outlet: in front of the skimmer sits surface water that has not yet reached the filter, and in front of the return sits freshly dosed water that has not fully mixed into the pool. Both hide the true value."
          },
          {
            "tr": "Kabın kendisi de sonucu etkiler. Başka bir iş için kullanılmış, deterjan ya da kimyasal kalıntısı taşıyan bir kapla numune almayın; tüpü veya kabı her ölçümden önce havuz suyuyla çalkalayın ve içine parmağınızı sokmayın. Numuneyi aldıktan sonra bekletmeyin, çünkü klor ölçülene kadar geçen sürede, özellikle güneş altında düşer. Ölçümü havuz başında, gölgede ve pompa bir süredir çalışıyorken yapmak, elinizdeki değerin gerçekten havuzun değeri olmasını sağlar.",
            "en": "The container itself also affects the result. Do not take a sample in a vessel used for something else that may carry detergent or chemical residue; rinse the vial or container with pool water before every test and do not put your finger inside it. Do not let the sample stand once taken, because chlorine falls in the time before it is read, especially in sunlight. Testing at the poolside, in the shade, with the pump having run for a while, is what makes the value in your hand genuinely the pool's value."
          }
        ]
      },
      {
        "heading": {
          "tr": "Test şeritleri günlük takipte ne kadar iş görür?",
          "en": "How far do test strips go in daily monitoring?"
        },
        "paragraphs": [
          {
            "tr": "Şerit, suya daldırıp çıkardıktan sonra saniyeler içinde renk veren en pratik yöntemdir ve günlük hızlı bakış için tasarlanmıştır. [Insta test şeritleri](product:test-insta) gibi ürünler klor ve pH'ı tek hamlede gösterir; havuzu her gün kullanan bir evde sabah suya girmeden önce bir şerit daldırmak, bakımın en düşük maliyetli alışkanlığıdır. Şeridin işi tam sayıyı vermek değil, bugün bir şeyin ters gidip gitmediğini hızla söylemektir.",
            "en": "The strip is the most practical method, giving a colour within seconds of being dipped and withdrawn, and it is designed for a quick daily look. Products such as [Insta test strips](product:test-insta) show chlorine and pH in a single move; in a house where the pool is used every day, dipping a strip before the first swim is the cheapest habit in pool care. A strip's job is not to give you an exact number but to tell you quickly whether something is off today."
          },
          {
            "tr": "Sınırı ise hassasiyettir. Şeritler nemden ciddi biçimde etkilenir: kutu ıslak elle açılır ya da kapağı açık bırakılırsa içerideki bütün şeritler bozulur, bu yüzden kutu havuz kenarında değil kuru bir yerde saklanır ve kapağı hemen kapatılır. Son kullanma tarihi geçmiş şeritler renk verir ama yanlış renk verir; tarihi geçmiş bir kutu kullanılmaz. Renk skalasındaki basamaklar da geniştir; şerit size değerin aralığını söyler, ince ayar gerektiren durumlarda daha hassas bir yönteme geçmek gerekir.",
            "en": "Its limit is precision. Strips are seriously affected by moisture: if the tub is opened with wet hands or left with its cap off, every strip inside is spoiled, which is why the tub is kept in a dry place rather than at the poolside and closed again immediately. Expired strips still produce a colour, but the wrong one; a tub past its date should not be used. The steps on the colour chart are also wide, so a strip tells you the range a value sits in, and situations that call for fine adjustment call for a more precise method."
          }
        ]
      },
      {
        "heading": {
          "tr": "Damla yöntemiyle çalışan test kiti neyi daha iyi ölçer?",
          "en": "What does a drop-based test kit measure better?"
        },
        "paragraphs": [
          {
            "tr": "[Damla yöntemiyle çalışan test kiti](product:test-damla), numune tüpüne alınan suya OTO ve fenol kırmızısı reaktifleri damlatarak klor ve pH'ı okumanızı sağlar. Renk, şeritteki küçük kareye değil su sütununun tamamına yayıldığı için gözle ayırt etmek belirgin biçimde kolaylaşır ve ara tonları görmek mümkün olur; şeritte tek bir basamak olarak görünen fark, tüpte iki ayrı ton olarak okunabilir. Haftalık kontrol için pratikte en dengeli yöntem budur: şeritten hassas, fotometreden basit ve kullanımı öğrenmesi birkaç ölçüm alan bir yöntemdir.",
            "en": "A [drop-based test kit](product:test-damla) lets you read chlorine and pH by adding OTO and phenol red reagents to water drawn into a sample vial. Because the colour spreads through the whole column of water rather than a small square on a strip, it is noticeably easier to judge by eye and intermediate shades become visible; a difference that appears as a single step on a strip can be read as two distinct tones in the vial. In practice this is the most balanced method for weekly checks: more precise than a strip, simpler than a photometer, and a technique you learn within a few tests."
          },
          {
            "tr": "Sınırı kapsamdır. Klasik damla kiti yalnızca klor ve pH ölçer; toplam alkalinite, kalsiyum sertliği ve siyanürik asit gibi arka plandaki değerler bu kitin dışında kalır. Oysa suyun sorun çıkarma eğilimi çoğu zaman tam da bu arka plan değerlerinde saklıdır. Bu yüzden damla kiti günlük ve haftalık takipte yeterliyken, sezon başında ve su inatla dengede durmadığında daha geniş kapsamlı bir [test kiti setine](product:test-set) ihtiyaç duyulur.",
            "en": "Its limit is scope. A classic drop kit measures only chlorine and pH; background values such as total alkalinity, calcium hardness and cyanuric acid fall outside it. Yet water's tendency to cause trouble is often hidden in precisely those background values. So while a drop kit is enough for daily and weekly monitoring, the start of the season, and water that stubbornly refuses to stay in balance, call for a broader [complete water testing kit](product:test-set)."
          }
        ]
      },
      {
        "heading": {
          "tr": "Dijital fotometre hangi havuzlarda anlam kazanır?",
          "en": "Which pools does a digital photometer make sense for?"
        },
        "paragraphs": [
          {
            "tr": "[ColorQ dijital test kiti](product:test-colorq) gibi fotometreler renk yorumunu gözden alıp cihaza verir: reaktifle işlem görmüş numune optik hazneye konur, cihaz ışık geçirgenliğini ölçer ve sonucu ekranda sayı olarak gösterir. Böylece iki kişinin aynı rengi farklı okuması sorunu ortadan kalkar ve aynı havuz farklı günlerde aynı ölçütle değerlendirilir. Klor ve pH'ın yanında alkalinite, sertlik ve stabilizatör gibi değerler de aynı oturumda kayda geçtiği için suyun tablosu tek seferde çıkar; ölçümler tarihiyle not edildiğinde eğilim de görünür hâle gelir.",
            "en": "Photometers such as the [ColorQ digital test kit](product:test-colorq) take the interpretation of colour out of the eye and give it to the instrument: a reagent-treated sample goes into the optical chamber, the device measures light transmission and shows the result on screen as a number. That removes the problem of two people reading the same colour differently, and means the same pool is judged by the same yardstick on different days. Because values such as alkalinity, hardness and stabiliser are recorded in the same session as chlorine and pH, the whole picture emerges at once; log the readings with their dates and the trend becomes visible too."
          },
          {
            "tr": "Bu düzeyde ölçüm her havuz için gerekli değildir. Tek ailenin kullandığı, dengesi oturmuş bir villa havuzunda şerit ve damla kiti fazlasıyla yeterlidir. Fotometre; yoğun kullanılan büyük havuzlarda, site ve apart havuzlarında, kiralanan villalarda ya da nedeni bir türlü bulunamayan sürekli denge sorunlarında anlam kazanır. Cihazın kendisi de bakım ister: tüpler çizilmemiş ve parmak izsiz olmalı, reaktiflerin tarihi ve pil durumu düzenli kontrol edilmeli, cihaz nemli makine dairesinde değil kuru ve serin bir yerde saklanmalıdır.",
            "en": "Measurement at this level is not necessary for every pool. In a single-family villa pool whose balance has settled, strips and a drop kit are more than enough. A photometer earns its place in large, heavily used pools, in shared residential and apartment pools, in rental villas, or where a persistent balance problem refuses to reveal its cause. The instrument itself also needs care: the vials must be unscratched and free of fingerprints, reagent dates and battery condition should be checked regularly, and the unit should be stored somewhere dry and cool rather than in a damp plant room."
          }
        ]
      },
      {
        "heading": {
          "tr": "Hangi parametre ne sıklıkla ölçülmeli?",
          "en": "How often should each parameter be measured?"
        },
        "paragraphs": [
          {
            "tr": "Her değeri her gün ölçmek gerekmez; parametrelerin değişme hızı birbirinden farklıdır. Klor ve pH güneş, sıcaklık ve kullanım yüküyle gün içinde bile hareket eder; toplam alkalinite, kalsiyum sertliği ve stabilizatör gibi arka plan değerleri ise haftalar içinde yavaşça kayar. Bu yüzden ölçüm takvimi tek bir sıklığa değil iki farklı ritme dayanır: hızlı değerler için sık ve kısa kontroller, yavaş değerler için seyrek ama kapsamlı ölçümler. Sezon boyunca sürdürebileceğiniz bir düzen şöyle kurulur:",
            "en": "You do not need to measure every value every day; parameters change at different speeds. Chlorine and pH move within a single day under sun, temperature and bathing load, while background values such as total alkalinity, calcium hardness and stabiliser drift slowly over weeks. A testing calendar therefore rests not on one frequency but on two rhythms: frequent short checks for the fast-moving values, and infrequent but comprehensive tests for the slow ones. A routine you can keep up through the season looks like this:"
          }
        ],
        "bullets": [
          {
            "tr": "Serbest klor ve pH: yoğun kullanılan havuzlarda her gün, sakin dönemlerde haftada birkaç kez. Referans aralık pH 7,2–7,6 ve serbest klor 1–3 ppm'dir.",
            "en": "Free chlorine and pH: daily in heavily used pools, a few times a week in quieter periods. The reference ranges are pH 7.2–7.6 and free chlorine 1–3 ppm."
          },
          {
            "tr": "Toplam alkalinite: haftada bir ya da iki haftada bir; hedef aralık 80–120 ppm. pH sürekli oynuyorsa ilk bakılacak değer budur.",
            "en": "Total alkalinity: weekly or fortnightly; the target range is 80–120 ppm. If pH keeps moving, this is the first value to check."
          },
          {
            "tr": "Siyanürik asit (stabilizatör): sezon başında, ardından ayda bir; 30–50 ppm aralığı klorun güneş altında dayanmasını sağlar.",
            "en": "Cyanuric acid (stabiliser): at the start of the season and then monthly; the 30–50 ppm range is what lets chlorine survive in sunlight."
          },
          {
            "tr": "Kalsiyum sertliği: sezon başında ve ayda bir; 200–400 ppm aralığı kaplamayı ve donanımı korur.",
            "en": "Calcium hardness: at the start of the season and monthly; the 200–400 ppm range protects the finish and the equipment."
          },
          {
            "tr": "Şok uygulamasından, uzun süren yağmurdan, kalabalık kullanımdan ve büyük su takviyesinden sonra klor ve pH yeniden ölçülür.",
            "en": "After shock dosing, prolonged rain, crowded use or a large top-up, chlorine and pH are measured again."
          }
        ]
      },
      {
        "heading": {
          "tr": "Test sonucunu yanıltan okuma hataları hangileri?",
          "en": "Which reading mistakes distort a test result?"
        },
        "paragraphs": [
          {
            "tr": "Yöntem ne olursa olsun, hatalı sonuçların çoğu kitin değil okumanın hatasıdır. Havuz sahipleri çoğu zaman kitin güvenilir olmadığını düşünür; oysa aynı kit, koşullar düzeltildiğinde tutarlı sonuç verir. Yanlış okuma sinsidir, çünkü ekranda ya da renk skalasında makul görünen bir değer üretir ve siz o değere dayanarak kimyasal eklersiniz. Sonuç, düzelmeyen bir su ve gereksiz kimyasal tüketimidir. Pratikte en sık karşılaştığımız beş hata şunlardır:",
            "en": "Whatever the method, most wrong results are errors of reading rather than of the kit. Pool owners often conclude the kit is unreliable, when the same kit gives consistent results once the conditions are put right. A misreading is insidious, because it produces a value that looks plausible on the screen or the colour chart, and you then add chemicals on the strength of it. The outcome is water that does not improve and chemicals spent for nothing. These are the five mistakes we meet most often:"
          }
        ],
        "bullets": [
          {
            "tr": "Rengi yanlış ışıkta yorumlamak: doğrudan güneş altında, renkli bir şemsiyenin gölgesinde ya da akşam yapay ışıkta okunan renk gerçek tonunu vermez. Okuma, gün ışığında ama gölgede ve beyaz bir zemine karşı yapılır.",
            "en": "Judging colour in the wrong light: read in direct sun, under a coloured parasol or in artificial light at dusk, a colour does not show its true shade. Read in daylight but in shade, against a white background."
          },
          {
            "tr": "Geç okumak: şeritlerin ve reaktiflerin belirtilmiş bir bekleme süresi vardır ve süre geçtikçe renk kaymaya devam eder. Ürün talimatındaki süreye uyun.",
            "en": "Reading late: strips and reagents have a stated waiting time, and the colour keeps shifting once it passes. Follow the time given in the product instructions."
          },
          {
            "tr": "Kirli ya da çizik tüp: önceki reaktifin kalıntısı, kireç lekesi ve parmak izi sonucu doğrudan bozar. Tüp her ölçümden önce numune suyuyla çalkalanır.",
            "en": "A dirty or scratched vial: residue from the previous reagent, scale marks and fingerprints distort the result directly. Rinse the vial with sample water before every test."
          },
          {
            "tr": "Eski reaktif: açılalı çok olmuş, sıcak görmüş ya da tarihi geçmiş reaktifler sessizce yanlış okur. Reaktifler serin, karanlık ve çocukların erişemeyeceği bir yerde saklanır.",
            "en": "Old reagent: bottles long since opened, exposed to heat or past their date read wrong without announcing it. Store reagents somewhere cool and dark, out of reach of children."
          },
          {
            "tr": "Tek ölçüme dayanarak büyük karar vermek: beklenmedik bir sonuç çıktığında numuneyi yenileyip ölçümü tekrarlamak, en ucuz kontroldür.",
            "en": "Making a big decision on a single reading: when a result surprises you, taking a fresh sample and repeating the test is the cheapest check there is."
          }
        ]
      },
      {
        "heading": {
          "tr": "Ölçüm sonucu hangi sırayla eyleme çevrilir?",
          "en": "In what order should a result be acted on?"
        },
        "paragraphs": [
          {
            "tr": "Elinizde birkaç değer varken hepsine aynı anda müdahale etmek, suyu düzeltmek yerine daha karmaşık hâle getirir. Sıra bellidir: önce toplam alkalinite, sonra pH, en sonda klor. Alkalinite pH'ın tamponudur; aralığın dışındayken yaptığınız pH ayarı birkaç gün içinde yerinden oynar ve aynı işi tekrar tekrar yaparsınız. Alkalinite 80–120 ppm aralığına oturduktan sonra pH'ı 7,2–7,6 aralığına getirmek hem daha kolay hem de daha kalıcı olur.",
            "en": "With several values in front of you, intervening in all of them at once makes the water more complicated rather than better. The order is settled: total alkalinity first, then pH, chlorine last. Alkalinity is pH's buffer; while it sits outside its range, any pH adjustment you make slips within a few days and you end up repeating the same work. Once alkalinity has settled into 80–120 ppm, bringing pH into 7.2–7.6 is both easier and more durable."
          },
          {
            "tr": "Klor en sona bırakılır, çünkü klorun dezenfeksiyon gücü doğrudan pH'a bağlıdır: pH yüksekken 1–3 ppm serbest klor bile beklediğiniz işi görmez. Önce zemini düzeltip sonra klor eklemek hem kimyasal tüketimini hem de tekrar ölçüm sayısını azaltır. Hangi üründen ne kadar ekleneceği ve hesabın nasıl yapılacağı ayrı bir konudur; [pH ve klor dozajının hesaplanmasını](post:havuz-ph-klor-dozaj) o yazıda adım adım anlatıyoruz. Hangi ürün ailesinin hangi işi gördüğünü görmek isterseniz [havuz kimyasalları rehberi](post:havuz-kimyasallari-rehberi) başvurulacak yerdir.",
            "en": "Chlorine is left to last because its disinfecting power depends directly on pH: with pH high, even 1–3 ppm of free chlorine will not do the job you expect. Fixing the ground first and adding chlorine afterwards reduces both chemical consumption and the number of repeat tests. How much of which product to add, and how the calculation is made, is a separate subject; we set out [how pH and chlorine dosing is calculated](post:havuz-ph-klor-dozaj) step by step in that article. If you want to see which product family does which job, the [pool chemicals guide](post:havuz-kimyasallari-rehberi) is the place to look."
          }
        ]
      },
      {
        "heading": {
          "tr": "Çeşme yarımadasında ölçüm sıklığı neden değişir?",
          "en": "Why does testing frequency change on the Çeşme peninsula?"
        },
        "paragraphs": [
          {
            "tr": "Yarımadanın iklimi test ritmini doğrudan etkiler. Uzun ve yoğun yaz sezonunda su sıcaklığı yükseldikçe klor daha hızlı tükenir; yazın ortasında haftada bir yapılan ölçüm, sezon başındaki aynı ölçümle kıyaslanamaz. İmbat ve lodos rüzgârı havuza sürekli toz, tuz ve organik madde taşır; bu yük hem klor tüketimini artırır hem de pH'ı oynatır. Denizden gelen tuzlu hava, özellikle [Alaçatı'daki açık konumlu havuzlarda](area:alacati) su kimyasının daha çabuk kaymasına neden olur.",
            "en": "The peninsula's climate bears directly on your testing rhythm. Through the long, intense summer, as water temperature rises chlorine is consumed faster; a weekly test in high summer is not comparable to the same test at the start of the season. The imbat and lodos winds carry a constant load of dust, salt and organic matter into the pool, which both increases chlorine consumption and unsettles pH. Salt-laden sea air makes water chemistry drift faster still, particularly in [exposed pools in Alaçatı](area:alacati)."
          },
          {
            "tr": "Pratik sonuç şudur: sezonun kalbinde ölçüm sıklığını artırın, rüzgârlı günlerin ardından mutlaka bir şerit daldırın, kalabalık bir hafta sonundan sonra klor ve pH'ı yeniden okuyun. Ölçümleri tarihiyle birlikte not etmek suyun mevsim içindeki eğilimini görünür kılar ve sorunları ortaya çıkmadan yakalamanızı sağlar. Bu düzeni kendiniz sürdürmek istemiyorsanız, [havuz bakım hizmetimiz](page:maintenance) kapsamında su değerleri düzenli olarak ölçülüp kaydedilir. Değerler normal göründüğü hâlde su bulanıklaşıyor ya da kokuyorsa, neden [bulanıklık ve koku](post:havuz-suyu-bulanikligi-kokusu) yazısında ele aldığımız başka başlıklarda olabilir.",
            "en": "The practical conclusion: raise your testing frequency at the height of the season, always dip a strip after windy days, and read chlorine and pH again after a crowded weekend. Logging readings with their dates makes the water's trend across the season visible and lets you catch problems before they surface. If you would rather not keep this up yourself, water values are measured and logged regularly as part of our [pool maintenance service](page:maintenance). And if the values look normal yet the water is going cloudy or smelling, the cause may lie in the other headings we cover in the article on [cloudiness and odour](post:havuz-suyu-bulanikligi-kokusu)."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Havuz suyu ne sıklıkla test edilmeli?",
          "en": "How often should pool water be tested?"
        },
        "a": {
          "tr": "Yoğun kullanılan bir havuzda serbest klor ve pH her gün, sakin dönemlerde haftada birkaç kez ölçülür. Toplam alkalinite haftada bir ya da iki haftada bir; siyanürik asit ve kalsiyum sertliği ise sezon başında ve ardından ayda bir kontrol edilir. Şok uygulaması, uzun süren yağmur, kalabalık kullanım ve büyük su takviyesinden sonra klor ve pH mutlaka yeniden ölçülmelidir.",
          "en": "In a heavily used pool, free chlorine and pH are measured daily, and a few times a week in quieter periods. Total alkalinity is checked weekly or fortnightly, while cyanuric acid and calcium hardness are checked at the start of the season and then monthly. After shock dosing, prolonged rain, crowded use or a large top-up, chlorine and pH should always be measured again."
        }
      },
      {
        "q": {
          "tr": "Test şeridi mi damla kiti mi daha doğru sonuç verir?",
          "en": "Which is more accurate, a test strip or a drop kit?"
        },
        "a": {
          "tr": "Damla kiti daha hassastır, çünkü renk su sütununun tamamına yayılır ve ara tonlar ayırt edilebilir. Şerit ise hızlıdır ve günlük hızlı bakış için tasarlanmıştır; size değerin tam sayısını değil aralığını verir. İkisi birbirinin alternatifi değil tamamlayıcısıdır: günlük kontrolü şeritle yapıp haftalık ölçümü damla kitiyle doğrulamak çoğu villa havuzu için yeterli bir düzendir.",
          "en": "A drop kit is more precise, because the colour spreads through the whole column of water and intermediate shades can be told apart. A strip is fast and designed for a quick daily look; it gives you the range a value sits in rather than an exact figure. The two are complements, not alternatives: doing the daily check with a strip and confirming the weekly reading with a drop kit is enough for most villa pools."
        }
      },
      {
        "q": {
          "tr": "Havuz suyu numunesi nereden alınır?",
          "en": "Where should a pool water sample be taken from?"
        },
        "a": {
          "tr": "Numune yüzeyden değil dirsek derinliğinden alınır; yüzeyin ilk santimetreleri güneşten ve yağ kalıntılarından etkilendiği için havuzu temsil etmez. Skimmer ağzından ve dönüş ağzından uzak durun, çünkü biri filtreye gitmemiş yüzey suyunu, diğeri yeni dozlanmış suyu taşır. Kap temiz olmalı, her ölçüm öncesi havuz suyuyla çalkalanmalı ve numune bekletilmeden test edilmelidir.",
          "en": "Take the sample at elbow depth rather than from the surface; the top few centimetres are affected by sun and oil residue and do not represent the pool. Stay away from the skimmer mouth and the return outlet, since one carries surface water that has not reached the filter and the other freshly dosed water. The container must be clean, rinsed with pool water before each test, and the sample should be tested without standing."
        }
      },
      {
        "q": {
          "tr": "Dijital test cihazına gerçekten ihtiyaç var mı?",
          "en": "Is a digital tester really necessary?"
        },
        "a": {
          "tr": "Çoğu villa havuzu için şerit ve damla kiti yeterlidir. Dijital fotometre; yoğun kullanılan büyük havuzlarda, site ve apart havuzlarında, kiralanan villalarda ya da su bir türlü dengede durmuyorsa anlam kazanır. Avantajı renk yorumunu ortadan kaldırması ve alkalinite, sertlik, stabilizatör gibi değerleri aynı oturumda sayısal olarak kaydetmesidir. Karşılığında reaktif, pil ve tüp bakımı ister.",
          "en": "For most villa pools, a strip and a drop kit are enough. A digital photometer earns its place in large, heavily used pools, in shared residential and apartment pools, in rental villas, or where water simply refuses to stay in balance. Its advantage is that it removes the interpretation of colour and records values such as alkalinity, hardness and stabiliser numerically in one session. In return it asks for reagent, battery and vial upkeep."
        }
      }
    ]
  },
  "havuz-suyu-bulanikligi-kokusu": {
    "title": {
      "tr": "Havuz Suyu Bulanıklığı ve Klor Kokusu: Gerçek Nedenler",
      "en": "Cloudy Pool Water and Chlorine Smell: The Real Causes"
    },
    "seoTitle": {
      "tr": "Havuz Suyu Bulanıklığı ve Kokusu",
      "en": "Cloudy Pool Water and Odour"
    },
    "excerpt": {
      "tr": "Havuz suyu bulanıklığı ve keskin klor kokusunun gerçek nedenleri: filtrasyon, kireç, metal, kloramin ve adım adım teşhis sırası.",
      "en": "The real causes of cloudy pool water and a sharp chlorine smell: filtration, scale, metals, chloramines and a step-by-step diagnosis."
    },
    "intro": {
      "tr": "Havuz suyu bulanıklığı, su yeşil olmadığı halde dibin seçilmediği, rengin sütlü bir griye döndüğü durumdur ve villa sahiplerinin en çok kafasını karıştıran sorundur. Yanına keskin bir klor kokusu eklendiğinde ilk refleks genellikle yanlış olur: klor azaltılır, oysa çoğu vakada sorun klorun fazlalığı değil eksikliğidir. Bu yazıda bulanıklığın alg dışı kök nedenlerini, kokunun gerçekte neyin işareti olduğunu ve doğru teşhis sırasını anlatıyoruz. Amaç, kimyasal üstüne kimyasal eklemeden nedeni bulmanızı sağlamaktır.",
      "en": "Cloudy pool water is the state where the bottom is no longer visible and the colour turns a milky grey even though the water is not green, and it is the problem that confuses villa owners most. When a sharp chlorine smell is added to it, the first reflex is usually wrong: chlorine gets reduced, whereas in most cases the problem is not too much chlorine but too little. In this article we explain the non-algal root causes of cloudiness, what the smell actually signals, and the correct order of diagnosis. The aim is to let you find the cause without stacking one chemical on top of another."
    },
    "sections": [
      {
        "heading": {
          "tr": "Havuz suyu neden bulanıklaşır?",
          "en": "Why does pool water turn cloudy?"
        },
        "paragraphs": [
          {
            "tr": "Bulanıklık tek bir hastalık değil, bir belirtidir: suda gözle görülemeyecek kadar küçük ama ışığı dağıtacak kadar çok partikül asılı kalmıştır. Bu partiküller kireç kristali, oksitlenmiş metal, güneş kremi ve vücut yağı kalıntısı, ince toz ya da dezenfeksiyon sonrası ortaya çıkan ölü organik madde olabilir. Ortak nokta şudur: ya partikül suya girmeyi sürdürüyordur ya da filtre onu tutamıyordur. Su yeşile çalıyorsa tablo farklıdır; o durumda yosun çoğalması söz konusudur ve [havuz suyu yeşermesi yazımızdaki](post:havuz-suyu-yesermesi) sırayı izlemelisiniz. Rengi gri-beyaz, sütlü veya donuk olan su ise neredeyse hiçbir zaman alg değildir ve aşağıdaki başlıklardan birine oturur.",
            "en": "Cloudiness is not a single illness but a symptom: particles too small to see yet numerous enough to scatter light are suspended in the water. These particles may be scale crystals, oxidised metals, sunscreen and body-oil residue, fine dust, or dead organic matter released after disinfection. The common denominator is this: either particles keep entering the water, or the filter cannot retain them. If the water is tinged green the picture is different; that means algae growth, and you should follow the sequence in [our article on green pool water](post:havuz-suyu-yesermesi). Water that is grey-white, milky or dull, however, is almost never algae and fits into one of the headings below."
          }
        ]
      },
      {
        "heading": {
          "tr": "Filtrasyon yetersizliği bulanıklığı nasıl yaratır?",
          "en": "How does inadequate filtration create cloudiness?"
        },
        "paragraphs": [
          {
            "tr": "Bulanıklık vakalarının büyük kısmı kimyasalla değil mekanikle ilgilidir. Filtre kumu zamanla yağ ve kireçle keçeleşir, içinde su için kısa yollar açılır; buna kanal açma denir. Su filtreden geçiyor görünür, manometre normal okur, ama ince partikül filtrelenmeden havuza geri döner. Aynı sonucu kısa devir süresi de verir: yaz ortasında günde yalnız birkaç saat çalışan bir pompa, havuzdaki suyun tamamını gerektiği kadar tur ettiremez. Skimmer ve ön filtre sepetinin yaprakla tıkanması debiyi düşürerek tabloyu ağırlaştırır. Bu nedenle bulanık suda ilk bakılacak yer kimyasal rafı değil makine dairesidir.",
            "en": "Most cases of cloudiness are mechanical rather than chemical. Filter sand gradually mats together with oil and scale, and short paths open up inside it for the water; this is called channelling. The water appears to pass through the filter, the pressure gauge reads normally, yet fine particles return to the pool unfiltered. A short turnover time produces the same result: in midsummer, a pump running only a few hours a day cannot circulate the entire body of water as many times as it needs. Skimmer and pre-filter baskets clogged with leaves reduce flow and make the picture worse. For that reason, the first place to look in a cloudy pool is the plant room, not the chemical shelf."
          }
        ],
        "bullets": [
          {
            "tr": "Skimmer ve pompa ön filtre sepetlerini boşaltın; yaprak ve saç debiyi görünmeden düşürür.",
            "en": "Empty the skimmer and pump pre-filter baskets; leaves and hair reduce flow invisibly."
          },
          {
            "tr": "Filtreyi ters yıkayın ve ardından durulayın; çıkan suyun berraklaşmasını bekleyin.",
            "en": "Backwash the filter and then rinse; wait until the discharge water runs clear."
          },
          {
            "tr": "Günlük filtrasyon süresini yaz sezonunda uzatın; bulanık suda kesintisiz çalıştırmak gerekebilir.",
            "en": "Extend daily filtration time through the summer season; cloudy water may require continuous running."
          },
          {
            "tr": "Kum yıllardır değişmediyse ters yıkamanın işe yaramadığını kabul edin; kum yenilenmelidir.",
            "en": "If the sand has not been changed for years, accept that backwashing will not help; the sand needs replacing."
          }
        ]
      },
      {
        "heading": {
          "tr": "Kireç ve su dengesizliği bulanıklığa nasıl yol açar?",
          "en": "How do scale and water imbalance lead to cloudiness?"
        },
        "paragraphs": [
          {
            "tr": "Çeşme yarımadasının şebeke suyu sert olabilir ve kalsiyum sertliği zamanla yükselir. Kalsiyum sertliği 400 ppm'in üzerine çıkmış, pH da 7,6'nın üstüne kaçmış bir havuzda kalsiyum suda çözünmüş kalamaz; mikroskobik kristaller halinde çöker ve suyu sütlü beyaz gösterir. Bu tip bulanıklık genellikle sıcak günlerde, buharlaşmayla su seviyesi düştükçe belirginleşir. Ters yönde, toplam alkalinite 80 ppm'in altına indiğinde su tamponunu kaybeder; pH gün içinde zıplar ve her dalgalanmada yeni çökelme veya korozyon başlar. Hedef aralıklar pH 7,2–7,6, toplam alkalinite 80–120 ppm, kalsiyum sertliği 200–400 ppm'dir. Ölçüm ve düzeltme mantığının tamamını [pH ve klor dozajı yazımızda](post:havuz-ph-klor-dozaj) bulabilirsiniz.",
            "en": "Mains water on the Çeşme peninsula can be hard, and calcium hardness rises over time. In a pool where calcium hardness has climbed above 400 ppm and pH has drifted above 7.6, calcium can no longer stay dissolved; it precipitates as microscopic crystals and makes the water look milky white. This type of cloudiness usually becomes obvious on hot days, as evaporation lowers the water level. In the opposite direction, when total alkalinity falls below 80 ppm the water loses its buffer; pH swings through the day, and each swing starts fresh precipitation or corrosion. The target ranges are pH 7.2–7.6, total alkalinity 80–120 ppm and calcium hardness 200–400 ppm. You will find the full logic of measurement and correction in [our article on pH and chlorine dosing](post:havuz-ph-klor-dozaj)."
          }
        ]
      },
      {
        "heading": {
          "tr": "Sudaki metaller bulanıklık yapar mı?",
          "en": "Can metals in the water cause cloudiness?"
        },
        "paragraphs": [
          {
            "tr": "Kuyu suyu veya eski metal boru hattıyla beslenen havuzlarda demir, bakır ve manganez suya çözünmüş halde girer; renksizdir, göze çarpmaz. Klor eklendiği anda bu metaller oksitlenir ve gözle görülür partiküle dönüşür. Sonuç bulanık ve renkli bir sudur: demirde pas-kahve, bakırda mavi-yeşil tonlar, manganezde grimsi bir gölge. Havuzu taze suyla tamamladıktan ya da şok klorlamadan hemen sonra ortaya çıkan renk değişimi güçlü bir metal işaretidir. Çözüm klorlamayı kesmek değil, metali bağlamaktır; [metal bağlayıcı bir ürünle](product:anti-iyon-quardex) metalleri tutup ardından filtreyle uzaklaştırmak gerekir. Metal çökeldiği halde ihmal edilirse fayans ve derzlerde kalıcı leke bırakır.",
            "en": "In pools fed by well water or old metal pipework, iron, copper and manganese enter the water in dissolved form; they are colourless and go unnoticed. The moment chlorine is added, these metals oxidise and turn into visible particles. The result is cloudy, tinted water: rust-brown for iron, blue-green for copper, a greyish cast for manganese. A colour change that appears right after topping the pool up with fresh water or after shock chlorination is a strong indication of metals. The solution is not to stop chlorinating but to bind the metal; [a metal sequestrant](product:anti-iyon-quardex) should hold the metals so the filter can then remove them. If precipitated metal is left unattended, it leaves permanent staining on tiles and grout."
          }
        ]
      },
      {
        "heading": {
          "tr": "Şok klorlamadan sonra su neden bulanıklaşır?",
          "en": "Why does water go cloudy after shock chlorination?"
        },
        "paragraphs": [
          {
            "tr": "Şok klorlamanın ardından suyun bir süre bulanıklaşması çoğu zaman kötü değil, beklenen bir sonuçtur: klor organik yükü parçalamış, ortaya asılı kalan ölü partiküller çıkmıştır. Bunlara güneş kremi, losyon, vücut yağı, imbatın taşıdığı ince toz ve polen de eklenir. Filtre bu partiküllerin bir kısmını tutamayacak kadar iridir ve partiküller havuzda dolaşmaya devam eder. Burada iki ayrı ürün ailesi işe yarar ve karıştırılmamalıdır. Berraklaştırıcı, ince partikülleri filtrenin tutabileceği boyutta topaklar; su filtrasyonla temizlenir. Çöktürücü ise partikülleri tabana indirir ve bu çökeltinin süpürgeyle atığa alınması gerekir.",
            "en": "Water clouding for a while after shock chlorination is usually an expected result rather than a bad one: chlorine has broken down the organic load, and suspended dead particles have been released. Sunscreen, lotion, body oil, and the fine dust and pollen carried by the imbat wind add to them. Some of these particles are too small for the filter to catch, and they keep circulating through the pool. Two distinct product families help here, and they should not be confused. A clarifier clumps fine particles to a size the filter can retain; the water is then cleared by filtration. A flocculant, by contrast, drives the particles to the floor, and that sediment must be vacuumed to waste."
          },
          {
            "tr": "Seçim, bulanıklığın derecesine ve acelenize bağlıdır. Hafif ve orta bulanıklıkta filtre sağlamsa [berraklaştırıcı ürün](product:berraklastirici-quardex) yeterlidir ve havuz kullanımdan çıkmaz. Dibin hiç seçilmediği ağır vakalarda ise [çöktürücü kullanımı](product:cokturucu-selenoid) daha hızlı sonuç verir; ancak havuzun birkaç saat dinlendirilmesi, sonra çökeltinin dikkatle süpürülmesi ve kaybedilen suyun tamamlanması gerekir. Çöktürücü uygulanmış bir havuzda filtreyi normal konumda çalıştırmak çökeltiyi yeniden havalandırır ve emeği boşa çıkarır. Hangi ürünü kullanırsanız kullanın etiketteki dozaja uyun ve kimyasalları asla birbirine karıştırmayın; kimyasal daima suya eklenir, su kimyasalın üzerine değil.",
            "en": "The choice depends on how cloudy the water is and how quickly you need it clear. For light to moderate cloudiness with a sound filter, [a clarifier](product:berraklastirici-quardex) is enough and the pool stays in use. In severe cases where the floor is not visible at all, [using a flocculant](product:cokturucu-selenoid) gives faster results; however, the pool must be left to settle for several hours, the sediment then vacuumed carefully, and the lost water replaced. Running the filter in its normal position in a flocculated pool stirs the sediment back up and wastes the effort. Whichever product you use, follow the dose on the label and never mix chemicals with one another; chemicals are always added to water, never water onto the chemical."
          }
        ]
      },
      {
        "heading": {
          "tr": "Keskin klor kokusu gerçekten klor fazlalığı mıdır?",
          "en": "Is a sharp chlorine smell really too much chlorine?"
        },
        "paragraphs": [
          {
            "tr": "Hayır, tam tersidir. İyi dengelenmiş bir havuz neredeyse kokusuzdur. Havuz kenarında duyduğunuz o keskin, gözü yakan koku serbest klorun değil kloraminin, yani bağlı klorun kokusudur. Kloramin, klorun ter, idrar, kozmetik ve organik atıkla birleşmesiyle oluşan, dezenfeksiyon gücünü yitirmiş bir bileşiktir. Yani koku klorun çok olduğunu değil, çalışacak serbest klorun kalmadığını söyler. Bu yüzden koku duyulduğunda klor beslemesini kısmak sorunu büyütür; doğru refleks dengeyi düzeltmek ve gerekiyorsa kloraminleri parçalayacak bir şok uygulamasıdır. Aynı koku, gözde kızarıklık ve mayolarda solmayla birlikte geliyorsa tablo daha da nettir.",
            "en": "No, it is the opposite. A well-balanced pool is almost odourless. That sharp, eye-stinging smell at the poolside is not free chlorine but chloramine, that is, combined chlorine. Chloramine is a compound formed when chlorine combines with sweat, urine, cosmetics and organic waste, and it has lost its disinfecting power. In other words, the smell tells you not that there is too much chlorine but that there is no free chlorine left to work. Cutting back the chlorine feed when you notice the smell therefore makes the problem worse; the correct reflex is to restore balance and, if needed, apply a shock treatment that breaks the chloramines down. If the same smell comes with red eyes and faded swimwear, the picture is clearer still."
          },
          {
            "tr": "Bunu tahminle değil ölçümle doğrularsınız. Serbest klor suda iş görmeye hazır klordur; toplam klor ise serbest ve bağlı klorun toplamıdır. İkisi arasındaki fark size bağlı klor miktarını verir ve bu fark belirginse kloramin sorununuz var demektir. Basit tek renkli test şeritleri çoğu zaman yalnız toplam kloru gösterir, dolayısıyla bu ayrımı yapamaz; [hangi test kitinin ne ölçtüğünü karşılaştıran yazımız](post:havuz-test-kiti-karsilastirma) seçim için yol gösterir. Kronik kloramin sorunu yaşayan, yoğun kullanılan villa havuzlarında [bağlı klor gidericisi bir ürün](product:bagli-klor-poolbox) devreye alınabilir; ama kalıcı çözüm duş alışkanlığı, düzenli ölçüm ve yeterli filtrasyondur.",
            "en": "You confirm this by measurement, not guesswork. Free chlorine is the chlorine ready to do its job in the water; total chlorine is the sum of free and combined chlorine. The difference between the two gives you the amount of combined chlorine, and if that gap is significant you have a chloramine problem. Simple single-colour test strips often show only total chlorine and therefore cannot make this distinction; [our comparison of what each test kit actually measures](post:havuz-test-kiti-karsilastirma) will guide your choice. In heavily used villa pools with a chronic chloramine problem, [a combined-chlorine remover](product:bagli-klor-poolbox) can be brought in; but the lasting solution is a showering habit, regular measurement and sufficient filtration."
          }
        ]
      },
      {
        "heading": {
          "tr": "Bulanık suda hangi sırayla teşhis yapılmalı?",
          "en": "In what order should a cloudy pool be diagnosed?"
        },
        "paragraphs": [
          {
            "tr": "Bulanıklıkta en pahalı hata, nedeni bulmadan sırayla kimyasal denemektir; her deneme suyun dengesini daha da bozar. Aşağıdaki sıra mekanikten kimyasala doğru ilerler ve çoğu vakayı ilk üç adımda çözer. Her adımdan sonra havuzu en az bir tam filtrasyon devri boyunca çalıştırıp sonucu görmeden bir sonrakine geçmeyin.",
            "en": "The most expensive mistake with cloudy water is trying chemicals one after another before finding the cause; each attempt upsets the water balance further. The sequence below moves from mechanical to chemical and resolves most cases within the first three steps. After each step, run the pool for at least one full turnover and see the result before moving to the next."
          }
        ],
        "bullets": [
          {
            "tr": "Sepetleri ve filtreyi kontrol edin, ters yıkayın, filtrasyon süresini uzatın.",
            "en": "Check the baskets and the filter, backwash, and extend the filtration time."
          },
          {
            "tr": "pH ve toplam alkaliniteyi ölçün, önce alkaliniteyi sonra pH'ı hedef aralığa çekin.",
            "en": "Measure pH and total alkalinity, correcting alkalinity first and then pH into the target range."
          },
          {
            "tr": "Serbest ve toplam kloru ayrı ayrı ölçün; aradaki fark büyükse kloramin sorununu ele alın.",
            "en": "Measure free and total chlorine separately; if the gap is large, address the chloramine problem."
          },
          {
            "tr": "Renk tonuna bakın: pas, mavi-yeşil veya gri gölge varsa metal şüphesiyle ilerleyin.",
            "en": "Look at the colour cast: rust, blue-green or grey shades point to a metal problem."
          },
          {
            "tr": "Kalsiyum sertliğini ölçtürün; yüksekse kısmi su değişimi tek gerçekçi çözümdür.",
            "en": "Have calcium hardness measured; if it is high, partial water replacement is the only realistic solution."
          },
          {
            "tr": "Denge ve filtrasyon tamamsa geriye kalan ince partikül için berraklaştırıcı ya da çöktürücüye geçin.",
            "en": "If balance and filtration are sound, move on to a clarifier or flocculant for the remaining fine particles."
          }
        ]
      },
      {
        "heading": {
          "tr": "Ne zaman uzman çağırmalısınız?",
          "en": "When should you call a professional?"
        },
        "paragraphs": [
          {
            "tr": "Doğru sırayı uyguladığınız halde su bir haftadır berraklaşmıyorsa, denge değerleri tutmuyor ve her ölçümde farklı çıkıyorsa ya da ters yıkama artık hiçbir iyileşme sağlamıyorsa sorun su kimyasında değil ekipmandadır. Kum yaşlanması, yetersiz pompa debisi, hatalı vana konumu ve gizli sirkülasyon kaybı bu tabloyu üretir. Tekrarlayan leke, kalıcı kireç kabuğu ve sürekli kloramin kokusu da yerinde inceleme ister. Çeşme, Alaçatı ve Urla'daki villa havuzlarında sezon boyu düzenli ölçüm ve servis, bu sorunların büyümeden çözülmesini sağlar; [havuz bakım hizmetimiz](page:maintenance) kapsamında su dengesi, filtrasyon ve ekipman tek bir rutinde takip edilir. [Çeşme'deki havuz bakımı](area:cesme) için keşif ve ölçümle başlanır.",
            "en": "If the water has not cleared for a week despite following the correct order, if the balance values will not hold and read differently at every test, or if backwashing no longer brings any improvement, the problem lies in the equipment rather than the water chemistry. Ageing sand, insufficient pump flow, a wrong valve position and hidden circulation losses all produce this picture. Recurring stains, a persistent scale crust and a constant chloramine smell also call for an on-site inspection. In villa pools across Çeşme, Alaçatı and Urla, regular measurement and service through the season keeps these problems from growing; under [our pool maintenance service](page:maintenance), water balance, filtration and equipment are tracked in a single routine. [Pool maintenance in Çeşme](area:cesme) starts with a site visit and a full set of measurements."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Havuz suyu bulanıksa havuza girilir mi?",
          "en": "Can you swim in a pool with cloudy water?"
        },
        "a": {
          "tr": "Hafif bulanıklıkta serbest klor 1–3 ppm aralığındaysa ve pH 7,2–7,6 arasındaysa yüzmek genellikle sakıncalı görülmez. Ancak havuzun dibi seçilemiyorsa girilmemelidir; bu bir güvenlik sorunudur, çünkü suyun altındaki bir kişi görülemez. Ayrıca belirgin bulanıklık dezenfeksiyonun yetersiz olduğunun işareti olabilir. Önce serbest klor ve pH ölçülmeli, değerler tutmuyorsa havuz berraklaşana kadar kullanım durdurulmalıdır.",
          "en": "With light cloudiness, swimming is generally not considered a problem if free chlorine is between 1 and 3 ppm and pH is between 7.2 and 7.6. However, if the bottom of the pool is not visible, no one should enter; this is a safety issue, because a person underwater cannot be seen. Marked cloudiness may also indicate inadequate disinfection. Measure free chlorine and pH first, and if the values are off, keep the pool out of use until it clears."
        }
      },
      {
        "q": {
          "tr": "Bulanık havuz suyu ne kadar sürede berraklaşır?",
          "en": "How long does it take for cloudy pool water to clear?"
        },
        "a": {
          "tr": "Neden doğru bulunduysa hafif bulanıklık genellikle bir ila iki tam filtrasyon devrinde, yani havuzun büyüklüğüne göre bir gün içinde açılır. Berraklaştırıcı kullanılan orta düzey vakalarda iki güne kadar uzayabilir. Çöktürücü uygulanan ağır vakalarda birkaç saatlik dinlenme, ardından dikkatli süpürme gerekir ve işlem bir günde tamamlanır. Filtre yorgunsa hiçbir kimyasal süreyi kısaltmaz.",
          "en": "If the cause has been correctly identified, light cloudiness usually clears within one or two full turnovers, that is within a day depending on pool size. Moderate cases treated with a clarifier can take up to two days. Severe cases treated with a flocculant need a few hours of settling followed by careful vacuuming, and the job is completed within a day. If the filter is exhausted, no chemical will shorten the process."
        }
      },
      {
        "q": {
          "tr": "Klor kokusunu azaltmak için klor dozunu düşürmeli miyim?",
          "en": "Should I reduce the chlorine dose to cut the chlorine smell?"
        },
        "a": {
          "tr": "Hayır. Keskin koku serbest klordan değil, dezenfeksiyon gücünü yitirmiş bağlı klordan, yani kloraminden gelir. Dozu düşürmek serbest klor açığını büyütür ve koku artar. Doğru yaklaşım serbest ve toplam kloru ayrı ölçmek, aradaki farkı görmek, pH'ı 7,2–7,6 aralığına çekmek ve gerekiyorsa kloraminleri parçalayacak bir şok uygulaması yapmaktır. Filtrasyon süresini uzatmak da kalıcı fayda sağlar.",
          "en": "No. The sharp smell comes not from free chlorine but from combined chlorine, the chloramines that have lost their disinfecting power. Lowering the dose widens the free-chlorine deficit and the smell intensifies. The right approach is to measure free and total chlorine separately, look at the gap, bring pH into the 7.2–7.6 range, and if needed apply a shock treatment that breaks the chloramines down. Extending filtration time also brings lasting benefit."
        }
      },
      {
        "q": {
          "tr": "Berraklaştırıcı ile çöktürücü arasındaki fark nedir?",
          "en": "What is the difference between a clarifier and a flocculant?"
        },
        "a": {
          "tr": "Berraklaştırıcı, askıdaki ince partikülleri filtrenin tutabileceği büyüklükte topaklar; su normal filtrasyonla temizlenir ve havuz kullanımda kalır. Çöktürücü ise partikülleri tabana indirir; çökelti filtreden geçirilmeden süpürgeyle doğrudan atığa alınmalıdır. Çöktürücü daha hızlıdır ama havuzu birkaç saat dinlendirmeyi, su kaybını tamamlamayı ve dikkatli süpürmeyi gerektirir. İkisi aynı anda kullanılmaz.",
          "en": "A clarifier clumps fine suspended particles to a size the filter can retain; the water is cleared by normal filtration and the pool stays in use. A flocculant instead drives the particles to the floor; that sediment must be vacuumed directly to waste rather than through the filter. A flocculant is faster but requires several hours of settling, topping the water back up, and careful vacuuming. The two are never used at the same time."
        }
      }
    ]
  },
  "havuz-pompasi-arizalari": {
    "title": {
      "tr": "Havuz Pompası Arızaları: Belirtiler, Olası Nedenler ve Ne Zaman Uzman Gerekir",
      "en": "Pool Pump Faults: Symptoms, Likely Causes and When to Call a Professional"
    },
    "seoTitle": {
      "tr": "Havuz Pompası Arızaları Rehberi",
      "en": "Pool Pump Fault Guide"
    },
    "excerpt": {
      "tr": "Havuz pompası ve filtrasyon arızalarını belirtiden teşhise okuyun: çalışmama, su basmama, zayıf akış, gürültü, sızıntı ve durup kalkma nedenleri.",
      "en": "Read pool pump and filtration faults from symptom to diagnosis: no start, no prime, weak flow, noise, leaks and short cycling explained."
    },
    "intro": {
      "tr": "Havuz pompası arızaları çoğu zaman aniden ortaya çıkmaz; pompa günler öncesinden ses, akış ya da basınç üzerinden sinyal verir. Bu sinyalleri doğru okumak, küçük bir tıkanıklıkla motor yenilemesi arasındaki farkı belirler. Bu yazıda havuz pompası ve filtrasyon sisteminde en sık karşılaşılan arızaları belirtiye göre sıraladık: pompanın hiç çalışmaması, çalışıp su basmaması, akışın zayıflaması, gürültü ve titreşim, sızıntı ve sürekli durup kalkma. Manometrenin ne anlattığına ve ters yıkama zamanının nasıl anlaşıldığına da ayrı bir başlık ayırdık. Her bölümde ev sahibinin güvenle yapabileceği kontrollerle yetkili kişi gerektiren işleri net biçimde ayırdık.",
      "en": "Pool pump faults rarely appear out of nowhere; the pump signals trouble for days through sound, flow or pressure. Reading those signals correctly is what separates a minor blockage from a motor replacement. In this article we have organised the most common pool pump and filtration faults by symptom: the pump not starting at all, running without priming, weakening flow, noise and vibration, leaks and constant short cycling. We have also given a separate heading to what the pressure gauge tells you and how to know when to backwash. In every section we clearly separate the checks a homeowner can safely make from the work that requires a qualified professional."
    },
    "sections": [
      {
        "heading": {
          "tr": "Havuz pompası hiç çalışmıyorsa ilk olarak neye bakılır?",
          "en": "If the pool pump will not start at all, what should be checked first?"
        },
        "paragraphs": [
          {
            "tr": "Pompa hiç tepki vermiyorsa sorun genellikle üç başlıkta toplanır: elektrik beslemesi, motorun termik koruması ve sıkışmış rotor. Elektrik tarafında sigortanın atması, kaçak akım rölesinin düşmesi ya da zaman saatinin yanlış programlanması sık görülür. Motor ısınarak kendini korumaya aldıysa soğuyana kadar çalışmaz; bu çoğunlukla sıcak ve havalandırması yetersiz bir makine dairesine işaret eder. Uzun süre durmuş bir pompada ise mil ve rotor oturabilir, motor uğuldar ama dönmez. En önemli kural şudur: panoya, kabloya ya da motora dokunulacak her işten önce enerji kesilmeli ve müdahale yetkili kişi tarafından yapılmalıdır.",
            "en": "If the pump gives no response at all, the cause usually falls into three groups: the electrical supply, the motor's thermal protection, and a seized rotor. On the electrical side, a blown fuse, a tripped residual-current device or a wrongly programmed timer are common. If the motor has overheated into self-protection, it will not run until it cools; this usually points to a hot, poorly ventilated plant room. In a pump left idle a long time, the shaft and rotor can seize, so the motor hums without turning. The overriding rule: before any work touching the panel, cabling or motor, the power must be isolated and the work carried out by a qualified person."
          },
          {
            "tr": "Ev sahibinin güvenle bakabileceği tek şey, sigortanın ve zaman saatinin konumudur. Sigorta atmaya devam ediyorsa ya da kaçak akım rölesi tekrar tekrar düşüyorsa bu bir kullanım hatası değil, sistemin size bir yalıtım veya motor sorunu bildirmesidir; tekrar tekrar kaldırmak yerine servis çağırmak doğrudur. Çeşme yarımadasında tuzlu ve nemli hava pano içi bağlantılarda zamanla oksitlenmeye yol açabilir; bu nedenle elektrik bağlantılarının periyodik gözden geçirilmesi [düzenli havuz bakımı](page:maintenance) programının doğal bir parçasıdır.",
            "en": "The only things a homeowner can safely look at are the fuse and the timer setting. If the fuse keeps blowing or the residual-current device trips repeatedly, that is not a usage error but the system reporting an insulation or motor problem; calling a service technician is the right move rather than resetting it again and again. On the Çeşme peninsula, salty, humid air can gradually oxidise connections inside the panel, which is why periodic inspection of electrical connections is a natural part of a [regular pool maintenance](page:maintenance) programme."
          }
        ]
      },
      {
        "heading": {
          "tr": "Pompa çalışıyor ama su basmıyorsa sorun nerede?",
          "en": "The pump runs but will not prime — where is the problem?"
        },
        "paragraphs": [
          {
            "tr": "Motorun dönmesine rağmen su dolaşmıyorsa neredeyse her zaman emiş hattına hava karışmıştır. En sık görülen dört neden şunlardır: su seviyesinin skimmer ağzının altına düşmesi, ön filtre sepetinin yaprak ve saçla tıkanması, kapak contasının kurumuş ya da yerinden çıkmış olması ve emiş hattındaki bir rakorun gevşemesi. Seviye skimmer ağzını örtmediğinde skimmer sürekli hava yutar; pompa haznesinde su yerine hava birikir ve çark boşa döner. Conta kurumuşsa hazne içinde suyun düşük kaldığını ve kapağın altında kabarcıklar oluştuğunu görürsünüz.",
            "en": "If the motor turns but no water circulates, air has almost always entered the suction line. The four most common causes are: the water level dropping below the skimmer mouth, the strainer basket clogged with leaves and hair, a dried or displaced lid gasket, and a loosened union on the suction line. When the level no longer covers the skimmer mouth, the skimmer continuously draws air; the pump housing fills with air instead of water and the impeller spins dry. If the gasket has dried out, you will see the water in the housing staying low, with bubbles forming under the lid."
          },
          {
            "tr": "Bu belirtilerin hepsinde tek bir şart geçerlidir: pompa kuru çalıştırılmamalıdır. Su basmayan bir pompayı ısrarla açık tutmak, salmastrayı ve motoru kısa sürede kalıcı biçimde yıpratır. Seviyeyi ve sepeti kontrol etmek ev sahibinin güvenle yapabileceği işlerdendir; conta değişimi ve hat üzerinde iş yapmak ise servisin alanına girer. Su seviyesi sürekli düşüyorsa buharlaşmanın ötesinde bir durum olabilir; bunun teşhisi [havuz su kaçağı tespiti](post:havuz-su-kacagi-tamiri) yazımızda anlatılıyor.",
            "en": "One condition applies to all of these symptoms: the pump must never run dry. Insisting on keeping a pump running when it will not prime quickly causes permanent damage to the mechanical seal and the motor. Checking the level and the basket is safely within a homeowner's reach; replacing gaskets and working on the pipework belong to the service technician. If the water level keeps dropping beyond normal evaporation, something else may be going on; diagnosing that is covered in our article on [pool leak detection](post:havuz-su-kacagi-tamiri)."
          }
        ]
      },
      {
        "heading": {
          "tr": "Akış zayıfladığında manometre size ne anlatır?",
          "en": "When flow weakens, what is the pressure gauge telling you?"
        },
        "paragraphs": [
          {
            "tr": "Zayıf akışın kaynağını bulmanın en pratik yolu, filtre üzerindeki manometreyi okumaktır. Burada mutlak bir rakam değil, kendi havuzunuzun referans değeri önemlidir: filtre yeni temizlenmişken ibrenin nerede durduğunu bir kez not edin. Basınç bu temiz filtre değerinin belirgin biçimde üzerine çıktıysa filtre yatağı kirlenmiştir ve ters yıkama zamanı gelmiştir. Tersine, temiz değerin altına düştüyse sorun emiş tarafındadır: sepetler tıkalıdır, bir vana kapalı kalmıştır veya seviye düşmüştür.",
            "en": "The most practical way to find the source of weak flow is to read the pressure gauge on the filter. What matters is not an absolute figure but your own pool's reference value: note once where the needle sits when the filter has just been cleaned. If the pressure has risen noticeably above that clean-filter value, the filter bed has become dirty and it is time to backwash. If instead it has fallen below the clean value, the problem is on the suction side: the baskets are blocked, a valve has been left closed, or the level has dropped."
          },
          {
            "tr": "Akış düşüşünün sıkça atlanan bir nedeni de vana konumudur. Çok yollu vana ters yıkama ya da atık konumunda bırakıldıysa veya dip emiş ile skimmer arasındaki denge vanası tamamen kapatıldıysa, sistemde hiçbir arıza olmadan akış zayıflar. Geri dönüş nozullarının kireç ya da kirle daralması da dolaşımı bozar. Filtre yatağı yıllar içinde topaklaşır ve ters yıkama artık basıncı düşürmezse, kum yenileme ya da [kum filtresi](product:kum-filtresi-600) değişimi gündeme gelir.",
            "en": "A frequently overlooked cause of reduced flow is valve position. If the multiport valve has been left in backwash or waste, or the balancing valve between the main drain and the skimmer has been fully closed, flow weakens without any fault in the system at all. Return nozzles narrowed by scale or debris disrupt circulation too. If the filter bed channels and compacts over the years so that backwashing no longer brings the pressure down, replacing the media or the [sand filter](product:kum-filtresi-600) itself comes onto the agenda."
          }
        ]
      },
      {
        "heading": {
          "tr": "Pompadan gelen gürültü ve titreşim neyin habercisi?",
          "en": "What do noise and vibration from the pump indicate?"
        },
        "paragraphs": [
          {
            "tr": "Sesin karakteri, arızanın yerini şaşırtıcı ölçüde iyi tarif eder. Pompanın içinden çakıl taşı dönüyormuş gibi bir çıtırtı geliyorsa bu genellikle kavitasyondur: pompa yeterince su bulamadığı için emiş tarafında kabarcıklar oluşur ve çark üzerinde patlar. Nedeni neredeyse her zaman bir emiş kısıtıdır; tıkalı sepet, düşük su seviyesi ya da kısmen kapalı bir emiş vanası. Kavitasyon çarkı ve salmastrayı hızla aşındırdığı için sesi duyduğunuzda emiş tarafını kontrol etmek gerekir.",
            "en": "The character of the sound describes the location of the fault surprisingly well. A rattling noise, as if gravel were tumbling inside the pump, is usually cavitation: because the pump cannot find enough water, bubbles form on the suction side and collapse against the impeller. The cause is almost always a suction restriction — a blocked basket, a low water level or a partly closed suction valve. Because cavitation quickly erodes the impeller and the seal, the suction side needs checking as soon as you hear it."
          },
          {
            "tr": "Buna karşılık sürekli, metalik ve giderek yükselen bir uğultu duyuyorsanız motor yataklarının aşınmasından şüphelenilir; bu ses genellikle motorun normalden çok daha fazla ısınmasıyla birlikte gelir ve yatak değişimi ya da motor yenileme gerektiren bir servis işidir. Üçüncü ihtimal daha masumdur: pompanın kaidesine gevşek bağlanması veya titreşim takozlarının yorulması, sesin tüm makine dairesine yayılmasına yol açar. Gevşek montajın erken fark edilmesi, titreşimin boru bağlantılarını ve rakorları yormasını önler.",
            "en": "By contrast, a continuous, metallic hum that grows louder over time points to worn motor bearings; this sound usually comes with the motor running far hotter than normal and calls for bearing replacement or a motor overhaul, which is service work. The third possibility is more benign: a pump loosely fixed to its base, or tired anti-vibration mounts, lets the noise carry through the whole plant room. Spotting loose mounting early prevents vibration from fatiguing pipe connections and unions."
          }
        ]
      },
      {
        "heading": {
          "tr": "Pompanın çevresinde su görüyorsanız sızıntı nereden gelir?",
          "en": "If you see water around the pump, where is the leak coming from?"
        },
        "paragraphs": [
          {
            "tr": "Pompanın altında biriken su, kaynağına göre farklı aciliyetler taşır. Motorla pompa gövdesinin birleştiği noktadan, yani milin çıktığı yerden damlıyorsa mekanik salmastra yorulmuştur. Bu, pompalarda en sık yenilenen parçalardan biridir ve zamanında değiştirilmezse su motorun içine sızarak çok daha pahalı bir arızaya dönüşür. Sızıntı kapak çevresinden geliyorsa çoğunlukla kurumuş, çatlamış ya da tam oturmamış bir kapak contası söz konusudur. Giriş-çıkış rakorlarından gelen damlamalarda ise contanın yorulduğu ya da rakorun gevşediği anlaşılır.",
            "en": "Water pooling under the pump carries different levels of urgency depending on its source. If it drips from where the motor meets the pump body — where the shaft emerges — the mechanical seal has worn out. This is one of the most frequently renewed parts on a pump, and if it is not replaced in time, water seeps into the motor and turns into a far more expensive fault. If the leak comes from around the lid, the usual culprit is a dried, cracked or improperly seated lid gasket. Drips from the inlet and outlet unions indicate either a tired gasket or a loosened union."
          },
          {
            "tr": "Sızıntının yerini tespit etmek ev sahibinin yapabileceği bir gözlemdir; parça değişimi ise değildir. Salmastra değişimi pompanın sökülmesini ve elektrikli ekipman üzerinde çalışmayı gerektirir; enerji kesilerek ve yetkili kişi tarafından yapılmalıdır. Motorun üzerine su damlıyorsa pompayı çalıştırmadan servisi aramak en güvenli yoldur. Şunu da not edin: makine dairesindeki küçük bir damlama havuzun su seviyesini hissedilir biçimde düşürmez; seviye belirgin düşüyorsa nedeni başka yerdedir.",
            "en": "Locating a leak is something a homeowner can observe; replacing parts is not. Renewing a mechanical seal requires dismantling the pump and working on electrical equipment; it must be done with the power isolated and by a qualified person. If water is dripping onto the motor, the safest course is to leave the pump off and call a technician. Note too that a small drip in the plant room will not noticeably lower the pool's water level; if the level is dropping markedly, the cause lies elsewhere."
          }
        ]
      },
      {
        "heading": {
          "tr": "Pompa sürekli durup kalkıyorsa ne oluyor?",
          "en": "If the pump keeps stopping and starting, what is happening?"
        },
        "paragraphs": [
          {
            "tr": "Pompanın bir süre çalışıp kendiliğinden durması ve sonra tekrar devreye girmesi klasik bir aşırı ısınma tablosudur. Motorun içindeki termik koruma, sıcaklık güvenli sınırı aştığında devreyi keser ve motor soğuyunca yeniden açar. Bu döngü bir arıza değil, bir uyarıdır. En sık nedenler makine dairesinin havalandırmasının yetersiz olması, pompanın üzerinin örtülmesi, motor fan kapağının tıkanması, emiş kısıtı nedeniyle pompanın zorlanması ve elektrik besleme sorunlarıdır. Kapalı ve güneş gören bir makine dairesinde bu tablo yazın belirgin biçimde artar.",
            "en": "A pump that runs for a while, stops by itself and comes back on later is a classic picture of overheating. The thermal protector inside the motor cuts the circuit when temperature exceeds a safe limit and restores it once the motor cools. This cycle is not a fault but a warning. The most common causes are poor ventilation in the plant room, the pump being covered over, a clogged motor fan cover, the pump straining because of a suction restriction, and problems with the electrical supply. In a closed plant room exposed to sun, this becomes markedly more frequent in summer."
          },
          {
            "tr": "Aşağıdaki kontroller, servisi aramadan önce tabloyu netleştirmenize yardımcı olur ve hiçbiri elektrikli aksama dokunmayı gerektirmez:",
            "en": "The checks below help you clarify the picture before calling a technician, and none of them require touching electrical components:"
          }
        ],
        "bullets": [
          {
            "tr": "Makine dairesinin havalandırma menfezleri açık mı, pompanın üzeri örtülü mü?",
            "en": "Are the plant room's ventilation grilles open, and is anything covering the pump?"
          },
          {
            "tr": "Motorun arkasındaki fan kapağı toz, yaprak veya böcek yuvasıyla tıkanmış mı?",
            "en": "Is the fan cover at the back of the motor blocked by dust, leaves or nests?"
          },
          {
            "tr": "Skimmer ve pompa ön filtre sepetleri temiz mi, su seviyesi skimmer ağzını örtüyor mu?",
            "en": "Are the skimmer and pump strainer baskets clean, and does the water level cover the skimmer mouth?"
          },
          {
            "tr": "Manometre, temiz filtre değerinin çok üzerinde mi duruyor?",
            "en": "Is the pressure gauge sitting well above the clean-filter value?"
          }
        ]
      },
      {
        "heading": {
          "tr": "Hangi kontroller size ait, hangi işler uzman ister?",
          "en": "Which checks are yours to make, and which jobs need a professional?"
        },
        "paragraphs": [
          {
            "tr": "Bu ayrımı baştan netleştirmek hem güvenlik hem maliyet açısından belirleyicidir. Ev sahibi olarak güvenle yapabileceğiniz işler gözlem ve temizlik düzeyindedir: su seviyesini kontrol etmek, sepetleri boşaltmak, manometreyi okumak, vana konumlarını doğrulamak ve sesi, sızıntıyı, ısınmayı not etmek. Buna karşılık pano ve kablo işleri, motor ve yatak müdahaleleri, salmastra ve conta değişimi, tesisat üzerinde sökme-takma, kum yatağı yenileme ve pompa değişimi yetkili kişinin işidir. Pompa değişimi gündeme geldiğinde seçim yalnızca marka meselesi değildir; havuz hacmi, tesisat çapı ve filtre kapasitesi birlikte değerlendirilir. Yanlış seçilmiş bir [havuz pompası](product:pompa-1hp), ya suyu yeterince çeviremediği için berraklık sorunlarına ya da gereksiz enerji tüketimine yol açar.",
            "en": "Drawing this line clearly from the outset matters for both safety and cost. As a homeowner, what you can safely do stays at the level of observation and cleaning: checking the water level, emptying the baskets, reading the pressure gauge, confirming valve positions, and noting sounds, leaks and heat. Panel and cabling work, motor and bearing interventions, seal and gasket replacement, dismantling pipework, renewing filter media and changing the pump itself, on the other hand, are the qualified person's job. When pump replacement comes onto the agenda, the choice is not simply a matter of brand; pool volume, pipework diameter and filter capacity are weighed together. A wrongly specified [pool pump](product:pompa-1hp) leads either to clarity problems because the water is not turned over enough, or to needless energy consumption."
          }
        ]
      },
      {
        "heading": {
          "tr": "Pompanın ömrünü uzatan alışkanlıklar nelerdir?",
          "en": "Which habits extend a pump's working life?"
        },
        "paragraphs": [
          {
            "tr": "Pompa arızalarının önemli bir kısmı, basit ve düzenli alışkanlıklarla hiç yaşanmayacak arızalardır. Sepetin düzenli boşaltılması, su seviyesinin skimmer ağzını örtecek şekilde korunması ve pompanın hiçbir koşulda kuru çalıştırılmaması, tek başına sorunların çoğunu önler. Bu kontrollerin diğer rutin işlerle nasıl birleştiğini [haftalık havuz bakım rutini](post:havuz-bakimi-nasil-yapilir) yazımızda bulabilirsiniz. Çeşme, Alaçatı ve Ilıca'da imbat rüzgârının taşıdığı toz ve yaprak yükü sepetleri beklenenden hızlı doldurduğu için [Çeşme'deki villa havuzlarında](area:cesme) sepet kontrolünün sıklığı yaz boyunca artırılmalıdır. Tuzlu deniz havası ise makine dairesindeki metal aksamı ve elektrik bağlantılarını yorar.",
            "en": "A significant share of pump faults would never occur given simple, regular habits. Emptying the basket routinely, keeping the water level covering the skimmer mouth, and never running the pump dry prevent most problems on their own. You can see how these checks combine with other routine tasks in our article on the [weekly pool maintenance routine](post:havuz-bakimi-nasil-yapilir). In Çeşme, Alaçatı and Ilıca, the dust and leaf load carried by the imbat wind fills baskets faster than expected, so for [villa pools in Çeşme](area:cesme) basket checks should be made more frequently through the summer. Salty sea air, meanwhile, wears on metal fittings and electrical connections in the plant room."
          }
        ],
        "bullets": [
          {
            "tr": "Sepetleri düzenli boşaltın; dolu sepet hem akışı düşürür hem de pompayı zorlar.",
            "en": "Empty the baskets regularly; a full basket both reduces flow and strains the pump."
          },
          {
            "tr": "Su seviyesini skimmer ağzını örtecek aralıkta tutun, özellikle sıcak ve rüzgârlı günlerde kontrol edin.",
            "en": "Keep the water level within the range that covers the skimmer mouth, checking especially on hot, windy days."
          },
          {
            "tr": "Pompayı asla kuru çalıştırmayın; su basmıyorsa durdurun ve nedenini bulun.",
            "en": "Never run the pump dry; if it will not prime, stop it and find out why."
          },
          {
            "tr": "Temiz filtre basıncını bir kez not edin ve manometreyi bu referansa göre okuyun.",
            "en": "Note the clean-filter pressure once and read the gauge against that reference."
          },
          {
            "tr": "Makine dairesini havalandırın, pompanın üzerini örtmeyin, fan kapağını temiz tutun.",
            "en": "Ventilate the plant room, do not cover the pump, and keep the fan cover clean."
          },
          {
            "tr": "Kış boyunca havuz kullanılmayacaksa pompa, filtre ve hatların suyunu tahliye edin; donma riski en sinsi pompa arızası nedenidir. Kapatma adımlarının tamamı [havuzu kışa hazırlama](post:havuzu-kisa-hazirlama) yazısında.",
            "en": "If the pool will not be used through winter, drain the pump, filter and lines; freezing is the most insidious cause of pump failure. The full shutdown sequence is in our article on [winterising the pool](post:havuzu-kisa-hazirlama)."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": {
          "tr": "Pompa çalışıyor ama su basmıyor, ne yapmalıyım?",
          "en": "The pump runs but will not prime — what should I do?"
        },
        "a": {
          "tr": "Pompayı durdurun ve üç şeyi kontrol edin: su seviyesi skimmer ağzını örtüyor mu, sepetler tıkalı mı, pompa kapağı ve contası düzgün oturmuş mu. Bunlar düzgünse emiş hattında hava kaçağı vardır ve servis gerekir. Pompayı su basmadan çalışır hâlde bırakmayın; kuru çalışma salmastrayı ve motoru kalıcı olarak yıpratır.",
          "en": "Stop the pump and check three things: does the water level cover the skimmer mouth, are the baskets blocked, and are the pump lid and its gasket seated properly. If all three are fine, there is an air leak on the suction line and a technician is needed. Do not leave the pump running while it fails to prime; dry running permanently damages the mechanical seal and the motor."
        }
      },
      {
        "q": {
          "tr": "Filtrenin manometresi yükseldiğinde ne anlama gelir?",
          "en": "What does it mean when the filter's pressure gauge rises?"
        },
        "a": {
          "tr": "Basıncın, filtre yeni temizlenmişken not ettiğiniz referans değerin belirgin biçimde üzerine çıkması, filtre yatağının kirlendiğini ve ters yıkama zamanının geldiğini gösterir. Tersine bu değerin altına düşmüşse sorun emiş tarafındadır: sepet tıkalı, vana kapalı ya da seviye düşük olabilir. Bu yüzden kendi havuzunuzun temiz filtre değerini bir kez not etmek çok işe yarar.",
          "en": "When the pressure rises noticeably above the reference value you noted with a freshly cleaned filter, it shows that the filter bed has become dirty and it is time to backwash. If it has instead fallen below that value, the problem is on the suction side: a blocked basket, a closed valve or a low water level. This is why noting your own pool's clean-filter value once is so useful."
        }
      },
      {
        "q": {
          "tr": "Havuz pompası ne zaman servis ister, hangi işleri kendim yapabilirim?",
          "en": "When does a pool pump need a technician, and what can I do myself?"
        },
        "a": {
          "tr": "Kendiniz güvenle yapabileceğiniz işler gözlem ve temizliktir: su seviyesi kontrolü, sepet boşaltma, manometre okuma ve vana konumu doğrulama. Elektrik panosu ve kablo işleri, motor ve yatak müdahaleleri, salmastra ile conta değişimi, tesisat sökme-takma ve pompa değişimi yetkili kişi ister. Her elektrikli müdahaleden önce pompanın enerjisinin kesilmiş olması şarttır.",
          "en": "What you can safely do yourself is observation and cleaning: checking the water level, emptying baskets, reading the pressure gauge and confirming valve positions. Panel and cabling work, motor and bearing interventions, seal and gasket replacement, dismantling pipework and changing the pump all require a qualified person. Before any electrical work, the pump must be isolated from power."
        }
      },
      {
        "q": {
          "tr": "Pompa çalışırken çakıl sesi geliyor, bu normal mi?",
          "en": "The pump makes a gravel-like noise while running — is that normal?"
        },
        "a": {
          "tr": "Hayır. Pompanın içinden çakıl dönüyormuş gibi gelen çıtırtı genellikle kavitasyondur ve pompanın yeterince su bulamadığını gösterir. Nedeni çoğunlukla tıkalı bir sepet, düşük su seviyesi ya da kısmen kapalı bir emiş vanasıdır. Bu ses göz ardı edilirse çark ve salmastra hızla aşınır; önce emiş tarafını kontrol edin, düzelmiyorsa servis çağırın.",
          "en": "No. A rattling sound, as if gravel were tumbling inside the pump, is usually cavitation and shows that the pump cannot find enough water. The cause is most often a blocked basket, a low water level or a partly closed suction valve. Ignored, this noise quickly erodes the impeller and the seal; check the suction side first, and call a technician if it does not resolve."
        }
      }
    ]
  },
};
// PROSE_END

// Newest first — the list and sitemap read this order.
export const posts: Post[] = META.map((m) => ({ ...m, ...PROSE[m.slug] })).sort(
  (a, b) => (a.date < b.date ? 1 : -1),
);

export const getPost = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);

// ---- contextual internal links ----
// Paragraphs and bullets may carry  [anchor](kind:target)  tokens, rendered as
// in-sentence links by components/blog/RichText. Kinds: product | post | area | page.

export const LINK_TOKEN = /\[([^\]]+)\]\((product|post|area|page):([a-z0-9-]+)\)/;

/** Static pages an article may point at via  page:<key>. */
export const PAGE_TARGETS = {
  construction: '/construction',
  maintenance: '/maintenance',
  products: '/products',
  projects: '/projects',
  contact: '/contact',
  'service-areas': '/service-areas',
} as const;
export type PageKey = keyof typeof PAGE_TARGETS;

/** Prose with the link syntax stripped to its anchor text (for plain-text uses). */
export const plainText = (s: string): string =>
  s.replace(new RegExp(LINK_TOKEN.source, 'g'), '$1');

// Build-time guard: every link target must exist. sitemap.ts imports this
// module, so a typo'd slug fails `next build` instead of shipping a broken link.
(function validateLinks() {
  const postSlugs = new Set(META.map((m) => m.slug));
  const exists: Record<string, (t: string) => boolean> = {
    product: (t) => !!getProduct(t),
    post: (t) => postSlugs.has(t),
    area: (t) => !!getDistrict(t),
    page: (t) => t in PAGE_TARGETS,
  };
  const bad: string[] = [];
  for (const p of posts) {
    const texts = p.sections.flatMap((s) => [...s.paragraphs, ...(s.bullets ?? [])]);
    for (const l of texts) {
      for (const text of [l.tr, l.en]) {
        for (const m of text.matchAll(new RegExp(LINK_TOKEN.source, 'g'))) {
          if (!exists[m[2]](m[3])) bad.push(`${p.slug}: ${m[2]}:${m[3]}`);
        }
      }
    }
  }
  if (bad.length) throw new Error(`Broken blog links:\n${bad.join('\n')}`);
})();

// ---- localisation ----

export type LocalizedSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type LocalizedPost = {
  slug: string;
  category: string;
  date: string;
  updated: string;
  readMinutes: number;
  cover: string;
  relatedService: ServiceHref;
  relatedServiceLabel: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  intro: string;
  sections: LocalizedSection[];
  faq: { q: string; a: string }[];
};

export const localize = (l: L, locale: string): string => (locale === 'en' ? l.en : l.tr);

export function localizePost(p: Post, locale: string): LocalizedPost {
  const pick = (l: L) => localize(l, locale);
  return {
    slug: p.slug,
    category: pick(p.category),
    date: p.date,
    updated: p.updated,
    readMinutes: p.readMinutes,
    cover: p.cover,
    relatedService: p.relatedService,
    relatedServiceLabel: pick(p.relatedServiceLabel),
    title: pick(p.title),
    seoTitle: pick(p.seoTitle),
    excerpt: pick(p.excerpt),
    intro: pick(p.intro),
    sections: p.sections.map((s) => ({
      heading: pick(s.heading),
      paragraphs: s.paragraphs.map(pick),
      ...(s.bullets ? { bullets: s.bullets.map(pick) } : {}),
    })),
    faq: p.faq.map((f) => ({ q: pick(f.q), a: pick(f.a) })),
  };
}
