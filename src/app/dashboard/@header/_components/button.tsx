"use client";

import React, { useCallback} from "react";
import { useRouter } from "next/navigation";

export function Button({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const toggleSideBar = useCallback(() => {
    const url = new URL(document.location.href);
    if (url.searchParams.has("sideBar")) {
      url.searchParams.delete("sideBar");
    } else {
      url.searchParams.set("sideBar", "true");
    }
    router.replace(url.href);
  }, [router]);

  return (
    <button
      aria-label="menu-button"
      className="aspect-square h-12 rounded-full overflow-hidden cursor-pointer"
      onClick={toggleSideBar}
    >
      {children}
    </button>
  );
}
