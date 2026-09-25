/**
 * Depth sections for the two service pages — what drives cost and schedule,
 * and why the peninsula changes the work. Long prose, so it lives here rather
 * than in messages/*.json: next-intl ships the whole message catalogue to the
 * client, and this copy is only ever rendered on the server.
 *
 * Paragraphs may carry [anchor](kind:target) links; scripts/check-links.mjs
 * verifies every target. Keep links out of headings, bullets and FAQ.
 */

type L = { tr: string; en: string };

export type ServiceSection = {
  eyebrow: L;
  title: L;
  paragraphs: L[];
  bullets?: { title: L; desc: L }[];
};

export type ServiceKey = 'construction' | 'maintenance';

const DETAIL: Record<ServiceKey, ServiceSection[]> = {
  "construction": [
    {
      "eyebrow": {
        "tr": "Maliyet ve süre",
        "en": "Cost and timeline"
      },
      "title": {
        "tr": "Bütçeyi ve takvimi belirleyen kalemler.",
        "en": "What actually sets the budget and the schedule."
      },
      "paragraphs": [
        {
          "tr": "Havuz maliyetinin ilk ve en az tahmin edilen kalemi arazidir. Kayalık zeminde kazı kırıcıyla ilerler, gevşek dolguda ise istinat ve zemin iyileştirmesi gerekir; ikisi de hem bütçeyi hem takvimi büyütür. Parselin eğimi taşıyıcı sistemi, bahçe kapısının genişliği ise beton pompasının ve iş makinesinin girip giremeyeceğini belirler. [Karaburun](area:karaburun) gibi kayalık ve dik kıyılarda bu kalemler öne çıkar; düz ve geniş bir Urla arazisinde ise neredeyse görünmez kalır. Bu yüzden ilk keşifte önce zemine ve şantiye erişimine bakıyoruz.",
          "en": "The first and most underestimated line item is the land itself. On rock, excavation advances with a breaker; on loose fill it calls for retaining structures and ground improvement — both stretch the budget and the calendar. The slope of the plot shapes the structural system, while the width of the garden gate decides whether a concrete pump and an excavator can even get in. On the rocky, steep shores of [Karaburun](area:karaburun) these items dominate; on a flat, generous plot in Urla they almost disappear. That is why our first site visit looks at ground and access before anything else."
        },
        {
          "tr": "İkinci grup kararlar havuzun kendisiyle ilgili: ölçü, derinlik, form ve taşma sistemi. Dikdörtgen bir savaklı havuz ile ufka akan sonsuzluk kenarı arasındaki fark yalnızca görüntü değil; denge deposu, ek pompa hattı ve milimetrik kot işçiliği demektir. Kaplama da aynı ölçüde belirleyici: seramik, cam mozaik ve traverten hem metrekare fiyatıyla hem uygulama süresiyle birbirinden ayrışır, çünkü küçük parçalı mozaik dikdörtgen bir seramikten çok daha yavaş ilerleyen bir işçiliktir. Yapı tipi seçiminin mantığını [fiber havuz mu beton havuz mu](post:fiber-havuz-mu-beton-havuz-mu) yazısında ayrıntısıyla anlattık.",
          "en": "The second group of decisions belongs to the pool itself: size, depth, form and overflow system. The difference between a rectangular skimmer pool and an infinity edge running toward the horizon is not only visual — it means a balance tank, an extra pump line and millimetre-level level work. Finishes weigh just as much: ceramic tile, glass mosaic and travertine differ both in price per square metre and in application time, since small-format mosaic is far slower work than a rectangular tile. We explained the logic behind the structural choice in [fibreglass pool or concrete pool](post:fiber-havuz-mu-beton-havuz-mu)."
        },
        {
          "tr": "Üçüncü grup gözle görülmez: filtrasyon kapasitesi, ısı pompası, otomatik dozaj, aydınlatma, otomasyon seviyesi, boru çapları ve makine dairesinin havuza uzaklığı. Buna proje, statik hesap, zemin etüdü, ruhsat veya bildirim süreçleri, şantiye güvenliği ve sonunda peyzajın eski haline getirilmesi eklenir. Bu kalemlerin hiçbirini internetten okunan tek bir metrekare fiyatıyla önceden tahmin etmek doğru olmaz; hangi kalemin neyi nasıl değiştirdiğini [havuz yapım maliyeti](post:havuz-yapim-maliyeti-izmir) yazısında açıkladık, sayıyı ise ancak keşiften sonra kalem kalem veriyoruz.",
          "en": "The third group stays out of sight: filtration capacity, heat pump, automatic dosing, lighting, the level of automation, pipe diameters and the distance between the plant room and the pool. Add the design work, structural calculations, soil survey, permit or notification procedures, site safety, and restoring the landscaping at the end. None of these items can be estimated in advance from a single price per square metre found online; we set out which item moves what in [the cost of building a pool](post:havuz-yapim-maliyeti-izmir), and we only give figures line by line after a site visit."
        }
      ],
      "bullets": [
        {
          "title": {
            "tr": "Zemin ve erişim",
            "en": "Ground and access"
          },
          "desc": {
            "tr": "Kaya, dolgu, eğim ve şantiyeye makine girişi. Kazı ile istinat kararlarının tamamı buradan çıkar.",
            "en": "Rock, fill, slope and machine access to the site. Every excavation and retaining decision starts here."
          }
        },
        {
          "title": {
            "tr": "Ölçü, form ve taşma",
            "en": "Size, form and overflow"
          },
          "desc": {
            "tr": "Derinlik ve kenar detayı; savak ile sonsuzluk kenarı farklı tesisat ve farklı işçilik demek.",
            "en": "Depth and edge detail; a skimmer and an infinity edge mean different plumbing and different labour."
          }
        },
        {
          "title": {
            "tr": "Kaplama ve bitişler",
            "en": "Finishes and detailing"
          },
          "desc": {
            "tr": "Seramik, cam mozaik, traverten. Malzeme fiyatı kadar uygulama süresi de değişir.",
            "en": "Ceramic, glass mosaic, travertine. Application time varies as much as the material price."
          }
        },
        {
          "title": {
            "tr": "Ekipman seviyesi",
            "en": "Level of equipment"
          },
          "desc": {
            "tr": "Isıtma, otomasyon, dozaj ve aydınlatma. Konfor arttıkça makine dairesi de bütçe de büyür.",
            "en": "Heating, automation, dosing and lighting. As comfort rises, both the plant room and the budget grow."
          }
        }
      ]
    },
    {
      "eyebrow": {
        "tr": "Yarımadanın koşulları",
        "en": "Conditions on the peninsula"
      },
      "title": {
        "tr": "Burada inşaat neden farklı yürür.",
        "en": "Why building here works differently."
      },
      "paragraphs": [
        {
          "tr": "Yarımada, bir havuz için yumuşak bir yer değil. Tuzlu deniz havası paslanmaz bağlantı elemanlarını, aydınlatma armatürlerini, ısı pompası kanatçıklarını ve makine dairesindeki panoyu iç bölgelerde olduğundan hızlı yorar; bu yüzden malzeme sınıfını ve montaj yerini baştan buna göre seçiyoruz. İmbat neredeyse her yaz öğleden sonra eser, lodos ise kışın sert vurur: su yüzeyi sürekli hareket eder, toz ve yaprak taşınır, savak kenarı ile kapak detayları rüzgârın yönüne göre çözülür. [Alaçatı](area:alacati) ve Çeşme kıyısında bu detaylar konforun tamamını belirliyor.",
          "en": "The peninsula is not a gentle place for a pool. Salt-laden sea air wears stainless fixings, light fittings, heat-pump fins and the control panel in the plant room faster than inland conditions do, so we choose material grades and mounting positions accordingly from the start. The imbat blows on almost every summer afternoon and the lodos hits hard in winter: the water surface never rests, dust and leaves drift in, and the overflow edge and cover details are resolved according to the prevailing wind. On the coast at [Alaçatı](area:alacati) and Çeşme, these details decide the whole experience."
        },
        {
          "tr": "İkinci fark takvim. Bölgede sezon uzun ve yoğun; haziran açıldığında bahçede şantiye kurmak ne ev sahibi ne komşular için makul. Bu yüzden kazıyı ve kaba imalatı kışa ya da erken bahara alıyor, kaplama ile devreye almayı sezon başlamadan bitiriyoruz. İlçeler de aynı değil: Seferihisar'da ev yıl boyu yaşanır, Ilıca'da site havuzları ortak kararlarla ilerler, Urla'da geniş arazi ve zeytinlik mesafeleri devreye girer. Yerel ayrıntıları [Çeşme ve Alaçatı'da havuz yapımı](post:cesme-alacati-havuz-yapimi) yazısında topladık; teslimden sonra havuzu aynı ekiple [sözleşmeli bakıma](page:maintenance) devrediyoruz.",
          "en": "The second difference is the calendar. The season here is long and intense; once June opens, running a building site in the garden suits neither the owner nor the neighbours. So we place excavation and shell work in winter or early spring, and finish tiling and commissioning before the season starts. The districts are not alike either: in Seferihisar houses are lived in year-round, in Ilıca shared community pools move at the pace of collective decisions, and in Urla wide plots and olive-grove setbacks come into play. We gathered the local detail in [building pools in Çeşme and Alaçatı](post:cesme-alacati-havuz-yapimi); after handover the same team takes the pool into [a maintenance contract](page:maintenance)."
        }
      ]
    }
  ],
  "maintenance": [
    {
      "eyebrow": {
        "tr": "Bakım aksadığında",
        "en": "When maintenance slips"
      },
      "title": {
        "tr": "Küçük bir sapma, büyük bir onarım.",
        "en": "A small drift becomes a large repair."
      },
      "paragraphs": [
        {
          "tr": "Bakımsız kalan bir havuzda ilk bozulan şey görünen su değil, ölçülen dengedir. pH sessizce kayar, klorun bir bölümü güneşte tükenir ve dezenfeksiyon zayıflar. Bu aşamada havuz hâlâ berrak görünür; oysa yosun çoğalmaya başlamıştır bile. Birkaç sıcak gün, kalabalık bir hafta sonu ya da tek bir yağış yeterlidir: su önce donuklaşır, duvarlar ele kaygan gelir, ardından yeşile döner. [Havuz suyunun yeşermesinin nedenlerini](post:havuz-suyu-yesermesi) bilen bir gözle bakıldığında bu süreç, gözle görülür hâle gelmeden haftalar önce okunabilir.",
          "en": "In a neglected pool, the first thing to deteriorate is not the water you see but the balance you measure. The pH drifts quietly, part of the chlorine is consumed by the sun, and disinfection weakens. At this stage the pool still looks clear, yet algae has already begun to multiply. A few hot days, a crowded weekend or a single rainfall is enough: the water dulls, the walls feel slippery, and then it turns green. Read with an eye that understands [why pool water turns green](post:havuz-suyu-yesermesi), this process is legible weeks before it becomes visible."
        },
        {
          "tr": "Denge uzun süre bozuk kalırsa etki sudan yüzeye geçer. Yüksek pH ve sertlikte kireç, su hattında beyaz bir bant ve seramik derzlerinde sertleşmiş bir tabaka bırakır; düşük pH ise tersine derzleri ve sıvayı yavaşça aşındırır. Bulanık su aynı anda filtreyi de zorlar: kum veya kartuş tıkanır, basınç yükselir, pompa gereğinden fazla çalışır. Elektrik tüketimi artar, debi düşer ve berraklığın görünmeyen motoru olan sirkülasyon daha da zayıflar. [Doğru kimyasal seçimi ve dozaj mantığı](post:havuz-kimyasallari-rehberi) bu zincirin en başında durur.",
          "en": "If the balance stays off for long, the effect moves from the water to the surfaces. With high pH and hardness, scale leaves a white band at the waterline and a hardened layer in the tile joints; low pH does the opposite, slowly eroding grout and plaster. Cloudy water also strains the filter: sand or cartridge clogs, pressure climbs, and the pump works harder than it should. Power consumption rises, flow drops, and circulation — the invisible engine of clarity — weakens further. [Choosing the right chemicals and dosing them correctly](post:havuz-kimyasallari-rehberi) stands at the very start of this chain."
        },
        {
          "tr": "İleri aşamada mesele artık temizlik değil onarımdır. Aşınmış derz ve çatlamış sıva su geçirmeye başlar; seviye düşüşü ilk bakışta buharlaşma sanılır, oysa [havuz su kaçağı tespiti ve tamiri](post:havuz-su-kacagi-tamiri) gerektiren bir sorun olabilir. Sürekli zorlanan pompa ve ısı pompası da ömründen önce arızalanır. Düzenli bakımın mantığı tam buradadır: her ziyarette ölçülüp kayda geçen değerler, sapmayı büyümeden kapatır. Havuza uygun [kimyasal ve ekipman seçimiyle](page:products) yürütülen küçük ve sürekli müdahaleler, yıl sonunda tek bir büyük onarımdan hem daha sakin hem daha ekonomiktir.",
          "en": "At an advanced stage the issue is no longer cleaning but repair. Eroded joints and cracked plaster begin to leak; a dropping level looks like evaporation at first, yet it may be a problem that calls for [pool leak detection and repair](post:havuz-su-kacagi-tamiri). A pump or heat pump under constant strain also fails before its time. This is exactly where regular maintenance earns its place: values measured and recorded on every visit close a drift before it grows. Small, continuous interventions carried out with the right [chemicals and equipment](page:products) are both calmer and more economical than one large repair at the end of the year."
        }
      ]
    },
    {
      "eyebrow": {
        "tr": "Yerel koşullar",
        "en": "Local conditions"
      },
      "title": {
        "tr": "Yarımadada bir havuz farklı yaşlanır.",
        "en": "A pool ages differently on the peninsula."
      },
      "paragraphs": [
        {
          "tr": "Çeşme yarımadasındaki bir havuz, iç bölgedeki bir havuzla aynı koşullarda yaşlanmaz. Tuzlu deniz havası metal aksamı, korkuluk ve merdiven bağlantılarını, dış ünite gövdelerini sürekli zorlar; korozyon burada istisna değil, baştan hesaba katılması gereken bir gerçektir. İmbat ve lodos ise havuza tozu, tohumu ve yaprağı taşır. Skimmer sepetleri günler içinde dolar, filtre yükü artar, ters yıkama aralığı kısalır. Aynı havuz için [İzmir'de havuz bakımını belirleyen kalemler](post:havuz-bakim-fiyatlari-izmir) de bu yüzden iç bölgedekinden farklı kurgulanır.",
          "en": "A pool on the Çeşme peninsula does not age under the same conditions as one inland. Salty sea air constantly works on metal fittings, handrail and ladder anchors and the casings of outdoor units; corrosion here is not an exception but a fact to account for from the outset. The imbat and lodos winds carry dust, seeds and leaves into the pool. Skimmer baskets fill within days, filter load rises, and backwash intervals shorten. For the same pool, the [factors that shape pool maintenance in İzmir](post:havuz-bakim-fiyatlari-izmir) are therefore set up differently than inland."
        },
        {
          "tr": "Sezon da uzundur. Mayıstan ekime uzayan sıcak dönemde güneş kloru hızla tüketir, yoğun kullanım suya sürekli organik yük bindirir; kalabalık bir hafta sonunun ardından değerler tek günde kayabilir. Kıyı yerleşimlerinin kendi zorlukları da var: [Karaburun'un rüzgâra açık ve eğimli arazilerinde](area:karaburun) havuz hem daha çabuk kirlenir hem de erişim zaman ister. Bu nedenle bakım takvimini havuzun konumuna, çevresindeki ağaçlara ve evin yıl boyu mu yoksa yalnızca yaz aylarında mı kullanıldığına göre kurguluyoruz.",
          "en": "The season is long, too. Through the hot stretch from May into October the sun burns through chlorine quickly, and heavy use puts a constant organic load on the water; after a crowded weekend the readings can drift within a single day. Coastal settlements each bring their own difficulty: on [Karaburun's wind-exposed, sloping terrain](area:karaburun), a pool both soils faster and takes longer to reach. That is why we build the maintenance calendar around the pool's position, the trees surrounding it, and whether the house is lived in year-round or only through the summer."
        }
      ],
      "bullets": [
        {
          "title": {
            "tr": "Site havuzları — Ilıca",
            "en": "Residential complex pools — Ilıca"
          },
          "desc": {
            "tr": "Ortak kullanım yoğun ve öngörülemez. Denge gün içinde dalgalanır; dezenfeksiyon disiplini ve her ölçümün kaydı öne çıkar.",
            "en": "Shared use is heavy and unpredictable. Balance fluctuates through the day, so disinfection discipline and a record of every reading come first."
          }
        },
        {
          "title": {
            "tr": "Butik otel havuzları — Alaçatı",
            "en": "Boutique hotel pools — Alaçatı"
          },
          "desc": {
            "tr": "Sezonda havuzu kapatma lüksü yoktur. Ölçüm, temizlik ve müdahale misafir saatleri dışında, sabah erken tamamlanır.",
            "en": "Closing the pool mid-season is not an option. Testing, cleaning and intervention are completed early in the morning, outside guest hours."
          }
        },
        {
          "title": {
            "tr": "Yıl boyu yaşanan evler — Seferihisar, Urla",
            "en": "Year-round homes — Seferihisar, Urla"
          },
          "desc": {
            "tr": "Havuz kışın da çalışır. Azaltılmış ama kesintisiz bir program, donmaya karşı koruma ve düzenli ekipman kontrolü gerekir.",
            "en": "The pool runs in winter as well. It needs a reduced but uninterrupted programme, freeze protection and regular equipment checks."
          }
        },
        {
          "title": {
            "tr": "Yazlık villalar — Çeşme, Karaburun",
            "en": "Summer villas — Çeşme, Karaburun"
          },
          "desc": {
            "tr": "Uzun boşluk dönemleri riski büyütür. Ziyaret aralığı, örtü kullanımı ve otomatik dozaj ayarı buna göre belirlenir.",
            "en": "Long empty stretches increase the risk. Visit intervals, cover use and automatic dosing settings are arranged accordingly."
          }
        }
      ]
    }
  ]
};

const pick = (x: L, locale: string) => (locale === 'en' ? x.en : x.tr);

/** Sections resolved to one locale, ready for <ServiceDetail>. */
export function serviceDetail(key: ServiceKey, locale: string) {
  return DETAIL[key].map((s) => ({
    eyebrow: pick(s.eyebrow, locale),
    title: pick(s.title, locale),
    paragraphs: s.paragraphs.map((p) => pick(p, locale)),
    ...(s.bullets
      ? { bullets: s.bullets.map((b) => ({ title: pick(b.title, locale), desc: pick(b.desc, locale) })) }
      : {}),
  }));
}
