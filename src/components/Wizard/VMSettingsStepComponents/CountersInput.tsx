import React, { memo, useCallback, useMemo } from 'react';
import { FormInput } from '../../FormInput';
import { CountersInputProps } from './types';

const CountersInputComponent: React.FC<CountersInputProps> = ({
  enableCounters,
  onCountersChange,
}) => {
  const memoizedEnableCounters = useMemo(
    () => enableCounters,
    [enableCounters]
  );

  const handleCountersChange = useCallback(onCountersChange, [
    onCountersChange,
  ]);

  return (
    <FormInput
      type="checkbox"
      checked={memoizedEnableCounters}
      onChange={handleCountersChange}
      checkboxLabel="Enable virtualized CPU performance counters"
    />
  );
};

export const CountersInput = memo(CountersInputComponent);
