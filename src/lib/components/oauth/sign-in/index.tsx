import { type ComponentProps } from "react";
import { SignInProvider } from "./context";
import { GitHubSignInButton } from "./github";
import { GoogleSignInButton } from "./google";

export function SignIn(props: ComponentProps<typeof SignInProvider>) {
  return (
    <SignInProvider {...props}>
      <GitHubSignInButton />
      <GoogleSignInButton />
    </SignInProvider>
  );
}
