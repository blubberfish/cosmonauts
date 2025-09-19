import { PropsWithChildren, type ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="relative w-full px-3 py-2 gap-x-2 rounded-full bg-white text-slate-700 hover:ring-4 hover:ring-blue-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
    />
  );
}

Button.Icon = function ButtonIcon({ children }: PropsWithChildren) {
  return (
    <div className="absolute inset-y-0 left-0 aspect-square flex flex-col items-center justify-center">
      {children}
    </div>
  );
};
