"use client";

import type { Session } from "next-auth";
import { getSession, SessionProvider } from "next-auth/react";
import React, { useEffect, useState } from "react";

export function Session({ children }: React.PropsWithChildren) {
  const [session, setSession] = useState<Session | null>();
  useEffect(() => {
    let abort = false;
    getSession().then((data) => {
      if (abort) return;
      setSession(data);
    });
    return () => {
      abort = true;
    };
  }, []);
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
