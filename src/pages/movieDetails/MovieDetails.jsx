import { AboutMovie } from 'components/AboutMovie/AboutMovie';
import { getMovieById } from 'services/fetch';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
// import { LinkWrapper, Wrapper } from './MovieDetails.styled';
// import ContentLoader from 'react-content-loader';
import { BiCaretDown } from 'react-icons/bi';

const setActive = ({ isActive }) =>
  isActive
    ? { color: 'blue', borderBottom: '4px solid blue' }
    : { color: 'black' };

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  // Отримуємо id фільму через useParams з url рядка
  const { movieId } = useParams();

  useEffect(() => {
    document.title = `About movie`;
    getMovieById(movieId).then(data => setMovie(data));

    // return function cleanup() {
    //   getMovieById(movieId);
    // };
  }, [movieId]);

  return (
    <main>
      {/* {!movie ? (
        <ContentLoader
          speed={1}
          width={1240}
          height={380}
          viewBox="0 0 1240 380"
          backgroundColor="#e0eaff"
          foregroundColor="#ecebeb"
        >
          <rect x="243" y="48" rx="3" ry="3" width="225" height="15" />
          <rect x="247" y="139" rx="3" ry="3" width="285" height="10" />
          <rect x="8" y="12" rx="0" ry="0" width="216" height="354" />
          <rect x="248" y="198" rx="3" ry="3" width="150" height="15" />
          <rect x="246" y="116" rx="3" ry="3" width="285" height="10" />
          <rect x="247" y="279" rx="3" ry="3" width="285" height="10" />
          <rect x="246" y="259" rx="3" ry="3" width="285" height="10" />
          <rect x="247" y="238" rx="3" ry="3" width="285" height="10" />
        </ContentLoader>
      ) : (
        <AboutMovie movie={movie} />
      )} */}

      {movie && <AboutMovie movie={movie} />}
      <div>
        <h3>Additional information:</h3>
        <div>
          <NavLink to="cast" style={setActive}>
            <BiCaretDown />
            Cast
          </NavLink>
          <NavLink to="reviews" style={setActive}>
            <BiCaretDown />
            Reviews
          </NavLink>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetails;
