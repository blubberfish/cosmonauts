import { CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
  header,
  sidebar,
}: {
  [key: string]: React.ReactNode;
}) {
  const session = await getServerSession(CONFIG);
  if (!session) {
    redirect(`/signin`);
  }
  return (
    <div className="min-h-screen w-screen relative bg-black text-white">
      <div className="fixed top-0 left-0 stars"></div>
      <div className="fixed top-0 left-0 stars stars--dense stars--dimmed"></div>
      {header}
      <div className="min-h-[calc(100svh-theme(spacing.16))] w-full max-w-5xl mx-auto py-12 grid grid-cols-12 grid-flow-dense auto-rows-min">
        {children}
      </div>
      {sidebar}
    </div>
  );
}
