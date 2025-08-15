import React from "react";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="flex flex-row shrink-0 items-center gap-2 px-2 py-1 rounded border border-white/15 bg-white/10 hover:bg-white/15 text-white transition-colors duration-200 "
      {...props}
    />
  );
}
