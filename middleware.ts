import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Supabase session cookie check
  const accessToken = req.cookies.get("sb-access-token")?.value;

  // Agar /admin access kar raha hai aur login nahi hai → redirect
  if (req.nextUrl.pathname.startsWith("/admin") && !accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}