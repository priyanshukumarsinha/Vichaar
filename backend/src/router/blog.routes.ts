import { Hono } from "hono";
import { createBlog, getBlog, updateBlog, commentOnPost, deleteComment, getComments, likePost, getBlogs, getUserBlogs } from "../controller/blog.controller";
import { authMiddleware } from "../middlewares/authMiddleware";

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};

type Variables = {
  userId: string;
  prisma: object;
};

const blog = new Hono<{ Bindings: Bindings; Variables: Variables }>();

blog.post("/create", authMiddleware, createBlog);

blog.put("/", updateBlog);

blog.get("/b/:id", getBlog);

blog.post(":id/comment", commentOnPost);

blog.get(":id/comments", getComments);

blog.delete(":id/comment/:commentId", deleteComment);

blog.post(":id/like", likePost);

blog.get("/blogs", getBlogs);

blog.get("/u/:username", getUserBlogs);


export { blog };
