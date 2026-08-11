module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  const { fullName, email, phone, department, level, city, budget } = body || {};

  if (!fullName || !phone) {
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
    "New Fall 2026-27 Application",
    "",
    "Full Name: " + fullName,
    "Email: " + (email || "-"),
    "WhatsApp / Telegram: " + phone,
    "Department: " + (department || "-"),
    "Degree Level: " + (level || "-"),
    "Preferred City: " + (city || "-"),
    "Annual Tuition Budget: " + (budget || "-")
  ].join("\n");

  const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const sheetsSecret = process.env.GOOGLE_SHEETS_SECRET;
  if (sheetsUrl && sheetsSecret) {
    try {
      await fetch(sheetsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret: sheetsSecret, fullName, email, phone, department, level, city, budget })
      });
    } catch (err) {
      /* non-blocking: Telegram/email remain the primary delivery channels */
    }
  }

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
