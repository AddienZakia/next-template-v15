export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  id: string;
  label?: string;
  options: RadioOption[];
  required?: boolean;
  className?: string;
}
