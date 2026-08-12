const WELCOME_MESSAGES = {
  en: "👋 Welcome to Sapanja Business Group, and thank you for applying!\n\nHere's what to expect:\n\n🎓 We help you apply to private universities in Türkiye that we have direct agreements with. This is not a scholarship — it's a paid application service.\n\n📄 Our job: guide your full application and get you an official acceptance letter, at good, affordable tuition rates with our partner schools.\n\n💳 No payment before acceptance — you only pay once you're accepted.\n\n✅ After acceptance, tuition fees, living costs, visa, and travel are handled by you directly. We're happy to consult on specific steps if you need extra guidance — just ask!\n\nWe'll review your application and get back to you soon. Feel free to reach out with any questions in the meantime 😊",
  tr: "👋 Sapanja Business Group'a hoş geldiniz, başvurduğunuz için teşekkürler!\n\nSizi neler bekliyor:\n\n🎓 Doğrudan anlaşmalı olduğumuz Türkiye'deki özel üniversitelere başvurmanıza yardımcı oluyoruz. Bu bir burs programı değildir — ücretli bir başvuru danışmanlık hizmetidir.\n\n📄 Görevimiz: başvurunuzu baştan sona yönetmek ve anlaşmalı okullarımızdan uygun, makul ücretlerle resmi kabul mektubunuzu almaanızı sağlamak.\n\n💳 Kabulden önce ödeme yok — sadece kabul edildikten sonra ödeme yaparsanız.\n\n✅ Kabulden sonra öğrenim ücreti, yaşam giderleri, vize ve seyahat işlemleri sizin sorumluluğunuzdadır. Ekstra rehberliğe ihtiyacınız olursa belirli konularda danışmanlık vermekten memnuniyet duyarız, yeter ki sorun.\n\nBaşvurunuzu inceleyip en kısa sürede size geri döneceğiz. Bu arada aklınıza takılan her şeyi sorabilirsiniz! 😊",
  am: "👋 ወደ ሳፓንጃ ቢዝነስ ግሩፕ እንኳን በደህና መጡ፣ ስላመለከቱም እናመሰግናለን!\n\nየሚጠብቅዎት ይህ ነው፦\n\n🎓 በቀጥታ ስምምነት ካላቸው በቱርክ ውስጥ ወዳሉ የግል ዩኒቨርሲቲዎች እንዲያመለክቱ እናግዝዎታለን። ይህ የነፃ ትምህርት እድል (scholarship) አይደለም — የሚከፈልበት የማመልከቻ አገልግሎት ነው።\n\n📄 የእኛ ስራ፦ ሙሉውን የማመልከቻ ሂደት መምራት እና ከአጋር ትምህርት ቤቶቻችን ጋር በጥሩ፣ ተመጣጣኝ የትምህርት ክፍያ ዋጋ ኦፊሴላዊ የመግቢያ ደብዳቤ እንዲያገኙ ማድረግ ነው።\n\n💳 ተቀባይነት ከማግኘትዎ በፊት ምንም ክፍያ የለም — የሚከፍሉት ከተቀበሉ በኋላ ብቻ ነው።\n\n✅ ከተቀበሉ በኋላ የትምህርት ክፍያ፣ የኑሮ ወጪ፣ ቪዛ እና የጉዞ ጉዳዮች የእርስዎ ኃላፊነት ናቸው። ተጨማሪ ምክር ካስፈለገዎት በተወሰኑ ጉዳዮች ላይ በደስታ እናማክርዎታለን፣ ብቻ ይጠይቁን።\n\nማመልከቻዎን እንገመግማለን እና በቅርቡ እንመልስልዎታለን። ይህ በእንዲህ እያለ ማንኛውንም ጥያቄ ቢኖርዎት ይጠይቁን! 😊"
};

module.exports = async function handler(req, res) {
  const secretHeader = req.headers["x-telegram-bot-api-secret-token"];
  if (secretHeader !== process.env.TELEGRAM_WEBHOOK_SECRET) {
    res.status(401).json({ error: "unauthorized" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }

  const message = body && body.message;
  const text = message && message.text;
  const chatId = message && message.chat && message.chat.id;

  if (text && chatId && text.indexOf("/start") === 0) {
    const parts = text.trim().split(/\s+/);
    const payload = parts[1] || "";
    const segments = payload.split("_");
    const lang = segments.length > 1 ? segments[segments.length - 1] : "en";
    const applicationId = segments.length > 1 ? segments.slice(0, -1).join("_") : payload;

    const welcomeText = WELCOME_MESSAGES[lang] || WELCOME_MESSAGES.en;
    const token = process.env.TELEGRAM_BOT_TOKEN;

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: welcomeText })
      });
    } catch (err) {
      /* ignore */
    }

    const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const sheetsSecret = process.env.GOOGLE_SHEETS_SECRET;
    if (sheetsUrl && sheetsSecret && applicationId) {
      try {
        await fetch(sheetsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ secret: sheetsSecret, action: "linkTelegram", applicationId, chatId: String(chatId) })
        });
      } catch (err) {
        /* ignore */
      }
    }
  }

  res.status(200).json({ ok: true });
}
