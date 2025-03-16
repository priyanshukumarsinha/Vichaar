import { Hono } from "hono";
import { blog } from "./router/blog.routes";
import { userRoute } from "./router/user.routes";
import { authMiddleware } from "./middlewares/authMiddleware";
import { prismaMiddleware } from "./middlewares/prismaMiddleware";
import { cors } from "hono/cors";

const app = new Hono();

app.use(cors());
app.use(prismaMiddleware);

// app.use("/api/v1/blog/*", authMiddleware);

app.route("/api/v1/user", userRoute);
app.route("/api/v1/blog/", blog);

app.get("/", (c) => {
  return c.json({
    statusCode: 200,
    status: "success",
    message: "Welcome to Hono!",
  });
});

export default app;
