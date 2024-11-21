import React, { useState, useEffect } from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { getTrending, getPopularMovies, getPopularTVShows } from '../../services/api';
import MovieCard from '../../components/MovieCard';
import {
  Container,
  Hero,
  HeroContent,
  Title,
  Overview,
  ButtonGroup,
  Button,
  Section,
  SectionTitle,
  MovieGrid,
} from './styles';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config/api.config';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [featuredContent, setFeaturedContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trendingRes, moviesRes, tvRes] = await Promise.all([
          getTrending(),
          getPopularMovies(),
          getPopularTVShows(),
        ]);

        setTrending(trendingRes.data.results);
        setPopularMovies(moviesRes.data.results);
        setPopularTVShows(tvRes.data.results);
        setFeaturedContent(trendingRes.data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      {featuredContent && (
        <Hero
          style={{
            backgroundImage: `url(${IMAGE_BASE_URL}/${BACKDROP_SIZE}${featuredContent.backdrop_path})`,
          }}
        >
          <HeroContent>
            <Title>{featuredContent.title || featuredContent.name}</Title>
            <Overview>{featuredContent.overview}</Overview>
            <ButtonGroup>
              <Button primary>
                <FaPlay /> Play
              </Button>
              <Button>
                <FaInfoCircle /> More Info
              </Button>
            </ButtonGroup>
          </HeroContent>
        </Hero>
      )}

      <Section>
        <SectionTitle>Trending Now</SectionTitle>
        <MovieGrid>
          {trending.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </MovieGrid>
      </Section>

      <Section>
        <SectionTitle>Popular Movies</SectionTitle>
        <MovieGrid>
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </MovieGrid>
      </Section>

      <Section>
        <SectionTitle>Popular TV Shows</SectionTitle>
        <MovieGrid>
          {popularTVShows.map((show) => (
            <MovieCard key={show.id} movie={show} />
          ))}
        </MovieGrid>
      </Section>
    </Container>
  );
};

export default Home;
