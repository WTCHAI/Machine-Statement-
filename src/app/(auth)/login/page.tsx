// LoginPage.js

import Head from 'next/head';
import { LoginForm } from '../Components/_login/loginForm';

export default function LoginPage() {
  return (
    <main className="w-[100vw] h-[100vh]">
      <LoginForm />
    </main>
  );
}
