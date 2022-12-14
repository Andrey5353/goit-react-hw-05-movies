import PropTypes from 'prop-types';
import { useState } from 'react';
import { SearchForm, SubmitButton } from './MoviesSearchForm.styled';

export const MoviesSearchForm = ({ onSubmit, searchParams }) => {
  const [searchQuery, setSearchQuery] = useState(() => {
    const query = searchParams.get('query');
    return query ? query : '';
  });

  const onInputChange = ({ target }) => setSearchQuery(target.value);

  const onFormSubmit = evt => {
    evt.preventDefault();

    onSubmit(searchQuery.trim().toLowerCase());
  };

  return (
    <SearchForm autoComplete="off" onSubmit={onFormSubmit}>
      <input
        type="text"
        name="searchValue"
        value={searchQuery}
        onChange={onInputChange}
      />
      <SubmitButton type="submit">Search</SubmitButton>
    </SearchForm>
  );
};

MoviesSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  searchParams: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};
