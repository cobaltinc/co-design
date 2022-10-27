import { createStyles, CoBreakpoints, CSSObject } from '@co-design/styles';

interface MediaQueryStyles {
  smallerThan?: CoBreakpoints | number;
  largerThan?: CoBreakpoints | number;
  style?: CSSObject;
  query: string;
}

export default createStyles((theme, { smallerThan, largerThan, query, style }: MediaQueryStyles) => {
  const media: CSSObject = {};
  const minWidth = theme.fn.size({ size: largerThan, sizes: theme.breakpoints }) + 1;
  const maxWidth = theme.fn.size({ size: smallerThan, sizes: theme.breakpoints });

  if (largerThan && smallerThan) {
    media[`@media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`] = style;
  } else {
    if (largerThan) {
      media[`@media (min-width: ${theme.fn.size({ size: largerThan, sizes: theme.breakpoints }) + 1}px)`] = style;
    }

    if (smallerThan) {
      media[`@media (max-width: ${theme.fn.size({ size: smallerThan, sizes: theme.breakpoints })}px)`] = style;
    }
  }

  if (query) {
    media[`@media ${query}`] = style;
  }

  return { media };
});
