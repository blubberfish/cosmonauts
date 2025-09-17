"use client";

import { linkSocial } from "@/lib/auth/vendor/better-auth/client";
import { usePromise } from "@/lib/components/hooks";
import type { ButtonHTMLAttributes } from "react";

export function LinkAccountButton({
  disabled,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const [{ loading }, setState] = usePromise();

  return (
    <button
      className="px-3 py-2 text-blue-300 hover:bg-white/13 disabled:text-gray-300 disabled:cursor-not-allowed rounded"
      disabled={loading}
      onClick={(event) => {
        const provider = (event.target as HTMLButtonElement).dataset.provider;
        if (!provider) return;
        setState(linkSocial({ provider, callbackURL: "/dashboard/settings" }));
        onClick?.(event);
      }}
      type="button"
      {...props}
    />
  );
}
