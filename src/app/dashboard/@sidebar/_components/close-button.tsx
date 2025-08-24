"use client";

import { X } from "@deemlol/next-icons";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function CloseButton() {
  const router = useRouter();
  const closeSideBar = useCallback(() => {
    const url = new URL(document.location.href);
    url.searchParams.delete("sideBar");
    router.replace(url.href);
  }, [router]);
  return (
    <button className="" type="button" onClick={closeSideBar}>
      <X />
    </button>
  );
}
