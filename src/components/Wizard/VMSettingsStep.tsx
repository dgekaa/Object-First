import { memo, useMemo, useCallback } from 'react';
import type { JSX } from 'react';
import React from 'react';
import { SectionTitle, SectionDescription } from './styles';
import { FormInput } from '../FormInput/';
import { MemorySlider } from '../MemorySlider';
import { VMSettingsStepProps } from './types';

const VMSettingsStepComponent = ({
  cpuCount,
  ramSize,
  enableCounters,
  cpuError,
  ramError,
  onCpuChange,
  onRamChange,
  onRamSliderChange,
  onCountersChange,
  onCpuIncrease,
  onCpuDecrease,
  onRamIncrease,
  onRamDecrease,
}: VMSettingsStepProps): JSX.Element => {
  const handleCpuChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === '') {
        onCpuChange(e);
      } else {
        const num = Number(e.target.value);
        if (!isNaN(num)) {
          onCpuChange(e);
        }
      }
    },
    [onCpuChange]
  );

  const handleRamChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === '') {
        onRamChange(e);
      } else {
        const num = Number(e.target.value);
        if (!isNaN(num)) {
          onRamChange(e);
        }
      }
    },
    [onRamChange]
  );

  const handleRamSliderChange = useCallback(
    (value: number) => {
      onRamSliderChange(value);
    },
    [onRamSliderChange]
  );

  const memoizedRamSize = useMemo(
    () => (ramSize !== undefined && ramSize !== null ? ramSize : 24),
    [ramSize]
  );
  const memoizedCpuCount = useMemo(
    () => (cpuCount !== undefined && cpuCount !== null ? cpuCount : 6),
    [cpuCount]
  );
  const memoizedEnableCounters = useMemo(
    () => (enableCounters !== undefined ? enableCounters : false),
    [enableCounters]
  );

  const handleCpuIncrease = useCallback(() => {
    onCpuIncrease();
  }, [onCpuIncrease]);

  const handleCpuDecrease = useCallback(() => {
    onCpuDecrease();
  }, [onCpuDecrease]);

  const MemoizedCpuInput = useMemo(() => {
    return (
      <FormInput
        type="number"
        label="CPU"
        value={memoizedCpuCount}
        onChange={handleCpuChange}
        error={cpuError}
        helpText="Enter number of processors up to 12"
        pattern="[0-9]*"
        min={1}
        max={12}
        showControls={true}
        onIncrease={handleCpuIncrease}
        onDecrease={handleCpuDecrease}
      />
    );
  }, [
    memoizedCpuCount,
    handleCpuChange,
    cpuError,
    handleCpuIncrease,
    handleCpuDecrease,
  ]);

  const handleRamIncrease = useCallback(() => {
    onRamIncrease();
  }, [onRamIncrease]);

  const handleRamDecrease = useCallback(() => {
    onRamDecrease();
  }, [onRamDecrease]);

  const MemoizedRamInput = useMemo(() => {
    return (
      <FormInput
        type="number"
        label="RAM"
        value={memoizedRamSize}
        onChange={handleRamChange}
        error={ramError}
        helpText="Enter memory amount up to 50GB"
        pattern="[0-9]*"
        min={1}
        max={50}
        showControls={true}
        onIncrease={handleRamIncrease}
        onDecrease={handleRamDecrease}
      />
    );
  }, [
    memoizedRamSize,
    handleRamChange,
    ramError,
    handleRamIncrease,
    handleRamDecrease,
  ]);

  const handleCountersChange = useCallback(onCountersChange, [
    onCountersChange,
  ]);

  const MemoizedCountersInput = useMemo(() => {
    return (
      <FormInput
        type="checkbox"
        checked={memoizedEnableCounters}
        onChange={handleCountersChange}
        checkboxLabel="Enable virtualized CPU performance counters"
      />
    );
  }, [memoizedEnableCounters, handleCountersChange]);

  const MemoizedMemorySlider = useMemo(() => {
    return (
      <MemorySlider value={memoizedRamSize} onChange={handleRamSliderChange} />
    );
  }, [memoizedRamSize, handleRamSliderChange]);

  return (
    <>
      <SectionTitle>General Settings</SectionTitle>
      <SectionDescription>
        Configure the virtual machine hardware.
      </SectionDescription>

      {MemoizedCpuInput}

      {MemoizedCountersInput}

      {MemoizedRamInput}

      {MemoizedMemorySlider}
    </>
  );
};

export const VMSettingsStep = memo(VMSettingsStepComponent);
