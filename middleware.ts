import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const token = request.cookies.get("x-access-token")
  const path = request.nextUrl.pathname
  
  const isPathProtected = path === "/profile"

  if(isPathProtected && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  if(!isPathProtected && token) {
    return NextResponse.redirect(new URL("/articles", request.url))
  }
}
 
export const config = {
  matcher: [
    "/auth/login",
    "/auth/signup",
    "/profile",
  ]
}