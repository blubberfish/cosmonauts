import { listArtefacts } from "@/lib/apigateway/workstream";
import React from "react";
import { ArtefactsTable } from "./_components";

export default async function Page() {
  return <Artefacts />;
}

async function Artefacts() {
  const data = await listArtefacts();
  if ("error" in data) {
    return <div>Error: {data.reason}</div>;
  }
  return (
    <div className="relative col-span-full grid grid-cols-subgrid bg-[#222] text-white rounded border border-white/10">
      <ArtefactsTable>{data?.objects}</ArtefactsTable>
    </div>
  );
}
