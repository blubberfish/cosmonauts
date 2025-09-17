"use client";

import { useSession } from "next-auth/react";

export function LinkAccounts() {
  const session = useSession();
  return (
    <div>
      <button
        type="button"
        disabled={session.data?.meta?.provider === "github"}
      ></button>
      <button type="button"></button>
    </div>
  );
}
