export interface StateData {
  label: string;
  value: number;
  color: string;
}

export interface StateChartProps {
  title?: string;
}

export interface ChartSegment extends StateData {
  strokeDasharray: string;
  strokeDashoffset: number;
}

export interface SvgContainerProps {
  width: number;
  height: number;
}

export interface ColorDotProps {
  color: string;
}
