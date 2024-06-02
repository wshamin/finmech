import { NextRequest, NextResponse } from 'next/server';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { JWTPayload, jwtVerify } from 'jose';

const BASE_URL: string = 'http://localhost:8080';
const LOGIN_URL: string = 'http://localhost:3000/login';
const SECRET_KEY: string | undefined = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error('SECRET_KEY environment variable is not set');
}

const SECRET_KEY_BYTES: Uint8Array = new Uint8Array(Buffer.from(SECRET_KEY, 'base64'));

async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY_BYTES, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    console.error('Failed to verify token:', error);
    return null;
  }
}

async function refreshAccessToken(refreshToken: string): Promise<string | null> {
  try {
    const response: Response = await fetch(`${BASE_URL}/api/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
      signal: new AbortController().signal, // Добавление тайм-аута при необходимости
    });

    if (response.ok) {
      const data = await response.json();
      return data.accessToken;
    } else {
      console.error('Failed to refresh access token, response not OK');
      return null;
    }
  } catch (error) {
    console.error('Failed to refresh access token:', error);
    return null;
  }
}

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const accessToken: RequestCookie | undefined = req.cookies.get('accessToken');
  const refreshToken: RequestCookie | undefined = req.cookies.get('refreshToken');

  if (!accessToken || !accessToken.value) {
    return NextResponse.redirect(LOGIN_URL);
  }

  let payload: JWTPayload | null = await verifyToken(accessToken.value);

  if (!payload) {
    if (refreshToken && refreshToken.value) {
      const newAccessToken: string | null = await refreshAccessToken(refreshToken.value);

      if (newAccessToken) {
        const response: NextResponse = NextResponse.next();
        response.cookies.set('accessToken', newAccessToken, { httpOnly: true });
        // response.cookies.set('accessToken', newAccessToken, { httpOnly: true, secure: true });
        return response;
      }
    }
    return NextResponse.redirect(LOGIN_URL);
  }

  return NextResponse.next();
}

export const config: { matcher: string[] } = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login (login page)
     * - register (registration page)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|login|register).*)',
  ],
};
