"use client"
import { formAction } from "@/actions/create";
import { useFormStatus } from "react-dom";

const BlogForm = () => {
  return (
    <form action={formAction} className="space-y-6 w-full max-w-2xl">
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-foreground">
          Title
        </label>
        <input
          required
          type="text"
          id="title"
          name="title"
          className="w-full border border-border rounded-md bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Enter blog title"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="content"
          className="text-sm font-medium text-foreground"
        >
          Content
        </label>
        <textarea
          required
          id="content"
          name="content"
          rows={6}
          className="w-full border border-border rounded-md bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="Write your blog content here..."
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="thumbnail"
          className="text-sm font-medium text-foreground"
        >
          Thumbnail Image
        </label>
        <input
          required
          type="file"
          id="thumbnail"
          name="thumbnail"
          accept="image/*"
          className="block w-full text-sm text-muted-foreground file:bg-accent file:text-accent-foreground file:rounded-md file:border-0 file:px-4 file:py-2 file:cursor-pointer"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="tags" className="text-sm font-medium text-foreground">
          Tags
        </label>
        <input
          required
          type="text"
          id="tags"
          name="tags"
          className="w-full border border-border rounded-md bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="e.g. tech, react, nextjs"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          required
          type="checkbox"
          id="isFeatured"
          name="isFeatured"
          value="true"
          className="rounded border-border text-primary focus:ring-ring"
        />
        <label htmlFor="isFeatured" className="text-sm text-foreground">
          Mark as Featured
        </label>
      </div>

      <button
        type="submit"
        className="cursor-pointer dark:text-black font-semibold inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm text-primary-foreground shadow hover:bg-primary/90 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
