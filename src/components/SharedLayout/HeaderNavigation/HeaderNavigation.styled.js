import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  transition: ${({ theme }) => theme.transitions.color};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

export const Logo = styled.h1`
  margin: 0;
  padding: 0;
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationLink = styled(NavLink)`
  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[0]};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: inherit;
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.color};
  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.space[4]};
  }
  &.active {
    color: ${({ theme }) => theme.colors.mainAccent};
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    color: ${({ theme }) => theme.colors.lightText};
  }
`;
