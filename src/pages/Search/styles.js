import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  padding-top: 100px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const NoResults = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;
