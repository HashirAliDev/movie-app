import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config/api.config';
import {
  Card,
  PosterWrapper,
  Poster,
  ContentOverlay,
  Title,
  Overview,
  ButtonGroup,
  IconButton,
} from './styles';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const posterPath = `${IMAGE_BASE_URL}/${POSTER_SIZE}${movie.poster_path}`;

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <Card onClick={handleClick}>
      <PosterWrapper>
        <Poster src={posterPath} alt={movie.title || movie.name} />
        <ContentOverlay>
          <Title>{movie.title || movie.name}</Title>
          <Overview>{movie.overview}</Overview>
          <ButtonGroup>
            <IconButton>
              <FaPlay />
            </IconButton>
            <IconButton>
              <FaPlus />
            </IconButton>
          </ButtonGroup>
        </ContentOverlay>
      </PosterWrapper>
    </Card>
  );
};

export default MovieCard;
