import type { JSX } from 'react';
import { ChartCardProps } from './types';
import { CardContainer, ChartHeader, ChartTitle } from './styles';

export const ChartCard = ({
  title,
  children,
  headerRight,
}: ChartCardProps): JSX.Element => (
  <CardContainer>
    <ChartHeader>
      <ChartTitle>{title}</ChartTitle>
      {headerRight}
    </ChartHeader>
    {children}
  </CardContainer>
);
