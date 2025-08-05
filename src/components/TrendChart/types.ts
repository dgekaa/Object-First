import type { TrendDataPoint } from '../../types/server';

export interface TrendChartProps {
  title?: string;
  period?: PeriodOption;
}

export interface ChartAreaProps {
  data: TrendDataPoint[];
  height: number;
}

export type PeriodOption =
  | 'Last 14 days'
  | 'Last 30 days'
  | 'Last 3 months'
  | 'Last 6 months'
  | 'Last year';

export interface StyledChartWrapperProps {
  height: number;
}

export interface StyledPeriodButtonProps {
  active?: boolean;
}
