import type { JSX } from 'react';
import { AvatarProps } from './types';
import { AvatarContainer, AvatarImage, DefaultAvatar } from './styles';

export const Avatar = ({
  size = 32,
  src,
  alt = 'User Avatar',
  icon,
}: AvatarProps): JSX.Element => (
  <AvatarContainer size={size}>
    {src ? (
      <AvatarImage src={src} alt={alt} />
    ) : (
      <DefaultAvatar>{icon}</DefaultAvatar>
    )}
  </AvatarContainer>
);
