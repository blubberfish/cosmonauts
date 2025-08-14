import { CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SignInWithGithub } from "./_components/sign-in-with-github";
import { SignInWithGoogle } from "./_components/sign-in-with-google";
import { Logger } from "./_components/logger";

export default async function Page() {
  const session = await getServerSession(CONFIG);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div>
      <Logger />
      <div>
        <SignInWithGithub />
        <SignInWithGoogle />
      </div>
    </div>
  );
}
