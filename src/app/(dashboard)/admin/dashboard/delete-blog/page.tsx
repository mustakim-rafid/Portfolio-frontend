import DeleteCard from "@/components/module/blog/DeleteCard";
import { IBlog } from "@/types";

const DeleteBlogPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`);
  const { data } = await res.json();

  return (
    <div className="space-y-4 md:p-4">
      {data.map((blog: IBlog) => (
        <DeleteCard
          key={blog.id}
          deleteCardItems={{
            id: blog.id,
            title: blog.title,
            thumbnail: blog.thumbnail
          }}
        />
      ))}
    </div>
  );
};

export default DeleteBlogPage;
