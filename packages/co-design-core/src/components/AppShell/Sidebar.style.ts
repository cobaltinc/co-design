import { CoBreakpoints, CoSpacing, CoZIndex, createStyles, defaultFontStyles } from '@co-design/styles';
import { getSortedBreakpoints } from './getSortedBreakpoints';

export type SidebarWidth = Partial<Record<string, string | number>>;

export interface SidebarPosition {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface SidebarStyles {
  width: SidebarWidth | number;
  height: string | number;
  padding: CoSpacing | number;
  position: SidebarPosition;
  hiddenBreakpoint: CoBreakpoints | number;
  fixed: boolean;
  zIndex: CoZIndex | number;
}

export default createStyles((theme, { height, width, padding, fixed, position, hiddenBreakpoint, zIndex }: SidebarStyles) => {
  const breakpoints =
    typeof width === 'object' && width !== null
      ? getSortedBreakpoints(width, theme).reduce((acc, [breakpoint, breakpointSize]) => {
          acc[`@media (min-width: ${breakpoint + 1}px)`] = {
            width: breakpointSize,
            minWidth: breakpointSize,
          };

          return acc;
        }, {})
      : null;

  return {
    root: {
      ...defaultFontStyles(theme),
      ...position,
      zIndex: theme.fn.size({ size: zIndex, sizes: theme.zIndex }),
      height,
      width: (typeof width === 'object' ? width?.base : width) || '100%',
      position: fixed ? 'fixed' : 'static',
      boxSizing: 'border-box',
      padding: theme.fn.size({ size: padding, sizes: theme.spacing }),
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.darkBackground : theme.colors.lightBackground,
      borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.palettes.gray[8] : theme.palettes.gray[3]}`,
      ...breakpoints,
    },

    hidden: {
      [`@media (max-width: ${theme.fn.size({
        size: hiddenBreakpoint,
        sizes: theme.breakpoints,
      })}px)`]: {
        display: 'none',
      },
    },
  };
});
