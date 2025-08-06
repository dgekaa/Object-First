import styled, { css } from 'styled-components';
import {
  StatusBadgeProps,
  ProgressFillProps,
  AlertStatusIconProps,
  AlertTextProps,
  SortIconContainerProps,
  UptimeTextProps,
} from './types';
import { getAlertColor } from './utils';

const cellWidths = css`
  &:nth-child(1) {
    width: 15%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:nth-child(2) {
    width: 12%;
  }
  &:nth-child(3) {
    width: 18%;
  }
  &:nth-child(4) {
    width: 15%;
  }
  &:nth-child(5) {
    width: 15%;
  }
  &:nth-child(6) {
    width: 12%;
  }
  &:nth-child(7) {
    width: 13%;
  }
`;

export const TableContainer = styled.div`
  background: var(--color-surface);
  border-radius: 16px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const TableHeader = styled.thead`
  background: transparent;
`;

export const HeaderCell = styled.th`
  padding: 16px 20px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: var(--color-text-secondary);
  ${cellWidths}
`;

export const SortableHeaderCell = styled(HeaderCell)`
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-background-subtle);
    color: var(--color-text-primary);
  }

  &:active {
    background-color: var(--color-border-subtle);
  }
`;

export const CopyIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-right: 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  transition: all 0.2s;
  flex-shrink: 0;
  opacity: 1;

  &:hover {
    background-color: var(--color-background-subtle);
    color: var(--color-text-primary);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const TableRow = styled.tr`
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-background-subtle);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border-subtle);
  }
`;

export const TableCell = styled.td`
  padding: 16px 20px;
  font-size: 14px;
  color: var(--color-text-primary);
  vertical-align: middle;
  ${cellWidths}
`;

export const IdContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

export const IdContent = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
  flex: 1;
`;

export const IdText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StatusBadge = styled.span.withConfig({
  shouldForwardProp: (prop): boolean => prop !== 'color',
})<StatusBadgeProps>`
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 500;
  font-size: 12px;
  color: ${(props): string => props.color};
  background-color: ${(props): string =>
    props.color === 'var(--color-green)'
      ? 'var(--color-green-light)'
      : 'var(--color-red-light)'};
  border: 1px solid ${(props): string => `${props.color}40`};
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const CpuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 80px;
`;

export const CpuText = styled.div`
  font-size: 14px;
  color: var(--color-text-primary);
`;

export const MemoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 80px;
`;

export const ProgressBar = styled.div`
  width: 80px;
  height: 6px;
  background-color: var(--color-background-subtle);
  border-radius: 3px;
  overflow: hidden;
`;

export const ProgressFill = styled.div.withConfig({
  shouldForwardProp: (prop): boolean => !['width', 'type'].includes(prop),
})<ProgressFillProps>`
  height: 100%;
  width: ${(props): string => {
    const maxValue = props.type === 'cpu' ? 12 : 50;
    const percentage = Math.min((props.width / maxValue) * 100, 100);
    return `${percentage}%`;
  }};
  background-color: var(--color-purple);
  transition: width 0.3s ease;
  border-radius: 3px;
`;

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AlertStatusIcon = styled.div.withConfig({
  shouldForwardProp: (prop): boolean => prop !== 'type',
})<AlertStatusIconProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${(props): string => getAlertColor(props.type)};
`;

export const AlertText = styled.span.withConfig({
  shouldForwardProp: (prop): boolean => prop !== 'color',
})<AlertTextProps>`
  color: ${(props): string => props.color};
  font-weight: 500;
  font-size: 14px;
`;

export const SortIconContainer = styled.span.withConfig({
  shouldForwardProp: (prop): boolean => prop !== 'active',
})<SortIconContainerProps>`
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
  color: ${(props): string =>
    props.active ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'};
  transition: color 0.2s;
`;

export const UptimeText = styled.span.withConfig({
  shouldForwardProp: (prop): boolean => prop !== 'isRunning',
})<UptimeTextProps>`
  color: ${(props): string =>
    props.isRunning
      ? 'var(--color-text-primary)'
      : 'var(--color-text-secondary)'};
  font-weight: ${(props): string => (props.isRunning ? '500' : '400')};
`;
