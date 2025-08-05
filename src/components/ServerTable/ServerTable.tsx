import React, { useCallback, useMemo } from 'react';
import { Server } from '../../types/server';
import { ServerRow } from './ServerRow';
import { SortableHeader } from './SortableHeader';
import {
  TableContainer,
  Table,
  TableHeader,
  HeaderRow,
  HeaderCell,
  TableBody,
} from './styles';
import { ServerTableProps } from './types';
import { fallbackCopyNotification, compareValues } from './utils';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSorting, toggleServerStatus } from '../../store/slices/serverSlice';

export const ServerTable: React.FC<ServerTableProps> = ({ servers }) => {
  const dispatch = useAppDispatch();
  const sortingState = useAppSelector(state => state.servers.sorting);

  const handleSort = useCallback(
    (key: keyof Server) => {
      const direction =
        sortingState.column === key && sortingState.direction === 'asc'
          ? 'desc'
          : 'asc';
      dispatch(setSorting({ column: key, direction }));
    },
    [dispatch, sortingState]
  );

  const sortedServers = useMemo(() => {
    if (!sortingState.column) return servers;

    const serversCopy = [...servers];
    return serversCopy.sort((a, b) => {
      const column = sortingState.column;

      if (!column) return 0;

      const aValue = a[column];
      const bValue = b[column];

      return compareValues(aValue, bValue, sortingState.direction);
    });
  }, [servers, sortingState]);

  const copyServer = useCallback(async (serverId: string) => {
    try {
      await navigator.clipboard.writeText(serverId);
    } catch {
      fallbackCopyNotification(serverId);
    }
  }, []);

  const handleToggleServerStatus = useCallback(
    (serverId: string) => {
      dispatch(toggleServerStatus(serverId));
    },
    [dispatch]
  );

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <HeaderRow>
            <HeaderCell>ID</HeaderCell>
            <SortableHeader
              title="State"
              column="status"
              currentColumn={sortingState.column}
              direction={sortingState.direction}
              onSort={handleSort}
            />
            <HeaderCell>Host server</HeaderCell>
            <SortableHeader
              title="CPU"
              column="cpuPercent"
              currentColumn={sortingState.column}
              direction={sortingState.direction}
              onSort={handleSort}
            />
            <SortableHeader
              title="Memory"
              column="memoryPercent"
              currentColumn={sortingState.column}
              direction={sortingState.direction}
              onSort={handleSort}
            />
            <SortableHeader
              title="Uptime"
              column="uptime"
              currentColumn={sortingState.column}
              direction={sortingState.direction}
              onSort={handleSort}
            />
            <HeaderCell>Alerts</HeaderCell>
          </HeaderRow>
        </TableHeader>
        <TableBody>
          {sortedServers.map(server => (
            <ServerRow
              key={server.id}
              server={server}
              onCopyId={copyServer}
              onStatusToggle={handleToggleServerStatus}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
