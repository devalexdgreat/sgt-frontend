// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('accessToken'); // Assuming the token is stored in cookies

  // If the token is present, allow the user to proceed to the requested page
  if (token) {
    return NextResponse.next();
  }

  // If the token is missing, redirect to the login page with a redirect back to the requested URL
  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

// Define which routes to apply the middleware to
export const config = {
  matcher: ['/admin/streetfood', '/admin/dashboard', '/admin/contestants', '/admin/seasons'], // Apply to specific pages
};
