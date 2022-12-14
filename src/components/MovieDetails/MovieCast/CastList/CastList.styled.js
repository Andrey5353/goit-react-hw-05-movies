import styled from 'styled-components';

export const StyledCastList = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));

  list-style: none;

  margin: ${({ theme }) => theme.space[0]};
  padding: ${({ theme }) => theme.space[0]};
`;

export const CastItem = styled.li`
  padding-bottom: ${({ theme }) => theme.space[4]};

  text-align: center;

  background-color: ${({ theme }) => theme.colors.lightBG};

  border: ${({ theme }) => theme.borders.generic};
  border-radius: ${({ theme }) => theme.radii.generic};

  overflow: hidden;
`;

export const CastImage = styled.img`
  display: block;

  width: 100%;
  height: auto;
  margin-bottom: ${({ theme }) => theme.space[4]};

  background-color: ${({ theme }) => theme.colors.whiteBG};

  object-fit: cover;
`;

export const ArtistName = styled.p`
  margin: ${({ theme }) => theme.space[0]};
  margin-bottom: ${({ theme }) => theme.space[3]};

  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const Character = styled.p`
  margin: ${({ theme }) => theme.space[0]};
`;
