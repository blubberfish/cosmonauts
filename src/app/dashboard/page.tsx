import { CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Page() {
  const session = await getServerSession(CONFIG);
  const sessionId = session?.id;
  return <></>;
}
