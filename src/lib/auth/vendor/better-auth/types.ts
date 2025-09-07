import type { BetterAuthOptions } from "better-auth/types";

export type OAuthProviders = keyof Exclude<
  BetterAuthOptions["socialProviders"],
  undefined
>;
