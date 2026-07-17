const BOT_TOKEN = "8077418319:AAEJ5MFTgQsdIgfYq5fCX2oYUzrBi1NqyMk";
const CHAT_ID = "8463630530";

export async function sendOrderToTelegram(text) {
  const res = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
      }),
    }
  );

  const data = await res.json();

  if (!data.ok) {
    throw new Error(data.description || "Telegram API error");
  }

  return data;
}