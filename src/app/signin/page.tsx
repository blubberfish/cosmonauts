import { signIn } from "@/lib/auth";
import { GithubLogoIcon } from "@phosphor-icons/react";

export default function Page() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button type="submit">
          <GithubLogoIcon />
          <span>Sign In with Github</span>
        </button>
      </form>
    </div>
  );
}
