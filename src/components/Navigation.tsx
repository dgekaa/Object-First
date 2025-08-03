import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { LogoIcon } from './icons';

export const Navigation = () => {
  return (
    <Header>
      <NavContainer>
        <LogoContainer>
          <LogoIcon />
        </LogoContainer>

        <StyledNavLink to="/">Главная</StyledNavLink>

        <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>

        <StyledNavLink to="/events">Events</StyledNavLink>

        <StyledNavLink to="/profile">MyProfile</StyledNavLink>
      </NavContainer>
    </Header>
  );
};

const Header = styled.header`
  background-color: #f8f9fa;
  padding: 15px 0;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 20px;
  width: 100%;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledNavLink = styled(NavLink)<{ $isActive?: boolean }>`
  padding: 10px 20px;
  text-decoration: none;
  color: ${props => (props.$isActive ? 'white' : '#333')};
  background-color: ${props => (props.$isActive ? '#007bff' : 'transparent')};
  border-radius: 5px;
  transition: background-color 0.2s;
  display: inline-block;

  &:hover {
    background-color: ${props => (props.$isActive ? '#0056b3' : '#e9ecef')};
  }
`;
