import { CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Chat } from "./_components/chat";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { chat } = await searchParams;
  const session = await getServerSession(CONFIG);
  const sessionId = session?.id;
  return (
    <div>
      {!!sessionId && chat === "yes" && <Chat sessionId={session.id} />}
    </div>
  );
}
