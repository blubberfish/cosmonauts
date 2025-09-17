"use client";

import { useSearchParams } from "next/navigation";
import type { PropsWithChildren } from "react";
import { User } from "./user";
import { Head } from "../head";
import { HideMenuAction } from "../head/action";

export interface SideProps {
  controllingKey: string;
  userAvatar?: string;
  userEmail?: string;
  userName?: string;
}

export function Side({
  controllingKey,
  children,
  userAvatar,
  userEmail,
  userName,
}: PropsWithChildren<SideProps>) {
  const param = useSearchParams().get(controllingKey);
  const shouldOpen = param === "true";

  if (!shouldOpen) {
    return null;
  }

  return (
    <div className="fixed inset-y-0 right-0 w-screen max-w-md overflow-x-hidden overflow-y-auto bg-neutral-800 text-white md:rounded-l-lg shadow">
      <Head className={(css) => `${css} bg-neutral-800`}>
        <Head.Title>
          <User avatar={userAvatar} email={userEmail} name={userName} />
        </Head.Title>
        <HideMenuAction />
      </Head>
      {children}
    </div>
  );
}
