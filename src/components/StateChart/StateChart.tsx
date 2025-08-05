import { memo } from 'react';
import type { JSX } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { ChartCard } from '../ChartCard';
import { StateChartProps, StateData } from './types';
import { calculateChartSegments } from './utils';
import {
  ChartWrapper,
  SvgContainer,
  CenterContent,
  TotalNumber,
  TotalLabel,
  Legend,
  LegendItem,
  LegendLeft,
  ColorDot,
  LegendValue,
  LegendLabel,
  AnimatedCircle,
} from './styles';

const StateChartComponent = ({
  title = 'State',
}: StateChartProps): JSX.Element => {
  const servers = useAppSelector(state => state.servers.servers);

  const runningCount = servers.filter(
    server => server.status === 'Running'
  ).length;

  const stoppedCount = servers.filter(
    server => server.status === 'Stopped'
  ).length;

  const data: StateData[] = [
    { label: 'Running', value: runningCount, color: 'var(--color-green)' },
    { label: 'Stopped', value: stoppedCount, color: 'var(--color-red)' },
  ];

  const size = 178;
  const total = runningCount + stoppedCount;
  const strokeWidth = 25;
  const radius = (size - strokeWidth) / 2;

  const segments = calculateChartSegments(data, total, radius);

  return (
    <ChartCard title={title}>
      <ChartWrapper>
        <SvgContainer width={size} height={size}>
          <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
            {segments.map(segment => (
              <AnimatedCircle
                key={segment.label}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={segment.color}
                strokeWidth={strokeWidth}
                strokeDasharray={segment.strokeDasharray}
                strokeDashoffset={segment.strokeDashoffset}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
            ))}
          </svg>

          <CenterContent>
            <TotalNumber>{total}</TotalNumber>
            <TotalLabel>Total number</TotalLabel>
          </CenterContent>
        </SvgContainer>

        <Legend>
          {data.map((item, index) => (
            <LegendItem key={`legend-${item.label}-${index}`}>
              <LegendLeft>
                <ColorDot color={item.color} />
                <LegendValue>{item.value}</LegendValue>
              </LegendLeft>
              <LegendLabel>{item.label}</LegendLabel>
            </LegendItem>
          ))}
        </Legend>
      </ChartWrapper>
    </ChartCard>
  );
};

export const StateChart = memo(StateChartComponent);
