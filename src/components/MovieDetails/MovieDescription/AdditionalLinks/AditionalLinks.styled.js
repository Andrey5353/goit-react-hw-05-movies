import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinksList = styled.ul`
  list-style: none;

  display: flex;
  justify-content: center;

  margin: ${({ theme }) => theme.space[0]};
  margin-bottom: ${({ theme }) => theme.space[5]};
  padding: ${({ theme }) => theme.space[4]};
`;

export const LinksItem = styled.li`
  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.space[4]};
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;

  padding: ${({ theme }) => theme.space[3]};

  border-radius: ${({ theme }) => theme.radii.generic};

  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  text-decoration: none;
  color: inherit;

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.backgroundColor};

  &.active {
    color: ${({ theme }) => theme.colors.whiteText};
    background-color: ${({ theme }) => theme.colors.mainAccent};
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    color: ${({ theme }) => theme.colors.mainAccent};
  }

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.space[4]};
  }
`;
