import axios from 'axios';
import { MovieResponse, MovieDetails, Credits } from '../types/movie';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getMovies = async (page: number = 1): Promise<MovieResponse> => {
  const response = await api.get<MovieResponse>('/movie/popular', {
    params: { page },
  });
  return response.data;
};

export const searchMovies = async (query: string, page: number = 1): Promise<MovieResponse> => {
  const response = await api.get<MovieResponse>('/search/movie', {
    params: { query, page },
  });
  return response.data;
};

export const getMovieDetails = async (movieId: number): Promise<MovieDetails> => {
  const response = await api.get<MovieDetails>(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCredits = async (movieId: number): Promise<Credits> => {
  const response = await api.get<Credits>(`/movie/${movieId}/credits`);
  return response.data;
};

export const getSimilarMovies = async (movieId: number): Promise<MovieResponse> => {
  const response = await api.get<MovieResponse>(`/movie/${movieId}/similar`);
  return response.data;
};
