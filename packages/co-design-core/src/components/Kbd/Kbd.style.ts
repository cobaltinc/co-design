import { createStyles } from '@co-design/styles';

export default createStyles((theme) => ({
  root: {
    lineHeight: theme.lineHeight,
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fontSizes.xsmall,
    fontWeight: 700,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[8] : theme.colorPalettes.dark[2],
    color: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[1] : theme.colorPalettes.dark[7],
    padding: `3px ${theme.spacing.spacing1}px`,
    borderRadius: theme.radius.small,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colorPalettes.dark[9] : theme.colors.lightBorder}`,
    borderBottom: `3px solid ${theme.colorScheme === 'dark' ? theme.colorPalettes.dark[9] : theme.colors.lightBorder}`,
  },
}));
