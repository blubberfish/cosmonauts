"use client";
import { signOut } from "next-auth/react";
import { SignOutIcon } from "@phosphor-icons/react";

export function SignOut() {
  return (
    <button
      type="button"
      onClick={() => {
        signOut();
      }}
    >
      <SignOutIcon />
      <span>Sign Out</span>
    </button>
  );
}
