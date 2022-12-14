import { GlobalStyles } from 'components/GlobalStyles';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Shared/Container.styled';
import { StyledHeader } from './SharedLayout.styled';
import { HeaderNavigation } from './HeaderNavigation/HeaderNavigation';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => (
  <>
    <GlobalStyles />
    <StyledHeader>
      <Container>
        <HeaderNavigation />
      </Container>
    </StyledHeader>
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  </>
);
