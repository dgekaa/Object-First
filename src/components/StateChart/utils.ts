import { StateData, ChartSegment } from './types';

export const calculateChartSegments = (
  data: StateData[],
  total: number,
  radius: number
): ChartSegment[] => {
  const circumference = 2 * Math.PI * radius;
  let cumulativePercentage = 0;

  return data.map(item => {
    const percentage = total > 0 ? (item.value / total) * 100 : 0;

    const hasMultipleValues = data.filter(d => d.value > 0).length > 1;
    const gapSize = hasMultipleValues ? 0.7 : 0;
    const adjustedPercentage = Math.max(0, percentage - gapSize);

    const strokeDasharray = `${(adjustedPercentage / 100) * circumference} ${circumference}`;
    const strokeDashoffset = -((cumulativePercentage / 100) * circumference);

    cumulativePercentage += percentage;

    return {
      ...item,
      strokeDasharray,
      strokeDashoffset,
    };
  });
};
