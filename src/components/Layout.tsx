import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Navigation } from './Navigation';
import type { JSX } from 'react';

export const Layout = (): JSX.Element => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Navigation />
      </HeaderContainer>
      <Main>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Main>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Main = styled.main`
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
