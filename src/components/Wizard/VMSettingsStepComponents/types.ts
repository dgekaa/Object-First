import { ChangeEvent } from 'react';

export interface CpuInputProps {
  cpuCount: number | string;
  cpuError: string;
  touchedCpu: boolean;
  onCpuChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCpuIncrease: () => void;
  onCpuDecrease: () => void;
  setTouchedCpu: (touched: boolean) => void;
}

export interface RamInputProps {
  ramSize: number | string;
  ramError: string;
  touchedRam: boolean;
  onRamChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onRamIncrease: () => void;
  onRamDecrease: () => void;
  setTouchedRam: (touched: boolean) => void;
}

export interface CountersInputProps {
  enableCounters: boolean;
  onCountersChange: (checked: boolean) => void;
}

export interface MemorySliderComponentProps {
  ramSize: number | string;
  onRamSliderChange: (value: number) => void;
  touchedRam: boolean;
  setTouchedRam: (touched: boolean) => void;
}
