import { useSession, signIn, signOut } from "next-auth/react";
import { GithubLogoIcon } from "@phosphor-icons/react";

export default function Page() {
  const { status, data: session } = useSession();
  return (
    <div>
      {!session && (
        <button
          type="button"
          onClick={() => {
            signIn("github");
          }}
        >
          <GithubLogoIcon />
          <span>Sign In with Github</span>
        </button>
      )}
      {!!session && (
        <button
          type="button"
          onClick={() => {
            signOut();
          }}
        >
          <GithubLogoIcon />
          <span>Sign Out</span>
        </button>
      )}
    </div>
  );
}
