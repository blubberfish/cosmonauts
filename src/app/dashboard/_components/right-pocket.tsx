"use client";
import { User } from "@deemlol/next-icons";
import { useState } from "react";
import { SignOut } from "./sign-out";

export interface RightPocketProps {
  profileImg?: string | null;
}

export function RightPocket({ profileImg }: RightPocketProps) {
  const [visible, setVisibleState] = useState(false);
  return (
    <>
      <button
        className="pr-8 py-4"
        type="button"
        onClick={() => {
          setVisibleState(true);
        }}
      >
        {profileImg ? (
          <img
            alt="profile-image"
            className="aspect-square h-8"
            src={profileImg}
          />
        ) : (
          <User className="aspect-square h-8" />
        )}
      </button>
      {visible && (
        <div className="fixed top-0 bottom-0 right-0 px-8 py-4 bg-white text-black">
          <SignOut />
        </div>
      )}
    </>
  );
}
