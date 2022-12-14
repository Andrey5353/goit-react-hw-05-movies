import styled from 'styled-components';

export const Message = styled.p`
  margin: ${({ theme }) => theme.space[0]};
  padding: ${({ theme }) => theme.space[5]} ${({ theme }) => theme.space[0]};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: center;
`;
