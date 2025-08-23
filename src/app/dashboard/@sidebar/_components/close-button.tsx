"use client";

import { X } from "@deemlol/next-icons";

export function CloseButton() {
  return (
    <button className="" type="button" onClick={() => {
      const url = new URL(document.location.href);
      url.searchParams.delete("sideBar");
      window.history.replaceState({}, "", url.href);
    }}>
      <X />
    </button>
  );
}
