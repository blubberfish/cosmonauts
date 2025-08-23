export default function Home() {
  return (
    <div className="h-screen w-screen overflow-auto overscroll-contain snap-y snap-mandatory relative bg-black text-white">
      <div className="h-screen w-screen fixed top-0 left-0">
        <div className="stars stars--dimmed"></div>
        <div className="stars stars--sparse"></div>
      </div>
      <div className="snap-start h-svh w-full sticky top-0 flex items-center justify-center">
        <div className="mx-auto w-full max-w-sm grid grid-cols-1 auto-rows-min justify-items-center px-6">
          <div className="aspect-square mb-4 w-32 rounded-full overflow-hidden bg-gray-400 animate-pulse"></div>
          <p className="h-4 my-1 w-[32ch] rounded bg-gray-400 animate-pulse"></p>
          <p className="h-4 my-1 w-[32ch] rounded bg-gray-400 animate-pulse"></p>
          <p className="h-4 my-1 w-[32ch] rounded bg-gray-400 animate-pulse"></p>
          <a
            className="mt-4 px-4 py-2 cursor-pointer rounded-full hover:underline from-sky-400 to-violet-500 bg-linear-to-br text-black"
            href="/signin"
          >
            Sign in to console
          </a>
        </div>
      </div>
      <div className="snap-start h-svh w-full sticky top-0 bg-black"></div>
      <div className="snap-start h-svh w-full sticky top-0 bg-white/30"></div>
    </div>
  );
}
