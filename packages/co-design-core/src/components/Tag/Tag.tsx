import React, { forwardRef } from 'react';
import { CoPalette, CoComponentProps, ClassNames } from '@co-design/styles';
import useStyles from './Tag.style';
import { View } from '../View';

export type TagStylesNames = ClassNames<typeof useStyles>;

export interface TagProps extends CoComponentProps<TagStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  color: CoPalette;
  fullWidth?: boolean;
  strong?: boolean;
}

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ color, fullWidth = false, strong = false, className, co, overrideStyles, ...props }, ref) => {
    const { classes, cx } = useStyles({ color, fullWidth, strong }, { overrideStyles, name: 'Tag' });

    return <View component="div" ref={ref} className={cx(classes.root, className)} co={co} {...props} />;
  },
);

Tag.displayName = '@co-design/core/Tag';
