import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jose from 'jose';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  //Check for cookie
  const cookie =cookies().get('Authorization');
  if(!cookie){
    return NextResponse.redirect(new URL('/login', request.url))
  }
  

  //validate
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  
  try{
    
    const { payload} = await jose.jwtVerify(cookie.value, secret, {});
    
  }catch(err){
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}