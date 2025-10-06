import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;

  if (!token && request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }
  if (token && request.nextUrl.pathname.startsWith('/admin-logout')) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/admin/dashboard/:path*", "/admin-login"],
};
