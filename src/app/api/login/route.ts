import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    const response = NextResponse.json(data);

    if (data.success) {
      response.cookies.set({
        name: "accessToken",
        value: data.data.accessToken,
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60,
      });
    }

    return response;
  } catch (error) {
    console.error("Error while login", error);
  }
}
