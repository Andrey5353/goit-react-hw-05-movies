import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AdditionalLinks } from './AdditionalLinks/AdditionalLinks';
import {
  Description,
  DescriptionContainer,
  MovieImage,
  ParagraphTitle,
  Paragraph,
  Title,
} from './MovieDescription.styled';
import noImage from 'images/no-image.png';
import { Loader } from 'components/Loader/Loader';

export const MovieDescription = ({
  movieDetails: {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  },
}) => (
  <>
    <DescriptionContainer>
      <MovieImage
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w342${poster_path}`
            : noImage
        }
        alt={original_title}
        width={245}
        height={368}
      />
      <Description>
        <Title>{`${original_title} (${release_date.substring(0, 4)})`}</Title>
        <Paragraph>{`User score: ${Math.round(vote_average * 10)}%`}</Paragraph>
        <Paragraph>
          <ParagraphTitle>Overview</ParagraphTitle>
          {overview ? overview : 'Overview not found'}
        </Paragraph>
        <Paragraph>
          <ParagraphTitle>Genres</ParagraphTitle>
          {genres.lenth
            ? genres.map(genre => genre.name).join(', ')
            : 'Genres not specified'}
        </Paragraph>
      </Description>
    </DescriptionContainer>
    <AdditionalLinks />
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </>
);

MovieDescription.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};
