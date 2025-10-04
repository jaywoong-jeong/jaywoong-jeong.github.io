import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const response = NextResponse.next()

  // Force theme by route: dark for /artist, light otherwise
  if (pathname.startsWith('/artist')) {
    response.cookies.set('theme', 'dark', { path: '/' })
  } else {
    response.cookies.set('theme', 'light', { path: '/' })
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
}


