import { cn } from '@/lib/utils';
import * as React from 'react';

export enum TypographyVariant {
  d,
  hl,
  hm,
  hs,
  l,
  m,
  s,
  xs,
}

// export type FontVariant = ''

export type FontWeight = 'bold' | 'regular';

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  id?: string;
  className?: string;
  weight?: FontWeight;
  //   font?: FontVariant;
  variant?: keyof typeof TypographyVariant;
  children: React.ReactNode;
};

export default function Typography<T extends React.ElementType>({
  as,
  id,
  children,
  weight = 'regular',
  className,
  variant = 'l',
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyProps<T>>) {
  const Component = as || 'div';
  return (
    <Component
      id={id}
      className={cn(
        'font-nunito text-black',
        // *=============== Font Type ==================
        {
          regular: 'font-normal',
          bold: 'font-bold',
        }[weight],
        // *=============== Font Variants ==================
        {
          d: 'max-md:text-[32px] max-md:leading-11 md:text-[48px] md:leading-16',
          hl: 'max-md:text-[24px] max-md:leading-9 md:text-[32px] md:leading-11',
          hm: 'max-md:text-[20px] max-md:leading-8 md:text-[24px] md:leading-9',
          hs: 'max-md:text-[16px] max-md:leading-7 md:text-[20px] md:leading-8',
          l: 'max-md:text-[14px] max-md:leading-6 md:text-[16px] md:leading-7',
          m: 'max-md:text-[12px] max-md:leading-5 md:text-[14px] md:leading-6',
          s: 'max-md:text-[10px] max-md:leading-4 md:text-[12px] md:leading-5',
          xs: 'max-md:text-[10px] max-md:leading-4',
        }[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
