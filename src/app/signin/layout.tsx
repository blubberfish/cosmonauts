import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen relative bg-black text-white">
      <div className="stars stars--dense stars--dimmed absolute top-0 left-0"></div>
      <div className="stars stars--lg stars--sparse absolute top-0 left-0"></div>
      <div className="relative mx-auto top-32 h-[calc(100%-theme(spacing.32))] w-full max-w-lg rounded-t-xl overflow-hidden bg-[#222] grid grid-cols-1 grid-rows-1">
        {children}
      </div>
    </div>
  );
}
