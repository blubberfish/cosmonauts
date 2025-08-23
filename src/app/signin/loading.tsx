import { CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import {
  SignInProvider,
  SignInWithGithub,
  SignInWithGoogle,
} from "./_components";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const session = await getServerSession(CONFIG);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="p-8 mx-auto w-full max-w-sm flex flex-col items-center">
      <div className="aspect-square w-32 rounded-full bg-gray-400 animate-pulse"></div>
      <div className="flex-1 flex flex-col w-full gap-6 mt-8">
        <header className="flex flex-row items-center gap-4">
          <hr className="flex-1 border-b border-white/30" />
          <p className="h-4 w-[8ch] rounded bg-gray-400 animate-pulse"></p>
          <hr className="flex-1 border-b border-white/30" />
        </header>
        <div className="h-8 w-full rounded bg-gray-400 animate-pulse"></div>
        <div className="h-8 w-full rounded bg-gray-400 animate-pulse"></div>
      </div>
    </div>
  );
}
