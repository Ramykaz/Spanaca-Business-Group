module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  const { name, email, phone, interest, message } = body || {};

  if (!name || !phone) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    res.status(500).json({ error: "Telegram is not configured" });
    return;
  }

  const text = [
    "New Website Contact Message",
    "",
    "Name: " + name,
    "Email: " + (email || "-"),
    "Phone / WhatsApp: " + phone,
    "Interested in: " + (interest || "-"),
    "Message: " + (message || "-")
  ].join("\n");

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text })
    });
    const tgData = await tgRes.json();
    if (!tgData.ok) {
      res.status(502).json({ error: "Telegram delivery failed", detail: tgData });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}
