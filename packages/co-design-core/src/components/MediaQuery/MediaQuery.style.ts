import { createStyles, CoBreakpoints, CSSObject } from '@co-design/styles';

interface MediaQueryStyles {
  smallerThan: CoBreakpoints | number;
  largerThan: CoBreakpoints | number;
  style: CSSObject;
  query: string;
}

export default createStyles((theme, { smallerThan, largerThan, query, style }: MediaQueryStyles) => {
  const media: CSSObject = {};

  if (smallerThan) {
    media[`@media (min-width: ${(smallerThan in theme.breakpoints ? theme.breakpoints[smallerThan] : smallerThan) + 1}px)`] = style;
  }

  if (largerThan) {
    media[`@media (max-width: ${largerThan in theme.breakpoints ? theme.breakpoints[largerThan] : largerThan}px)`] = style;
  }

  if (query) {
    media[`@media ${query}`] = style;
  }

  return { media };
});
