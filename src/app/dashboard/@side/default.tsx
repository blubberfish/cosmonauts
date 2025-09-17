import { Side } from "@/lib/components/dashboard/side";
import { SIDEBAR_KEY } from "@/lib/components/dashboard/constants";
import auth from "@/lib/auth/vendor/better-auth";
import { headers } from "next/headers";

export default async function Default() {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <Side
      controllingKey={SIDEBAR_KEY}
      userAvatar={session?.user.image || undefined}
      userEmail={session?.user.email}
      userName={session?.user.name}
    />
  );
}
