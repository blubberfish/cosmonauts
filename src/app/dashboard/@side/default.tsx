import { Side } from "@/lib/components/dashboard/side";
import { SIDEBAR_KEY } from "@/lib/components/dashboard/constants";
import auth from "@/lib/auth/vendor/better-auth";
import { SignOutButton } from "@/lib/components/oauth/sign-out";
import { Settings } from "iconoir-react";
import { headers } from "next/headers";

export default async function Default() {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <Side
      controllingKey={SIDEBAR_KEY}
      userAvatar={session?.user.image || undefined}
      userEmail={session?.user.email}
      userName={session?.user.name}
    >
      <nav className="px-6 py-2 grid grid-cols-[max-content_1fr] gap-x-2">
        <a
          className="group px-3 py-2 col-span-full grid grid-cols-subgrid hover:bg-white/13 rounded"
          href="/dashboard/settings"
        >
          <Settings />
          <span className="group-hover:underline">Settings</span>
        </a>
        <SignOutButton className="col-span-full px-3 py-2 rounded bg-red-800 hover:bg-rose-700 text-left">
          <center>Sign out</center>
        </SignOutButton>
      </nav>
    </Side>
  );
}
