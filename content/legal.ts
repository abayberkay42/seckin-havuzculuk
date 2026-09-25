/**
 * Privacy notice (KVKK aydınlatma metni).
 *
 * Written against what this site actually does, verified by inspecting the
 * code and the live site: no analytics, no tracking pixels, one strictly
 * necessary cookie (NEXT_LOCALE), a mailto contact form that never posts to a
 * server, and one third-party embed (Google Maps) which is consent-gated.
 * If any of that changes — an analytics tag, a real form backend, a chat
 * widget — this document has to change with it.
 */

type L = { tr: string; en: string };
export type LegalSection = { heading: L; paragraphs: L[]; bullets?: L[] };

/** Last substantive revision. Shown on the page; bump when the text changes. */
export const PRIVACY_UPDATED = '2026-09-25';

export const privacySections: LegalSection[] = [
  {
    heading: { tr: 'Veri sorumlusu kimdir?', en: 'Who is the data controller?' },
    paragraphs: [
      {
        tr: '6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu, Alaçatı, 16088 Sokak C Blok No: 2-A, 35930 Çeşme / İzmir adresinde faaliyet gösteren Seçkin Havuzculuk (STC Royal A.Ş.) unvanlı işletmedir. Bu metin, seckinhavuzculuk.com adresini ziyaret ettiğinizde hangi kişisel verilerin işlendiğini, bunların neden işlendiğini ve bu konuda sahip olduğunuz hakları açıklamak için hazırlanmıştır.',
        en: 'Under Turkish Personal Data Protection Law No. 6698 (KVKK), the data controller is Seçkin Havuzculuk (STC Royal A.Ş.), operating at Alaçatı, 16088 Sokak C Blok No: 2-A, 35930 Çeşme / İzmir. This notice explains which personal data is processed when you visit seckinhavuzculuk.com, why it is processed and what rights you have.',
      },
      {
        tr: 'Sorularınız ve KVKK kapsamındaki başvurularınız için: +90 534 610 79 86 · stcroyalinsaat@gmail.com',
        en: 'For questions and KVKK requests: +90 534 610 79 86 · stcroyalinsaat@gmail.com',
      },
    ],
  },
  {
    heading: { tr: 'Hangi verileri işliyoruz?', en: 'What data do we process?' },
    paragraphs: [
      {
        tr: 'Bu site, ziyaretçilerini tanımlamaya yönelik bir izleme altyapısı kullanmaz. Sitede Google Analytics, Tag Manager, reklam pikseli ya da benzeri bir analiz aracı bulunmaz; davranışınız profillenmez ve üçüncü taraf reklam ağlarına aktarılmaz.',
        en: 'This site does not use tracking infrastructure to identify visitors. There is no Google Analytics, Tag Manager, advertising pixel or similar analytics tool; your behaviour is not profiled and is not shared with third-party ad networks.',
      },
      {
        tr: 'İşlenen veriler şunlarla sınırlıdır:',
        en: 'The data processed is limited to the following:',
      },
    ],
    bullets: [
      {
        tr: 'İletişim formu: Formu doldurup gönder dediğinizde bilgiler sitemizin sunucusuna kaydedilmez. Form, kendi cihazınızdaki e-posta uygulamanızı, yazdığınız ad, e-posta adresi ve mesaj hazır biçimde doldurulmuş olarak açar. Bu bilgiler bize ancak siz o e-postayı kendi e-posta hesabınızdan gönderdiğinizde ulaşır; gönderim sizin e-posta sağlayıcınız üzerinden gerçekleşir.',
        en: 'Contact form: when you submit the form, nothing is stored on our server. The form opens the email application on your own device, pre-filled with the name, email address and message you typed. That information reaches us only if you then send the email from your own account, via your own email provider.',
      },
      {
        tr: 'Telefon, WhatsApp ve e-posta: Bize doğrudan ulaştığınızda ilettiğiniz ad, telefon numarası, e-posta adresi ve talebinize ilişkin bilgiler işlenir.',
        en: 'Phone, WhatsApp and email: when you contact us directly, the name, phone number, email address and details of your enquiry that you provide are processed.',
      },
      {
        tr: 'Sunucu kayıtları: Site barındırma altyapısı, güvenlik ve hata takibi amacıyla IP adresi, tarayıcı bilgisi ve istek zamanı gibi teknik kayıtları otomatik olarak tutar. Bu kayıtlar reklam veya profilleme amacıyla kullanılmaz.',
        en: 'Server logs: the hosting infrastructure automatically records technical data such as IP address, browser information and request time for security and error monitoring. These logs are not used for advertising or profiling.',
      },
    ],
  },
  {
    heading: { tr: 'Çerezler', en: 'Cookies' },
    paragraphs: [
      {
        tr: 'Site, yalnızca bir adet zorunlu çerez kullanır: NEXT_LOCALE. Bu çerez sadece seçtiğiniz dili (Türkçe veya İngilizce) hatırlar, oturum süresiyle sınırlıdır ve kapattığınızda silinir. Kimlik bilgisi taşımaz, reklam amacıyla kullanılmaz. Zorunlu olduğu için çalışması rızaya bağlı değildir; ancak tarayıcı ayarlarınızdan çerezleri tamamen engelleyebilirsiniz.',
        en: 'The site uses exactly one strictly necessary cookie: NEXT_LOCALE. It only remembers the language you chose (Turkish or English), lasts for the session and is deleted when you close the browser. It carries no identifying information and is not used for advertising. Being strictly necessary, it does not depend on consent; you can nevertheless block cookies entirely in your browser settings.',
      },
      {
        tr: 'Bunun dışında site tarafından kurulan herhangi bir çerez, yerel depolama ya da izleme teknolojisi yoktur. Rıza tercihiniz de çerez olarak değil, tarayıcınızın yerel depolama alanında saklanır ve bize gönderilmez.',
        en: 'Beyond this, the site sets no other cookie, local storage entry or tracking technology. Your consent choice itself is kept in your browser’s local storage rather than in a cookie, and is never sent to us.',
      },
    ],
  },
  {
    heading: { tr: 'Google Haritalar ve rızanız', en: 'Google Maps and your consent' },
    paragraphs: [
      {
        tr: 'İletişim sayfasında ve sayfa altlarında konumumuzu gösteren bir Google Haritalar penceresi bulunur. Bu pencere yüklendiğinde tarayıcınız doğrudan Google sunucularına bağlanır ve bu sırada IP adresiniz Google ile paylaşılır. Google bu bağlantı üzerinden kendi çerezlerini yerleştirebilir.',
        en: 'A Google Maps panel showing our location appears on the contact page and in the page footer. When it loads, your browser connects directly to Google’s servers and your IP address is shared with Google in the process. Google may set its own cookies through that connection.',
      },
      {
        tr: 'Bu nedenle harita, siz izin vermeden yüklenmez. Harita alanında bir yer tutucu ve "Haritayı yükle" düğmesi görürsünüz; yalnızca bu düğmeye tıkladığınızda ya da çerez bildiriminde haritalara izin verdiğinizde harita yüklenir. Tercihinizi değiştirmek isterseniz tarayıcınızın site verilerini temizlemeniz yeterlidir; bildirim yeniden gösterilir. Google’ın kendi veri işleme uygulamaları için Google Gizlilik Politikası geçerlidir.',
        en: 'For this reason the map does not load until you allow it. You will see a placeholder with a "Load map" button; the map loads only when you click it or when you allow maps in the cookie notice. To change your choice, clear the site data in your browser and the notice will appear again. Google’s own data practices are governed by the Google Privacy Policy.',
      },
    ],
  },
  {
    heading: { tr: 'İşleme amaçları ve hukuki sebepler', en: 'Purposes and legal grounds' },
    paragraphs: [
      {
        tr: 'Kişisel verileriniz; talebinize yanıt vermek, keşif ve teklif süreci ile sözleşme öncesi görüşmeleri yürütmek, sunduğumuz inşaat ve bakım hizmetlerini yerine getirmek, site güvenliğini sağlamak ve hukuki yükümlülüklerimizi karşılamak amacıyla işlenir.',
        en: 'Your personal data is processed to respond to your enquiry, to carry out the site visit, quotation and pre-contractual discussions, to deliver the construction and maintenance services we provide, to maintain the security of the site and to meet our legal obligations.',
      },
      {
        tr: 'Hukuki sebep olarak KVKK’nın 5. maddesi kapsamında; bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, hukuki yükümlülüğün yerine getirilmesi ve veri sorumlusunun meşru menfaati dayanaklarına başvurulur. Google Haritalar gibi rızaya bağlı unsurlar yalnızca açık rızanızla çalışır.',
        en: 'The legal grounds relied on under Article 5 of the KVKK are: direct relevance to the conclusion or performance of a contract, compliance with a legal obligation, and the legitimate interests of the data controller. Consent-based elements such as Google Maps operate only with your explicit consent.',
      },
    ],
  },
  {
    heading: { tr: 'Aktarım ve saklama', en: 'Transfers and retention' },
    paragraphs: [
      {
        tr: 'Site, yurt dışında sunucuları bulunan bir barındırma sağlayıcısı üzerinde yayımlanmaktadır; teknik sunucu kayıtları bu altyapıda oluşur. E-posta yazışmaları ise kullandığımız e-posta sağlayıcısının sistemlerinde saklanır. Bu kapsamda kişisel verileriniz yurt dışındaki hizmet sağlayıcıların sunucularında işlenebilir. Verileriniz bunun dışında pazarlama amacıyla üçüncü kişilere satılmaz veya devredilmez.',
        en: 'The site is hosted on a provider whose servers are located abroad; technical server logs are generated on that infrastructure. Email correspondence is stored in the systems of our email provider. Accordingly, your personal data may be processed on servers of service providers located outside Türkiye. Your data is otherwise never sold or transferred to third parties for marketing purposes.',
      },
      {
        tr: 'Verileriniz, işlendikleri amaç için gerekli olan süre boyunca ve ilgili mevzuatın öngördüğü saklama süreleri kadar muhafaza edilir; bu sürelerin sonunda silinir, yok edilir veya anonim hâle getirilir.',
        en: 'Your data is kept for as long as necessary for the purpose it was processed for and for any retention period required by applicable legislation; at the end of those periods it is deleted, destroyed or anonymised.',
      },
    ],
  },
  {
    heading: { tr: 'KVKK kapsamındaki haklarınız', en: 'Your rights under the KVKK' },
    paragraphs: [
      {
        tr: 'KVKK’nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında verilerin aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme, silinmesini veya yok edilmesini isteme, bu işlemlerin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme, münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme ve kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.',
        en: 'Under Article 11 of the KVKK you have the right to: learn whether your personal data is being processed and request information if it is; learn the purpose of processing and whether the data is used accordingly; know the third parties in Türkiye or abroad to whom the data is transferred; request correction if the data is incomplete or inaccurate; request erasure or destruction; request that such actions be notified to third parties the data was transferred to; object to an adverse outcome produced solely by automated analysis; and claim compensation if you suffer damage due to unlawful processing.',
      },
      {
        tr: 'Bu haklarınızı kullanmak için yukarıdaki e-posta adresi ya da posta adresi üzerinden bize başvurabilirsiniz. Başvurunuz en geç otuz gün içinde sonuçlandırılır.',
        en: 'To exercise these rights you may contact us at the email or postal address above. Your request will be concluded within thirty days at the latest.',
      },
    ],
  },
  {
    heading: { tr: 'Bu metindeki değişiklikler', en: 'Changes to this notice' },
    paragraphs: [
      {
        tr: 'Sitede kullanılan teknolojiler veya hizmetler değiştiğinde bu metin güncellenir. Güncel sürümün tarihi sayfanın başında belirtilir.',
        en: 'This notice is updated whenever the technologies or services used on the site change. The date of the current version is shown at the top of the page.',
      },
    ],
  },
];
