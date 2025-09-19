"use client";

import { SignOutButton } from "@/lib/components/oauth/sign-out";
import { LogOut, Settings } from "iconoir-react";
import { useSearchParams } from "next/navigation";
import type { PropsWithChildren } from "react";
import { User } from "./user";
import { SIDEBAR_KEY } from "../constants";
import { Head } from "../head";
import { HideMenuAction } from "../head/action";
import type { Authorization } from "../types";

export interface SideProps {
  controllingKey?: string;
  session?: Authorization | null;
}

export function Side({
  controllingKey = SIDEBAR_KEY,
  children,
  session,
}: PropsWithChildren<SideProps>) {
  const param = useSearchParams().get(controllingKey);
  const shouldOpen = param === "true";

  if (!shouldOpen) {
    return null;
  }

  const userAuthenticated = !!session;
  const userAvatar = session?.user.image as string | undefined;
  const userEmail = session?.user.email;
  const userName = session?.user.name;

  return (
    <div className="fixed inset-y-0 right-0 w-screen max-w-md overflow-x-hidden overflow-y-auto bg-neutral-800 text-white md:rounded-l-lg shadow">
      <Head className={(css) => `${css} bg-neutral-800`}>
        <Head.Title>
          {userAuthenticated && (
            <User avatar={userAvatar} email={userEmail} name={userName} />
          )}
        </Head.Title>
        <HideMenuAction />
      </Head>
      {userAuthenticated && (
        <nav className="flex flex-row flex-nowrap items-center px-6 my-2">
          <a
            className="cursor-pointer text-white text-xs px-2 py-0.5 rounded hover:bg-white/34"
            href="/dashboard/settings"
          >
            <Settings className="size-3 inline align-middle" />
            <span className="align-middle ml-1">Settings</span>
          </a>
          <SignOutButton className="cursor-pointer text-red-500 text-xs ml-2 px-2 py-0.5 rounded hover:bg-red-500 hover:text-white">
            <LogOut className="size-3 inline align-middle" />
            <span className="align-middle ml-1">Sign Out</span>
          </SignOutButton>
        </nav>
      )}
      {userAuthenticated && <>{children}</>}
    </div>
  );
}
