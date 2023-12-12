import React, { forwardRef } from 'react';
import { CoComponentProps } from '@co-design/styles';
import { View } from '../View';
import useStyles from './AspectRatio.style';

export interface AspectRatioProps extends CoComponentProps, React.ComponentPropsWithoutRef<'div'> {
  /** 16 / 9, 4 / 3과 같이 비율 값을 정합니다. */
  ratio: number;
}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(({ children, ratio, className, ...props }: AspectRatioProps, ref) => {
  const { classes, cx } = useStyles({ ratio }, { name: 'AspectRatio' });

  return (
    <View ref={ref} className={cx(classes.root, className)} {...props}>
      {children}
    </View>
  );
});

AspectRatio.displayName = '@co-design/core/AspectRatio';
