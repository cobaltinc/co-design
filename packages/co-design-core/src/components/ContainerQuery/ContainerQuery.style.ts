import { createStyles, CoBreakpoints, CSSObject } from '@co-design/styles';

interface ContainerQueryStyles {
  smallerThan?: CoBreakpoints | number;
  largerThan?: CoBreakpoints | number;
  style?: CSSObject;
  containerName?: string;
  query: string;
}

export default createStyles((theme, { smallerThan, largerThan, query, style, containerName }: ContainerQueryStyles) => {
  const containerQuery: CSSObject = {};
  const minWidth = theme.fn.size({ size: largerThan, sizes: theme.breakpoints }) + 1;
  const maxWidth = theme.fn.size({ size: smallerThan, sizes: theme.breakpoints });

  if (largerThan && smallerThan) {
    containerQuery[`@container ${containerName ? containerName + ' ' : ''}(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`] = style;
  } else {
    if (largerThan) {
      containerQuery[
        `@container ${containerName ? containerName + ' ' : ''}(min-width: ${theme.fn.size({ size: largerThan, sizes: theme.breakpoints }) + 1}px)`
      ] = style;
    }

    if (smallerThan) {
      containerQuery[
        `@container ${containerName ? containerName + ' ' : ''}(max-width: ${theme.fn.size({ size: smallerThan, sizes: theme.breakpoints })}px)`
      ] = style;
    }
  }

  if (query) {
    containerQuery[`@container ${containerName ? containerName + ' ' : ''}${query}`] = style;
  }

  return {
    containerQuery,
  };
});
