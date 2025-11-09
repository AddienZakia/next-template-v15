import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';
import Typography from '../Typography';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer duration-200 transition-all",
  {
    variants: {
      variant: {
        primary:
          'bg-primary-main rounded-md hover:bg-primary-hover disabled:bg-neutral-30 disabled:cursor-not-allowed disabled:border-neutral-60 disabled:border',
        alternative:
          'bg-secondary-main rounded-md hover:bg-secondary-hover disabled:bg-neutral-30 disabled:cursor-not-allowed disabled:border-neutral-60 disabled:border',
        outlined:
          'bg-neutral-10 rounded-md hover:bg-neutral-30 disabled:bg-neutral-30 disabled:cursor-not-allowed border-neutral-60 border',
      },
      size: {
        sm: 'py-2 px-4',
        md: 'py-2 px-4',
        lg: 'py-[6px] px-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

function Button({
  className,
  variant,
  size = 'md',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconClassname,
  rightIconClassname,
  children,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    leftIcon?: React.ElementType;
    rightIcon?: React.ElementType;
    leftIconClassname?: string;
    rightIconClassname?: string;
  }) {
  const fontSize = {
    sm: 's',
    md: 'm',
    lg: 'l',
  } as const;

  const fontColor = {
    primary: 'text-neutral-10',
    alternative: 'text-neutral-90',
    outlined: 'text-neutral-100',
  } as const;

  return (
    <button
      className={cn(
        'flex items-center',
        buttonVariants({ variant, size }),
        className,
      )}
      {...props}
    >
      {LeftIcon && (
        <LeftIcon
          className={cn(
            'size-4',
            props.disabled
              ? 'text-neutral-70'
              : fontColor[variant as keyof typeof fontColor],
            leftIconClassname,
          )}
        />
      )}

      <Typography
        weight="bold"
        variant={fontSize[size as keyof typeof fontSize]}
        className={cn(
          props.disabled
            ? 'text-neutral-70'
            : fontColor[variant as keyof typeof fontColor],
        )}
      >
        {children}
      </Typography>

      {RightIcon && (
        <RightIcon
          className={cn(
            'size-4',
            props.disabled
              ? 'text-neutral-70'
              : fontColor[variant as keyof typeof fontColor],
            rightIconClassname,
          )}
        />
      )}
    </button>
  );
}

export { Button, buttonVariants };
