"use client";
import { signIn } from "next-auth/react";
import { GithubLogoIcon } from "@phosphor-icons/react";

export function SignInWithGithub() {
  return (
    <button
      type="button"
      onClick={() => {
        signIn("github");
      }}
    >
      <GithubLogoIcon />
      <span>Sign In with Github</span>
    </button>
  );
}
