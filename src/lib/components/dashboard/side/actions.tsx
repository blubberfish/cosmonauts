"use client";

import { Menu, Xmark } from "iconoir-react";
import { useRouter } from "next/navigation";
import {
  ComponentType,
  PropsWithChildren,
  SVGAttributes,
  useCallback,
} from "react";

function withIconStyle(
  Icon: ComponentType<SVGAttributes<SVGElement>>
): typeof Icon {
  return (props: SVGAttributes<SVGElement>) => <Icon className="h-4" {...props} />;
}

const MenuWithIconStyle = withIconStyle(Menu);
const XWithIconStyle = withIconStyle(Xmark);

export interface ActionsProps {
  controllingKey: string;
}

export interface ActionButtonProps extends ActionsProps {
  onClick: { (setter: { (controllerValue: string): void }): void };
}

function Button({
  controllingKey,
  children,
  onClick,
}: PropsWithChildren<ActionButtonProps>) {
  const router = useRouter();
  const handleClick = useCallback(() => {
    const url = new URL(document.location.href);
    const setter = (value: string) => {
      url.searchParams.set(controllingKey, value);
    };
    onClick(setter);
    router.replace(url.href);
  }, [controllingKey, router, onClick]);
  return (
    <button
      className="asepct-square p-2 hover:bg-white/13 rounded"
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export function ShowMenu({ controllingKey }: ActionsProps) {
  return (
    <Button
      controllingKey={controllingKey}
      onClick={(set) => {
        set("true");
      }}
    >
      <MenuWithIconStyle />
    </Button>
  );
}

export function HideMenu({ controllingKey }: ActionsProps) {
  return (
    <Button
      controllingKey={controllingKey}
      onClick={(set) => {
        set("");
      }}
    >
      <XWithIconStyle />
    </Button>
  );
}
