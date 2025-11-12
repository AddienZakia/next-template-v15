'use client';

import { cn } from '@/lib/utils';
import { TextareaProps } from '@/types/components/TextArea';
import * as React from 'react';
import { get, useFormContext } from 'react-hook-form';
import Typography from '../Typography';

function Textarea({
  id,
  validation,
  label,
  className,
  helperText,
  showCharCount = false,
  maxChars,
  disabled,
  ...props
}: TextareaProps) {
  const [character, setCharacter] = React.useState('');

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);
  const isError = maxChars !== undefined && character.length > maxChars;

  return (
    <div className="w-full">
      <div className="mb-2">
        <Typography variant="m" className={cn(isError && 'text-danger-main')}>
          {label}
          {props.required && <span className="text-danger-main">*</span>}
        </Typography>
      </div>

      <textarea
        {...register(id, validation)}
        data-slot="textarea"
        className={cn(
          'placeholder:text-muted-foreground border-input bg-background flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow,border] outline-none md:text-sm',
          'focus:border-ring focus:ring-primary-focus focus:ring-2 focus:ring-offset-2',
          'active:border-primary-main active:ring-primary-pressed active:ring-2',
          'aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:ring-2',
          'disabled:bg-muted disabled:text-muted-foreground disabled:border-input disabled:cursor-not-allowed',
          isError && 'border-red-500 focus:ring-red-500',
          className,
        )}
        onChange={(e) => {
          setCharacter(e.target.value);
          register(id, validation).onChange(e);
        }}
        disabled={disabled}
        {...props}
      />

      {(helperText || showCharCount || error) && (
        <div className={cn('mt-1 flex items-center justify-between text-sm')}>
          <Typography
            variant="m"
            className={cn(
              isError || error ? 'text-danger-main' : 'text-neutral-70',
            )}
          >
            {error ? error.message : helperText}
          </Typography>
          {showCharCount && maxChars && (
            <Typography
              variant="m"
              className={cn(
                'text-xs',
                isError ? 'text-danger-main' : 'text-neutral-70',
              )}
            >
              {character.length} / {maxChars}
            </Typography>
          )}
        </div>
      )}
    </div>
  );
}

export { Textarea };
