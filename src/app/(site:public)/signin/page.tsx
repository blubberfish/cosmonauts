import auth from "@/lib/auth/vendor/better-auth";
import { SignIn } from "@/lib/components/oauth/sign-in";
import { SignOutButton } from "@/lib/components/oauth/sign-out";
import { headers } from "next/headers";

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session) {
    return (
      <>
        <h1 className="text-sm text-gray-400">
          <center>Current logged in as</center>
        </h1>
        <a
          className="flex flex-row flex-nowrap items-center text-gray-800 bg-white rounded cursor-pointer hover:ring-4 hover:ring-blue-300"
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
        <SignOutButton className="text-blue-300 hover:underline">
          Not you? Sign in with another account.
        </SignOutButton>
      </>
    );
  }

  return (
    <>
      <h1 className="text-xl text-gray-400 font-bold">
        <center>Sign in</center>
      </h1>
      <nav className="grid grid-cols-1 auto-rows-min gap-4">
        <SignIn redirectUrl="/dashboard" newUserUrl="/dashboard?welcome=true" />
      </nav>
    </>
  );
}
