import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, HeroSection, Title, Grid } from './styles';
import MovieCard from '../../components/MovieCard';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTVShows, setTrendingTVShows] = useState([]);
  const [featuredContent, setFeaturedContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const baseURL = 'https://api.themoviedb.org/3';

        // Fetch trending movies
        const moviesResponse = await axios.get(
          `${baseURL}/trending/movie/week?api_key=${apiKey}`
        );
        setTrendingMovies(moviesResponse.data.results);

        // Fetch trending TV shows
        const tvResponse = await axios.get(
          `${baseURL}/trending/tv/week?api_key=${apiKey}`
        );
        setTrendingTVShows(tvResponse.data.results);

        // Set featured content from trending movies
        setFeaturedContent(moviesResponse.data.results[0]);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <>
      {featuredContent && (
        <HeroSection
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredContent.backdrop_path})`,
          }}
        >
          <div className="hero-content">
            <h1>{featuredContent.title}</h1>
            <p>{featuredContent.overview}</p>
          </div>
        </HeroSection>
      )}
      <Container>
        <section>
          <Title>Trending Movies</Title>
          <Grid>
            {trendingMovies.map((movie) => (
              <MovieCard key={movie.id} content={movie} type="movie" />
            ))}
          </Grid>
        </section>

        <section>
          <Title>Trending TV Shows</Title>
          <Grid>
            {trendingTVShows.map((show) => (
              <MovieCard key={show.id} content={show} type="tv" />
            ))}
          </Grid>
        </section>
      </Container>
    </>
  );
};

export default Home;
