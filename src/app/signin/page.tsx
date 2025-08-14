import { getServerSession } from 'next-auth'
import { SignInWithGithub } from "./_components/sign-in-with-github";
import { Logger } from "./_components/logger";

export default async function Page() {
  const session = await getServerSession()
  return (
    <div>
      <Logger />
      <SignInWithGithub />
    </div>
  );
}
