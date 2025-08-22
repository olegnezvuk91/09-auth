import Image from 'next/image';
import css from './ProfilePage.module.css';
import Link from 'next/link';

export default async function ProfilePage() {
  return (
    <>
      <main className={css.mainContent}>
        <div className={css.profileCard}>
          <div className={css.header}>
            <h1 className={css.formTitle}>Profile Page</h1>
            <Link href="/profile/edit" className={css.editProfileButton}>
              Edit Profile
            </Link>
          </div>
          <div className={css.avatarWrapper}>
            <Image
              src=""
              alt="User Avatar"
              width={120}
              height={120}
              className={css.avatar}
            />
          </div>
          <div className={css.profileInfo}>
            <p>Username:</p>
            <p>Email: </p>
          </div>
        </div>
      </main>
    </>
  );
}
