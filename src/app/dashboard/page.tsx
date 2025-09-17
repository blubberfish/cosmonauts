import { getSession } from "better-auth/api";
import { headers } from "next/headers";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  return null;
}
