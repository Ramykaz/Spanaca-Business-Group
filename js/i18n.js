/* Sapanja Business Group - translations (EN / TR / AM) */

const SERVICE_LISTS = {
  en: {
    service1: [
      "University selection and application",
      "YTB (Türkiye Bursları) and other scholarship applications",
      "Document preparation and authentication (Ethiopian MoFA chain)",
      "Student visa guidance",
      "TR-YÖS exam preparation",
      "Arrival support and residence permit guidance",
      "Finding accommodation in Ankara or other cities"
    ],
    service2: [
      "Hospital and clinic referrals",
      "Appointment coordination",
      "Medical visa assistance",
      "Amharic interpretation during consultations and procedures",
      "Accommodation and transfer arrangements",
      "Post-treatment communication and follow-up"
    ],
    service3: [
      "Ethiopian specialty products into Türkiye (coffee, leather, textiles, spices)",
      "Turkish goods into Ethiopia (construction materials, machinery, FMCG)",
      "Supplier and buyer matching",
      "Export/import documentation guidance",
      "Customs process support",
      "Logistics coordination"
    ],
    service4: [
      "Market and sector opportunity assessment",
      "Due diligence and local partner vetting",
      "Regulatory, legal, and tax introductions",
      "Real estate and land acquisition guidance",
      "Connections to vetted local partners and developers",
      "Ongoing on-the-ground representation"
    ]
  },
  tr: {
    service1: [
      "Üniversite ve program seçimi, başvuru süreci",
      "YTB (Türkiye Bursları) ve diğer burs başvuruları",
      "Belge hazırlığı ve tasdik işlemleri (Etiyopya Dışişleri Bakanlığı zinciri)",
      "Öğrenci vizesi danışmanlığı",
      "TR-YÖS sınavına hazırlık",
      "Varış desteği ve ikamet izni danışmanlığı",
      "Ankara veya diğer şehirlerde konaklama bulma"
    ],
    service2: [
      "Hastane ve klinik yönlendirmeleri",
      "Randevu koordinasyonu",
      "Medikal vize desteği",
      "Konsültasyon ve işlemler sırasında Amharca tercümanlık",
      "Konaklama ve transfer düzenlemeleri",
      "Tedavi sonrası iletişim ve takip"
    ],
    service3: [
      "Etiyopya'ya özgü ürünlerin Türkiye'ye girişi (kahve, deri, tekstil, baharat)",
      "Türk ürünlerinin Etiyopya'ya girişi (inşaat malzemeleri, makine, hızlı tüketim ürünleri)",
      "Tedarikçi ve alıcı eşleştirmesi",
      "İhracat/ithalat belge danışmanlığı",
      "Gümrük süreci desteği",
      "Lojistik koordinasyonu"
    ],
    service4: [
      "Pazar ve sektör fırsat değerlendirmesi",
      "Durum tespiti ve yerel ortak incelemesi",
      "Düzenleyici, hukuki ve vergi tanıştırmaları",
      "Gayrimenkul ve arazi edinimi danışmanlığı",
      "Onaylı yerel ortaklara ve geliştiricilere bağlantı",
      "Sürekli yerinde temsil"
    ]
  },
  am: {
    service1: [
      "የዩኒቨርሲቲ እና የፕሮግራም ምርጫ እና ማመልከቻ",
      "የYTB (Türkiye Bursları) እና ሌሎች የስኮላርሺፕ ማመልከቻዎች",
      "የሰነድ ዝግጅት እና ማረጋገጫ (የኢትዮጵያ የውጭ ጉዳይ ሚኒስቴር ሰንሰለት)",
      "የተማሪ ቪዛ ድጋፍ",
      "የTR-YÖS ፈተና ዝግጅት",
      "የመድረሻ ድጋፍ እና የመኖሪያ ፈቃድ መመሪያ",
      "በአንካራ ወይም በሌሎች ከተሞች መኖሪያ ማግኘት"
    ],
    service2: [
      "ወደ ሆስፒታል እና ክሊኒክ ማስተላለፍ",
      "የቀጠሮ ማስተባበር",
      "የህክምና ቪዛ ድጋፍ",
      "በምክክር እና በህክምና ወቅት የአማርኛ ትርጉም",
      "የመኖሪያ እና የመጓጓዣ ዝግጅቶች",
      "ከህክምና በኋላ ግንኙነት እና ክትትል"
    ],
    service3: [
      "የኢትዮጵያ ልዩ ምርቶች ወደ ቱርክ (ቡና፣ ቆዳ፣ ጨርቃጨርቅ፣ ቅመማ ቅመም)",
      "የቱርክ ምርቶች ወደ ኢትዮጵያ (የግንባታ ቁሳቁስ፣ ማሽነሪ፣ ፈጣን ተጠቃሚ ምርቶች)",
      "አቅራቢ እና ገዢ ማገናኘት",
      "የወጪ/ገቢ ንግድ ሰነድ መመሪያ",
      "የጉምሩክ ሂደት ድጋፍ",
      "የሎጂስቲክስ ማስተባበር"
    ],
    service4: [
      "የገበያ እና የዘርፍ እድል ግምገማ",
      "ጥንቃቄ ማጣራት እና የአካባቢ አጋር ምርመራ",
      "የቁጥጥር፣ የህግ እና የግብር ትውውቆች",
      "የሪል እስቴት እና የመሬት ማግኛ መመሪያ",
      "ወደ የተረጋገጡ የአካባቢ አጋሮች እና ገንቢዎች ግንኙነት",
      "ቀጣይ በቦታው ውክልና"
    ]
  }
};

const translations = {
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.services": "Services",
    "nav.corridor": "The Corridor", "nav.process": "How It Works", "nav.contact": "Contact",
    "nav.cta": "Get in Touch",
    "nav.apply": "Fall 2026-27 Applications",

    "hero.eyebrow": "Ankara · Addis Ababa · Istanbul",
    "hero.headline": "Where East Africa meets Anatolia.",
    "hero.subheadline": "We connect Ethiopia and Türkiye through education, health, and trade.",
    "hero.body": "Sapanja Business Group is an Ankara-based, cross-border business group founded by Ethiopians living in Türkiye. We know both sides of this corridor personally: the universities, the hospitals, the customs offices, and the communities. We are here to make the journey between Ethiopia and Türkiye easier, faster, and more trustworthy.",
    "hero.cta1": "Our Services", "hero.cta2": "Get in Touch",

    "stats.students": "int'l students in Türkiye",
    "stats.companies": "Turkish companies in Ethiopia",
    "stats.trade": "bilateral trade (2022)",

    "about.eyebrow": "Who We Are",
    "about.headline": "Built by people who know both worlds",
    "about.body1": "Sapanja Business Group was founded by a group of Ethiopian professionals based in Türkiye. The idea was born on the shores of Sapanca, the lakeside town that inspired our name, and we operate from Ankara with active relationships across Türkiye, including Istanbul, and within the Ethiopian business and diaspora community.",
    "about.body2": "We are not a large agency with decades on the wall. We are a focused, experienced group with deep roots in both Ethiopia and Türkiye: people who have personally gone through the visa process, navigated Turkish universities, dealt with customs, and built relationships on both sides. That firsthand knowledge is what we bring to every client.",
    "about.body3": "We work with students, patients, businesses, and families who need a trusted guide through the corridor between Ethiopia and Türkiye. We take on what we know, we are honest about what we don't, and we see every case through to the end.",
    "about.imageCaption": "Ankara Castle, Türkiye",
    "about.value1.title": "Firsthand Knowledge", "about.value1.desc": "We have personally navigated both systems",
    "about.value2.title": "Honest & Transparent", "about.value2.desc": "We only take on what we can genuinely deliver",
    "about.value3.title": "Community-Rooted", "about.value3.desc": "Deep ties in both the Ethiopian and Turkish communities",
    "about.value4.title": "End-to-End", "about.value4.desc": "From the first conversation to the final result, we stay involved",

    "services.eyebrow": "What We Do",
    "services.headline": "Four areas. One corridor.",
    "services.intro": "We focus on four core service areas where the connection between Ethiopia and Türkiye creates real, consistent demand, and where our knowledge of both sides makes a genuine difference.",

    "service1.title": "Education Consulting",
    "service1.tagline": "Getting Ethiopian students to Turkish universities, the right way.",
    "service1.body": "Türkiye has world-class universities at a fraction of the cost of studying in Europe or North America. But getting there is not simple: scholarship applications, document authentication, visa procedures, TR-YÖS exams, and settling in a new city all require someone who knows the process. We guide students from Ethiopia through every step, from choosing the right university and program to arriving in Türkiye ready to start.",
    "service1.imageCaption": "Istanbul University",

    "service2.title": "Health Tourism",
    "service2.tagline": "World-class treatment in Türkiye, with someone who speaks your language.",
    "service2.body": "Türkiye is one of the world's leading health tourism destinations, with advanced hospitals, experienced doctors, and costs significantly lower than Europe. Ethiopians already travel to Türkiye for treatment. What they often lack is a trusted, Amharic-speaking contact who can handle the coordination from start to finish. We connect patients with the right hospitals, handle appointments and logistics, and support families throughout the process.",
    "service2.imageCaption": "Modern healthcare in Türkiye",

    "service3.title": "Trade & Import/Export",
    "service3.tagline": "Moving goods between Ethiopia and Türkiye, in both directions.",
    "service3.body": "Ethiopia and Türkiye already trade significantly, but most of that flow goes through large brokers with no community connection. We work with businesses and individuals who want to move goods between the two countries with someone who understands both markets. Ethiopian specialty products, such as coffee, leather, and textiles, have real demand in Türkiye, while Turkish construction materials, machinery, and manufactured goods are in high demand in Ethiopia.",
    "service3.imageCaption": "Port logistics",

    "service4.title": "Investment Consulting",
    "service4.tagline": "Guiding serious investors into Ethiopia's next chapter of growth.",
    "service4.body": "Ethiopia is one of Africa's fastest-growing economies, with real opportunity in real estate, manufacturing, agriculture, and infrastructure. For investors based in Türkiye, or anyone in our network ready to put capital into Ethiopia's future, we bring the same firsthand guidance we bring to every client: honest opportunity assessment, local due diligence, and a team that stays with you from the first conversation to the final deal.",
    "service4.imageCaption": "Addis Ababa's growing skyline",

    "additional.eyebrow": "Also Available",
    "additional.headline": "Supporting services",
    "additional.item1.title": "Translation & Documentation",
    "additional.item1.body": "Sworn Amharic, Turkish, and English translation, document authentication through the Ethiopian Ministry of Foreign Affairs chain, and notarization support. This is one of the most in-demand services in the corridor. Ethiopia is not an Apostille country, so authentication is a multi-step process that most people get wrong without guidance.",
    "additional.item2.title": "Travel & Visa Support",
    "additional.item2.body": "Visa facilitation, travel coordination, and relocation guidance for individuals and families moving between Ethiopia and Türkiye. Ethiopians cannot use the Turkish e-visa and must apply in person, and we help prepare that process properly.",
    "additional.item3.title": "Business Introductions",
    "additional.item3.body": "For Turkish companies looking at the Ethiopian market, or Ethiopian businesses seeking Turkish suppliers or partners, we make introductions based on real relationships, not a database. We know people on both sides.",

    "corridor.eyebrow": "Why This Matters",
    "corridor.headline": "A connection that goes back centuries",
    "corridor.body1": "The Ottoman Empire had a formal province covering parts of what is now Ethiopia and Eritrea, called Habeş Eyaleti. The first Turkish Embassy in sub-Saharan Africa opened in Addis Ababa in 1926. Today, over 200 Turkish companies operate in Ethiopia with an estimated $2.5 billion invested, making Türkiye one of Ethiopia's largest foreign investors.",
    "corridor.body2": "This corridor has deep roots. What it has lacked is a trusted, experienced, community-rooted group that knows both sides personally, not just professionally.",
    "corridor.body3": "That is what Sapanja Business Group is.",
    "corridor.fact1": "international students currently study in Türkiye",
    "corridor.fact2": "of them are from African countries",
    "corridor.fact3": "Türkiye is among the top health tourism destinations globally",
    "corridor.fact4": "bilateral trade between Ethiopia and Türkiye in 2022",
    "corridor.fact5": "first Turkish Embassy in sub-Saharan Africa, opened in Addis Ababa",
    "corridor.travelCaption": "Turkish Airlines flies daily between Istanbul and Addis Ababa",

    "process.eyebrow": "The Process",
    "process.headline": "Straightforward from start to finish",
    "process.step1.title": "Contact Us",
    "process.step1.desc": "Reach us by WhatsApp, phone, or email. Tell us your situation: student, patient, business, or individual. We respond in Amharic, Turkish, or English.",
    "process.step2.title": "We Assess",
    "process.step2.desc": "We look at your situation honestly and tell you what's possible, what it involves, and what it costs. No promises we can't keep.",
    "process.step3.title": "We Handle It",
    "process.step3.desc": "Documents, applications, appointments, coordination. We manage both sides of the corridor, Türkiye and Ethiopia, so you don't have to.",
    "process.step4.title": "You Get Results",
    "process.step4.desc": "Student enrolled. Patient treated. Goods moving. Business connected. We stay in the process until it's done.",

    "contact.eyebrow": "Get In Touch",
    "contact.headline": "Let's talk about what you need",
    "contact.body": "Whether you are a student planning to study in Türkiye, a family seeking medical treatment, a business moving goods, or someone who just needs guidance, reach out. We will tell you honestly what we can do.",
    "contact.base": "Base", "contact.baseValue": "Ankara, Türkiye",
    "contact.whatsapp": "WhatsApp / Telegram",
    "contact.emailLabel": "Email",
    "contact.languages": "We speak", "contact.languagesValue": "Amharic · Oromiffa · Turkish · English · Arabic",
    "contact.whatsappCta": "Chat on WhatsApp",
    "contact.telegramCta": "Chat on Telegram",

    "form.firstName": "First Name", "form.lastName": "Last Name",
    "form.email": "Email Address", "form.phone": "Phone / WhatsApp Number",
    "form.interest": "I'm interested in", "form.message": "Message", "form.submit": "Send Message",
    "form.opt.education": "Education", "form.opt.health": "Health Tourism", "form.opt.trade": "Trade",
    "form.opt.translation": "Translation", "form.opt.travel": "Travel & Visa",
    "form.opt.business": "Business Introduction", "form.opt.other": "Other",
    "form.sending": "Sending...",
    "form.successNote": "Message received. We will contact you shortly.",
    "form.errorNote": "Something went wrong. Please contact us directly on WhatsApp or by phone.",

    "footer.tagline": "Connecting Ethiopia and Türkiye",
    "footer.servicesTitle": "Services",
    "footer.languagesTitle": "Languages"
  },

  tr: {
    "nav.home": "Ana Sayfa", "nav.about": "Hakkımızda", "nav.services": "Hizmetler",
    "nav.corridor": "Koridor", "nav.process": "Süreç", "nav.contact": "İletişim",
    "nav.cta": "Bize Ulaşın",
    "nav.apply": "Güz 2026-27 Başvuruları",

    "hero.eyebrow": "Ankara · Addis Ababa · İstanbul",
    "hero.headline": "Doğu Afrika'nın Anadolu ile buluştuğu yer.",
    "hero.subheadline": "Etiyopya ile Türkiye'yi eğitim, sağlık ve ticaret alanlarında birbirine bağlıyoruz.",
    "hero.body": "Sapanja Business Group, Türkiye'de yaşayan Etiyopyalılar tarafından kurulmuş, Ankara merkezli, sınır ötesi bir iş grubudur. Bu koridorun her iki yakasını da şahsen tanıyoruz: üniversiteleri, hastaneleri, gümrük ofislerini ve toplulukları. Etiyopya ile Türkiye arasındaki yolculuğu daha kolay, daha hızlı ve daha güvenilir hale getirmek için buradayız.",
    "hero.cta1": "Hizmetlerimiz", "hero.cta2": "Bize Ulaşın",

    "stats.students": "Türkiye'de uluslararası öğrenci",
    "stats.companies": "Etiyopya'daki Türk şirketi",
    "stats.trade": "ikili ticaret hacmi (2022)",

    "about.eyebrow": "Biz Kimiz",
    "about.headline": "Her iki dünyayı da tanıyan insanlar tarafından kuruldu",
    "about.body1": "Sapanja Business Group, Türkiye'de yaşayan bir grup Etiyopyalı profesyonel tarafından kuruldu. Fikir, adımıza ilham veren göl kasabası Sapanca'da doğdu. Ankara merkezli çalışıyor, İstanbul dahil Türkiye genelinde ve Etiyopya iş ve diaspora topluluğu içinde aktif bağlantılar sürdürüyoruz.",
    "about.body2": "Duvarında on yıllar yazan büyük bir ajans değiliz. Hem Etiyopya'da hem Türkiye'de derin kökleri olan, odaklanmış ve deneyimli bir ekibiz: vize sürecinden şahsen geçmiş, Türk üniversitelerinde yol almış, gümrükle uğraşmış ve her iki tarafta da ilişkiler kurmuş kişileriz. Bu birinci elden bilgiyi her müşteriye taşıyoruz.",
    "about.body3": "Etiyopya ile Türkiye arasındaki koridorda güvenilir bir rehbere ihtiyaç duyan öğrenciler, hastalar, işletmeler ve ailelerle çalışıyoruz. Bildiğimiz işi üstleniriz, bilmediğimiz konuda dürüst davranırız ve her vakayı sonuna kadar takip ederiz.",
    "about.imageCaption": "Ankara Kalesi, Türkiye",
    "about.value1.title": "Birinci Elden Bilgi", "about.value1.desc": "Her iki sistemde de şahsen yol aldık",
    "about.value2.title": "Dürüst ve Şeffaf", "about.value2.desc": "Yalnızca gerçekten teslim edebileceğimiz işleri üstleniriz",
    "about.value3.title": "Topluma Kök Salmış", "about.value3.desc": "Hem Etiyopya hem Türk toplulukları ile derin bağlar",
    "about.value4.title": "Uçtan Uca", "about.value4.desc": "İlk görüşmeden nihai sonuca kadar sürecin içinde kalıyoruz",

    "services.eyebrow": "Ne Yapıyoruz",
    "services.headline": "Dört alan. Tek koridor.",
    "services.intro": "Etiyopya ile Türkiye bağlantısının gerçek ve sürekli talep yarattığı dört temel hizmet alanına odaklanıyoruz. Bunlar, her iki tarafı da bilmemizin gerçek fark yarattığı alanlardır.",

    "service1.title": "Eğitim Danışmanlığı",
    "service1.tagline": "Etiyopyalı öğrencileri Türk üniversitelerine, doğru şekilde ulaştırmak.",
    "service1.body": "Türkiye, Avrupa veya Kuzey Amerika'da okumanın çok altında bir maliyetle dünya standartlarında üniversitelere sahiptir. Ancak oraya ulaşmak basit değildir: burs başvuruları, belge tasdiki, vize işlemleri, TR-YÖS sınavları ve yeni bir şehre yerleşmek, süreci bilen birini gerektirir. Etiyopyalı öğrencilere doğru üniversiteyi seçmekten Türkiye'ye başlamaya hazır şekilde varmaya kadar her adımda rehberlik ediyoruz.",
    "service1.imageCaption": "İstanbul Üniversitesi",

    "service2.title": "Sağlık Turizmi",
    "service2.tagline": "Dilinizi konuşan biriyle Türkiye'de dünya standartlarında tedavi.",
    "service2.body": "Türkiye, dünyanın önde gelen sağlık turizmi destinasyonlarından biridir: gelişmiş hastaneler, deneyimli doktorlar ve Avrupa'ya kıyasla belirgin şekilde düşük maliyetler sunar. Etiyopyalılar zaten tedavi için Türkiye'ye seyahat ediyor. Çoğu zaman eksik olan şey, süreci baştan sona koordine edebilecek güvenilir, Amharca konuşan bir irtibat kişisidir. Hastaları doğru hastanelerle buluşturuyor, randevu ve lojistiği yönetiyor ve süreç boyunca ailelere destek oluyoruz.",
    "service2.imageCaption": "Türkiye'de modern sağlık hizmeti",

    "service3.title": "Ticaret ve İthalat/İhracat",
    "service3.tagline": "Etiyopya ile Türkiye arasında, her iki yönde mal hareketi.",
    "service3.body": "Etiyopya ve Türkiye zaten önemli ölçüde ticaret yapıyor, ancak bu akışın çoğu toplumsal bağlantısı olmayan büyük aracılar üzerinden gerçekleşiyor. Her iki pazarı da anlayan biriyle iki ülke arasında mal taşımak isteyen işletmeler ve bireylerle çalışıyoruz. Kahve, deri ve tekstil gibi Etiyopya'ya özgü ürünler Türkiye'de gerçek bir talep görürken, inşaat malzemeleri ve makine gibi Türk ürünleri de Etiyopya'da yüksek talep görüyor.",
    "service3.imageCaption": "Liman lojistiği",

    "service4.title": "Yatırım Danışmanlığı",
    "service4.tagline": "Ciddi yatırımcıları Etiyopya'nın yeni büyüme döneminde yönlendiriyoruz.",
    "service4.body": "Etiyopya, gayrimenkul, üretim, tarım ve altyapı alanlarında gerçek fırsatlar sunan, Afrika'nın en hızlı büyüyen ekonomilerinden biridir. Türkiye merkezli yatırımcılar için veya ağımızda sermayesini Etiyopya'nın geleceğine yatırmaya hazır olan herkes için, her müşterimize sunduğumuz aynı birinci elden rehberliği sağlıyoruz: dürüst fırsat değerlendirmesi, yerel durum tespiti ve ilk görüşmeden nihai anlaşmaya kadar yanınızda kalan bir ekip.",
    "service4.imageCaption": "Addis Ababa'nın büyüyen silueti",

    "additional.eyebrow": "Ayrıca Sunulan",
    "additional.headline": "Destekleyici hizmetler",
    "additional.item1.title": "Tercüme ve Belgelendirme",
    "additional.item1.body": "Yeminli Amharca, Türkçe ve İngilizce tercüme, Etiyopya Dışişleri Bakanlığı zinciri üzerinden belge tasdiki ve noter desteği sağlıyoruz. Bu, koridordaki en çok talep gören hizmetlerden biridir. Etiyopya bir Apostil ülkesi değildir, bu yüzden tasdik süreci çok adımlıdır ve rehberlik olmadan çoğu kişi bu süreçte hata yapar.",
    "additional.item2.title": "Seyahat ve Vize Desteği",
    "additional.item2.body": "Etiyopya ile Türkiye arasında hareket eden bireyler ve aileler için vize kolaylaştırma, seyahat koordinasyonu ve yerleşim rehberliği sağlıyoruz. Etiyopyalılar Türk e-vizesini kullanamaz, şahsen başvurmaları gerekir ve bu süreci doğru şekilde hazırlamalarına yardımcı oluyoruz.",
    "additional.item3.title": "İş Bağlantıları",
    "additional.item3.body": "Etiyopya pazarına bakan Türk şirketleri veya Türk tedarikçi ya da ortak arayan Etiyopyalı işletmeler için, bir veritabanına değil, gerçek ilişkilere dayalı tanıştırmalar yapıyoruz. Her iki tarafta da insanları tanıyoruz.",

    "corridor.eyebrow": "Neden Önemli",
    "corridor.headline": "Yüzyıllara dayanan bir bağlantı",
    "corridor.body1": "Osmanlı İmparatorluğu'nun bugünkü Etiyopya ve Eritre'nin bir kısmını kapsayan resmi bir eyaleti vardı: Habeş Eyaleti. Sahra altı Afrika'daki ilk Türk Büyükelçiliği 1926'da Addis Ababa'da açıldı. Bugün 200'den fazla Türk şirketi Etiyopya'da faaliyet gösteriyor ve tahmini 2,5 milyar dolarlık yatırımla Türkiye, Etiyopya'nın en büyük yabancı yatırımcılarından biri konumundadır.",
    "corridor.body2": "Bu koridorun derin kökleri var. Eksik olan, her iki tarafı da şahsen tanıyan, sadece profesyonel olarak değil, güvenilir, deneyimli ve topluma kök salmış bir gruptur.",
    "corridor.body3": "İşte Sapanja Business Group budur.",
    "corridor.fact1": "uluslararası öğrenci şu anda Türkiye'de okuyor",
    "corridor.fact2": "bu öğrencilerin Afrika ülkelerinden geliyor",
    "corridor.fact3": "Türkiye, dünya genelinde önde gelen sağlık turizmi destinasyonlarından biri",
    "corridor.fact4": "2022'de Etiyopya ile Türkiye arasındaki ikili ticaret hacmi",
    "corridor.fact5": "Sahra altı Afrika'daki ilk Türk Büyükelçiliği, Addis Ababa'da açıldı",
    "corridor.travelCaption": "Turkish Airlines, İstanbul ile Addis Ababa arasında her gün uçuyor",

    "process.eyebrow": "Süreç",
    "process.headline": "Baştan sona net bir yol haritası",
    "process.step1.title": "Bize Ulaşın",
    "process.step1.desc": "WhatsApp, telefon veya e-posta ile bize ulaşın. Durumunuzu anlatın: öğrenci, hasta, işletme veya birey. Amharca, Türkçe veya İngilizce yanıt veriyoruz.",
    "process.step2.title": "Değerlendiriyoruz",
    "process.step2.desc": "Durumunuza dürüstçe bakar, nelerin mümkün olduğunu, neyi gerektirdiğini ve maliyetini size söyleriz. Tutamayacağımız bir söz vermeyiz.",
    "process.step3.title": "Süreci Yürütüyoruz",
    "process.step3.desc": "Belgeler, başvurular, randevular, koordinasyon. Koridorun her iki tarafını, Türkiye ve Etiyopya'yı, biz yönetiyoruz, siz uğraşmıyorsunuz.",
    "process.step4.title": "Sonuç Alırsınız",
    "process.step4.desc": "Öğrenci kayıt oldu. Hasta tedavi edildi. Mallar hareket ediyor. İş bağlantısı kuruldu. İş bitene kadar sürecin içinde kalıyoruz.",

    "contact.eyebrow": "Bize Ulaşın",
    "contact.headline": "İhtiyacınız olan şeyi konuşalım",
    "contact.body": "Türkiye'de okumayı planlayan bir öğrenci, tıbbi tedavi arayan bir aile, mal taşıyan bir işletme veya sadece rehberliğe ihtiyacı olan biri olun, bize ulaşın. Ne yapabileceğimizi size dürüstçe söyleyeceğiz.",
    "contact.base": "Merkez", "contact.baseValue": "Ankara, Türkiye",
    "contact.whatsapp": "WhatsApp / Telegram",
    "contact.emailLabel": "E-posta",
    "contact.languages": "Konuştuğumuz diller", "contact.languagesValue": "Amharca · Oromoca · Türkçe · İngilizce · Arapça",
    "contact.whatsappCta": "WhatsApp'tan Yazın",
    "contact.telegramCta": "Telegram'dan Yazın",

    "form.firstName": "Ad", "form.lastName": "Soyad",
    "form.email": "E-posta Adresi", "form.phone": "Telefon / WhatsApp Numarası",
    "form.interest": "İlgi alanınız", "form.message": "Mesaj", "form.submit": "Mesaj Gönder",
    "form.opt.education": "Eğitim", "form.opt.health": "Sağlık Turizmi", "form.opt.trade": "Ticaret",
    "form.opt.translation": "Tercüme", "form.opt.travel": "Seyahat & Vize",
    "form.opt.business": "İş Bağlantısı", "form.opt.other": "Diğer",
    "form.sending": "Gönderiliyor...",
    "form.successNote": "Mesajınız alındı. Kısa süre içinde sizinle iletişime geçeceğiz.",
    "form.errorNote": "Bir şeyler ters gitti. Lütfen doğrudan WhatsApp veya telefon ile bize ulaşın.",

    "footer.tagline": "Etiyopya ile Türkiye'yi Birbirine Bağlıyoruz",
    "footer.servicesTitle": "Hizmetler",
    "footer.languagesTitle": "Diller"
  },

  am: {
    "nav.home": "መነሻ", "nav.about": "ስለ እኛ", "nav.services": "አገልግሎቶች",
    "nav.corridor": "ኮሪደሩ", "nav.process": "አሰራሩ", "nav.contact": "አግኙን",
    "nav.cta": "ያግኙን",
    "nav.apply": "የመኸር 2026-27 ማመልከቻዎች",

    "hero.eyebrow": "አንካራ · አዲስ አበባ · ኢስታንቡል",
    "hero.headline": "ምስራቅ አፍሪካ ከአናቶሊያ የሚገናኙበት ቦታ።",
    "hero.subheadline": "ኢትዮጵያን እና ቱርክን በትምህርት፣ በጤና እና በንግድ እናገናኘዋለን።",
    "hero.body": "ሳፓንጃ ቢዝነስ ግሩፕ በአንካራ የሚገኝ፣ በቱርክ በሚኖሩ ኢትዮጵያውያን የተመሰረተ ድንበር ተሻጋሪ የንግድ ቡድን ነው። የዚህን ኮሪደር ሁለቱንም ጎን በግል እናውቃለን፦ ዩኒቨርሲቲዎቹን፣ ሆስፒታሎቹን፣ የጉምሩክ ቢሮዎቹን እና ማህበረሰቦቹን። በኢትዮጵያ እና በቱርክ መካከል ያለውን ጉዞ ቀላል፣ ፈጣን እና የበለጠ ታማኝ ለማድረግ እዚህ ነን።",
    "hero.cta1": "አገልግሎቶቻችን", "hero.cta2": "ያግኙን",

    "stats.students": "በቱርክ ያሉ ዓለም አቀፍ ተማሪዎች",
    "stats.companies": "በኢትዮጵያ ያሉ የቱርክ ኩባንያዎች",
    "stats.trade": "የሁለትዮሽ ንግድ (2022)",

    "about.eyebrow": "እኛ እነማን ነን",
    "about.headline": "ሁለቱንም ዓለማት በሚያውቁ ሰዎች የተገነባ",
    "about.body1": "ሳፓንጃ ቢዝነስ ግሩፕ በቱርክ በሚገኙ የኢትዮጵያ ባለሙያዎች ቡድን ተመሠረተ። ሀሳቡ ስማችንን በሰጠችን ከተማ ሳፓንጃ ውስጥ ተወለደ። ከአንካራ ሆነን ኢስታንቡልን ጨምሮ በመላው ቱርክ እንዲሁም በኢትዮጵያ የንግድ እና የዲያስፖራ ማህበረሰብ ውስጥ ንቁ ግንኙነቶች አሉን።",
    "about.body2": "በግድግዳ ላይ የተንጠለጠሉ አስርት ዓመታት ያሉት ትልቅ ኤጀንሲ አይደለንም። በኢትዮጵያም በቱርክም ጥልቅ ስር ያለን ያተኮርን፣ ልምድ ያለን ቡድን ነን፦ የቪዛ ሂደትን በግል ያለፍን፣ የቱርክ ዩኒቨርሲቲዎችን የተዘዋወርን፣ ከጉምሩክ ጋር የተገናኘን እና በሁለቱም ወገን ግንኙነት የገነባን ሰዎች። ያ ቀጥተኛ እውቀት ለእያንዳንዱ ደንበኛ የምናመጣው ነው።",
    "about.body3": "በኢትዮጵያ እና በቱርክ መካከል ባለው ኮሪደር ውስጥ የታመነ መሪ የሚያስፈልጋቸው ተማሪዎች፣ ታካሚዎች፣ ንግዶች እና ቤተሰቦች ጋር እንሰራለን። የምናውቀውን እንይዛለን፣ የማናውቀውን በሐቀኝነት እንናገራለን፣ እናም እያንዳንዱን ጉዳይ እስከ መጨረሻው እናያለን።",
    "about.imageCaption": "የአንካራ ቤተመንግስት፣ ቱርክ",
    "about.value1.title": "ቀጥተኛ እውቀት", "about.value1.desc": "ሁለቱንም ስርዓቶች በግላችን ተዘዋውረናል",
    "about.value2.title": "ታማኝ እና ግልጽ", "about.value2.desc": "በእውነት ማድረስ የምንችለውን ብቻ እንይዛለን",
    "about.value3.title": "በማህበረሰብ የተመሰረተ", "about.value3.desc": "በኢትዮጵያ እና በቱርክ ማህበረሰቦች ውስጥ ጥልቅ ትስስር",
    "about.value4.title": "ከጫፍ እስከ ጫፍ", "about.value4.desc": "ከመጀመሪያው ውይይት እስከ የመጨረሻው ውጤት ድረስ እንቆያለን",

    "services.eyebrow": "የምንሰራው",
    "services.headline": "አራት ዘርፎች። አንድ ኮሪደር።",
    "services.intro": "የኢትዮጵያ እና የቱርክ ግንኙነት እውነተኛ እና ተከታታይ ፍላጎት በሚፈጥርባቸው አራት ዋና የአገልግሎት ዘርፎች ላይ እናተኩራለን። እነዚህም ሁለቱንም ወገኖች ማወቃችን እውነተኛ ለውጥ የሚያመጣባቸው ቦታዎች ናቸው።",

    "service1.title": "የትምህርት ማማከር",
    "service1.tagline": "የኢትዮጵያ ተማሪዎችን ወደ ቱርክ ዩኒቨርሲቲዎች፣ በትክክለኛው መንገድ ማድረስ።",
    "service1.body": "ቱርክ ከአውሮፓ ወይም ከሰሜን አሜሪካ ትምህርት ወጪ በጣም ባነሰ ዋጋ ዓለም አቀፍ ደረጃ ያላቸው ዩኒቨርሲቲዎች አሏት። ነገር ግን ወደዚያ መድረስ ቀላል አይደለም፦ የስኮላርሺፕ ማመልከቻዎች፣ የሰነድ ማረጋገጫ፣ የቪዛ ሂደቶች፣ የTR-YÖS ፈተናዎች እና በአዲስ ከተማ መስፈር ሁሉም ሂደቱን የሚያውቅ ሰው ይፈልጋሉ። ትክክለኛውን ዩኒቨርሲቲ ከመምረጥ ጀምሮ ለመጀመር ዝግጁ ሆኖ ቱርክ እስከ መድረስ ድረስ ተማሪዎችን በእያንዳንዱ ደረጃ እንመራለን።",
    "service1.imageCaption": "ኢስታንቡል ዩኒቨርሲቲ",

    "service2.title": "የጤና ቱሪዝም",
    "service2.tagline": "ቋንቋዎን በሚናገር ሰው በኩል በቱርክ ዓለም አቀፍ ደረጃ ያለው ህክምና።",
    "service2.body": "ቱርክ ከዓለም ግንባር ቀደም የጤና ቱሪዝም መዳረሻዎች አንዷ ናት፦ የላቀ ሆስፒታሎች፣ ልምድ ያላቸው ዶክተሮች እና ከአውሮፓ በእጅጉ ያነሱ ወጪዎች ታቀርባለች። ኢትዮጵያውያን ለህክምና ወደ ቱርክ አስቀድመው ይጓዛሉ። ብዙ ጊዜ የሚጎድላቸው ከመጀመሪያ እስከ መጨረሻ ማስተባበር የሚችል የታመነ፣ አማርኛ ተናጋሪ ግንኙነት ነው። ታካሚዎችን ከትክክለኛ ሆስፒታሎች ጋር እናገናኛለን፣ ቀጠሮዎችን እና ሎጂስቲክስን እናስተናግዳለን፣ እናም በሂደቱ ሁሉ ቤተሰቦችን እንደግፋለን።",
    "service2.imageCaption": "በቱርክ ዘመናዊ የጤና አገልግሎት",

    "service3.title": "ንግድ እና ወደ ውጭ/ውስጥ ማስገባት",
    "service3.tagline": "በኢትዮጵያ እና በቱርክ መካከል በሁለቱም አቅጣጫ እቃዎችን ማንቀሳቀስ።",
    "service3.body": "ኢትዮጵያ እና ቱርክ ቀድሞውኑ በከፍተኛ ደረጃ ይነግዳሉ፣ ነገር ግን አብዛኛው ፍሰት ከማህበረሰብ ግንኙነት ውጭ በሆኑ ትላልቅ ደላሎች በኩል ያልፋል። ሁለቱንም ገበያዎች የሚረዳ ሰው ይዘው በሁለቱ አገራት መካከል እቃዎችን ማንቀሳቀስ ከሚፈልጉ ንግዶች እና ግለሰቦች ጋር እንሰራለን። እንደ ቡና፣ ቆዳ እና ጨርቃጨርቅ ያሉ የኢትዮጵያ ልዩ ምርቶች በቱርክ እውነተኛ ፍላጎት ሲኖራቸው፣ የግንባታ ቁሳቁሶች እና ማሽነሪዎች ያሉ የቱርክ ምርቶችም በኢትዮጵያ ከፍተኛ ፍላጎት አላቸው።",
    "service3.imageCaption": "የወደብ ሎጂስቲክስ",

    "service4.title": "የኢንቨስትመንት ማማከር",
    "service4.tagline": "ከባድ ኢንቨስተሮችን ወደ ኢትዮጵያ ቀጣዩ የዕድገት ምዕራፍ እንመራለን።",
    "service4.body": "ኢትዮጵያ በሪል እስቴት፣ በማምረቻ፣ በግብርና እና በመሠረተ ልማት ውስጥ እውነተኛ እድል ካላቸው በአፍሪካ በፍጥነት ከሚያድጉ ኢኮኖሚዎች አንዷ ናት። በቱርክ ለሚገኙ ኢንቨስተሮች ወይም ካፒታላቸውን ወደ ኢትዮጵያ የወደፊት ሁኔታ ለማስገባት ዝግጁ ለሆኑ በአውታረ መረባችን ውስጥ ላሉ ማንኛውም ሰው፣ ለእያንዳንዱ ደንበኛ የምናቀርበውን ተመሳሳይ ቀጥተኛ መመሪያ እናቀርባለን፦ ሐቀኛ የእድል ግምገማ፣ የአካባቢ ጥንቃቄ ማጣራት፣ እናም ከመጀመሪያው ውይይት እስከ የመጨረሻው ስምምነት ድረስ አብሮዎት የሚቆይ ቡድን።",
    "service4.imageCaption": "እያደገ ያለው የአዲስ አበባ ገጽታ",

    "additional.eyebrow": "እንዲሁም የሚገኙ",
    "additional.headline": "ተጨማሪ አገልግሎቶች",
    "additional.item1.title": "ትርጉም እና ሰነድ ማዘጋጀት",
    "additional.item1.body": "የተረጋገጠ አማርኛ፣ ቱርክኛ እና እንግሊዝኛ ትርጉም፣ በኢትዮጵያ የውጭ ጉዳይ ሚኒስቴር ሰንሰለት በኩል የሰነድ ማረጋገጫ እና የኖታሪ ድጋፍ እናቀርባለን። ይህ በኮሪደሩ ውስጥ በጣም ተፈላጊ ከሆኑ አገልግሎቶች አንዱ ነው። ኢትዮጵያ የአፖስቲል ሀገር አይደለችም፣ ስለዚህ ማረጋገጫው ያለ መመሪያ አብዛኞቹ ሰዎች የሚሳሳቱበት ባለብዙ ደረጃ ሂደት ነው።",
    "additional.item2.title": "የጉዞ እና ቪዛ ድጋፍ",
    "additional.item2.body": "በኢትዮጵያ እና በቱርክ መካከል ለሚንቀሳቀሱ ግለሰቦች እና ቤተሰቦች የቪዛ ማመቻቸት፣ የጉዞ ማስተባበር እና የመዘዋወር መመሪያ እናቀርባለን። ኢትዮጵያውያን የቱርክ ኢ-ቪዛን መጠቀም አይችሉም፣ በአካል ማመልከት አለባቸው፣ እናም ያንን ሂደት በትክክል ለማዘጋጀት እንረዳለን።",
    "additional.item3.title": "የንግድ ትውውቅ",
    "additional.item3.body": "የኢትዮጵያን ገበያ ለሚመለከቱ የቱርክ ኩባንያዎች፣ ወይም የቱርክ አቅራቢዎችን ወይም አጋሮችን ለሚፈልጉ የኢትዮጵያ ንግዶች፣ በእውነተኛ ግንኙነቶች ላይ የተመሰረቱ ትውውቆችን እናደርጋለን፣ በዳታቤዝ ላይ አይደለም። በሁለቱም ወገን ያሉ ሰዎችን እናውቃለን።",

    "corridor.eyebrow": "ለምን ጠቃሚ እንደሆነ",
    "corridor.headline": "ወደ ብዙ ክፍለ ዘመናት የሚመለስ ግንኙነት",
    "corridor.body1": "የኦቶማን ኢምፓየር አሁን የኢትዮጵያ እና የኤርትራ ክፍሎችን የሚሸፍን መደበኛ ግዛት ነበረው፦ ሀበሽ ኢያለቲ። በሰሃራ በታች አፍሪካ ውስጥ የመጀመሪያው የቱርክ ኤምባሲ በ1926 በአዲስ አበባ ተከፈተ። ዛሬ ከ200 በላይ የቱርክ ኩባንያዎች በኢትዮጵያ ውስጥ ይሰራሉ፣ በግምት 2.5 ቢሊዮን ዶላር ኢንቨስት በማድረግ ቱርክ ከኢትዮጵያ ትልቁ የውጭ ባለሃብቶች አንዷ ሆናለች።",
    "corridor.body2": "ይህ ኮሪደር ጥልቅ ስሮች አሉት። የጎደለው ነገር ሁለቱንም ወገኖች በግል የሚያውቅ፣ ሙያዊ ብቻ ሳይሆን፣ የታመነ፣ ልምድ ያለው እና በማህበረሰብ የተመሰረተ ቡድን ነው።",
    "corridor.body3": "ያ ነው ሳፓንጃ ቢዝነስ ግሩፕ የሆነው።",
    "corridor.fact1": "ዓለም አቀፍ ተማሪዎች በአሁኑ ጊዜ በቱርክ ይማራሉ",
    "corridor.fact2": "ከእነሱ ውስጥ ከአፍሪካ አገራት የመጡ ናቸው",
    "corridor.fact3": "ቱርክ በዓለም ላይ ካሉ ግንባር ቀደም የጤና ቱሪዝም መዳረሻዎች አንዷ ናት",
    "corridor.fact4": "በኢትዮጵያ እና በቱርክ መካከል ያለው የሁለትዮሽ ንግድ በ2022",
    "corridor.fact5": "በሰሃራ በታች አፍሪካ የመጀመሪያው የቱርክ ኤምባሲ፣ በአዲስ አበባ ተከፈተ",
    "corridor.travelCaption": "ተርኪሽ ኤርላይንስ በየቀኑ በኢስታንቡል እና በአዲስ አበባ መካከል ይበራል",

    "process.eyebrow": "አሰራሩ",
    "process.headline": "ከመጀመሪያ እስከ መጨረሻ ቀጥተኛ",
    "process.step1.title": "ያግኙን",
    "process.step1.desc": "በዋትስአፕ፣ በስልክ ወይም በኢሜይል ያግኙን። ሁኔታዎን ይንገሩን፦ ተማሪ፣ ታካሚ፣ ንግድ ወይም ግለሰብ። በአማርኛ፣ በቱርክኛ ወይም በእንግሊዝኛ እንመልሳለን።",
    "process.step2.title": "እንገመግማለን",
    "process.step2.desc": "ሁኔታዎን በሐቀኝነት እንመለከታለን እና ምን እንደሚቻል፣ ምን እንደሚያካትት እና ምን ያህል እንደሚያስወጣ እንነግርዎታለን። መጠበቅ የማንችለውን ቃል አንገባም።",
    "process.step3.title": "እናስተናግደዋለን",
    "process.step3.desc": "ሰነዶች፣ ማመልከቻዎች፣ ቀጠሮዎች፣ ማስተባበር። የኮሪደሩን ሁለቱንም ጎን፣ ቱርክ እና ኢትዮጵያን፣ እኛ እናስተዳድራለን፣ እርስዎ መጨነቅ የለብዎትም።",
    "process.step4.title": "ውጤት ያገኛሉ",
    "process.step4.desc": "ተማሪ ተመዝግቧል። ታካሚ ታክሟል። እቃዎች እየተንቀሳቀሱ ናቸው። ንግድ ተገናኝቷል። እስኪጠናቀቅ ድረስ በሂደቱ ውስጥ እንቆያለን።",

    "contact.eyebrow": "አግኙን",
    "contact.headline": "ስለሚያስፈልግዎት ነገር እንነጋገር",
    "contact.body": "በቱርክ ለመማር የሚያቅዱ ተማሪ፣ የህክምና ህክምና የሚፈልግ ቤተሰብ፣ እቃዎችን የሚያንቀሳቅስ ንግድ፣ ወይም መመሪያ ብቻ የሚያስፈልገው ሰው ይሁኑ፣ ያግኙን። ምን ማድረግ እንደምንችል በሐቀኝነት እንነግርዎታለን።",
    "contact.base": "መሠረት", "contact.baseValue": "አንካራ፣ ቱርክ",
    "contact.whatsapp": "ዋትስአፕ / ቴሌግራም",
    "contact.emailLabel": "ኢሜይል",
    "contact.languages": "የምንናገራቸው ቋንቋዎች", "contact.languagesValue": "አማርኛ · ኦሮምኛ · ቱርክኛ · እንግሊዝኛ · አረብኛ",
    "contact.whatsappCta": "በዋትስአፕ ያውሩን",
    "contact.telegramCta": "በቴሌግራም ያውሩን",

    "form.firstName": "የመጀመሪያ ስም", "form.lastName": "የአባት ስም",
    "form.email": "የኢሜይል አድራሻ", "form.phone": "ስልክ / ዋትስአፕ ቁጥር",
    "form.interest": "የሚፈልጉት አገልግሎት", "form.message": "መልእክት", "form.submit": "መልእክት ላክ",
    "form.opt.education": "ትምህርት", "form.opt.health": "የጤና ቱሪዝም", "form.opt.trade": "ንግድ",
    "form.opt.translation": "ትርጉም", "form.opt.travel": "ጉዞ እና ቪዛ",
    "form.opt.business": "የንግድ ትውውቅ", "form.opt.other": "ሌላ",
    "form.sending": "በመላክ ላይ...",
    "form.successNote": "መልእክትዎ ደርሶናል። በቅርቡ እናገኝዎታለን።",
    "form.errorNote": "የሆነ ችግር ተፈጥሯል። እባክዎ በቀጥታ በዋትስአፕ ወይም በስልክ ያግኙን።",

    "footer.tagline": "ኢትዮጵያን እና ቱርክን እናገናኛለን",
    "footer.servicesTitle": "አገልግሎቶች",
    "footer.languagesTitle": "ቋንቋዎች"
  }
};
