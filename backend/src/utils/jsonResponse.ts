import { Context } from "hono";

export const jsonResponse = (
  c: Context,
  statusCode: number,
  status: "success" | "error",
  message: string,
  data?: any
) => {
  return c.json({ statusCode, status, message, ...(data && { data }) });
};
