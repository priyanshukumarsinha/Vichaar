import { Context, Next } from "hono";
import { createPrismaClient } from "../db/client"; // Assuming you have a function to initialize Prisma

export const prismaMiddleware = async (c: Context, next: Next) => {
  if (!c.env?.DATABASE_URL) {
    return c.json(
      { status: "error", message: "Missing DATABASE_URL in environment" },
      500
    );
  }

  // Attach Prisma client to context
  const prisma = createPrismaClient(c.env.DATABASE_URL);
  c.set("prisma", prisma);

  await next();
};
