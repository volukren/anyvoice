const token = process.env.TELEGRAM_TOKEN!;

export async function sendTelegramMessage({ message }: { message: string }) {
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
    }),
  });
}
