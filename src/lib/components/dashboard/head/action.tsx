"use client";

import { Head } from "@/lib/components/dashboard/head";
import { Menu, Xmark } from "iconoir-react";
import { ComponentType, SVGProps } from "react";
import { useSideActions } from "../side/hooks";

function withActionIconStyle(Icon: ComponentType<SVGProps<SVGSVGElement>>) {
  return (props: SVGProps<SVGSVGElement>) => (
    <Icon className="size-6" {...props} />
  );
}

const MenuIcon = withActionIconStyle(Menu);

const XIcon = withActionIconStyle(Xmark);

export function ShowMenuAction() {
  const { show } = useSideActions();
  return (
    <Head.Action onClick={show}>
      <MenuIcon />
    </Head.Action>
  );
}

export function HideMenuAction() {
  const { hide } = useSideActions();
  return (
    <Head.Action onClick={hide}>
      <XIcon />
    </Head.Action>
  );
}
