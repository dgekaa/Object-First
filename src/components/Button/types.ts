import type { ReactNode } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'text'
  | 'danger';

export interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: ReactNode;
}

export interface StyledButtonProps {
  $size: ButtonSize;
  $variant: ButtonVariant;
}
