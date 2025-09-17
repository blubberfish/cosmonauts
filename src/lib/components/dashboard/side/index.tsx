"use client";

import { useSearchParams } from "next/navigation";
import { HideMenu } from "./actions";
import { User } from "./user";
import { SIDEBAR_KEY } from "../constants";
import { Head } from "../head";

export interface SideProps {
  controllingKey: string;
  userAvatar?: string;
  userEmail?: string;
  userName?: string;
}

const HideMenuAction = <HideMenu controllingKey={SIDEBAR_KEY} />;

export function Side({
  controllingKey,
  userAvatar,
  userEmail,
  userName,
}: SideProps) {
  const param = useSearchParams().get(controllingKey);
  const shouldOpen = param === "true";

  if (!shouldOpen) {
    return null;
  }

  return (
    <div className="fixed inset-y-0 right-0 w-screen max-w-md overflow-x-hidden overflow-y-auto bg-neutral-800 text-white md:rounded-l-lg shadow">
      <div className="from-blue-600 to-violet-800 bg-gradient-to-br">
        <Head actions={HideMenuAction} />
      </div>
      <User avatar={userAvatar} email={userEmail} name={userName} />
    </div>
  );
}
