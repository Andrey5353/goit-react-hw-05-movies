import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.space[5]};

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 240px 1fr;
  }
`;

export const MovieImage = styled.img`
  display: block;

  width: 100%;
  max-width: 342px;
  height: auto;
  margin-left: auto;
  margin-right: auto;

  object-fit: contain;

  border-radius: ${({ theme }) => theme.radii.generic};

  @media screen and (max-width: 767.98px) {
    margin-bottom: ${({ theme }) => theme.space[4]};
  }
`;

export const Title = styled.h2`
  margin: ${({ theme }) => theme.space[0]};
  margin-bottom: ${({ theme }) => theme.space[4]};

  @media screen and (max-width: 767.98px) {
    text-align: center;
  }
`;

export const Description = styled.div`
  padding: ${({ theme }) => theme.space[4]};
`;

export const Paragraph = styled.p`
  padding: ${({ theme }) => theme.space[0]};
  margin: ${({ theme }) => theme.space[0]};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[4]};
  }
`;

export const ParagraphTitle = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.space[3]};

  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;
