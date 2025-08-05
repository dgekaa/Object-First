import { Outlet } from 'react-router-dom';
import { JSX } from 'react';
import { Navigation } from '../Navigation';
import { LayoutContainer, Main, ContentContainer } from './styles';

export const Layout = (): JSX.Element => (
  <LayoutContainer>
    <Navigation />
    <Main>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Main>
  </LayoutContainer>
);
