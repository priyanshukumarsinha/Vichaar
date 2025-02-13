import { Context } from "hono";
import { jsonResponse } from "../utils/jsonResponse";
import { sign } from "hono/jwt";
import PasswordHasher from "@fntools/password";
import { signinInput, signupInput } from "vichaar-common";

const createUserSchema = signinInput;

const hasher = new PasswordHasher(10);

export const createUser = async (c: Context) => {
  const prisma = c.get("prisma");

  try {
    // ✅ Parse Request Data
    const body = await c.req.json();
    const parsed = createUserSchema.safeParse(body);

    if (!parsed.success) {
      return jsonResponse(c, 400, "error", "Invalid data", {
        errors: parsed.error.flatten().fieldErrors, // 🔹 Simplify zod errors
      });
    }

    // ✅ Check if User Exists
    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      return jsonResponse(c, 400, "error", "User already exists");
    }

    // hash password
    const hashedPassword = hasher.hash(body.password, "salt");

    body.password = hashedPassword;

    // ✅ Create New User
    const user = await prisma.user.create({ data: body });

    // JWT
    const token = await sign({ id: user.id }, c.env.JWT_SECRET).catch((err) => {
      console.error("JWT Signing Error:", err);
      return null;
    });

    if (!token) {
      return jsonResponse(c, 500, "error", "JWT Generation Failed");
    }

    return jsonResponse(c, 201, "success", "User created", {
      user: { id: user.id, email: user.email, name: user.name },
      token,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return jsonResponse(c, 500, "error", "Internal Server Error");
  }
};

const loginUserSchema = signupInput;

export const loginUser = async (c: Context) => {
  const prisma = c.get("prisma");

  try {
    // parsing request data
    const body = await c.req.json();
    const parsed = loginUserSchema.safeParse(body);

    if (!parsed.success) {
      return jsonResponse(c, 400, "error", "Invalid data", {
        errors: parsed.error.flatten().fieldErrors, // 🔹 Simplify zod errors
      });
    }

    //   find user
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    //  check if user exists
    if (!user) {
      return jsonResponse(
        c,
        400,
        "error",
        "User with this email does not exist"
      );
    }

    //   compare password

    const isPasswordCorrect = hasher.compare(
      body.password,
      user.password,
      "salt"
    );

    if (!isPasswordCorrect) {
      return jsonResponse(c, 400, "error", "Incorrect Password, Try Again!!");
    }

    // jwt
    const token = await sign({ id: user.id }, c.env.JWT_SECRET).catch((err) => {
      console.error("JWT Signing Error:", err);
      return null;
    });

    if (!token) {
      return jsonResponse(c, 500, "error", "JWT Generation Failed");
    }

    //   response
    return jsonResponse(c, 200, "success", "User Logged in Successfully", {
      token,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return jsonResponse(c, 500, "error", "Internal Server Error");
  }
};
