"use client"
import { SignOutIcon } from "@phosphor-icons/react";
import { signOut } from "next-auth/react";

export function SignOut() {
  return (
    <button
      className="flex flex-row flex-nowrap gap-1 items-center"
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
