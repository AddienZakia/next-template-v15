import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-3 py-2 text-sm font-normal w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        primary:
          'border-primary-main bg-primary-surface text-primary-main [a&]:hover:bg-primary-hover',
        alternative:
          'border-secondary-main bg-secondary-surface text-secondary-main [a&]:hover:bg-secondary-hover',
        outlined:
          'border-neutral-40 bg-transparent text-neutral-90 [a&]:hover:bg-neutral-10',
        disabled:
          'bg-neutral-30 border-neutral-40 cursor-not-allowed opacity-50 pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
