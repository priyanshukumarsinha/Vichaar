import { Context } from "hono";
import { jsonResponse } from "../utils/jsonResponse";
import { verify } from "hono/jwt";

export const authMiddleware = async (c: Context, next: Function) => {
  const jwt = c.req.header("Authorization");

  if (!jwt) {
    return jsonResponse(c, 400, "error", "Unauthorized");
  }

  const token = jwt.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET);

  if (!payload) {
    return jsonResponse(c, 400, "error", "Unauthorized");
  }

  c.set("userId", payload.id);
  await next();
};
