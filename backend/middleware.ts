// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('Middleware running for:', request.nextUrl.pathname)

  // Handle preflight OPTIONS request
  if (request.method === 'OPTIONS') {
    const preflight = new NextResponse(null, { status: 200 })
    preflight.headers.set('Access-Control-Allow-Origin', '*')
    preflight.headers.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS')
    preflight.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    return preflight
  }

  // Add CORS Headers to all other requests
  const response = NextResponse.next()
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  return response
}

// This is how you control where the middleware runs
export const config = {
  matcher: ['/:path*'], // Runs for all routes under /api/
}