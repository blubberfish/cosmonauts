"use client";

import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  linkSocial,
  type OAuthProviders,
  signIn,
} from "@/lib/auth/vendor/better-auth/client";

const Context = createContext<{
  pending: boolean;
  authenticateUser: { (provider: OAuthProviders): void };
  linkAccount: { (provider: OAuthProviders): void };
}>({
  pending: false,
  authenticateUser(provider) {
    return signIn.social({ provider });
  },
  linkAccount(provider) {
    return linkSocial({ provider });
  },
});

export function OAuthVendorProvider({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState<Promise<unknown>>();
  const authenticateUser = useCallback((provider: OAuthProviders) => {
    setLoading((current) => {
      if (current) return current;
      return signIn.social({ provider });
    });
  }, []);
  const linkAccount = useCallback((provider: OAuthProviders) => {
    setLoading((current) => {
      if (current) return current;
      return linkSocial({ provider });
    });
  }, []);
  const value = useMemo(
    () => ({
      pending: !!loading,
      authenticateUser,
      linkAccount,
    }),
    [loading, authenticateUser, linkAccount]
  );

  useEffect(() => {
    if (!loading) {
      return;
    }
    let abort = false;
    loading.finally(() => {
      if (abort) {
        return;
      }
      setLoading(undefined);
    });
    return () => {
      abort = true;
    };
  }, [loading]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useOAuthVendor() {
  return useContext(Context);
}
