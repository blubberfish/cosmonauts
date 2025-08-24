import { CONFIG } from "@/lib/auth";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { Button, Image } from "./_components";

export default async function Page() {
  const session = await getServerSession(CONFIG);
  const userProfileImage = session?.user?.image;

  return (
    <div className="h-16 w-full max-w-5xl mx-auto px-8 flex flex-row flex-nowrap items-center">
      <nav className="flex-1">
        <Link href="/">Workstream</Link>
      </nav>
      <Button>
        <Image src={userProfileImage} />
      </Button>
    </div>
  );
}
