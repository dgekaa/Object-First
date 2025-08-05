import { ReactNode } from 'react';

export interface ChartCardProps {
  title: string;
  children: ReactNode;
  headerRight?: ReactNode;
}
