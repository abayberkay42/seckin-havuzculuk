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
