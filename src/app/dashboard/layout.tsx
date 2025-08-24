import { SignOut } from "@/lib/components";
import React from "react";

export default function Layout({ children }: Record<string, React.ReactNode>) {
  return <div className="p-4">
    <SignOut>Sign OUt</SignOut>
    Dashboard Layout</div>;
}
