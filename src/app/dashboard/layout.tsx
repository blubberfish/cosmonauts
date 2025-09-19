import { Dashboard } from "@/lib/components/dashboard";
import { Suspense } from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <Dashboard>{children}</Dashboard>
    </Suspense>
  );
}
