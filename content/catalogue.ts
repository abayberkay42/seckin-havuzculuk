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
  /** One sentence — also the page's meta description and Product schema
   *  description, so it must stay short. Longer prose belongs in `body`. */
  description: L;
  /** 2–3 paragraphs of real detail (what it does, how it is used, what to
   *  watch for). Catalogue pages were a single sentence, far below what a
   *  product page needs to be useful or to rank. */
  body?: L[];
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
  {
    "slug": "sivi-ph-quardex",
    "category": "chemicals",
    "brand": "Quardex",
    "name": {
      "tr": "Sıvı pH Düşürücü",
      "en": "Liquid pH Reducer"
    },
    "tagline": {
      "tr": "Dengeli su",
      "en": "Balanced water"
    },
    "description": {
      "tr": "Quardex sıvı pH düşürücü, havuz suyunun pH değerini ideal 7,2-7,6 aralığına çeker.",
      "en": "Quardex liquid pH reducer brings pool water pH down into the ideal 7.2-7.6 range."
    },
    "body": [
          {
                "tr": "Havuz suyunun pH değeri yükseldiğinde klorun dezenfeksiyon gücü belirgin biçimde düşer, su donuklaşır, yüzeylerde kireç izleri oluşur ve yüzenlerde ciltte kuruluk, gözde yanma hissi başlar. Quardex sıvı pH düşürücü, suyun asit-baz dengesini aşağı çekerek pH'ı 7,2-7,6 bandına getirir; bu aralık hem klorun verimli çalıştığı hem de kaplama, conta ve metal parçaların korunduğu aralıktır.",
                "en": "When the pH of pool water rises, chlorine loses a noticeable share of its disinfecting power, the water turns dull, scale marks form on surfaces, and swimmers begin to feel dry skin and stinging eyes. Quardex liquid pH reducer pulls the acid-base balance of the water down and brings the pH into the 7.2-7.6 band, the range in which chlorine works efficiently and in which the lining, seals and metal parts are protected."
          },
          {
                "tr": "Sıvı formun en pratik yanı, toz ürünlerde olduğu gibi önceden bir kovada çözündürülmeye ihtiyaç duymamasıdır; dengeleme deposuna ya da otomatik dozaj pompasına doğrudan verilebildiği için düzeltme hızlı olur. Uygulamadan önce su testi yapın, ürün etiketindeki dozaja uyun ve ilaveyi filtrasyon çalışırken, suyun hareketli olduğu bir noktadan azar azar yapın. Bir süre sirkülasyondan sonra ölçümü yenileyip gerekiyorsa küçük bir ilave daha yapmak, hedefi tek seferde aşmaktan daha güvenlidir.",
                "en": "The most practical aspect of the liquid form is that it does not need to be pre-dissolved in a bucket the way powder products do; because it can be fed straight into the balance tank or an automatic dosing pump, corrections happen quickly. Test the water before dosing, follow the dose printed on the product label, and add the product a little at a time at a point where the water is moving while filtration is running. Letting it circulate, then re-testing and adding a small top-up if needed, is safer than overshooting the target in one go."
          },
          {
                "tr": "Asidik yapıda olduğu için klor ürünleriyle aynı rafta veya yan yana depolanmaz, hiçbir kimyasalla karıştırılmaz; kural her zaman suya kimyasal eklemek, kimyasala su eklememektir. Serin, kuru ve çocukların erişemeyeceği bir yerde saklayın. Ürün ve dozaj seçimi konusunda havuzunuzun hacmine göre bilgi almak için bizimle iletişime geçebilirsiniz.",
                "en": "Because it is acidic, it must not be stored on the same shelf or next to chlorine products, and must never be mixed with another chemical; the rule is always to add chemical to water, never water to chemical. Keep it in a cool, dry place out of the reach of children. For guidance on the right product and dosing approach for your pool volume, you are welcome to contact us."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Quardex"
      }
    ],
    "features": [
      {
        "tr": "Hızlı çözünür",
        "en": "Fast dissolving"
      },
      {
        "tr": "İdeal pH dengesi",
        "en": "Ideal pH balance"
      },
      {
        "tr": "Berrak, konforlu su",
        "en": "Clear, comfortable water"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 1
  },
  {
    "slug": "sivi-ph-selenoid",
    "category": "chemicals",
    "brand": "Selenoid",
    "name": {
      "tr": "Sıvı pH Düşürücü",
      "en": "Liquid pH Reducer"
    },
    "tagline": {
      "tr": "Doğru pH",
      "en": "Right pH"
    },
    "description": {
      "tr": "Selenoid sıvı pH düşürücü, yüksek pH'ı düşürerek suyu 7,2-7,6 konfor aralığında tutar.",
      "en": "Selenoid liquid pH reducer lowers high pH, keeping water within the 7.2-7.6 comfort range."
    },
    "body": [
          {
                "tr": "Çeşme ve çevresinde havuzlar çoğunlukla sert ve alkalinitesi yüksek şebeke suyuyla beslenir; bu su zamanla pH'ı yukarı taşır. Selenoid sıvı pH düşürücü, yükselen pH'ı geri çekerek suyu 7,2-7,6 konfor aralığında tutar. Değer bu bandın üzerine çıktığında klorun etkinliği azalır, su kireç atmaya başlar ve filtre ile ısıtıcı yüzeylerinde birikme görülür.",
                "en": "Around Çeşme, pools are usually filled with hard mains water of high alkalinity, and over time that water pushes the pH upwards. Selenoid liquid pH reducer brings a rising pH back down and holds the water in the comfortable 7.2-7.6 range. Above that band chlorine becomes less effective, the water starts to deposit scale, and build-up appears on filter and heater surfaces."
          },
          {
                "tr": "25 kg'lık bidon ambalajı, haftalık rutin bakımı olan villa havuzları ve site tesisleri için elverişlidir: ölçü kabıyla alınıp doğrudan uygulanabilir, çözündürme adımı gerektirmez ve otomatik pH kontrol ünitesi bulunan sistemlerde emiş hortumu doğrudan bidona alınabilir. Doğru sıra önce test, sonra etikette belirtilen miktarda ilave, ardından sirkülasyon ve tekrar ölçümdür. pH'ı ayarlamadan önce toplam alkalinitenin 80-120 ppm aralığında olması, değerin kısa sürede yeniden kaymasını engeller.",
                "en": "The 25 kg drum suits villa pools and residential complexes on a weekly maintenance routine: it can be measured out and applied directly, needs no dissolving step, and on installations with an automatic pH controller the suction hose can be dropped straight into the drum. The correct order is to test first, add the amount stated on the label, then circulate and measure again. Bringing total alkalinity into the 80-120 ppm range before adjusting pH keeps the value from drifting back within days."
          },
          {
                "tr": "Bidonu serin, kuru ve havalandırılan bir yerde, klor ürünlerinden ayrı tutun; asit ile klor hiçbir koşulda yan yana depolanmaz ya da aynı kapta birleştirilmez. Uygulama sırasında eldiven ve gözlük kullanmak iyi bir alışkanlıktır.",
                "en": "Keep the drum in a cool, dry, ventilated place, separate from chlorine products; acid and chlorine must never be stored side by side or combined in the same container. Wearing gloves and eye protection during application is a good habit."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Selenoid"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "25 kg"
      }
    ],
    "features": [
      {
        "tr": "Kolay dozajlama",
        "en": "Easy dosing"
      },
      {
        "tr": "Etkili pH kontrolü",
        "en": "Effective pH control"
      },
      {
        "tr": "25 kg endüstriyel ambalaj",
        "en": "25 kg industrial pack"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 1
  },
  {
    "slug": "toz-ph-quardex",
    "category": "chemicals",
    "brand": "Quardex",
    "name": {
      "tr": "Toz pH Düşürücü",
      "en": "Powder pH Reducer"
    },
    "tagline": {
      "tr": "Kolay dozaj",
      "en": "Easy dosing"
    },
    "description": {
      "tr": "Quardex toz pH düşürücü, granül yapısıyla suyun pH değerini kontrollü şekilde ideal aralığa indirir.",
      "en": "Quardex powder pH reducer lowers water pH into the ideal range in a controlled, granular form."
    },
    "body": [
          {
                "tr": "Quardex toz pH düşürücü, yüksek pH'ı ideal 7,2-7,6 aralığına indirmek için kullanılan granül formda bir denge kimyasalıdır. pH bu bandın üzerinde kaldığında havuzdaki klor işini yapamaz, su parlaklığını yitirir, kireç ve tortu yüzeylere tutunur. Granül yapı, ürünün suya ölçülebilir miktarlarda ve kontrollü biçimde verilmesini kolaylaştırır.",
                "en": "Quardex powder pH reducer is a granular balancing chemical used to bring a high pH down into the ideal 7.2-7.6 range. While pH stays above that band the chlorine in the pool cannot do its job, the water loses its brightness, and scale and sediment cling to surfaces. The granular structure makes it easy to feed the product into the water in measurable, controlled amounts."
          },
          {
                "tr": "Toz form doğrudan havuza serpilmez. Etiketteki miktar tartılarak ayrı bir kovada temiz suyla çözündürülür, çözelti tamamen berraklaştıktan sonra filtrasyon çalışırken havuza yavaşça boşaltılır. Kovaya önce su, sonra ürün konur; ters sırayla çalışılmaz. Granülün havuz tabanına ya da kaplamaya temas etmesi leke ve yerel aşınma bırakabileceği için dip kısmına dökmekten kaçınılır. Birkaç saat sirkülasyonun ardından ölçüm tekrarlanır.",
                "en": "The powder form is never scattered straight into the pool. The amount on the label is weighed out, dissolved in clean water in a separate bucket, and once the solution is completely clear it is poured slowly into the pool with filtration running. Put the water into the bucket first and the product second, never the other way round. Avoid pouring it towards the floor, since granules touching the shell or lining can leave staining and local etching. Repeat the measurement after a few hours of circulation."
          },
          {
                "tr": "Toz ürünün sıvıya göre avantajı raf ömrü ve depolama kolaylığıdır; ancak nem alırsa topaklanır ve doğru tartım güçleşir, bu yüzden kapağı sıkıca kapalı, kuru ve serin bir alanda, klor ürünlerinden ve asitlerden ayrı tutulmalıdır. Uygulamada eldiven ve gözlük kullanın.",
                "en": "Compared with the liquid, the powder's advantage is shelf life and ease of storage; it does cake if it takes up moisture, which makes accurate weighing harder, so keep the lid tightly closed and the container in a dry, cool area, away from chlorine products and acids. Wear gloves and eye protection when applying it."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Quardex"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "25 kg"
      }
    ],
    "features": [
      {
        "tr": "Granül yapı",
        "en": "Granular form"
      },
      {
        "tr": "Kontrollü dozajlama",
        "en": "Controlled dosing"
      },
      {
        "tr": "Dengeli pH",
        "en": "Balanced pH"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 1
  },
  {
    "slug": "toz-ph-selenoid",
    "category": "chemicals",
    "brand": "Selenoid",
    "name": {
      "tr": "Toz pH Düşürücü",
      "en": "Powder pH Reducer"
    },
    "tagline": {
      "tr": "Net denge",
      "en": "Clear balance"
    },
    "description": {
      "tr": "Selenoid toz pH düşürücü, granül formuyla pH değerini 7,2-7,6 aralığına güvenli şekilde ayarlar.",
      "en": "Selenoid powder pH reducer safely adjusts pH into the 7.2-7.6 range in granular form."
    },
    "body": [
          {
                "tr": "Selenoid toz pH düşürücü, suyun pH değerini güvenli biçimde 7,2-7,6 aralığına ayarlamak için kullanılır. Bu aralık keyfi bir tercih değildir: altına inildiğinde su asidik davranır ve metal aksam ile derz dolgusunu yorar, üstüne çıkıldığında klorun dezenfeksiyon verimi düşer ve kireç çökelmesi başlar. Granül form, düzeltmenin adım adım yapılmasına imkân verir.",
                "en": "Selenoid powder pH reducer is used to bring the pH of the water safely into the 7.2-7.6 range. That range is not an arbitrary preference: below it the water behaves aggressively and wears on metal fittings and grout, while above it chlorine's disinfecting efficiency drops and scale begins to deposit. The granular form allows the correction to be made step by step."
          },
          {
                "tr": "25 kg'lık ambalaj, büyük hacimli havuzlarda ve düzenli bakım programı yürüten site tesislerinde pratiktir. Ürün her zaman ayrı bir kovada çözündürülüp havuza seyreltik olarak verilir; kuru granül ne skimmer'a ne de doğrudan suya atılır. Dozaj için ürün etiketindeki talimat esastır, tahminle çalışılmaz. Uygulama filtrasyon açıkken yapılır, ardından yeterli sirkülasyon süresi tanınır ve sonuç test kitiyle doğrulanır.",
                "en": "The 25 kg pack is practical for large-volume pools and for residential complexes running a regular maintenance programme. The product is always dissolved in a separate bucket and fed into the pool already diluted; dry granules go neither into the skimmer nor straight into the water. For dosing, the instruction on the product label is what counts, never guesswork. Apply with filtration running, allow enough circulation time afterwards, and confirm the result with a test kit."
          },
          {
                "tr": "Ürün asidik karakterdedir; klor, oksijen bazlı ürünler ya da algisitlerle aynı kapta birleştirilmez ve bitişik depolanmaz. Serin, kuru, çocukların ulaşamayacağı bir yerde muhafaza edin.",
                "en": "The product is acidic in character; it is not combined in the same container with chlorine, oxygen-based products or algaecides, and it is not stored next to them. Keep it in a cool, dry place out of the reach of children."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Selenoid"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "25 kg"
      }
    ],
    "features": [
      {
        "tr": "Pratik toz form",
        "en": "Practical powder form"
      },
      {
        "tr": "Hassas pH ayarı",
        "en": "Precise pH adjustment"
      },
      {
        "tr": "25 kg ambalaj",
        "en": "25 kg pack"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 1
  },
  {
    "slug": "sivi-klor-quardex",
    "category": "chemicals",
    "brand": "Quardex",
    "name": {
      "tr": "Sıvı Klor",
      "en": "Liquid Chlorine"
    },
    "tagline": {
      "tr": "Berrak dezenfeksiyon",
      "en": "Clear disinfection"
    },
    "description": {
      "tr": "Quardex sıvı klor (sodyum hipoklorit), havuz suyunu etkili şekilde dezenfekte ederek mikroorganizmaları giderir.",
      "en": "Quardex liquid chlorine (sodium hypochlorite) effectively disinfects pool water, eliminating microorganisms."
    },
    "body": [
          {
                "tr": "Quardex sıvı klor, sodyum hipoklorit esaslı bir dezenfektandır ve havuz suyundaki bakteri, virüs ile yosun sporlarını etkisiz hâle getirir. Amaç suda sürekli olarak 1-3 ppm serbest klor bulundurmaktır; bu seviye korunduğu sürece su, yüzen sayısı arttığında da mikrobiyolojik olarak güvenli kalır. Klor tüketildiği için ölçüm ve ilave, bakımın rutin bir parçasıdır.",
                "en": "Quardex liquid chlorine is a sodium hypochlorite based disinfectant that neutralises bacteria, viruses and algae spores in pool water. The aim is to keep a continuous 1-3 ppm of free chlorine in the water; as long as that level holds, the water stays microbiologically safe even when bather numbers rise. Because chlorine is consumed as it works, measuring and topping up is a routine part of maintenance."
          },
          {
                "tr": "Sıvı klorun toz klora göre en büyük kolaylığı dozajlamadır: çözündürme beklenmez, otomatik dozaj pompasıyla gün boyu küçük miktarlarda verilebilir ve suda ani bir yerel yoğunlaşma oluşturmaz. Uygulamayı akşam saatlerinde, filtrasyon çalışırken yapmak etkinliği artırır; güneş klorun bir bölümünü hızla tüketir. Miktar için ürün etiketindeki dozaj esas alınır.",
                "en": "The biggest convenience of liquid chlorine over the granular type is dosing: there is no waiting for it to dissolve, it can be fed in small amounts through an automatic dosing pump across the day, and it does not create a sudden local concentration in the water. Applying it in the evening with filtration running improves its effectiveness, since sunlight burns off part of the chlorine quickly. For quantity, the dose stated on the product label is what governs."
          },
          {
                "tr": "Sodyum hipoklorit suyun pH'ını yukarı taşıma eğilimindedir, bu nedenle genellikle pH düşürücüyle birlikte takip edilir. Asitlerle asla aynı ortamda depolanmaz; serin, gölge ve havalandırmalı bir alanda tutulur, çünkü sıcak ve ışıklı ortamda etkinliğini zamanla yitirir.",
                "en": "Sodium hypochlorite tends to push the pH of the water upwards, so it is usually tracked together with a pH reducer. It must never be stored in the same space as acids; keep it in a cool, shaded, ventilated area, since it loses strength over time in heat and light."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Quardex"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "25 kg"
      }
    ],
    "features": [
      {
        "tr": "Hızlı dezenfeksiyon",
        "en": "Fast disinfection"
      },
      {
        "tr": "Sodyum hipoklorit bazlı",
        "en": "Sodium hypochlorite based"
      },
      {
        "tr": "Sürekli klor koruması",
        "en": "Continuous chlorine protection"
      }
    ],
    "usage": {
      "tr": "Havuz dezenfeksiyonunda",
      "en": "Pool disinfection"
    },
    "galleryCount": 1
  },
  {
    "slug": "sivi-klor-selenoid",
    "category": "chemicals",
    "brand": "Selenoid",
    "name": {
      "tr": "Sıvı Klor",
      "en": "Liquid Chlorine"
    },
    "tagline": {
      "tr": "Güvenli su",
      "en": "Safe water"
    },
    "description": {
      "tr": "Selenoid sıvı klor, havuz suyunu dezenfekte ederek serbest klor seviyesini 1-3 ppm aralığında tutar.",
      "en": "Selenoid liquid chlorine disinfects pool water, maintaining free chlorine within the 1-3 ppm range."
    },
    "body": [
          {
                "tr": "Selenoid sıvı klor, havuz suyunun dezenfeksiyonunu sağlayarak serbest klor seviyesini 1-3 ppm aralığında tutmak için kullanılır. Bu değerin altına düşen su, gözle bakıldığında berrak görünse bile mikrobiyolojik olarak güvenli sayılmaz; üstüne çıkıldığında ise klor kokusu ve ciltte tahriş öne çıkar. Dolayısıyla klorlamada hedef, seviyeyi yüksek tutmak değil dar bir bantta sabit tutmaktır.",
                "en": "Selenoid liquid chlorine is used to disinfect pool water and hold free chlorine in the 1-3 ppm range. Water below that value cannot be considered microbiologically safe even when it looks perfectly clear; above it, chlorine odour and skin irritation come to the fore. The goal in chlorination is therefore not to keep the level high, but to keep it steady inside a narrow band."
          },
          {
                "tr": "25 kg'lık bidon, düzenli bakım yapılan havuzlarda hem elle hem dozaj pompasıyla kullanıma uygundur. Ürün skimmer'a değil, suyun hareketli olduğu bir noktadan veya dengeleme deposundan verilir; miktar ürün etiketindeki dozaja göre belirlenir. Dezenfeksiyonun sağlıklı yürümesi için pH'ın 7,2-7,6 aralığında olması şarttır, aksi hâlde eklenen klorun önemli bir kısmı boşa gider.",
                "en": "The 25 kg drum suits both manual use and dosing pumps on pools under regular maintenance. The product is fed not into the skimmer but at a point where the water is moving, or through the balance tank; the quantity follows the dose on the product label. For disinfection to work properly the pH must sit between 7.2 and 7.6, otherwise a significant part of the chlorine added goes to waste."
          },
          {
                "tr": "Bidonlar gölgede, serin ve havalandırılan bir depoda, asit ve diğer kimyasallardan ayrı durur. Kimyasallar birbirine karıştırılmaz, kimyasal daima suya eklenir. Havuzunuzun hacmine uygun kullanım için bizden bilgi alabilirsiniz.",
                "en": "Drums are kept in a shaded, cool, ventilated store, separate from acids and other chemicals. Chemicals are never mixed with one another, and chemical is always added to water. For advice suited to your pool's volume, you can get in touch with us."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Selenoid"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "25 kg"
      }
    ],
    "features": [
      {
        "tr": "Etkili sanitasyon",
        "en": "Effective sanitation"
      },
      {
        "tr": "Kolay uygulama",
        "en": "Easy application"
      },
      {
        "tr": "25 kg ambalaj",
        "en": "25 kg pack"
      }
    ],
    "usage": {
      "tr": "Havuz dezenfeksiyonunda",
      "en": "Pool disinfection"
    },
    "galleryCount": 1
  },
  {
    "slug": "toz-klor-quardex",
    "category": "chemicals",
    "brand": "Quardex",
    "name": {
      "tr": "Granül Klor %90",
      "en": "90% Granular Chlorine"
    },
    "tagline": {
      "tr": "Hızlı şok",
      "en": "Fast shock"
    },
    "description": {
      "tr": "Quardex %90 granül klor, yüksek etkinliğiyle hızlı dozaj ve şok klorlama için ideal çözümdür.",
      "en": "Quardex 90% granular chlorine is an ideal solution for fast dosing and shock chlorination."
    },
    "body": [
          {
                "tr": "Quardex %90 granül klor, yüksek aktif klor oranıyla kısa sürede güçlü bir dezenfeksiyon etkisi sağlayan toz formda bir üründür. Özellikle şok klorlamada işe yarar: yoğun kullanım sonrası, uzun yağış veya fırtına sonrasında, su yeşile döndüğünde ya da bulanıklık geçmediğinde suya kısa süreli yüksek klor yüklemesi yapmak gerekir. Rutin bakımda da ölçülü dozlarla serbest klorun 1-3 ppm bandını korumak için kullanılabilir.",
                "en": "Quardex 90% granular chlorine is a powder product whose high active chlorine content delivers strong disinfection in a short time. It is particularly useful for shock chlorination: after heavy bather load, after prolonged rain or a storm, when the water turns green, or when cloudiness will not clear, the water needs a short, high chlorine load. In routine maintenance it can also be used in measured doses to hold free chlorine in the 1-3 ppm band."
          },
          {
                "tr": "Granül daima ayrı bir kovada temiz suyla çözündürülüp havuza seyreltik verilir; kuru olarak tabana serpilmesi kaplamada renk açması ve leke bırakabilir. Şok klorlama akşam yapılır, filtrasyon gece boyunca çalıştırılır ve havuza serbest klor normal aralığa dönmeden girilmez. Uygulamadan önce su testi yapmak, dozajı etikete göre belirlemek ve stabilizatör (siyanürik asit) seviyesini 30-50 ppm bandında tutmak sonucu doğrudan etkiler.",
                "en": "Granules are always dissolved in clean water in a separate bucket and fed into the pool diluted; scattering them dry over the floor can bleach the lining and leave stains. Shock chlorination is done in the evening, filtration is run through the night, and no one enters the pool until free chlorine is back in its normal range. Testing the water beforehand, setting the dose from the label, and keeping the stabiliser (cyanuric acid) level in the 30-50 ppm band all have a direct effect on the outcome."
          },
          {
                "tr": "10 kg ve 25 kg ambalaj seçenekleri vardır. Ürün kuru, serin ve havalandırmalı bir yerde, asitlerden ve diğer kimyasallardan ayrı saklanır; hiçbir kimyasalla aynı kapta birleştirilmez.",
                "en": "It is available in 10 kg and 25 kg packs. Store the product in a dry, cool, ventilated place, apart from acids and other chemicals; it must never be combined with another chemical in the same container."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Quardex"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "10 kg · 25 kg"
      }
    ],
    "features": [
      {
        "tr": "%90 yüksek etkinlik",
        "en": "90% high strength"
      },
      {
        "tr": "Şok klorlamaya uygun",
        "en": "Ideal for shock"
      },
      {
        "tr": "10 kg · 25 kg seçeneği",
        "en": "10 kg · 25 kg options"
      }
    ],
    "usage": {
      "tr": "Şok klorlama ve dozajda",
      "en": "Shock chlorination and dosing"
    },
    "galleryCount": 2
  },
  {
    "slug": "toz-klor-selenoid",
    "category": "chemicals",
    "brand": "Selenoid",
    "name": {
      "tr": "Toz Klor",
      "en": "Granular Chlorine"
    },
    "tagline": {
      "tr": "Etkili koruma",
      "en": "Effective protection"
    },
    "description": {
      "tr": "Selenoid granül klor, havuz suyunun dezenfeksiyonu ve şok klorlama için güçlü ve pratik bir çözümdür.",
      "en": "Selenoid granular chlorine is a strong, practical solution for pool disinfection and shock treatment."
    },
    "body": [
          {
                "tr": "Selenoid granül klor, havuz suyunun günlük dezenfeksiyonunda ve gerektiğinde şok klorlamada kullanılan toz formda bir dezenfektandır. Suda serbest klor 1-3 ppm aralığında tutulduğunda bakteri ve yosun gelişimi baskılanır; seviye düştüğünde ise sorun ilk olarak duvar diplerinde kayganlık ve suyun yeşile çalan görüntüsüyle belli eder kendini. Granül form, ihtiyaca göre az ya da çok tartılabildiği için esnek bir çözümdür.",
                "en": "Selenoid granular chlorine is a powder disinfectant used for day-to-day disinfection of pool water and, when needed, for shock chlorination. With free chlorine held between 1 and 3 ppm, bacterial and algal growth is suppressed; when the level drops, the problem first shows itself as slipperiness at the base of the walls and a greenish cast to the water. Because the granular form can be weighed out in larger or smaller amounts as required, it is a flexible solution."
          },
          {
                "tr": "Sıvı klordan farkı depolama ve taşımada daha az yer tutması, buna karşılık her uygulamada bir çözündürme adımı istemesidir. Etiketteki miktar tartılır, bir kova temiz suda tamamen çözülür ve filtrasyon çalışırken havuza yayılarak verilir. Kuru granülü doğrudan suya veya skimmer sepetine atmaktan kaçının. Şok dozları akşam uygulanır; ertesi gün ölçüm normale döndüğünde havuz tekrar kullanılabilir.",
                "en": "Its difference from liquid chlorine is that it takes up less room in storage and transport, but calls for a dissolving step at every application. The amount on the label is weighed out, dissolved completely in a bucket of clean water, and distributed into the pool while filtration is running. Avoid throwing dry granules straight into the water or into the skimmer basket. Shock doses are applied in the evening; the pool can be used again once the next day's reading is back to normal."
          },
          {
                "tr": "25 kg'lık ambalaj kuru ve serin bir depoda, asitlerin ve pH düşürücülerin yanında olmayacak şekilde tutulur. Kapağı her kullanımdan sonra sıkıca kapatın.",
                "en": "The 25 kg pack is kept in a dry, cool store, positioned so that it is not next to acids or pH reducers. Close the lid firmly after every use."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Selenoid"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "25 kg"
      }
    ],
    "features": [
      {
        "tr": "Güçlü dezenfeksiyon",
        "en": "Strong disinfection"
      },
      {
        "tr": "Pratik granül form",
        "en": "Practical granular form"
      },
      {
        "tr": "25 kg ambalaj",
        "en": "25 kg pack"
      }
    ],
    "usage": {
      "tr": "Havuz dezenfeksiyonunda",
      "en": "Pool disinfection"
    },
    "galleryCount": 1
  },
  {
    "slug": "multi-tablet-wtr",
    "category": "chemicals",
    "brand": "WTR",
    "name": {
      "tr": "Multi Tablet Klor",
      "en": "Multifunction Chlorine Tablets"
    },
    "tagline": {
      "tr": "Tek üründe koruma",
      "en": "All-in-one care"
    },
    "description": {
      "tr": "WTR çok fonksiyonlu klor tabletleri; yavaş salınımlı klorla dezenfekte eder, suyu berraklaştırır ve yosun oluşumunu önler.",
      "en": "WTR multifunction chlorine tablets disinfect with slow-release chlorine while clarifying the water and preventing algae growth."
    },
    "body": [
          {
                "tr": "WTR çok fonksiyonlu klor tabletleri, tek bir üründe birden fazla işi birleştirir: yavaş salınımlı klorla suyu dezenfekte eder, berraklaştırıcı etkisiyle ince bulanıklığı toplar ve yosun oluşumunu baskılar. Tablet suda günler boyunca kademeli çözündüğü için serbest klor seviyesi ani inişler çıkışlar yaşamak yerine daha dengeli bir seyir izler. Bu yapı, özellikle her gün müdahale edilemeyen villa havuzlarında bakım yükünü azaltır.",
                "en": "WTR multifunction chlorine tablets combine several jobs in one product: they disinfect the water with slow-release chlorine, gather fine cloudiness through a clarifying effect, and suppress algae growth. Because the tablet dissolves gradually over days, the free chlorine level follows a steadier course instead of swinging sharply up and down. That behaviour reduces the maintenance burden particularly on villa pools that cannot be attended to every day."
          },
          {
                "tr": "Tabletler havuz tabanına atılmaz; kaplamada kalıcı renk açması ve leke bırakır. Doğru yer bir dispanser, şamandıralı yüzen dozaj kabı veya skimmer sepetidir. Tablet sayısı havuz hacmine ve mevsime göre değişir, bu nedenle ürün etiketindeki kullanım talimatına uyulur ve serbest klor düzenli olarak ölçülerek 1-3 ppm aralığında tutulur.",
                "en": "Tablets are not dropped onto the pool floor; they cause permanent bleaching and staining of the lining. The right place is a dispenser, a floating dosing device, or the skimmer basket. The number of tablets varies with pool volume and season, so follow the usage instructions on the product label and keep free chlorine measured regularly within the 1-3 ppm range."
          },
          {
                "tr": "Multi tablet, sürekli ve dengeli klorlama için düşünülmüş bir üründür; yeşilleşmiş ya da çok bulanık bir havuzu hızla toparlamak için değil. Böyle durumlarda şok klorlama granül klorla yapılır, tablet ise rutin bakımda devreye girer. Stabilizatör seviyesinin 30-50 ppm bandını aşmaması takip edilmeli; ambalaj kuru, serin ve diğer kimyasallardan ayrı saklanmalıdır.",
                "en": "The multi tablet is designed for continuous, steady chlorination, not for rescuing a pool that has turned green or very cloudy in a hurry. In those cases shock chlorination is done with granular chlorine, while the tablet takes over for routine upkeep. Keep an eye on the stabiliser level so it does not exceed the 30-50 ppm band, and store the pack dry, cool and away from other chemicals."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "WTR"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "10 kg · 25 kg"
      }
    ],
    "features": [
      {
        "tr": "Yavaş salınımlı klor",
        "en": "Slow-release chlorine"
      },
      {
        "tr": "Berraklaştırıcı etki",
        "en": "Clarifying effect"
      },
      {
        "tr": "Yosun oluşumunu önler",
        "en": "Prevents algae"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 2
  },
  {
    "slug": "yosun-onleyici-selenoid",
    "category": "chemicals",
    "brand": "Selenoid",
    "name": {
      "tr": "Yosun Önleyici",
      "en": "Algaecide"
    },
    "tagline": {
      "tr": "Yosunsuz su",
      "en": "Algae-free water"
    },
    "description": {
      "tr": "Selenoid yosun önleyici, düzenli dozlamayla havuz suyunda yosun oluşumunu ve gelişimini engeller.",
      "en": "Selenoid algaecide prevents the formation and growth of algae in pool water with regular dosing."
    },
    "body": [
          {
                "tr": "Yosun önleyici, adından da anlaşılacağı gibi yosun oluşmadan önce devreye giren bir üründür. Havuz suyuna rüzgâr, yağmur ve yüzücülerle taşınan yosun sporları; ısınan su, güçlü güneş ve durgun bölgelerde hızla çoğalır. Selenoid yosun önleyici bu çoğalmayı henüz görünür hâle gelmeden keserek duvar ve taban yüzeylerinde kaygan bir tabakanın oturmasını engeller; böylece hem berraklık korunur hem de klorun asıl işi olan dezenfeksiyon için ayrılan payı yosun mücadelesine harcanmaz.",
                "en": "An algaecide, as the name suggests, acts before algae have a chance to form. Algae spores carried into pool water by wind, rain and swimmers multiply quickly in warm water, strong sunlight and still corners. Selenoid algaecide interrupts that multiplication before it becomes visible, preventing a slippery film from settling on walls and floor surfaces. Clarity is preserved, and the chlorine budget is spent on disinfection, its real task, rather than on fighting algae."
          },
          {
                "tr": "Ürün koruyucu amaçlıdır; düzenli ve ölçülü dozlarla kullanılır, yosun görüldükten sonra başvurulan bir müdahale değildir. Sezon açılışında ve ardından haftalık bakım rutini içinde, filtre çalışırken suya homojen biçimde verilir. Dozaj için mutlaka ürün etiketindeki talimatı esas alın. Etkinin sürmesi için pH değerinin 7,2-7,6 aralığında, serbest klorun 1-3 ppm bandında tutulması ve filtrenin günlük yeterli süre çalıştırılması gerekir.",
                "en": "The product is preventive: it is used in regular, measured doses and is not a remedy applied once algae appear. It is added evenly to the water at season opening and then as part of the weekly maintenance routine, with the filter running. Always follow the dosage stated on the product label. For the effect to hold, pH should stay between 7.2 and 7.6, free chlorine between 1 and 3 ppm, and the filter should run long enough each day."
          },
          {
                "tr": "10 kg ambalaj, sezon boyunca düzenli dozlama yapan villa ve site havuzları için uygundur. Kimyasallar birbirine karıştırılmaz; ürün serin, kuru ve çocukların erişemeyeceği bir yerde, kapağı kapalı olarak saklanır. Seçim ve kullanım planı için Seçkin Havuzculuk ekibiyle görüşebilirsiniz.",
                "en": "The 10 kg pack suits villa and residential pools that are dosed regularly through the season. Never mix chemicals with one another; store the product closed, in a cool, dry place out of reach of children. You are welcome to contact the Seçkin Havuzculuk team to plan selection and use."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Selenoid"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "10 kg"
      }
    ],
    "features": [
      {
        "tr": "Yosun oluşumunu önler",
        "en": "Prevents algae growth"
      },
      {
        "tr": "Berrak su korur",
        "en": "Keeps water clear"
      },
      {
        "tr": "Düzenli koruma",
        "en": "Ongoing protection"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 1
  },
  {
    "slug": "yosun-onleyici-poolbox",
    "category": "chemicals",
    "brand": "Poolbox",
    "name": {
      "tr": "Yosun Önleyici",
      "en": "Algaecide"
    },
    "tagline": {
      "tr": "Yosuna karşı",
      "en": "Against algae"
    },
    "description": {
      "tr": "Poolbox yosun önleyici, konsantre ve kutulu formlarıyla havuz suyunda yosun oluşumunu etkili biçimde engeller.",
      "en": "Poolbox algaecide effectively prevents algae growth in pool water, available in concentrate and boxed forms."
    },
    "body": [
          {
                "tr": "Poolbox yosun önleyici de yosunun oluşumunu baştan engellemek üzere hazırlanmıştır; mevcut bir yosun tabakasını çözmek için değil, o tabakanın hiç oluşmaması için kullanılır. Suya düzenli aralıklarla verildiğinde sporların yüzeylere tutunup koloni kurmasını güçleştirir. Bu da havuz duvarlarında kayganlık, derz aralarında yeşil lekelenme ve suyun kısa sürede donuklaşması riskini azaltır.",
                "en": "Poolbox algaecide is likewise formulated to stop algae before they start: it is used so that a layer never forms, not to break down one that already has. Added at regular intervals, it makes it harder for spores to attach to surfaces and establish a colony. That reduces the risk of slippery walls, green staining along grout lines and water that turns dull within days."
          },
          {
                "tr": "Konsantre ve kutulu formlarıyla sunulduğu için küçük hacimli dozlarla çalışılır; depolama yeri kısıtlı villa havuzlarında bu pratik bir avantajdır. Uygulamada kimyasal, pompa çalışırken havuz çevresinde dolaşarak doğrudan suya verilir. Konsantre ürünlerde doz aşımı kolay olduğu için etiket üzerindeki ölçüye birebir uyulması, gözle tahmin yapılmaması önemlidir.",
                "en": "Because it comes in concentrated, boxed form, it is dosed in small volumes, which is a practical advantage in villa pools with limited storage. In use, the chemical is added directly to the water while the pump runs, walking the perimeter of the pool. Overdosing is easy with concentrates, so follow the measure on the label exactly and never estimate by eye."
          },
          {
                "tr": "Yosun önleyici tek başına bir çözüm değildir: su dengesi ve dezenfeksiyon doğru kurulmadığında hiçbir önleyici kalıcı sonuç vermez. pH'ın 7,2-7,6, serbest klorun 1-3 ppm aralığında tutulduğu bir havuzda önleyicinin katkısı belirgin biçimde artar. Farklı kimyasallar aynı kapta birleştirilmez; ambalaj kapalı, serin ve kuru bir ortamda, çocukların erişemeyeceği yerde tutulur. Havuzunuzun hacmine uygun kullanım programı için bize danışabilirsiniz.",
                "en": "An algaecide is not a solution on its own: without correct water balance and disinfection, no preventive product gives lasting results. In a pool held at pH 7.2-7.6 and free chlorine 1-3 ppm, its contribution is markedly greater. Do not combine different chemicals in the same container; keep the pack closed in a cool, dry place out of reach of children. You are welcome to ask us about a usage schedule suited to your pool's volume."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Poolbox"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "Konsantre · Kutu"
      }
    ],
    "features": [
      {
        "tr": "Konsantre formül",
        "en": "Concentrated formula"
      },
      {
        "tr": "Yosun oluşumunu önler",
        "en": "Prevents algae"
      },
      {
        "tr": "Pratik kullanım",
        "en": "Easy to use"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 2
  },
  {
    "slug": "yosun-onleyici-quardex",
    "category": "chemicals",
    "brand": "Quardex",
    "name": {
      "tr": "Yosun Önleyici",
      "en": "Algaecide"
    },
    "tagline": {
      "tr": "Yosunsuz su",
      "en": "Algae-free water"
    },
    "description": {
      "tr": "Quardex yosun önleyici, düzenli dozlamayla havuz suyunda yosun oluşumunu önleyerek berraklığı korur.",
      "en": "Quardex algaecide prevents algae formation in pool water with regular dosing, maintaining clarity."
    },
    "body": [
          {
                "tr": "Quardex yosun önleyici, havuz suyunda yosun gelişimini önleyerek berraklığın korunmasına yardımcı olan bir bakım kimyasalıdır. Yosun, su sıcaklığının arttığı ve sirkülasyonun zayıf kaldığı dönemlerde önce gözle görülmeyen ince bir film olarak başlar. Önleyici tam bu ilk aşamayı hedefler; dolayısıyla işlevi mevcut yosunu temizlemek değil, yosunun başlamasına fırsat vermemektir.",
                "en": "Quardex algaecide is a maintenance chemical that helps preserve clarity by preventing algae growth in pool water. Algae begin as an invisible film when water temperature rises and circulation is weak. The preventive product targets exactly that first stage, so its function is not to clean existing algae but to deny algae the chance to start."
          },
          {
                "tr": "Kullanım mantığı süreklilik üzerine kuruludur: sezon açılışında bir kez, ardından bakım programına bağlı düzenli aralıklarla ve sirkülasyon devredeyken uygulanır. Dozaj üretici talimatına göre belirlenir. Uygulamadan önce su testi yapmak, pH'ı 7,2-7,6 ve toplam alkaliniteyi 80-120 ppm aralığında tutmak önleyicinin verimini doğrudan etkiler. Merdiven altları, köşeler ve ışık nişleri gibi suyun yavaş hareket ettiği noktaların fırçalanması da ihmal edilmemelidir.",
                "en": "Its logic rests on continuity: once at season opening, then at regular intervals set by the maintenance schedule, always with circulation running. Dosage follows the manufacturer's instructions. Testing the water beforehand and keeping pH between 7.2 and 7.6 and total alkalinity between 80 and 120 ppm directly affects how well the preventive works. Brushing the places where water moves slowly, such as under steps, in corners and around light niches, should not be neglected either."
          },
          {
                "tr": "10 kg ambalaj, sezon boyu sürekli bakım görecek havuzlar için hazırlanmıştır. Yosun önleyici bir dezenfektan değildir; klorun yerine geçmez, onun yükünü hafifletir. Ürün asit ve klor kimyasallarıyla yan yana depolanmaz, serin ve kuru bir yerde tutulur. Kullanım sıklığı havuzun konumuna ve gölgelenmesine göre değişir; değerlendirme için ekibimize yazabilirsiniz.",
                "en": "The 10 kg pack is intended for pools under continuous maintenance through the season. An algaecide is not a disinfectant: it does not replace chlorine, it lightens chlorine's load. Do not store the product alongside acid or chlorine chemicals; keep it in a cool, dry place. How often it is needed varies with the pool's location and how much shade it gets, so feel free to write to our team for an assessment."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Quardex"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "10 kg"
      }
    ],
    "features": [
      {
        "tr": "Yosun oluşumunu önler",
        "en": "Prevents algae growth"
      },
      {
        "tr": "Berrak su korur",
        "en": "Keeps water clear"
      },
      {
        "tr": "Düzenli koruma",
        "en": "Ongoing protection"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 1
  },
  {
    "slug": "yosun-giderici-quardex",
    "category": "chemicals",
    "brand": "Quardex",
    "name": {
      "tr": "Yosun Giderici",
      "en": "Algae Remover"
    },
    "tagline": {
      "tr": "Yosunu temizler",
      "en": "Clears algae"
    },
    "description": {
      "tr": "Quardex yosun giderici, halihazırda oluşmuş yosun tabakalarını çözerek havuz suyunu hızla temizler.",
      "en": "Quardex algae remover dissolves existing algae blooms to rapidly clean up pool water."
    },
    "body": [
          {
                "tr": "Yosun giderici, önleyicinin aksine sorun ortaya çıktıktan sonra kullanılır. Suyun yeşile dönmesi, duvarların kayganlaşması ya da taban yüzeyinde koyu lekeler belirmesi durumunda halihazırda oluşmuş yosun tabakasını çözerek yüzeyden ayrılmasını ve filtreye taşınmasını sağlar. Kısacası önleyici oluşmasını engeller, giderici oluşmuş olanı giderir; ikisi birbirinin yerine kullanılamaz.",
                "en": "Unlike a preventive, an algae remover is used after the problem has appeared. When the water turns green, the walls feel slippery or dark patches show on the floor, it breaks down the algae layer that has already formed so it lifts off the surface and is carried to the filter. In short, a preventive stops algae from forming while a remover clears what has formed; one cannot replace the other."
          },
          {
                "tr": "Uygulama tek bir dozla bitmeyen bir müdahaledir. Kimyasal verildikten sonra duvar ve taban fırça ile ovulur, çözünen yosun süpürülür ve filtre uzun süre çalıştırılır; işlem sonunda filtrenin geri yıkaması yapılır. Yoğun yosunlanmada akşam saatlerinde şok klorlama ile birlikte planlanması yaygındır. Dozaj için ürün etiketindeki talimat esas alınır.",
                "en": "This is an intervention that does not end with a single dose. After the chemical is added, walls and floor are scrubbed with a brush, the loosened algae are vacuumed away and the filter is run for an extended period, followed by a backwash. With heavy algae growth it is commonly planned together with evening shock chlorination. Dosage follows the instructions on the product label."
          },
          {
                "tr": "İşlem tamamlandıktan sonra su dengesi yeniden ölçülmeli; pH 7,2-7,6 ve serbest klor 1-3 ppm bandına getirilmelidir. Temizlik tamamlandıktan sonra yosunun geri gelmemesi için bakım programına bir yosun önleyici eklenmesi mantıklıdır; giderici müdahale ürünü, önleyici ise rutin ürünüdür. Sorun sık sık tekrarlıyorsa kalıcı çözüm kimyasalda değil, sirkülasyon ve filtrasyon kapasitesinin gözden geçirilmesinde aranır. Bu değerlendirmeyi Seçkin Havuzculuk yerinde yapabilir.",
                "en": "Once the work is done, water balance should be measured again and brought back to pH 7.2-7.6 and free chlorine 1-3 ppm. After the cleanup it makes sense to add an algaecide to the maintenance programme so the algae do not return: the remover is the intervention product, the preventive is the routine one. If the problem recurs often, the lasting fix lies not in a chemical but in reviewing circulation and filtration capacity, an assessment Seçkin Havuzculuk can carry out on site."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Quardex"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "10 kg"
      }
    ],
    "features": [
      {
        "tr": "Mevcut yosunu giderir",
        "en": "Removes existing algae"
      },
      {
        "tr": "Hızlı etki",
        "en": "Fast acting"
      },
      {
        "tr": "Suyu berraklaştırır",
        "en": "Restores clarity"
      }
    ],
    "usage": {
      "tr": "Yosunlanmış havuzlarda",
      "en": "Algae-affected pools"
    },
    "galleryCount": 1
  },
  {
    "slug": "berraklastirici-quardex",
    "category": "chemicals",
    "brand": "Quardex",
    "name": {
      "tr": "Berraklaştırıcı",
      "en": "Clarifier"
    },
    "tagline": {
      "tr": "Berrak su",
      "en": "Clear water"
    },
    "description": {
      "tr": "Quardex berraklaştırıcı, ince partikülleri kümeleştirerek filtrede tutulmasını sağlar ve bulanık suyu berraklaştırır.",
      "en": "Quardex clarifier coagulates fine particles for filtration, clearing cloudy pool water."
    },
    "body": [
          {
                "tr": "Bulanıklık her zaman kirli su anlamına gelmez; çoğu zaman sebep, filtrenin gözeneklerinden geçip havuza geri dönen çok ince partiküllerdir. Quardex berraklaştırıcı bu mikro partikülleri birbirine bağlayarak filtrenin tutabileceği büyüklükte kümeler hâline getirir. Partiküller dibe çökmez; su içinde büyüyerek filtrede yakalanır. Ürün tam bu yönüyle çöktürücüden (flok) ayrılır.",
                "en": "Cloudiness does not always mean dirty water; more often the cause is very fine particles that pass through the filter's pores and return to the pool. Quardex clarifier binds these micro particles together into clusters large enough for the filter to hold. The particles do not settle to the bottom; they grow within the water and are captured by the filter. This is precisely what separates it from a flocculant."
          },
          {
                "tr": "Bu nedenle berraklaştırıcı, filtrasyon normal şekilde çalışırken uygulanır ve sonucu görmek için filtrenin uzun süre devrede kalması gerekir. Filtre basıncı yükseldiğinde geri yıkama yapılır. Doz, ürün etiketindeki talimata göre belirlenir; fazlası bulanıklığı daha hızlı gidermez, filtreyi erken tıkar.",
                "en": "For that reason a clarifier is applied while filtration runs normally, and the filter must stay in service for a long stretch before the result is visible. When filter pressure rises, backwash. Dosage is set by the instructions on the label; more does not clear cloudiness faster, it clogs the filter sooner."
          },
          {
                "tr": "Uygulamadan önce su dengesini ölçmek yerinde olur: pH 7,2-7,6 aralığının dışına çıkmış bir havuzda bulanıklığın kaynağı zaten dengesizlik olabilir ve berraklaştırıcı bunu düzeltmez. Kalsiyum sertliğinin 200-400 ppm bandının üzerine çıkması da benzer bir donukluk üretebilir. Çok yoğun bulanıklıkta ise berraklaştırıcı yerine çöktürücü (flok) daha doğru seçimdir. Ürün diğer kimyasallarla aynı kapta karıştırılmaz, ayrı ayrı uygulanır; 10 kg ambalaj düzenli bakım yapılan havuzlar içindir.",
                "en": "It is worth testing water balance first: in a pool that has drifted outside pH 7.2-7.6 the cloudiness may stem from that imbalance, which a clarifier will not correct. Calcium hardness above the 200-400 ppm band can produce a similar dullness. Where cloudiness is very heavy, a flocculant is the better choice than a clarifier. Do not mix the product with other chemicals in the same container; apply them separately. The 10 kg pack is for regularly maintained pools."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Quardex"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "10 kg"
      }
    ],
    "features": [
      {
        "tr": "Bulanıklığı giderir",
        "en": "Removes cloudiness"
      },
      {
        "tr": "Pırıl pırıl su",
        "en": "Sparkling water"
      },
      {
        "tr": "Filtre verimini artırır",
        "en": "Boosts filtration"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 1
  },
  {
    "slug": "parlatici-selenoid",
    "category": "chemicals",
    "brand": "Selenoid",
    "name": {
      "tr": "Parlatıcı",
      "en": "Clarifier"
    },
    "tagline": {
      "tr": "Pırıltılı su",
      "en": "Brilliant water"
    },
    "description": {
      "tr": "Selenoid parlatıcı, suda asılı ince partikülleri toplayarak havuza berrak ve pırıltılı bir görünüm kazandırır.",
      "en": "Selenoid clarifier gathers fine suspended particles to give the pool a clear, brilliant appearance."
    },
    "body": [
          {
                "tr": "Parlatıcı, berraklaştırıcı sınıfından bir üründür: suda asılı kalan, tek başına filtreye takılmayacak kadar küçük partikülleri bir arada tutarak filtrenin bunları yakalamasını sağlar. Selenoid parlatıcı uygulandığında sudaki donuk, süt beyazı görünüm kademeli olarak yerini derinliğin seçilebildiği berrak bir görüntüye bırakır. Kirliliği yok etmez; filtrenin ulaşamadığı boyuttaki kirliliği filtreye taşınabilir hâle getirir.",
                "en": "A clarifier belongs to the same family: it holds together suspended particles too small to be trapped on their own so that the filter can catch them. With Selenoid clarifier, the dull, milky look of the water gradually gives way to a clear view in which depth reads properly. It does not destroy contamination; it makes contamination the filter cannot reach large enough to be carried there."
          },
          {
                "tr": "Kullanımı sirkülasyona bağlıdır; pompa ve filtre çalışmıyorsa ürün işini yapamaz. Havuz kenarı boyunca dolaşarak suya verilir, ardından filtre kesintisiz çalıştırılır ve filtre basıncı takip edilerek gerektiğinde geri yıkama yapılır. Doz miktarı ürün etiketinde belirtilen orana göre ayarlanır; etki genellikle hemen değil, filtre birkaç tur çevrimi tamamladıktan sonra görülür. Uygulama öncesinde su testi yapmak, pH'ın 7,2-7,6 aralığında olduğunu doğrulamak yerinde olur.",
                "en": "Use depends on circulation: if the pump and filter are off, the product cannot do its job. It is added to the water while walking the pool edge, after which the filter runs without interruption and is backwashed when the pressure reading calls for it. The dose is set according to the ratio stated on the product label; the effect usually shows not immediately but after the filter has completed several turnover cycles. It is worth testing the water beforehand and confirming that pH sits between 7.2 and 7.6."
          },
          {
                "tr": "Parlatıcı ile çöktürücüyü karıştırmamak gerekir: parlatıcıda partiküller filtrede toplanır, çöktürücüde ise tabana iner ve süpürülerek atılır. 10 kg ambalaj düzenli bakım yapılan havuzlar için uygundur; serin, kuru ve çocukların ulaşamayacağı bir yerde saklanır.",
                "en": "A clarifier should not be confused with a flocculant: with a clarifier the particles collect in the filter, with a flocculant they sink to the floor and are vacuumed out. The 10 kg pack suits regularly maintained pools; store it in a cool, dry place out of reach of children."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Selenoid"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "10 kg"
      }
    ],
    "features": [
      {
        "tr": "Berrak, parlak su",
        "en": "Clear, bright water"
      },
      {
        "tr": "İnce partikülleri toplar",
        "en": "Captures fine particles"
      },
      {
        "tr": "Filtre verimini artırır",
        "en": "Boosts filtration"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 1
  },
  {
    "slug": "parlatici-poolbox",
    "category": "chemicals",
    "brand": "Poolbox",
    "name": {
      "tr": "Parlatıcı",
      "en": "Clarifier"
    },
    "tagline": {
      "tr": "Pırıltılı su",
      "en": "Brilliant water"
    },
    "description": {
      "tr": "Poolbox parlatıcı, konsantre ve kutulu formlarıyla bulanık suyu berraklaştırarak havuza pırıltılı bir görünüm verir.",
      "en": "Poolbox clarifier clears cloudy water for a brilliant pool finish, available in concentrate and boxed forms."
    },
    "body": [
          {
                "tr": "Poolbox parlatıcı, gözle görülmeyen askıda katı maddeleri topaklayarak filtrede tutulabilir hâle getiren bir bakım kimyasalıdır. Havuz suyunun zamanla kazandığı mat, isli görünümün nedeni genellikle bu mikro partiküllerdir; bir araya getirilip filtreye alındıklarında su yeniden pırıltılı görünür ve havuz tabanı net biçimde seçilir. Bu işlem bir dezenfeksiyon değildir; klorun ya da düzenli bakım rutininin yerine geçmez, onların sonucunu görünür kılar.",
                "en": "Poolbox clarifier is a maintenance chemical that clumps invisible suspended solids so the filter can retain them. The matte, smoky look pool water takes on over time usually comes from these micro particles; once gathered and drawn into the filter, the water looks bright again. This is not disinfection and does not replace chlorine or the maintenance routine."
          },
          {
                "tr": "Konsantre ve kutulu form, az miktarla geniş su hacmine müdahale etmeyi mümkün kılar; bu yüzden en sık yapılan hata ölçüsüz kullanımdır. Ürün etiketindeki dozaja uyun, uygulamadan sonra filtreyi uzun süre çalıştırın ve basınç artışında geri yıkama yapın. Parlatıcı çöktürücü gibi çalışmaz; partikülleri tabana indirip süpürtmek yerine filtreye taşır, dolayısıyla filtrenin temiz ve çalışır durumda olması şarttır.",
                "en": "The concentrated, boxed form makes it possible to treat a large volume of water with a small quantity, which is why careless dosing is the most common mistake. Follow the dosage on the label, run the filter for a long stretch afterwards, and backwash when the pressure rises. A clarifier does not behave like a flocculant: rather than dropping particles to the floor for vacuuming, it carries them to the filter, so the filter must be clean and in working order."
          },
          {
                "tr": "Bulanıklığın kaynağı her zaman partikül olmayabilir. Uygulamadan önce su testi yapılması, pH'ın 7,2-7,6 ve serbest klorun 1-3 ppm aralığında olduğunun doğrulanması önerilir; denge bozuksa önce o düzeltilir. Ürün başka kimyasallarla karıştırılmaz, kapağı kapalı biçimde serin bir yerde saklanır.",
                "en": "Particles are not always the source of cloudiness. Test the water first and confirm that pH sits between 7.2 and 7.6 and free chlorine between 1 and 3 ppm; if the balance is off, correct that first. Do not mix the product with other chemicals, and store it closed in a cool place."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Poolbox"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "Konsantre · Kutu"
      }
    ],
    "features": [
      {
        "tr": "Konsantre formül",
        "en": "Concentrated formula"
      },
      {
        "tr": "Bulanıklığı giderir",
        "en": "Removes cloudiness"
      },
      {
        "tr": "Pırıl pırıl su",
        "en": "Sparkling water"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 2
  },
  {
    "slug": "cokturucu-selenoid",
    "category": "chemicals",
    "brand": "Selenoid",
    "name": {
      "tr": "Çöktürücü (Flok)",
      "en": "Liquid Flocculant"
    },
    "tagline": {
      "tr": "Berrak su",
      "en": "Crystal clarity"
    },
    "description": {
      "tr": "Selenoid çöktürücü, suda asılı ince partikülleri bir araya getirerek havuz tabanına çökeltir ve suyu berraklaştırır.",
      "en": "Selenoid flocculant binds fine suspended particles into settling clumps, clearing cloudy pool water to the floor."
    },
    "body": [
          {
                "tr": "Çöktürücü (flok), berraklaştırıcıdan farklı bir yol izler: askıda kalan ince kirlilikleri ağır topaklar hâline getirip havuz tabanına indirir. Yani partiküller filtreye taşınmaz, dibe çöker ve orada birikir. Selenoid çöktürücü bu nedenle ağır bulanıklıklarda, filtrasyonun tek başına yetmediği ya da suyun gözle görülür biçimde sütlü kaldığı durumlarda tercih edilir.",
                "en": "A flocculant works differently from a clarifier: it turns suspended fine contamination into heavy clumps that sink to the pool floor. The particles are not carried to the filter; they settle and collect at the bottom. Selenoid flocculant is therefore chosen for heavy cloudiness, where filtration alone is not enough or the water stays visibly milky."
          },
          {
                "tr": "Uygulamanın kritik kısmı çökelmenin ardından gelir. Kimyasal suya verildikten sonra suyun durulması beklenir; bu sırada sirkülasyon üretici talimatına göre durdurulur veya ayarlanır. Tabanda toplanan çökelti filtreye gönderilmez, süpürülerek doğrudan atığa alınır. Çökelti karıştırılırsa su yeniden bulanır ve işlem baştan yapılmak zorunda kalır. Dozaj ürün etiketine göre belirlenir.",
                "en": "The critical part comes after settling. Once the chemical is in the water, the pool is left to still; during this time circulation is stopped or adjusted according to the manufacturer's instructions. The sediment gathered on the floor is not sent to the filter but vacuumed straight to waste. Stirring the sediment clouds the water again and the whole process has to be repeated. Dosage follows the product label."
          },
          {
                "tr": "İşlem sonrası süpürmeyle düşen su seviyesi tamamlanır, pH 7,2-7,6 ve serbest klor 1-3 ppm değerleri yeniden kontrol edilir. Flok kimyasalı diğer ürünlerle aynı anda suya verilmez; uygulama sırasında havuz kullanılmaz. 10 kg ambalaj, sezon içinde birden fazla çöktürme ihtiyacı doğan büyük havuzlar için uygundur. Ürün serin, kuru ve çocukların ulaşamayacağı bir yerde saklanır.",
                "en": "Afterwards the water level lost to vacuuming is topped up and pH 7.2-7.6 and free chlorine 1-3 ppm are checked again. A flocculant is never added to the water at the same time as other products, and the pool is not used during the treatment. The 10 kg pack suits larger pools that need flocculation more than once in a season. Store the product in a cool, dry place out of reach of children."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Selenoid"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "10 kg"
      }
    ],
    "features": [
      {
        "tr": "İnce partikülleri çöktürür",
        "en": "Settles fine particles"
      },
      {
        "tr": "Bulanıklığı giderir",
        "en": "Removes cloudiness"
      },
      {
        "tr": "Kolay süpürülür",
        "en": "Easy to vacuum"
      }
    ],
    "usage": {
      "tr": "Bulanık havuz sularında",
      "en": "Cloudy pool water"
    },
    "galleryCount": 1
  },
  {
    "slug": "cokturucu-poolbox",
    "category": "chemicals",
    "brand": "Poolbox",
    "name": {
      "tr": "Çöktürücü (Flok)",
      "en": "Liquid Flocculant"
    },
    "tagline": {
      "tr": "Duru su",
      "en": "Clear water"
    },
    "description": {
      "tr": "Poolbox çöktürücü, asılı kalan mikro kirlilikleri topaklayıp tabana indirir ve bulanık havuz suyunu berraklaştırır.",
      "en": "Poolbox flocculant clumps suspended micro-particles and sinks them to the floor, restoring clear pool water."
    },
    "body": [
          {
                "tr": "Poolbox çöktürücü, suda dağılmış mikro kirlilikleri topaklayıp tabana indirerek bulanık havuz suyunu berraklaştırır. Çalışma mantığı parlatıcıdan ayrıdır: parlatıcı partikülleri filtreye taşır, çöktürücü ise dibe biriktirir ve temizlik süpürmeyle tamamlanır. Bu yüzden sezon açılışı ya da uzun süre kapalı kalmış havuz gibi suyun yoğun bulandığı durumlarda daha etkili bir yol sunar.",
                "en": "Poolbox flocculant clears cloudy pool water by clumping dispersed micro contamination and dropping it to the floor. Its logic differs from a clarifier's: a clarifier carries particles to the filter, while a flocculant deposits them at the bottom and the job is finished by vacuuming. That makes it the more effective route when water is heavily clouded, as at season opening or after a pool has stood covered for a long time."
          },
          {
                "tr": "Kutulu form, gerektiğinde tek seferlik müdahale için ölçülü kullanımı kolaylaştırır. Uygulamada kimyasal suya homojen biçimde dağıtılır, çökelme için yeterli bekleme süresi tanınır ve ardından taban süpürülerek çökelti atığa verilir. Süpürme sırasında çökeltinin dağıtılmaması, tabanda yavaş hareket edilmesi sonucu belirler. Bekleme süresi ve doz miktarı için üretici talimatına uyulur.",
                "en": "The boxed form makes measured use easy for a one-off intervention. In application the chemical is distributed evenly through the water, enough waiting time is allowed for settling, and the floor is then vacuumed to send the sediment to waste. Moving slowly along the floor so the sediment is not stirred back up decides the result. Waiting time and dose follow the manufacturer's instructions."
          },
          {
                "tr": "Çöktürme sırasında havuz kullanılmaz; işlem bitip su dengesi yeniden ölçülene kadar beklenir. Süpürme nedeniyle düşen su seviyesi tamamlanır, ardından pH 7,2-7,6 ve serbest klor 1-3 ppm değerleri yeniden kontrol edilir. Ürün klor ve asit kimyasallarıyla yan yana depolanmaz; serin ve kuru ortamda, çocukların erişiminden uzak tutulur. Bulanıklık tekrarlıyorsa filtrasyon kapasitesinin gözden geçirilmesi için bize danışabilirsiniz.",
                "en": "The pool is not used while flocculation is under way; wait until the process is complete and water balance has been measured again. Top up the water level lost to vacuuming, then recheck pH 7.2-7.6 and free chlorine 1-3 ppm. Do not store the product next to chlorine or acid chemicals; keep it in a cool, dry place away from children. If cloudiness keeps returning, you are welcome to consult us about reviewing filtration capacity."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Poolbox"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "Kutu"
      }
    ],
    "features": [
      {
        "tr": "Hızlı berraklaştırma",
        "en": "Fast clarifying"
      },
      {
        "tr": "Mikro kirliliği toplar",
        "en": "Gathers micro-debris"
      },
      {
        "tr": "Pratik kutulu form",
        "en": "Practical boxed form"
      }
    ],
    "usage": {
      "tr": "Bulanık havuz sularında",
      "en": "Cloudy pool water"
    },
    "galleryCount": 1
  },
  {
    "slug": "flok-tablet",
    "category": "chemicals",
    "brand": "Poolbox",
    "name": {
      "tr": "Flok Tablet",
      "en": "Flocculant Tablet"
    },
    "tagline": {
      "tr": "Kolay dozaj",
      "en": "Effortless dosing"
    },
    "description": {
      "tr": "Poolbox flok tablet, skimmer sepetine yerleştirilerek yavaşça çözünür ve suyu sürekli berrak tutan pratik çöktürücüdür.",
      "en": "Poolbox flocculant tablet dissolves slowly in the skimmer basket, continuously clarifying water with effortless dosing."
    },
    "body": [
          {
                "tr": "Flok tablet, sıvı çöktürücünün pratik biçimidir. Suya elle dozlamak yerine skimmer sepetine yerleştirilir ve üzerinden geçen suyla yavaşça çözünür; böylece havuza sürekli ve düşük düzeyde çöktürücü verilmiş olur. Askıda kalan ince partiküller topaklanır, bir bölümü filtrede tutulur, bir bölümü tabana iner ve süpürmeyle alınır.",
                "en": "A flocculant tablet is the practical form of liquid flocculant. Instead of dosing the water by hand, it is placed in the skimmer basket and dissolves slowly in the water passing over it, so the pool receives a continuous, low level of flocculant. Suspended fine particles clump; some are held in the filter, some settle to the floor and are removed by vacuuming."
          },
          {
                "tr": "Kullanımı basittir: tablet sepete konur, tükendikçe yenilenir. Kaç tablet kullanılacağı ve yenileme aralığı ürün etiketinde belirtilen ölçüye göre ayarlanır. Tablet doğrudan havuz suyuna veya taban yüzeyine atılmaz; çözünmeden bir noktada bekleyen tablet yüzeyde iz bırakabilir. Sepet her temizlikte kontrol edilir.",
                "en": "Use is simple: the tablet goes into the basket and is replaced as it runs out. How many tablets to use and how often to replace them follow the measure stated on the product label. The tablet is not thrown directly into the pool or onto the floor surface; a tablet sitting undissolved in one spot can leave a mark. Check the basket at every cleaning."
          },
          {
                "tr": "Bu ürün, ağır bulanıklık için yapılan tek seferlik flok uygulamasının yerini almaz; suyu berrak tutmaya yönelik bir süreklilik çözümüdür. Yoğun bulanıklık yaşandığında sıvı çöktürücü ile tek seferlik uygulama daha doğru sonuç verir. Tabanda biriken çökeltinin düzenli süpürülmesi ve filtre basıncının takip edilmesi yine gereklidir. Ürün diğer kimyasallarla aynı sepette bir arada kullanılmaz; serin, kuru ve çocukların ulaşamayacağı bir yerde saklanır.",
                "en": "This product does not replace a one-off flocculation treatment for heavy cloudiness; it is a continuity solution for keeping water clear. When cloudiness is heavy, a single treatment with liquid flocculant gives a better result. Regular vacuuming of the sediment that collects on the floor and monitoring of filter pressure are still required. Do not use the product together with other chemicals in the same basket; store it in a cool, dry place out of reach of children."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Poolbox"
      }
    ],
    "features": [
      {
        "tr": "Skimmerde yavaş çözünür",
        "en": "Slow skimmer release"
      },
      {
        "tr": "Sürekli berraklık",
        "en": "Continuous clarity"
      },
      {
        "tr": "Ölçüsüz kullanım",
        "en": "No measuring"
      }
    ],
    "usage": {
      "tr": "Skimmer sepetinde",
      "en": "In skimmer basket"
    },
    "galleryCount": 1
  },
  {
    "slug": "anti-iyon-quardex",
    "category": "chemicals",
    "brand": "Quardex",
    "name": {
      "tr": "Anti İyon",
      "en": "Metal Sequestrant"
    },
    "tagline": {
      "tr": "Lekesiz yüzey",
      "en": "Stain-free surface"
    },
    "description": {
      "tr": "Quardex anti iyon, sudaki demir ve bakır gibi metalleri bağlayarak yüzeyde leke ve renk oluşumunu önler.",
      "en": "Quardex sequestrant binds dissolved metals like iron and copper, preventing staining and discoloration on pool surfaces."
    },
    "body": [
          {
                "tr": "Kuyu suyuyla ya da sert şebeke suyuyla dolan havuzlarda suda çözünmüş demir, bakır ve manganez bulunabilir. Bu metaller klorla temas edip yükseltgendiğinde yüzeye tutunur; fayans ve liner üzerinde kahverengi, yeşil veya gri lekeler, suda ise hafif bir renk dönmesi görülür. Quardex Anti İyon, metal iyonlarını bağlayıp çözünmüş hâlde tutarak çökmelerini ve leke bırakmalarını önler.",
                "en": "Pools filled from a well or from hard mains water often carry dissolved iron, copper and manganese. Once these metals meet chlorine and oxidise, they cling to surfaces: brown, green or grey stains appear on tiles and liner, and the water itself can take on a faint tint. Quardex Metal Sequestrant binds the metal ions and holds them in solution, so they neither precipitate nor stain."
          },
          {
                "tr": "Ürün genellikle havuz ilk doldurulduğunda ve her büyük tamamlama suyundan sonra uygulanır; sirkülasyon pompası çalışırken havuz çevresinde gezdirilerek suya verilir ve filtrenin suyu birkaç tur döndürmesi beklenir. Dozaj için ürün etiketindeki talimata uyulur. Şok klorlama planlanıyorsa metal bağlayıcı önce verilir, klor sonra eklenir; iki kimyasal asla aynı kapta birleştirilmez.",
                "en": "It is normally applied when the pool is first filled and after every substantial top-up: with the circulation pump running, the product is poured into the water while walking around the pool, then the filter is left to turn the water over several times. Follow the dosage stated on the product label. If shock chlorination is planned, the sequestrant goes in first and the chlorine afterwards; the two are never combined in the same container."
          },
          {
                "tr": "Anti İyon bir leke önleyicidir; halihazırda oluşmuş eski lekeleri kendiliğinden silmez, bu durumda yüzey temizliği ayrıca yapılır. 10 kg ambalajı, metal yükü sürekli olan kuyu suyu beslemeli havuzlar için uygundur. Serin, kuru ve çocukların ulaşamayacağı bir yerde, diğer havuz kimyasallarından ayrı saklanır. Su testi ve doğru doz için bize danışabilirsiniz.",
                "en": "This is a preventive product: it does not erase stains that have already set, which call for separate surface cleaning. The 10 kg pack suits pools fed by well water, where the metal load is constant rather than occasional. Store it cool and dry, out of children's reach, and apart from other pool chemicals. For a water test and the right dose for your pool, talk to us."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Quardex"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "10 kg"
      }
    ],
    "features": [
      {
        "tr": "Metalleri bağlar",
        "en": "Binds metals"
      },
      {
        "tr": "Lekeyi önler",
        "en": "Prevents staining"
      },
      {
        "tr": "Su rengini korur",
        "en": "Protects water color"
      }
    ],
    "usage": {
      "tr": "Metal içeren sularda",
      "en": "Metal-rich water"
    },
    "galleryCount": 1
  },
  {
    "slug": "iyon-tutucu-selenoid",
    "category": "chemicals",
    "brand": "Selenoid",
    "name": {
      "tr": "İyon Tutucu",
      "en": "Metal Sequestrant"
    },
    "tagline": {
      "tr": "Temiz denge",
      "en": "Clean balance"
    },
    "description": {
      "tr": "Selenoid iyon tutucu, suda çözünmüş metal iyonlarını bağlayarak leke, bulanıklık ve renk bozulmalarının önüne geçer.",
      "en": "Selenoid sequestrant binds dissolved metal ions, preventing stains, cloudiness and color changes in pool water."
    },
    "body": [
          {
                "tr": "Havuz suyu berrak görünmesine rağmen açık renk yüzeylerde iz bırakıyor, saç ve mayolarda renk değişimi yapıyorsa akla ilk gelmesi gereken şey suda çözünmüş metal iyonlarıdır. Selenoid İyon Tutucu bu iyonları — çoğunlukla demir ve bakırı — kimyasal olarak bağlar; böylece klorla yükseltgenip bulanıklık, renk bozulması ve kalıcı leke oluşturmalarının önüne geçilir.",
                "en": "If the water looks clear yet still marks pale surfaces and discolours hair or swimwear, dissolved metal ions are the first thing to suspect. Selenoid Metal Sequestrant chemically binds those ions — most often iron and copper — so they cannot be oxidised by chlorine into cloudiness, discolouration and permanent staining."
          },
          {
                "tr": "Uygulama dolumun ve büyük su takviyelerinin ardından yapılır. Filtre devredeyken ürün seyreltilerek havuz yüzeyine dağıtılır, ardından sirkülasyonun bir süre sürmesi beklenir; dozaj üretici talimatına göre belirlenir. Bağlanan metaller filtrede tutulduğu ve geri yıkamayla sistemden çıktığı için uygulamadan sonra filtre basıncının kontrol edilmesi, gerekiyorsa geri yıkama yapılması yararlıdır.",
                "en": "Apply after filling and after any large water top-up. With the filter running, the product is diluted and distributed across the pool surface, and circulation is then left on for a while; the dosage follows the manufacturer's instructions. Because the bound metals are captured in the filter and leave the system with backwashing, it is worth checking filter pressure afterwards and backwashing if needed."
          },
          {
                "tr": "Metal tutucular pH ve klor dengesinin yerini almaz; pH 7,2–7,6 ve serbest klor 1–3 ppm aralığı korunmaya devam eder. Ürün 10 kg ambalajda sunulur ve başka kimyasallarla karıştırılmadan, asit ve klorun yanında durmayacak şekilde serin, kuru bir yerde saklanır. Havuzunuzun su analizine göre uygun ürünü birlikte seçebiliriz.",
                "en": "A sequestrant does not replace pH and chlorine control: a pH of 7.2–7.6 and free chlorine of 1–3 ppm still have to be maintained. The product comes in a 10 kg pack and should be kept cool and dry, never mixed with other chemicals and never stored beside acids or chlorine. We are happy to pick the right product with you on the basis of a water analysis."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Selenoid"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "10 kg"
      }
    ],
    "features": [
      {
        "tr": "Metal iyonlarını bağlar",
        "en": "Binds metal ions"
      },
      {
        "tr": "Lekelenmeyi önler",
        "en": "Prevents stains"
      },
      {
        "tr": "Suyu berrak tutar",
        "en": "Keeps water clear"
      }
    ],
    "usage": {
      "tr": "Metal içeren sularda",
      "en": "Metal-rich water"
    },
    "galleryCount": 1
  },
  {
    "slug": "iyon-topu",
    "category": "chemicals",
    "name": {
      "tr": "İyon Topu",
      "en": "Mineral Ion Ball"
    },
    "tagline": {
      "tr": "Dengeli mineral",
      "en": "Mineral balance"
    },
    "description": {
      "tr": "İyon topu, suya kademeli olarak mineral bırakarak su dengesini destekler ve temiz, sağlıklı bir havuz ortamı sağlar.",
      "en": "The ion ball gradually releases minerals into the water, supporting balance for a clean, healthy pool environment."
    },
    "body": [
          {
                "tr": "İyon topu, içindeki mineral çekirdekten suya çok yavaş mineral salan küçük bir aksesuardır. Skimmer sepetine, denge deposuna ya da suyun sürekli hareket ettiği bir noktaya yerleştirilir ve zamanla çözünerek suyun karakterine hafif bir katkı sağlar. Etkisi destekleyicidir; havuz suyunun dezenfeksiyonunu ve kimyasal dengesini sağlayan asıl ürün değildir.",
                "en": "The ion ball is a small accessory that releases minerals into the water very slowly from a mineral core. It sits in the skimmer basket, in the balance tank, or anywhere water moves continuously, dissolving over time to make a mild contribution to the character of the water. Its role is supportive: it is not what disinfects or chemically balances the pool."
          },
          {
                "tr": "Kullanımı basittir: ürün su akışının geçtiği bölmeye konur, belirgin şekilde küçüldüğünde veya üretici talimatındaki süre dolduğunda yenisiyle değiştirilir. Bu sırada havuzun rutini değişmez — klor, pH ve alkalinite ölçümleri aynı sıklıkta sürdürülür ve gereken kimyasallar eklenmeye devam eder.",
                "en": "Using it is straightforward: place it in the compartment the water flows through, and replace it once it has visibly shrunk or the interval given by the manufacturer has passed. The pool's routine does not change in the meantime — chlorine, pH and alkalinity are tested just as often, and the usual chemicals go on being added."
          },
          {
                "tr": "İyon topunu klor, pH düşürücü, alkalinite düzenleyici veya yosun önleyicinin yerine kullanmak doğru olmaz; bu ürün onların yanında, küçük bir iyileştirme kalemi olarak düşünülmelidir. 200 gramlık ambalajı özellikle küçük ve orta hacimli villa havuzlarında tercih edilir. Havuzunuz için anlamlı bir katkı olup olmayacağını mevcut su değerlerinize bakarak birlikte değerlendirebiliriz.",
                "en": "It should not be treated as a substitute for chlorine, pH reducer, alkalinity adjuster or algaecide; think of it as a small refinement alongside them. The 200 g pack is chosen mainly for small and mid-sized villa pools. Whether it adds anything meaningful to your pool is something we can judge together from your current water readings."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "200 gr"
      }
    ],
    "features": [
      {
        "tr": "Kademeli mineral salımı",
        "en": "Gradual mineral release"
      },
      {
        "tr": "Su dengesini destekler",
        "en": "Supports water balance"
      },
      {
        "tr": "Pratik kullanım",
        "en": "Practical to use"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 1
  },
  {
    "slug": "hucre-temizleyici-selenoid",
    "category": "chemicals",
    "brand": "Selenoid",
    "name": {
      "tr": "Hücre Temizleme Sıvısı",
      "en": "Salt Cell Cleaner"
    },
    "tagline": {
      "tr": "Verimli hücre",
      "en": "Efficient cell"
    },
    "description": {
      "tr": "Selenoid hücre temizleyici, tuz klor jeneratörü hücrelerindeki kireç ve kalıntıları çözerek verimli çalışmayı korur.",
      "en": "Selenoid cell cleaner dissolves scale and residue on salt chlorinator cells, maintaining efficient chlorine production."
    },
    "body": [
          {
                "tr": "Tuz klor sistemlerinde elektroliz hücresinin plakaları zamanla kireç tabakasıyla kaplanır. Kaplı plaka klor üretemez; cihaz düşük üretim ya da hücre hatası verir, ayar değişmediği hâlde suyun klor seviyesi düşer. Selenoid Hücre Temizleme Sıvısı bu kireci çözerek plaka yüzeylerini yeniden açar ve jeneratörün tasarlandığı verimle çalışmasını sağlar.",
                "en": "In salt chlorination systems, the plates of the electrolytic cell gradually become coated with scale. A coated plate cannot produce chlorine: the unit reports low output or a cell fault, and the chlorine level in the water falls even though nothing has been changed on the controller. Selenoid Salt Cell Cleaner dissolves that scale, reopening the plate surfaces so the generator works at the efficiency it was designed for."
          },
          {
                "tr": "Hücre sistemden sökülür, üreticinin tarif ettiği şekilde seyreltilmiş çözeltiye batırılır ve kireç çözülene kadar bekletilir; sonra bol suyla durulanıp yerine takılır. Plakalar sert fırça, tel veya keskin aletle kazınmaz — kaplama zarar görürse hücre kalıcı olarak verim kaybeder. İşleme başlamadan önce cihazın elektriği mutlaka kesilir.",
                "en": "The cell is removed from the system, immersed in a solution diluted as the manufacturer describes, and left until the scale has dissolved; it is then rinsed with plenty of water and refitted. The plates must never be scraped with a stiff brush, wire or sharp tool — once the coating is damaged, the cell loses output permanently. Always isolate the unit electrically before starting."
          },
          {
                "tr": "Kireç birikimi genellikle yüksek kalsiyum sertliği ve yüksek pH ile birlikte gelir; bu nedenle temizlikten sonra pH 7,2–7,6 ve kalsiyum sertliği 200–400 ppm aralığının korunması yeniden birikmeyi yavaşlatır. Asidik karakterli bir üründür, klorla karıştırılmaz ve ondan ayrı depolanır. 10 kg ambalajı düzenli hücre bakımı yapılan tesisler için uygundur.",
                "en": "Scaling usually goes hand in hand with high calcium hardness and high pH, so holding pH at 7.2–7.6 and calcium hardness at 200–400 ppm after cleaning slows the deposit from coming back. The product is acidic in character: it is never mixed with chlorine and is stored separately from it. The 10 kg pack suits installations where cell maintenance is part of the routine."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Selenoid"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "10 kg"
      }
    ],
    "features": [
      {
        "tr": "Kireci çözer",
        "en": "Dissolves scale"
      },
      {
        "tr": "Hücre ömrünü uzatır",
        "en": "Extends cell life"
      },
      {
        "tr": "Verimi korur",
        "en": "Maintains efficiency"
      }
    ],
    "usage": {
      "tr": "Tuz klor hücrelerinde",
      "en": "Salt chlorinator cells"
    },
    "galleryCount": 1
  },
  {
    "slug": "bagli-klor-poolbox",
    "category": "chemicals",
    "brand": "Poolbox",
    "name": {
      "tr": "Bağlı Klor Çözücü",
      "en": "Combined Chlorine Remover"
    },
    "tagline": {
      "tr": "Taze su",
      "en": "Fresh water"
    },
    "description": {
      "tr": "Poolbox bağlı klor giderici, koku ve göz yanmasına yol açan kloramin bileşiklerini parçalayarak suyun tazeliğini geri kazandırır.",
      "en": "Poolbox combined-chlorine remover breaks down chloramines that cause odor and eye irritation, restoring fresh water."
    },
    "body": [
          {
                "tr": "Havuzda keskin klor kokusu, göz kızarması ve ciltte batma hissi genellikle klor fazlalığından değil, bağlı klordan kaynaklanır. Ter, güneş kremi ve organik kirlilikle birleşen klor kloramine dönüşür; bu bileşik dezenfeksiyon yapmaz ama kokar ve rahatsızlık verir. Poolbox Bağlı Klor Çözücü, kloramin bileşiklerini parçalayarak suyun kokusuz ve konforlu hâline dönmesini sağlar.",
                "en": "A sharp chlorine smell, red eyes and a stinging feeling on the skin usually point not to too much chlorine but to combined chlorine. Chlorine that has reacted with sweat, sunscreen and organic soil turns into chloramines: compounds that no longer disinfect but do smell and irritate. Poolbox Combined Chlorine Remover breaks these chloramines down so the water returns to being odourless and comfortable."
          },
          {
                "tr": "Uygulamadan önce su testi yapılır ve serbest klor ile toplam klor değerleri karşılaştırılır; aradaki fark bağlı klor miktarını verir. Ürün sirkülasyon çalışırken ve tercihen akşam saatlerinde, güneş etkisi azaldığında suya verilir; dozaj ürün etiketine göre belirlenir. Ardından filtrenin suyu birkaç tur döndürmesi beklenir ve ölçüm tekrarlanır.",
                "en": "Before dosing, test the water and compare free chlorine with total chlorine; the gap between them is the combined chlorine. The product is added with the circulation running and preferably in the evening, once the sun is off the water, at the dosage given on the label. The filter is then left to turn the water over several times and the measurement repeated."
          },
          {
                "tr": "Yoğun kullanımdan sonra, uzun yağmurların ardından ve sezon içinde koku şikâyeti başladığında işe yarar. Başka kimyasallarla karıştırılarak değil, ayrı ve sırayla uygulanır. Serbest klorun 1–3 ppm, pH'ın 7,2–7,6 aralığında tutulması bağlı klor oluşumunu baştan azaltır. Ürün serin, kuru ve çocukların erişemeyeceği bir yerde saklanır.",
                "en": "It earns its place after heavy bathing loads, after long spells of rain, and whenever complaints about smell start mid-season. It is applied on its own and in sequence, never blended with other chemicals. Keeping free chlorine at 1–3 ppm and pH at 7.2–7.6 reduces how much combined chlorine forms in the first place. Store the product cool, dry and out of children's reach."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Poolbox"
      }
    ],
    "features": [
      {
        "tr": "Kloramini parçalar",
        "en": "Breaks chloramines"
      },
      {
        "tr": "Klor kokusunu giderir",
        "en": "Removes chlorine odor"
      },
      {
        "tr": "Göz yanmasını azaltır",
        "en": "Reduces eye irritation"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 1
  },
  {
    "slug": "cevre-temizlik-quardex",
    "category": "chemicals",
    "brand": "Quardex",
    "name": {
      "tr": "Ayak & Çevre Temizlik",
      "en": "Poolside Surface Cleaner"
    },
    "tagline": {
      "tr": "Temiz çevre",
      "en": "Clean surrounds"
    },
    "description": {
      "tr": "Quardex çevre temizlik ürünü, havuz kenarı ve ayak yıkama alanlarındaki kir ve tortuyu etkin şekilde temizler.",
      "en": "Quardex poolside cleaner effectively removes dirt and residue from pool surrounds and foot-wash areas."
    },
    "body": [
          {
                "tr": "Quardex Ayak & Çevre Temizlik ürünü havuz suyuna eklenmez; havuz kenarı, güverte, duş ve ayak yıkama alanlarının temizliği için üretilmiştir. Bu bölgelerde su, güneş kremi ve ayakla taşınan toprak birleşerek kaygan bir film ve gri tortu bırakır — hem görüntü hem de kayma güvenliği açısından düzenli temizlik isteyen yüzeylerdir.",
                "en": "Quardex Poolside Surface Cleaner is not added to the pool water; it is made for cleaning the pool surround, the deck, and the shower and footbath areas. In these spots water, sunscreen and soil carried in underfoot combine into a slippery film and a grey residue — surfaces that need regular cleaning both for appearance and for slip safety."
          },
          {
                "tr": "Ürün, etiketindeki orana göre seyreltilir, ıslatılmış zemine uygulanır, kısa süre bekletilip fırça veya yer yıkama makinesiyle ovulur ve bolca durulanır. Durulama suyunun havuza akmaması için zemin eğimi ve süzgeç yönü gözetilir. Yoğun kullanılan sezonda haftalık, sakin dönemlerde daha seyrek bir ritim çoğu villa havuzu için yeterli olur.",
                "en": "Dilute it at the ratio on the label, apply it to a pre-wetted floor, leave it briefly, scrub with a brush or a floor machine, and rinse generously. Watch the slope of the floor and the direction of the drains so the rinse water does not run into the pool. A weekly rhythm through the busy season, and a looser one in quiet periods, is enough for most villa pools."
          },
          {
                "tr": "Temizlikte yüzey malzemesi dikkate alınır; doğal taş ve ahşap güvertelerde önce küçük bir alanda denenmesi doğru olur. Diğer kimyasallarla karıştırılmaz, kapalı ambalajında serin ve kuru bir yerde, çocuklardan uzakta saklanır. 10 kg ambalajı, havuz çevresi geniş olan villalarda ve site havuzlarında rahat bir kullanım aralığı sağlar.",
                "en": "Take the surface material into account: on natural stone and timber decks it is wise to try a small area first. Do not mix it with other chemicals, and keep it sealed in a cool, dry place away from children. The 10 kg pack gives comfortable working range for villas with a large pool surround and for shared residential pools."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Quardex"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "10 kg"
      }
    ],
    "features": [
      {
        "tr": "Güçlü kir çözücü",
        "en": "Powerful dirt remover"
      },
      {
        "tr": "Kenar ve zemin için",
        "en": "Edges and floors"
      },
      {
        "tr": "Kolay uygulama",
        "en": "Easy application"
      }
    ],
    "usage": {
      "tr": "Havuz kenarı ve ayak yıkama alanları",
      "en": "Pool surrounds and foot-wash areas"
    },
    "galleryCount": 1
  },
  {
    "slug": "alkalinite-dusurucu-selenoid",
    "category": "chemicals",
    "brand": "Selenoid",
    "name": {
      "tr": "Sıvı Alkalinite Düşürücü",
      "en": "Liquid Alkalinity Reducer"
    },
    "tagline": {
      "tr": "Dengeli alkalinite",
      "en": "Balanced alkalinity"
    },
    "description": {
      "tr": "Selenoid sıvı alkalinite düşürücü, havuz suyundaki yüksek toplam alkaliniteyi ideal aralığa indirir.",
      "en": "Selenoid liquid alkalinity reducer lowers high total alkalinity in pool water to the ideal range."
    },
    "body": [
          {
                "tr": "Toplam alkalinite, suyun pH değişimlerine karşı direncini gösteren değerdir. 80–120 ppm aralığının üzerine çıktığında pH sürekli yukarı doğru sürüklenir ve yapılan ayarlamalar tutmaz; su donuklaşır, yüzeylerde kireç eğilimi artar. Selenoid Sıvı Alkalinite Düşürücü, asidik karakteriyle sudaki bikarbonat tamponunu kırarak toplam alkaliniteyi hedef aralığa indirir.",
                "en": "Total alkalinity measures how strongly the water resists changes in pH. Above the 80–120 ppm range the pH keeps drifting upward and adjustments refuse to hold; the water dulls and surfaces become prone to scale. Selenoid Liquid Alkalinity Reducer is acidic in character and breaks down the bicarbonate buffer in the water, bringing total alkalinity back into the target range."
          },
          {
                "tr": "pH düşürücüyle aynı kimyasal aileden gelseler de hedefleri farklıdır: pH düşürücü anlık pH değerini, alkalinite düşürücü ise suyun tampon kapasitesini düzeltir. Bu nedenle önce alkalinite aralığa alınır, pH ince ayarı ondan sonra yapılır. Ürün seyreltilerek ve sirkülasyon çalışırken suya verilir; birkaç saatlik dolaşımın ardından yeniden ölçüm yapılır, gerekiyorsa ikinci doz uygulanır.",
                "en": "Although it belongs to the same chemical family as pH reducer, the target is different: pH reducer corrects the momentary pH reading, while an alkalinity reducer corrects the water's buffering capacity. So alkalinity is brought into range first and pH fine-tuned afterwards. The product is diluted and added with the circulation running; after a few hours of turnover the water is tested again and a second dose applied if required."
          },
          {
                "tr": "Asit içerdiği için klor, hipoklorit ve diğer oksitleyicilerle asla karıştırılmaz, yanlarına da depolanmaz. Suya kimyasal eklenir, kimyasala su eklenmez; uygulama sırasında eldiven ve gözlük kullanılır. 25 kg ambalajı düzenli bakım yapılan büyük hacimli havuzlar için uygundur. Dozaj her zaman etikete ve güncel su testi sonucuna göre belirlenir.",
                "en": "Because it is acidic, it must never be mixed with chlorine, hypochlorite or other oxidisers, nor stored next to them. Always add chemical to water, never water to chemical, and wear gloves and eye protection while dosing. The 25 kg pack suits large-volume pools under regular maintenance. Dosage is always set by the label and by a current water test."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Selenoid"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "25 kg"
      }
    ],
    "features": [
      {
        "tr": "Toplam alkaliniteyi düşürür",
        "en": "Lowers total alkalinity"
      },
      {
        "tr": "pH dengesini destekler",
        "en": "Supports pH balance"
      },
      {
        "tr": "Sıvı, hızlı etki",
        "en": "Fast-acting liquid"
      }
    ],
    "usage": {
      "tr": "Alkalinitesi yüksek havuzlarda",
      "en": "High-alkalinity pools"
    },
    "galleryCount": 1
  },
  {
    "slug": "temizlik-asidi-selenoid",
    "category": "chemicals",
    "brand": "Selenoid",
    "name": {
      "tr": "Sıvı Temizlik Asidi",
      "en": "Cleaning Acid"
    },
    "tagline": {
      "tr": "Kireç çözücü",
      "en": "Scale remover"
    },
    "description": {
      "tr": "Selenoid temizlik asidi, havuz yüzeylerindeki kireç ve kalıntıları çözerek etkili yüzey temizliği sağlar.",
      "en": "Selenoid cleaning acid dissolves scale and deposits on pool surfaces for effective surface cleaning."
    },
    "body": [
          {
                "tr": "Selenoid Sıvı Temizlik Asidi havuz suyuna eklenen bir denge kimyasalı değildir; boşaltılmış ya da su seviyesi indirilmiş havuzun yüzeylerinde biriken kireç, tortu ve mineral kabuğunu çözmek için kullanılan bir temizlik ürünüdür. Fayans aralarındaki beyaz kireç izleri, su hattındaki kirlilik bandı ve sert su kalıntıları bu ürünün çalışma alanına girer.",
                "en": "Selenoid Cleaning Acid is not a balancing chemical that goes into the pool water; it is a cleaning product for dissolving the scale, sediment and mineral crust that build up on the surfaces of a drained pool or one whose level has been lowered. White lime marks in tile joints, the grime band at the waterline and hard-water deposits are its working territory."
          },
          {
                "tr": "Uygulama, etiketteki orana göre seyreltip küçük bir bölümde denemekle başlar; ürün yüzeye dağıtılır, belirtilen kadar bekletilir, yumuşak fırçayla ovulur ve bol suyla iyice durulanır. Durulama suyunun havuza ve doğrudan filtre sistemine karışmaması gerekir. Doğal taş, renkli sıva ve bazı kaplamalar asitten etkilenebileceği için yüzey malzemesinin önceden bilinmesi şarttır.",
                "en": "Work begins by diluting it as the label specifies and testing it on a small area: the product is spread over the surface, left for the stated time, scrubbed with a soft brush and then rinsed thoroughly with plenty of water. The rinse water must not be allowed to run into the pool or straight into the filtration system. Natural stone, coloured render and some coatings can be attacked by acid, so the surface material has to be known in advance."
          },
          {
                "tr": "Güçlü asidik bir üründür: klor ve hipoklorit ile asla karıştırılmaz, aynı depoda yan yana tutulmaz. Suya asit eklenir, aside su eklenmez. Eldiven, gözlük ve iyi havalandırma zorunludur; serin, kuru ve çocuklardan uzak bir yerde saklanır. Renovasyon ve sezon açılışı temizliklerinde bu işi ekibimizle birlikte planlamanızı öneririz.",
                "en": "This is a strongly acidic product: never mix it with chlorine or hypochlorite, and never store the two side by side. Add acid to water, never water to acid. Gloves, eye protection and good ventilation are mandatory, and the container belongs in a cool, dry place out of children's reach. For renovation work and season-opening cleans, we suggest planning the job together with our team."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Kimyasal"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Selenoid"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "25 kg"
      }
    ],
    "features": [
      {
        "tr": "Kireç ve tortu çözer",
        "en": "Dissolves scale and deposits"
      },
      {
        "tr": "Yüzey temizliği",
        "en": "Surface cleaning"
      },
      {
        "tr": "Etkili sonuç",
        "en": "Effective results"
      }
    ],
    "usage": {
      "tr": "Havuz yüzeyi temizliğinde",
      "en": "Pool surface cleaning"
    },
    "galleryCount": 1
  },
  {
    "slug": "led-23w",
    "category": "lighting",
    "brand": "Aquativ",
    "name": {
      "tr": "23W SMART LED",
      "en": "23W RGB/White LED"
    },
    "tagline": {
      "tr": "Renkli aydınlatma",
      "en": "Colour lighting"
    },
    "description": {
      "tr": "Aquativ 23W sıva üstü havuz LED'i, RGB veya beyaz ışıkla beyaz ya da antrasit çerçeve seçeneğinde etkileyici aydınlatma sunar.",
      "en": "Aquativ 23W surface-mount pool LED delivers striking RGB or white lighting with white or anthracite bezel options."
    },
    "body": [
          {
                "tr": "Havuz aydınlatması yalnızca görünüm meselesi değildir; akşam saatlerinde suyun içini görünür kılarak havuzun güvenli biçimde kullanılmasını da sağlar. Aquativ 23W SMART LED, sıva üstü tipte bir armatürdür; havuz duvarındaki yuvasına oturur ve ışığı su kütlesinin içine yayar. RGB seçenek renkli sahneler kurmaya, beyaz seçenek ise suyun ve zeminin net görünmesine yöneliktir.",
                "en": "Pool lighting is not only a question of appearance; by making the water visible after dark it also makes the pool safer to use. The Aquativ 23W SMART LED is a surface-mounted fixture: it sits in its housing on the pool wall and spreads light into the body of the water. The RGB option is for creating coloured scenes, while the white option is for seeing the water and the floor clearly."
          },
          {
                "tr": "Sonucu belirleyen şey büyük ölçüde armatürün konumudur. Işık, havuzun uzun kenarı boyunca ve mümkün olduğunca oturma alanının tersine bakacak şekilde yerleştirildiğinde göz kamaşması azalır, su yüzeyi daha dengeli görünür. Lens yüzeyinde zamanla oluşan kireç ve biyofilm ışığı donuklaştırdığı için camın periyodik olarak silinmesi çoğu zaman yeterli bakımdır. Beyaz ve antrasit çerçeve seçenekleri ise havuz kaplaması ve kenar taşıyla uyum kurmak içindir.",
                "en": "What largely determines the result is where the fixture sits. When the light is placed along the long side of the pool and faces away from the seating area as far as possible, glare is reduced and the water surface reads more evenly. Limescale and biofilm build up on the lens over time and dull the output, so wiping the glass periodically is usually all the maintenance required. The white and anthracite bezel options exist to match the pool finish and coping stone."
          },
          {
                "tr": "Havuz armatürleri suyun ve elektriğin bir arada olduğu bir uygulamadır. Besleme uygun bir trafo ve topraklama ile kurulmalı; sızdırmazlık ve kablo geçişleri mutlaka yetkili bir uygulamacı tarafından yapılmalıdır. Aydınlatma planının havuz inşaatı ya da renovasyon aşamasında belirlenmesi en pratik yoldur. Seçim ve uygulama ayrıntıları için bizimle iletişime geçebilirsiniz.",
                "en": "Pool fixtures are an application where water and electricity meet. The supply must be installed with a suitable transformer and proper earthing, and the sealing and cable routing must always be carried out by a qualified installer. Deciding the lighting plan during construction or renovation is by far the most practical route. Get in touch with us for selection and installation details."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Aydınlatma"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Aquativ"
      },
      {
        "label": {
          "tr": "Seçenek",
          "en": "Option"
        },
        "value": "Beyaz / Antrasit çerçeve"
      }
    ],
    "features": [
      {
        "tr": "RGB ve beyaz ışık",
        "en": "RGB and white light"
      },
      {
        "tr": "Sıva üstü montaj",
        "en": "Surface-mount fitting"
      },
      {
        "tr": "Beyaz veya antrasit çerçeve",
        "en": "White or anthracite bezel"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 2
  },
  {
    "slug": "led-32w",
    "category": "lighting",
    "brand": "Tenda",
    "name": {
      "tr": "32W LED",
      "en": "32W Pool LED"
    },
    "tagline": {
      "tr": "Güçlü ışık",
      "en": "Powerful light"
    },
    "description": {
      "tr": "Tenda 32W havuz LED aydınlatması, geniş havuzlarda güçlü ve homojen aydınlatma için beyaz veya antrasit çerçeve ile sunulur.",
      "en": "Tenda 32W pool LED provides strong, even illumination for larger pools, available with white or anthracite bezel."
    },
    "body": [
          {
                "tr": "Geniş havuzlarda aydınlatmanın en sık görülen sorunu, ışığın merkezde toplanıp kenarların karanlık kalmasıdır. Tenda 32W LED, daha büyük su hacimlerinde bu dengeyi kurmak için tercih edilen bir armatürdür; tek bir noktadan daha geniş bir alanı aydınlatır ve havuz tabanında homojen bir dağılım hedefler. Böylece akşam kullanımında havuzun tamamı okunabilir hâle gelir.",
                "en": "In large pools the most common lighting problem is light gathering in the middle while the edges stay dark. The Tenda 32W LED is the fixture chosen to restore that balance in bigger volumes of water: it covers a wider area from a single point and aims for an even spread across the pool floor. The whole pool then reads clearly during evening use."
          },
          {
                "tr": "Uygulamada armatürler genellikle havuzun uzun kenarına, birbirine simetrik aralıklarla ve su seviyesinin altına yerleştirilir; böylece ışık yukarı doğru parlamak yerine su içinde dağılır. Kaç adet gerektiği havuzun boyutu, derinliği ve kaplama rengiyle birlikte değerlendirilir — koyu kaplamalar ışığı daha çok yuttuğu için aynı ölçüdeki havuzda daha fazla armatür gerekebilir. Lens camının sezon içinde birkaç kez silinmesi ışık veriminin düşmemesi için yeterlidir.",
                "en": "In practice the fixtures are usually set along the long side of the pool, at symmetrical intervals and below the water line, so the light disperses through the water instead of glaring upward. How many are needed is assessed together with the pool's size, depth and finish colour: dark finishes absorb more light, so a pool of the same size may need more fixtures. Wiping the lens a few times per season is enough to keep the output from dropping."
          },
          {
                "tr": "Bu ürünlerde en hassas başlık elektrik tarafıdır: besleme uygun trafo üzerinden ve su geçirmez bağlantı elemanlarıyla kurulmalı, montaj yetkili bir uygulamacıya bırakılmalıdır. Beyaz ve antrasit çerçeve seçenekleri havuz kenarıyla görsel uyum içindir. Projenize kaç armatürün uygun olduğunu birlikte değerlendirebiliriz.",
                "en": "The electrical side is the most sensitive aspect of these products: the supply must run through a suitable transformer with watertight connectors, and installation should be left to a qualified installer. The white and anthracite bezel options are there for visual harmony with the pool surround. We are happy to work out with you how many fixtures suit your project."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Aydınlatma"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Tenda"
      },
      {
        "label": {
          "tr": "Seçenek",
          "en": "Option"
        },
        "value": "Beyaz / Antrasit çerçeve"
      }
    ],
    "features": [
      {
        "tr": "Yüksek ışık gücü",
        "en": "High light output"
      },
      {
        "tr": "Geniş havuzlara uygun",
        "en": "Suits larger pools"
      },
      {
        "tr": "Beyaz veya antrasit çerçeve",
        "en": "White or anthracite bezel"
      }
    ],
    "usage": {
      "tr": "Büyük havuzlarda",
      "en": "Larger pools"
    },
    "galleryCount": 1
  },
  {
    "slug": "led-9w",
    "category": "lighting",
    "brand": "Aquativ",
    "name": {
      "tr": "9W MINI LED",
      "en": "9W Mini LED"
    },
    "tagline": {
      "tr": "İnce vurgu",
      "en": "Subtle accent"
    },
    "description": {
      "tr": "Aquativ 9W mini havuz LED'i, havuz içinde ince vurgu aydınlatması için antrasit veya beyaz çerçeve seçeneğiyle sunulur.",
      "en": "Aquativ 9W mini pool LED offers subtle accent lighting with anthracite or white bezel options."
    },
    "body": [
          {
                "tr": "Bir havuzun her noktası aynı miktarda ışık istemez. Aquativ 9W MINI LED, ana aydınlatmanın yerini almak için değil, belirli bir yüzeyi vurgulamak için üretilmiş küçük gövdeli bir armatürdür: basamak kenarı, oturma sekisi, jakuzi nişi ya da dokusunun görünmesini istediğiniz bir duvar kaplaması gibi. İşlevi genel aydınlık sağlamak değil, o bölgeyi öne çıkarmaktır.",
                "en": "Not every part of a pool wants the same amount of light. The Aquativ 9W MINI LED is a small-bodied fixture made not to replace the main lighting but to accent a particular surface: the edge of a step, a seating ledge, a spa niche, or a wall finish whose texture you want to be seen. Its job is not general illumination but bringing that area forward."
          },
          {
                "tr": "Bu nedenle mini armatürler çoğunlukla bir ana armatürle birlikte, ikinci bir katman olarak planlanır. Küçük gövdesi sayesinde dar nişlere ve basamak yüzeylerine girebilir; birkaç adedi düşük şiddette kullanıldığında havuz gece daha yumuşak ve daha derin görünür. Işığın doğrudan oturma alanına bakmaması ve lens camının kireçten temiz tutulması, sonucu belirleyen iki basit ayrıntıdır.",
                "en": "For that reason mini fixtures are usually planned as a second layer alongside a main fixture. Their small body fits into narrow niches and step faces, and a few of them at low intensity make the pool look softer and deeper at night. Keeping the light from facing the seating area directly, and keeping the lens free of limescale, are the two simple details that decide the result."
          },
          {
                "tr": "Montaj yerinin havuz kabuğu aşamasında biliniyor olması işi kolaylaştırır; sonradan eklenmesi mümkün olsa da kaplamaya müdahale gerektirir. Elektrik beslemesi uygun trafo ile yapılmalı, sızdırmazlık ve bağlantılar yetkili bir uygulamacı tarafından tamamlanmalıdır. Antrasit ya da beyaz çerçeve, kenar detayıyla uyum düşünülerek seçilir.",
                "en": "It helps a great deal if the mounting position is known while the pool shell is being built; adding it later is possible but means working into the finish. The power supply must run through a suitable transformer, and the sealing and connections must be completed by a qualified installer. The anthracite or white bezel is chosen with the surrounding detail in mind."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Aydınlatma"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Aquativ"
      },
      {
        "label": {
          "tr": "Seçenek",
          "en": "Option"
        },
        "value": "Antrasit / Beyaz çerçeve"
      }
    ],
    "features": [
      {
        "tr": "Vurgu aydınlatması",
        "en": "Accent lighting"
      },
      {
        "tr": "Kompakt tasarım",
        "en": "Compact design"
      },
      {
        "tr": "Antrasit veya beyaz çerçeve",
        "en": "Anthracite or white bezel"
      }
    ],
    "usage": {
      "tr": "Vurgu aydınlatmasında",
      "en": "Accent lighting"
    },
    "galleryCount": 1
  },
  {
    "slug": "kum-filtresi-600",
    "category": "circulation",
    "brand": "Tenda",
    "name": {
      "tr": "Kum Filtresi 600mm",
      "en": "600mm Sand Filter"
    },
    "tagline": {
      "tr": "Berrak su",
      "en": "Clear water"
    },
    "description": {
      "tr": "Tenda 600mm plastik gövdeli kum filtresi, havuz suyundaki partikülleri tutarak berrak ve sağlıklı su sağlar.",
      "en": "Tenda 600mm plastic-body sand filter traps particles in pool water for clear, healthy water."
    },
    "body": [
          {
                "tr": "Kum filtresi, havuz suyunun mekanik temizliğini yapan parçadır. Pompanın gönderdiği su gövde içindeki filtre kumu yatağından geçer; tanecikler arasındaki boşluklar toz, polen, saç ve ölü yosun gibi partikülleri tutar, berraklaşan su dönüş hattından havuza geri verilir. Tenda 600mm plastik gövdeli model, villa havuzlarında sık karşılaşılan bir gövde ölçüsüdür.",
                "en": "A sand filter is the component that handles the mechanical cleaning of pool water. Water delivered by the pump passes through the bed of filter sand inside the vessel; the gaps between the grains trap particles such as dust, pollen, hair and dead algae, and the clarified water returns to the pool through the return line. The Tenda 600mm plastic-bodied model is a vessel size commonly seen in villa pools."
          },
          {
                "tr": "Kum tuttuğu kiri zamanla biriktirir ve akışa karşı direnç artar; bu yüzden filtre belirli aralıklarla ters yıkanır. Ters yıkamada akış yönü çevrilir, kum yatağı kabarır ve tutulan kir tahliye hattına gönderilir; ardından kısa bir durulama ile yatak yeniden oturtulur. Manometredeki basıncın temiz durumdaki değerine göre belirgin biçimde yükselmesi, ters yıkama zamanının geldiğini gösteren en güvenilir işarettir.",
                "en": "The sand gradually accumulates the dirt it captures and resistance to flow rises, which is why the filter is backwashed at intervals. In a backwash the flow direction is reversed, the sand bed lifts and the trapped dirt is sent to the waste line; a short rinse then settles the bed again. A clear rise in the pressure gauge compared with its clean-filter reading is the most reliable sign that a backwash is due."
          },
          {
                "tr": "Filtre kumu sonsuz ömürlü değildir; taneler yuvarlanıp keskinliğini yitirdiğinde tutma gücü azalır ve kumun yenilenmesi gerekir. Filtrenin pompayla doğru eşleştirilmesi de en az kum kadar önemlidir, aksi hâlde ne filtreleme ne de ters yıkama beklendiği gibi çalışır. Havuzunuza uygun gövde ölçüsü için bize danışabilirsiniz.",
                "en": "Filter sand does not last forever; once the grains round off and lose their sharpness their holding power drops and the sand needs replacing. Matching the filter correctly to the pump matters just as much as the sand, otherwise neither filtration nor backwashing works as intended. Ask us about the vessel size that suits your pool."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Sirkülasyon"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Tenda"
      }
    ],
    "features": [
      {
        "tr": "Plastik gövde, korozyona dayanıklı",
        "en": "Corrosion-resistant plastic body"
      },
      {
        "tr": "600mm tank çapı",
        "en": "600mm tank diameter"
      },
      {
        "tr": "Etkili filtrasyon",
        "en": "Effective filtration"
      }
    ],
    "usage": {
      "tr": "Havuz filtrasyon sisteminde",
      "en": "Pool filtration systems"
    },
    "galleryCount": 1
  },
  {
    "slug": "pompa-1hp",
    "category": "circulation",
    "brand": "Tenda",
    "name": {
      "tr": "Havuz Pompası 1 HP",
      "en": "1 HP Pool Pump"
    },
    "tagline": {
      "tr": "Sürekli sirkülasyon",
      "en": "Steady circulation"
    },
    "description": {
      "tr": "Tenda 1 HP monofaze havuz pompası, suyu güvenilir şekilde döndürerek filtrasyon ve dengeli su sirkülasyonu sağlar.",
      "en": "Tenda 1 HP single-phase pool pump reliably circulates water for filtration and balanced water flow."
    },
    "body": [
          {
                "tr": "Pompa havuz tesisatının kalbidir. Skimmer ve dip emişten aldığı suyu ön filtre sepetinden geçirir, kum filtresine basar ve temizlenen suyu dönüş ağızlarından havuza geri verir. Bu döngü olmadan ne filtreleme ne de kimyasalların havuz içinde eşit dağılması mümkündür. Tenda 1 HP monofaze model, tek fazlı elektrik altyapısına sahip villa havuzları için üretilmiştir.",
                "en": "The pump is the heart of a pool's plumbing. It draws water from the skimmer and main drain, passes it through the strainer basket, pushes it into the sand filter and returns the cleaned water to the pool through the inlets. Without this circuit neither filtration nor an even distribution of chemicals through the pool is possible. The Tenda 1 HP single-phase model is made for villa pools with a single-phase electrical supply."
          },
          {
                "tr": "Pompa seçiminde belirleyici olan tek başına güç değeri değil, havuzun su hacminin gün içinde kaç kez döndürülmesi gerektiğidir; buna filtre kapasitesi, boru çapı ve tesisat uzunluğundan gelen direnç eklenir. Olması gerekenden güçlü bir pompa filtreyi zorlar ve boşa enerji harcar; zayıf bir pompa ise suyun tamamını dolaştıramaz, havuzda ölü bölgeler kalır. Doğru eşleşme bu yüzden tahminle değil hesapla belirlenir.",
                "en": "What decides pump selection is not the power rating on its own but how many times the pool's volume needs to be turned over during the day, together with the filter's capacity, the pipe diameter and the resistance created by the length of the plumbing. A pump stronger than necessary strains the filter and wastes energy; one that is too weak cannot move the whole body of water and leaves dead zones. The right match is therefore worked out by calculation, not guesswork."
          },
          {
                "tr": "Çalışma düzeninde ön filtre sepetinin düzenli boşaltılması, pompanın susuz çalıştırılmaması ve elektrik bağlantısının topraklamalı, su almayan bir panodan yapılması temel kurallardır. Montaj ve devreye alma yetkili bir uygulamacının işidir.",
                "en": "In day-to-day operation the basic rules are emptying the strainer basket regularly, never running the pump dry, and taking the electrical connection from an earthed panel that stays dry. Installation and commissioning are work for a qualified installer."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Sirkülasyon"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Tenda"
      }
    ],
    "features": [
      {
        "tr": "1 HP monofaze motor",
        "en": "1 HP single-phase motor"
      },
      {
        "tr": "Güvenilir sirkülasyon",
        "en": "Reliable circulation"
      },
      {
        "tr": "Sessiz çalışma",
        "en": "Quiet operation"
      }
    ],
    "usage": {
      "tr": "Havuz sirkülasyon sisteminde",
      "en": "Pool circulation systems"
    },
    "galleryCount": 1
  },
  {
    "slug": "isikli-fiskiye",
    "category": "decorative",
    "brand": "Aquativ",
    "name": {
      "tr": "Işıklı Fıskiye",
      "en": "Aquativ RGB Illuminated Fountain"
    },
    "tagline": {
      "tr": "Renkli su gösterisi",
      "en": "Colorful water show"
    },
    "description": {
      "tr": "Aquativ ışıklı fıskiye, RGB LED aydınlatmayla havuz yüzeyine renk değiştiren su jetleri ve gece atmosferi katar.",
      "en": "The Aquativ illuminated fountain adds color-shifting water jets and nighttime ambiance to your pool surface with RGB LED lighting."
    },
    "body": [
          {
                "tr": "Işıklı fıskiye havuzun görsel tarafına çalışan bir parçadır: suyu yukarı doğru püskürterek yüzeyde hareket yaratır, içindeki RGB LED ise bu su perdesini renklendirir. Gündüz sade bir su jeti olarak görülürken akşam saatlerinde havuzun atmosferini belirleyen unsura dönüşür. Yüzeydeki hafif hareket aynı zamanda suyun daha canlı görünmesini sağlar.",
                "en": "An illuminated fountain works on the visual side of a pool: it jets water upward to create movement at the surface, while the RGB LED inside colours that curtain of water. During the day it reads as a plain jet; in the evening it becomes the element that sets the mood of the pool. The gentle movement at the surface also makes the water look more alive."
          },
          {
                "tr": "Fıskiye genellikle havuz kenarına ya da basamak yakınına, yüzme hattını kesmeyecek bir noktaya yerleştirilir. Jet yüksekliğinin rüzgârlı günlerde kısılması yerinde olur; aksi hâlde su havuz dışına savrulur ve seviye fark edilir biçimde düşer. Renk geçişlerinin sürekli değişmek yerine sabit bir tonda tutulduğu bir sahne, çoğu akşam için daha dingin bir sonuç verir.",
                "en": "The fountain is usually placed at the pool edge or near the steps, at a point that does not cut across the swimming lane. Lowering the jet height on windy days is sensible; otherwise water is carried outside the pool and the level drops noticeably. A scene where the colour is held at one steady tone rather than cycling constantly gives a calmer result on most evenings."
          },
          {
                "tr": "Nozul ağzında zamanla kireç birikebilir; jet zayıfladığında ağzın temizlenmesi çoğu zaman yeterli olur. Su temasının olduğu elektrikli bir üründe besleme ve bağlantı yalıtımı yetkili bir uygulamacı tarafından yapılmalıdır. Havuzunuza uygun model için bizimle iletişime geçebilirsiniz.",
                "en": "Limescale can build up at the nozzle over time; when the jet weakens, cleaning the opening is usually enough. In an electrical product that is in contact with water, the supply and the insulation of the connections must be handled by a qualified installer. Get in touch with us for the model that suits your pool."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Dekoratif"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Aquativ"
      }
    ],
    "features": [
      {
        "tr": "RGB renk geçişleri",
        "en": "RGB color transitions"
      },
      {
        "tr": "Dekoratif su jeti",
        "en": "Decorative water jet"
      },
      {
        "tr": "Gece atmosferi",
        "en": "Nighttime ambiance"
      }
    ],
    "usage": {
      "tr": "Dekoratif havuzlarda",
      "en": "Decorative pools"
    },
    "galleryCount": 1
  },
  {
    "slug": "solar-fiskiye",
    "category": "decorative",
    "brand": "Aquativ",
    "name": {
      "tr": "Solar Fıskiye",
      "en": "Aquativ Solar RGB Fountain"
    },
    "tagline": {
      "tr": "Kablosuz enerji",
      "en": "Wireless energy"
    },
    "description": {
      "tr": "Aquativ solar fıskiye, güneş enerjisiyle çalışan kablosuz yapısı ve RGB LED ışığıyla havuza zahmetsiz renkli su gösterisi sunar.",
      "en": "The Aquativ solar fountain delivers an effortless colorful water display with its wireless, solar-powered design and RGB LED lighting."
    },
    "body": [
          {
                "tr": "Solar fıskiye, havuza kablo çekmeden su hareketi ve renkli ışık eklemek isteyenler için düşünülmüş bir üründür. Üstündeki güneş paneli gün içinde ışığı toplar, küçük pompa suyu yukarı püskürtür, RGB LED ise akşam bu jeti renklendirir. Tesisata bağlanmadığı için havuz içindeki yeri istendiği zaman kolayca değiştirilebilir.",
                "en": "A solar fountain is meant for anyone who wants water movement and coloured light in the pool without running a cable to it. The solar panel on top gathers light during the day, a small pump sends water upward, and the RGB LED colours that jet in the evening. Because it is not tied into the plumbing, its position in the pool can be changed whenever you like."
          },
          {
                "tr": "Verimi doğrudan güneşe bağlıdır: panelin gölgede kalmadığı, açık bir noktada yüzdürülmesi jetin gücünü belirler. Bulutlu günlerde ve akşamın ilerleyen saatlerinde çalışma zayıflar ya da durur; bu, ürünün doğasından gelen normal bir davranıştır. Panel yüzeyinin tozdan ve kuruyan su lekelerinden arındırılması basit ama etkisi belirgin bir bakımdır.",
                "en": "Its output depends directly on sunlight: floating it in an open spot where the panel is not shaded is what determines the strength of the jet. On overcast days and later in the evening it weakens or stops, which is normal behaviour for this kind of product. Keeping the panel surface free of dust and dried water spots is simple maintenance with a clearly noticeable effect."
          },
          {
                "tr": "Açık havuzlarda kullanıma göre tasarlandığı için kapalı ve gölgeli alanlarda beklenen sonucu vermez. Havuz temizliği, kış kapatması ya da şok klorlama öncesinde sudan çıkarılması ürünün ömrü açısından iyi bir alışkanlıktır. Kalıcı ve daha güçlü bir su gösterisi isteniyorsa tesisata bağlı ışıklı fıskiye daha uygun bir tercihtir.",
                "en": "Since it is designed for outdoor pools, it will not give the expected result in covered or shaded areas. Taking it out of the water before cleaning the pool, winterising, or shock chlorinating is a good habit for the life of the product. If a permanent and stronger water display is wanted, a plumbed-in illuminated fountain is the better choice."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Dekoratif"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Aquativ"
      }
    ],
    "features": [
      {
        "tr": "Güneş enerjili",
        "en": "Solar powered"
      },
      {
        "tr": "Kablosuz kurulum",
        "en": "Wireless setup"
      },
      {
        "tr": "RGB aydınlatma",
        "en": "RGB lighting"
      }
    ],
    "usage": {
      "tr": "Açık havuzlarda",
      "en": "Outdoor pools"
    },
    "galleryCount": 1
  },
  {
    "slug": "balina-hoparlor",
    "category": "decorative",
    "name": {
      "tr": "Balina Hoparlör",
      "en": "Floating Whale Bluetooth Speaker"
    },
    "tagline": {
      "tr": "Suda müzik",
      "en": "Music on water"
    },
    "description": {
      "tr": "Balina formundaki bu yüzen su geçirmez Bluetooth hoparlör, havuz keyfine kablosuz müzik ve şirin bir dekoratif dokunuş katar.",
      "en": "This whale-shaped floating waterproof Bluetooth speaker brings wireless music and a playful decorative touch to your poolside."
    },
    "body": [
          {
                "tr": "Balina formundaki bu hoparlör, havuz kenarında müzik dinlemenin en pratik yollarından biridir: su üstünde yüzer, telefonunuza Bluetooth ile bağlanır, kablo ya da priz gerektirmez. Su geçirmez gövdesi havuz çevresindeki sıçrama ve ıslak zemin koşulları düşünülerek tasarlanmıştır. Formu nedeniyle kullanılmadığı zamanlarda da havuz kenarında dekoratif bir obje gibi durur.",
                "en": "This whale-shaped speaker is one of the most practical ways to listen to music by the pool: it floats on the water, pairs with your phone over Bluetooth, and needs neither a cable nor a socket. Its waterproof body is designed with the splashing and wet surfaces around a pool in mind. Thanks to its shape it also sits by the pool as a decorative object when it is not in use."
          },
          {
                "tr": "Kullanımı basittir; şarj edilir, açılır ve eşleştirilir. Suyun içine bastırmak yerine yüzeyde serbest bırakılması ya da kenara alınması daha doğrudur, çünkü ses su yüzeyinden yayıldığında daha net duyulur. Şarj girişinin kapağının kullanımdan önce tam kapatıldığından emin olmak, su geçirmezliğin sürmesi için en önemli ayrıntıdır.",
                "en": "Using it is simple: charge it, switch it on and pair it. Rather than pushing it under the water it is better to let it float freely or set it on the edge, since the sound carries more clearly from the surface. Making sure the cover over the charging port is fully closed before use is the single most important detail for keeping it watertight."
          },
          {
                "tr": "Su geçirmezlik sıçramaya ve yüzmeye karşıdır; uzun süre suyun altında tutmak, şok klorlama sırasında suda bırakmak ya da deniz suyundan sonra durulamamak ürünü yorar. Sezon sonunda kurulanıp serin bir yerde saklanması yeterlidir. Ürün hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
                "en": "The waterproofing is against splashing and floating; holding it under water for long periods, leaving it in the pool during shock chlorination, or not rinsing it after sea water all wear it down. At the end of the season it is enough to dry it and store it somewhere cool. Get in touch with us for information about the product."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Dekoratif"
      }
    ],
    "features": [
      {
        "tr": "Su geçirmez gövde",
        "en": "Waterproof body"
      },
      {
        "tr": "Bluetooth bağlantı",
        "en": "Bluetooth connectivity"
      },
      {
        "tr": "Yüzen tasarım",
        "en": "Floating design"
      }
    ],
    "usage": {
      "tr": "Havuz ve deniz",
      "en": "Pool and sea"
    },
    "galleryCount": 1
  },
  {
    "slug": "yuzen-hoparlor",
    "category": "decorative",
    "name": {
      "tr": "Yüzen Hoparlör",
      "en": "Floating RGB Bluetooth Speaker"
    },
    "tagline": {
      "tr": "Işık ve ses",
      "en": "Light and sound"
    },
    "description": {
      "tr": "Yüzen su geçirmez bu Bluetooth hoparlör, RGB ışık efektleri ve kablosuz ses ile havuza hem müzik hem atmosfer taşır.",
      "en": "This floating waterproof Bluetooth speaker brings both music and ambiance to your pool with RGB light effects and wireless sound."
    },
    "body": [
          {
                "tr": "Yüzen hoparlör sesi ve ışığı tek parçada birleştirir. Su üstünde durur, telefon ya da tabletle Bluetooth üzerinden eşleşir; gövdesindeki RGB LED ise akşam saatlerinde suya renk yansıtarak havuzun atmosferine katkı verir. Kablo ve priz gerektirmediği için havuz kenarındaki düzeni bozmadan kullanılır.",
                "en": "A floating speaker brings sound and light together in one piece. It sits on the water, pairs with a phone or tablet over Bluetooth, and the RGB LED in its body throws colour onto the water in the evening, adding to the mood of the pool. As it needs no cable or socket, it can be used without disturbing the arrangement around the pool."
          },
          {
                "tr": "Birden fazla adedi havuzun farklı noktalarına dağıtıldığında ışık daha dengeli görünür; tek bir adet ise oturma alanının yakınında daha anlamlı olur. Ses seviyesini havuzun yansımalı yüzeylerine göre ayarlamak gerekir, çünkü su ve kenar taşları sesi beklenenden fazla taşır. Işık modunun sabit tutulması, hızlı renk geçişlerine kıyasla çoğu akşam daha dingin bir görüntü verir.",
                "en": "Spread over different points of the pool, several units make the light look more balanced; a single unit makes more sense close to the seating area. The volume needs to be set with the pool's reflective surfaces in mind, since water and coping stones carry sound further than expected. Holding the light on a steady mode gives a calmer picture on most evenings than fast colour cycling."
          },
          {
                "tr": "Su geçirmez gövde yüzme ve sıçrama koşulları içindir; şarj kapağı tam kapatılmalı, ürün suyun altında tutulmamalıdır. Şok klorlama sonrasındaki yoğun klorlu suda ya da kış boyunca havuzda bırakılması yerine kurulanıp serin bir yerde saklanması ömrünü uzatır.",
                "en": "The waterproof body is made for floating and splashing; the charging cover must be closed fully and the unit should not be held under water. Rather than leaving it in heavily chlorinated water after shock treatment or in the pool through the winter, drying it and storing it somewhere cool will extend its life."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Dekoratif"
      }
    ],
    "features": [
      {
        "tr": "RGB ışık efekti",
        "en": "RGB light effect"
      },
      {
        "tr": "Su geçirmez tasarım",
        "en": "Waterproof design"
      },
      {
        "tr": "Kablosuz ses",
        "en": "Wireless sound"
      }
    ],
    "usage": {
      "tr": "Havuz yüzeyinde",
      "en": "On pool surface"
    },
    "galleryCount": 1
  },
  {
    "slug": "deniz-yildizi",
    "category": "decorative",
    "brand": "Aquativ",
    "name": {
      "tr": "Deniz Yıldızı LED",
      "en": "Aquativ Floating Starfish LED Light"
    },
    "tagline": {
      "tr": "Yüzen ışık",
      "en": "Floating light"
    },
    "description": {
      "tr": "Aquativ deniz yıldızı formundaki yüzen RGB LED ışık, havuz yüzeyinde yumuşak renk geçişleriyle zarif bir gece dokunuşu yaratır.",
      "en": "The Aquativ starfish-shaped floating RGB LED light creates an elegant nighttime touch with soft color transitions across the pool surface."
    },
    "body": [
          {
                "tr": "Deniz yıldızı formundaki bu yüzen LED havuza ses değil yalnızca ışık ekler. Su yüzeyinde serbest durur; içindeki RGB LED yumuşak renk geçişleriyle çevresindeki suyu aydınlatır. Havuz içi armatürlerin yerini almaz, onların üstüne yüzeyden gelen ikinci bir ışık katmanı koyar ve havuzun gece görüntüsünü yumuşatır.",
                "en": "This floating starfish-shaped LED adds only light to the pool, not sound. It rests freely on the surface, and the RGB LED inside lights the water around it with soft colour transitions. It does not replace the fixtures inside the pool; it lays a second layer of light over them from the surface and softens how the pool looks at night."
          },
          {
                "tr": "En iyi sonucu akşam, havuz aydınlatması kısıldığında ya da tamamen kapatıldığında verir; o zaman yüzeydeki hareketle birlikte renkler suya dağılır. Birkaç adedinin havuzun farklı köşelerine bırakılması, hepsinin tek noktada toplanmasından daha dengeli görünür. Rüzgârlı havalarda yüzen parçalar bir kenara toplanma eğiliminde olduğu için konumun ara ara düzeltilmesi gerekir.",
                "en": "It works best in the evening, when the pool lighting is dimmed or switched off entirely; the colours then spread through the water along with the movement of the surface. Leaving a few of them in different corners of the pool looks more balanced than gathering them all in one spot. On windy days floating pieces tend to collect at one side, so their positions need correcting now and then."
          },
          {
                "tr": "Gövdesi su üstünde kullanım için kapalıdır; buna rağmen şarj ya da pil kapağının tam oturduğundan emin olmak gerekir. Havuz temizliği ve kimyasal uygulamaları sırasında sudan çıkarılması, sezon sonunda kurulanıp saklanması ürünün ömrü açısından yerinde olur. Dekoratif seçenekler hakkında bilgi için bize yazabilirsiniz.",
                "en": "Its body is sealed for use on the water, but it is still worth checking that the charging or battery cover is seated properly. Taking it out of the water during pool cleaning and chemical treatments, and drying and storing it at the end of the season, is sensible for the life of the product. Write to us for information about the decorative options."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Dekoratif"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Aquativ"
      }
    ],
    "features": [
      {
        "tr": "Yüzen LED ışık",
        "en": "Floating LED light"
      },
      {
        "tr": "RGB renk geçişi",
        "en": "RGB color shift"
      },
      {
        "tr": "Dekoratif form",
        "en": "Decorative shape"
      }
    ],
    "usage": {
      "tr": "Havuz yüzeyinde",
      "en": "On pool surface"
    },
    "galleryCount": 1
  },
  {
    "slug": "havuz-robotu",
    "category": "cleaning",
    "brand": "Spino",
    "name": {
      "tr": "Havuz Robotu",
      "en": "Spino Robotic Pool Cleaner"
    },
    "tagline": {
      "tr": "Otomatik temizlik",
      "en": "Automatic cleaning"
    },
    "description": {
      "tr": "Spino havuz robotu, havuz taban ve duvarlarını otomatik olarak tarayıp temizleyerek manuel çabayı ortadan kaldırır.",
      "en": "The Spino robotic cleaner automatically scans and cleans pool floors and walls, eliminating the need for manual effort."
    },
    "body": [
          {
                "tr": "Havuz robotu, suya bırakıldıktan sonra havuz tabanını ve duvarlarını kendi programıyla tarayan otomatik bir temizlik cihazıdır. Kendi filtre haznesi vardır: topladığı yaprak, kum ve ince tortuyu tesisata göndermek yerine içinde tutar, böylece kum filtresi ve pompa ön filtresi üzerindeki yük azalır. Alt tarafındaki fırçalar yüzeye tutunmuş ince biyofilm tabakasını mekanik olarak söker.",
                "en": "A robotic pool cleaner is an automatic unit that, once lowered into the water, scans the pool floor and walls under its own program. It has its own filter chamber: leaves, sand and fine sediment are retained inside the unit instead of being pushed into the circulation system, which reduces the load on the sand filter and the pump strainer. The brushes underneath mechanically lift the thin biofilm layer clinging to surfaces."
          },
          {
                "tr": "Çalıştırma sıklığı havuzun kirlenme hızına göre belirlenir; çevresi ağaçlıklı bahçelerde daha sık, kapalı ve korunaklı havuzlarda daha seyrek gerekir. Her turdan sonra filtre haznesi boşaltılıp durulanmalı, dolu hazneyle çalıştırılmamalıdır. Kablonun havuz içinde dolanmaması için robot mümkün olduğunca havuzun ortasına yakın bir noktadan indirilir. Cihaz kullanılmadığı zaman suda bırakılmaz; durulanıp gölgede, serin bir yerde saklanır. Elektrikli bir ürün olduğu için besleme ünitesinin bağlantısı ve akım koruması konusunda yetkili kişiden destek alınması gerekir.",
                "en": "How often it runs depends on how quickly the pool gets dirty: more frequently in gardens surrounded by trees, less often in sheltered or covered pools. After every cycle the filter chamber should be emptied and rinsed, and the unit should never be run with a full chamber. To keep the cable from tangling, lower the robot into the water as close to the middle of the pool as possible. It should not be left in the water when not in use: rinse it and store it in a cool, shaded place. Because it is an electrical product, the power supply connection and residual-current protection should be handled by a qualified person."
          },
          {
                "tr": "Robot manuel süpürgenin işini büyük ölçüde devralır, ancak kepçe ve fırçayı tamamen gereksiz kılmaz: yüzeyde yüzen yapraklar kepçeyle alınır, merdiven altı ve keskin köşeler elle fırçalanır. Robot suyun kimyasına da müdahale etmez; dezenfeksiyon ve denge hâlâ su testi ve kimyasal bakımla sağlanır.",
                "en": "The robot takes over most of the work of manual vacuuming, but it does not make the net and brush unnecessary: floating leaves are still lifted with a skimmer net, and the area under steps and the sharp corners are still brushed by hand. Nor does the robot affect water chemistry; disinfection and balance remain a matter of water testing and chemical maintenance."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Temizlik"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Spino"
      }
    ],
    "features": [
      {
        "tr": "Otomatik çalışma",
        "en": "Automatic operation"
      },
      {
        "tr": "Taban ve duvar",
        "en": "Floor and walls"
      },
      {
        "tr": "Zahmetsiz bakım",
        "en": "Effortless upkeep"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 1
  },
  {
    "slug": "havuz-supurgesi",
    "category": "cleaning",
    "brand": "Gemaş",
    "name": {
      "tr": "Havuz Süpürgesi 2 inç",
      "en": "Gemaş 2\" Vacuum Head"
    },
    "tagline": {
      "tr": "Manuel temizlik",
      "en": "Manual cleaning"
    },
    "description": {
      "tr": "Gemaş havuz süpürgesi, 2 inç bağlantısıyla havuz tabanındaki kir ve tortuları manuel olarak toplamak için kullanılan vakum başlığıdır.",
      "en": "The Gemaş vacuum head, with its 2-inch connection, manually collects dirt and sediment from the pool floor."
    },
    "body": [
          {
                "tr": "Gemaş havuz süpürgesi, teleskopik çubuğun ucuna takılan ve havuz tabanındaki kum, toz ve çökmüş organik kalıntıyı toplayan manuel bir vakum başlığıdır. Emiş gücünü kendisi üretmez; hortumla skimmer ağzına veya havuz duvarındaki vakum bağlantısına bağlanır ve süpürme sırasında sirkülasyon pompası çalışır. Toplanan kir doğrudan filtreye gider, bu yüzden dipte biriken tortu suyu bulandırmadan havuzdan uzaklaştırılmış olur.",
                "en": "The Gemaş pool vacuum head mounts on the end of a telescopic pole and collects the sand, dust and settled organic debris on the pool floor. It does not generate suction itself: it is connected by hose to the skimmer throat or to the wall vacuum fitting, and the circulation pump runs while you vacuum. The debris travels straight to the filter, so sediment resting on the bottom leaves the pool without clouding the water."
          },
          {
                "tr": "Süpürmeye başlamadan önce hortumun içindeki hava boşaltılır; hortum su altında tutularak tamamen suyla doldurulur, aksi halde pompa hava çeker ve emiş kesilir. Başlık taban boyunca yavaş ve birbirinin üzerine binen şeritler hâlinde çekilir; hızlı hareket tortuyu yeniden askıya kaldırır ve suyu bulandırır. Süpürme genellikle duvar fırçalamasından ve çöken tortunun dibe oturmasından sonra yapılır. İşlem bitince filtre basıncı kontrol edilir ve gerekiyorsa geri yıkama yapılır.",
                "en": "Before you start, the air inside the hose must be purged: hold the hose under water until it fills completely, otherwise the pump draws air and suction is lost. Draw the head slowly along the floor in overlapping strips; moving quickly puts the sediment back into suspension and clouds the water. Vacuuming is usually done after the walls have been brushed and the loosened debris has settled. When you finish, check the filter pressure and backwash if needed."
          },
          {
                "tr": "Bağlantı ölçüsü önemlidir: 2 inç bağlantılı bu başlık, aynı ölçüye uygun bir vakum hortumuyla kullanılır; farklı çaplar adaptör olmadan sızdırmadan bağlanmaz. Kıl ve tekerlek dizilimi taban temizliği içindir, yüzey kepçesinin veya duvar fırçasının yerine geçmez.",
                "en": "Connection size matters: this 2-inch head is used with a vacuum hose of the matching size, as different diameters will not seal together without an adapter. Its bristle and wheel arrangement is made for floor cleaning and does not replace a surface skimmer net or a wall brush."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Temizlik"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Gemaş"
      }
    ],
    "features": [
      {
        "tr": "2 inç bağlantı",
        "en": "2-inch connection"
      },
      {
        "tr": "Taban temizliği",
        "en": "Floor cleaning"
      },
      {
        "tr": "Manuel vakum",
        "en": "Manual vacuum"
      }
    ],
    "usage": {
      "tr": "Havuz tabanında",
      "en": "Pool floor"
    },
    "galleryCount": 1
  },
  {
    "slug": "havuz-hortumu",
    "category": "cleaning",
    "name": {
      "tr": "Havuz Hortumu",
      "en": "Flexible Pool Vacuum Hose"
    },
    "tagline": {
      "tr": "Esnek bağlantı",
      "en": "Flexible link"
    },
    "description": {
      "tr": "Esnek havuz vakum hortumu, 38 mm ve 50 mm seçenekleriyle süpürge başlığını sisteme bağlayarak manuel temizliği kolaylaştırır.",
      "en": "This flexible pool vacuum hose, available in 38 mm and 50 mm, connects the vacuum head to the system for easy manual cleaning."
    },
    "body": [
          {
                "tr": "Havuz vakum hortumu, süpürge başlığını havuzun emiş noktasına bağlayan esnek hattır. Spiral takviyeli yapısı sayesinde pompa emişi altında büzülmez ve havuz kenarındaki dönüşlerde ezilmeden kıvrılır. Uçlarındaki döner manşon, çubuk havuz içinde hareket ederken hortumun kendi üzerine sarılmasını önler. 38 mm ve 50 mm seçenekleri bulunur; seçim, süpürge başlığının ve havuzdaki vakum bağlantısının ölçüsüne göre yapılır.",
                "en": "A pool vacuum hose is the flexible line that connects the vacuum head to the pool's suction point. Its spiral-reinforced wall keeps it from collapsing under pump suction and lets it bend around the pool edge without kinking. The swivel cuff at the end stops the hose twisting on itself as the pole is moved through the pool. It comes in 38 mm and 50 mm options; the choice follows the size of the vacuum head and of the pool's own vacuum fitting."
          },
          {
                "tr": "Hortum uzunluğu, bağlantı noktasından havuzun en uzak köşesine rahatça ulaşacak kadar olmalıdır; kısa kalan hortum çubuğun eğimini bozar ve emişte hava kaçağına yol açar. Kullanımdan önce hortum su altında tutularak tamamen doldurulur, içindeki hava boşaltılır. İş bitince içindeki su akıtılır; hortum kıvrılmadan, geniş halkalar hâlinde ve doğrudan güneş altında kalmayacak bir yerde saklanır. Manşonun serbest döndüğü ve uç kısımlarda çatlak olmadığı zaman zaman kontrol edilir.",
                "en": "The hose should be long enough to reach the farthest corner of the pool comfortably from the connection point; a hose that is too short forces the pole to an awkward angle and lets air leak into the suction. Before use, hold it under water until it fills completely so the air inside is purged. When the job is done, drain it and store it in wide loops rather than tight kinks, out of direct sunlight. Check from time to time that the swivel still turns freely and that the cuffs have no cracks."
          },
          {
                "tr": "Farklı çaplar birbirine zorlanmaz; uyumsuz bağlantı hem emişi düşürür hem de manşonu yorar. Hortum yalnızca manuel temizlik düzeninin bir parçasıdır, tek başına temizlik yapmaz.",
                "en": "Do not force mismatched diameters together; an ill-fitting joint both reduces suction and wears out the cuff. The hose is one part of a manual cleaning set-up and does no cleaning on its own."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Temizlik"
      },
      {
        "label": {
          "tr": "Seçenek",
          "en": "Option"
        },
        "value": "38 mm · 50 mm"
      }
    ],
    "features": [
      {
        "tr": "38 mm ve 50 mm",
        "en": "38 mm and 50 mm"
      },
      {
        "tr": "Esnek yapı",
        "en": "Flexible build"
      },
      {
        "tr": "Süpürge uyumlu",
        "en": "Vacuum compatible"
      }
    ],
    "usage": {
      "tr": "Manuel temizlikte",
      "en": "Manual cleaning"
    },
    "galleryCount": 1
  },
  {
    "slug": "yuzey-kepcesi",
    "category": "cleaning",
    "name": {
      "tr": "Yüzey Kepçesi",
      "en": "Deep Leaf Skimmer Net"
    },
    "tagline": {
      "tr": "Berrak yüzey",
      "en": "Clear surface"
    },
    "description": {
      "tr": "Su yüzeyinde biriken yaprak ve iri kirleri zahmetsizce toplayan derin ağızlı yüzey kepçesi.",
      "en": "A deep-bag surface net that effortlessly lifts leaves and floating debris from the water surface."
    },
    "body": [
          {
                "tr": "Yüzey kepçesi, suyun üstünde duran yaprak, çiçek, polen ve böcekleri henüz dibe çökmeden almaya yarar. Bu iş göründüğünden önemlidir: yüzeyde kalan organik madde birkaç saat içinde parçalanmaya başlar, klorun bir bölümünü tüketir ve dibe oturduğunda zeminde iz bırakabilir. Derin ağız yapısı, ağzın bir hamlede daha çok yaprak tutmasını sağlar; bu yüzden özellikle çevresi ağaçlıklı bahçelerdeki havuzlarda tercih edilir.",
                "en": "A skimmer net is used to lift the leaves, blossoms, pollen and insects sitting on the water before they sink. This matters more than it looks: organic material left on the surface starts breaking down within hours, consumes part of the free chlorine, and can leave marks on the floor once it settles. The deep bag holds more leaves per pass, which is why it is preferred at pools in gardens surrounded by trees."
          },
          {
                "tr": "Kepçe teleskopik çubuğa takılır ve genellikle günlük olarak, rüzgârlı havalardan sonra ise ek bir tur hâlinde kullanılır. Ağız su yüzeyinin hemen altından yavaşça çekilir; hızlı hareket dalga oluşturur ve kirleri kenarlardan kaçırır. Yüzey temizliği yapılırken skimmer sepetinin de boşaltılması alışkanlık hâline getirilmelidir, çünkü tıkalı sepet yüzey akışını zayıflatır. İş bitince ağ tatlı suyla durulanır ve gölgede kurutulur; içinde ıslak yaprakla bırakılan ağ hem kokar hem de daha çabuk yıpranır.",
                "en": "The net fits a telescopic pole and is normally used daily, with an extra pass after windy weather. Draw the mouth slowly just under the surface; moving fast creates waves that push debris away towards the edges. Emptying the skimmer basket should become part of the same routine, because a clogged basket weakens surface flow. Afterwards rinse the bag with fresh water and dry it in the shade; a bag left full of wet leaves smells and wears out faster."
          },
          {
                "tr": "Kepçe dipteki ince tortuyu almaz; taban temizliği için süpürge veya havuz robotu gerekir. İkisi birbirinin alternatifi değil, aynı bakım düzeninin farklı adımlarıdır.",
                "en": "A net will not pick up the fine sediment on the bottom; floor cleaning calls for a vacuum head or a robotic cleaner. The two are not alternatives but different steps in the same maintenance routine."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Temizlik"
      }
    ],
    "features": [
      {
        "tr": "Derin toplama ağı",
        "en": "Deep collection bag"
      },
      {
        "tr": "Yaprak ve kaba kir",
        "en": "Leaves and coarse debris"
      },
      {
        "tr": "Teleskopik sapa uyumlu",
        "en": "Fits telescopic poles"
      }
    ],
    "usage": {
      "tr": "Tüm havuz tiplerinde",
      "en": "All pool types"
    },
    "galleryCount": 1
  },
  {
    "slug": "havuz-fircasi",
    "category": "cleaning",
    "name": {
      "tr": "Havuz Fırçası",
      "en": "Pool Wall & Floor Brush"
    },
    "tagline": {
      "tr": "Temiz zemin",
      "en": "Spotless surfaces"
    },
    "description": {
      "tr": "Havuz duvar ve tabanındaki alg ve kalıntıları etkin biçimde ovarak temizleyen dayanıklı havuz fırçası.",
      "en": "A durable brush that scrubs walls and floors to remove algae and stubborn residue effectively."
    },
    "body": [
          {
                "tr": "Havuz fırçası, duvar ve taban yüzeyine tutunmuş alg başlangıcı, biyofilm ve kireç kalıntısını mekanik olarak sökmek için kullanılır. Bu kalıntılar yüzeye yapıştığı için klor onlara tam olarak ulaşamaz; yalnız kimyasalla mücadele edildiğinde su berrak görünse bile duvarlarda kaygan bir tabaka kalmaya devam eder. Fırçalama bu tabakayı suya açar, böylece dezenfektan işini yapabilir ve sökülen kir filtreye taşınabilir hâle gelir.",
                "en": "A pool brush is used to mechanically remove early algae, biofilm and scale residue clinging to the walls and floor. Because these deposits adhere to the surface, chlorine cannot fully reach them; treating the problem with chemicals alone can leave a slippery film on the walls even when the water looks clear. Brushing opens that film to the water so the disinfectant can do its work and the loosened soil can be carried to the filter."
          },
          {
                "tr": "Fırçalama genellikle haftalık yapılır ve duvarlardan tabana doğru ilerlenir; merdiven basamakları, köşeler, aydınlatma çerçevesi çevresi ve skimmer ağzı gibi akışın zayıf kaldığı yerler atlanmamalıdır. Ovulduktan sonra bulanan suyun dibe oturması beklenir, ardından süpürge ya da robotla toplanır. Şok klorlama planlandığında önce fırçalamak uygulamanın etkisini belirgin biçimde artırır.",
                "en": "Brushing is usually done weekly, working from the walls down towards the floor, without skipping the places where circulation is weak: step treads, corners, the area around light housings and the skimmer throat. After scrubbing, let the clouded water settle, then collect the debris with a vacuum head or robot. When shock chlorination is planned, brushing beforehand noticeably improves the result."
          },
          {
                "tr": "Kıl tipi yüzeye göre seçilir: naylon kıl beton, sıva ve seramik kaplamalarda güvenle kullanılır. Liner, membran veya hassas mozaik yüzeylerde tel ya da çelik kıllı fırça kullanılmaz; bu yüzeylerde kalıcı çizik bırakma riski vardır.",
                "en": "Bristle type is chosen to suit the surface: nylon bristles are safe on concrete, rendered and tiled finishes. Wire or stainless bristles should not be used on liner, membrane or delicate mosaic surfaces, where they risk leaving permanent scratches."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Temizlik"
      }
    ],
    "features": [
      {
        "tr": "Alg ve kalıntıya karşı",
        "en": "Against algae buildup"
      },
      {
        "tr": "Dayanıklı kıllar",
        "en": "Durable bristles"
      },
      {
        "tr": "Teleskopik sapa uyumlu",
        "en": "Fits telescopic poles"
      }
    ],
    "usage": {
      "tr": "Duvar ve taban temizliğinde",
      "en": "Wall and floor cleaning"
    },
    "galleryCount": 1
  },
  {
    "slug": "termometre",
    "category": "cleaning",
    "name": {
      "tr": "Havuz Termometresi",
      "en": "Floating Pool Thermometer"
    },
    "tagline": {
      "tr": "Doğru sıcaklık",
      "en": "Accurate temperature"
    },
    "description": {
      "tr": "Sevimli hayvan figürlü, su yüzeyinde yüzerek havuz sıcaklığını sürekli gösteren pratik termometre.",
      "en": "A charming animal-figure thermometer that floats on the surface and continuously displays pool temperature."
    },
    "body": [
          {
                "tr": "Yüzen havuz termometresi, su sıcaklığını sürekli okunabilir biçimde gösterir. Sıcaklık yalnızca konfor meselesi değildir; suyun kimyası doğrudan ona bağlıdır. Su ısındıkça klor daha hızlı tükenir, alg gelişimi hızlanır ve filtrenin günlük çalışma süresinin artırılması gerekir. Serin dönemlerde ise tüketim yavaşlar. Bu yüzden sıcaklığı bilmek, dozaj ve sirkülasyon kararlarını tahmine değil gözleme dayandırmayı sağlar.",
                "en": "A floating pool thermometer keeps the water temperature continuously readable. Temperature is not only a comfort question; water chemistry depends directly on it. As the water warms, chlorine is consumed faster, algae grow more readily and the filter's daily running time needs to be extended. In cooler periods consumption slows down. Knowing the temperature therefore lets dosing and circulation decisions rest on observation rather than guesswork."
          },
          {
                "tr": "Termometre havuz yüzeyinde serbest yüzer; ipiyle merdivene veya havuz kenarına bağlanarak emiş ağzına kapılması önlenir. Okuma yapılırken cihazın dönüş ağzından ve skimmerden uzakta olmasına dikkat edilir, çünkü bu noktalarda su sıcaklığı havuzun genelini temsil etmez. Suya yeni bırakıldığında değer hemen okunmaz, dengelenmesi için birkaç dakika beklenir. Sezon sonunda ve donma riski olan günlerde havuzdan çıkarılıp içeride saklanması ömrünü uzatır.",
                "en": "The thermometer floats freely on the surface; tying its cord to the ladder or pool edge keeps it from being drawn into the suction. When reading it, keep it away from the return outlet and the skimmer, since the water temperature at those points does not represent the pool as a whole. After it is first placed in the water, wait a few minutes for it to settle rather than reading it immediately. Taking it out and storing it indoors at the end of the season and on days with a risk of freezing extends its life."
          },
          {
                "tr": "Hayvan figürlü gövdesi havuz kenarında sevimli bir detay oluşturur, ancak bir ölçüm aracıdır; çocuk oyuncağı olarak kullanılmaması, kırılması hâlinde parçalarının suda kalmaması bakımından önemlidir.",
                "en": "Its animal-figure body makes a charming detail at the poolside, but it is a measuring instrument: it should not be treated as a children's toy, not least so that no broken pieces are left in the water."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Temizlik"
      }
    ],
    "features": [
      {
        "tr": "Yüzer tasarım",
        "en": "Floating design"
      },
      {
        "tr": "Kolay okunur skala",
        "en": "Easy-read scale"
      },
      {
        "tr": "Dekoratif figür",
        "en": "Decorative figure"
      }
    ],
    "usage": {
      "tr": "Tüm havuzlarda",
      "en": "All pools"
    },
    "galleryCount": 1
  },
  {
    "slug": "dispanser",
    "category": "cleaning",
    "name": {
      "tr": "Yüzen Klor Dispanseri",
      "en": "Floating Chlorine Dispenser"
    },
    "tagline": {
      "tr": "Dengeli klor",
      "en": "Steady chlorine"
    },
    "description": {
      "tr": "Klor tabletlerini yüzerken kademeli çözerek suya dengeli dezenfeksiyon sağlayan ayarlanabilir yüzer dispenser.",
      "en": "An adjustable floating dispenser that gradually releases chlorine tablets for balanced, continuous disinfection."
    },
    "body": [
          {
                "tr": "Yüzen klor dispanseri, yavaş çözünen klor tabletlerinin havuz suyuna kademeli olarak karışmasını sağlayan basit bir hazne düzeneğidir. Tabletler hazneye yerleştirilir, alt kapaktaki ayarlanabilir delikler tablete ulaşan su miktarını sınırlar; böylece klor bir anda değil gün boyunca yayılır. Elle yapılan tek seferlik dozlamada görülen yüksek-düşük dalgalanma yerine, serbest klorun hedeflenen 1–3 ppm bandında daha kararlı kalması kolaylaşır.",
                "en": "A floating chlorine dispenser is a simple holder that lets slow-dissolving chlorine tablets enter the pool water gradually. Tablets are placed in the chamber and the adjustable openings in the base limit how much water reaches them, so chlorine is released through the day rather than all at once. Instead of the high-and-low swing that comes with single manual doses, it becomes easier to hold free chlorine steadily within the target band of 1–3 ppm."
          },
          {
                "tr": "Tablet sayısı ve delik açıklığı tahminle değil, test sonucuna bakılarak ayarlanır; tablet tipine ait dozaj için daima ürün etiketindeki talimat esas alınır. pH'ın 7,2–7,6 aralığında tutulması, verilen klorun etkisini koruması açısından ayrıca önemlidir. Dispanser merdiven kenarı gibi bir yerde sıkışıp kalmamalıdır: aynı noktada uzun süre duran tablet, yüzeyde yerel renk açılmasına yol açabilir. Havuz kullanılırken dispanserin sudan çıkarılması, özellikle çocukların bulunduğu havuzlarda doğru bir alışkanlıktır.",
                "en": "The number of tablets and the size of the opening are set by looking at test results, not by guesswork, and the dosage for the tablet in use is always taken from the product label. Keeping pH within 7.2–7.6 matters just as much, so that the chlorine being added stays effective. The dispenser should not get stuck in one place, such as beside the ladder: a tablet resting at the same spot for long periods can bleach the surface locally. Taking the dispenser out of the water while the pool is in use is a sound habit, particularly where children swim."
          },
          {
                "tr": "Hazneye farklı kimyasallar birlikte konmaz; klor tableti ile pH düzenleyici ya da şok klor aynı bölmede karıştırılmaz. Dispanser boşaltıldıktan sonra durulanır ve serin, kuru, çocukların erişemeyeceği bir yerde saklanır.",
                "en": "Different chemicals are never combined in the chamber: chlorine tablets must not be mixed with a pH adjuster or with shock chlorine in the same compartment. Once emptied, rinse the dispenser and store it in a cool, dry place out of reach of children."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Temizlik"
      }
    ],
    "features": [
      {
        "tr": "Ayarlanabilir salınım",
        "en": "Adjustable release"
      },
      {
        "tr": "Kademeli çözünme",
        "en": "Gradual dissolving"
      },
      {
        "tr": "Serbest klor 1-3 ppm",
        "en": "Free chlorine 1-3 ppm"
      }
    ],
    "usage": {
      "tr": "Klor tabletleriyle",
      "en": "With chlorine tablets"
    },
    "galleryCount": 1
  },
  {
    "slug": "test-insta",
    "category": "cleaning",
    "name": {
      "tr": "Insta Test Şeridi",
      "en": "Instant Test Strips"
    },
    "tagline": {
      "tr": "Hızlı ölçüm",
      "en": "Instant reading"
    },
    "description": {
      "tr": "Suya daldırıp saniyeler içinde klor ve pH değerlerini gösteren pratik anlık test stripleri.",
      "en": "Dip-and-read strips that reveal chlorine and pH levels within seconds for quick water checks."
    },
    "body": [
          {
                "tr": "Insta test şeridi, havuz suyunun klor ve pH değerlerine saniyeler içinde bakmanın en pratik yoludur. Şerit üzerindeki reaktif alanları suyla temas ettiğinde renk değiştirir, oluşan renk kutu üzerindeki skalayla karşılaştırılarak değer okunur. Ayrı tüp, damla veya bekleme süresi gerektirmediği için havuz kenarında günlük rutin kontrol için idealdir: serbest klorun 1–3 ppm, pH'ın 7,2–7,6 bandında olup olmadığı hızla görülür.",
                "en": "Instant test strips are the most practical way to check the chlorine and pH of pool water in seconds. The reagent pads on the strip change colour on contact with water, and the value is read by comparing that colour with the chart on the container. Because no separate vial, drops or waiting time are needed, they are ideal for a daily check at the poolside: you see quickly whether free chlorine sits within 1–3 ppm and pH within 7.2–7.6."
          },
          {
                "tr": "Numune, yüzeyin hemen altından değil kolun daldırabildiği derinlikten alınır ve skimmer ile dönüş ağzından uzak bir noktadan çalışılır; bu iki bölge havuzun genelini temsil etmez. Şerit suya batırılıp çıkarıldıktan sonra silkelenmez, üretici talimatındaki bekleme süresine uyulur ve renk iyi ışıkta okunur. Şeritler neme çok duyarlıdır: ıslak elle tutulmaz, kutunun kapağı hemen kapatılır, kutu havuz kenarında ıslak zeminde bırakılmaz. Son kullanma tarihi geçmiş şeritler yanıltıcı sonuç verir.",
                "en": "Take the sample from arm's depth rather than just under the surface, and work away from the skimmer and the return outlet, as neither area represents the pool as a whole. After dipping the strip, do not shake it; observe the waiting time in the manufacturer's instructions and read the colour in good light. Strips are very sensitive to moisture: do not handle them with wet hands, close the container immediately, and do not leave it on a wet surface at the poolside. Strips past their expiry date give misleading readings."
          },
          {
                "tr": "Şerit hızlı bir gösterge aracıdır; renk okuması gözle yapıldığı için ara değerlerde yorum payı vardır. Sonuç sınırda çıktığında ya da suda görünür bir sorun varsa, damla yöntemli test kiti veya dijital fotometre ile teyit edilmelidir.",
                "en": "A strip is a quick indicator: because the colour is judged by eye, intermediate values leave room for interpretation. When a result falls near the limit, or when there is a visible problem in the water, confirm it with a drop-test kit or a digital photometer."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Temizlik"
      }
    ],
    "features": [
      {
        "tr": "Saniyeler içinde sonuç",
        "en": "Results in seconds"
      },
      {
        "tr": "Klor ve pH",
        "en": "Chlorine and pH"
      },
      {
        "tr": "Pratik kullanım",
        "en": "Simple to use"
      }
    ],
    "usage": {
      "tr": "Günlük hızlı kontrolde",
      "en": "Daily quick checks"
    },
    "galleryCount": 1
  },
  {
    "slug": "test-damla",
    "category": "cleaning",
    "name": {
      "tr": "Test Kiti (Klor & pH)",
      "en": "Drop Test Kit"
    },
    "tagline": {
      "tr": "Kesin değer",
      "en": "Precise values"
    },
    "description": {
      "tr": "OTO ve fenol kırmızısı reaktifleriyle klor ve pH değerlerini damla yöntemiyle net ölçen test kiti.",
      "en": "A drop-based kit using OTO and phenol red reagents to measure chlorine and pH with clear accuracy."
    },
    "body": [
          {
                "tr": "Damla yöntemli test kiti, klor için OTO ve pH için fenol kırmızısı reaktifi kullanarak ölçüm yapar. Havuzdan alınan numune kitin tüplerine doldurulur, üzerine talimatta belirtilen sayıda damla eklenir ve sıvının aldığı renk komparatör penceresindeki referans tonlarla karşılaştırılır. Renk şeritteki küçük bir ped yerine numunenin tamamında oluştuğu için okuma daha net ayırt edilir; bu yöntem şeride göre daha hassas sonuç verir.",
                "en": "A drop-test kit measures using OTO reagent for chlorine and phenol red for pH. Sample water from the pool is poured into the kit's vials, the number of drops given in the instructions is added, and the colour the liquid takes is compared with the reference shades in the comparator window. Because the colour develops throughout the sample rather than on a small pad, the reading is easier to distinguish, which makes this method more precise than strips."
          },
          {
                "tr": "Tüpler her ölçümden önce havuz suyuyla çalkalanır; içinde kalan artık reaktif sonucu bozar. Numune dönüş ağzından uzakta, kolun daldırabildiği derinlikten alınır. Damla sayısı kendiliğinden artırılmaz, üretici talimatına uyulur; reaktif şişelerinin kapakları karıştırılmaz ve ağızları parmakla temas etmez. Okuma gün ışığında, beyaz bir zemine karşı yapılır. Reaktifler serin, karanlık ve çocukların erişemediği bir yerde saklanır; zamanla bozulduğu için tarihi geçmiş reaktifle ölçüm yapılmaz.",
                "en": "Rinse the vials with pool water before each test; leftover reagent distorts the result. Take the sample away from the return outlet, at arm's depth. Do not add extra drops on your own initiative; follow the manufacturer's instructions, keep reagent caps with their own bottles and do not touch the bottle necks with your fingers. Read the result in daylight against a white background. Store the reagents in a cool, dark place out of children's reach, and do not test with expired reagents, as they degrade over time."
          },
          {
                "tr": "Bu kit klor ve pH ölçer. Toplam alkalinite, kalsiyum sertliği veya stabilizatör gibi değerler gerekiyorsa kapsamlı test seti ya da dijital ölçüm tercih edilmelidir.",
                "en": "This kit measures chlorine and pH. When values such as total alkalinity, calcium hardness or stabiliser are also needed, a complete testing kit or a digital instrument is the better choice."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Temizlik"
      }
    ],
    "features": [
      {
        "tr": "OTO ve fenol kırmızısı",
        "en": "OTO and phenol red"
      },
      {
        "tr": "pH hedefi 7.2-7.6",
        "en": "pH target 7.2-7.6"
      },
      {
        "tr": "Renk karşılaştırmalı",
        "en": "Color comparison"
      }
    ],
    "usage": {
      "tr": "Klor ve pH ölçümünde",
      "en": "Chlorine and pH testing"
    },
    "galleryCount": 1
  },
  {
    "slug": "test-set",
    "category": "cleaning",
    "name": {
      "tr": "Test Kiti Seti",
      "en": "Complete Water Testing Kit"
    },
    "tagline": {
      "tr": "Eksiksiz analiz",
      "en": "Complete analysis"
    },
    "description": {
      "tr": "Havuz suyunun temel değerlerini eksiksiz ölçmek için gereken reaktif ve aparatları bir arada sunan test seti.",
      "en": "A complete set bringing together the reagents and tools needed to test all essential pool water values."
    },
    "body": [
          {
                "tr": "Test kiti seti, havuz suyunun tek bir değerine değil bütününe bakmak için gereken reaktif ve aparatları bir arada sunar. Klor ve pH'ın yanında toplam alkalinite, kalsiyum sertliği ve stabilizatör gibi arka plandaki değerler de ölçülebilir. Bu değerler suyun nasıl davranacağını belirler: alkalinite pH'ı yerinde tutar, kalsiyum sertliği kaplamanın ve donanımın korunmasıyla ilgilidir, stabilizatör klorun güneşte ne kadar dayanacağını etkiler.",
                "en": "A complete testing kit brings together the reagents and apparatus needed to look at the whole of the pool water rather than a single value. Alongside chlorine and pH, background values such as total alkalinity, calcium hardness and stabiliser can also be measured. These values determine how the water behaves: alkalinity holds pH in place, calcium hardness bears on the protection of the finish and the equipment, and stabiliser affects how long chlorine survives in sunlight."
          },
          {
                "tr": "Referans aralıklar şöyledir: pH 7,2–7,6, serbest klor 1–3 ppm, toplam alkalinite 80–120 ppm, siyanürik asit 30–50 ppm, kalsiyum sertliği 200–400 ppm. Düzeltme sırası önemlidir; alkalinite aralığın dışındayken pH ayarı kalıcı olmaz, bu yüzden önce alkalinite dengelenir. Klor ve pH haftalık, diğer değerler sezon başında ve ardından ayda bir ölçülürse tablo yeterince takip edilir.",
                "en": "The reference ranges are: pH 7.2–7.6, free chlorine 1–3 ppm, total alkalinity 80–120 ppm, cyanuric acid 30–50 ppm and calcium hardness 200–400 ppm. The order of correction matters: while alkalinity sits outside its range a pH adjustment will not hold, so alkalinity is balanced first. Testing chlorine and pH weekly, and the other values at the start of the season and then monthly, follows the picture closely enough."
          },
          {
                "tr": "Ölçüm öncesi tüpler havuz suyuyla durulanır, numune dönüş ağzından uzaktan alınır ve okuma iyi ışıkta yapılır. Reaktif miktarları için ürün talimatına uyulur; reaktifler serin, karanlık, çocuklardan uzak bir yerde saklanır ve tarihi geçmiş olanlar kullanılmaz.",
                "en": "Before testing, rinse the vials with pool water, take the sample away from the return outlet and read it in good light. Follow the product instructions for reagent quantities; store the reagents in a cool, dark place away from children and do not use any that are past their date."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Temizlik"
      }
    ],
    "features": [
      {
        "tr": "Çoklu parametre ölçümü",
        "en": "Multi-parameter testing"
      },
      {
        "tr": "Reaktifler dahil",
        "en": "Reagents included"
      },
      {
        "tr": "Düzenli bakım için",
        "en": "For routine care"
      }
    ],
    "usage": {
      "tr": "Kapsamlı su analizinde",
      "en": "Full water analysis"
    },
    "galleryCount": 1
  },
  {
    "slug": "test-colorq",
    "category": "cleaning",
    "brand": "WaterLink",
    "name": {
      "tr": "ColorQ Dijital Test Kiti",
      "en": "WaterLink ColorQ 2X Photometer"
    },
    "tagline": {
      "tr": "Dijital hassasiyet",
      "en": "Digital precision"
    },
    "description": {
      "tr": "WaterLink ColorQ 2X, dijital fotometre teknolojisiyle 7 su parametresini hızlı ve hassas biçimde ölçen laboratuvar seviyesinde test cihazı.",
      "en": "The WaterLink ColorQ 2X is a digital photometer measuring 7 water parameters with lab-grade speed and precision."
    },
    "body": [
          {
                "tr": "WaterLink ColorQ 2X, su testinde renk yorumunu gözden alıp cihaza veren bir fotometredir. Numune tüpüne alınan su, reaktifle işlem gördükten sonra cihazın optik haznesine yerleştirilir; cihaz ışık geçirgenliğini ölçerek sonucu ekranda sayı olarak verir. Böylece iki kişinin aynı rengi farklı okuması sorunu ortadan kalkar. Yedi parametreyi tek düzenekte ölçtüğü için klor ve pH'ın yanında alkalinite, sertlik ve stabilizatör gibi değerler de aynı oturumda kayda geçer.",
                "en": "The WaterLink ColorQ 2X is a photometer that takes the interpretation of colour out of the eye and gives it to the instrument. Sample water, once treated with reagent, is placed in the unit's optical chamber; the device measures light transmission and shows the result on screen as a number. This removes the problem of two people reading the same colour differently. Because it measures seven parameters in one set-up, values such as alkalinity, hardness and stabiliser are recorded in the same session as chlorine and pH."
          },
          {
                "tr": "Doğru sonuç için tüplerin çizik ve parmak izi olmaması, her ölçüm öncesi numune suyuyla çalkalanması gerekir. Reaktifler üretici talimatındaki sırayla ve belirtilen bekleme süresine uyularak eklenir; cihaz kendi prosedürüne göre numune suyuyla sıfırlanır. Reaktiflerin tarihi ve pillerin durumu düzenli kontrol edilir, cihaz nemli bölmede değil kuru ve serin bir yerde saklanır. Okunan değerler tarihiyle birlikte kaydedildiğinde, suyun mevsim içindeki eğilimi de görülebilir hâle gelir.",
                "en": "For reliable results the vials must be free of scratches and fingerprints and rinsed with sample water before each test. Reagents are added in the order set out by the manufacturer, observing the stated waiting time, and the instrument is zeroed with sample water according to its own procedure. Check reagent dates and battery condition regularly, and store the unit in a dry, cool place rather than in a damp equipment room. When readings are logged with their dates, the water's trend across the season also becomes visible."
          },
          {
                "tr": "Bu düzeyde ölçüm her havuz için zorunlu değildir; yoğun kullanılan büyük havuzlarda, site ve apart havuzlarında ya da sürekli denge sorunu yaşanan sularda anlam kazanır. Pratikte şerit günlük hızlı bakış, damla kiti haftalık kontrol, fotometre ise referans ölçüm olarak birlikte kullanılır.",
                "en": "Measurement at this level is not necessary for every pool; it earns its place in large, heavily used pools, in shared residential pools, or in water that keeps losing its balance. In practice the three are used together: strips for a quick daily look, the drop kit for weekly checks and the photometer as the reference measurement."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Temizlik"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "WaterLink"
      }
    ],
    "features": [
      {
        "tr": "7 parametre ölçümü",
        "en": "7-parameter testing"
      },
      {
        "tr": "Dijital fotometre",
        "en": "Digital photometer"
      },
      {
        "tr": "Laboratuvar hassasiyeti",
        "en": "Lab-grade accuracy"
      }
    ],
    "usage": {
      "tr": "Profesyonel su analizinde",
      "en": "Professional water analysis"
    },
    "galleryCount": 1
  }  ,
  {
    "slug": "pvc-borular",
    "category": "plumbing",
    "brand": "Pimtaş",
    "name": {
      "tr": "U-PVC Basınçlı Borular",
      "en": "U-PVC Pressure Pipes"
    },
    "tagline": {
      "tr": "Sağlam su hattı",
      "en": "A solid water line"
    },
    "description": {
      "tr": "Pimtaş U-PVC basınçlı havuz boruları; 32, 50 ve 63 mm çaplarda, 10 atü basınca dayanıklı. Yapıştırma muflu sistemle sızdırmaz, uzun ömürlü tesisat.",
      "en": "Pimtaş U-PVC pressure pipes for pools in 32, 50 and 63 mm, rated to 10 bar. A leak-free, long-life line with solvent-cement joints."
    },
    "body": [
          {
                "tr": "Havuz tesisatının taşıyıcı omurgası borulardır: skimmer ve dip süpürgesi emiş hatları, pompa ile filtre arasındaki bağlantı ve havuza geri dönüş hattı hep bu borular üzerinden kurulur. U-PVC gövde klorlu suya ve havuz kimyasallarına karşı dirençlidir; iç yüzeyi pürüzsüz olduğu için suyun sürtünme kaybı düşük kalır. Pimtaş borular 32, 50 ve 63 mm çaplarda, 10 atü basınç sınıfında üretilir.",
                "en": "Pipework is the load-bearing spine of a pool installation: the skimmer and main-drain suction lines, the run between pump and filter, and the return line back to the pool are all built from it. The U-PVC body resists chlorinated water and pool chemicals, and its smooth inner wall keeps friction losses low. Pimtaş pipes come in 32, 50 and 63 mm diameters with a 10 bar pressure rating."
          },
          {
                "tr": "Doğru çap seçimi sistem veriminin belirleyicisidir. Gereğinden dar bir hatta su hızlanır, basınç kaybı büyür, pompa hem daha çok elektrik harcar hem de ömrünü kısaltır; fazla geniş bir hatta ise emiş zayıflar. Bu nedenle çap, havuz hacmi ile pompa ve filtre kapasitesiyle birlikte hesaplanır.",
                "en": "Choosing the right diameter is what decides the system's efficiency. In a line that is too narrow the water speeds up, pressure loss grows and the pump both draws more power and wears out sooner; in an oversized line suction goes weak. The diameter is therefore calculated together with pool volume and pump and filter capacity."
          },
          {
                "tr": "Birleştirme, muflu uçların yapıştırıcı ile kaynaştırılmasıyla yapılır; temiz bir yüzey ve tam oturmuş bir ek yeri sızdırmazlığın tek güvencesidir. Beton içine gömülen hatlarda sonradan onarım neredeyse imkânsız olduğundan, güzergâh planı ve montaj uzman ekiple yürütülmelidir.",
                "en": "Joints are made by solvent-welding the socketed ends, and a clean surface with a fully seated joint is the only guarantee of a watertight line. Since a run buried in concrete is almost impossible to repair later, both the routing plan and the assembly should be handled by an experienced team."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Tesisat"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Pimtaş"
      },
      {
        "label": {
          "tr": "Çap",
          "en": "Diameter"
        },
        "value": "32 · 50 · 63 mm · 10 Atü"
      }
    ],
    "features": [
      {
        "tr": "Farklı çap seçenekleri",
        "en": "Multiple diameters"
      },
      {
        "tr": "Basınca dayanıklı",
        "en": "Pressure-rated"
      },
      {
        "tr": "Sızdırmaz bağlantı",
        "en": "Leak-free joints"
      }
    ],
    "usage": {
      "tr": "Havuz su tesisatında",
      "en": "Pool water lines"
    },
    "galleryCount": 1
  }  ,
  {
    "slug": "pvc-yapistirici",
    "category": "plumbing",
    "brand": "Pimtaş",
    "name": {
      "tr": "PVC-U Yapıştırıcı & Temizleyici",
      "en": "PVC-U Solvent Cement & Cleaner"
    },
    "tagline": {
      "tr": "Sızdırmaz birleşim",
      "en": "A leak-tight bond"
    },
    "description": {
      "tr": "Pimtaş PVC-U yapıştırıcı ve temizleyici; boru ile ek parçaları kalıcı ve sızdırmaz biçimde birleştirir. 125 g, 250 g ve 500 g seçenekleriyle.",
      "en": "Pimtaş PVC-U solvent cement and cleaner join pipes and fittings into a permanent, leak-tight bond. Available in 125 g, 250 g and 500 g."
    },
    "body": [
          {
                "tr": "Bu set aslında iki ayrı ürünü bir arada sunar: yüzey temizleyici ve solvent esaslı yapıştırıcı. Yapıştırıcı bir yapışkan gibi davranmaz; boru ile ek parçanın temas eden yüzeylerini kimyasal olarak yumuşatıp tek gövde hâlinde kaynaştırır. Doğru uygulandığında ek yeri, borunun kendisi kadar sağlam ve sızdırmaz olur. Pimtaş 125 g, 250 g, 500 g ve 1 kg ambalajlarda sunulur.",
                "en": "This set is really two products in one: a surface cleaner and a solvent-based cement. The cement does not behave like glue; it chemically softens the mating faces of pipe and fitting and fuses them into a single body. Applied correctly, the joint becomes as strong and as watertight as the pipe itself. Pimtaş offers 125 g, 250 g, 500 g and 1 kg packs."
          },
          {
                "tr": "Sıra önemlidir: boru ucu dik ve düzgün kesilir, çapağı alınır, sonra temizleyiciyle hem boru ucu hem mufun içi silinerek toz, yağ ve kalıp kalıntısı uzaklaştırılır. Ardından yapıştırıcı ince ve eşit sürülür, parçalar hafifçe döndürülerek sonuna kadar geçirilir ve bekleme süresi için ürün talimatına uyulur; hat, verilen süre tamamlanmadan basınca alınmaz.",
                "en": "Sequence matters: cut the pipe end square, deburr it, then wipe both the pipe end and the inside of the socket with cleaner to remove dust, grease and mould residue. Apply the cement in a thin, even film, push the parts fully home with a slight twist, and follow the product instructions for waiting time; the line is not pressurised before that time has passed."
          },
          {
                "tr": "Solvent uçucu ve yanıcıdır: havalandırılan ortamda çalışılır, kutu kullanım dışında kapalı tutulur, ateşten uzak ve serin yerde saklanır. Dişli bağlantılarda yapıştırıcı kullanılmaz; orada sızdırmazlık uygun bant veya conta ile sağlanır.",
                "en": "The solvent is volatile and flammable: work in a ventilated space, keep the tin closed when not in use, and store it cool and away from any flame. Cement is never used on threaded connections; there, sealing is done with suitable tape or a gasket."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Tesisat"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Pimtaş"
      },
      {
        "label": {
          "tr": "Ambalaj",
          "en": "Pack"
        },
        "value": "1 kg · 500 g · 250 g · 125 g"
      }
    ],
    "features": [
      {
        "tr": "Kalıcı sızdırmaz birleşim",
        "en": "Permanent leak-tight bond"
      },
      {
        "tr": "Temizleyici ile yüzey hazırlığı",
        "en": "Cleaner for surface prep"
      },
      {
        "tr": "125 / 250 / 500 g seçenekleri",
        "en": "125 / 250 / 500 g options"
      }
    ],
    "usage": {
      "tr": "PVC tesisat montajında",
      "en": "PVC plumbing assembly"
    },
    "galleryCount": 1
  }  ,
  {
    "slug": "kuresel-vana",
    "category": "plumbing",
    "brand": "Pimtaş",
    "name": {
      "tr": "U-PVC Küresel Vana",
      "en": "U-PVC Ball Valve"
    },
    "tagline": {
      "tr": "Akışı kontrol",
      "en": "Flow control"
    },
    "description": {
      "tr": "Pimtaş U-PVC küresel vana; havuz tesisatında su akışını güvenle açıp kapatır.",
      "en": "Pimtaş U-PVC ball valve to open and shut pool water flow safely."
    },
    "body": [
          {
                "tr": "Küresel vana, hattı açıp kapatma işini üstlenir. Gövdenin içindeki delikli küre çeyrek tur dönerek yolu ya tamamen açar ya tamamen kapatır; tam açık konumda geçiş kesiti boruya yakın olduğu için akışa kayda değer direnç bindirmez. Havuz tesisatında pompa, filtre, ısı pompası ve dozaj ekipmanının önüne ve arkasına konularak her birim tek tek izole edilebilir hâle gelir.",
                "en": "A ball valve's job is to open and close the line. The drilled ball inside the body turns a quarter of a turn and either opens the path fully or shuts it completely; in the fully open position the bore is close to that of the pipe, so it adds little resistance to flow. Fitted before and after the pump, filter, heat pump and dosing equipment, it lets each unit be isolated on its own."
          },
          {
                "tr": "Bu izolasyon bakımı kolaylaştıran şeydir: pompa ön filtresi temizlenirken ya da filtre bakımı yapılırken havuzun tamamını boşaltmak gerekmez, yalnızca ilgili bölüm kapatılır. Küresel vana debi ayarı için tasarlanmamıştır; yarı açık bırakmak sızdırmazlık yüzeylerini zamansız aşındırır. Uzun süre hiç hareket etmeyen vanalar da tutukluk yapabildiği için ara ara tam açıp kapatmak iyi bir alışkanlıktır.",
                "en": "That isolation is what makes servicing simple: cleaning the pump strainer or working on the filter no longer means draining the pool, only closing off the section concerned. A ball valve is not made for throttling flow; leaving it half open wears the sealing faces prematurely. Valves left untouched for long periods can also stiffen, so fully cycling them from time to time is a good habit."
          },
          {
                "tr": "Pimtaş küresel vana 32 ile 63 mm arası ölçülerde ve yapıştırma bağlantılıdır; ölçü daima bağlandığı boruyla aynı seçilir, çünkü vanada yapılan bir daraltma tüm hattı yavaşlatır.",
                "en": "The Pimtaş ball valve comes in sizes from 32 to 63 mm with solvent-weld connections; the size is always matched to the pipe it joins, since a restriction at the valve slows the whole line."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Tesisat"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Pimtaş"
      },
      {
        "label": {
          "tr": "Çap",
          "en": "Diameter"
        },
        "value": "32 · 63 mm"
      }
    ],
    "features": [
      {
        "tr": "Tam sızdırmazlık",
        "en": "Full seal"
      },
      {
        "tr": "Kolay kullanım",
        "en": "Easy to operate"
      },
      {
        "tr": "Yapıştırma muflu",
        "en": "Solvent-cement ends"
      }
    ],
    "usage": {
      "tr": "Havuz tesisatında",
      "en": "Pool plumbing"
    },
    "galleryCount": 1
  },
  {
    "slug": "cekvalf",
    "category": "plumbing",
    "brand": "Pimtaş",
    "name": {
      "tr": "U-PVC Yaylı Çekvalf",
      "en": "U-PVC Spring Check Valve"
    },
    "tagline": {
      "tr": "Tek yön",
      "en": "One way"
    },
    "description": {
      "tr": "Yaylı çekvalf; suyun tek yönde akmasını sağlar ve geri akışı önler.",
      "en": "A spring check valve that keeps water flowing one way and prevents backflow."
    },
    "body": [
          {
                "tr": "Çekvalf suyun yalnızca tek yönde akmasını sağlar. İçindeki yay klapeyi normalde kapalı tutar; akış basıncı yayı yenerek yolu açar, akış kesildiği anda yay klapeyi hemen yerine oturtarak ters yönü kapatır. Yaylı tip, yatay ya da dik hatlarda yerçekimine ihtiyaç duymadan kapandığı için havuz tesisatında yaygın kullanılır.",
                "en": "A check valve lets water move in one direction only. The internal spring normally holds the disc shut; flow pressure overcomes the spring and opens the path, and the moment flow stops the spring seats the disc again, closing the reverse direction. Because the spring type closes without relying on gravity, it works in both horizontal and vertical runs and is widely used in pool systems."
          },
          {
                "tr": "İki yerde gerçekten kritiktir. Pompa hattında, pompa durduğunda suyun geri kaçıp pompa gövdesinin boşalmasını ve bir sonraki çalıştırmada emiş kaybını önler. Dozaj pompası hattında ise kimyasalın hattan geri emilmesini engeller; bu, hem dozajın doğru gitmesi hem de ekipmanın korunması için önemlidir. Farklı kotlarda çalışan ısı pompası ve şelale kollarında da geri boşalmayı durdurur.",
                "en": "There are two places where it is genuinely critical. On the pump line it stops water from running back and emptying the pump body when the pump stops, which would cost priming on the next start. On a dosing pump line it prevents chemical being siphoned back out of the line, which matters both for dose accuracy and for protecting the equipment. It also stops back-draining on heat pump and waterfall branches that sit at different levels."
          },
          {
                "tr": "Montajda gövdedeki ok akış yönünü gösterir; ters takılan çekvalf hattı tamamen kapatır. Yay ve klape kireç ya da tortu yüzünden tutukluk yapabildiğinden periyodik bakımda kontrol edilir. Pimtaş 32, 50 ve 63 mm ölçülerde sunulur.",
                "en": "The arrow on the body shows the flow direction; installed backwards, a check valve simply blocks the line. Scale or debris can make the spring and disc sticky, so it is checked during routine servicing. Pimtaş offers 32, 50 and 63 mm sizes."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Tesisat"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Pimtaş"
      },
      {
        "label": {
          "tr": "Çap",
          "en": "Diameter"
        },
        "value": "32 · 50 · 63 mm"
      }
    ],
    "features": [
      {
        "tr": "Geri akışı önler",
        "en": "Prevents backflow"
      },
      {
        "tr": "Yaylı mekanizma",
        "en": "Spring mechanism"
      },
      {
        "tr": "Yapıştırma muflu",
        "en": "Solvent-cement ends"
      }
    ],
    "usage": {
      "tr": "Havuz tesisatında",
      "en": "Pool plumbing"
    },
    "galleryCount": 1
  },
  {
    "slug": "dis-disli-adaptor",
    "category": "plumbing",
    "brand": "Pimtaş",
    "name": {
      "tr": "U-PVC Dişli Adaptör",
      "en": "U-PVC Threaded Adaptor"
    },
    "tagline": {
      "tr": "Dişli geçiş",
      "en": "Threaded join"
    },
    "description": {
      "tr": "PVC boru ile dişli bağlantıları birleştiren yapıştırma adaptör.",
      "en": "A solvent-cement adaptor joining PVC pipe to threaded connections."
    },
    "body": [
          {
                "tr": "Dişli adaptör, tesisatta iki farklı birleştirme dilini birbirine çevirir: bir ucu boruya yapıştırılan muflu uçtur, diğer ucu ise dişlidir. Pompa, filtre, ısı pompası, manometre, dozaj ünitesi gibi fabrika çıkışı dişli ağıza sahip ekipmanlar PVC hattına bu parça sayesinde bağlanır. Böylece hattın kendisi kalıcı yapıştırma ile kurulurken, ekipman tarafı gerektiğinde sökülüp değiştirilebilir kalır.",
                "en": "A threaded adaptor translates between the two joining languages of a pool system: one end is a socket that is cemented to the pipe, the other is threaded. Equipment that leaves the factory with a threaded port — pumps, filters, heat pumps, pressure gauges, dosing units — is connected to the U-PVC line through this part. The line itself stays permanently solvent-welded while the equipment side remains removable."
          },
          {
                "tr": "İki uç iki farklı şekilde sızdırmaz yapılır ve bunları karıştırmamak gerekir. Yapıştırma tarafı temizleyici ve yapıştırıcıyla normal prosedüre göre birleştirilir. Dişli tarafta yapıştırıcı kullanılmaz; sızdırmazlık uygun bant ya da conta ile sağlanır. Aşırı sıkmak PVC dişi çatlatır, bu yüzden elle sıkıp ölçülü tamamlamak esastır.",
                "en": "The two ends are sealed in two different ways and they must not be confused. The socket end is joined with cleaner and cement following the normal procedure. The threaded end never takes cement; sealing is done with suitable tape or a gasket. Overtightening cracks the PVC thread, so it is hand-tightened and finished with restraint."
          },
          {
                "tr": "Seçimde dişin erkek ya da dişi olması ve ölçüsünün ekipman ağzıyla tam eşleşmesi aranır; zorlanarak takılan uyumsuz diş kısa sürede kaçak yapar. Ayrıca ekipmanın ileride sökülebilmesi için adaptörün etrafında anahtar dönecek kadar boşluk bırakılmalıdır; duvara ya da betona sıkışmış bir dişli bağlantı, arıza anında bütün hattın kesilmesine yol açar. Pimtaş adaptör 32 mm boru ölçüsüyle sunulur.",
                "en": "When selecting, the thread must be the right gender and must match the equipment port exactly; a mismatched thread forced into place soon leaks. Enough clearance should also be left around the adaptor for a wrench to turn, so the equipment can be removed later; a threaded connection wedged against a wall or concrete means cutting the whole line when a fault appears. The Pimtaş adaptor is offered for 32 mm pipe."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Tesisat"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Pimtaş"
      },
      {
        "label": {
          "tr": "Çap",
          "en": "Diameter"
        },
        "value": "32 mm"
      }
    ],
    "features": [
      {
        "tr": "Dişli–yapıştırma geçiş",
        "en": "Thread-to-cement"
      },
      {
        "tr": "Sızdırmaz",
        "en": "Leak-free"
      },
      {
        "tr": "32 mm",
        "en": "32 mm"
      }
    ],
    "usage": {
      "tr": "Havuz tesisatında",
      "en": "Pool plumbing"
    },
    "galleryCount": 1
  },
  {
    "slug": "kruva",
    "category": "plumbing",
    "brand": "Pimtaş",
    "name": {
      "tr": "U-PVC Kruva (İstavroz)",
      "en": "U-PVC Cross"
    },
    "tagline": {
      "tr": "Dört yön",
      "en": "Four ways"
    },
    "description": {
      "tr": "Hattı dört yöne ayıran U-PVC kruva (istavroz) ek parça.",
      "en": "A U-PVC cross that splits the line four ways."
    },
    "body": [
          {
                "tr": "Kruva, halk arasında istavroz denen dört yönlü ek parçadır: tek noktadan karşılıklı iki kola aynı anda dağıtım yapar ya da iki kolu tek hatta toplar. Havuzda çok sayıda dip dönüş ağzı, masaj jeti veya nozul beslenen dağıtım hatlarında, yan yana iki te kullanmak yerine tek gövdeyle simetrik bir dağıtım kurmayı sağlar. Bu hem hattı kısaltır hem de ek sayısını azaltır.",
                "en": "A cross is the four-way fitting: from a single point it feeds two opposing branches at once, or collects two branches into one line. On distribution manifolds that serve several floor returns, massage jets or nozzles, it builds a symmetrical split with one body instead of two tees placed back to back. That shortens the run and reduces the number of joints."
          },
          {
                "tr": "Dört kol aynı noktadan beslendiği için akışın paylaşımı hassastır. Kollar arasında uzunluk ya da yükseklik farkı büyükse bazı ağızlar zayıf kalır; bu yüzden kol güzergâhları dengeli planlanır ve gerektiğinde her kola ayar vanası konur. Ayrıca tek parça dört ek yeri demektir: dördü de aynı özenle temizlenip yapıştırılmalıdır, çünkü zayıf tek bir ek bütün dağıtım noktasını sökmeyi gerektirir.",
                "en": "Because all four branches are fed from one point, the flow split is sensitive. If the branches differ much in length or height, some outlets will run weak, so the branch routes are planned for balance and, where needed, each branch gets its own regulating valve. A cross also means four joints in one part: all four must be cleaned and cemented with equal care, since a single weak joint means dismantling the whole distribution point."
          },
          {
                "tr": "Pimtaş kruva 50 ve 63 mm ölçülerde, yapıştırma bağlantılıdır. Zorlanan veya desteksiz bir noktaya değil, sabitlenmiş güzergâha yerleştirilmelidir.",
                "en": "The Pimtaş cross comes in 50 and 63 mm with solvent-weld sockets. It belongs on a properly supported route, not at a point under strain or left unbraced."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Tesisat"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Pimtaş"
      },
      {
        "label": {
          "tr": "Çap",
          "en": "Diameter"
        },
        "value": "50 · 63 mm"
      }
    ],
    "features": [
      {
        "tr": "Dört yollu",
        "en": "Four-way"
      },
      {
        "tr": "Yapıştırma muflu",
        "en": "Solvent-cement"
      },
      {
        "tr": "50–63 mm",
        "en": "50–63 mm"
      }
    ],
    "usage": {
      "tr": "Havuz tesisatında",
      "en": "Pool plumbing"
    },
    "galleryCount": 1
  },
  {
    "slug": "kortapa",
    "category": "plumbing",
    "brand": "Pimtaş",
    "name": {
      "tr": "U-PVC Kör Tapa",
      "en": "U-PVC End Cap"
    },
    "tagline": {
      "tr": "Hattı kapatır",
      "en": "Seals the line"
    },
    "description": {
      "tr": "Boru hattının ucunu sızdırmaz biçimde kapatan kör tapa.",
      "en": "An end cap that seals the end of a pipe run."
    },
    "body": [
          {
                "tr": "Kör tapa bir boru ucunu sızdırmaz biçimde kapatır; işlevi akışı yönlendirmek değil, bir yolu bilinçli olarak bitirmektir. Havuz tesisatında üç tipik kullanımı vardır: ileride eklenmesi düşünülen bir kol, örneğin şelale ya da ısı pompası hattı için bırakılan yedek çıkışı kapalı tutmak; kullanımdan çıkarılan bir kolu iptal etmek; ve montaj sonrası basınç testinde hattı kapatıp kaçak aramak.",
                "en": "An end cap closes a pipe end tightly; its purpose is not to direct flow but to deliberately terminate a path. In pool systems it has three typical uses: keeping a spare outlet closed for a branch planned later, such as a waterfall or heat pump line; retiring a branch that is no longer in use; and sealing a line for the pressure test that follows installation, to hunt for leaks."
          },
          {
                "tr": "Yapıştırma ile kapatılan tapa kalıcıdır, kesmeden açılamaz. Bu nedenle gerçekten yakın zamanda kullanılacak bir uçta tapa yerine vana bırakmak daha akılcıdır. Beton içine giren yedek uçların yeri tesisat projesinde işaretlenmelidir; işaretlenmeyen bir tapa yıllar sonra aranırken bulunamaz.",
                "en": "A cemented cap is permanent and cannot be opened without cutting. So where a branch will genuinely be used soon, leaving a valve rather than a cap is the wiser choice. The position of spare ends that disappear into concrete must be marked on the installation drawing; an unmarked cap simply cannot be found years later."
          },
          {
                "tr": "Kapatılan kolda su durgun kaldığı için tortu ve kireç birikmesi olağandır; bu yüzden yedek uçlar mümkün olduğunca kısa bırakılır, uzun kör kollardan kaçınılır. Tapanın oturduğu boru ucunun da düzgün kesilip çapağının alınması gerekir: eğri bir uçta yapıştırma yüzeyi eksik kalır ve basınç altında ilk veren yer burası olur. Pimtaş kör tapa 50 ve 63 mm ölçülerdedir.",
                "en": "Water stands still in a capped branch, so sediment and scale build-up there is normal; spare ends are kept as short as possible and long dead legs avoided. The pipe end the cap seats on must also be cut square and deburred: on a skewed end the bonded area is incomplete, and that is the first place to give way under pressure. The Pimtaş end cap is available in 50 and 63 mm."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Tesisat"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Pimtaş"
      },
      {
        "label": {
          "tr": "Çap",
          "en": "Diameter"
        },
        "value": "50 · 63 mm"
      }
    ],
    "features": [
      {
        "tr": "Tam sızdırmazlık",
        "en": "Full seal"
      },
      {
        "tr": "Yapıştırma muflu",
        "en": "Solvent-cement"
      },
      {
        "tr": "50–63 mm",
        "en": "50–63 mm"
      }
    ],
    "usage": {
      "tr": "Havuz tesisatında",
      "en": "Pool plumbing"
    },
    "galleryCount": 1
  },
  {
    "slug": "te",
    "category": "plumbing",
    "brand": "Pimtaş",
    "name": {
      "tr": "U-PVC Te",
      "en": "U-PVC Tee"
    },
    "tagline": {
      "tr": "Üç yön",
      "en": "Three ways"
    },
    "description": {
      "tr": "Hattı üç yöne ayıran U-PVC te ek parça.",
      "en": "A U-PVC tee that branches the line three ways."
    },
    "body": [
          {
                "tr": "Te, hattı üç yöne ayıran ek parçadır: ana hattan bir kol çıkarır ya da iki hattı tek gövdede birleştirir. Havuz tesisatında dip dönüş hattını iki nozula bölmek, ana hattan ısı pompası, şelale veya hidromasaj kolu almak ve dozaj noktası için ayrı bir giriş açmak gibi işlerin hemen hepsi te ile çözülür. Tesisatın dallanma mantığını kuran parça budur.",
                "en": "A tee splits the line three ways: it takes a branch off the main run, or merges two runs into one body. In pool plumbing almost every branching job is solved with a tee — dividing the return line between two nozzles, taking off a heat pump, waterfall or spa-jet branch, or opening a separate entry for a dosing point. It is the part that establishes how the system branches."
          },
          {
                "tr": "Yönü doğru kurmak önemlidir. Kola geçiş dik olduğu için o taraftaki yerel kayıp, düz geçişe göre daha yüksektir; bu nedenle akışın büyük kısmının düz koldan geçmesi, ayrılan kısmın yan koldan alınması tercih edilir. Ayrılan kola bir vana konması ise iki taraf arasındaki debi dengesini sonradan ayarlamayı mümkün kılar.",
                "en": "Orientation matters. The path into the branch turns sharply, so its local loss is higher than that of the straight run; the bulk of the flow is therefore sent through the straight leg and the smaller share taken off the side. Fitting a valve on the branch makes it possible to balance the flow between the two sides afterwards."
          },
          {
                "tr": "Kol ağzının bakacağı yön montajdan önce işaretlenmelidir: yapıştırıcı sürüldükten sonra parçayı döndürmek için çok az zaman kalır. Pimtaş te 50 ve 63 mm ölçülerde, yapıştırma bağlantılıdır.",
                "en": "Mark the direction the branch outlet must face before assembly: once cement is applied there is very little time left to rotate the fitting. The Pimtaş tee comes in 50 and 63 mm with solvent-weld sockets."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Tesisat"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Pimtaş"
      },
      {
        "label": {
          "tr": "Çap",
          "en": "Diameter"
        },
        "value": "50 · 63 mm"
      }
    ],
    "features": [
      {
        "tr": "Üç yollu",
        "en": "Three-way"
      },
      {
        "tr": "Yapıştırma muflu",
        "en": "Solvent-cement"
      },
      {
        "tr": "50–63 mm",
        "en": "50–63 mm"
      }
    ],
    "usage": {
      "tr": "Havuz tesisatında",
      "en": "Pool plumbing"
    },
    "galleryCount": 1
  },
  {
    "slug": "reduksiyon",
    "category": "plumbing",
    "brand": "Pimtaş",
    "name": {
      "tr": "U-PVC Redüksiyon",
      "en": "U-PVC Reducer"
    },
    "tagline": {
      "tr": "Çap geçişi",
      "en": "Size change"
    },
    "description": {
      "tr": "Farklı çaptaki boruları birbirine geçiren redüksiyon.",
      "en": "A reducer that joins pipes of different diameters."
    },
    "body": [
          {
                "tr": "Redüksiyon, farklı çaptaki iki boruyu ya da bir boruyla ondan başka ölçüde bir ekipman ağzını birbirine geçirir. Pompa, filtre veya ısıtıcı bağlantı ağzı hattın çapıyla aynı olmadığında ve ana hattan daha ince bir kola geçildiğinde kullanılır. Pimtaş redüksiyon 50 mm ile 32 mm arasında geçiş sağlar.",
                "en": "A reducer joins two pipes of different diameters, or a pipe to an equipment port of another size. It is used where a pump, filter or heater connection does not match the diameter of the line, and where a thinner branch is taken off a main run. The Pimtaş reducer bridges 50 mm and 32 mm."
          },
          {
                "tr": "Çap küçültmek suyun hızını artırır, bu da hem basınç kaybı hem gürültü demektir. Emiş tarafındaki gereksiz daraltma pompayı zorlar; basma tarafında ise filtreye ulaşan basıncı düşürür. Bu yüzden redüksiyon keyfî bir ara parça değildir: zorunlu bir ölçü uyumsuzluğunu çözmek için konur, hattı kısa kesmek adına değil.",
                "en": "Narrowing the bore raises water velocity, which means both pressure loss and noise. An unnecessary restriction on the suction side strains the pump; on the discharge side it lowers the pressure reaching the filter. A reducer is therefore not a casual intermediate part: it is fitted to resolve a genuine size mismatch, not as a shortcut in the layout."
          },
          {
                "tr": "Ölçü geçişini tek adımda sertçe yapmak yerine mümkün olduğunca kademeli planlamak ve geçişi pompa ağzından biraz uzakta bırakmak akışı daha düzgün tutar. Montajda iki ucun da farklı çapta olması nedeniyle her uç kendi mufunda ayrı ayrı kontrol edilir; ikisinin de dibe tam oturması sızdırmazlığın temel koşuludur. Pimtaş redüksiyon yapıştırma bağlantılıdır.",
                "en": "Planning the size change in stages rather than one abrupt step, and keeping the transition a little away from the pump port, keeps the flow smoother. Since the two ends are of different diameters, each is checked separately in its own socket during assembly; both seating fully home is the basic condition for a tight joint. The Pimtaş reducer has solvent-weld sockets."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Tesisat"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Pimtaş"
      },
      {
        "label": {
          "tr": "Çap",
          "en": "Diameter"
        },
        "value": "50 · 32 mm"
      }
    ],
    "features": [
      {
        "tr": "Çap dönüşümü",
        "en": "Diameter change"
      },
      {
        "tr": "Yapıştırma muflu",
        "en": "Solvent-cement"
      },
      {
        "tr": "50–32 mm",
        "en": "50–32 mm"
      }
    ],
    "usage": {
      "tr": "Havuz tesisatında",
      "en": "Pool plumbing"
    },
    "galleryCount": 1
  },
  {
    "slug": "manson",
    "category": "plumbing",
    "brand": "Pimtaş",
    "name": {
      "tr": "U-PVC Manşon",
      "en": "U-PVC Coupler"
    },
    "tagline": {
      "tr": "Uç uca ekleme",
      "en": "End-to-end join"
    },
    "description": {
      "tr": "İki boruyu uç uca birleştiren yapıştırma manşon.",
      "en": "A solvent-cement coupler joining two pipes end to end."
    },
    "body": [
          {
                "tr": "Manşon, aynı çaptaki iki boruyu uç uca ekleyen en yalın ek parçadır. Boru boyu hattın uzunluğuna yetmediğinde, uzun bir güzergâhta parça eklenmesi gerektiğinde ya da hasar gören bir bölüm kesilip yenisiyle değiştirildiğinde devreye girer. Yön değiştirmez, dallandırmaz; tek işi hattı kesintisiz sürdürmektir.",
                "en": "A coupler is the plainest fitting of all: it joins two pipes of the same diameter end to end. It comes into play when a pipe length falls short of the run, when a section has to be added along a long route, or when a damaged length is cut out and replaced. It neither changes direction nor branches; its only job is to continue the line without interruption."
          },
          {
                "tr": "En çok kullanılan parça olması onu önemsiz yapmaz. Her ek yeri hem küçük bir basınç kaybı hem de potansiyel bir kaçak noktasıdır; bu yüzden boru boyları planlanarak gereksiz manşon sayısı azaltılır. Özellikle beton altına girecek hatlarda ek yerini erişilebilir bir bölgeye denk getirmek sonradan işi kolaylaştırır.",
                "en": "Being the most used part does not make it trivial. Every joint is both a small pressure loss and a potential leak point, so pipe lengths are planned to keep the number of couplers down. On runs that will go under concrete in particular, placing joints where they remain accessible pays off later."
          },
          {
                "tr": "Onarımda dikkat edilecek nokta şudur: iki ucu sabitlenmiş bir hatta manşon geçirmek için boruya eksenel hareket payı gerekir. Kesim ölçüsü buna göre alınır, gerekirse hattın bir ucu geçici olarak serbest bırakılır. Yapıştırmadan önce iki borunun eksenlerinin aynı hizada olduğu da kontrol edilmelidir; zorlanarak hizalanan bir ek, basınç altında en zayıf nokta olur. Pimtaş manşon 50 ve 63 mm ölçülerdedir.",
                "en": "One point to watch during repairs: sliding a coupler onto a line fixed at both ends needs some axial play in the pipe. The cut is measured accordingly, and if necessary one end of the run is temporarily freed. Before cementing, check that the two pipes are truly in line with each other; a joint forced into alignment becomes the weakest point under pressure. The Pimtaş coupler is available in 50 and 63 mm."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Tesisat"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Pimtaş"
      },
      {
        "label": {
          "tr": "Çap",
          "en": "Diameter"
        },
        "value": "50 · 63 mm"
      }
    ],
    "features": [
      {
        "tr": "Düz ekleme",
        "en": "Straight join"
      },
      {
        "tr": "Yapıştırma muflu",
        "en": "Solvent-cement"
      },
      {
        "tr": "50–63 mm",
        "en": "50–63 mm"
      }
    ],
    "usage": {
      "tr": "Havuz tesisatında",
      "en": "Pool plumbing"
    },
    "galleryCount": 1
  },
  {
    "slug": "dirsek-90",
    "category": "plumbing",
    "brand": "Pimtaş",
    "name": {
      "tr": "U-PVC Dirsek 90°",
      "en": "U-PVC 90° Elbow"
    },
    "tagline": {
      "tr": "90° dönüş",
      "en": "90° turn"
    },
    "description": {
      "tr": "Hattı 90° döndüren U-PVC dirsek.",
      "en": "A U-PVC elbow that turns the line 90°."
    },
    "body": [
          {
                "tr": "90° dirsek hattın yönünü dik açıyla çevirir. Havuz tesisatında bu keskin dönüşe sık ihtiyaç duyulur: skimmer ağzından aşağı inen hat, pompa dairesi duvarında kot değiştiren güzergâh, dar makine hacminde kolektöre dönüş gibi yerlerde başka bir çözüm yoktur. Dar alanda hattı toparlayan parça budur.",
                "en": "A 90° elbow turns the line through a right angle. Pool systems need that sharp turn often: the drop from a skimmer throat, a route changing level at the plant-room wall, the turn back to the manifold in a cramped machine space — there is no other solution in those places. It is the part that gathers a line into tight quarters."
          },
          {
                "tr": "Bedeli akış kaybıdır. Suyun yönü aniden değiştiği için her 90° dirsek pompanın yenmek zorunda olduğu dirence bir miktar ekler; üst üste binen dirsekler toplamda pompanın verimini hissedilir biçimde düşürür. Bu yüzden gereksiz dönüşlerden kaçınılır ve yer varsa iki adet 45° dirsekle daha yumuşak bir dönüş kurulur.",
                "en": "The price is flow loss. Because the water changes direction abruptly, every 90° elbow adds to the resistance the pump has to overcome, and elbows stacked one after another noticeably reduce pump efficiency overall. Unnecessary turns are therefore avoided, and where there is room a gentler turn is built from two 45° elbows instead."
          },
          {
                "tr": "Emiş tarafında dirseği pompa ağzının hemen önüne koymamak, araya düz bir boru boyu bırakmak akışın pompaya düzgün girmesini sağlar. Dirsek ayrıca desteklenmeli, hattı zorlayarak hizaya getirmek için kullanılmamalıdır. Dönüş noktaları tesisatın en çok titreşim ve gerilme alan yerleri olduğundan kelepçe ile sabitlenmesi de ihmal edilmemelidir. Pimtaş dirsek 50 ve 63 mm ölçülerde, yapıştırma bağlantılıdır.",
                "en": "On the suction side, keeping the elbow away from the pump port and leaving a straight length in between lets water enter the pump evenly. The elbow should also be supported, and never used to force a misaligned run into line. Since turning points take the most vibration and stress in a system, clamping them properly should not be neglected either. The Pimtaş elbow comes in 50 and 63 mm with solvent-weld sockets."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Tesisat"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Pimtaş"
      },
      {
        "label": {
          "tr": "Çap",
          "en": "Diameter"
        },
        "value": "50 · 63 mm"
      }
    ],
    "features": [
      {
        "tr": "90° yön değişimi",
        "en": "90° turn"
      },
      {
        "tr": "Yapıştırma muflu",
        "en": "Solvent-cement"
      },
      {
        "tr": "50–63 mm",
        "en": "50–63 mm"
      }
    ],
    "usage": {
      "tr": "Havuz tesisatında",
      "en": "Pool plumbing"
    },
    "galleryCount": 1
  },
  {
    "slug": "dirsek-45",
    "category": "plumbing",
    "brand": "Pimtaş",
    "name": {
      "tr": "U-PVC Dirsek 45°",
      "en": "U-PVC 45° Elbow"
    },
    "tagline": {
      "tr": "45° dönüş",
      "en": "45° turn"
    },
    "description": {
      "tr": "Hattı 45° yönlendiren U-PVC dirsek.",
      "en": "A U-PVC elbow that turns the line 45°."
    },
    "body": [
          {
                "tr": "45° dirsek hattın yönünü yarım açıyla kırar. Dik dönüşe ihtiyaç olmayan yerlerde, örneğin havuz kenarını takip eden bir güzergâhta, iki kot arasında yumuşak geçişte ya da köşeyi keserek kısa yol almakta kullanılır. İki tanesi ardı ardına konularak 90° dönüş de kurulabilir.",
                "en": "A 45° elbow breaks the direction of a line by half an angle. It is used where a right-angle turn is not needed — a route following the pool edge, a gentle transition between two levels, or cutting a corner to shorten the path. Two of them in series can also build a full 90° turn."
          },
          {
                "tr": "Tercih edilme sebebi akış davranışıdır: dönüş yumuşak olduğu için suyun yön değiştirirken kaybı 90° dirseğe göre daha azdır. Uzun emiş ve basma hatlarında bu fark birikerek pompanın işini hafifletir, dolayısıyla filtrasyon süresini ve elektrik tüketimini olumlu etkiler. Mümkün olan her yerde keskin dönüş yerine bu parçayı seçmek iyi bir tesisat alışkanlığıdır.",
                "en": "The reason to prefer it is how the water behaves: the turn is gentle, so the loss as the flow changes direction is lower than with a 90° elbow. Over long suction and discharge runs that difference accumulates and eases the pump's work, which in turn helps filtration time and power consumption. Choosing it over a sharp turn wherever possible is simply good practice."
          },
          {
                "tr": "Montajda açının hattı zorlamadan oturması aranır; 45° dirsekler hizasızlığı kapatmak için bükülerek kullanılırsa yapışma yüzeyinde kalıcı gerilme oluşur. İki dirsekle 90° dönüş kurulurken aralarına kısa bir boru parçası girdiği için ek sayısı ikiye çıkar; bu yüzden kazanılan akış ile artan ek yeri riski birlikte değerlendirilir. Pimtaş dirsek 50 ve 63 mm ölçülerde, yapıştırma bağlantılıdır.",
                "en": "During assembly the angle should sit without straining the run; using 45° elbows to absorb misalignment leaves permanent stress at the bonded surface. When two of them build a 90° turn, a short piece of pipe sits between them and the joint count doubles, so the flow gained is weighed against the added joint risk. The Pimtaş elbow comes in 50 and 63 mm with solvent-weld sockets."
          }
    ],
    "specs": [
      {
        "label": {
          "tr": "Kategori",
          "en": "Category"
        },
        "value": "Tesisat"
      },
      {
        "label": {
          "tr": "Marka",
          "en": "Brand"
        },
        "value": "Pimtaş"
      },
      {
        "label": {
          "tr": "Çap",
          "en": "Diameter"
        },
        "value": "50 · 63 mm"
      }
    ],
    "features": [
      {
        "tr": "45° yön değişimi",
        "en": "45° turn"
      },
      {
        "tr": "Yapıştırma muflu",
        "en": "Solvent-cement"
      },
      {
        "tr": "50–63 mm",
        "en": "50–63 mm"
      }
    ],
    "usage": {
      "tr": "Havuz tesisatında",
      "en": "Pool plumbing"
    },
    "galleryCount": 1
  }
];

// ── helpers ────────────────────────────────────────────────
export const localize = (l: L, locale: string): string =>
  locale === 'en' ? l.en : l.tr;

/** Slugs that have real photography under /public/products/<slug>.webp (4:5).
 *  Everything else falls back to the ProductShot studio placeholder. */
const PHOTO_SLUGS = new Set<string>([
  'sivi-ph-quardex', 'sivi-ph-selenoid', 'toz-ph-quardex', 'toz-ph-selenoid', 'sivi-klor-quardex',
  'sivi-klor-selenoid', 'toz-klor-quardex', 'toz-klor-selenoid', 'multi-tablet-wtr', 'yosun-onleyici-selenoid',
  'yosun-onleyici-poolbox', 'yosun-onleyici-quardex', 'yosun-giderici-quardex', 'berraklastirici-quardex',
  'parlatici-selenoid', 'parlatici-poolbox', 'cokturucu-selenoid', 'cokturucu-poolbox', 'flok-tablet',
  'anti-iyon-quardex', 'iyon-tutucu-selenoid', 'iyon-topu', 'hucre-temizleyici-selenoid', 'bagli-klor-poolbox',
  'cevre-temizlik-quardex', 'alkalinite-dusurucu-selenoid', 'temizlik-asidi-selenoid', 'led-23w',
  'led-32w', 'led-9w', 'kum-filtresi-600', 'pompa-1hp', 'isikli-fiskiye', 'solar-fiskiye', 'balina-hoparlor',
  'yuzen-hoparlor', 'deniz-yildizi', 'havuz-robotu', 'havuz-supurgesi', 'havuz-hortumu', 'yuzey-kepcesi',
  'havuz-fircasi', 'termometre', 'dispanser', 'test-insta', 'test-damla', 'test-set', 'test-colorq',
  'pvc-borular',
  'pvc-yapistirici',
  'kuresel-vana', 'cekvalf', 'dis-disli-adaptor', 'kruva', 'kortapa', 'te', 'reduksiyon', 'manson', 'dirsek-90', 'dirsek-45',
]);

/**
 * Per-product primary-photo overrides. Used when a product's image is swapped
 * to a new file and the URL must change so no cached version is served.
 */
const PHOTO_OVERRIDES: Record<string, string> = {
  'test-colorq': '/products/test-colorq-dijital.webp',
};

export const productPhoto = (slug: string): string | undefined =>
  PHOTO_OVERRIDES[slug] ?? (PHOTO_SLUGS.has(slug) ? `/products/${slug}.webp` : undefined);

export const hasPhoto = (slug: string): boolean => PHOTO_SLUGS.has(slug);

/**
 * Variant/detail shots per product under /public/products/gallery/<slug>-<n>.webp.
 * A product's brand/size variants (e.g. Quardex + Selenoid + Poolbox of the same
 * chemical) are grouped into one card and surfaced together in its gallery.
 */
const GALLERY_COUNTS: Record<string, number> = { 'sivi-ph-quardex': 1, 'sivi-ph-selenoid': 1, 'toz-ph-quardex': 1, 'toz-ph-selenoid': 1, 'sivi-klor-quardex': 1, 'sivi-klor-selenoid': 1, 'toz-klor-quardex': 2, 'toz-klor-selenoid': 1, 'multi-tablet-wtr': 2, 'yosun-onleyici-selenoid': 1, 'yosun-onleyici-poolbox': 2, 'yosun-onleyici-quardex': 1, 'yosun-giderici-quardex': 1, 'berraklastirici-quardex': 1, 'parlatici-selenoid': 1, 'parlatici-poolbox': 2, 'cokturucu-selenoid': 1, 'cokturucu-poolbox': 1, 'flok-tablet': 1, 'anti-iyon-quardex': 1, 'iyon-tutucu-selenoid': 1, 'iyon-topu': 1, 'hucre-temizleyici-selenoid': 1, 'bagli-klor-poolbox': 1, 'cevre-temizlik-quardex': 1, 'alkalinite-dusurucu-selenoid': 1, 'temizlik-asidi-selenoid': 1, 'led-23w': 2, 'led-32w': 1, 'led-9w': 1, 'kum-filtresi-600': 1, 'pompa-1hp': 1, 'isikli-fiskiye': 1, 'solar-fiskiye': 1, 'balina-hoparlor': 1, 'yuzen-hoparlor': 1, 'deniz-yildizi': 1, 'havuz-robotu': 1, 'havuz-supurgesi': 1, 'havuz-hortumu': 1, 'yuzey-kepcesi': 1, 'havuz-fircasi': 1, 'termometre': 1, 'dispanser': 1, 'test-insta': 1, 'test-damla': 1, 'test-set': 1, 'test-colorq': 1, 'pvc-borular': 1, 'pvc-yapistirici': 1, 'kuresel-vana': 1, 'cekvalf': 1, 'dis-disli-adaptor': 1, 'kruva': 1, 'kortapa': 1, 'te': 1, 'reduksiyon': 1, 'manson': 1, 'dirsek-90': 1, 'dirsek-45': 1 };

const GALLERY_OVERRIDES: Record<string, string[]> = {
  'test-colorq': ['/products/test-colorq-dijital.webp'],
};

export const productGallery = (slug: string): string[] =>
  GALLERY_OVERRIDES[slug] ??
  Array.from(
    { length: GALLERY_COUNTS[slug] ?? 0 },
    (_, i) => `/products/gallery/${slug}-${i + 1}.webp`,
  );

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
  body: string[];
  usage: string;
  galleryCount: number;
  pdf?: string;
  photo?: string;
  gallery: string[];
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
    body: (p.body ?? []).map(pick),
    usage: pick(p.usage),
    galleryCount: p.galleryCount,
    pdf: p.pdf,
    photo: productPhoto(p.slug),
    gallery: productGallery(p.slug),
    specs: p.specs.map((s) => ({ label: pick(s.label), value: s.value })),
    features: p.features.map(pick),
  };
}
