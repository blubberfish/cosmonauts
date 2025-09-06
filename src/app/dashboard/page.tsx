import auth from "@/lib/auth/vendor/better-auth";
import { headers } from "next/headers";

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <>
      <a href="/dashboard/profile">Profile</a>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
