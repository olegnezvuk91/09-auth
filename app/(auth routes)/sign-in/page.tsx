'use client';
import { AuthRequest } from '@/types/user';
import css from './SignInPage.module.css';
import { login } from '@/lib/api/clientApi';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/authStore';

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (formData: FormData) => {
    try {
      const data = Object.fromEntries(formData) as unknown as AuthRequest;
      const res = await login(data);
      if (res) {
        setUser(res);
        router.push('/profile');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Oops... some error');
    }
  };
  return (
    <>
      <main className={css.mainContent}>
        <form className={css.form} action={handleSubmit}>
          <h1 className={css.formTitle}>Sign in</h1>

          <div className={css.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className={css.input}
              required
            />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              className={css.input}
              required
            />
          </div>

          <div className={css.actions}>
            <button type="submit" className={css.submitButton}>
              Log in
            </button>
          </div>
          {error && <p className={css.error}>{error}</p>}
        </form>
      </main>
    </>
  );
}
