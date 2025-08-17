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
    <div className="h-svh w-full flex flex-col items-center justify-center bg-black overflow-hidden relative">
      <div className="stars stars--dense stars--dimmed fixed top-0 left-0"></div>
      <div className="stars stars--lg stars--sparse fixed top-0 left-0"></div>
      <div className="flex flex-col gap-2 p-4 rounded shadow min-w-sm bg-black text-white">
        <SignInProvider>
          <SignInWithGithub />
          <SignInWithGoogle />
        </SignInProvider>
      </div>
    </div>
  );
}
