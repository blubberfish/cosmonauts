"use client";

import { HTMLAttributes } from "react";

export function DateTime({
  value,
  ...props
}: Omit<HTMLAttributes<HTMLSpanElement>, "children"> & { value: string }) {
  return <span {...props}>{new Date(value).toUTCString()}</span>;
}
