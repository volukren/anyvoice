import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import EmailProvider from "next-auth/providers/email";
import { NextAuthOptions } from "next-auth";
import LoginLink from "@/emails/login-link";
import { sendEmail } from "@/emails";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      async sendVerificationRequest({ identifier, url }) {
        if (process.env.NODE_ENV === "development") {
          console.log(`Login link: ${url}`);
        } else {
          await sendEmail({
            email: identifier,
            subject: `Your AnyVoice Login link`,
            react: LoginLink({ url, email: identifier }),
          });
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token, user }) => {
      session.user = {
        //@ts-ignore
        ...(token || session).user,
      };
      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  theme: {
    brandColor: "#db255c",
    colorScheme: "light",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    newUser: "/",
    verifyRequest: "/auth/verify-request",
    error: "/auth/error",
  },
  debug: process.env.NODE_ENV === "development",
};
