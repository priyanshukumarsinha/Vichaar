import { Context } from "hono";
import { StatusCode } from "hono/utils/http-status";

export const jsonResponse = (
  c: Context,
  statusCode: StatusCode,
  status: "success" | "error",
  message: string,
  data?: any
) => {
  c.status(statusCode)
  return c.json({ statusCode, status, message, ...(data && { data }) });
};
