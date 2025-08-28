import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="snap-mandatory snap-y h-screen w-screen bg-black overflow-auto">
      <div className="fixed top-0 left-0 stars"></div>
      <div className="fixed top-0 left-0 stars stars--dense stars--dimmed"></div>
      {children}
    </div>
  );
}
