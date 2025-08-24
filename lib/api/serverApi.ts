import { cookies } from 'next/headers';
import { nextServer } from './api';
import { User } from '@/types/user';
import { CheckSessionRes } from './clientApi';

export const serverSession = async () => {
  const cookieStore = await cookies();
  const response = await nextServer.get<CheckSessionRes>('/auth/session', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response;
};

export const getServerMe = async () => {
  const cookieStore = await cookies();

  const response = await nextServer.get<User>('/users/me', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response.data;
};
