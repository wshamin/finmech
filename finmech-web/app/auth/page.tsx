'use client'
import { useState } from 'react';

import SignInForm from './components/SignInForm';
import RegisterForm from './components/RegisterForm';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    const switchToRegister = () => setIsLogin(false);
    const switchToLogin = () => setIsLogin(true);

    return (
        <div>
            {isLogin ? (
                <SignInForm onSwitchToRegister={switchToRegister} />
            ) : (
                <RegisterForm onSwitchToLogin={switchToLogin} />
            )}
        </div>
    )
}
