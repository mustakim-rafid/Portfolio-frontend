import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();

    const response = NextResponse.json(data);

    if (data.success) {
      response.cookies.delete("accessToken")
    }

    return response;
  } catch (error) {
    console.error("Error while logout", error);
  }
}
