export function Window({ className }: { className?: string }) {
  return (
    <div
      className={
        className ||
        "col-start-1 col-span-6 row-start-1 row-span-10 flex flex-col"
      }
    >
      <header className="h-3 w-full rounded-t bg-gray-600 px-2 flex flex-row items-center">
        <div className="aspect-square h-1 rounded-full bg-red-500 "></div>
      </header>
      <div className="flex-1 w-full from-neutral-800 to-neutral-900 bg-linear-to-br overflow-hidden">
        <div className="h-1 w-1/3 rounded bg-gray-400 mt-1" />
        <div className="h-1 rounded bg-gray-400 mt-1" />
        <div className="h-1 rounded bg-gray-400 mt-1" />
        <div className="h-1 w-3/4 rounded bg-gray-400 mt-1" />
      </div>
    </div>
  );
}
