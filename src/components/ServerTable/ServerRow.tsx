import { memo, useCallback } from 'react';
import type { JSX } from 'react';
import { ServerRowProps } from './types';
import { getStatusColor, getAlertColor, formatCpuUsage } from './utils';
import { CopyIcon } from '../../icons';
import {
  TableRow,
  TableCell,
  IdContainer,
  IdContent,
  CopyIconButton,
  IdText,
  StatusBadge,
  CpuContainer,
  CpuText,
  MemoryContainer,
  ProgressBar,
  ProgressFill,
  AlertContainer,
  AlertStatusIcon,
  AlertText,
  UptimeText,
} from './styles';

const formatMemoryUsage = (percent: number, value: string): JSX.Element => (
  <>
    <div>{value}</div>
    <ProgressBar>
      <ProgressFill width={percent} type="memory" />
    </ProgressBar>
  </>
);

const ServerRowComponent = ({
  server,
  onStatusToggle,
  onCopyId,
}: ServerRowProps): JSX.Element => {
  const handleStatusClick = useCallback(() => {
    onStatusToggle(server.id);
  }, [server.id, onStatusToggle]);

  const handleCopyClick = useCallback(() => {
    onCopyId(server.id);
  }, [server.id, onCopyId]);

  return (
    <TableRow>
      <TableCell>
        <IdContainer>
          <IdContent>
            <CopyIconButton
              onClick={handleCopyClick}
              title="Copy ID"
              aria-label="Copy server ID"
            >
              <CopyIcon />
            </CopyIconButton>
            <IdText>{server.id}</IdText>
          </IdContent>
        </IdContainer>
      </TableCell>
      <TableCell>
        <StatusBadge
          color={getStatusColor(server.status)}
          onClick={handleStatusClick}
          aria-label={`Change server status: ${server.status}`}
          role="button"
        >
          {server.status}
        </StatusBadge>
      </TableCell>
      <TableCell>{server.hostServer}</TableCell>
      <TableCell>
        <CpuContainer>
          <CpuText>{formatCpuUsage(server.cpuPercent)}</CpuText>
          <ProgressBar>
            <ProgressFill width={server.cpuPercent} type="cpu" />
          </ProgressBar>
        </CpuContainer>
      </TableCell>
      <TableCell>
        <MemoryContainer>
          {formatMemoryUsage(server.memoryPercent, server.memoryValue)}
        </MemoryContainer>
      </TableCell>
      <TableCell>
        <UptimeText isRunning={server.status === 'Running'}>
          {server.uptime}
        </UptimeText>
      </TableCell>
      <TableCell>
        <AlertContainer>
          <AlertStatusIcon type={server.alerts.type} />
          <AlertText color={getAlertColor(server.alerts.type)}>
            {server.alerts.count} {server.alerts.type}
          </AlertText>
        </AlertContainer>
      </TableCell>
    </TableRow>
  );
};

export const ServerRow = memo(ServerRowComponent);
ServerRow.displayName = 'ServerRow';
