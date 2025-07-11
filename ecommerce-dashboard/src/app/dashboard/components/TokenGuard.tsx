"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TokenGuard() {
  const router = useRouter();

  useEffect(() => {
    // Check if auth_token exists
    const hasToken = document.cookie
      .split("; ")
      .some((row) => row.startsWith("auth_token="));
    if (!hasToken) {
      router.replace("/login");
    }
  }, [router]);

  return null;
}