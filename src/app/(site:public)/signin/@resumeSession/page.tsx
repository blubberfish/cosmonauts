import auth from "@/lib/auth/vendor/better-auth";
import { SignOutButton } from "@/lib/components/oauth/sign-out";
import { withRoundedButtonStyle } from "@/lib/components/cosmos/buttons";
import { headers } from "next/headers";
import { ButtonHTMLAttributes } from "react";

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return null;
  }

  return (
    <main className="relative size-full max-w-md mx-auto flex flex-col">
      <div className="flex-1 pt-16 px-6">
        <h1 className="mb-6 text-base text-gray-300">
          <center>Resume current session</center>
        </h1>
        <a
          className="flex flex-row flex-nowrap items-center text-gray-800 bg-white rounded shadow cursor-pointer border hover:ring-2 hover:ring-blue-300"
          href="/dashboard"
        >
          <div className="px-3 py-2 bg-black/8">
            <object
              className="aspect-square h-12 rounded-full"
              data={session.user.image || undefined}
              title="user avatar"
              type="image/png"
            ></object>
          </div>
          <div className="ml-6 flex flex-col">
            <p className="font-bold">{session.user.name}</p>
            <p className="font-light text-xs mt-1">
              {session.user.email
                .split("@")
                .map((fragment, i) => {
                  if (i === 0) {
                    return fragment.slice(0, 1) + "*****" + fragment.slice(-1);
                  }
                  return "*****." + fragment.split(".").pop();
                })
                .join("@")}
            </p>
          </div>
        </a>
      </div>
      <footer className="pb-9 flex flex-col items-center justify-center">
        <SignOutButton className="text-blue-300 hover:underline">
          <span className="group-hover:underline">Use another account</span>
        </SignOutButton>
      </footer>
    </main>
  );
}
