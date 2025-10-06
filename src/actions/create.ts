"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const formAction = async (formData: FormData) => {
  const sessionCookie = (await cookies()).get('accessToken')

  const tags = formData.get("tags")?.toString().split(",").map(tag => tag.trim());
  formData.delete("tags");
  tags?.forEach(tag => formData.append("tags", tag));

  formData.append("authorId", "1");

  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
    method: "POST",
    body: formData,
    headers: {
      'Cookie': `${sessionCookie?.name}=${sessionCookie?.value}`
    },
  });

  revalidateTag("blogs");
  redirect("/blog");
};
