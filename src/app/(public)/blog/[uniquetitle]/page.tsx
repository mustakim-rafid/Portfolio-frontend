import BlogDetailsCard from "@/components/module/blog/BlogDetailsCard";
import { IBlog } from "@/types";
import { Metadata } from "next";

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`);
  const { data } = await res.json();

  return data.map((blog: IBlog) => ({
    uniquetitle: blog.uniqueTitle,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ uniquetitle: string }>;
}): Promise<Metadata> {
  const { uniquetitle } = await params

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${uniquetitle}`);
  const { data } = await res.json();

  return {
    title: data.title
  }
}

const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ uniquetitle: string }>;
}) => {
  const { uniquetitle } = await params
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${uniquetitle}`);
  const { data } = await res.json();

  return (
    <div className="min-h-screen p-5">
      <BlogDetailsCard BlogContent={data} />
    </div>
  );
};

export default SingleBlogPage;
