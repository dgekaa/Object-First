import styled from 'styled-components';
import { Z_INDEX } from '../../styles';
import { StyledChartWrapperProps, StyledPeriodButtonProps } from './types';

export const PeriodSelector = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover > *:not([role='menu']) {
    opacity: 0.8;
  }
`;

export const PeriodButton = styled.button.withConfig({
  shouldForwardProp: (prop): boolean => prop !== 'active',
})<StyledPeriodButtonProps>`
  background: none;
  border: none;
  font-weight: 400;
  font-size: 14px;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;

  ${(props): string =>
    props.active
      ? `
    background-color: var(--color-background-subtle);
    color: var(--color-text-primary);
  `
      : ''}

  &:hover {
    background-color: var(--color-background-subtle);
  }
`;

export const DropdownIcon = styled.span`
  font-size: 10px;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: transform 0.2s;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--color-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: ${Z_INDEX.DROPDOWN};
  min-width: 150px;
  padding: 4px 0;
  margin-top: 4px;
  opacity: 1;

  &:hover {
    opacity: 1;
  }
`;

export const DropdownItem = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-background-subtle);
  }
`;

export const ChartWrapper = styled.div.withConfig({
  shouldForwardProp: (prop): boolean => prop !== 'height',
})<StyledChartWrapperProps>`
  height: ${(props): string => `${props.height}px`};
  width: 100%;

  * {
    outline: none;
    border: none;
  }

  svg {
    outline: none;
    border: none;
  }

  *:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
`;
