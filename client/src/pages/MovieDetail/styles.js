import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 50px;
`;

export const BackdropContainer = styled.div`
  position: relative;
  height: 70vh;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.2) 0%,
      rgba(20, 20, 20, 0.9) 80%,
      rgba(20, 20, 20, 1) 100%
    );
  }
`;

export const Backdrop = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  margin-top: -200px;
  padding: 0 50px;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin-top: -100px;
    padding: 0 20px;
  }
`;

export const PosterContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const InfoContainer = styled.div`
  color: white;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

export const Metadata = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #ccc;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #ffd700;
`;

export const Overview = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #fff;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  background-color: ${({ primary }) =>
    primary ? 'white' : 'rgba(109, 109, 110, 0.7)'};
  color: ${({ primary }) => (primary ? 'black' : 'white')};

  &:hover {
    background-color: ${({ primary }) =>
      primary ? 'rgba(255, 255, 255, 0.75)' : 'rgba(109, 109, 110, 0.4)'};
  }
`;

export const CastSection = styled.div`
  margin-bottom: 40px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

export const CastList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
`;

export const CastItem = styled.div`
  text-align: center;
`;

export const CastImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const CastName = styled.p`
  font-size: 0.9rem;
  color: #fff;
`;

export const SimilarSection = styled.div`
  padding: 0 50px;
  margin-top: 40px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 20px;
  }
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }
`;
