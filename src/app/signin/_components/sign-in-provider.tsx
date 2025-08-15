"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { signIn } from "next-auth/react";
import { SignInContext } from "../_contexts/sign-in";

export function SignInProvider({ children }: React.PropsWithChildren) {
  const [pending, setPendingState] = useState<Promise<unknown>>();
  useEffect(() => {
    if (!pending) return;
    let abort = false;
    pending.finally(() => {
      if (abort) return;
      setPendingState(() => undefined);
    });
    return () => {
      abort = true;
    };
  });
  const signInWrapper: typeof signIn = useCallback((...parameters) => {
    const currentSignIn = signIn(...parameters);
    setPendingState(currentSignIn);
    return currentSignIn;
  }, []);
  return (
    <SignInContext.Provider
      value={{
        pending: !!pending,
        signIn: signInWrapper,
      }}
    >
      {children}
    </SignInContext.Provider>
  );
}
