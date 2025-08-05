import React, { memo, useCallback, useMemo } from 'react';
import { FormInput } from '../../FormInput';
import { RamInputProps } from './types';

const RamInputComponent: React.FC<RamInputProps> = ({
  ramSize,
  ramError,
  touchedRam,
  onRamChange,
  onRamIncrease,
  onRamDecrease,
  setTouchedRam,
}) => {
  const memoizedRamSize = useMemo(() => ramSize, [ramSize]);

  const handleRamChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!touchedRam) {
        setTouchedRam(true);
      }
      const num = Number(e.target.value);
      if (!isNaN(num)) {
        onRamChange(e);
      }
    },
    [touchedRam, onRamChange, setTouchedRam]
  );

  const handleRamIncrease = useCallback(() => {
    if (!touchedRam) setTouchedRam(true);
    onRamIncrease();
  }, [touchedRam, onRamIncrease, setTouchedRam]);

  const handleRamDecrease = useCallback(() => {
    if (!touchedRam) setTouchedRam(true);
    onRamDecrease();
  }, [touchedRam, onRamDecrease, setTouchedRam]);

  return (
    <FormInput
      type="number"
      label="RAM"
      value={memoizedRamSize}
      onChange={handleRamChange}
      error={touchedRam ? ramError : ''}
      helpText="Enter memory amount up to 50GB"
      pattern="[0-9]*"
      min={1}
      max={50}
      showControls={true}
      onIncrease={handleRamIncrease}
      onDecrease={handleRamDecrease}
    />
  );
};

export const RamInput = memo(RamInputComponent);
