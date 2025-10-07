import { Badge } from "@/components/ui/badge";
import { IBlog } from "@/types";
import Image from "next/image";
import React from "react";

const BlogDetailsCard = ({ BlogContent }: { BlogContent: IBlog }) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-6 bg-background border rounded-lg shadow-sm">
      <div className="w-full aspect-video overflow-hidden rounded-md border">
        <Image
          src={BlogContent.thumbnail}
          alt={BlogContent.title}
          className="object-cover w-full h-full"
          width={1200}
          height={600}
        />
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">
          {BlogContent.title}
        </h1>
        {BlogContent.isFeatured ? (
          <Badge variant="default" className="bg-yellow-400 text-black">
            Featured
          </Badge>
        ) : (
          <Badge variant="destructive" className="bg-yellow-400 text-black">
            Not featured
          </Badge>
        )}
      </div>

      <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground">
        <p className="text-justify">{BlogContent.content}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {BlogContent.tags.map((tag) => (
          <Badge key={Math.random() * 100} variant="secondary" className="text-sm">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default BlogDetailsCard;
