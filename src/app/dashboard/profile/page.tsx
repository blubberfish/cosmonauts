import {
  SignInWithGitHubButton,
  SignInWithGoogleButton,
} from "@/lib/components";
import auth from "@/lib/auth/vendor/better-auth";
import { headers } from "next/headers";

export default async function Page() {
  const requestHeaders = await headers();
  const session = await auth.api.getSession({
    headers: requestHeaders,
  });
  const accounts = await auth.api.listUserAccounts({
    headers: requestHeaders,
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_max-content]">
      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <pre>{JSON.stringify(accounts ?? [], null, 2)}</pre>
      </div>
      <div className="min-w-sm p-6 rounded overflow-hidden flex flex-col bg-neutral-900">
        <SignInWithGitHubButton allowLinking />
        <SignInWithGoogleButton allowLinking />
      </div>
    </div>
  );
}
