import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Navigation } from './Navigation';

export const Layout = () => {
  return (
    <LayoutContainer>
      <Navigation />
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

const Main = styled.main`
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
