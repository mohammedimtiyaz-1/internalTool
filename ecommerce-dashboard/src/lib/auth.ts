import { cookies } from "next/headers";

export async function getUserFromToken() {
  const obj = await cookies();
  const token = obj.get("auth_token")?.value;
  // Mock decode: In real app, decode JWT
  if (token === "mocktoken") {
    return { name: "Imtiyaz" };
  }
  return null;
}
