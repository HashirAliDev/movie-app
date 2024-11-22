import React from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { motion } from 'framer-motion';
import MovieCard from './MovieCard';
import { Movie } from '../types/movie';

interface MovieGridProps {
  movies: Movie[];
  hasMore: boolean;
  onLoadMore: () => void;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: white;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const MovieGrid: React.FC<MovieGridProps> = ({ movies, hasMore, onLoadMore }) => {
  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={onLoadMore}
      hasMore={hasMore}
      loader={<LoadingContainer>Loading more movies...</LoadingContainer>}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Grid>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
      </motion.div>
    </InfiniteScroll>
  );
};

export default MovieGrid;
