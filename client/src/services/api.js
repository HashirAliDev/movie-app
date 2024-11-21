import axios from 'axios';
import { BASE_URL, API_KEY, ENDPOINTS } from '../config/api.config';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrending = () => api.get(ENDPOINTS.trending);
export const getPopularMovies = () => api.get(ENDPOINTS.popularMovies);
export const getTopRatedMovies = () => api.get(ENDPOINTS.topRatedMovies);
export const getPopularTVShows = () => api.get(ENDPOINTS.popularTVShows);
export const getTopRatedTVShows = () => api.get(ENDPOINTS.topRatedTVShows);

export const getMovieDetails = (id) => api.get(ENDPOINTS.movieDetails(id));
export const getMovieCredits = (id) => api.get(ENDPOINTS.movieCredits(id));
export const getSimilarMovies = (id) => api.get(ENDPOINTS.movieSimilar(id));

export const searchMulti = (query) =>
  api.get(ENDPOINTS.search, {
    params: {
      query,
    },
  });

export default api;
