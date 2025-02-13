import { Hono } from "hono";
import { createUser, loginUser } from "../controller/user.controller";

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};

const userRoute = new Hono<{ Bindings: Bindings }>();

userRoute.post("/signup", createUser);

userRoute.post("/signin", loginUser);

export { userRoute };
