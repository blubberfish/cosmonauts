"use client"
import { signIn } from "next-auth/react";
import { GithubLogoIcon } from "@phosphor-icons/react";

export default function Page() {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          signIn("github");
        }}
      >
        <GithubLogoIcon />
        <span>Sign In with Github</span>
      </button>
    </div>
  );
}
