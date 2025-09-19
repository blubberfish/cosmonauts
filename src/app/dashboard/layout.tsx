import auth from "@/lib/auth/vendor/better-auth";
import { Head } from "@/lib/components/dashboard/head";
import { ShowMenuAction } from "@/lib/components/dashboard/head/action";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
  side,
}: {
  children: React.ReactNode;
  error: React.ReactNode;
  side: React.ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/signin");
  }

  return (
    <>
      <Head className={(css) => `${css} bg-neutral-700`}>
        <Head.Title>
          <div className="size-10 rounded-full bg-blue-400 animate-pulse" />
        </Head.Title>
        <ShowMenuAction />
      </Head>
      <main className="grid grid-cols-12 auto-rows-min gap-6">{children}</main>
      {side}
    </>
  );
}
