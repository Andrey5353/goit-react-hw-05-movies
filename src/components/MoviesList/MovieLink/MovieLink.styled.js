import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieItem = styled.li`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.lightBG};
  border: ${({ theme }) => theme.borders.generic};
  border-radius: ${({ theme }) => theme.radii.generic};
  overflow: hidden;
`;

export const StyledMovieLink = styled(Link)`
  display: block;
  padding-bottom: ${({ theme }) => theme.space[4]};
  color: inherit;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.color};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.mainAccent};
  }
`;

export const MovieImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.colors.whiteBG};
  object-fit: cover;
`;
