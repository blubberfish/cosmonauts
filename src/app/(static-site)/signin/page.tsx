import { CONFIG } from "@/lib/auth";
import { Session } from "@/lib/components";
import { getServerSession } from "next-auth";
import { SignInWithGithub, SignInWithGoogle } from "./_components";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(CONFIG);
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="relative h-screen w-screen max-w-sm mx-auto pt-32">
      <div className="h-full w-full from-sky-400/67 to-violet-400/34 bg-linear-to-br text-white/80 p-8 rounded-t-xl flex flex-col items-center-safe gap-8 border-l border-l-sky-400 border-t border-t-sky-400 border-r border-r-violet-400">
        <div className="aspect-square w-16 bg-black/30 rounded-full"></div>
        <header className="flex flex-row flex-nowrap items-center gap-4 w-full">
          <hr className="flex-1 border" />
          <h1 className="text-2xl font-bold text-center">
            Cosmosnauts
          </h1>
          <hr className="flex-1 border" />
        </header>
        <nav className="flex-1 grid grid-cols-[repeat(2,max-content)] auto-rows-min justify-center gap-y-2 text-black/80">
          <Session>
            <SignInWithGithub />
            <SignInWithGoogle />
          </Session>
        </nav>
      </div>
    </div>
  );
}
