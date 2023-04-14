import { MovieList } from 'components/MovieList/MovieList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { getMovies } from 'services/fetch';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [inputValue, setInputValue] = useSearchParams('');
  const [searchMovies, setSearchMovies] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  // 2. Зчитуємо з QueryString значення параметра query і записуємо в searchValue, а якщо нема нічого, то ''
  const searchValue = inputValue.get('query') ?? '';

  // 1. Записуємо введений в форму текст в QueryString
  const updateQueryString = text => {
    // Щоб в QueryString при пустому text не вписувалось 'query='
    const nextParams = text !== '' ? { query: text } : {};
    setInputValue(nextParams);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    if (currentPage === 1) {
      setLoading(true);
      getMovies(searchValue.trim(), currentPage)
        .then(data => {
          setSearchMovies(data.results);
          setTotalPages(data.total_pages);
        })
        .then(setLoading(false));
    }
  }, [currentPage, searchValue, totalPages]);

  const loadMore = () => {
    getMovies(searchValue.trim(), currentPage + 1).then(data => {
      setSearchMovies(prevState => [...prevState, ...data.results]);
      setCurrentPage(prevPage => prevPage + 1);
    });
  };

  return (
    <main>
      <Searchbar onSubmit={updateQueryString} placeholder={searchValue} />
      {loading && <Loader />}
      {searchMovies !== '' && <MovieList movies={searchMovies} url={''} />}
      {totalPages !== currentPage && <Button onLoadMore={loadMore} />}
    </main>
  );
};
export default MoviesPage;
