"use server";
import { cookies } from "next/headers";

// Set a cookie
export const setCookie = async (
  name = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "",
  value,
  options = {}
) => {
  const cookiesStore = await cookies();
  cookiesStore.set(name, value, options);
};

// Get a single cookie (by name)
export const getCookie = async (name) => {
  const cookiesStore = await cookies();
  return cookiesStore.get(name);
};

// Remove a cookie
export const removeCookie = async (name) => {
  const cookiesStore = await cookies();
  cookiesStore.delete(name);
};

// Get and parse (JSON) the access token cookie
export const getCookies = async () => {
  const cookiesStore = await cookies();
  const cookieValue = cookiesStore.get(
    process.env.NEXT_PUBLIC_ACCESS_TOKEN || ""
  );

  if (!cookieValue || !cookieValue.value) {
    return {};
  }

  try {
    return JSON.parse(cookieValue.value);
  } catch (error) {
    console.error("Error parsing cookie:", error);
    return {};
  }
};
