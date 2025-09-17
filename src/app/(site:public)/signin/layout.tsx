import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen max-w-xs mx-auto grid grid-cols-1 auto-rows-min gap-8 pt-16">
      {children}
    </div>
  );
}
