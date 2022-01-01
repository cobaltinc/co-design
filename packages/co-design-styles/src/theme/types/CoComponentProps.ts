import type { CSSProperties } from 'react';
import type { CoTheme } from './CoTheme';
import type { CSSObject } from '../../tss';

export type Co = CSSObject | ((theme: CoTheme) => CSSObject);

export interface CoComponentProps<T extends string = never> {
  className?: string;
  style?: CSSProperties;
  co?: Co;
  overrideStyles?: Partial<Record<T, CSSObject>> | ((theme: CoTheme) => Partial<Record<T, CSSObject>>);
}
