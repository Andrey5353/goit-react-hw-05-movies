import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledMovieLink, MovieImage, MovieItem } from './MovieLink.styled';
import noImage from 'images/no-image.png';

export const MovieLink = ({ movie: { id, original_title, poster_path } }) => {
  const currentLocation = useLocation();
  const movieLink = `/movies/${id}`;

  return (
    <MovieItem>
      <StyledMovieLink to={movieLink} state={currentLocation}>
        <MovieImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342${poster_path}`
              : noImage
          }
          alt={original_title}
          width={230}
          height={345}
        />
        {original_title}
      </StyledMovieLink>
    </MovieItem>
  );
};

MovieLink.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
};
