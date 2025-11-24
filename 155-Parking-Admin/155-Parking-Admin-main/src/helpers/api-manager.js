import axios from "axios";
import { getCookie } from "./cookies";
import { accessToken } from "@/constants/constants";

export default async function ApiManager(
  method,
  endpoint,
  data = {},
  headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
  baseUrl = "https://localhost:3005/api/v1",
  responseType = "json"
) {
  let token;
  try {
    const cookie = await getCookie(accessToken);
    if (cookie?.value) {
      token = cookie.value;
    }
  } catch (error) {
    console.error("Cookie error:", error);
  }

  if (token) {
    headers = { ...headers, Authorization: `Bearer ${token}` };
  }

  baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  endpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = `${baseUrl}${endpoint}`;

  const config = {
    method,
    url,
    headers,
    responseType,
  };

  if (["get", "delete"].includes(method.toLowerCase())) {
    config.params = data;
  } else {
    config.data = data;
  }

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    throw error?.response?.data || error;
  }
}
