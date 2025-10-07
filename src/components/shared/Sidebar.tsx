"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, FileText, LogOut, Menu, Trash2, Loader2, Upload } from "lucide-react";
import { toast } from "sonner";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
      });
      const data = await res.json();

      if (data.success) {
        toast.success(data.message || "User logged out successfully");
        window.location.reload()
      } else {
        toast.error(data.message || "Logout failed");
      }
    } catch (error) {
      console.error("Error: Logout failed ", error);
    } finally {
      setIsLoggingOut(false)
    }
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        <Menu className="w-5 h-5" />
      </Button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-muted border-r border-border px-6 md:py-6 py-16 flex flex-col space-y-6 transform transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:flex`}
      >
        <nav className="flex flex-col space-y-2 flex-1">
          <Button
            asChild
            variant="default"
            size="lg"
            className="justify-start dark:text-black font-semibold cursor-pointer"
          >
            <Link href="/" onClick={() => setOpen(false)}>
              <Home className="w-5 h-5 mr-3" />
              Home
            </Link>
          </Button>

          <Button
            asChild
            variant="default"
            size="lg"
            className="justify-start dark:text-black font-semibold cursor-pointer"
          >
            <Link
              href="/admin/dashboard/create-blog"
              onClick={() => setOpen(false)}
            >
              <FileText className="w-5 h-5 mr-3" />
              Create Blog
            </Link>
          </Button>

          <Button
            asChild
            variant="default"
            size="lg"
            className="justify-start dark:text-black font-semibold cursor-pointer"
          >
            <Link
              href="/admin/dashboard/delete-blog"
              onClick={() => setOpen(false)}
            >
              <Trash2 className="w-5 h-5 mr-3" />
              Delete Blog
            </Link>
          </Button>

          <Button
            asChild
            variant="default"
            size="lg"
            className="justify-start dark:text-black font-semibold cursor-pointer"
          >
            <Link
              href="/admin/dashboard/update-blog"
              onClick={() => setOpen(false)}
            >
              <Upload className="w-5 h-5 mr-3" />
              Update Blog
            </Link>
          </Button>
        </nav>

        <Button
          variant="destructive"
          size="lg"
          className="mt-auto justify-start text-background cursor-pointer font-semibold"
          onClick={handleLogout}
        >
          {
            isLoggingOut ? (<Loader2 className="w-5 h-5 animate-spin" />) : (
              <>
              <LogOut className="w-5 h-5 mr-3" /> Logout
              </>
            )
          }
        </Button>
      </div>
    </>
  );
}
