import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { LogoIcon, AvatarIcon, UserIcon } from './icons';
import type { JSX } from 'react';

export const Navigation = (): JSX.Element => {
  return (
    <NavContainer>
      <LeftSection>
        <LogoContainer to="/">
          <LogoIcon />
        </LogoContainer>

        <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>

        <StyledNavLink to="/events">Events</StyledNavLink>
      </LeftSection>

      <RightSection>
        <AvatarLink to="/profile">
          <AvatarIcon icon={<UserIcon />} />
        </AvatarLink>
      </RightSection>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const LogoContainer = styled(NavLink)`
  margin-right: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
`;

const AvatarLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)<{ $isActive?: boolean }>`
  padding: 10px 20px;
  text-decoration: none;
  color: ${(props): string => (props.$isActive ? 'white' : '#333')};
  background-color: ${(props): string =>
    props.$isActive ? '#007bff' : 'transparent'};
  border-radius: 5px;
  transition: background-color 0.2s;
  display: inline-block;

  &:hover {
    background-color: ${(props): string =>
      props.$isActive ? '#0056b3' : '#e9ecef'};
  }
`;
