import React, { PropsWithChildren } from "react";

export function Section({
  title,
  children,
  top,
}: PropsWithChildren<{ title: string; top?: boolean }>) {
  return (
    <section
      className={top ? "min-h-[calc(100svh-theme(spacing.32))]" : undefined}
    >
      <header className="px-8 py-6 bg-white/10 border-b border-white/30">
        <h1>{title}</h1>
      </header>
      {children}
    </section>
  );
}
