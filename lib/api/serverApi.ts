import { cookies } from 'next/headers';
import { nextServer } from './api';
import { User } from '@/types/user';

import { Note } from '@/types/note';

export const serverSession = async () => {
  const cookieStore = await cookies();
  const response = await nextServer.get('/auth/session', {
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

export const fetchNoteById = async (id: string): Promise<Note> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};
