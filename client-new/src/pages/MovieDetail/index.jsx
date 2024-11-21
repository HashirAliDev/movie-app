import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaPlay } from 'react-icons/fa';
import { Container, BackdropContainer, Backdrop, Content, Title, Overview, Info, Cast, CastList, CastItem, CastName, PlayButton, TrailerModal, CloseButton, WatchOptions, ServiceSection, ServiceList, ServiceItem, ServiceLogo, ServiceLink, ServiceName, NoServices, SimilarMovies, MovieGrid } from './styles';
import MovieCard from '../../components/MovieCard';

const MovieDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [streamingServices, setStreamingServices] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const [detailsResponse, creditsResponse, videosResponse] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`),
          axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`),
          axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
        ]);
        
        setDetails(detailsResponse.data);
        setCast(creditsResponse.data.cast.slice(0, 10));
        
        // Find official trailer or use the first video
        const trailerVideo = videosResponse.data.results.find(
          video => video.type === 'Trailer' && video.site === 'YouTube'
        ) || videosResponse.data.results[0];
        
        if (trailerVideo) {
          setTrailer(trailerVideo);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    const fetchStreamingServices = async () => {
      try {
        // Using TMDb's watch providers endpoint
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiKey}`
        );
        
        // Get US streaming options if available
        const usServices = response.data.results?.US;
        if (usServices) {
          setStreamingServices({
            stream: usServices.flatrate || [],
            rent: usServices.rent || [],
            buy: usServices.buy || [],
            link: usServices.link // TMDb's direct link to JustWatch
          });
        }
      } catch (error) {
        console.error('Error fetching streaming services:', error);
      }
    };

    const fetchSimilarMovies = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
        );
        setSimilarMovies(response.data.results.slice(0, 6));
      } catch (error) {
        console.error('Error fetching similar movies:', error);
      }
    };

    fetchDetails();
    fetchStreamingServices();
    fetchSimilarMovies();
  }, [id]);

  if (!details) return null;

  return (
    <Container>
      <BackdropContainer>
        <Backdrop
          src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
          alt={details.title}
        />
      </BackdropContainer>
      <Content>
        <Title>{details.title}</Title>
        <Info>
          <span>{new Date(details.release_date).getFullYear()}</span>
          <span>{details.runtime} min</span>
          <span>{details.vote_average.toFixed(1)} ★</span>
        </Info>
        {trailer && (
          <PlayButton onClick={() => setShowTrailer(true)}>
            <FaPlay /> Play Trailer
          </PlayButton>
        )}
        <Overview>{details.overview}</Overview>
        
        <WatchOptions>
          <h3>Where to Watch</h3>
          {streamingServices.stream?.length > 0 && (
            <ServiceSection>
              <h4>Stream</h4>
              <ServiceList>
                {streamingServices.stream.map(service => (
                  <ServiceLink 
                    key={service.provider_id}
                    href={streamingServices.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ServiceItem>
                      <ServiceLogo
                        src={`https://image.tmdb.org/t/p/original${service.logo_path}`}
                        alt={service.provider_name}
                        title={service.provider_name}
                      />
                      <ServiceName>{service.provider_name}</ServiceName>
                    </ServiceItem>
                  </ServiceLink>
                ))}
              </ServiceList>
            </ServiceSection>
          )}
          
          {streamingServices.rent?.length > 0 && (
            <ServiceSection>
              <h4>Rent</h4>
              <ServiceList>
                {streamingServices.rent.map(service => (
                  <ServiceLink 
                    key={service.provider_id}
                    href={streamingServices.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ServiceItem>
                      <ServiceLogo
                        src={`https://image.tmdb.org/t/p/original${service.logo_path}`}
                        alt={service.provider_name}
                        title={service.provider_name}
                      />
                      <ServiceName>{service.provider_name}</ServiceName>
                    </ServiceItem>
                  </ServiceLink>
                ))}
              </ServiceList>
            </ServiceSection>
          )}
          
          {streamingServices.buy?.length > 0 && (
            <ServiceSection>
              <h4>Buy</h4>
              <ServiceList>
                {streamingServices.buy.map(service => (
                  <ServiceLink 
                    key={service.provider_id}
                    href={streamingServices.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ServiceItem>
                      <ServiceLogo
                        src={`https://image.tmdb.org/t/p/original${service.logo_path}`}
                        alt={service.provider_name}
                        title={service.provider_name}
                      />
                      <ServiceName>{service.provider_name}</ServiceName>
                    </ServiceItem>
                  </ServiceLink>
                ))}
              </ServiceList>
            </ServiceSection>
          )}
          
          {(!streamingServices.stream?.length && !streamingServices.rent?.length && !streamingServices.buy?.length) && (
            <NoServices>
              Coming Soon
            </NoServices>
          )}
        </WatchOptions>

        <Cast>
          <h3>Cast</h3>
          <CastList>
            {cast.map((actor) => (
              <CastItem key={actor.id}>
                {actor.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt={actor.name}
                  />
                )}
                <CastName>{actor.name}</CastName>
              </CastItem>
            ))}
          </CastList>
        </Cast>

        {similarMovies.length > 0 && (
          <SimilarMovies>
            <h3>More Like This</h3>
            <MovieGrid>
              {similarMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  content={movie}
                  type="movie"
                />
              ))}
            </MovieGrid>
          </SimilarMovies>
        )}
      </Content>

      {showTrailer && trailer && (
        <TrailerModal>
          <CloseButton onClick={() => setShowTrailer(false)}>✕</CloseButton>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </TrailerModal>
      )}
    </Container>
  );
};

export default MovieDetail;
