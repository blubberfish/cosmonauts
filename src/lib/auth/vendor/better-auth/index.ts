import { MongoDB } from "@/lib/database/mongo";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const auth = betterAuth({
  account: {
    accountLinking: {
      enabled: true,
      allowDifferentEmails: false,
    },
  },
  database: mongodbAdapter(MongoDB.client.db("users")),
  socialProviders: {
    github: {
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    },
    google: {
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    },
  },
});

export default auth;
