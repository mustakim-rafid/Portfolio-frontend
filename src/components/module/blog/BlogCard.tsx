"use client";
import { cn } from "@/lib/utils";
import { IBlog } from "@/types";
import Link from "next/link";

export function BlogCard({ BlogContent }: { BlogContent: IBlog }) {
  const date = new Date(BlogContent.createdAt);
  const formatted = date
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    .split(" ");

  const createdAt = `${formatted[0]} ${formatted[1].replace(",", "")}, ${
    formatted[2]
  }`;

  return (
    <div>
      <Link href={`/blog/${BlogContent.uniqueTitle}`}>
        <div
          className={cn(
            " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
            "bg-cover bg-center transition-transform duration-700 hover:scale-105"
          )}
          style={{ backgroundImage: `url(${BlogContent.thumbnail})` }}
        >
          <div className="flex flex-row items-center space-x-4 z-10">
            <img
              height="100"
              width="100"
              alt="Avatar"
              src={
                BlogContent.owner?.avatar ||
                "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
              }
              className="h-10 w-10 rounded-full border-2 object-cover"
            />
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10">
                {BlogContent.owner.name}
              </p>
              <p className="text-sm text-gray-400">{createdAt}</p>
            </div>
          </div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              {BlogContent.title}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
