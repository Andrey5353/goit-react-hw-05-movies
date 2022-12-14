import styled from 'styled-components';

export const ReviewList = styled.ul`
  list-style: none;

  margin: ${({ theme }) => theme.space[0]};
  padding: ${({ theme }) => theme.space[0]};
`;

export const ReviewItem = styled.li`
  padding: ${({ theme }) => theme.space[4]};

  border: ${({ theme }) => theme.borders.generic};
  border-radius: ${({ theme }) => theme.radii.generic};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[5]};
  }
`;

export const Author = styled.p`
  margin: ${({ theme }) => theme.space[0]};

  margin-bottom: ${({ theme }) => theme.space[4]};

  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const Paragraph = styled.p`
  margin: ${({ theme }) => theme.space[0]};
`;
