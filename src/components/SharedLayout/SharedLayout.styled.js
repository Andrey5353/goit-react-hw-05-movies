import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: ${({ theme }) => theme.borders.generic};
  box-shadow: ${({ theme }) => theme.shadows.generic};
`;
