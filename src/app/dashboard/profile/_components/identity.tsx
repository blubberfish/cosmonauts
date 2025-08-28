import { UserImage } from "@/lib/components";
import { Github } from "@deemlol/next-icons";
import { Session } from "next-auth";

export interface IdentityProps {
  session?: Session | null;
}

export function Identity({ session }: IdentityProps) {
  if (!session) {
    return null;
  }
  return (
    <div className="col-span-full flex flex-row flex-nowrap gap-8 overflow-hidden p-8 from-sky-400 to-violet-400 bg-linear-to-br rounded">
      <UserImage src={session.user?.image} />
      <div className="flex flex-col justify-center">
        <h1 className="text-lg text-white/80">{session.user?.name}</h1>
        <p className="text-sm text-white/80">{session.user?.email}</p>
      </div>
    </div>
  );
}
