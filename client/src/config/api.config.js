export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
export const BACKDROP_SIZE = 'original';
export const POSTER_SIZE = 'w500';

export const ENDPOINTS = {
  trending: '/trending/all/week',
  popularMovies: '/movie/popular',
  topRatedMovies: '/movie/top_rated',
  popularTVShows: '/tv/popular',
  topRatedTVShows: '/tv/top_rated',
  movieDetails: (id) => `/movie/${id}`,
  movieCredits: (id) => `/movie/${id}/credits`,
  movieSimilar: (id) => `/movie/${id}/similar`,
  search: '/search/multi',
};
