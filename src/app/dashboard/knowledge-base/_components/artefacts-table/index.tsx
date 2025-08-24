import React from "react";
import { ArtefactInfo } from "./model";
import { Row } from "./row";

export function ArtefactsTable({ children }: { children?: ArtefactInfo[] }) {
  const length = children?.length ?? 0;
  const empty = !length;

  if (empty) {
    return <Container></Container>;
  }

  const placeholder = new Array(50 - length).fill({
    key: "",
    lastModified: "",
    size: 0,
  });

  return (
    <Container>
      {children?.map((data) => (
        <Row key={data.key} data={data} />
      ))}
      {placeholder.map((_, index) => (
        <Row key={`placeholder-${index}`} data={_} />
      ))}
    </Container>
  );
}

function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="col-span-full grid grid-cols-12 grid-flow-dense auto-rows-min bg-white/10 text-sm">
      <header className="col-span-full grid grid-cols-subgrid bg-black/30">
        <header className="col-span-6 px-4 py-2 overflow-hidden text-nowrap text-ellipsis">
          Name
        </header>
        <header className="col-span-2 px-4 py-2 overflow-hidden text-nowrap text-ellipsis">
          Size
        </header>
        <header className="col-span-4 px-4 py-2 overflow-hidden text-nowrap text-ellipsis">
          Last modified
        </header>
      </header>
      {children}
    </div>
  );
}
