import { createStyles, CoSpacing, CO_SIZES, CoSize, CoTheme } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface ColStyles {
  spacing: CoSpacing;
  columns: number;
  grow: boolean;
  offset: number;
  offsetXs: number;
  offsetSm: number;
  offsetMd: number;
  offsetLg: number;
  offsetXl: number;
  span: number;
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

const getColumnWidth = (colSpan: number, columns: number) => `${100 / (columns / colSpan)}%`;
const getColumnOffset = (offset: number, columns: number) => (offset ? `${100 / (columns / offset)}%` : undefined);

function getBreakpointsStyles({
  sizes,
  offsets,
  theme,
  columns,
  grow,
}: {
  sizes: Record<CoSize, number>;
  offsets: Record<CoSize, number>;
  grow: boolean;
  theme: CoTheme;
  columns: number;
}) {
  return CO_SIZES.reduce((acc, size) => {
    if (typeof sizes[size] === 'number') {
      acc[`@media (min-width: ${theme.breakpoints[size] + 1}px)`] = {
        flexBasis: getColumnWidth(sizes[size], columns),
        flexShrink: 0,
        maxWidth: grow ? 'unset' : getColumnWidth(sizes[size], columns),
        marginLeft: getColumnOffset(offsets[size], columns),
      };
    }
    return acc;
  }, {});
}

export default createStyles(
  (
    theme,
    { spacing, grow, offset, offsetXs, offsetSm, offsetMd, offsetLg, offsetXl, columns, span, xsmall, small, medium, large, xlarge }: ColStyles,
  ) => ({
    root: {
      boxSizing: 'border-box',
      flexGrow: grow ? 1 : 0,
      padding: getFieldValue(spacing, theme.spacing) / 2,
      marginLeft: getColumnOffset(offset, columns),
      flexBasis: getColumnWidth(span, columns),
      flexShrink: 0,
      maxWidth: grow ? 'unset' : getColumnWidth(span, columns),
      ...getBreakpointsStyles({
        sizes: { xsmall, small, medium, large, xlarge },
        offsets: { xsmall: offsetXs, small: offsetSm, medium: offsetMd, large: offsetLg, xlarge: offsetXl },
        theme,
        columns,
        grow,
      }),
    },
  }),
);
