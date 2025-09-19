"use client";

import { signOut } from "@/lib/auth/vendor/better-auth/client";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

export function SignOutButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const router = useRouter();
  return (
    <button
      className="group"
      type="button"
      onClick={() => {
        signOut({
          fetchOptions: {
            onSuccess() {
              router.push("/signin");
              // document.location.reload();
            },
          },
        });
      }}
      {...props}
    />
  );
}
