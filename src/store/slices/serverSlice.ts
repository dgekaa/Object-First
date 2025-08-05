import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Server } from '../../types/server';
import { generateServerId } from '../../utils/idGenerators';

const SERVER_STATUS = {
  RUNNING: 'Running',
  STOPPED: 'Stopped',
} as const;

const DEFAULT_MEMORY_GB = 8;
const DEFAULT_CPU_COUNT = 1;
const DEFAULT_UPTIME_STOPPED = '0:00:00:00';
const DEFAULT_UPTIME_STARTED = '0:00:00:01';

type SortDirection = 'asc' | 'desc';

interface ServerState {
  servers: Server[];

  notifications: {
    hasNew: boolean;
  };

  sorting: {
    column: keyof Server | null;
    direction: SortDirection;
  };
}

const initialState: ServerState = {
  servers: [
    {
      id: '3ad83658-e748-11ee-8c99-0242ac120002',
      status: 'Running',
      hostServer: '43C07-27',
      cpuPercent: 7.72,
      memoryPercent: 16.68,
      memoryValue: '16.68 GiB',
      uptime: '4:12:41:09',
      alerts: { count: 3, type: 'Important' },
    },
    {
      id: '7bf21a4e-e748-11ee-8c99-0242ac120003',
      status: 'Stopped',
      hostServer: '43C07-27',
      cpuPercent: 2.24,
      memoryPercent: 21.68,
      memoryValue: '21.68 GiB',
      uptime: '0:00:00:00',
      alerts: { count: 3, type: 'Critical' },
    },
    {
      id: 'a9c45e82-e748-11ee-8c99-0242ac120004',
      status: 'Running',
      hostServer: '43C07-27',
      cpuPercent: 6.74,
      memoryPercent: 45.38,
      memoryValue: '45.38 GiB',
      uptime: '7:03:22:15',
      alerts: { count: 5, type: 'Moderate' },
    },
    {
      id: 'c8f19b7a-e748-11ee-8c99-0242ac120005',
      status: 'Running',
      hostServer: '43C07-26',
      cpuPercent: 5.72,
      memoryPercent: 5.68,
      memoryValue: '5.68 GiB',
      uptime: '1:18:45:03',
      alerts: { count: 0, type: 'All good' },
    },
    {
      id: 'e7d42c96-e748-11ee-8c99-0242ac120006',
      status: 'Stopped',
      hostServer: '43C07-25',
      cpuPercent: 2.24,
      memoryPercent: 21.68,
      memoryValue: '21.68 GiB',
      uptime: '0:00:00:00',
      alerts: { count: 1, type: 'Critical' },
    },
  ],
  notifications: {
    hasNew: true,
  },
  sorting: {
    column: null,
    direction: 'asc',
  },
};

const serverSlice = createSlice({
  name: 'servers',
  initialState,
  reducers: {
    setSorting: (
      state,
      action: PayloadAction<{ column: keyof Server; direction: SortDirection }>
    ) => {
      state.sorting.column = action.payload.column;
      state.sorting.direction = action.payload.direction;
    },

    clearNotifications: state => {
      state.notifications.hasNew = false;
    },

    addServer: (
      state,
      action: PayloadAction<{ name: string; cpuCount?: number | string }>
    ) => {
      const cpuCount = action.payload.cpuCount
        ? Number(action.payload.cpuCount)
        : DEFAULT_CPU_COUNT;

      const newServer: Server = {
        id: generateServerId(),
        status: SERVER_STATUS.STOPPED,
        hostServer: action.payload.name,
        cpuPercent: cpuCount,
        memoryPercent: DEFAULT_MEMORY_GB,
        memoryValue: `${DEFAULT_MEMORY_GB} GiB`,
        uptime: DEFAULT_UPTIME_STOPPED,
        alerts: { count: 0, type: 'All good' },
      };

      state.servers.push(newServer);
    },

    toggleServerStatus: (state, action: PayloadAction<string>) => {
      const server = state.servers.find(s => s.id === action.payload);
      if (!server) return;

      if (server.status === SERVER_STATUS.RUNNING) {
        server.status = SERVER_STATUS.STOPPED;
        server.uptime = DEFAULT_UPTIME_STOPPED;
      } else {
        server.status = SERVER_STATUS.RUNNING;
        server.uptime = DEFAULT_UPTIME_STARTED;
      }
    },
  },
});

export const { setSorting, clearNotifications, addServer, toggleServerStatus } =
  serverSlice.actions;

export type { ServerState };
export default serverSlice.reducer;
