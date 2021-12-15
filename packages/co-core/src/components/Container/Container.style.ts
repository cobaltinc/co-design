import { CoBreakpoints, CoSpacing, createStyles } from '@co/styles';

interface ContainerStyles {
  size: CoBreakpoints | number;
  padding: CoSpacing | number;
  fluid: boolean;
  break: boolean;
}

export default createStyles((theme, { size, padding, fluid, break: _break }: ContainerStyles) => {
  const mediaQueries = {
    [`@media screen and (min-width: ${theme.breakpoints['xlarge']}px)`]: {
      width: theme.breakpoints['xlarge'],
    },
    [`@media screen and (max-width: ${theme.breakpoints['xlarge']}px)`]: {
      width: theme.breakpoints['large'],
    },
    [`@media screen and (max-width: ${theme.breakpoints['large']}px)`]: {
      width: theme.breakpoints['medium'],
    },
    [`@media screen and (max-width: ${theme.breakpoints['medium']}px)`]: {
      width: theme.breakpoints['small'],
    },
    [`@media screen and (max-width: ${theme.breakpoints['small']}px)`]: {
      width: theme.breakpoints['xmall'],
    },
  };

  return {
    root: {
      maxWidth: fluid ? '100%' : size in theme.breakpoints ? theme.breakpoints[size] : size,
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: padding in theme.spacing ? theme.spacing[padding] : padding,
      paddingRight: padding in theme.spacing ? theme.spacing[padding] : padding,

      ...(_break && mediaQueries),
    },
  };
});
