"use client";

import { getSession } from "@/lib/auth/vendor/better-auth/client";
import { useState } from "react";

export function SessionProvider() {
  const [] = useState(getSession());
}
