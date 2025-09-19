import auth from "@/lib/auth/vendor/better-auth";
import type { Session, User } from "better-auth";
import { headers } from "next/headers";
import type { PropsWithChildren } from "react";
import { ShowMenuAction } from "./head/action";
import { Head } from "./head";
import { Side } from "./side";

export async function Dashboard({ children }: PropsWithChildren) {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <>
      <Head>
        <Head.Title>Dashboard</Head.Title>
        {!!session && <ShowMenuAction />}
      </Head>
      <Body session={session}>{children}</Body>
      <Side session={session} />
    </>
  );
}

function Body({
  children,
  session,
}: PropsWithChildren<{ session?: { session: Session; user: User } | null }>) {
  if (!session) return null;
  return children;
}
