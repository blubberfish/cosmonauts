import {
  SignInWithGitHubButton,
  SignInWithGoogleButton,
} from "@/lib/components";

export default async function Page() {
  return (
    <div>
      <SignInWithGitHubButton />
      <SignInWithGoogleButton />
    </div>
  );
}
