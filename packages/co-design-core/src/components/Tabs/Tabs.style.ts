import { CoSpacing, createStyles } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface TabsStyles {
  tabPadding: CoSpacing;
  orientation: 'horizontal' | 'vertical';
}

export default createStyles((theme, { tabPadding, orientation }: TabsStyles, getRef) => {
  const tabsList = { ref: getRef('tabsList') } as const;

  return {
    tabsListWrapper: {
      [orientation === 'horizontal' ? 'borderBottom' : 'borderRight']: `2px solid ${
        theme.colorScheme === 'dark' ? theme.palettes.gray[7] : theme.palettes.gray[1]
      }`,

      [`& .${tabsList.ref}`]: {
        [orientation === 'horizontal' ? 'marginBottom' : 'marginRight']: -2,
      },
    },
    tabsList,

    root: {
      display: orientation === 'vertical' ? 'flex' : 'block',
    },

    body: {
      [orientation === 'horizontal' ? 'paddingTop' : 'paddingLeft']: getFieldValue(tabPadding, theme.spacing),
    },
  };
});
