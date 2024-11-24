import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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
