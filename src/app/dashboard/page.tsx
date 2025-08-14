import { CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { RightPocket } from "./_components/right-pocket";

export default async function Page() {
  const session = await getServerSession(CONFIG);
  if (!session) {
    redirect("/signin");
  }
  return (
    <div>
      <header className="flex flex-row flex-nowrap items-center">
        <div className="flex-1"></div>
        <RightPocket profileImg={session.user?.image} />
      </header>
    </div>
  );
}
