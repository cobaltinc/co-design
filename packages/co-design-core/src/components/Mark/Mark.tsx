import React, { forwardRef } from 'react';
import { CoPalette, CoComponentProps, useCoTheme, ClassNames } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Mark.style';

export type MarkStylesNames = ClassNames<typeof useStyles>;

export interface MarkProps extends CoComponentProps<MarkStylesNames>, React.ComponentPropsWithoutRef<'mark'> {
  /** Mark 컴포넌트의 배경 색상을 정합니다. */
  color?: CoPalette;
}

export const Mark = forwardRef<HTMLElement, MarkProps>(({ color, className, co, overrideStyles, ...props }: MarkProps, ref) => {
  const theme = useCoTheme();
  const _color = color || theme.primaryColor;
  const { classes, cx } = useStyles({ color: _color }, { overrideStyles, name: 'Mark' });
  return <View component="mark" ref={ref} className={cx(classes.root, className)} co={co} {...props} />;
});

Mark.displayName = '@co-design/core/Mark';
