"use client";
import { Google } from '@deemlol/next-icons'
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
      <Google />
      <span>Google</span>
    </Button>
  );
}
