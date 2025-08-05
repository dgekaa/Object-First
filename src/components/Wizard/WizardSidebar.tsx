import { memo } from 'react';
import type { JSX } from 'react';
import {
  LeftPanel,
  WelcomeText,
  ModalTitle,
  WizardSteps,
  StepItem,
  StepNumber,
  StepText,
  DecorationContainer,
  DecorationImage,
} from './styles';
import { WizardSidebarProps } from './types';

const WizardSidebarComponent = ({
  currentStep,
}: WizardSidebarProps): JSX.Element => (
  <LeftPanel>
    <WelcomeText>Welcome to the</WelcomeText>
    <ModalTitle>New Virtual Machine Wizard</ModalTitle>

    <WizardSteps>
      <StepItem active={currentStep === 1} completed={currentStep > 1}>
        <StepNumber active={currentStep === 1} completed={currentStep > 1}>
          {currentStep > 1 ? '✓' : currentStep === 1 ? '—' : ''}
        </StepNumber>
        <StepText active={currentStep === 1} completed={currentStep > 1}>
          Virtual Machine Name
        </StepText>
      </StepItem>

      <StepItem active={currentStep === 2} completed={currentStep > 2}>
        <StepNumber active={currentStep === 2} completed={currentStep > 2}>
          {currentStep > 2 ? '✓' : currentStep === 2 ? '—' : ''}
        </StepNumber>
        <StepText active={currentStep === 2} completed={currentStep > 2}>
          General Settings
        </StepText>
      </StepItem>
    </WizardSteps>

    <DecorationContainer>
      <DecorationImage
        src="/images/wizard-decoration.svg"
        alt="Wizard decoration"
      />
    </DecorationContainer>
  </LeftPanel>
);

export const WizardSidebar = memo(WizardSidebarComponent);
