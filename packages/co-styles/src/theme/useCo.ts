import { CSSObject, useCss } from '../tss';
import { CoTheme } from './types';
import { useCoTheme } from './CoProvider';

interface UseCo {
  co?: CSSObject | ((theme: CoTheme) => CSSObject);
  className?: string;
}

export const useCo = ({ co, className }: UseCo) => {
  const { css, cx } = useCss();
  const theme = useCoTheme();
  const _co = typeof co === 'function' ? co(theme) : co;
  return { coClassName: cx(css(_co), className), css, cx, theme };
};
