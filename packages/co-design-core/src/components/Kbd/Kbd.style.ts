import { createStyles, defaultFontStyles } from '@co-design/styles';

export default createStyles((theme) => ({
  root: {
    lineHeight: theme.lineHeight,
    ...defaultFontStyles(theme),
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fontSizes.xsmall,
    fontWeight: 700,
    backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.gray[8] : theme.palettes.gray[2],
    color: theme.colorScheme === 'dark' ? theme.palettes.gray[1] : theme.palettes.gray[7],
    padding: `3px ${theme.spacing.xsmall}px`,
    borderRadius: theme.radius.small,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.palettes.gray[9] : theme.colors.lightBorder}`,
    borderBottom: `3px solid ${theme.colorScheme === 'dark' ? theme.palettes.gray[9] : theme.colors.lightBorder}`,
  },
}));
