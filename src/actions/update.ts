"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const updateBlog = async (formData: FormData) => {
  const sessionCookie = (await cookies()).get("accessToken");

  const id = formData.get("id");
  formData.delete("id");
  
  const objData = Object.fromEntries(formData);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`, {
    method: "PATCH",
    body: JSON.stringify(objData),
    headers: {
      'Content-Type': 'application/json',
      Cookie: `${sessionCookie?.name}=${sessionCookie?.value}`,
    },
  });

  const data = await res.json()

  if (!data.success) {
    console.log(data)
  } else {
    revalidateTag("blogs");
  }
  
};
