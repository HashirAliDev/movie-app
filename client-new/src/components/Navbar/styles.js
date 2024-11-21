import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${({ $isScrolled, theme }) =>
    $isScrolled ? theme.colors.background : 'transparent'};
  transition: background-color ${({ theme }) => theme.transitions.default};
  z-index: 1000;
`;

export const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchInput = styled.input`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.75);
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  width: 200px;
  transition: width ${({ theme }) => theme.transitions.default};

  &:focus {
    width: 300px;
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
