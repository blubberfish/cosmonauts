import { getServerSession } from "next-auth";
import { Section } from "./_components";

export default async function Page() {
  const session = await getServerSession();
  return (
    <>
      <Section title="Profile" top></Section>
      <Section title="Profile"></Section>
    </>
  );
}
