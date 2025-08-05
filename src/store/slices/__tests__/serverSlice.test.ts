import { describe, it, expect, vi } from 'vitest';
import reducer, { addServer, type ServerState } from '../serverSlice';
import * as idGenerators from '../../../utils/idGenerators';
import { type Server } from '../../../types/server';

const SERVER_STATUS = {
  RUNNING: 'Running' as const,
  STOPPED: 'Stopped' as const,
};

const DEFAULT_MEMORY_GB = 8;
const DEFAULT_UPTIME_STOPPED = '0:00:00:00';

vi.mock('../../../utils/idGenerators', () => ({
  generateServerId: vi.fn(() => 'mocked-server-id'),
}));

describe('serverSlice', () => {
  describe('addServer reducer', () => {
    const initialState: ServerState = {
      servers: [],
      notifications: {
        hasNew: false,
      },
      sorting: {
        column: null,
        direction: 'asc',
      },
    };

    it('should add a new server with default CPU count when not provided', () => {
      const action = addServer({ name: 'test-server' });
      const state = reducer(initialState, action);

      expect(idGenerators.generateServerId).toHaveBeenCalled();
      expect(state.servers).toHaveLength(1);
      expect(state.servers[0]).toEqual({
        id: 'mocked-server-id',
        status: SERVER_STATUS.STOPPED,
        hostServer: 'test-server',
        cpuPercent: 1,
        memoryPercent: DEFAULT_MEMORY_GB,
        memoryValue: `${DEFAULT_MEMORY_GB} GiB`,
        uptime: DEFAULT_UPTIME_STOPPED,
        alerts: { count: 0, type: 'All good' },
      });
    });

    it('should add a new server with provided CPU count as number', () => {
      const action = addServer({ name: 'test-server', cpuCount: 4 });
      const state = reducer(initialState, action);

      expect(idGenerators.generateServerId).toHaveBeenCalled();
      expect(state.servers).toHaveLength(1);
      expect(state.servers[0]).toEqual({
        id: 'mocked-server-id',
        status: SERVER_STATUS.STOPPED,
        hostServer: 'test-server',
        cpuPercent: 4,
        memoryPercent: DEFAULT_MEMORY_GB,
        memoryValue: `${DEFAULT_MEMORY_GB} GiB`,
        uptime: DEFAULT_UPTIME_STOPPED,
        alerts: { count: 0, type: 'All good' },
      });
    });

    it('should add a new server with provided CPU count as string', () => {
      const action = addServer({ name: 'test-server', cpuCount: '2' });
      const state = reducer(initialState, action);

      expect(idGenerators.generateServerId).toHaveBeenCalled();
      expect(state.servers).toHaveLength(1);
      expect(state.servers[0]).toEqual({
        id: 'mocked-server-id',
        status: SERVER_STATUS.STOPPED,
        hostServer: 'test-server',
        cpuPercent: 2,
        memoryPercent: DEFAULT_MEMORY_GB,
        memoryValue: `${DEFAULT_MEMORY_GB} GiB`,
        uptime: DEFAULT_UPTIME_STOPPED,
        alerts: { count: 0, type: 'All good' },
      });
    });

    it('should append new server to existing servers array', () => {
      const existingServer: Server = {
        id: 'existing-server-id',
        status: SERVER_STATUS.RUNNING,
        hostServer: 'existing-server',
        cpuPercent: 6,
        memoryPercent: 16,
        memoryValue: '16 GiB',
        uptime: '1:00:00:00',
        alerts: { count: 1, type: 'Important' },
      };

      const stateWithServers: ServerState = {
        ...initialState,
        servers: [existingServer],
      };

      const action = addServer({ name: 'second-server' });
      const state = reducer(stateWithServers, action);

      expect(idGenerators.generateServerId).toHaveBeenCalled();
      expect(state.servers).toHaveLength(2);
      expect(state.servers[0]).toEqual(existingServer);
      expect(state.servers[1].hostServer).toBe('second-server');
    });
  });
});
