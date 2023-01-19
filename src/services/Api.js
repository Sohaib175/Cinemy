import {request} from './ApiHandler';
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = 'f688da2278a86047fc0eee58b23a3ed0';
export const IMAGE_POSTER_URL = 'https://image.tmdb.org/t/p/original';

export const API = {
  discover: () => request.get(`/discover/movie?api_key=${API_KEY}`),
  geners: () => request.get(`/genre/movie/list?api_key=${API_KEY}`),
};

// https://api.themoviedb.org/3//discover/movie?api_key=f688da2278a86047fc0eee58b23a3ed0
