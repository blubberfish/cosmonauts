"use client";

import { signOut } from "next-auth/react";
import React from "react";

export function SignOut({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <button
      className={className}
      onClick={() => {
        signOut();
      }}
      type="button"
    >
      {children}
    </button>
  );
}
