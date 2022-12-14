import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Section } from 'components/Shared/Section.styled';
import { Container } from 'components/Shared/Container.styled';
import { MoviesSearchForm } from 'components/MoviesSearchForm/MoviesSearchForm';
import { HiddenPageTitle } from 'components/Shared/PageTitle';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Message } from 'components/Shared/Message.styled';
import { getMovies } from 'api/api';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [moviesData, setMoviesData] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const searchQuery = searchParams.get('query');

    if (!searchQuery) return setStatus('idle');

    setStatus('pending');

    getMovies(searchQuery)
      .then(result => {
        setMoviesData(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [searchParams]);

  const onSearchFormSubmit = searchValue => {
    setSearchParams(searchValue ? { query: searchValue } : {});
  };

  return (
    <Section>
      <Container>
        <HiddenPageTitle>Search movies</HiddenPageTitle>
        <MoviesSearchForm
          onSubmit={onSearchFormSubmit}
          searchParams={searchParams}
        />
        {status === 'idle' && <Message>{`Let's find some movies`}</Message>}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && (
          <Message>Ooops, something went wrong</Message>
        )}
        {status === 'resolved' && moviesData.length === 0 && (
          <Message>{`There is no movies with that request`}</Message>
        )}
        {status === 'resolved' && <MoviesList moviesData={moviesData} />}
      </Container>
    </Section>
  );
};

export default Movies;
