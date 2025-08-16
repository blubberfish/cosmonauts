"use client";
import { GithubLogoIcon } from "@phosphor-icons/react";
import { useSignInContext } from "../_contexts/sign-in";
import { Button } from './button'

export function SignInWithGithub() {
  const { pending, signIn } = useSignInContext();
  return (
    <Button
      disabled={pending}
      type="button"
      onClick={() => {
        signIn("github");
      }}
    >
      <GithubLogoIcon />
      <span>Github</span>
    </Button>
  );
}
