import Link from 'next/link';
import css from './AuthNavigation.module.css';
import { useRouter } from 'next/navigation';

export default function AuthNavigation() {
  const isAuthenticated = useAuthUser((state) => state.isAuthenticated);
  const user = useAuthUser((state) => state.user);
  const clearIsAuthenticated = useAuthUser(
    (state) => state.clearIsAuthenticated,
  );
  const router = useRouter();

  async function handleLogout() {
    await logout();
    clearIsAuthenticated();
    router.push('/sign-in');
  }
  return (
    <>
      <li className={css.navigationItem}>
        <Link href="/profile" prefetch={false} className={css.navigationLink}>
          Profile
        </Link>
      </li>

      <li className={css.navigationItem}>
        <p className={css.userEmail}>User email</p>
        <button className={css.logoutButton}>Logout</button>
      </li>

      <li className={css.navigationItem}>
        <Link href="/sign-in" prefetch={false} className={css.navigationLink}>
          Login
        </Link>
      </li>

      <li className={css.navigationItem}>
        <Link href="/sign-up" prefetch={false} className={css.navigationLink}>
          Sign up
        </Link>
      </li>
    </>
  );
}
