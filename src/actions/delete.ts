"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const deleteBlog = async (id: number) => {
    const sessionCookie = (await cookies()).get("accessToken")

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`, {
    method: "DELETE",
    headers: {
      Cookie: `${sessionCookie?.name}=${sessionCookie?.value}`
    }
  });

  const data = await res.json()
  
  if (!data.success) {
    return data
  } else {
    revalidateTag("blogs")
    return data
  }
};
