import Link from "next/link";
import React from "react";
import { SideBar, SideBarMenuButton } from "./_components";
import { Session } from "@/lib/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="h-16 sticky top-0 left-0 right-0 px-8 flex flex-row items-center-safe bg-black text-white">
        <nav className="flex-1">
          <Link
            className="px-3 py-1 rounded hover:bg-black/5"
            href="/dashboard"
          >
            Cosmos
          </Link>
        </nav>
        <SideBarMenuButton />
      </header>
      {children}
      <Session>
        <SideBar />
      </Session>
    </>
  );
}
