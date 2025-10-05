"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, FileText, LogOut, Menu } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

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
          <Button asChild variant="default" size="lg" className="justify-start dark:text-black font-semibold cursor-pointer">
            <Link href="/admin/dashboard" onClick={() => setOpen(false)}>
              <Home className="w-5 h-5 mr-3" />
              Welcome
            </Link>
          </Button>

          <Button asChild variant="default" size="lg" className="justify-start dark:text-black font-semibold cursor-pointer">
            <Link href="/admin/dashboard/create-blog" onClick={() => setOpen(false)}>
              <FileText className="w-5 h-5 mr-3" />
              Create Blog
            </Link>
          </Button>
        </nav>

        <Button
          variant="destructive"
          size="lg"
          className="mt-auto justify-start text-background cursor-pointer font-semibold"
          onClick={() => alert("Logging out...")}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </>
  );
}
