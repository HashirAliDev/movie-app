import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 50px;
`;

export const Hero = styled.div`
  height: 80vh;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 20px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  bottom: 150px;
  left: 50px;
  right: 50px;
  z-index: 1;
  max-width: 700px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: 100px;
    left: 30px;
    right: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

export const Overview = styled.p`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
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

  background-color: ${({ primary, theme }) =>
    primary ? 'white' : 'rgba(109, 109, 110, 0.7)'};
  color: ${({ primary }) => (primary ? 'black' : 'white')};

  &:hover {
    background-color: ${({ primary }) =>
      primary ? 'rgba(255, 255, 255, 0.75)' : 'rgba(109, 109, 110, 0.4)'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
    padding: 8px 16px;
  }
`;

export const Section = styled.section`
  padding: 20px 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px 30px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 20px;
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
