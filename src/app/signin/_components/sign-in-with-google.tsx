"use client";
import { signIn } from "next-auth/react";
import { GoogleLogoIcon } from "@phosphor-icons/react";

export function SignInWithGoogle() {
  return (
    <button
      type="button"
      onClick={() => {
        signIn("google");
      }}
    >
      <GoogleLogoIcon />
      <span>Sign In with Google</span>
    </button>
  );
}
