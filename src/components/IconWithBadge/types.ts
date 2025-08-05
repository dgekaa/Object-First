import type { ReactNode } from 'react';

export interface IconWithBadgeProps {
  onClick?: () => void;
  icon: ReactNode;
  showBadge?: boolean;
  badgeColor?: string;
  badgeSize?: number;
  size?: number;
  color?: string;
}
