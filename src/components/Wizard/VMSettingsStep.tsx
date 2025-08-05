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
  const [touchedFields, setTouchedFields] = React.useState<{
    cpu: boolean;
    ram: boolean;
  }>({ cpu: false, ram: false });

  const handleCpuChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!touchedFields.cpu) {
        setTouchedFields(prev => ({ ...prev, cpu: true }));
      }
      const num = Number(e.target.value);
      if (!isNaN(num)) {
        onCpuChange(e);
      }
    },
    [touchedFields.cpu, onCpuChange]
  );

  const handleRamChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!touchedFields.ram) {
        setTouchedFields(prev => ({ ...prev, ram: true }));
      }
      const num = Number(e.target.value);
      if (!isNaN(num)) {
        onRamChange(e);
      }
    },
    [touchedFields.ram, onRamChange]
  );

  const handleRamSliderChange = useCallback(
    (value: number) => {
      if (!touchedFields.ram) {
        setTouchedFields(prev => ({ ...prev, ram: true }));
      }
      onRamSliderChange(value);
    },
    [touchedFields.ram, onRamSliderChange]
  );

  const memoizedRamSize = useMemo(() => ramSize, [ramSize]);
  const memoizedCpuCount = useMemo(() => cpuCount, [cpuCount]);
  const memoizedEnableCounters = useMemo(
    () => enableCounters,
    [enableCounters]
  );

  const handleCpuIncrease = useCallback(() => {
    if (!touchedFields.cpu) setTouchedFields(prev => ({ ...prev, cpu: true }));
    onCpuIncrease();
  }, [touchedFields.cpu, onCpuIncrease]);

  const handleCpuDecrease = useCallback(() => {
    if (!touchedFields.cpu) setTouchedFields(prev => ({ ...prev, cpu: true }));
    onCpuDecrease();
  }, [touchedFields.cpu, onCpuDecrease]);

  const MemoizedCpuInput = useMemo(() => {
    return (
      <FormInput
        type="number"
        label="CPU"
        value={memoizedCpuCount}
        onChange={handleCpuChange}
        error={touchedFields.cpu ? cpuError : ''}
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
    touchedFields.cpu,
    cpuError,
    handleCpuIncrease,
    handleCpuDecrease,
  ]);

  const handleRamIncrease = useCallback(() => {
    if (!touchedFields.ram) setTouchedFields(prev => ({ ...prev, ram: true }));
    onRamIncrease();
  }, [touchedFields.ram, onRamIncrease]);

  const handleRamDecrease = useCallback(() => {
    if (!touchedFields.ram) setTouchedFields(prev => ({ ...prev, ram: true }));
    onRamDecrease();
  }, [touchedFields.ram, onRamDecrease]);

  const MemoizedRamInput = useMemo(() => {
    return (
      <FormInput
        type="number"
        label="RAM"
        value={memoizedRamSize}
        onChange={handleRamChange}
        error={touchedFields.ram ? ramError : ''}
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
    touchedFields.ram,
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
