import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Title, Grid, NoResults } from './styles';
import MovieCard from '../../components/MovieCard';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        
        setResults(response.data.results.filter(item => item.media_type !== 'person'));
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchResults();
  }, [query]);

  if (!query) return null;

  return (
    <Container>
      <Title>Search Results for "{query}"</Title>
      {results.length > 0 ? (
        <Grid>
          {results.map((item) => (
            <MovieCard
              key={item.id}
              content={item}
              type={item.media_type}
            />
          ))}
        </Grid>
      ) : (
        <NoResults>No results found for "{query}"</NoResults>
      )}
    </Container>
  );
};

export default Search;
