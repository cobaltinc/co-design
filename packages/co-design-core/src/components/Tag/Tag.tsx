import React, { forwardRef } from 'react';
import { CoPalette, CoComponentProps, ClassNames } from '@co-design/styles';
import useStyles from './Tag.style';
import { View } from '../View';

export type TagStylesNames = ClassNames<typeof useStyles>;

export interface TagProps extends CoComponentProps<TagStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** Tag 컴포넌트의 색상을 정합니다. */
  color: CoPalette;

  /** Tag 컴포넌트의 크기를 상위 컴포넌트의 너비에 맞춥니다. */
  fullWidth?: boolean;

  /** Tag 컴포넌트에 포함된 문자열에 bold를 적용합니다. */
  strong?: boolean;
}

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ color, fullWidth = false, strong = false, className, co, overrideStyles, ...props }, ref) => {
    const { classes, cx } = useStyles({ color, fullWidth, strong }, { overrideStyles, name: 'Tag' });

    return <View component="div" ref={ref} className={cx(classes.root, className)} co={co} {...props} />;
  },
);

Tag.displayName = '@co-design/core/Tag';
