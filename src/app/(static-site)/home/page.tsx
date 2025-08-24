import Link from "next/link";
import React from "react";
import { Computer } from "./_components";

export default async function Page() {
  return (
    <>
      <div className="snap-start relative h-screen w-full max-w-5xl mx-auto pt-32">
        <div className="h-full w-full rounded-t-xl from-sky-400/67 to-violet-400/34 bg-linear-to-br border border-t-sky-300 border-l-sky-400 border-r-violet-400 border-b-0 text-white/80 p-8">
          <div className="flex flex-col items-center">
            <Computer />
            <div className="flex flex-col items-center mt-8">
              <p className="w-[32ch] bg-gray-400 animate-pulse rounded">
                &nbsp;
              </p>
              <p className="w-[32ch] mt-1 bg-gray-400 animate-pulse rounded">
                &nbsp;
              </p>
              <p className="w-[32ch] mt-1 bg-gray-400 animate-pulse rounded">
                &nbsp;
              </p>
              <Link
                className="px-6 py-2 mt-8 from-sky-400 to-violet-400 bg-linear-to-br hover:bg-linear-to-tl text-black/80 font-bold rounded-full"
                href="/signin"
              >
                Sign in to the dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="snap-start h-screen w-full max-w-5xl mx-auto text-white/80 from-sky-400/67 to-violet-400/34 bg-linear-to-tr border-l border-l-sky-400 border-r border-r-violet-400"></div>
      <div className="snap-start h-screen w-full max-w-5xl mx-auto text-white/80 from-sky-400/67 to-violet-400/34 bg-linear-to-br border-l border-l-sky-400 border-r border-r-violet-400"></div>
    </>
  );
}
