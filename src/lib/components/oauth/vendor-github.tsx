"use client";

import {
  linkSocial,
  signIn,
  useSession,
} from "@/lib/auth/vendor/better-auth/client";
import { Github } from "iconoir-react";
import { Button } from "./components/button";
import type { OAuthButtonProps } from "./interface";
import { useEffect, useState } from "react";

const PROVIDER = "github";

export function SignInWithGitHubButton({ allowLinking }: OAuthButtonProps) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState<Promise<unknown> | undefined>();
  useEffect(() => {
    if (!loading) return;
    let abort = false;
    loading.finally(() => {
      if (abort) return;
      setLoading(undefined);
    });
    return () => {
      abort = true;
    };
  }, [loading]);
  const user = session?.user;

  return (
    <Button
      disabled={!!loading}
      onClick={() => {
        if (allowLinking && user) {
          setLoading((current) => {
            if (current) return current;
            return linkSocial({
              provider: PROVIDER,
              callbackURL: document.location?.href,
            });
          });
          return;
        }
        setLoading((current) => {
          if (current) return current;
          return signIn.social({
            provider: PROVIDER,
            callbackURL: "/dashboard",
          });
        });
      }}
    >
      <Github className="size-4" />
      <span>Github</span>
    </Button>
  );
}
