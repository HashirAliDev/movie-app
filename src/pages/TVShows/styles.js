import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  padding-top: 100px;
`;

export const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: 20px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : 'rgba(255, 255, 255, 0.1)'};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.primary : 'rgba(255, 255, 255, 0.2)'};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;
