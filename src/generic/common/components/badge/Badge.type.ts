import { Children } from '@/src/generic/types/Children.type.ts';

export interface Badge {
  children?: Children;
  className?: string;
  max?: number;
  value?: number;
}
