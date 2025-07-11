"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <button
      className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
      onClick={() => {
        document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        router.push("/login");
      }}
    >
      Logout
    </button>
  );
}