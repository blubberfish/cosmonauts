export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-screen relative">
      <header className="fixed inset-0 from-black to-[#333] bg-linear-to-br"></header>
      <div className="py-32 w-full max-w-4xl mx-auto text-white">
        <div className="relative rounded-xl bg-white/10">{children}</div>
      </div>
    </div>
  );
}
