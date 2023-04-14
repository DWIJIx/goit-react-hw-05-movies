import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/fetch';
import { MovieList } from 'components/MovieList/MovieList';
import { Div } from './Home.Styled';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  // Робимо запит на фільми по трендах при першому запуску
  useEffect(() => {
    document.title = `Movie finder`;
    // Записуємо в стейт масив об'єктів трендових фільмів
    getTrendingMovies().then(data => setMovies(data));
  }, []);

  return (
    <>
      <Div>
        <h1>Trending today</h1>
        {/* Якщо стейт не пустий, то рендеримо  MovieList  з пропсом масиву об'єктів фільмів movies*/}
        {movies && <MovieList movies={movies} url={'movies/'} />}
      </Div>
    </>
  );
};
export default HomePage;
