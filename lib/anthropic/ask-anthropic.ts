import anthropic from "@/lib/anthropic";

export default async function askAnthropic(prompt: string) {
  const msg = await anthropic.messages.create({
    model: "claude-3-5-sonnet-latest",
    max_tokens: 100,
    messages: [{ role: "user", content: prompt }],
  });
  return msg.content[0].text;
}
