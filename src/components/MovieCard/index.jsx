import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Poster, Content, Title, ReleaseDate, Rating } from './styles';

const MovieCard = ({ content, type }) => {
  const {
    id,
    title,
    name,
    poster_path,
    release_date,
    first_air_date,
    vote_average,
  } = content;

  return (
    <Link to={`/${type}/${id}`}>
      <Card>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title || name}
        />
        <Content>
          <Title>{title || name}</Title>
          <ReleaseDate>
            {new Date(release_date || first_air_date).getFullYear()}
          </ReleaseDate>
          <Rating>{vote_average.toFixed(1)}</Rating>
        </Content>
      </Card>
    </Link>
  );
};

export default MovieCard;
