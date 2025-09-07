"use client";

import type { OAuthProviders as ProviderName } from "@/lib/auth/vendor/better-auth/types";
import { use, type PropsWithChildren, type ReactNode } from "react";
import { Github, Google } from "iconoir-react";
import { useOAuthVendor } from "./context";

const ICON_MAP: Partial<
  Record<ProviderName, { label: string; icon: ReactNode }>
> = {
  google: { icon: <Google />, label: "Google" },
  github: { icon: <Github />, label: "GitHub" },
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
      className={className || "col-span-full grid grid-cols-subgrid"}
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
