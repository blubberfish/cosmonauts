import { createAuthClient } from "better-auth/react";

export type * from "../types";

export const {
  linkSocial,
  listAccounts,
  getSession,
  signIn,
  signOut,
  useSession,
} = createAuthClient();
