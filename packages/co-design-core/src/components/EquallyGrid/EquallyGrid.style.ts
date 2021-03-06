import { createStyles, CoSpacing, CoTheme, CoBreakpoints } from '@co-design/styles';
import { getFieldValue } from '../../utils';

export interface EquallyGridBreakpoint {
  maxWidth?: CoBreakpoints | number;
  minWidth?: CoBreakpoints | number;
  cols: number;
  spacing?: CoSpacing;
}

interface EquallyGridStyles {
  cols: number;
  spacing: CoSpacing | number;
  breakpoints: EquallyGridBreakpoint[];
}

const getSortedBreakpoints = (theme: CoTheme, breakpoints: EquallyGridBreakpoint[]) => {
  if (breakpoints.length === 0) {
    return breakpoints;
  }

  const property = 'maxWidth' in breakpoints[0] ? 'maxWidth' : 'minWidth';
  const sorted = [...breakpoints].sort((a, b) => getFieldValue(b[property], theme.breakpoints) - getFieldValue(a[property], theme.breakpoints));

  return property === 'minWidth' ? sorted.reverse() : sorted;
};

export default createStyles((theme, { cols, spacing, breakpoints }: EquallyGridStyles) => {
  const gridBreakpoints = getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
    const property = 'maxWidth' in breakpoint ? 'max-width' : 'min-width';
    const breakpointSize = getFieldValue(property === 'max-width' ? breakpoint.maxWidth : breakpoint.minWidth, theme.breakpoints);
    const breakpiontSpacing = breakpoint.spacing || spacing;

    acc[`@media (${property}: ${breakpointSize + (property === 'max-width' ? 0 : 1)}px)`] = {
      gridTemplateColumns: `repeat(${breakpoint.cols}, minmax(0, 1fr))`,
      gap: getFieldValue(breakpiontSpacing, theme.spacing),
    };

    return acc;
  }, {});

  return {
    root: {
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      gap: getFieldValue(spacing, theme.spacing),
      ...gridBreakpoints,
    },
  };
});
