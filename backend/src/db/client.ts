import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

// ✅ Cloudflare Workers require a DATABASE_URL from `c.env`
export const createPrismaClient = (databaseUrl: string) => {
  return new PrismaClient({
    datasourceUrl: databaseUrl,
  }).$extends(withAccelerate());
};
