import styled from 'styled-components';

export const FormGroup = styled.div`
  margin-bottom: 32px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: 8px;
`;

export const FloatingInputContainer = styled.div.withConfig({
  shouldForwardProp: (prop): boolean => prop !== 'hasError',
})<{ hasError?: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid
    ${(props): string =>
      props.hasError ? 'var(--color-red)' : 'var(--color-border-subtle)'};
  border-radius: 8px;
  background: white;

  &:focus-within {
    border: 1px solid
      ${(props): string => (props.hasError ? 'var(--color-red)' : '#5F3196')};
    outline: 2px solid
      ${(props): string => (props.hasError ? 'var(--color-red)' : '#5F3196')};
    outline-offset: 0px;
  }
`;

export const FloatingTextInput = styled.input.withConfig({
  shouldForwardProp: (prop): boolean =>
    !['hasError', 'hasValue'].includes(prop),
})<{ hasError?: boolean; hasValue: boolean }>`
  width: 100%;
  padding: 16px 16px 16px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  color: var(--color-text-primary);
  background: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: transparent;
  }
`;

export const FloatingNumberInput = styled.input.withConfig({
  shouldForwardProp: (prop): boolean =>
    !['hasError', 'hasValue'].includes(prop),
})<{ hasError?: boolean; hasValue: boolean }>`
  flex: 1;
  padding: 16px 16px 16px 16px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: var(--color-text-primary);
  font-weight: 600;

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  &::placeholder {
    color: transparent;
  }
`;

export const NumberInputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
`;

export const FloatingLabel = styled.label.withConfig({
  shouldForwardProp: (prop): boolean =>
    !['hasValue', 'hasError'].includes(prop),
})<{ hasValue: boolean; hasError?: boolean }>`
  position: absolute;
  left: 12px;
  top: ${(props): string => (props.hasValue ? '-12px' : '14px')};
  font-size: ${(props): string => (props.hasValue ? '12px' : '14px')};
  color: ${(props): string =>
    props.hasError
      ? 'var(--color-red)'
      : props.hasValue
        ? 'var(--color-purple)'
        : 'var(--color-text-secondary)'};
  background: white;
  padding: 0 4px;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  transform-origin: left;
  z-index: 1;

  ${FloatingInputContainer}:focus-within & {
    top: -12px;
    font-size: 12px;
    color: ${(props): string =>
      props.hasError ? 'var(--color-red)' : 'var(--color-purple)'};
  }
`;

export const NumberInputControls = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0 8px 8px 0;
  overflow: hidden;
  margin-right: 1px;
`;

export const NumberControlArrow = styled.button`
  background: none;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 12px;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  height: 24px;
  width: 32px;

  &:active {
    opacity: 0.6;
  }

  &:first-child {
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: var(--color-text-primary);
  cursor: pointer;
`;

export const HelpText = styled.div`
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-top: 4px;
  padding-left: 16px;
`;

export const ErrorMessage = styled.div`
  color: var(--color-red);
  font-size: 12px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 16px;
`;

export const ErrorIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 12px;
  color: var(--color-red);

  ${FloatingInputContainer}:focus-within & {
    padding-right: 10px;
  }
`;
