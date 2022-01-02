import { createStyles, CoTheme, CSSObject, CoSpacing, CoBreakpoints } from '@co-design/styles';

interface AppShellStyles {
  padding: CoSpacing | number;
  fixed: boolean;
  headerHeight: string;
  sidebarBreakpoints: [number, { width: string | number }][];
  sidebarWidth: string;
  sidebarHiddenBreakpoint: number;
}

function getPositionStyles(props: AppShellStyles, theme: CoTheme): CSSObject {
  const padding = theme.fn.size({ size: props.padding, sizes: theme.spacing });

  if (!props.fixed) {
    return { padding };
  }

  const queries = props.sidebarBreakpoints.reduce((acc, [breakpoint, breakpointSize]) => {
    acc[`@media (min-width: ${breakpoint + 1}px)`] = {
      paddingLeft: `calc(${breakpointSize}px + ${padding}px)`,
    };

    return acc;
  }, {});

  if (props.sidebarHiddenBreakpoint > 0) {
    queries[`@media (max-width: ${props.sidebarHiddenBreakpoint + 1}px)`] = {
      paddingLeft: padding,
    };
  }

  return {
    minHeight: '100vh',
    paddingTop: `calc(${props.headerHeight} + ${padding}px)`,
    paddingLeft: `calc(${props.sidebarWidth} + ${padding}px)`,
    paddingRight: padding,
    paddingBottom: padding,
    ...queries,
  };
}

export default createStyles((theme, props: AppShellStyles) => ({
  root: {
    boxSizing: 'border-box',
  },

  body: {
    display: 'flex',
    boxSizing: 'border-box',
  },

  main: {
    flex: 1,
    boxSizing: 'border-box',
    ...getPositionStyles(props, theme),
  },
}));
