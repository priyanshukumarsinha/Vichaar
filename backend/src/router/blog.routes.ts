import { Hono } from "hono";
import { createBlog, getBlog, updateBlog } from "../controller/blog.controller";

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};

type Variables = {
  userId: string;
  prisma: object;
};

const blog = new Hono<{ Bindings: Bindings; Variables: Variables }>();

blog.post("/", createBlog);

blog.put("/", updateBlog);

blog.get(":id", getBlog);

export { blog };
