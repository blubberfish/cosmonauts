"use client";

import { listAccounts } from "@/lib/auth/vendor/better-auth/client";
import { type Account } from "better-auth";
import { usePromise } from "../../hooks";
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
} from "react";

export type AccountsContext = Record<Account["providerId"], Account>

const AccountsContext = createContext<AccountsContext | undefined>(undefined);

export function AccountsProvider({ children }: PropsWithChildren) {
  const [{ data, loading }, setPromise] = usePromise<Array<Account>>();
  const table = useMemo(() => {
    if (!data) return null;
    return Object.fromEntries(
      data.map((datum) => [datum.providerId, datum])
    ) as AccountsContext
  }, [data]);
  
  useEffect(() => {
    setPromise(listAccounts() as unknown as Promise<Array<Account>>);
  }, []);

  return <AccountsContext.Provider value={table}>{children}</AccountsContext.Provider>>;
}

export function useAccounts() {
  return useContext(AccountsContext);
}