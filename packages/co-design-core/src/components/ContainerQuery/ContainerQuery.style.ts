import { createStyles, CoBreakpoints, CSSObject } from '@co-design/styles';

interface ContainerQueryStyles {
  smallerThan?: CoBreakpoints | number;
  largerThan?: CoBreakpoints | number;
  style?: CSSObject;
  query: string;
}

export default createStyles((theme, { smallerThan, largerThan, query, style }: ContainerQueryStyles) => {
  const containerQuery: CSSObject = {};
  const minWidth = theme.fn.size({ size: largerThan, sizes: theme.breakpoints }) + 1;
  const maxWidth = theme.fn.size({ size: smallerThan, sizes: theme.breakpoints });

  if (largerThan && smallerThan) {
    containerQuery[`@container (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`] = style;
  } else {
    if (largerThan) {
      containerQuery[`@container (min-width: ${theme.fn.size({ size: largerThan, sizes: theme.breakpoints }) + 1}px)`] = style;
    }

    if (smallerThan) {
      containerQuery[`@container (max-width: ${theme.fn.size({ size: smallerThan, sizes: theme.breakpoints })}px)`] = style;
    }
  }

  if (query) {
    containerQuery[`@container ${query}`] = style;
  }

  return { containerQuery };
});
