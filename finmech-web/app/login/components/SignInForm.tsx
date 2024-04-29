import { FC } from 'react';
import Image from 'next/image';

interface SignInFormProps {
  onSwitchToRegister: () => void; // Функция, которая вызывается при клике на кнопку регистрации
}

const SignInForm: FC<SignInFormProps> = ({ onSwitchToRegister }) => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto w-1/2"
            height={1024}
            width={1024}
            src="/logo.png"
            alt="finmech logo"
          />
          <h2 className="my-5 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Explore wealth way
          </h2>
          <p className="my-6 text-center">Login your account</p>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-10" action="#" method="POST">
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  className="ease block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-gray-200 transition duration-500 placeholder:text-gray-400 hover:ring-gray-600 focus:ring-1 focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-[-1.5rem] flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-gray-900 hover:text-indigo-500"
                  >
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
                  className="ease block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-gray-200 transition duration-500 placeholder:text-gray-400 hover:ring-gray-600 focus:ring-1 focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-3xl border-2 border-gray-500 bg-transparent px-3 py-4 text-sm font-semibold leading-6 text-gray-900 transition-shadow duration-500 ease-in-out hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <button
              onClick={onSwitchToRegister}
              className="font-semibold leading-6 text-gray-900 hover:text-gray-900"
            >
              Start a 14 day free trial
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
