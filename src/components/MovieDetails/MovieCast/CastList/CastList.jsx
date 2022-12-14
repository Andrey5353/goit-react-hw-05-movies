import PropTypes from 'prop-types';
import {
  StyledCastList,
  CastImage,
  CastItem,
  ArtistName,
  Character,
} from './CastList.styled';
import noImage from 'images/no-image.png';

export const CastList = ({ castData }) => (
  <StyledCastList>
    {castData.map(({ cast_id, name, profile_path, character }) => (
      <CastItem key={cast_id}>
        <CastImage
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w342${profile_path}`
              : noImage
          }
          alt={name}
          width={230}
          height={345}
        />
        <ArtistName>{name}</ArtistName>
        <Character>
          {character ? `Character: ${character}` : `Character not specified`}
        </Character>
      </CastItem>
    ))}
  </StyledCastList>
);

CastList.propTypes = {
  castData: PropTypes.array.isRequired,
};
