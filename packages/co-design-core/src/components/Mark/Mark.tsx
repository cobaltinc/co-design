import React, { forwardRef } from 'react';
import { CoPalette, CoComponentProps, useCoTheme, ClassNames } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Mark.style';

export type MarkStylesNames = ClassNames<typeof useStyles>;

export interface MarkProps extends CoComponentProps<MarkStylesNames>, React.ComponentPropsWithoutRef<'mark'> {
  color?: CoPalette;
}

export const Mark = forwardRef<HTMLElement, MarkProps>(({ color, className, co, overrideStyles, ...props }: MarkProps, ref) => {
  const theme = useCoTheme();
  const _color = color || theme.primaryColor;
  const { classes, cx } = useStyles({ color: _color }, { co, name: 'Mark' });
  return <View component="mark" ref={ref} className={cx(classes.root, overrideStyles, className)} {...props} />;
});

Mark.displayName = '@co-design/core/Mark';
