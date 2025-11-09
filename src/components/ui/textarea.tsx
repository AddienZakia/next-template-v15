'use client';

import { cn } from '@/lib/utils';
import * as React from 'react';
import Typography from '../Typography';

export interface TextareaProps extends React.ComponentProps<'textarea'> {
  label: string;
  helperText?: string;
  showCharCount?: boolean;
  maxChars?: number;
}

function Textarea({
  label,
  className,
  helperText,
  showCharCount = false,
  maxChars,
  disabled,
  ...props
}: TextareaProps) {
  const [character, setCharacter] = React.useState('');

  return (
    <div className="w-full">
      <div className="mb-2">
        <Typography
          variant="m"
          className={cn(
            maxChars && character.length > maxChars && 'text-danger-main',
          )}
        >
          {label}
          {props.required && <span className="text-danger-main">*</span>}
        </Typography>
      </div>

      <textarea
        data-slot="textarea"
        className={cn(
          'placeholder:text-muted-foreground border-input bg-background flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow,border] outline-none md:text-sm',
          'focus:border-ring focus:ring-primary-focus focus:ring-2 focus:ring-offset-2',
          'active:border-primary-main active:ring-primary-pressed active:ring-2',
          'aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:ring-2',
          'disabled:bg-muted disabled:text-muted-foreground disabled:border-input disabled:cursor-not-allowed',
          maxChars &&
            character.length > maxChars &&
            'border-red-500 focus:ring-red-500',
          className,
        )}
        onChange={(e) => setCharacter(e.target.value)}
        disabled={disabled}
        {...props}
      />

      {(helperText || showCharCount) && (
        <div className={cn('mt-1 flex items-center justify-between text-sm')}>
          <Typography
            variant="m"
            className={cn(
              maxChars && character.length > maxChars
                ? 'text-danger-main'
                : 'text-neutral-70',
            )}
          >
            {helperText}
          </Typography>
          {showCharCount && maxChars && (
            <Typography
              variant="m"
              className={cn(
                'text-xs',
                character.length > maxChars
                  ? 'text-danger-main'
                  : 'text-neutral-70',
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
