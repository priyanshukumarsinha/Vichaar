import { Context } from "hono";
import { jsonResponse } from "../utils/jsonResponse";
import { createPostInput, updatePostInput } from "vichaar-common";
import { z } from "zod";

/*

model Post {
  id        String  @id @default(uuid())
  title     String
  content   String
  published Boolean @default(false)
  authorId  String
  authorName String
  publishDate DateTime @default(now())
  readTime Int @default(0)
  likes     Int @default(0)
  comentCount Int @default(0)
  image     String?

  author    User    @relation(fields: [authorId], references: [id])
}


*/

const blogSchema = z.object({
  title: z.string().min(3).max(255),
  content: z.string().min(3),
  published: z.boolean().optional(),
  image: z.string().optional(),
  subHeading: z.string().optional()
});

export const createBlog = async (c: Context) => {
  // Create a blog post
  try {
    const body = await c.req.json(); // Parse request body
    const validatedBody = blogSchema.parse(body); // Validate the request body
    const prisma = c.get("prisma");

    // Extract the user ID from the request
    const userId = c.get("userId");

    // get author name
    const author = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!author) {
      return jsonResponse(c, 404, "error", "User not found");
    }

    // calculate read time
    const readTime = Math.ceil(validatedBody.content.length / 200);

    // Create the blog post
    const post = await prisma.post.create({
      data: {
        title: validatedBody.title,
        content: validatedBody.content,
        published: validatedBody.published || false,
        authorId: userId,
        authorName: author?.name,
        subHeading: validatedBody.subHeading || "",
        readTime,
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

const updateBlogSchema = z.object({
  id: z.string(),
  title: z.string().min(3).max(255),
  content: z.string().min(3),
  published: z.boolean(),
});

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

// like a blog post
export const likePost = async (c: Context) => {
  const prisma = c.get("prisma");
  try {
    // Extract user Id
    const userId = c.get("userId");

    // Extract post Id
    const postId = c.req.param("id");

    // check if post exists
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return jsonResponse(c, 404, "error", "Post not found");
    }

    // check if user has already liked the post
    const like = await prisma.like.findFirst({
      where: {
        userId,
        postId,
      },
    });

    if (like) {
      // delete like : dislike the post
      await prisma.like.delete({
        where: {
          id: like.id,
        },
      });

      // decrement the like count
      await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          likes: {
            decrement: 1,
          },
        },
      });

      return jsonResponse(c, 200, "success", "Post disliked successfully");
    }

    // like the post
    await prisma.like.create({
      data: {
        userId,
        postId,
      },
    });

    // increment the like count
    await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likes: {
          increment: 1,
        },
      },
    });

    return jsonResponse(c, 200, "success", "Post liked successfully");
  } catch (error) {
    console.error("Error liking post:", error);
    return jsonResponse(c, 500, "error", "Internal Server Error");
  }
};

// comment on a blog post
export const commentOnPost = async (c: Context) => {
  const prisma = c.get("prisma");
  try {
    // Extract user Id
    const userId = c.get("userId");

    // Extract post Id
    const postId = c.req.param("id");

    // Extract comment
    const body = await c.req.json();
    const comment = body.comment;

    // check if post exists
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return jsonResponse(c, 404, "error", "Post not found");
    }

    // create the comment
    const newComment = await prisma.comment.create({
      data: {
        userId,
        postId,
        comment,
      },
    });

    // increment the comment count
    await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        comentCount: {
          increment: 1,
        },
      },
    });

    return jsonResponse(c, 200, "success", "Comment added successfully", {
      comment: newComment,
    });
  } catch (error) {
    console.error("Error commenting on post:", error);
    return jsonResponse(c, 500, "error", "Internal Server Error");
  }
};

// get comments on a blog post
export const getComments = async (c: Context) => {
  const prisma = c.get("prisma");
  try {
    // Extract post Id
    const postId = c.req.param("id");

    // check if post exists
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return jsonResponse(c, 404, "error", "Post not found");
    }

    // get comments
    const comments = await prisma.comment.findMany({
      where: {
        postId,
      },
    });

    return jsonResponse(c, 200, "success", "Comments fetched successfully", {
      comments,
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return jsonResponse(c, 500, "error", "Internal Server Error");
  }
};

// delete a comment
export const deleteComment = async (c: Context) => {
  const prisma = c.get("prisma");
  try {
    // Extract user Id
    const userId = c.get("userId");

    // Extract comment Id
    const commentId = c.req.param("id");

    // check if comment exists
    const comment = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    if (!comment) {
      return jsonResponse(c, 404, "error", "Comment not found");
    }

    // check if user is the author of the comment
    if (comment.userId !== userId) {
      return jsonResponse(c, 403, "error", "Unauthorized");
    }

    // delete comment
    await prisma.comment.delete({
      where: {
        id: commentId,
      },
    });

    // decrement the comment count
    await prisma.post.update({
      where: {
        id: comment.postId,
      },
      data: {
        comentCount: {
          decrement: 1,
        },
      },
    });

    return jsonResponse(c, 200, "success", "Comment deleted successfully");
  } catch (error) {
    console.error("Error deleting comment:", error);
    return jsonResponse(c, 500, "error", "Internal Server Error");
  }
};

// get all blogs
export const getBlogs = async (c: Context) => {
  const prisma = c.get("prisma");
  try {
    // get all blogs sorted by time

    const blogs = await prisma.post.findMany({
      orderBy: {
        publishDate: "desc",
      },
    });

    console.log(blogs);

    return jsonResponse(c, 200, "success", "Blogs fetched successfully", {
      blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return jsonResponse(c, 500, "error", "Internal Server Error");
  }
};
