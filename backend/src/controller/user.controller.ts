import { Context } from "hono";
import { jsonResponse } from "../utils/jsonResponse";
import { sign } from "hono/jwt";
import { z } from "zod";

// import PasswordHasher from "@fntools/password";

import { signinInput, signupInput } from "vichaar-common";

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3).optional(),
  password: z.string().min(6),
  username: z.string().min(3),
});

// const hasher = new PasswordHasher(10);

export const createUser = async (c: Context) => {
  const prisma = c.get("prisma");

  try {
    // ✅ Parse Request Data
    const body = await c.req.json();
    const parsed = createUserSchema.safeParse(body);

    if (!parsed.success) {
      return jsonResponse(
        c,
        400,
        "error",
        "Invalid Email, Password or Username",
        {
          errors: parsed.error.flatten().fieldErrors, // 🔹 Simplify zod errors
        }
      );
    }

    // ✅ Check if User Exists
    const existingUser = await prisma.user.findFirst({
      where: {  // ✅ `where` is required
        OR: [
          { email: body.email },
          { username: body.username}
        ]
      }
    });
    

    if (existingUser) {
      return jsonResponse(c, 400, "error", "User already exists");
    }

    // hash password
    // const hashedPassword = hasher.hash(body.password, "salt");

    const hashedPassword = body.password;

    body.password = hashedPassword;

    if (!body.username) {
      body.name = body.username;
    }

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
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        username: user.username,
      },
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

    // const isPasswordCorrect = hasher.compare(
    //   body.password,
    //   user.password,
    //   "salt"
    // );

    const isPasswordCorrect = body.password === user.password;

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
      user: { id: user.id, email: user.email, name: user.name },
      token,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return jsonResponse(c, 500, "error", "Internal Server Error");
  }
};

const updateUserSchema = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
  password: z.string().optional(),
});

export const updateUser = async (c: Context) => {
  // user can send either email or name or password or username
  // if email is sent, check if it is already taken
  // update the user

  const prisma = c.get("prisma");

  try {
    // parsing request data
    const body = await c.req.json();
    const parsed = updateUserSchema.safeParse(body);

    if (!parsed.success) {
      return jsonResponse(c, 400, "error", "Invalid data", {
        errors: parsed.error.flatten().fieldErrors, // 🔹 Simplify zod errors
      });
    }

    const userId = c.get("userId");

    // find user
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    // check if user exists
    if (!user) {
      return jsonResponse(c, 404, "error", "User not found");
    }

    // check if email is already taken
    if (body.email) {
      const existingUser = await prisma.user.findUnique({
        where: { email: body.email },
      });

      if (existingUser) {
        return jsonResponse(c, 400, "error", "Email already taken");
      }
    }

    // check if username is already taken
    if (body.username) {
      const existingUser = await prisma.user.findUnique({
        where: { username: body.username },
      });

      if (existingUser) {
        return jsonResponse(c, 400, "error", "Username already taken");
      }
    }

    // update the user with changed fields
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email: body.email || user.email,
        name: body.name || user.name,
        password: body.password || user.password,
        username: body.username || user.username,
      },
    });

    return jsonResponse(c, 200, "success", "User updated", {
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return jsonResponse(c, 500, "error", "Internal Server Error");
  }
};
