import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${({ $isScrolled }) =>
    $isScrolled ? '#141414' : 'transparent'};
  background-image: ${({ $isScrolled }) =>
    !$isScrolled
      ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, transparent)'
      : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
`;

export const NavContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 4%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
  font-weight: bold;
  margin-right: 25px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchInput = styled.input`
  background-color: rgba(0, 0, 0, 0.75);
  border: 1px solid white;
  color: white;
  padding: 5px 10px 5px 40px;
  font-size: 14px;
  border-radius: 4px;
  width: 250px;
  transition: width 0.3s ease;

  &:focus {
    outline: none;
    width: 300px;
  }
`;

export const IconButton = styled.button`
  background: transparent;
  color: white;
  font-size: 1.2rem;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
