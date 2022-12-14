import styled from 'styled-components';

export const StyledMoviesList = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  margin: ${({ theme }) => theme.space[0]};
  padding: ${({ theme }) => theme.space[0]};
  list-style: none;
`;
