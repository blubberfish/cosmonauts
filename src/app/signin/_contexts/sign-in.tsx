"use client";
import { signIn } from "next-auth/react";
import { createContext, useContext } from "react";

export interface ISignInContext {
  signIn: typeof signIn;
  pending: boolean;
}

export const SignInContext = createContext<ISignInContext>({
  signIn(...parameters) {
    return signIn(...parameters);
  },
  pending: false,
});

export function useSignInContext() {
  return useContext(SignInContext);
}
