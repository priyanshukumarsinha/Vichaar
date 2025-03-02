import { Hono } from "hono";
import {
  changePassword,
  createUser,
  deleteUser,
  getUserusername,
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

userRoute.put("/update", authMiddleware, updateUser);

userRoute.delete("/delete", authMiddleware, deleteUser);

userRoute.put("/password", authMiddleware, changePassword);

userRoute.post("/u/:username", getUserusername);

export { userRoute };
