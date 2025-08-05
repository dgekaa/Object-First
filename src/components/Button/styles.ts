import styled from 'styled-components';
import type { StyledButtonProps } from './types';

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: ${({ $size }): string => {
    switch ($size) {
      case 'small':
        return '6px 12px';
      case 'large':
        return '12px 20px';
      default:
        return '8px 16px';
    }
  }};
  background-color: ${({ $variant }): string => {
    switch ($variant) {
      case 'primary':
        return 'var(--color-purple)';
      case 'secondary':
        return 'transparent';
      case 'success':
        return 'var(--color-green)';
      case 'danger':
        return 'var(--color-red)';
      case 'text':
        return 'transparent';
      default:
        return 'var(--color-purple)';
    }
  }};
  color: ${({ $variant }): string => {
    switch ($variant) {
      case 'secondary':
        return 'var(--color-text-secondary)';
      case 'text':
        return 'var(--color-purple)';
      default:
        return 'white';
    }
  }};
  border: ${({ $variant }): string => {
    switch ($variant) {
      case 'secondary':
        return '1px solid var(--color-border-subtle)';
      case 'text':
        return 'none';
      default:
        return 'none';
    }
  }};
  border-radius: ${({ $variant }): string => {
    return $variant === 'default' ? '8px' : '100px';
  }};
  font-weight: 500;
  font-size: ${({ $size }): string => {
    switch ($size) {
      case 'small':
        return '12px';
      case 'large':
        return '16px';
      default:
        return '14px';
    }
  }};
  cursor: pointer;

  &:hover:not(:disabled) {
    ${({ $variant }): string => {
      switch ($variant) {
        case 'secondary':
          return `
            background: var(--color-background-subtle);
            color: var(--color-text-primary);
          `;
        case 'text':
          return `
            opacity: 0.8;
          `;
        default:
          return `
            opacity: 0.9;
          `;
      }
    }}
  }

  &:disabled {
    background-color: rgba(29, 27, 32, 0.12);
    color: #79777b;
    opacity: 1;
    cursor: not-allowed;
    transform: none;
  }
`;
