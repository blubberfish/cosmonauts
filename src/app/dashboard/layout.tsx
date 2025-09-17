import { Head } from "@/lib/components/dashboard/head";
import { ShowMenuAction } from "@/lib/components/dashboard/head/action";

export default function Layout({
  children,
  side,
}: {
  children: React.ReactNode;
  error: React.ReactNode;
  side: React.ReactNode;
}) {
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
