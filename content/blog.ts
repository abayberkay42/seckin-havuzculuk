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
  }
};
// PROSE_END

// Newest first — the list and sitemap read this order.
export const posts: Post[] = META.map((m) => ({ ...m, ...PROSE[m.slug] })).sort(
  (a, b) => (a.date < b.date ? 1 : -1),
);

export const getPost = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);

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
