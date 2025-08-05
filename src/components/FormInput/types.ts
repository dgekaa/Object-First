export type InputType = 'text' | 'number' | 'checkbox';
import React from 'react';

export interface BaseInputProps {
  label?: string;
  error?: string;
  helpText?: string;
  type: InputType;
}

export interface TextInputProps extends BaseInputProps {
  type: 'text';
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface NumberInputProps extends BaseInputProps {
  type: 'number';
  value: number | string;
  min?: number;
  max?: number;
  pattern?: string;
  showControls?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

export interface CheckboxInputProps extends BaseInputProps {
  type: 'checkbox';
  checked: boolean;
  checkboxLabel: string;
  onChange: (checked: boolean) => void;
}

export type FormInputProps =
  | TextInputProps
  | NumberInputProps
  | CheckboxInputProps;

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}
