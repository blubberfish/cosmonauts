import { CONFIG } from "@/lib/auth";
import { Users } from "@/lib/database/users";
import { getServerSession } from "next-auth";
import { Identity } from "./_components/identity";

export default async function Page() {
  const session = await getServerSession(CONFIG);
  const user = !!session && (await new Users().getProfile(session));

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] grid grid-cols-12 auto-rows-min bg-neutral-800 text-white/80">
      <Identity session={session} />
    </div>
  );
}
