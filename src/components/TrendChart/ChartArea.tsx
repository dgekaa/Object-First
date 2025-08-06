import { useMemo, memo } from 'react';
import type { JSX } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { ChartAreaProps } from './types';
import { getUniqueGradientId, formatValue } from './utils';
import { ChartWrapper } from './styles';

const ChartAreaComponent = ({ data, height }: ChartAreaProps): JSX.Element => {
  const gradientId = useMemo(() => getUniqueGradientId(), []);

  const axisConfig = useMemo(
    () => ({
      xAxis: {
        dataKey: 'date',
        axisLine: false,
        tickLine: false,
        tick: {
          fontSize: 12,
          fill: 'var(--color-text-secondary)',
          fontFamily: 'Manrope, sans-serif',
        },
        dy: 10,
      },
      yAxis: {
        axisLine: false,
        tickLine: false,
        tick: {
          fontSize: 12,
          fill: 'var(--color-text-secondary)',
          fontFamily: 'Manrope, sans-serif',
        },
      },
      area: {
        type: 'monotone' as const,
        dataKey: 'value',
        stroke: 'var(--color-purple)',
        strokeWidth: 2,
        fill: `url(#${gradientId})`,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
        isAnimationActive: false,
      },
      grid: {
        strokeDasharray: '3 3',
        stroke: 'var(--color-border-subtle)',
        horizontal: true,
        vertical: true,
      },
    }),
    [gradientId]
  );

  return (
    <ChartWrapper height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="var(--color-purple)"
                stopOpacity={0.3}
              />
              <stop
                offset="100%"
                stopColor="var(--color-purple)"
                stopOpacity={0.05}
              />
            </linearGradient>
          </defs>

          <CartesianGrid {...axisConfig.grid} />

          <XAxis {...axisConfig.xAxis} tickFormatter={undefined} />

          <YAxis
            {...axisConfig.yAxis}
            tickFormatter={formatValue}
            domain={[0, 'dataMax + 200']}
          />

          <Area {...axisConfig.area} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export const ChartArea = memo(ChartAreaComponent, (prevProps, nextProps) => {
  if (prevProps.height !== nextProps.height) return false;

  if (prevProps.data === nextProps.data) return true;

  if (prevProps.data.length !== nextProps.data.length) return false;

  return prevProps.data.every((item, index) => {
    const nextItem = nextProps.data[index];
    return item.date === nextItem.date && item.value === nextItem.value;
  });
});
