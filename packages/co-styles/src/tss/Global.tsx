import React from 'react';
import { Global as EmotionGlobal, css, CSSObject } from '@emotion/react';
import { useCoTheme } from '../theme/CoProvider';
import type { MantineTheme } from '../theme/types';

interface GlobalStylesProps {
  styles(theme: MantineTheme): CSSObject;
}

export const Global = ({ styles }: GlobalStylesProps) => {
  const theme = useCoTheme();
  return <EmotionGlobal styles={css(styles(theme))} />;
};
