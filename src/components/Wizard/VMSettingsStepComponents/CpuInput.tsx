import React, { memo, useCallback, useMemo } from 'react';
import { FormInput } from '../../FormInput';
import { CpuInputProps } from './types';

const CpuInputComponent: React.FC<CpuInputProps> = ({
  cpuCount,
  cpuError,
  touchedCpu,
  onCpuChange,
  onCpuIncrease,
  onCpuDecrease,
  setTouchedCpu,
}) => {
  const memoizedCpuCount = useMemo(() => cpuCount, [cpuCount]);

  const handleCpuChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!touchedCpu) {
        setTouchedCpu(true);
      }
      const num = Number(e.target.value);
      if (!isNaN(num)) {
        onCpuChange(e);
      }
    },
    [touchedCpu, onCpuChange, setTouchedCpu]
  );

  const handleCpuIncrease = useCallback(() => {
    if (!touchedCpu) setTouchedCpu(true);
    onCpuIncrease();
  }, [touchedCpu, onCpuIncrease, setTouchedCpu]);

  const handleCpuDecrease = useCallback(() => {
    if (!touchedCpu) setTouchedCpu(true);
    onCpuDecrease();
  }, [touchedCpu, onCpuDecrease, setTouchedCpu]);

  return (
    <FormInput
      type="number"
      label="CPU"
      value={memoizedCpuCount}
      onChange={handleCpuChange}
      error={touchedCpu ? cpuError : ''}
      helpText="Enter number of processors up to 12"
      pattern="[0-9]*"
      min={1}
      max={12}
      showControls={true}
      onIncrease={handleCpuIncrease}
      onDecrease={handleCpuDecrease}
    />
  );
};

export const CpuInput = memo(CpuInputComponent);
