"use client";

import {
  FileTextIcon,
  FolderIcon,
  Layout,
  Loader2,
  UserIcon,
  ZapIcon,
} from "lucide-react";

import Logo from "@/components/shared/navbar/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Navigation links array
const navigationLinks = [
  { href: "/about", label: "About", icon: UserIcon },
  { href: "/project", label: "Projects", icon: FolderIcon },
  { href: "/skill", label: "Skills", icon: ZapIcon },
  { href: "/blog", label: "Blogs", icon: FileTextIcon },
];

export default function NavClient({ isAuth }: { isAuth: boolean }) {
  const pathname = usePathname()
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
        window.location.reload();
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
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          asChild
                          className="flex-row items-center gap-2 py-1.5"
                        >
                          <Link href={link.href}>
                            <Icon
                              size={16}
                              className="text-muted-foreground/80"
                              aria-hidden="true"
                            />
                            <span>{link.label}</span>
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                  {isAuth && (
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuLink
                        asChild
                        className="flex-row items-center gap-2 py-1.5"
                      >
                        <Link href="/admin/dashboard">
                          <Layout
                            size={16}
                            className="text-muted-foreground/80"
                            aria-hidden="true"
                          />
                          <span>Admin Dashboard</span>
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-2.5">
              {navigationLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      asChild
                      href={link.href}
                      className={cn(
                        "text-foreground hover:text-primary flex-row items-center gap-2 py-1.5 font-medium",
                        pathname.startsWith(link.href) ? "bg-muted" : ""
                      )}
                    >
                      <Link href={link.href}>
                        <Icon
                          size={16}
                          className="text-muted-foreground/80"
                          aria-hidden="true"
                        />
                        <span>{link.label}</span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
              {isAuth && (
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    href="/admin/dashboard"
                    className="text-foreground hover:text-primary flex-row items-center gap-2 py-1.5 font-medium"
                  >
                    <Link href="/admin/dashboard">
                      <Layout
                        size={16}
                        className="text-muted-foreground/80"
                        aria-hidden="true"
                      />
                      <span>Admin Dashboard</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Middle side: Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-primary hover:text-primary/90">
            <Logo />
          </Link>
        </div>

        {/* Right side: Actions */}
        <div className="flex flex-1 items-center justify-end gap-4">
          {isAuth ? (
            <>
              <Button
                onClick={handleLogout}
                variant="destructive"
                className="dark:text-black font-semibold cursor-pointer"
              >
                {isLoggingOut ? (<Loader2 className="w-5 h-5 animate-spin" />) : "Logout"}
              </Button>
            </>
          ) : (
            <Link href="/admin-login">
              <Button className="dark:text-black font-semibold cursor-pointer">
                Admin Login
              </Button>
            </Link>
          )}
          {/* Toggle button */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
