"use client";

import { useSignIn } from "./context";
import { GoogleButton } from "../components";

export function GoogleSignInButton() {
  const { disabled, signIn } = useSignIn();
  return (
    <GoogleButton
      onClick={() => {
        signIn.viaGoogle();
      }}
      disabled={disabled}
    />
  );
}
