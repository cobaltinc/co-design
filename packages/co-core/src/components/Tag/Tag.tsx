import React, { forwardRef } from 'react';
import { CoColorPalette, DefaultProps } from '@co/styles';
import useStyles from './Tag.style';
import { View } from '../View';

export interface TagProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  color: CoColorPalette;
  fullWidth?: boolean;
  strong?: boolean;
}

export const Tag = forwardRef<HTMLDivElement, TagProps>(({ color, fullWidth = false, strong = false, className, co, ...props }, ref) => {
  const { classes, cx } = useStyles({ color, fullWidth, strong }, { co, name: 'Tag' });

  return <View component="div" ref={ref} className={cx(classes.root, className)} {...props} />;
});

Tag.displayName = '@co/core/Tag';
