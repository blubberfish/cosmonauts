import { SIDEBAR_KEY } from "@/lib/components/dashboard/constants";
import { Head } from "@/lib/components/dashboard/head";
import { ShowMenu } from "@/lib/components/dashboard/side/actions";

const ShowMenuAction = <ShowMenu controllingKey={SIDEBAR_KEY} />;

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
      <Head actions={ShowMenuAction} />
      <main className="grid grid-cols-12 auto-rows-min gap-6">{children}</main>
      {side}
    </>
  );
}
