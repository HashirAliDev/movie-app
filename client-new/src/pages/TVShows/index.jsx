import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Header, Title, Grid, FilterContainer, FilterButton } from './styles';
import MovieCard from '../../components/MovieCard';

const TVShows = () => {
  const [shows, setShows] = useState([]);
  const [filter, setFilter] = useState('popular'); // popular, top_rated, on_the_air, airing_today

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${filter}?api_key=${apiKey}&language=en-US&page=1`
        );
        setShows(response.data.results);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };

    fetchShows();
  }, [filter]);

  return (
    <Container>
      <Header>
        <Title>TV Shows</Title>
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
            active={filter === 'on_the_air'}
            onClick={() => setFilter('on_the_air')}
          >
            On TV
          </FilterButton>
          <FilterButton
            active={filter === 'airing_today'}
            onClick={() => setFilter('airing_today')}
          >
            Airing Today
          </FilterButton>
        </FilterContainer>
      </Header>
      <Grid>
        {shows.map((show) => (
          <MovieCard key={show.id} content={show} type="tv" />
        ))}
      </Grid>
    </Container>
  );
};

export default TVShows;
