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
    "slug": "vana-boru",
    "category": "plumbing",
    "brand": "Pimtaş",
    "name": {
      "tr": "U-PVC Vana & Ek Parçalar",
      "en": "U-PVC Valves & Fittings"
    },
    "tagline": {
      "tr": "Suyun görünmez altyapısı",
      "en": "The unseen infrastructure"
    },
    "description": {
      "tr": "Pimtaş U-PVC küresel su vanaları ve yapıştırma muflu ek parçalar — dirsek, istavroz (kruva) ve redüksiyon. Havuz tesisatının dayanıklı bağlantı grubu; 63'lük ve 50'lik çaplarda.",
      "en": "Pimtaş U-PVC ball valves and solvent-cement fittings — elbows, crosses and reducers. The durable connection set for pool plumbing, in Ø63 and Ø50."
    },
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
        "value": "63'lük · 50'lik"
      }
    ],
    "features": [
      {
        "tr": "U-PVC dayanıklılık",
        "en": "Durable U-PVC"
      },
      {
        "tr": "Yapıştırma muflu bağlantı",
        "en": "Solvent-cement joints"
      },
      {
        "tr": "Vana, dirsek, kruva, redüksiyon",
        "en": "Valve, elbow, cross, reducer"
      }
    ],
    "usage": {
      "tr": "Havuz tesisatında",
      "en": "Pool plumbing"
    },
    "galleryCount": 1
  },
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
      "tr": "Pimtaş U-PVC basınçlı havuz boruları; farklı çaplarda, 63'lük ve 50'lik dahil. Yapıştırma muflu sistemle sızdırmaz, uzun ömürlü tesisat.",
      "en": "Pimtaş U-PVC pressure pipes for pools in a range of diameters, including Ø63 and Ø50. A leak-free, long-life line with solvent-cement joints."
    },
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
        "value": "63'lük · 50'lik"
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
  'vana-boru', 'pvc-borular',
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
const GALLERY_COUNTS: Record<string, number> = { 'sivi-ph-quardex': 1, 'sivi-ph-selenoid': 1, 'toz-ph-quardex': 1, 'toz-ph-selenoid': 1, 'sivi-klor-quardex': 1, 'sivi-klor-selenoid': 1, 'toz-klor-quardex': 2, 'toz-klor-selenoid': 1, 'multi-tablet-wtr': 2, 'yosun-onleyici-selenoid': 1, 'yosun-onleyici-poolbox': 2, 'yosun-onleyici-quardex': 1, 'yosun-giderici-quardex': 1, 'berraklastirici-quardex': 1, 'parlatici-selenoid': 1, 'parlatici-poolbox': 2, 'cokturucu-selenoid': 1, 'cokturucu-poolbox': 1, 'flok-tablet': 1, 'anti-iyon-quardex': 1, 'iyon-tutucu-selenoid': 1, 'iyon-topu': 1, 'hucre-temizleyici-selenoid': 1, 'bagli-klor-poolbox': 1, 'cevre-temizlik-quardex': 1, 'alkalinite-dusurucu-selenoid': 1, 'temizlik-asidi-selenoid': 1, 'led-23w': 2, 'led-32w': 1, 'led-9w': 1, 'kum-filtresi-600': 1, 'pompa-1hp': 1, 'isikli-fiskiye': 1, 'solar-fiskiye': 1, 'balina-hoparlor': 1, 'yuzen-hoparlor': 1, 'deniz-yildizi': 1, 'havuz-robotu': 1, 'havuz-supurgesi': 1, 'havuz-hortumu': 1, 'yuzey-kepcesi': 1, 'havuz-fircasi': 1, 'termometre': 1, 'dispanser': 1, 'test-insta': 1, 'test-damla': 1, 'test-set': 1, 'test-colorq': 1, 'vana-boru': 1, 'pvc-borular': 1 };

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
    usage: pick(p.usage),
    galleryCount: p.galleryCount,
    pdf: p.pdf,
    photo: productPhoto(p.slug),
    gallery: productGallery(p.slug),
    specs: p.specs.map((s) => ({ label: pick(s.label), value: s.value })),
    features: p.features.map(pick),
  };
}
