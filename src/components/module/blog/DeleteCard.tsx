"use client";

import { Button } from "@/components/ui/button";
import { IBlog } from "@/types";
import { Loader2, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const DeleteCard = ({
  deleteCardItems,
}: {
  deleteCardItems: Pick<IBlog, "id" | "title" | "thumbnail">;
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleBlogDelete = async (id: number) => {
    setIsDeleting(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`,
        {
          method: "DELETE",
          credentials: "include"
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      window.location.reload();
    } catch (error) {
      console.error("Error while deleting blog ", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-background border border-muted rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-5">
        <Image
          src={deleteCardItems.thumbnail}
          alt="Project thumbnail"
          width={60}
          height={40}
          className="rounded-xs object-cover"
        />
        <h3 className="text-lg font-semibold">{deleteCardItems.title}</h3>
      </div>

      <Button
        variant="outline"
        onClick={() => handleBlogDelete(deleteCardItems.id)}
        className="text-destructive hover:text-destructive/80 transition-colors cursor-pointer"
      >
        {isDeleting ? (<Loader2 className="w-5 h-5 animate-spin" />) : (<Trash2 className="h-5 w-5" />)}
      </Button>
    </div>
  );
};

export default DeleteCard;
