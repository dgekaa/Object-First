import type { ReactNode } from 'react';

export interface AvatarProps {
  size?: number;
  src?: string;
  alt?: string;
  icon: ReactNode;
}

export interface AvatarContainerProps {
  size: number;
}
