import {
  AuthRequest,
  AuthResponse,
  UserRequest,
  UserResponse,
} from '@/types/auth';
import { cookies } from 'next/headers';

export const authenticateUser = async (data: FormData): Promise<void> => {
  const username: FormDataEntryValue | null = data.get('username');
  const password: FormDataEntryValue | null = data.get('password');

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

    const data: AuthResponse = await response.json();
    const { accessToken, refreshToken } = data;

    cookies().set('accessToken', accessToken);
    cookies().set('refreshToken', refreshToken);
    // cookies().set('accessToken', accessToken, {
    //   secure: true,
    //   sameSite: 'strict',
    //   expires: 1,
    // });
    // cookies().set('refreshToken', refreshToken, {
    //   secure: true,
    //   sameSite: 'strict',
    //   expires: 7,
    // });
    console.log('Ответ сервера:', data);
  } catch (error) {
    console.error('Ошибка при отправке данных:', error);
  }
};

export const registerUser = async (data: FormData): Promise<void> => {
  const username: FormDataEntryValue | null = data.get('username');
  const email: FormDataEntryValue | null = data.get('email');
  const password: FormDataEntryValue | null = data.get('password');

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

    const data: Promise<UserResponse> = await response.json();
    console.log('Ответ сервера:', data);
  } catch (error) {
    console.error('Ошибка при отправке данных:', error);
  }
};
