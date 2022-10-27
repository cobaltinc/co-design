import { CoBreakpoints, CoTheme } from '@co-design/styles';

type Breakpoints<T> = Partial<Record<CoBreakpoints | (string & {}), T>>;

export const getSortedBreakpoints = <T>(breakpoints: Breakpoints<T>, theme: CoTheme) => {
  if (!breakpoints) {
    return [];
  }

  const values = Object.keys(breakpoints)
    .filter((breakpoint) => breakpoint !== 'base')
    .map((breakpoint) => [theme.fn.size({ size: breakpoint, sizes: theme.breakpoints }), breakpoints[breakpoint]]);

  values.sort((a, b) => b[0] - a[0]);
  return values.reverse() as [number, T][];
};
