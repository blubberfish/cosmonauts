export default function Layout({
  children,
  linkAccounts,
}: {
  children: React.ReactNode;
  linkAccounts: React.ReactNode;
}) {
  return (
    <>
      {linkAccounts}
      {children}
    </>
  );
}
