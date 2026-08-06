import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const goneRoutes = new Set(['/investment-termsheet']);
const internalComponentPrefixes = [
  '/aboutUs/',
  '/capital/',
  '/contact/',
  '/impact/',
  '/index/',
  '/iwd/',
  '/legal/',
  '/ourPeople/',
  '/sitemap/',
  '/tenoverten/',
  '/ventures/',
  '/verticals/',
];

export function proxy(request: NextRequest) {
  if (goneRoutes.has(request.nextUrl.pathname)) {
    return new NextResponse('Gone', { status: 410 });
  }

  if (
    internalComponentPrefixes.some((prefix) =>
      request.nextUrl.pathname.startsWith(prefix)
    )
  ) {
    return new NextResponse('Not found', {
      status: 404,
      headers: { 'X-Robots-Tag': 'noindex, nofollow' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/investment-termsheet',
    '/aboutUs/:path*',
    '/capital/:path*',
    '/contact/:path*',
    '/impact/:path*',
    '/index/:path*',
    '/iwd/:path*',
    '/legal/:path*',
    '/ourPeople/:path*',
    '/sitemap/:path*',
    '/tenoverten/:path*',
    '/ventures/:path*',
    '/verticals/:path*',
  ],
};
