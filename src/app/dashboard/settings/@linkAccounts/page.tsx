import auth from "@/lib/auth/vendor/better-auth";
import type { Account } from "better-auth";
import { Check, GithubCircle, GoogleCircle } from "iconoir-react";
import { headers } from "next/headers";
import { AccountRow } from "./_components/account";
import { LinkAccountButton } from "./_components/link-button";
import { Table } from "./_components/table";
import { Section } from "../_components/section";

export default async function Page() {
  const { github, google } = await auth.api
    .listUserAccounts({
      headers: await headers(),
    })
    .then(
      (list) =>
        Object.fromEntries(
          list.map((datum) => [datum.providerId, datum])
        ) as unknown as Record<Account["providerId"], Account>
    );

  return (
    <Section>
      <Section.Title>Link accounts</Section.Title>
      <div className="w-full max-w-md">
        <Table>
          <AccountRow>
            {{
              icon: <GithubCircle />,
              label: "GitHub",
              provider: "github",
              data: github,
            }}
          </AccountRow>
          <AccountRow>
            {{
              icon: <GoogleCircle />,
              label: "Google",
              provider: "google",
              data: google,
            }}
          </AccountRow>
        </Table>
      </div>
    </Section>
  );
}
