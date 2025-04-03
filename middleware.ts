import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Check if the request is for the admin dashboard
  if (request.nextUrl.pathname.startsWith("/admin/dashboard")) {
    // Check if the user is authenticated
    const isAuthenticated =
      request.cookies.has("admin_authenticated") && request.cookies.get("admin_authenticated")?.value === "true"

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
}

