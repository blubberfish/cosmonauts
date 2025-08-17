"use client";
import { signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";

export function SignOutButton({ children }: React.PropsWithChildren) {
  const [pending, setPendingState] = useState<Promise<unknown>>();
  useEffect(() => {
    if (!pending) return;
    let aborted = false;
    pending.finally(() => {
      if (aborted) return;
      setPendingState(() => undefined);
    });
    return () => {
      aborted = true;
    };
  }, [pending]);
  return (
    <button
      className="disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={!!pending}
      onClick={() => {
        setPendingState(signOut());
      }}
      type="button"
    >
      {children}
    </button>
  );
}
