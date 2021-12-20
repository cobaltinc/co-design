import { CoBreakpoints, CoSpacing, createStyles } from '@co-design/styles';
import { getFieldValue } from '../../utils';

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
      width: theme.breakpoints['xsmall'],
    },
    [`@media screen and (max-width: ${theme.breakpoints['xsmall']}px)`]: {
      width: '100%',
    },
  };

  return {
    root: {
      maxWidth: fluid ? '100%' : size in theme.breakpoints ? theme.breakpoints[size] : size,
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: getFieldValue(padding, theme.spacing),
      paddingRight: getFieldValue(padding, theme.spacing),
      boxSizing: 'border-box',

      ...(_break && mediaQueries),
    },
  };
});
