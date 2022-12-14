import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(Link)`
  display: inline-block;

  margin-bottom: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[3]};

  border-radius: ${({ theme }) => theme.radii.generic};

  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  text-decoration: none;
  color: inherit;

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.backgroundColor};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.whiteText};
    background-color: ${({ theme }) => theme.colors.mainAccent};
  }
`;
