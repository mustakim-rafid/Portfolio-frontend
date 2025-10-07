import UpdateCard from "@/components/module/blog/UpdateCard";
import { IBlog } from "@/types";

const UpdateBlogPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
    next: {
        tags: ["blogs"]
    }
  });
  const { data } = await res.json();

  return (
    <div className="space-y-4 md:p-4">
      {data.map((blog: IBlog) => (
        <UpdateCard
          key={blog.id}
          updateCardItems={{
            id: blog.id,
            title: blog.title,
            thumbnail: blog.thumbnail,
            content: blog.content
          }}
        />
      ))}
    </div>
  );
};

export default UpdateBlogPage;
