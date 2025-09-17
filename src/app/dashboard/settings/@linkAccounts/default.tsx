import { Suspense } from "react";
import Loading from "./loading";
import Page from "./page";

export default async function Default(props: any) {
  return (
    <Suspense fallback={<Loading />}>
      <Page {...props} />
    </Suspense>
  );
}
