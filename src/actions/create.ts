"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const createBlog = async (formData: FormData) => {
  try {
    const sessionCookie = (await cookies()).get("accessToken");

    const tags = formData
      .get("tags")
      ?.toString()
      .split(",")
      .map((tag) => tag.trim());
    formData.delete("tags");
    tags?.forEach((tag) => formData.append("tags", tag));

    formData.append("authorId", "1");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
      method: "POST",
      body: formData,
      headers: {
        Cookie: `${sessionCookie?.name}=${sessionCookie?.value}`,
      },
    });
    const data = await res.json();

    if (!data.success) {
      return {
        error: data.message || "Blog creation failed",
      };
    }

    revalidateTag("blogs");
    return
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message || "Something went wrong while creating a blog",
      };
    } else {
      return {
        error: "Something went wrong while creating a blog",
      };
    }
  }
};
