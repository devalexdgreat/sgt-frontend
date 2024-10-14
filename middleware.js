import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('accessToken')?.value; // Get token from cookies
  
  // Skip token check on the login page to avoid interference
  if (request.nextUrl.pathname === '/login') {
    return NextResponse.next();
  }

  // If token exists, allow access
  if (token) {
    return NextResponse.next();
  }

  // If no token, redirect to login with redirect parameter
  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('redirect', request.nextUrl.pathname);

  return NextResponse.redirect(loginUrl);
}

// Define which routes to apply the middleware to
export const config = {
  matcher: ['/admin/streetfood', '/admin/dashboard', '/admin/contestants', '/admin/seasons'], // Apply to specific pages
};
