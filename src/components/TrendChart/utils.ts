import type { TrendDataPoint } from '../../types/server';
import type { PeriodOption } from './types';

let gradientIdCounter = 0;
export const getUniqueGradientId = (): string =>
  `trendGradient_${++gradientIdCounter}`;

const trendDataCache = new Map<PeriodOption, TrendDataPoint[]>();

export const generateTrendData = (period: PeriodOption): TrendDataPoint[] => {
  if (trendDataCache.has(period)) {
    return trendDataCache.get(period)!;
  }

  const generateDates = (period: PeriodOption): string[] => {
    const now = new Date();
    const dates: string[] = [];

    switch (period) {
      case 'Last 14 days':
        for (let i = 13; i >= 0; i--) {
          const date = new Date(now);
          date.setDate(date.getDate() - i);
          dates.push(
            `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`
          );
        }
        return dates.slice(-10);

      case 'Last 30 days':
        for (let i = 29; i >= 0; i -= 3) {
          const date = new Date(now);
          date.setDate(date.getDate() - i);
          dates.push(
            `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`
          );
        }
        return dates.slice(0, 10);

      case 'Last 3 months':
        for (let i = 11; i >= 0; i--) {
          const date = new Date(now);
          date.setDate(date.getDate() - i * 7);
          dates.push(
            `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`
          );
        }
        return dates.slice(-10);

      case 'Last 6 months':
        for (let i = 9; i >= 0; i--) {
          const date = new Date(now);
          date.setDate(date.getDate() - i * 18);
          dates.push(
            `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`
          );
        }
        return dates;

      case 'Last year':
        for (let i = 11; i >= 0; i--) {
          const date = new Date(now);
          date.setMonth(date.getMonth() - i);
          dates.push(
            `${date.toLocaleString('en-US', { month: 'short' })} ${date.getFullYear().toString().substr(2)}`
          );
        }
        return dates;

      default:
        return [
          '11/06',
          '12/06',
          '13/06',
          '14/06',
          '15/06',
          '16/06',
          '17/06',
          '18/06',
          '19/06',
          '20/06',
        ];
    }
  };

  const dates = generateDates(period);

  const baseMultiplier = ((): number => {
    switch (period) {
      case 'Last 14 days':
        return 1;
      case 'Last 30 days':
        return 1.2;
      case 'Last 3 months':
        return 2;
      case 'Last 6 months':
        return 3.5;
      case 'Last year':
        return 6;
      default:
        return 1;
    }
  })();

  const data = dates.map((date, index) => {
    const baseValue = 80 + index * 60;
    const variance = Math.sin(index * 0.9) * 80 + Math.cos(index * 1.1) * 40;
    const value = Math.max(30, baseValue + variance) * baseMultiplier;

    return {
      date,
      value: Math.round(value),
    };
  });

  trendDataCache.set(period, data);

  return data;
};

export const formatValue = (value: number): string => {
  if (value >= 1000) {
    return `${Math.round(value / 100) / 10}K TB`;
  }
  return `${value} TB`;
};

export const periodOptions: PeriodOption[] = [
  'Last 14 days',
  'Last 30 days',
  'Last 3 months',
  'Last 6 months',
  'Last year',
];
