"use client";

import { signIn } from "next-auth/react";
import { Button } from "../button";
import { Github } from "@deemlol/next-icons";

export function SignInWithGithub() {
  return (
    <Button
      onClick={() => {
        signIn("github");
      }}
    >
      <Github className="aspect-square h-4 -mx-1" />
      <span>Sign in with Github</span>
    </Button>
  );
}
