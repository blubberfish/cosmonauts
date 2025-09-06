import { PropsWithChildren } from "react";

export function Button({
  children,
  disabled,
  onClick,
}: PropsWithChildren<{
  disabled?: boolean;
  onClick?: { (): void };
}>) {
  return (
    <button
      className="inline-flex items-center gap-2 rounded bg-neutral-800 px-4 py-2 text-white hover:bg-neutral-700"
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
