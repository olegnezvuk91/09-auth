'use client';
import { AuthRequest } from '@/types/user';
import css from './SignInPage.module.css';
import { login } from '@/lib/api/clientsApi';

export default function SignInPage() {
  const handleSubmit = async (formData: FormData) => {
    const data = Object.fromEntries(formData) as unknown as AuthRequest;
    const res = await login(data);
    console.log(res);
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
        </form>
      </main>
    </>
  );
}
