import type { JSX } from 'react';
import { useState } from 'react';
import { LogoIcon, UserIcon, ArrowIcon } from '../../icons';
import { Avatar } from '../Avatar';
import { NotificationIcon } from '../NotificationIcon';
import {
  HeaderWrapper,
  NavContainer,
  LeftSection,
  CenterSection,
  RightSection,
  LogoContainer,
  StyledNavLink,
  HelpButton,
  ArrowContainer,
  AvatarLink,
} from './styles';

export const Navigation = (): JSX.Element => {
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const handleHelpClick = (): void => setIsArrowRotated(prev => !prev);

  return (
    <HeaderWrapper>
      <NavContainer>
        <LeftSection>
          <LogoContainer to="/">
            <LogoIcon />
          </LogoContainer>
        </LeftSection>

        <CenterSection>
          <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>

          <StyledNavLink to="/events">Events</StyledNavLink>

          <HelpButton onClick={handleHelpClick}>
            Help
            <ArrowContainer $isRotated={isArrowRotated}>
              <ArrowIcon size={20} />
            </ArrowContainer>
          </HelpButton>
        </CenterSection>

        <RightSection>
          <NotificationIcon />

          <AvatarLink to="/profile">
            <Avatar icon={<UserIcon />} />
          </AvatarLink>
        </RightSection>
      </NavContainer>
    </HeaderWrapper>
  );
};
