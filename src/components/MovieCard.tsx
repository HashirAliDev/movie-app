import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

const Card = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #1a1a1a;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  color: white;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

const Rating = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  color: #ffd700;
  font-weight: bold;
`;

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.03 }}
      >
        <Image
          src={imageUrl}
          alt={movie.title}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.jpg';
          }}
        />
        <Rating>{movie.vote_average.toFixed(1)}</Rating>
        <Content>
          <Title>{movie.title}</Title>
        </Content>
      </Card>
    </Link>
  );
};

export default MovieCard;
