"use client";

import { signOut } from "@/lib/auth/vendor/better-auth/client";
import { ButtonHTMLAttributes } from "react";

export function SignOutButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="group"
      type="button"
      onClick={() => {
        signOut({
          fetchOptions: {
            onSuccess() {
              document.location.reload();
            },
          },
        });
      }}
      {...props}
    />
  );
}
