import React, { memo, useCallback, useMemo } from 'react';
import { MemorySlider } from '../../MemorySlider';
import { MemorySliderComponentProps } from './types';

const MemorySliderComponentBase: React.FC<MemorySliderComponentProps> = ({
  ramSize,
  onRamSliderChange,
  touchedRam,
  setTouchedRam,
}) => {
  const memoizedRamSize = useMemo(() => ramSize, [ramSize]);

  const handleRamSliderChange = useCallback(
    (value: number) => {
      if (!touchedRam) {
        setTouchedRam(true);
      }
      onRamSliderChange(value);
    },
    [touchedRam, onRamSliderChange, setTouchedRam]
  );

  return (
    <MemorySlider value={memoizedRamSize} onChange={handleRamSliderChange} />
  );
};

export const MemorySliderComponent = memo(MemorySliderComponentBase);
