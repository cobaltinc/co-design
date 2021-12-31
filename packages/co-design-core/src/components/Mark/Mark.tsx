import React, { forwardRef } from 'react';
import { CoPalette, CoComponentProps, useCoTheme } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Mark.style';

export interface MarkProps extends CoComponentProps, React.ComponentPropsWithoutRef<'mark'> {
  color?: CoPalette;
}

export const Mark = forwardRef<HTMLElement, MarkProps>(({ color, className, co, ...props }: MarkProps, ref) => {
  const theme = useCoTheme();
  const _color = color || theme.primaryColor;
  const { classes, cx } = useStyles({ color: _color }, { co, name: 'Mark' });
  return <View component="mark" ref={ref} className={cx(classes.root, className)} {...props} />;
});

Mark.displayName = '@co-design/core/Mark';
