"use client";

import { Menu, X } from "@deemlol/next-icons";
import { signOut, useSession } from "next-auth/react";
import Link, { LinkProps } from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function SideBar() {
  const router = useRouter();
  const hideSideBar = useCallback(() => {
    const url = new URL(document.location.href);
    url.searchParams.delete("sideBar");
    router.replace(url.href);
  }, [router]);
  const shouldShow = useSearchParams().get("sideBar") === "true";

  if (!shouldShow) return null;

  return (
    <aside className="fixed inset-y-0 right-0 w-screen max-w-sm grid grid-cols-1 grid-rows-[repeat(2,min-content)_1fr] from-sky-400/67 to-violet-400/34 bg-linear-to-br text-white backdrop-blur-md rounded-tl-xl border-t border-t-sky-300 border-l border-l-sky-400">
      <header className="h-16 flex flex-row flex-nowrap items-center pr-8">
        <nav className="flex-1"></nav>
        <button
          type="button"
          className="cursor-pointer hover:opacity-75"
          aria-label="close button"
          onClick={hideSideBar}
        >
          <X className="aspect-square w-6" />
        </button>
      </header>
      <Profile />
      <div className="w-full grid grid-cols-[max-content_1fr] auto-rows-min justify-center">
        <SideBarLink href="/dashboard/profile">Profile</SideBarLink>
        <SideBarLink href="/dashboard/ask-cosmos">Ask Cosmos</SideBarLink>
      </div>
    </aside>
  );
}

export function SideBarMenuButton() {
  const router = useRouter();
  const toggleSideBar = useCallback(() => {
    const url = new URL(document.location.href);
    const showSideBar = url.searchParams.get("sideBar") === "true";
    if (showSideBar) {
      url.searchParams.delete("sideBar");
    } else {
      url.searchParams.set("sideBar", "true");
    }
    router.replace(url.href);
  }, [router]);
  return (
    <button aria-label="menu utton" onClick={toggleSideBar} type="button">
      <Menu className="aspect-square w-4" />
    </button>
  );
}

function SideBarLink(props: React.PropsWithChildren<LinkProps>) {
  return (
    <Link
      className="col-span-full px-8 py-3 text-black/67 hover:text-white/80 hover:bg-black/35"
      {...props}
    />
  );
}

function Profile() {
  const { data, status } = useSession();
  const image = data?.user?.image;
  const name = data?.user?.name;
  const email = data?.user?.email;

  return (
    <div className="mx-auto text-center">
      <div className="mx-auto aspect-square h-24 rounded-full overflow-hidden from-sky-400/34 to-violet-400/34 bg-linear-to-b border-t border-t-sky-300/67 border-b border-b-violet-500/34">
        {!image && (
          <div className="h-full w-fill from-gray-400/67 to-gray-400/67 bg-linear-to-br animate-pulse" />
        )}
        {!!image && (
          <img alt="profile image" className="h-full w-full p-2" src={image} />
        )}
      </div>
      {!!name ? (
        <p className="text-gray-700 text-center mt-1 text-sm">{name}</p>
      ) : (
        <p className="bg-gray-400 animate-pulse w-[10ch] mx-auto rounded mt-1 text-sm">
          &nbsp;
        </p>
      )}
      {!!email ? (
        <p className="text-gray-700 text-center mt-1 text-xs">{email}</p>
      ) : (
        <p className="bg-gray-400 animate-pulse w-[15ch] mx-auto rounded mt-1 text-xs">
          &nbsp;
        </p>
      )}
      <button
        className="mx-auto my-2 px-3 text-sm rounded-full border border-rose-700 text-rose-700 hover:text-white hover:bg-rose-700 disabled:text-rose-700/50 disabled:border-rose-700/50 disabled:bg-transparent disabled:cursor-not-allowed"
        disabled={status === "loading"}
        onClick={() => {
          signOut({ callbackUrl: "/signin" });
        }}
        type="button"
      >
        Sign out
      </button>
    </div>
  );
}
