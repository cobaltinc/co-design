import { CoBreakpoints, CoSpacing, createStyles } from '@co/styles';

interface CenterStyles {
  inline: boolean;
}

export default createStyles((_, { inline }: CenterStyles) => {
  return {
    root: {
      display: inline ? 'inline-flex' : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});
