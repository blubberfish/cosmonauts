import auth from "@/lib/auth/vendor/better-auth";
import { headers } from "next/headers";
import type { PropsWithChildren, ReactNode } from "react";

export default async function Layout({
  children,
  resumeSession,
}: {
  children: ReactNode;
  resumeSession: ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session) {
    return <Container>{resumeSession}</Container>;
  }
  return <Container>{children}</Container>;
}

function Container({ children }: PropsWithChildren) {
  return (
    <div className="relative h-screen w-screen grid grid-cols-1 grid-rows-1 from-sky-700 to-violet-900 bg-linear-to-br">
      <div className="absolute inset-0 from-black/67 via-10% via-black/67 to-transparent bg-linear-to-t"></div>
      {children}
    </div>
  );
}
