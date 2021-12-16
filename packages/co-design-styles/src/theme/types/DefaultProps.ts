import type { CSSProperties } from 'react';
// import type { MantineMargins } from './MantineMargins';
import type { CoTheme } from './CoTheme';
import type { CSSObject } from '../../tss';

export interface DefaultProps {
  className?: string;
  style?: CSSProperties;
  co?: CSSObject | ((theme: CoTheme) => CSSObject);
}
