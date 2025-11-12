import { RegisterOptions } from 'react-hook-form';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectInputProps {
  id: string;
  validation?: RegisterOptions;
  label?: string;
  helperText?: string;
  placeholder?: string;
  options: SelectOption[];
  disabled?: boolean;
  className?: string;
  required?: boolean;
  groupLabel?: string;
}
