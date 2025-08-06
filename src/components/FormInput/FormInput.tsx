import { memo, useRef, useState, useEffect } from 'react';
import type { JSX } from 'react';
import React from 'react';
import { ErrorIcon } from '../../icons';
import {
  hasValue,
  handleNumericInputChange,
  validateNumberInput,
  isEmpty,
} from './utils';
import { FormInputProps } from './types';
import {
  FormGroup,
  Label,
  FloatingInputContainer,
  FloatingTextInput,
  FloatingNumberInput,
  NumberInputWrapper,
  FloatingLabel,
  NumberInputControls,
  NumberControlArrow,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  HelpText,
  ErrorMessage,
  ErrorIconContainer,
} from './styles';

const FormInputComponent = (props: FormInputProps): JSX.Element => {
  const { label, error, helpText, type } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [internalValue, setInternalValue] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');

  useEffect(() => {
    if (type === 'number') {
      const { value } = props;
      const currentInternalValue = internalValue === '' ? '' : internalValue;
      const externalValue = isEmpty(value) ? '' : String(value);

      if (currentInternalValue !== externalValue) {
        setInternalValue(externalValue);
      }
    }
  }, [type, props, internalValue]);

  const currentError = error || validationError;

  const renderInput = (): JSX.Element => {
    switch (type) {
      case 'text': {
        const { value, onChange } = props;

        return (
          <FloatingInputContainer hasError={!!currentError}>
            <FloatingTextInput
              type="text"
              value={value}
              onChange={onChange}
              placeholder=" "
              hasError={!!currentError}
              hasValue={hasValue(value)}
            />
            {currentError && (
              <ErrorIconContainer>
                <ErrorIcon />
              </ErrorIconContainer>
            )}
            <FloatingLabel hasValue={hasValue(value)} hasError={!!currentError}>
              {label}
            </FloatingLabel>
          </FloatingInputContainer>
        );
      }

      case 'number': {
        const {
          value,
          min,
          max,
          showControls,
          onChange,
          onIncrease,
          onDecrease,
        } = props;

        const handleNumberChange = (
          e: React.ChangeEvent<HTMLInputElement>
        ): void => {
          const success = handleNumericInputChange(
            e,
            10,
            onChange,
            (value: string): void => {
              setInternalValue(value);

              const validation = validateNumberInput(value, min, max);
              setValidationError(
                validation.isValid ? '' : validation.error || ''
              );
            }
          );

          if (!success) return;
        };

        const handleIncrease = (): void => {
          if (onIncrease) {
            const newValue = String((Number(displayValue) || 0) + 1);

            const validation = validateNumberInput(newValue, min, max);
            if (!validation.isValid) {
              return;
            }

            onIncrease();
            setInternalValue(newValue);
          }
        };

        const handleDecrease = (): void => {
          if (onDecrease) {
            const newValue = String((Number(displayValue) || 0) - 1);

            const validation = validateNumberInput(newValue, min, max);
            if (!validation.isValid) {
              return;
            }

            onDecrease();
            setInternalValue(newValue);
          }
        };

        const displayValue = internalValue || String(value || '');

        return (
          <FloatingInputContainer hasError={!!currentError}>
            <NumberInputWrapper>
              <FloatingNumberInput
                ref={inputRef}
                type="text"
                value={displayValue}
                onChange={handleNumberChange}
                maxLength={10}
                placeholder=" "
                hasError={!!currentError}
                hasValue={hasValue(displayValue)}
                inputMode="numeric"
                pattern="[0-9]*"
              />
            </NumberInputWrapper>

            {currentError && (
              <ErrorIconContainer>
                <ErrorIcon />
              </ErrorIconContainer>
            )}

            {showControls && onIncrease && onDecrease && !currentError && (
              <NumberInputControls>
                <NumberControlArrow
                  onClick={handleIncrease}
                  aria-label="Increase value"
                >
                  ▲
                </NumberControlArrow>
                <NumberControlArrow
                  onClick={handleDecrease}
                  aria-label="Decrease value"
                >
                  ▼
                </NumberControlArrow>
              </NumberInputControls>
            )}

            <FloatingLabel
              hasValue={hasValue(displayValue)}
              hasError={!!currentError}
            >
              {label}
            </FloatingLabel>
          </FloatingInputContainer>
        );
      }

      case 'checkbox': {
        const { checked, checkboxLabel, onChange } = props;

        const handleCheckboxChange = (): void => {
          onChange(!checked);
        };

        return (
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={checked}
              onChange={e => onChange(e.target.checked)}
            />
            <CheckboxLabel onClick={handleCheckboxChange}>
              {checkboxLabel}
            </CheckboxLabel>
          </CheckboxContainer>
        );
      }

      default:
        return <></>;
    }
  };

  const isFloatingLabel = type === 'text' || type === 'number';

  return (
    <FormGroup>
      {label && !isFloatingLabel && <Label>{label}</Label>}
      {renderInput()}
      {currentError && <ErrorMessage>{currentError}</ErrorMessage>}
      {helpText && !currentError && <HelpText>{helpText}</HelpText>}
    </FormGroup>
  );
};

export const FormInput = memo(FormInputComponent);
