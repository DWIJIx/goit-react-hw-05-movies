import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BackButton, Wrapper } from './AboutMovie.Styled';
// import { IconContext } from 'react-icons';
import { BiChevronsLeft } from 'react-icons/bi';
import image from 'img/no-image.jpg';

export const AboutMovie = ({ movie }) => {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');
  //   console.log(movie);
  let date = new Date(movie.release_date);

  return (
    <>
      <Link to={backLinkLocation.current}>
        <BackButton>
          <BiChevronsLeft />
          <span>Go back</span>
        </BackButton>
      </Link>
      <Wrapper>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={230}
            height={350}
          />
        ) : (
          <img src={image} alt={movie.title} width={230} height={350} />
        )}
        <div>
          <h1>
            {movie.title} <span>({date.getFullYear()})</span>{' '}
          </h1>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </Wrapper>
    </>
  );
};

AboutMovie.propTypes = {
  movie: PropTypes.object.isRequired,
};
