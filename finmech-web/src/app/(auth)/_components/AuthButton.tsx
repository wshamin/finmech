import { FC } from 'react';

interface AuthButtonProps {
  text: string;
}

const AuthButton: FC<AuthButtonProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="flex w-full justify-center rounded-3xl border border-gray-400 bg-transparent px-3 py-4 text-sm
      font-semibold leading-6 text-gray-900 transition-colors duration-1000 ease-in-out hover:border-gray-900
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
    >
      {text}
    </button>
  );
};

export default AuthButton;
