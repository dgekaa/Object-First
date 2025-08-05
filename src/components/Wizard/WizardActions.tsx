import { memo } from 'react';
import type { JSX } from 'react';
import { ActionButtons } from './styles';
import { Button } from '../Button';
import { WizardActionsProps } from './types';

const WizardActionsComponent = ({
  currentStep,
  isValid,
  onNext,
  onBack,
  onSubmit,
}: WizardActionsProps): JSX.Element => (
  <ActionButtons>
    {currentStep === 1 ? (
      <Button onClick={onNext} disabled={!isValid} variant="primary">
        Next
      </Button>
    ) : currentStep === 2 ? (
      <>
        <Button onClick={onBack} variant="text">
          Back
        </Button>
        <Button onClick={onNext} disabled={!isValid} variant="primary">
          Next
        </Button>
      </>
    ) : (
      <>
        <Button onClick={onBack} variant="text">
          Back
        </Button>
        <Button onClick={onSubmit} variant="primary">
          Create
        </Button>
      </>
    )}
  </ActionButtons>
);

export const WizardActions = memo(WizardActionsComponent);
