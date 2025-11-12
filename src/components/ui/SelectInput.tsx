'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { SelectInputProps } from '@/types/components/SelectInput';
import { Controller, get, useFormContext } from 'react-hook-form';
import Typography from '../Typography';

function SelectInput({
  id,
  validation,
  label,
  helperText,
  placeholder = 'Select an option',
  options,
  disabled,
  className,
  required,
  groupLabel,
}: SelectInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <div className="mb-2">
          <Typography variant="m" className={cn(error && 'text-danger-main')}>
            {label}
            {required && <span className="text-danger-main">*</span>}
          </Typography>
        </div>
      )}

      {/* Select field */}
      <Controller
        name={id}
        control={control}
        rules={validation}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange}
            value={field.value}
            disabled={disabled}
          >
            <SelectTrigger
              className={cn(
                'w-full',
                error && 'border-destructive ring-destructive/20 ring-2',
                className,
              )}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {groupLabel ? (
                <SelectGroup>
                  <SelectLabel>{groupLabel}</SelectLabel>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ) : (
                options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        )}
      />

      {/* Helper text */}
      {(helperText || error) && (
        <div className="mt-1">
          <Typography
            variant="m"
            className={cn(
              'text-sm',
              error ? 'text-danger-main' : 'text-neutral-70',
            )}
          >
            {error ? error.message : helperText}
          </Typography>
        </div>
      )}
    </div>
  );
}

export { SelectInput };
