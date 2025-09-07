"use client";

import type { OAuthProviders as ProviderName } from "@/lib/auth/vendor/better-auth/types";
import { use, type PropsWithChildren, type ReactNode } from "react";
import { Github, Google } from "iconoir-react";
import { useOAuthVendor } from "./context";

const ICON_MAP: Partial<
  Record<ProviderName, { label: string; icon: ReactNode }>
> = {
  google: { icon: <Google className="size-4" />, label: "Google" },
  github: { icon: <Github className="size-4" />, label: "GitHub" },
};

export interface ButtonProps {
  className?: string;
  provider: ProviderName;
}

export function Button({ className, provider }: ButtonProps) {
  const { pending, authenticateUser } = useOAuthVendor();
  const content = ICON_MAP[provider];

  if (!content) {
    return null;
  }

  return (
    <button
      disabled={pending}
      className={className || "col-span-full min-w-sm max-w-full grid grid-cols-subgrid items-center text-current hover:text-violet-300 disabled:text-gray-400 border cursor-pointer disabled:cursor-not-allowed rounded-full px-3 py-2"}
      onClick={() => {
        authenticateUser(provider);
      }}
      type="button"
    >
      {content.icon}
      <span>{content.label}</span>
    </button>
  );
}
