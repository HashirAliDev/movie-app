import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlay, FaPlus, FaStar } from 'react-icons/fa';
import { getMovieDetails, getMovieCredits, getSimilarMovies } from '../../services/api';
import MovieCard from '../../components/MovieCard';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config/api.config';
import {
  Container,
  BackdropContainer,
  Backdrop,
  ContentWrapper,
  PosterContainer,
  Poster,
  InfoContainer,
  Title,
  Metadata,
  Overview,
  ButtonGroup,
  Button,
  CastSection,
  CastList,
  CastItem,
  CastImage,
  CastName,
  SimilarSection,
  MovieGrid,
  Rating,
} from './styles';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const [movieRes, creditsRes, similarRes] = await Promise.all([
          getMovieDetails(id),
          getMovieCredits(id),
          getSimilarMovies(id),
        ]);

        setMovie(movieRes.data);
        setCredits(creditsRes.data);
        setSimilarMovies(similarRes.data.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [id]);

  if (!movie || !credits) return null;

  return (
    <Container>
      <BackdropContainer>
        <Backdrop
          src={`${IMAGE_BASE_URL}/${BACKDROP_SIZE}${movie.backdrop_path}`}
          alt={movie.title}
        />
      </BackdropContainer>

      <ContentWrapper>
        <PosterContainer>
          <Poster
            src={`${IMAGE_BASE_URL}/${POSTER_SIZE}${movie.poster_path}`}
            alt={movie.title}
          />
        </PosterContainer>

        <InfoContainer>
          <Title>{movie.title}</Title>
          <Metadata>
            <Rating>
              <FaStar /> {movie.vote_average.toFixed(1)}
            </Rating>
            <span>{movie.release_date.split('-')[0]}</span>
            <span>{movie.runtime} min</span>
          </Metadata>
          <Overview>{movie.overview}</Overview>
          <ButtonGroup>
            <Button primary>
              <FaPlay /> Play
            </Button>
            <Button>
              <FaPlus /> My List
            </Button>
          </ButtonGroup>

          <CastSection>
            <h3>Cast</h3>
            <CastList>
              {credits.cast.slice(0, 6).map((actor) => (
                <CastItem key={actor.id}>
                  <CastImage
                    src={
                      actor.profile_path
                        ? `${IMAGE_BASE_URL}/w185${actor.profile_path}`
                        : 'https://via.placeholder.com/185x278'
                    }
                    alt={actor.name}
                  />
                  <CastName>{actor.name}</CastName>
                </CastItem>
              ))}
            </CastList>
          </CastSection>
        </InfoContainer>
      </ContentWrapper>

      <SimilarSection>
        <h2>More Like This</h2>
        <MovieGrid>
          {similarMovies.slice(0, 6).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </MovieGrid>
      </SimilarSection>
    </Container>
  );
};

export default MovieDetail;
