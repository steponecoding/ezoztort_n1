// Telegram bot integration is currently DISABLED by request.
// The form still works (name/phone get validated and the UI shows a
// success message), but nothing is actually sent anywhere. To turn it
// back on later, restore the fetch() call below.
//
// const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
// const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export async function sendOrderToTelegram(text) {
  // no-op — bot disabled
  return { ok: true };

  // Previous implementation (kept for reference):
  // const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ chat_id: CHAT_ID, text }),
  // });
  // const data = await res.json();
  // if (!data.ok) throw new Error(data.description || "Telegram API error");
  // return data;
}
