import React from 'react';
import { SortableHeaderCell, SortIconContainer } from './styles';
import { SortableHeaderProps } from './types';
import { SortIcon } from '../../icons/SortIcon';

export const SortableHeader: React.FC<SortableHeaderProps> = ({
  title,
  column,
  currentColumn,
  direction,
  onSort,
}) => (
  <SortableHeaderCell onClick={() => onSort(column)}>
    {title}
    <SortIconContainer active={currentColumn === column}>
      {currentColumn === column ? (
        direction === 'asc' ? (
          '↑'
        ) : (
          '↓'
        )
      ) : (
        <SortIcon width={14} height={14} />
      )}
    </SortIconContainer>
  </SortableHeaderCell>
);
