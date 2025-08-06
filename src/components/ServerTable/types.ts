import type { AlertType, Server } from '../../types/server';

export interface ServerTableProps {
  servers: Server[];
}

export interface ServerRowProps {
  server: Server;
  onStatusToggle: (serverId: string) => void;
  onCopyId: (id: string) => void;
}

export interface SortableHeaderProps {
  title: string;
  column: keyof Server;
  currentColumn: keyof Server | null;
  direction: 'asc' | 'desc';
  onSort: (column: keyof Server) => void;
}

export interface StatusBadgeProps {
  color: string;
}

export interface ProgressFillProps {
  width: number;
  type: 'cpu' | 'memory';
}

export interface AlertStatusIconProps {
  type: AlertType;
}

export interface AlertTextProps {
  color: string;
}

export interface SortIconContainerProps {
  active: boolean;
}

export interface UptimeTextProps {
  isRunning: boolean;
}
