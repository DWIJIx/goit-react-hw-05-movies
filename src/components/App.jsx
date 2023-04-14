import { NavLink, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../components/GlobalStyle';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movies</div>} />
      </Routes>
    </div>
  );
};
