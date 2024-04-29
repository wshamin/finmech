'use client';
import { useState } from 'react';

import RegisterForm from './components/RegisterForm';
import SignInForm from './components/SignInForm';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const switchToLogin = () => {
    setIsLogin(true);
  };

  const switchToRegister = () => {
    setIsLogin(false);
  };

  return (
    <div>
      {isLogin ? (
        <SignInForm onSwitchToRegister={switchToRegister} />
      ) : (
        <RegisterForm onSwitchToLogin={switchToLogin} />
      )}
    </div>
  );
}
