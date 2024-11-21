import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Header, Title, Grid, FilterContainer, FilterButton } from './styles';
import MovieCard from '../../components/MovieCard';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('popular'); // popular, top_rated, upcoming, now_playing

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${filter}?api_key=${apiKey}&language=en-US&page=1`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [filter]);

  return (
    <Container>
      <Header>
        <Title>Movies</Title>
        <FilterContainer>
          <FilterButton
            active={filter === 'popular'}
            onClick={() => setFilter('popular')}
          >
            Popular
          </FilterButton>
          <FilterButton
            active={filter === 'top_rated'}
            onClick={() => setFilter('top_rated')}
          >
            Top Rated
          </FilterButton>
          <FilterButton
            active={filter === 'upcoming'}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </FilterButton>
          <FilterButton
            active={filter === 'now_playing'}
            onClick={() => setFilter('now_playing')}
          >
            Now Playing
          </FilterButton>
        </FilterContainer>
      </Header>
      <Grid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} content={movie} type="movie" />
        ))}
      </Grid>
    </Container>
  );
};

export default Movies;
