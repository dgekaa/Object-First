import React from 'react';

export interface WizardSidebarProps {
  currentStep: number;
}

export interface VMNameStepProps {
  vmName: string;
  error: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface VMSettingsStepProps {
  cpuCount: number | string;
  ramSize: number | string;
  enableCounters: boolean;
  cpuError: string;
  ramError: string;
  onCpuChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRamChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRamSliderChange: (value: number) => void;
  onCountersChange: (checked: boolean) => void;
  onCpuIncrease: () => void;
  onCpuDecrease: () => void;
  onRamIncrease: () => void;
  onRamDecrease: () => void;
}

export interface VMSummaryStepProps {
  vmName: string;
  cpuCount: number | string;
  ramSize: number | string;
}

export interface WizardActionsProps {
  currentStep: number;
  isValid: boolean;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
}

export interface NewVMModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, cpuCount?: number | string) => void;
}
