import { NextRequest, NextResponse } from 'next/server';

const ADMIN_TOKEN =
  process.env.NEXT_PUBLIC_ADMIN_TOKEN || 'admin_default_token';

export function middleware(request: NextRequest) {
  const cookieHeader = request.headers.get('cookie');
  let token: string | null = null;

  if (cookieHeader) {
    const cookies = cookieHeader.split(';');
    const hiringAppCookie = cookies.find((cookie) =>
      cookie.trim().startsWith('hiring-app='),
    );

    if (hiringAppCookie) {
      token = hiringAppCookie.trim().split('=')[1];
    }
  }

  const isAuthPage = request.nextUrl.pathname.startsWith('/auth');
  const isUserPath = request.nextUrl.pathname.startsWith('/dashboard');
  const isAdminPath = request.nextUrl.pathname.startsWith('/admin');
  // const isPublicPath =
  //   request.nextUrl.pathname === '/auth/login' ||
  //   request.nextUrl.pathname === '/auth/register';

  // check user already login & akses halaman /auth
  if (token && isAuthPage) {
    if (token === ADMIN_TOKEN) {
      return NextResponse.redirect(new URL('/admin/job', request.url));
    } else {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  //  protected page
  if (!token && !isAuthPage) {
    if (isAdminPath) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // user access admin page
  if (isAdminPath && token && token !== ADMIN_TOKEN) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // admin access dashboard page
  if (isUserPath && token && token === ADMIN_TOKEN) {
    return NextResponse.redirect(new URL('/admin/job', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/auth/:path*'],
};
