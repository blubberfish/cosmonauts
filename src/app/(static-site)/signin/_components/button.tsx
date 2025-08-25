"use client";

import { useSession } from "next-auth/react";
import React from "react";

export function Button({
  children,
  disabled,
  onClick,
}: React.PropsWithChildren<{ disabled?: boolean; onClick?: { (): void } }>) {
  const { status } = useSession();
  return (
    <button
      disabled={disabled || status === "loading"}
      className="cursor-pointer disabled:cursor-not-allowed col-span-full grid grid-cols-subgrid auto-rows-min items-center gap-x-3 px-3 py-1 bg-white/80 hover:bg-white/70 disabled:bg-white/50 rounded-lg border-3 border-t-sky-400 border-l-sky-400 border-b-violet-400 border-r-violet-400"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
