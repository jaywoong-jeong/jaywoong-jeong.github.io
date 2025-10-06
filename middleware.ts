import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isArtist = pathname.startsWith('/artist')
  const theme = isArtist ? 'dark' : 'light'

  // Forward theme to the SSR request so server components can read it immediately
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-theme', theme)
  const response = NextResponse.next({ request: { headers: requestHeaders } })

  // Also set a cookie for client navigations and persistence
  response.cookies.set('theme', theme, { path: '/' })

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
}


