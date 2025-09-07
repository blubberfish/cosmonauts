import {
  OAuthProviders,
  type OAuthProvidersProps,
} from "@/lib/components/oauth";

const OAUTH: OAuthProvidersProps["enable"] = ["google", "github"];

export default function Page() {
  return (
    <header className="w-screen h-svh overflow-hidden from-sky-400 to-violet-400 bg-linear-to-br text-neutral-700">
      <div className="size-full max-w-sm mx-auto grid grid-cols-1 grid-rows-1 auto-rows-min">
        <header>
          <h1 className="text-5xl font-bold">WorkStream</h1>
        </header>
        <nav className="w-full grid grid-cols-1 grid-flow-row auto-rows-min  p-6 rounded-t-xl from-white/67 to-white/34 bg-linear-to-br text-neutral-800 backdrop-blur border border-white/67 border-r-white/34 border-b-0">
          <h1 className="text-center text-neutral-600 text-sm">Sign in with</h1>
          <hr className="text-white/34 my-3" />
          <OAuthProviders enable={OAUTH} />
        </nav>
      </div>
    </header>
  );
}
