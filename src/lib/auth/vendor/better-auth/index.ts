import { MongoDB } from "@/lib/database/mongo";
import { betterAuth, BetterAuthOptions } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const IDENTITY_PROVIDERS: Exclude<
  BetterAuthOptions["socialProviders"],
  undefined
> = {
  github: {
    clientId: process.env.AUTH_GITHUB_ID!,
    clientSecret: process.env.AUTH_GITHUB_SECRET!,
  },
  google: {
    clientId: process.env.AUTH_GOOGLE_ID!,
    clientSecret: process.env.AUTH_GOOGLE_SECRET!,
  },
};

export const SUPPORTED_IDENTITY_PROVIDERS: Array<
  keyof typeof IDENTITY_PROVIDERS
> = Object.keys(IDENTITY_PROVIDERS) as (keyof typeof IDENTITY_PROVIDERS)[];

const auth = betterAuth({
  account: {
    accountLinking: {
      enabled: true,
      allowDifferentEmails: false,
    },
  },
  database: mongodbAdapter(MongoDB.client.db("users")),
  socialProviders: IDENTITY_PROVIDERS,
});

export default auth;

export type * from "./types";
