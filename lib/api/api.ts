import axios from 'axios';

export const nextServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + '/api',
  withCredentials: true,
});

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});
