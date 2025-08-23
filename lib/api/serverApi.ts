import { cookies } from 'next/headers';
import { nextServer } from './api';
import { LogInUser } from '@/types/user';

export async function serverSession() {
  try {
    const cookieStore = await cookies();
    const res = await nextServer.get('/auth/session', {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    return res;
  } catch (error) {
    throw error;
  }
}

export async function getServerMe(): Promise<LogInUser> {
  try {
    const cookieStore = await cookies();
    const res = await nextServer.get('/users/me', {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}
