"use client"
import { LogOut } from "@deemlol/next-icons";
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
      <LogOut />
      <span>Sign Out</span>
    </button>
  );
}
