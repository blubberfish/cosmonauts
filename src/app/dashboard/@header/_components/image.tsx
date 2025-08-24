import { User } from "@deemlol/next-icons";
import React from "react";

export function Image({ src }: { src?: string | null }) {
  if (!src) {
    return (
      <Container>
        <User className="aspect-square h-full text-black/30" />
      </Container>
    );
  }

  return (
    <Container>
      <img alt="profile-image" className="h-full w-full" src={src} />
    </Container>
  );
}

function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="relative h-full from-sky-400 to-violet-400 bg-gradient-to-br rounded-full overflow-hidden">
      <div className="absolute inset-1 rounded-full overflow-hidden flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
