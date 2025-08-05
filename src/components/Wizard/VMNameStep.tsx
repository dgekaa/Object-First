import { memo } from 'react';
import type { JSX } from 'react';
import { SectionTitle, SectionDescription } from './styles';
import { FormInput } from '../FormInput/';
import { VMNameStepProps } from './types';

const VMNameStepComponent = ({
  vmName,
  error,
  onNameChange,
}: VMNameStepProps): JSX.Element => {
  return (
    <>
      <SectionTitle>Select a name</SectionTitle>
      <SectionDescription>
        A virtual machine requires storage so that you can install an operating
        system.
      </SectionDescription>

      <FormInput
        type="text"
        label="Name"
        value={vmName}
        onChange={onNameChange}
        error={error}
        helpText="Enter unique name up to 80 characters"
      />
    </>
  );
};

export const VMNameStep = memo(VMNameStepComponent);
