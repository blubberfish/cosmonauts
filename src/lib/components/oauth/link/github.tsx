"use client";

import { linkSocial } from "@/lib/auth/vendor/better-auth/client";
import { GitHubButton } from "../components";

export function LinkGitHubButton({ linked }: { linked?: boolean }) {
  return (
    <GitHubButton
      disabled={linked}
      onClick={() => {
        linkSocial({ provider: "github", callbackURL: document.location.href });
      }}
    />
  );
}
