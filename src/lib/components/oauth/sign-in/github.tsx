"use client";

import { useSignIn } from "./context";
import { GitHubButton } from "../components";

export function GitHubSignInButton() {
  const { disabled, signIn } = useSignIn();
  return (
    <GitHubButton
      onClick={() => {
        signIn.viaGitHub();
      }}
      disabled={disabled}
    />
  );
}
