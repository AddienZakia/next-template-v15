export enum TypographyVariant {
  d,
  hl,
  hm,
  hs,
  xl,
  l,
  m,
  s,
  xs,
}

export type FontWeight = 'bold' | 'regular';

export type TypographyProps<T extends React.ElementType> = {
  as?: T;
  id?: string;
  className?: string;
  weight?: FontWeight;
  variant?: keyof typeof TypographyVariant;
  children: React.ReactNode;
};
