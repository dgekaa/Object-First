import { memo } from 'react';
import type { JSX } from 'react';
import { IconButton, Badge } from './styles';
import { IconWithBadgeProps } from './types';

const IconWithBadgeComponent = ({
  onClick,
  icon,
  showBadge = false,
  badgeColor,
  badgeSize,
  ariaLabel,
}: IconWithBadgeProps): JSX.Element => (
  <IconButton onClick={onClick} aria-label={ariaLabel}>
    {icon}
    {showBadge && <Badge color={badgeColor} size={badgeSize} />}
  </IconButton>
);

export const IconWithBadge = memo(IconWithBadgeComponent);
