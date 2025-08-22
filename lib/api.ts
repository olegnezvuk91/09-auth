import type { CreateNote, Note } from '@/types/note';
import { nextServer } from './api/api';
import toast from 'react-hot-toast';

export interface FetchNotesRes {
  notes: Note[];
  totalPages: number;
}

export interface ParamsTypes {
  page: number;
  perPage: number;
  search?: string;
  tag?: string;
}

export async function fetchNotes(
  search: string,
  page: number,
  tag: string,
): Promise<FetchNotesRes | undefined> {
  try {
    const perPage = 12;
    const params: ParamsTypes = {
      tag,
      page,
      perPage,
    };

    if (search?.trim()) {
      params.search = search;
    }
    if (tag?.trim()) {
      params.tag = tag;
    }

    const response = await nextServer.get<FetchNotesRes>('/notes', {
      params,
    });

    return response.data;
  } catch (error) {
    toast.error('Something went wrong...Try again, please');
  }
}

export async function createNote({
  title,
  content,
  tag,
}: CreateNote): Promise<Note | undefined> {
  try {
    const params: CreateNote = {
      title,
      content,
      tag,
    };
    const response = await nextServer.post<Note>('/notes', params);
    return response.data;
  } catch (error) {
    toast.error('Something went wrong...Try again, please');
  }
}

export async function deleteNote(id: string): Promise<Note | undefined> {
  try {
    const response = await nextServer.delete<Note>(`notes/${id}`);
    return response.data;
  } catch (error) {
    toast.error('Something went wrong...Try again, please');
  }
}

export async function fetchNoteById(id: string): Promise<Note | undefined> {
  try {
    const response = await nextServer.get<Note>(`notes/${id}`);
    return response.data;
  } catch (error) {
    toast.error('Something went wrong...Try again, please');
  }
}
