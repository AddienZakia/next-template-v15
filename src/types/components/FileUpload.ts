import { RegisterOptions } from 'react-hook-form';

export interface FileUploadProps
  extends Omit<React.ComponentProps<'input'>, 'type'> {
  id: string;
  validation?: RegisterOptions;
  label?: string;
  helperText?: string;
  accept?: string;
  maxSize?: number;
  variant?: 'default' | 'avatar';
  showPreview?: boolean;
}
