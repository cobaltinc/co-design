import { CSSObject, useCss } from '../tss';
import { MantineTheme } from './types';
import { useCoTheme } from './CoProvider';

interface UseCo {
  co?: CSSObject | ((theme: MantineTheme) => CSSObject);
  className?: string;
}

export const useCo = ({ co, className }: UseCo) => {
  const { css, cx } = useCss();
  const theme = useCoTheme();
  const _co = typeof co === 'function' ? co(theme) : co;
  return { sxClassName: cx(css(_co), className), css, cx, theme };
};
