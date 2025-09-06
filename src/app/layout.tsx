import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Explore the unknown",
  description: "A blubberfish app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-800 text-white">{children}</body>
    </html>
  );
}
