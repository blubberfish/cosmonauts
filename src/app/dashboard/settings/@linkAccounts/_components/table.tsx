import type { HTMLAttributes } from "react";

export function Table(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="grid grid-cols-[max-content_1fr_max-content] auto-rows-min gap-6"
      {...props}
    />
  );
}

Table.Row = function Row(props: HTMLAttributes<HTMLElement>) {
  return <section className="col-span-full grid grid-cols-subgrid items-center" {...props} />;
}
