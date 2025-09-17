import { Suspense } from "react";
import Page from "./page";

export default async function Default() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  );
}
