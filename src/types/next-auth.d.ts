import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    meta?: {
      provider?: string;
      sub?: string;
    };
  }
}
