import { SIDEBAR_KEY } from "@/lib/components/dashboard/constants";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useSideActions(controllingKey = SIDEBAR_KEY) {
  const router = useRouter();
  const action = useCallback(
    (value: string) => {
      const url = new URL(document.location.href);
      url.searchParams.set(controllingKey, value);
      router.replace(url.href);
    },
    [controllingKey, router]
  );

  return {
    show: useCallback(() => {
      action("true");
    }, [action]),
    hide: useCallback(() => {
      action("");
    }, [action]),
  };
}
