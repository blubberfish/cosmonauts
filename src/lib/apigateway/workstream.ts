import { error } from "console";

const baseHref = new URL(
  "https://hrqmuaeyo6.execute-api.ap-southeast-1.amazonaws.com/"
);

export async function listArtefacts() {
  const response = await fetch(
    new URL("staging/v1/admin/knowledge", baseHref),
    {
      cache: "no-store",
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY || "",
      },
      method: "GET",
    }
  );
  if (!response.ok) {
    return {
      error: true,
      reason: `${response.status} ${response.statusText}`,
      details: await response.text(),
    };
  }
  return response.json() as Promise<{
    next?: string | null;
    objects: Array<{ key: string; lastModified: string; size: number }>;
  }>;
}
