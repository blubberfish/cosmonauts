"use client";
import { Github } from '@deemlol/next-icons'
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
      <Github />
      <span>Github</span>
    </Button>
  );
}
