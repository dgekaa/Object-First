import React from 'react';
import { ValidationResult } from './types';

export const isEmpty = (value: unknown): boolean => {
  return value === '' || value === null || value === undefined;
};

export const hasValue = (value: unknown): boolean => {
  return !isEmpty(value);
};

export const isValidNumericInput = (value: string): boolean => {
  const numericPattern = /^\d*$/;
  return value === '' || numericPattern.test(value);
};

export function createNumericInputEvent(
  originalEvent: React.ChangeEvent<HTMLInputElement>,
  stringValue: string
): React.ChangeEvent<HTMLInputElement> {
  const newEvent = Object.create(Object.getPrototypeOf(originalEvent));

  Object.assign(newEvent, originalEvent);

  newEvent.target = {
    ...originalEvent.target,
    value: stringValue,
    type: 'text',
  };

  newEvent.currentTarget = {
    ...originalEvent.currentTarget,
    value: stringValue,
    type: 'text',
  };

  return newEvent;
}

export const handleNumericInputChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  maxLength: number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onValueUpdate?: (value: string) => void
): boolean => {
  const newValue = event.target.value;

  if (newValue.length > maxLength) {
    event.preventDefault();
    return false;
  }

  if (!isValidNumericInput(newValue)) {
    return false;
  }

  const customEvent = createNumericInputEvent(event, newValue);

  onChange(customEvent);

  if (onValueUpdate) {
    onValueUpdate(newValue);
  }

  return true;
};

export const validateNumberInput = (
  value: string | number,
  min?: number,
  max?: number
): ValidationResult => {
  if (isEmpty(value)) {
    return { isValid: true };
  }

  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(numValue)) {
    return { isValid: false, error: 'Please enter a valid number' };
  }

  if (min !== undefined && numValue < min) {
    return { isValid: false, error: `Value must be at least ${min}` };
  }

  if (max !== undefined && numValue > max) {
    return { isValid: false, error: `Value must be no more than ${max}` };
  }

  return { isValid: true };
};
