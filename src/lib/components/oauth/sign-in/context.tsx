"use client";

import { signIn } from "@/lib/auth/vendor/better-auth/client";
import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { usePromise } from "../../hooks";

interface SignInContext {
  disabled?: boolean;
  signIn: {
    viaGitHub: { (): void };
    viaGoogle: { (): void };
  };
}

const SignInContext = createContext<SignInContext>({
  signIn: {
    viaGitHub() {},
    viaGoogle() {},
  },
});

export function SignInProvider({
  children,
  redirectUrl,
  newUserUrl,
}: PropsWithChildren<{ redirectUrl: string; newUserUrl?: string }>) {
  const [{ loading: disabled }, setPromise] = usePromise();
  const baseSignInConfig = useMemo(
    () =>
      ({
        callbackURL: redirectUrl,
        newUserCallbackURL: newUserUrl,
      } satisfies Partial<Parameters<typeof signIn.social>[0]>),
    [redirectUrl, newUserUrl]
  );
  const viaGitHub = useCallback(() => {
    console.log("Signing in via GitHub");
    setPromise(
      signIn.social({
        ...baseSignInConfig,
        provider: "github",
      })
    );
  }, [baseSignInConfig, setPromise]);
  const viaGoogle = useCallback(() => {
    setPromise(
      signIn.social({
        ...baseSignInConfig,
        provider: "google",
      })
    );
  }, [baseSignInConfig, setPromise]);

  return (
    <SignInContext.Provider
      value={{
        disabled,
        signIn: {
          viaGitHub,
          viaGoogle,
        },
      }}
    >
      {children}
    </SignInContext.Provider>
  );
}

export function useSignIn() {
  return useContext(SignInContext);
}
