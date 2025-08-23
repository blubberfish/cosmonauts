import { CloseButton } from "./_components";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string[] | string | undefined | null;
  }>;
}) {
  const { sideBar } = await searchParams;
  if (!sideBar) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 bottom-0 w-full sm:max-w-sm grid grid-col-1 grid-row-1 text-white bg-black">
      <div className="w-full max-w-sm h-h-full mx-auto">
        <header className="h-16 w-full flex flex-row flex-nowrap items-center justify-between px-6 py-2">
          <a href="#">Workstream</a>
          <CloseButton />
        </header>
      </div>
    </div>
  );
}
