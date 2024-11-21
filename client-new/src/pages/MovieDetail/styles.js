import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  min-height: 100vh;
`;

export const BackdropContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60vh;
  z-index: -1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.8) 60%,
      ${({ theme }) => theme.colors.background} 100%
    );
  }
`;

export const Backdrop = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  padding-top: 100px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Info = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const PlayButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => `${theme.colors.primary}dd`};
  }
`;

export const Overview = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  max-width: 800px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Cast = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const CastList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const CastItem = styled.div`
  text-align: center;
  
  img {
    width: 120px;
    height: 180px;
    border-radius: 10px;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    object-fit: cover;
  }
`;

export const CastName = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const TrailerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
  z-index: 2001;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const WatchOptions = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ServiceSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  h4 {
    font-size: 1.2rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const ServiceList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

export const ServiceLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.md};
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ServiceLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ServiceName = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const NoServices = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;

export const SimilarMovies = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;
