import auth from "@/lib/auth/vendor/better-auth";
import { WarningTriangleSolid } from "iconoir-react";
import { DateTime } from "./_components";
import { headers } from "next/headers";

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  const response =
    session &&
    (await fetch(
      "https://hrqmuaeyo6.execute-api.ap-southeast-1.amazonaws.com/staging/v1/admin/agent/knowledge/test",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
        },
        cache: "no-store",
      }
    ));
  if (response?.ok) {
    const data: {
      next?: string;
      objects: Array<{ key: string; lastModified: string; size: number }>;
    } = await response.json();
    return (
      <>
        <section className="max-w-5xl w-full mx-auto px-6">
          <h1 className="text-lg mb-4">Policies</h1>
          <div className="grid grid-cols-[1fr_repeat(1,max-content)] auto-rows-min">
            {data.objects.length <= 0 && (
              <div className="px-6 py-4 text-white/34 rounded border">
                <center>
                  <WarningTriangleSolid className="inline align-middle" />
                  <span className="align-middle mx-4">No policies found</span>
                </center>
              </div>
            )}
            {data.objects.length > 0 &&
              data.objects.map(({ key, lastModified, size }) => (
                <div
                  className="col-span-full grid grid-cols-subgrid grid-rows-1 items-center px-6 py-4 rounded border border-white/34"
                  key={key}
                >
                  <div className="text-blue-300">{key}</div>
                  <div className="mx-2 text-xs text-gray-400">{size} bytes</div>
                  <footer className="mt-2 text-gray-400 col-span-full grid grid-cols-1 grid-rows-1">
                    <DateTime className="text-xs" value={lastModified} />
                  </footer>
                </div>
              ))}
          </div>
        </section>
      </>
    );
  }
  return null;
}
