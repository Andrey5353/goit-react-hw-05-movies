import { additionalLinks } from 'constants/additionalLinks';
import { LinksList, LinksItem, StyledLink } from './AditionalLinks.styled';

export const AdditionalLinks = () => (
  <LinksList>
    {additionalLinks.map(({ path, text }) => (
      <LinksItem key={path}>
        <StyledLink to={path}>{text}</StyledLink>
      </LinksItem>
    ))}
  </LinksList>
);
