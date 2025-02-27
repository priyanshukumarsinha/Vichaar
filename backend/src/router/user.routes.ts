import { Hono } from "hono";
import {
  createUser,
  loginUser,
  updateUser,
} from "../controller/user.controller";
import { authMiddleware } from "../middlewares/authMiddleware";

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};

const userRoute = new Hono<{ Bindings: Bindings }>();

userRoute.post("/signup", createUser);

userRoute.post("/signin", loginUser);

userRoute.post("/update", authMiddleware, updateUser);

export { userRoute };
