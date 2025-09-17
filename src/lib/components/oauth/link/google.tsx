"use client";

import { linkSocial } from "@/lib/auth/vendor/better-auth/client";
import { GoogleButton } from "../components";

export function LinkGoogleButton({ linked }: { linked?: boolean }) {
  return (
    <GoogleButton
      disabled={linked}
      onClick={() => {
        linkSocial({ provider: "google", callbackURL: document.location.href });
      }}
    />
  );
}
