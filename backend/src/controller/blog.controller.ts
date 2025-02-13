import { Context } from "hono";
import { jsonResponse } from "../utils/jsonResponse";
import { createPostInput, updatePostInput } from "vichaar-common";

/*

model Post {
  id        String   @id @default(uuid())
  title     String
  content   String
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
}

*/

const blogSchema = createPostInput;

export const createBlog = async (c: Context) => {
  // Create a blog post
  try {
    const body = await c.req.json(); // Parse request body
    const validatedBody = blogSchema.parse(body); // Validate the request body
    const prisma = c.get("prisma");

    // Extract the user ID from the request
    const userId = c.get("userId");

    // Create the blog post
    const post = await prisma.post.create({
      data: {
        title: validatedBody.title,
        content: validatedBody.content,
        published: validatedBody.published,
        authorId: userId,
      },
    });

    if (!post) {
      return jsonResponse(c, 400, "error", "Failed to create post");
    }

    return jsonResponse(c, 201, "success", "Post created successfully", post);
  } catch (error) {
    console.error("Error creating user:", error);
    return jsonResponse(c, 500, "error", "Internal Server Error");
  }
};

const updateBlogSchema = updatePostInput;

export const updateBlog = async (c: Context) => {
  // Update a blog post
  try {
    const body = await c.req.json(); // Parse request body
    const validatedBody = updateBlogSchema.parse(body); // Validate the request body

    const prisma = c.get("prisma");

    // Extract the user ID from the request
    const userId = c.get("userId");

    // check if blog post exists
    const post = await prisma.post.findUnique({
      where: {
        id: body.id,
      },
    });

    if (!post) {
      return jsonResponse(c, 404, "error", "Post not found");
    }

    // check if the user is the author of the post
    if (post.authorId !== userId) {
      return jsonResponse(c, 403, "error", "Unauthorized");
    }

    // Update the blog post
    const updatedPost = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: validatedBody.title,
        content: validatedBody.content,
        published: validatedBody.published,
      },
    });

    if (!updatedPost) {
      return jsonResponse(c, 400, "error", "Failed to update post");
    }

    return jsonResponse(
      c,
      200,
      "success",
      "Post updated successfully",
      updatedPost
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return jsonResponse(c, 500, "error", "Internal Server Error");
  }
};

export const getBlog = async (c: Context) => {
  try {
    const id = c.req.param("id"); // Extract the `id` from the URL
    const prisma = c.get("prisma");

    console.log(typeof prisma);

    // check if id was provided
    if (!id) {
      return jsonResponse(c, 400, "error", "Id not Provided");
    }

    // check if blog exists
    const blog = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    if (!blog) {
      return jsonResponse(c, 400, "error", "Blog Not Found!!");
    }

    // return blog
    return jsonResponse(c, 200, "success", "Blog Fetched Successfully!!", {
      blog,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return jsonResponse(c, 500, "error", "Internal Server Error");
  }
};
