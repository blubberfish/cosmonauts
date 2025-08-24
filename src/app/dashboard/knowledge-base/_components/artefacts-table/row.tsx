import { ArtefactInfo } from "./model";

export function Row({
  data: { key, lastModified, size },
}: {
  data: ArtefactInfo;
}) {
  if (!key) {
    return <div className="col-span-full odd:bg-white/5">&nbsp;</div>;
  }
  return (
    <div className="col-span-full grid grid-cols-subgrid hover:bg-white/15 odd:bg-white/5 cursor-pointer">
      <div className="col-span-6 px-4 py-1" data-id={key}>
        <p className="max-w-full text-ellipsis">{key}</p>
      </div>
      <div className="col-span-2 px-4 py-1 text-xs text-mono" data-id={key}>
        {format(size, "size")}
      </div>
      <div className="col-span-4 px-4 py-1 text-xs text-mono" data-id={key}>
        {format(lastModified, "datatime")}
      </div>
    </div>
  );
}

const UNIT = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

const FORMATTER = {
  size(n: number) {
    let unit = 0;
    let i = n / 1000;
    while (Math.floor(i) >= 10) {
      i = i / 10;
      unit += 1;
    }
    return `${unit > 0 ? i.toFixed(2) : n}${UNIT[unit]}`;
  },
  datatime(dt: string) {
    return new Date(dt).toLocaleString();
  },
} as { [key: string]: { (value: unknown): string } };

function format(value: unknown, type: keyof typeof FORMATTER) {
  return FORMATTER[type]?.(value);
}
