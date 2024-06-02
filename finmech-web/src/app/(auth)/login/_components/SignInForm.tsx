import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AuthButton from '../../_components/AuthButton';
import { authenticateUser } from '@/services/authService';

interface SignInFormProps {}

const SignInForm: FC<SignInFormProps> = () => {
  const handleSubmit = async (data: FormData): Promise<void> => {
    'use server';
    await authenticateUser(data);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image className="mx-auto w-1/2" height={1024} width={1024} src="/logo.png" alt="finmech logo" />
          <h2 className="my-5 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Explore wealth way
          </h2>
          <p className="my-6 text-center">Login your account</p>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-10" action={handleSubmit}>
            <div>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  autoComplete="Username"
                  required
                  className="ease block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-gray-200
                  transition duration-500 placeholder:text-gray-400 hover:ring-gray-600 focus:ring-1
                  focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-[-1.5rem] flex items-center justify-between">
                <div className="text-sm">
                  <a href="#" className="font-semibold text-gray-900">
                    Forgot password?
                  </a>
                </div>
              </div>
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
              <div className="mt-2">
                <AuthButton text="Sign In" />
              </div>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link className="font-semibold leading-6 text-gray-900" href={'/register'}>
              Start a 14 day free trial
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
