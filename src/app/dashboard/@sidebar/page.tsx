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
    <div className="fixed top-0 left-0 bottom-0 w-screen max-w-sm flex flex-col text-white bg-[#222]">
      <header className="h-16 w-full flex flex-row flex-nowrap items-center justify-between px-8">
        <a href="#">Workstream</a>
        <CloseButton />
      </header>
      <div className="flex-1"></div>
    </div>
  );
}
