import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import MovieDetail from './pages/MovieDetail';
import Search from './pages/Search';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TVShows />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
