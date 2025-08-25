import { Window } from "./window";

export function Computer() {
  return (
    <div className="isolate w-full max-w-sm overflow-hidden">
      <div className="h-2 rounded-t-full bg-gray-400"></div>
      <div className="aspect-video w-full bg-gray-400 px-1 pb-4">
        <div className="h-full w-full rounded-lg from-slate-700 to-slate-800 bg-linear-to-br p-1 grid grid-cols-12 grid-rows-12 gap-1">
          <Window />
          <Window className="col-start-7 col-span-full row-start-1 row-span-3 flex flex-col animate-bounce" />
          <Window className="col-start-7 col-span-full row-start-4 row-span-5 flex flex-col" />
        </div>
      </div>
      <div className="h-3 w-full from-gray-300 to-gray-400 bg-linear-to-br shadow-xl"></div>
      <div className="h-1 w-full rounded-b-full from-gray-400 to-gray-500 bg-linear-to-b"></div>
    </div>
  );
}
