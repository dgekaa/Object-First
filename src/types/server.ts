export interface Server {
  id: string;
  status: 'Running' | 'Stopped';
  hostServer: string;
  cpuPercent: number;
  memoryPercent: number;
  memoryValue: string;
  uptime: string;
  alerts: {
    count: number;
    type: 'Critical' | 'Important' | 'Moderate' | 'All good';
  };
}

export interface TrendDataPoint {
  date: string;
  value: number;
}
