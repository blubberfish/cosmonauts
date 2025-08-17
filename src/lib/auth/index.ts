import { type AuthOptions } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const CONFIG: AuthOptions = {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    jwt({ token, account, user }) {
      const provider = account?.provider;
      if (provider) {
        Object.defineProperty(token, "provider", {
          enumerable: true,
          writable: false,
          value: provider,
        });
      }
      return token;
    },
    session({ session, token, user }) {
      const provider = token?.provider;
      if (provider) {
        Object.defineProperty(session, "provider", {
          enumerable: true,
          writable: false,
          value: provider,
        });
      }
      const userId =  token?.sub;
      if (userId) {
        Object.defineProperty(session, "userId", {
          enumerable: true,
          writable: false,
          value: userId,
        });
      }
      return session;
    },
  },
};
