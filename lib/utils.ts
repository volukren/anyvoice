import { sendTelegramMessage } from "@/lib/telegram";

export async function log({
  message,
  type,
}: {
  message: string;
  type: "info" | "error";
}) {
  const fullMessage = `${type === "error" ? "🚨@volukren " : "️"}${message}`;

  if (process.env.NODE_ENV === "development") {
    console.log(fullMessage);
    return;
  }

  await sendTelegramMessage({ message: fullMessage });
}
