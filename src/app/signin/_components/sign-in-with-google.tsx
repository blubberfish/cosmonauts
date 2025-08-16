"use client";
import { GoogleLogoIcon } from "@phosphor-icons/react";
import { useSignInContext } from "../_contexts/sign-in";
import { Button } from './button'

export function SignInWithGoogle() {
  const { pending, signIn } = useSignInContext();
  return (
    <Button
      disabled={pending}
      type="button"
      onClick={() => {
        signIn("google");
      }}
    >
      <GoogleLogoIcon />
      <span>Google</span>
    </Button>
  );
}
