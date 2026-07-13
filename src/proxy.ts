import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const goneRoutes = new Set(['/investment-termsheet', '/capital']);

export function proxy(request: NextRequest) {
  if (goneRoutes.has(request.nextUrl.pathname)) {
    return new NextResponse('Gone', { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/investment-termsheet', '/capital'],
};
