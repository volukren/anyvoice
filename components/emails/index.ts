import { CreateEmailOptions } from "resend";
import { resend } from "@/lib/resend";

export const sendEmail = async ({
  email,
  subject,
  from,
  bcc,
  replyToFromEmail,
  text,
  react,
  scheduledAt,
  marketing,
}: Omit<CreateEmailOptions, "to" | "from"> & {
  email: string;
  from?: string;
  replyToFromEmail?: boolean;
  marketing?: boolean;
}) => {
  return await resend.emails.send({
    to: email,
    from: from || "AnyVoice <system@translatevid.app>",
    bcc: bcc,
    subject: subject,
    text: text,
    react: react,
  });
};
