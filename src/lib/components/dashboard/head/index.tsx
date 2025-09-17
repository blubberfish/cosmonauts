import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import React from "react";

const HEAD_CSS =
  "sticky top-0 h-16 flex flex-row flex-nowrap items-center px-6";

export function Head({
  children,
  className,
}: PropsWithChildren<{ className?: string | { (base: string): string } }>) {
  return (
    <header
      className={
        className
          ? typeof className === "string"
            ? className
            : className(HEAD_CSS)
          : HEAD_CSS
      }
    >
      {children}
    </header>
  );
}

Head.Title = function Title({ children }: PropsWithChildren) {
  return (
    <section className="flex-1 grid grid-cols-1 grid-rows-1">
      {children}
    </section>
  );
};

const actionButtonBaseCss =
  "-mr-2 p-2 rounded cursor-pointer disabled:cursor-not-allowed hover:bg-white/8";

Head.Action = function Action({
  className,
  ...props
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  className?: string | { (baseCss: string): string };
}) {
  return (
    <button
      className={
        className
          ? typeof className === "string"
            ? className
            : className(actionButtonBaseCss)
          : "-mr-2 p-2 rounded cursor-pointer disabled:cursor-not-allowed hover:bg-white/8"
      }
      type="button"
      {...props}
    />
  );
};
