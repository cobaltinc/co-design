import { CoColor, CoPalette, createStyles } from '@co-design/styles';

interface HeadingStyles {
  inline: boolean;
  color?: CoPalette | CoColor | string;
}

export default createStyles((theme, { inline, color }: HeadingStyles) => {
  return {
    root: {
      display: inline ? 'inline' : 'block',
      margin: 0,
      color:
        color in theme.palettes ? theme.palettes[color][theme.colorScheme === 'light' ? 5 : 3] : color in theme.colors ? theme.colors[color] : color,
    },

    h1: { ...theme.headings.h1 },
    h2: { ...theme.headings.h2 },
    h3: { ...theme.headings.h3 },
    h4: { ...theme.headings.h4 },
    h5: { ...theme.headings.h5 },
    h6: { ...theme.headings.h6 },
  };
});
