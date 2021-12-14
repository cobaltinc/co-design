import type { CSSProperties } from 'react';
// import type { MantineMargins } from './MantineMargins';
import type { CoTheme } from './CoTheme';
import type { CSSObject } from '../../tss';

export interface DefaultProps<T extends string = never> {
  className?: string;
  style?: CSSProperties;
  co?: CSSObject | ((theme: CoTheme) => CSSObject);
  classNames?: Partial<Record<T, string>>;
  styles?: Partial<Record<T, CSSObject>> | ((theme: CoTheme) => Partial<Record<T, CSSObject>>);
}
