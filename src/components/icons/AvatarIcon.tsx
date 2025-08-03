import styled from 'styled-components';
import type { JSX, ReactNode } from 'react';

interface AvatarIconProps {
  size?: number;
  src?: string;
  alt?: string;
  icon: ReactNode;
}

export const AvatarIcon = ({
  size = 40,
  src,
  alt = 'User Avatar',
  icon,
}: AvatarIconProps): JSX.Element => {
  return (
    <AvatarContainer size={size}>
      {src ? (
        <AvatarImage src={src} alt={alt} />
      ) : (
        <DefaultAvatar>{icon}</DefaultAvatar>
      )}
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div<{ size: number }>`
  width: ${(props): number => props.size}px;
  height: ${(props): number => props.size}px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DefaultAvatar = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
