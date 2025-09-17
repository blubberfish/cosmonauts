import {
  LinkGitHubButton,
  LinkGoogleButton,
} from "@/lib/components/oauth/link";
import auth from "@/lib/auth/vendor/better-auth";
import { headers } from "next/headers";

export default async function Page() {
  const accounts = await auth.api
    .listUserAccounts({
      headers: await headers(),
    })
    .then((list) =>
      Object.fromEntries(list.map((datum) => [datum.providerId, datum]))
    );

  return (
    <>
      <section className="col-span-8 min-h-[100svh-theme(spacing.16)]"></section>
      <section className="col-span-4 min-h-[calc(100svh-theme(spacing.16))] bg-neutral-600">
        <nav className="col-start-1 col-span-full sm:col-start-9 sm:col-span-4 w-full max-w-sm p-6 rounded-lg shadow">
          <h1 className="text-center mb-6">Link accounts</h1>
          <div className="grid grid-cols-1 gap-2">
            <LinkGitHubButton linked={"github" in accounts} />
            <LinkGoogleButton linked={"google" in accounts} />
          </div>
        </nav>
      </section>
    </>
  );
}
