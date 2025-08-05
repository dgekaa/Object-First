import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Z_INDEX } from '../../styles';
import { ArrowContainerProps } from './types';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border-subtle);
  z-index: ${Z_INDEX.HEADER};
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.98);
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

export const NavContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 71px;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const CenterSection = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AvatarLink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: var(--color-text-secondary);
  transition: all 0.2s;
  display: inline-block;
  border-bottom: 2px solid transparent;

  &.active {
    font-weight: 700;
    color: var(--color-text-primary);
    border-bottom-color: var(--color-text-primary);
  }

  &:hover {
    color: var(--color-text-primary);
  }
`;

export const HelpButton = styled.button`
  padding: 10px 20px;
  background: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const ArrowContainer = styled.div<ArrowContainerProps>`
  display: flex;
  align-items: center;
  transform: ${(props): string =>
    props.$isRotated ? 'rotate(0deg)' : 'rotate(180deg)'};
  transition: transform 0.3s ease;
`;
