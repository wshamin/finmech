import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AuthButton from '../../_components/AuthButton';
import { registerUser } from '@/services/authService';

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = () => {
  const handleSubmit = async (data: FormData): Promise<void> => {
    'use server';
    await registerUser(data);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image className="mx-auto w-1/2" height={1024} width={1024} src="/logo.png" alt="Your Company" />
          <h2 className="my-5 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-10" action={handleSubmit}>
            <div>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  autoComplete="username"
                  required
                  className="ease block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-gray-200
                  transition duration-500 placeholder:text-gray-400 hover:ring-gray-600 focus:ring-1
                  focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  className="ease block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-gray-200
                  transition duration-500 placeholder:text-gray-400 hover:ring-gray-600 focus:ring-1
                  focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  className="ease block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-gray-200
                  transition duration-500 placeholder:text-gray-400 hover:ring-gray-600 focus:ring-1
                  focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <AuthButton text="Create account" />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already registered?{' '}
            <Link className="font-semibold leading-6 text-gray-900" href={'/login'}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
