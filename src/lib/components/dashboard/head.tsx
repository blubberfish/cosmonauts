import type { PropsWithChildren, ReactNode } from "react";
import React from "react";

export interface HeadProps {
  containerProps?: string;
  actions?: ReactNode;
}

export function Head({ actions, children }: PropsWithChildren<HeadProps>) {
  return (
    <header className="sticky top-0 h-16 flex flex-row flex-nowrap items-center px-8">
      <section className="flex-1 grid grid-cols-1 grid-rows-1">
        {children}
      </section>
      {actions}
    </header>
  );
}
