import type { HTMLAttributes } from "react";

export function Section(props: HTMLAttributes<HTMLDivElement>) {
  return <section className="col-span-full mx-6 text-gray-100" {...props} />
}

Section.Title = function Title(props: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className="text-xl font-semibold mb-6 py-3 border-b border-b-white/21" {...props} />
}
