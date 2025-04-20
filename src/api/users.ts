import api from './axios';

export const getUsers = () =>
  api.get('/users').then(res => res.data);

export const getUserById = (id: string) =>
  api.get(`/users/${id}`).then(res => res.data);

export const getUserPosts = (id: string) =>
  api.get(`/posts?userId=${id}`).then(res => res.data);

export const getUserAlbums = (id: string) =>
  api.get(`/albums?userId=${id}`).then(res => res.data);

export const getUserTodos = (id: string) =>
  api.get(`/todos?userId=${id}`).then(res => res.data);

export const getPhotosByAlbumId = (id: string) =>
  api.get(`/photos?albumId=${id}`).then(res => res.data);

export const getPostsByUserId = (id: string) =>
  api.get(`/posts?userId=${id}`).then(res => res.data);
