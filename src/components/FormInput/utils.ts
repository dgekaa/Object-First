import React from 'react';

export const calculateTextWidth = (
  text: string,
  fontSize: number = 14,
  fontWeight: number = 600,
  fontFamily: string = 'system-ui, -apple-system, sans-serif'
): number => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    const baseCharWidth = fontSize * 0.6;
    const weightMultiplier = fontWeight >= 600 ? 1.1 : 1.0;
    return Math.ceil(text.length * baseCharWidth * weightMultiplier);
  }

  context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;

  const metrics = context.measureText(text);

  return Math.ceil(metrics.width);
};

export const isEmpty = (value: unknown): boolean => {
  return value === '' || value === null || value === undefined;
};

export const hasValue = (value: unknown): boolean => {
  return !isEmpty(value);
};

export const limitStringLength = (value: string, maxLength: number): string => {
  return value.length > maxLength ? value.slice(0, maxLength) : value;
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

export const INPUT_CONSTANTS = {
  MAX_NUMBER_LENGTH: 20,
  DEFAULT_CHAR_WIDTH: 8,
  PADDING_NORMAL: 16,
  PADDING_FOCUSED: 14,
  SUFFIX_GAP: 4,
} as const;

export const calculateSuffixPosition = (
  textWidth: number,
  isFocused: boolean = false
): number => {
  const padding = isFocused
    ? INPUT_CONSTANTS.PADDING_FOCUSED
    : INPUT_CONSTANTS.PADDING_NORMAL;

  return padding + textWidth + INPUT_CONSTANTS.SUFFIX_GAP;
};

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

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

export const formatNumber = (value: number, decimalPlaces?: number): string => {
  if (decimalPlaces !== undefined) {
    return value.toFixed(decimalPlaces);
  }
  return value.toString();
};
