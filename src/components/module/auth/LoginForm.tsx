"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (!data?.success) {
        toast.error(data?.message);
      } else {
        toast.success(data?.message || "User logged in successfully");
        router.replace("/admin/dashboard");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error while login ", error);
        toast.error(error?.message || "Error: Login Failed");
      } else {
        console.error("Error while login", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full max-w-2xl"
        >
          <h2 className="text-2xl font-semibold text-foreground text-center">
            Admin Login
          </h2>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-foreground">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-border rounded-md bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-foreground">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="••••••••"
                    className="w-full border border-border rounded-md bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="cursor-pointer dark:text-black font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
      <Link className="text-center" href="/">
        <Button variant="link" className="cursor-pointer">
          Back To Home
        </Button>
      </Link>
    </>
  );
};

export default LoginForm;
