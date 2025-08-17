import { CONFIG } from '@/lib/auth'
import { getServerSession } from "next-auth";
import { Logger } from "./_components/logger";
import { Chat } from "./_components/chat";

export default async function Page() {
  const session = await getServerSession(CONFIG);
  const sessionId = session?.id
  return (
    <div>
       {!!sessionId && <Chat sessionId={session.id} />}
      <Logger />
    </div>
  );
}
