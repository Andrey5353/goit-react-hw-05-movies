import styled from 'styled-components';

export const PageTitle = styled.h2`
  margin: ${({ theme }) => theme.space[0]};
  padding: ${({ theme }) => theme.space[5]} ${({ theme }) => theme.space[0]};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: center;
  text-transform: uppercase;
`;

export const HiddenPageTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
