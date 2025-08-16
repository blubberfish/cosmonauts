import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-auto overscroll-contain snap-y snap-mandatory">
      <div className="h-dvh w-full bg-black overflow-hidden relative snap-start">
        <div className="fixed top-0 left-0 stars stars--dimmed"></div>
        <div className="fixed top-0 left-0 stars stars--sparse"></div>
      </div>
      <div className="h-[50dvh] w-full bg-black overflow-hidden relative snap-start">
        <div className="absolute top-0 left-0 stars stars--dimmed"></div>
        <div className="absolute top-0 left-0 stars stars--sparse"></div>
      </div>
      <div className="h-dvh w-full bg-black overflow-hidden relative snap-start">
        <div className="absolute top-0 left-0 stars stars--dimmed"></div>
        <div className="absolute top-0 left-0 stars stars--sparse"></div>
      </div>
    </div>
  );
}
