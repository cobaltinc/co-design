import React, { forwardRef } from 'react';
import { CoBreakpoints, CoSpacing, CoComponentProps, ClassNames } from '@co-design/styles';
import useStyles from './Container.style';
import { View } from '../View';

export type ContainerStylesNames = ClassNames<typeof useStyles>;

export interface ContainerProps extends CoComponentProps<ContainerStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** Container 컴포넌트의 너비를 정합니다. */
  size?: CoBreakpoints | number;

  /** Container 컴포넌트 내용에 padding을 줍니다. */
  padding?: CoSpacing | number;

  /** Container 컴포넌트의 너비를 상위 요소의 너비에 맞춥니다. */
  fluid?: boolean;

  /** Container 컴포넌트의 크기가 breakpoint 단위로 줄어듭니다. */
  break?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'large', padding, fluid, break: _break, className, co, overrideStyles, ...props }, ref) => {
    const { classes, cx } = useStyles({ padding, fluid, size, break: _break }, { overrideStyles, name: 'Container' });

    return <View component="div" ref={ref} className={cx(classes.root, className)} co={co} {...props} />;
  },
);

Container.displayName = '@co-design/core/Container';
