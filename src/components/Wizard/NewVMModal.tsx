import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { JSX } from 'react';
import { ConfirmationModal } from '../ConfirmationModal/';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalHeaderTitle as ModalTitle,
  CloseButton,
  ModalContent,
  RightPanel,
  ContentArea,
  ActionsArea,
} from './styles';
import { NewVMModalProps } from './types';
import { VMNameStep } from './VMNameStep';
import { VMSettingsStep } from './VMSettingsStep';
import { VMSummaryStep } from './VMSummaryStep';
import { WizardSidebar } from './WizardSidebar';
import { WizardActions } from './WizardActions';
import {
  validateVMName,
  validateCPUCount,
  validateRAMSize,
} from './validation';

const DEFAULT_CPU_COUNT = 6;
const DEFAULT_RAM_SIZE = 24;
const DEFAULT_STEP = 1;

export const NewVMModal = ({
  isOpen,
  onClose,
  onSubmit,
}: NewVMModalProps): JSX.Element | null => {
  const [vmName, setVmName] = useState('');
  const [step, setStep] = useState(DEFAULT_STEP);
  const [error, setError] = useState('');
  const [cpuCount, setCpuCount] = useState<number | string>(DEFAULT_CPU_COUNT);
  const [ramSize, setRamSize] = useState<number | string>(DEFAULT_RAM_SIZE);
  const [enableCounters, setEnableCounters] = useState(false);
  const [cpuError, setCpuError] = useState('');
  const [ramError, setRamError] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        if (hasUnsavedChanges) {
          setShowConfirmation(true);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return (): void => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, hasUnsavedChanges, onClose]);

  useEffect(() => {
    const hasChanges =
      Boolean(vmName.trim()) ||
      cpuCount !== DEFAULT_CPU_COUNT ||
      ramSize !== DEFAULT_RAM_SIZE ||
      enableCounters;
    setHasUnsavedChanges(hasChanges);
  }, [vmName, cpuCount, ramSize, enableCounters]);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newName = e.target.value;
      setVmName(newName);
      const validationError = validateVMName(newName);
      setError(validationError);
    },
    []
  );

  const handleCpuChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      const newCount = newValue === '' ? '' : Number(newValue);
      setCpuCount(newCount);
      const validationError = validateCPUCount(newCount);
      setCpuError(validationError);
    },
    []
  );

  const handleRamChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      const newSize = newValue === '' ? '' : Number(newValue);
      setRamSize(newSize);
      const validationError = validateRAMSize(newSize);
      setRamError(validationError);
    },
    []
  );

  const handleRamIncrease = useCallback(() => {
    const currentValue = ramSize === '' ? 0 : Number(ramSize);
    const newSize = Math.min(currentValue + 1, 50);
    setRamSize(newSize);
    const validationError = validateRAMSize(newSize);
    setRamError(validationError);
  }, [ramSize]);

  const handleRamDecrease = useCallback(() => {
    const currentValue = ramSize === '' ? 0 : Number(ramSize);
    const newSize = Math.max(currentValue - 1, 1);
    setRamSize(newSize);
    const validationError = validateRAMSize(newSize);
    setRamError(validationError);
  }, [ramSize]);

  const handleRamSliderChange = useCallback((value: number) => {
    setRamSize(value);
    const validationError = validateRAMSize(value);
    setRamError(validationError);
  }, []);

  const handleCpuIncrease = useCallback(() => {
    const currentValue = cpuCount === '' ? 0 : Number(cpuCount);
    const newCount = Math.min(currentValue + 1, 12);
    setCpuCount(newCount);
    const validationError = validateCPUCount(newCount);
    setCpuError(validationError);
  }, [cpuCount]);

  const handleCpuDecrease = useCallback(() => {
    const currentValue = cpuCount === '' ? 0 : Number(cpuCount);
    const newCount = Math.max(currentValue - 1, 1);
    setCpuCount(newCount);
    const validationError = validateCPUCount(newCount);
    setCpuError(validationError);
  }, [cpuCount]);

  const handleCountersChange = useCallback((checked: boolean) => {
    setEnableCounters(checked);
  }, []);

  const isValid: boolean = useMemo(() => {
    if (step === 1) {
      return Boolean(vmName.trim() && !error);
    } else if (step === 2) {
      const hasCpuValue =
        cpuCount !== null && cpuCount !== undefined && cpuCount !== '';
      const hasRamValue =
        ramSize !== null && ramSize !== undefined && ramSize !== '';
      return Boolean(
        vmName.trim() &&
          !error &&
          !cpuError &&
          !ramError &&
          hasCpuValue &&
          hasRamValue
      );
    }
    return Boolean(vmName.trim() && !error && !cpuError && !ramError);
  }, [step, vmName, error, cpuError, ramError, cpuCount, ramSize]);

  const handleNext = useCallback(() => {
    if (!isValid) return;

    if (step === 1) {
      const cpuValidation = validateCPUCount(cpuCount);
      const ramValidation = validateRAMSize(ramSize);

      Promise.resolve().then(() => {
        setCpuError(cpuValidation);
        setRamError(ramValidation);
        setStep(2);
      });
    } else if (step === 2) {
      setStep(3);
    }
  }, [step, isValid, cpuCount, ramSize]);

  const handleBack = useCallback(() => {
    Promise.resolve().then(() => {
      if (step === 2) {
        setStep(1);
      } else if (step === 3) {
        setStep(2);
      }
    });
  }, [step]);

  const forceClose = useCallback(() => {
    setVmName('');
    setStep(DEFAULT_STEP);
    setError('');
    setCpuError('');
    setRamError('');
    setCpuCount(DEFAULT_CPU_COUNT);
    setRamSize(DEFAULT_RAM_SIZE);
    setEnableCounters(false);
    setShowConfirmation(false);
    setHasUnsavedChanges(false);
    onClose();
  }, [onClose]);

  const handleClose = useCallback(() => {
    if (hasUnsavedChanges) {
      setShowConfirmation(true);
    } else {
      forceClose();
    }
  }, [hasUnsavedChanges, forceClose]);

  const handleSubmit = useCallback(() => {
    if (isValid) {
      onSubmit(vmName, cpuCount);
      handleClose();
    }
  }, [isValid, vmName, cpuCount, onSubmit, handleClose]);

  const handleConfirmClose = useCallback(() => {
    forceClose();
  }, [forceClose]);

  const handleCancelClose = useCallback(() => {
    setShowConfirmation(false);
  }, []);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
      >
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>New virtual machine</ModalTitle>
            <CloseButton onClick={handleClose} aria-label="Close">
              ×
            </CloseButton>
          </ModalHeader>

          <ModalContent>
            <WizardSidebar currentStep={step} />

            <RightPanel>
              <ContentArea>
                {step === 1 && (
                  <VMNameStep
                    vmName={vmName}
                    error={error}
                    onNameChange={handleNameChange}
                  />
                )}

                {step === 2 && (
                  <VMSettingsStep
                    cpuCount={cpuCount}
                    ramSize={ramSize}
                    enableCounters={enableCounters}
                    cpuError={cpuError}
                    ramError={ramError}
                    onCpuChange={handleCpuChange}
                    onRamChange={handleRamChange}
                    onRamSliderChange={handleRamSliderChange}
                    onCountersChange={handleCountersChange}
                    onCpuIncrease={handleCpuIncrease}
                    onCpuDecrease={handleCpuDecrease}
                    onRamIncrease={handleRamIncrease}
                    onRamDecrease={handleRamDecrease}
                  />
                )}

                {step === 3 && (
                  <VMSummaryStep
                    vmName={vmName}
                    cpuCount={cpuCount}
                    ramSize={ramSize}
                  />
                )}
              </ContentArea>

              <ActionsArea>
                <WizardActions
                  currentStep={step}
                  isValid={isValid}
                  onNext={handleNext}
                  onBack={handleBack}
                  onSubmit={handleSubmit}
                />
              </ActionsArea>
            </RightPanel>
          </ModalContent>
        </ModalContainer>
      </ModalOverlay>

      <ConfirmationModal
        isOpen={showConfirmation}
        title="Cancel creating?"
        message="You have unsaved changes that will be lost. Do you want to continue?"
        confirmText="Leave"
        cancelText="Cancel"
        onConfirm={handleConfirmClose}
        onCancel={handleCancelClose}
      />
    </>
  );
};
