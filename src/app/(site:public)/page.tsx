import {
  OAuthProviders,
  type OAuthProvidersProps,
} from "@/lib/components/oauth";

const OAUTH: OAuthProvidersProps["enable"] = ["google", "github"];

export default function Page() {
  return (
    <>
      <header className="w-screen overflow-hidden from-sky-400 to-violet-400 bg-linear-to-br text-neutral-700">
        <div className="w-full max-w-3xl mx-auto p-6 py-12 grid grid-cols-12 grid-rows-12 gap-4">
          <div className="col-start-1 col-span-full row-start-1 row-span-3">
            <h1 className="text-3xl lg:text-5xl font-bold">WorkStream</h1>
          </div>
          <div className="col-start-1 col-span-full row-start-4 row-span-full grid grid-cols-subgrid grid-rows-subgrid">
            <div className="rounded-md col-start-1 col-span-full row-start-1 row-span-6 from-white/67 to-white/21 bg-linear-to-br border border-white/67 border-b-black/21 border-r-black/21"></div>
            <div className="rounded-md col-start-1 col-span-6 row-start-7 row-span-3 from-white/67 to-white/21 bg-linear-to-br border border-white/67 border-b-black/21 border-r-black/21"></div>
            <div className="rounded-md col-start-7 col-span-6 row-start-7 row-span-3 from-white/67 to-white/21 bg-linear-to-br border border-white/67 border-b-black/21 border-r-black/21"></div>
          </div>
        </div>
      </header>
      <section className="w-screen max-w-3xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[1fr_max-content] gap-6">
        <header>
          <h1 className="text-xl lg:text-3xl font-bold">Sign in to dashboard</h1>
          <div className="h-4 w-full rounded bg-gray-400 animate-pulse mt-2"></div>
          <div className="h-4 w-full rounded bg-gray-400 animate-pulse mt-2"></div>
        </header>
        <div className="w-screen max-w-xs mx-auto grid grid-cols-1 grid-rows">
          <OAuthProviders enable={OAUTH} />
        </div>
      </section>
    </>
  );
}
