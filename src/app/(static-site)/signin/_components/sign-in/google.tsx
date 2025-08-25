"use client";

import { signIn } from "next-auth/react";
import { Button } from "../button";
import { Google } from "@deemlol/next-icons";

export function SignInWithGoogle() {
  return (
    <Button
      onClick={() => {
        signIn("google");
      }}
    >
      <Google className="aspect-square h-4 -mx-1" />
      <span>Sign in with Google</span>
    </Button>
  );
}
