import { FC, FormEvent, useState } from 'react';
import Image from 'next/image';
import AuthButton from '@/app/login/components/AuthButton';

interface RegisterFormProps {
  onSwitchToLogin: () => void; // Функция, которая вызывается при клике на кнопку авторизации
}

interface RegistrationData {
  name: string;
  email: string;
  password: string;
}

const RegisterForm: FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const registrationData: RegistrationData = { name, email, password };

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });
      const data = await response.json();
      console.log('Ответ сервера:', data); // Логирование ответа сервера
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto w-1/2"
            height={1024}
            width={1024}
            src="/logo.png"
            alt="Your Company"
          />
          <h2 className="my-5 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="ease block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-gray-200 transition duration-500 placeholder:text-gray-400 hover:ring-gray-600 focus:ring-1 focus:ring-gray-600 sm:text-sm sm:leading-6"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ease block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-gray-200 transition duration-500 placeholder:text-gray-400 hover:ring-gray-600 focus:ring-1 focus:ring-gray-600 sm:text-sm sm:leading-6"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="ease block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-gray-200 transition duration-500 placeholder:text-gray-400 hover:ring-gray-600 focus:ring-1 focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <AuthButton text="Create account" />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already registered?{' '}
            <button
              onClick={onSwitchToLogin}
              className="font-semibold leading-6 text-gray-900"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
