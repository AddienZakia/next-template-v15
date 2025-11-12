'use client';

import { cn } from '@/lib/utils';
import { RadioGroupProps } from '@/types/components/RadioGroup';
import { useFormContext } from 'react-hook-form';
import Typography from '../Typography';

export function RadioGroup({
  id,
  label,
  options,
  required,
  className,
}: RadioGroupProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[id];

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <Typography variant="m" className="mb-2 block">
          {label}
          {required && <span className="text-danger-main">*</span>}
        </Typography>
      )}

      <div className="flex flex-wrap gap-6">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-2"
          >
            <input
              type="radio"
              value={option.value}
              {...register(id, { required })}
              className={cn(
                'h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-500',
              )}
            />
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>

      {error && (
        <Typography variant="m" className="text-danger-main mt-1">
          {error.message?.toString()}
        </Typography>
      )}
    </div>
  );
}
