import type { Account } from "better-auth";
import { Check } from "iconoir-react";
import { JSX } from "react";
import { LinkAccountButton } from "./link-button";
import { Table } from "./table";

export function AccountRow({
  children: { icon, label, provider, data },
}: {
  children: {
    icon: JSX.Element;
    label: string;
    provider: string;
    data?: Account;
  };
}) {
  return (
    <Table.Row>
      {icon}
      <div>
        <p>{label}</p>
        {!!data?.createdAt && (
          <p className="text-xs text-gray-400">
            Linked on&nbsp;
            <span>{data.createdAt.toLocaleString()}</span>
          </p>
        )}
      </div>
      {!data && (
        <LinkAccountButton data-provider={provider} disabled={!!data}>
          Link
        </LinkAccountButton>
      )}
      {!!data && (
          <Check className="size-6 text-green-300 mx-3" />
      )}
    </Table.Row>
  );
}
