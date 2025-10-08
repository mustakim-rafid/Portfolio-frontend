"use client";

import { Button } from "@/components/ui/button";
import { IBlog } from "@/types";
import { Edit } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateBlog } from "@/actions/update";
import { Textarea } from "@/components/ui/textarea";

const UpdateCard = ({
  updateCardItems,
}: {
  updateCardItems: Pick<IBlog, "id" | "title" | "thumbnail" | "content">;
}) => {

  return (
    <div className="flex items-center justify-between p-4 bg-background border border-muted rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-5">
        <Image
          src={updateCardItems.thumbnail}
          alt="Project thumbnail"
          width={60}
          height={40}
          className="rounded-xs object-cover"
        />
        <h3 className="text-lg font-semibold">{updateCardItems.title}</h3>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="dark:text-black font-semibold cursor-pointer">Edit <Edit /></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form action={updateBlog}>
            <DialogHeader className="mb-3">
              <DialogTitle>Edit blog</DialogTitle>
              <DialogDescription>
                Make changes to the blog title and content
              </DialogDescription>
            </DialogHeader>
            <input type="hidden" name="id" value={updateCardItems.id} />
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={updateCardItems.title}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="content">Description</Label>
                <Textarea
                  id="content"
                  name="content"
                  defaultValue={updateCardItems.content}
                />
              </div>
            </div>
            <DialogFooter className="mt-3">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  type="submit"
                  className="dark:text-black font-semibold cursor-pointer"
                >
                  Save changes
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateCard;
