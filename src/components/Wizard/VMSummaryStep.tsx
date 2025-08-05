import { memo } from 'react';
import type { JSX } from 'react';
import {
  SectionTitle,
  SectionDescription,
  SummaryContainer,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
} from './styles';
import { VMSummaryStepProps } from './types';

const VMSummaryStepComponent = ({
  vmName,
  cpuCount,
  ramSize,
}: VMSummaryStepProps): JSX.Element => (
  <>
    <SectionTitle>Ready to complete</SectionTitle>
    <SectionDescription>
      Review your settings selection before finishing the wizard.
    </SectionDescription>

    <SummaryContainer>
      <SummaryRow>
        <SummaryLabel>Name</SummaryLabel>
        <SummaryValue>{vmName}</SummaryValue>
      </SummaryRow>
      <SummaryRow>
        <SummaryLabel>CPU</SummaryLabel>
        <SummaryValue>{cpuCount || 'Not set'}</SummaryValue>
      </SummaryRow>
      <SummaryRow>
        <SummaryLabel>RAM</SummaryLabel>
        <SummaryValue>{ramSize ? `${ramSize} GB` : 'Not set'}</SummaryValue>
      </SummaryRow>
    </SummaryContainer>
  </>
);

export const VMSummaryStep = memo(VMSummaryStepComponent);
