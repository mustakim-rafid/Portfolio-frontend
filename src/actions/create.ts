"use server";

export const formAction = async (formData: FormData) => {
  const tags = formData.get("tags")?.toString().split(",").map((tag) => tag.trim())

  formData.delete("tags");
  tags?.forEach((tag) => {
    formData.append("tags", tag)
  })

  console.log(formData)
  formData.append("authorId", "1");

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  console.log(data);
};
