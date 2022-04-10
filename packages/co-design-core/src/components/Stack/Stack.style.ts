import React from 'react';
import { createStyles, CoSpacing } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface StackStyles {
  spacing: CoSpacing | number;
  justify: React.CSSProperties['justifyContent'];
  align: React.CSSProperties['alignItems'];
}

export default createStyles((theme, { spacing, justify, align }: StackStyles) => {
  const spacingValue = getFieldValue(spacing, theme.spacing);

  return {
    root: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: justify,
      alignItems: align,
      gap: spacingValue,
    },

    child: {},
  };
});
