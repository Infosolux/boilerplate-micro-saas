import { NextRequest, NextResponse } from 'next/server'
import { getUrl } from './utils/get-url'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('next-auth.session-token')
  const pathname = request.nextUrl.pathname

  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL(getUrl('/app')))
  }

  if (pathname.startsWith('/app') && !token) {
    return NextResponse.redirect(new URL(getUrl('/login')))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}