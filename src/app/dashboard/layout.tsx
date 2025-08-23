import { CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
  sidebar,
  user,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  user: React.ReactNode;
}) {
  const session = await getServerSession(CONFIG);
  if (!session) {
    redirect(`/signin`);
  }
  return (
    <div className="h-dvh w-dvw bg-neutral-100">
      <header className="h-16 w-full flex flex-row flex-nowrap items-center bg-white text-black px-6 py-2">
        <div className="flex-1"></div>
        {user}
      </header>
      {children}
      {sidebar}
    </div>
  );
}
