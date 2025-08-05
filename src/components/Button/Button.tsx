import { JSX } from 'react';
import { ButtonProps } from './types';
import { StyledButton } from './styles';

export const Button = ({
  onClick,
  children,
  disabled = false,
  size = 'medium',
  variant = 'default',
  icon,
}: ButtonProps): JSX.Element => (
  <StyledButton
    onClick={onClick}
    disabled={disabled}
    $size={size}
    $variant={variant}
  >
    {icon}
    {children}
  </StyledButton>
);
