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

// export async function getServerMe(): Promise<LogInUser> {
//   const cookieStore = await cookies();
//   const res = await nextServer.get('/users/me', {
//     headers: {
//       Cookie: cookieStore.toString(),
//     },
//   });
//   return res.data;
// }

export const getServerMe = async () => {
  const cookieStore = await cookies();
  console.log('SERVER COOKIE:', cookieStore.getAll());
  const response = await nextServer.get<LogInUser>('/users/me', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response.data;
};
