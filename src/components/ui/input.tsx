'use client';

import { cn } from '@/lib/utils';
import * as React from 'react';
import { RegisterOptions, get, useFormContext } from 'react-hook-form';
import Typography from '../Typography';

export interface InputProps extends React.ComponentProps<'input'> {
  id: string;
  validation?: RegisterOptions;
  label?: string;
  helperText?: string;
  showCharCount?: boolean;
  maxChars?: number;
}

function Input({
  id,
  validation,
  label,
  helperText,
  showCharCount = false,
  maxChars,
  className,
  disabled,
  ...props
}: InputProps) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const error = get(errors, id);

  const value = watch(id) || '';
  const isError = maxChars !== undefined && value.length > maxChars;

  return (
    <div className="w-full">
      {label && (
        <div className="mb-2">
          <Typography variant="m" className={cn(isError && 'text-danger-main')}>
            {label}
            {props.required && <span className="text-danger-main">*</span>}
          </Typography>
        </div>
      )}

      <input
        {...register(id, validation)}
        type={props.type || 'text'}
        disabled={disabled}
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground',
          'border-input bg-background h-9 w-full min-w-0 rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow,border] outline-none md:text-sm',
          'focus:border-ring focus:ring-primary-focus focus:ring-2 focus:ring-offset-2',
          'active:border-primary-main active:ring-primary-pressed active:ring-2',
          'aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:ring-2',
          'disabled:bg-muted disabled:text-muted-foreground disabled:border-input disabled:cursor-not-allowed',
          isError && 'border-red-500 focus:ring-red-500',
          error && 'border-red-500 focus:ring-red-500',
          className,
        )}
        {...props}
      />

      {(helperText || showCharCount || error) && (
        <div className="mt-1 flex items-center justify-between text-sm">
          <Typography
            variant="m"
            className={cn(
              isError || error ? 'text-danger-main' : 'text-neutral-70',
            )}
          >
            {error?.message?.toString() || helperText}
          </Typography>
          {showCharCount && maxChars && (
            <Typography
              variant="m"
              className={cn(
                'text-xs',
                isError ? 'text-danger-main' : 'text-neutral-70',
              )}
            >
              {value.length} / {maxChars}
            </Typography>
          )}
        </div>
      )}
    </div>
  );
}

export { Input };
