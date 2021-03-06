import { createStyles, CoPalette, defaultFontStyles } from '@co-design/styles';

interface TabControlStyles {
  color: CoPalette;
  orientation: 'horizontal' | 'vertical';
}

export default createStyles((theme, { color, orientation }: TabControlStyles, getRef) => {
  const tabActive = { ref: getRef('tabActive') } as const;

  return {
    tabActive,
    tabLabel: {},

    tabPane: {
      ...defaultFontStyles(theme),
      WebkitTapHighlightColor: 'transparent',
      boxSizing: 'border-box',
      display: 'block',
      height: 40,
      backgroundColor: 'transparent',
      border: 0,
      padding: `0 ${theme.spacing.large}px`,
      fontSize: theme.fontSizes.medium,
      cursor: 'pointer',
      width: orientation === 'vertical' ? '100%' : 'auto',

      '&:disabled': {
        cursor: 'not-allowed',
        color: theme.colorScheme === 'dark' ? theme.palettes.gray[3] : theme.palettes.gray[5],
      },

      transition: 'border-color 150ms ease, color 150ms ease',
      color: theme.colorScheme === 'dark' ? theme.palettes.white : theme.colors.black,
      [orientation === 'horizontal' ? 'borderBottom' : 'borderRight']: '2px solid transparent',

      [`&.${tabActive.ref}`]: {
        fontWeight: 'bold',
        color: theme.palettes[color][theme.colorScheme === 'dark' ? 3 : 5],
        [orientation === 'horizontal' ? 'borderBottomColor' : 'borderRightColor']: theme.palettes[color][theme.colorScheme === 'dark' ? 3 : 5],
      },
    },

    tabInner: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: orientation === 'horizontal' ? 'center' : 'flex-start',
      lineHeight: 1,
      height: '100%',
    },

    tabIcon: {
      '&:not(:only-child)': {
        marginRight: theme.spacing.small,
      },

      // this fixes alignment as by default images and svg are inline and will have extra space on the bottom
      '& *': {
        display: 'block',
      },
    },
  };
});
