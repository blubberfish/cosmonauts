import { CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { SignOutButton } from "./_components";

export default async function Page() {
  const session = await getServerSession(CONFIG);
  return (
    <SignOutButton>
      <img
        alt="profile_picture"
        className="aspect-square w-16"
        src={session?.user?.image || ""}
      />
    </SignOutButton>
  );
}
