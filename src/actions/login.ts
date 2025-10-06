"use server";

import { loginSchema } from "@/components/module/auth/LoginForm";
import { NextResponse } from "next/server";
import z from "zod";

export const adminLogin = async (formData: z.infer<typeof loginSchema>) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await res.json()

  return data
};
