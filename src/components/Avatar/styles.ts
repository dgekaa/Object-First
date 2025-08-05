import styled from 'styled-components';
import type { AvatarContainerProps } from './types';

export const AvatarContainer = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'size',
})<AvatarContainerProps>`
  width: ${({ size }): number => size}px;
  height: ${({ size }): number => size}px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DefaultAvatar = styled.div`
  width: 100%;
  height: 100%;
  background: var(--color-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
