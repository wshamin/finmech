import { AuthRequest, AuthResponse, FormDataEntryValue, UserRequest, UserResponse } from '@/types/auth';
import { cookies } from 'next/headers';

export const authenticateUser = async (data: FormData): Promise<string | null> => {
  const username: FormDataEntryValue | null = data.get('username');
  const password: FormDataEntryValue | null = data.get('password');

  if (!username || !password) {
    console.error('Username or password missing');
    return null;
  }

  const authData: AuthRequest = {
    username: username,
    password: password,
  };

  try {
    const response: Response = await fetch('http://localhost:8080/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authData),
    });

    if (!response.ok) {
      console.error('Authentication failed:', response.statusText);
      return null;
    }

    const data = (await response.json()) as AuthResponse;
    const { accessToken, refreshToken } = data;

    cookies().set('accessToken', accessToken);
    cookies().set('refreshToken', refreshToken);
    // cookies().set('accessToken', accessToken, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: 'strict',
    //   maxAge: 3600,
    // });
    // cookies().set('refreshToken', refreshToken, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: 'strict',
    //   maxAge: 604800,
    // });

    return accessToken;
  } catch (error) {
    console.error('Error sending data:', error);
    return null;
  }
};

export const registerUser = async (data: FormData): Promise<void> => {
  const username: FormDataEntryValue | null = data.get('username');
  const email: FormDataEntryValue | null = data.get('email');
  const password: FormDataEntryValue | null = data.get('password');

  if (!username || !email || !password) {
    console.error('Registration data missing');
    return;
  }

  const registrationData: UserRequest = {
    username: username,
    email: email,
    password: password,
  };

  try {
    const response: Response = await fetch('http://localhost:8080/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    });

    if (!response.ok) {
      console.error('Registration failed:', response.statusText);
      return;
    }

    const data = (await response.json()) as UserResponse;
    console.log('Server response:', data);
  } catch (error) {
    console.error('Error sending data:', error);
  }
};
