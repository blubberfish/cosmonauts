import type { OAuthProviders as ProviderName } from "@/lib/auth/vendor/better-auth/types";
import { OAuthVendorProvider } from "./components/context";
import { Button } from "./components/button";

export interface OAuthProvidersProps {
  buttonClassName?: string;
  className?: string;
  enable: ProviderName[];
}

export function OAuthProviders({
  buttonClassName,
  className,
  enable,
}: OAuthProvidersProps) {
  if (!enable.length) {
    return null;
  }
  return (
    <OAuthVendorProvider>
      <nav
        className={
          className || "grid grid-cols-[max-content_1fr] auto-rows-min"
        }
      >
        {enable.map((provider) => (
          <Button className={buttonClassName} key={provider} provider={provider} />
        ))}
      </nav>
    </OAuthVendorProvider>
  );
}
