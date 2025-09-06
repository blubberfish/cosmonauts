import { createAuthClient } from "better-auth/react";

export const {
  linkSocial,
  listAccounts,
  getSession,
  signIn,
  signOut,
  useSession,
} = createAuthClient();
