import { RegisterOptions } from 'react-hook-form';

export interface TextareaProps extends React.ComponentProps<'textarea'> {
  id: string;
  validation?: RegisterOptions;
  label: string;
  helperText?: string;
  showCharCount?: boolean;
  maxChars?: number;
}
