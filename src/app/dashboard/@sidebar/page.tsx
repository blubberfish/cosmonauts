"use client";

import { Book, MessageSquare } from "@deemlol/next-icons";
import { CloseButton } from "./_components";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const sideBar = useSearchParams().get("sideBar");

  if (sideBar !== "true") {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 bottom-0 w-screen max-w-sm flex flex-col text-white bg-[#222]">
      <header className="h-16 w-full flex flex-row flex-nowrap items-center justify-between px-8">
        <a href="#">Workstream</a>
        <CloseButton />
      </header>
      <div className="flex-1">
        <a href="/dashboard/ask-cosmos">
          <span>
            <MessageSquare />
          </span>
          Ask Cosmos
        </a>
        <a href="/dashboard/knowledge-base">
          <span>
            <Book />
          </span>
          Knowledge Base
        </a>
      </div>
    </div>
  );
}
