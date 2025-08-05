import { useState, useEffect, useMemo, useCallback, memo } from 'react';
import type { JSX } from 'react';
import { ChartCard } from '../ChartCard';
import { TrendChartProps, PeriodOption } from './types';
import { generateTrendData, periodOptions } from './utils';
import { ChartArea } from './ChartArea';
import {
  PeriodSelector,
  PeriodButton,
  DropdownIcon,
  DropdownMenu,
  DropdownItem,
} from './styles';

const TrendChartComponent = ({
  title = 'Trend',
  period = 'Last 14 days',
}: TrendChartProps): JSX.Element => {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodOption>(period);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const data = useMemo(() => {
    return generateTrendData(selectedPeriod);
  }, [selectedPeriod]);

  const handlePeriodChange = useCallback((option: PeriodOption) => {
    setSelectedPeriod(option);
    setIsDropdownOpen(false);
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (!event.target) return;

      const targetElement =
        event.target instanceof Element ? event.target : null;
      if (targetElement && !targetElement.closest('[data-period-selector]')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <ChartCard
      title={title}
      headerRight={
        <PeriodSelector data-period-selector>
          <PeriodButton active onClick={toggleDropdown}>
            {selectedPeriod}
          </PeriodButton>
          <DropdownIcon onClick={toggleDropdown}>
            {isDropdownOpen ? '▲' : '▼'}
          </DropdownIcon>
          {isDropdownOpen && (
            <DropdownMenu role="menu">
              {periodOptions
                .filter(option => option !== selectedPeriod)
                .map(option => (
                  <DropdownItem
                    key={option}
                    onClick={() => handlePeriodChange(option)}
                  >
                    {option}
                  </DropdownItem>
                ))}
            </DropdownMenu>
          )}
        </PeriodSelector>
      }
    >
      <ChartArea data={data} height={200} />
    </ChartCard>
  );
};

export const TrendChart = memo(TrendChartComponent, (prevProps, nextProps) => {
  return (
    prevProps.title === nextProps.title && prevProps.period === nextProps.period
  );
});
