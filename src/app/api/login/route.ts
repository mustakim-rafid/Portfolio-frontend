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
    const data = await res.json()

    const setCookie = res.headers.get('set-cookie')

    const headers = new Headers()

    if (setCookie) {
      headers.set('set-cookie', setCookie)
    }

    return NextResponse.json(JSON.stringify(data), {
      status: res.status,
      headers
    })
  } catch (error) {
    console.error("Error while login", error);
  }
}
