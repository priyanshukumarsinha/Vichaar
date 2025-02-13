import { z } from "zod";

const signupInput = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignupType = z.infer<typeof signupInput>;

const signinInput = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password should be atleast 6 characters" }),
});

type SigninType = z.infer<typeof signinInput>;

const createPostInput = z.object({
  title: z.string().min(3).max(100),
  content: z.string().min(10),
  published: z.boolean().default(false),
});

type CreatePostType = z.infer<typeof createPostInput>;

const updatePostInput = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(3).max(100).optional(),
  content: z.string().min(10).optional(),
  published: z.boolean().optional(),
});

type UpdatePostType = z.infer<typeof updatePostInput>;

export {
  signupInput,
  SignupType,
  signinInput,
  SigninType,
  createPostInput,
  CreatePostType,
  updatePostInput,
  UpdatePostType,
};
