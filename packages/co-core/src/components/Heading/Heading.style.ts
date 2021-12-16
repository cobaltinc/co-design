import { CoColor, CoColorPalette, createStyles } from '@co/styles';

interface HeadingStyles {
  strong: boolean;
  inline: boolean;
  underline: boolean;
  color?: CoColorPalette | CoColor | string;
}

export default createStyles((theme, { inline, strong, underline, color }: HeadingStyles) => {
  return {
    root: {
      display: inline ? 'inline' : 'block',
      margin: 0,
      fontWeight: strong ? 'bold' : 'normal',
      textDecoration: underline ? 'underline' : undefined,
      color:
        color in theme.colorPalettes
          ? theme.colorPalettes[color][theme.colorScheme === 'light' ? 6 : 4]
          : color in theme.colors
          ? theme.colors[color]
          : color,
    },

    h1: { ...theme.headings.h1 },
    h2: { ...theme.headings.h2 },
    h3: { ...theme.headings.h3 },
    h4: { ...theme.headings.h4 },
    h5: { ...theme.headings.h5 },
    h6: { ...theme.headings.h6 },
  };
});
