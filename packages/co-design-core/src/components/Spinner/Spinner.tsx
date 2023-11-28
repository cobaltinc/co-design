import React, { forwardRef } from 'react';
import { CoColor, CoSize, CoComponentProps, ClassNames } from '@co-design/styles';
import useStyles from './Spinner.style';
import { View } from '../View';

export type SpinnerStylesNames = ClassNames<typeof useStyles>;

export interface SpinnerProps extends CoComponentProps, React.ComponentPropsWithoutRef<'div'> {
  /** Spinner 컴포넌트의 크기를 정합니다. */
  size?: CoSize | number;

  /** Spinner 컴포넌트의 색상을 정합니다. */
  color?: CoColor;
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({ size = 'medium', color, className, co, overrideStyles, ...props }, ref) => {
  const { classes, cx } = useStyles({ size, color }, { overrideStyles, name: 'Spinner' });

  const spinner = (
    <i className={classes.inner}>
      <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" strokeWidth="2">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite" />
            </path>
            <circle cx="36" cy="18" r="1">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>
      </svg>
    </i>
  );

  return (
    <View ref={ref} className={cx(classes.root, className)} co={co} {...props}>
      {spinner}
    </View>
  );
});

Spinner.displayName = '@co-design/core/Spinner';
