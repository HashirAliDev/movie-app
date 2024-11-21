import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  padding-top: 70px;
`;

export const HeroSection = styled.div`
  height: 80vh;
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }

  .hero-content {
    position: absolute;
    bottom: 20%;
    left: 5%;
    max-width: 50%;
    color: ${({ theme }) => theme.colors.text};

    h1 {
      font-size: 3rem;
      margin-bottom: ${({ theme }) => theme.spacing.md};
    }

    p {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;
