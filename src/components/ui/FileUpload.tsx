'use client';

import { cn } from '@/lib/utils';
import { FileUploadProps } from '@/types/components/FileUpload';
import { Camera, Upload, X } from 'lucide-react';
import * as React from 'react';
import { get, useFormContext } from 'react-hook-form';
import Typography from '../Typography';

function FileUpload({
  id,
  validation,
  label,
  helperText,
  accept = 'image/*',
  maxSize = 5000000, // 5MB default
  variant = 'default',
  showPreview = true,
  className,
  disabled,
  ...props
}: FileUploadProps) {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const error = get(errors, id);

  const [preview, setPreview] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.size > maxSize) {
        setValue(id, null);
        setPreview(null);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setValue(id, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove file
  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setValue(id, null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Trigger file input
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  // Avatar variant
  if (variant === 'avatar') {
    return (
      <div className="w-full">
        {label && (
          <div className="mb-3">
            <Typography variant="m" className="text-gray-700">
              {label}
              {props.required && <span className="text-danger-main">*</span>}
            </Typography>
          </div>
        )}

        <div className="flex flex-col items-start">
          <div className="relative">
            <div
              className={cn(
                'flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gray-200',
                !disabled && 'cursor-pointer hover:bg-gray-300',
                error && 'ring-2 ring-red-500',
                disabled && 'cursor-not-allowed opacity-50',
              )}
              onClick={!disabled ? handleClick : undefined}
            >
              {preview ? (
                <>
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                  {!disabled && (
                    <button
                      type="button"
                      onClick={handleRemove}
                      className="absolute top-1 right-1 rounded-full bg-red-500 p-1 text-white transition-colors hover:bg-red-600"
                    >
                      <X size={16} />
                    </button>
                  )}
                </>
              ) : (
                <Camera size={40} className="text-gray-400" />
              )}
            </div>
          </div>

          <label
            className={cn(
              'mt-4 flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50',
              disabled && 'cursor-not-allowed opacity-50 hover:bg-white',
            )}
          >
            <Camera size={16} />
            {preview ? 'Change Picture' : 'Take a Picture'}
            <input
              {...register(id, validation)}
              ref={fileInputRef}
              type="file"
              accept={accept}
              className="hidden"
              onChange={handleFileChange}
              disabled={disabled}
              {...props}
            />
          </label>
        </div>

        {(helperText || error) && (
          <div className="mt-2">
            <Typography
              variant="m"
              className={cn(error ? 'text-danger-main' : 'text-neutral-70')}
            >
              {error?.message?.toString() || helperText}
            </Typography>
          </div>
        )}
      </div>
    );
  }

  // Default box variant
  return (
    <div className="w-full">
      {label && (
        <div className="mb-2">
          <Typography variant="m" className="text-gray-700">
            {label}
            {props.required && <span className="text-danger-main">*</span>}
          </Typography>
        </div>
      )}

      <div
        onClick={!disabled ? handleClick : undefined}
        className={cn(
          'relative flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-gray-400 hover:bg-gray-100',
          error && 'border-red-500 hover:border-red-600',
          disabled &&
            'cursor-not-allowed opacity-50 hover:border-gray-300 hover:bg-gray-50',
          className,
        )}
      >
        {preview && showPreview ? (
          <div className="relative h-full w-full">
            <img
              src={preview}
              alt="Preview"
              className="h-full w-full rounded-lg object-cover"
            />
            {!disabled && (
              <button
                type="button"
                onClick={handleRemove}
                className="absolute top-2 right-2 rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
              >
                <X size={20} />
              </button>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="rounded-full bg-gray-200 p-4">
              <Upload size={32} className="text-gray-500" />
            </div>
            <div>
              <Typography variant="m" className="font-medium text-gray-700">
                Click to upload or drag and drop
              </Typography>
              <Typography variant="s" className="mt-1 text-gray-500">
                {accept.includes('image')
                  ? 'PNG, JPG, JPEG or WEBP'
                  : 'Any file'}{' '}
                (max. {(maxSize / 1000000).toFixed(0)}MB)
              </Typography>
            </div>
          </div>
        )}

        <input
          {...register(id, validation)}
          ref={fileInputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleFileChange}
          disabled={disabled}
          {...props}
        />
      </div>

      {(helperText || error) && (
        <div className="mt-2">
          <Typography
            variant="m"
            className={cn(error ? 'text-danger-main' : 'text-neutral-70')}
          >
            {error?.message?.toString() || helperText}
          </Typography>
        </div>
      )}
    </div>
  );
}

export { FileUpload };
