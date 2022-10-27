import React from 'react';
import { CoTheme } from '@co-design/styles';
import { SelectRightSection, SelectRightSectionProps } from './SelectRightSection';

interface GetRightSectionProps extends SelectRightSectionProps {
  rightSection?: React.ReactNode;
  rightSectionWidth?: number;
  overrideStyles: Record<string, any>;
  theme: CoTheme;
}

const RIGHT_SECTION_WIDTH = {
  xsmall: 24,
  small: 30,
  medium: 34,
  large: 44,
  xlarge: 54,
};

export function getSelectRightSectionProps({ overrideStyles, rightSection, rightSectionWidth, theme, ...props }: GetRightSectionProps) {
  if (rightSection) {
    return { rightSection, rightSectionWidth, overrideStyles };
  }

  const _overrideStyles = typeof overrideStyles === 'function' ? overrideStyles(theme) : overrideStyles;

  return {
    rightSectionWidth: theme.fn.size({ size: props.size, sizes: RIGHT_SECTION_WIDTH }) as number,
    rightSection: <SelectRightSection {...props} />,
    overrideStyles: {
      ..._overrideStyles,
      rightSection: {
        ..._overrideStyles?.rightSection,
        pointerEvents: props.shouldClear ? undefined : 'none',
      },
    },
  };
}
