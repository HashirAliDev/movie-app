import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import {
  Nav,
  NavContainer,
  Logo,
  NavLinks,
  NavLink,
  NavRight,
  SearchContainer,
  SearchInput,
  IconButton,
} from './styles';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?q=${e.target.value}`);
      setShowSearch(false);
    }
  };

  return (
    <Nav $isScrolled={isScrolled}>
      <NavContainer>
        <Logo to="/">NETFLIX</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/tv">TV Shows</NavLink>
          <NavLink to="/my-list">My List</NavLink>
        </NavLinks>
        <NavRight>
          <SearchContainer $showSearch={showSearch}>
            <IconButton onClick={() => setShowSearch(!showSearch)}>
              <FaSearch />
            </IconButton>
            {showSearch && (
              <SearchInput
                placeholder="Titles, people, genres"
                onKeyPress={handleSearch}
                autoFocus
              />
            )}
          </SearchContainer>
          <IconButton>
            <FaBell />
          </IconButton>
          <IconButton>
            <FaUser />
          </IconButton>
        </NavRight>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
