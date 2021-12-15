import React, { forwardRef } from 'react';
import { CoColor, CoColorPalette, CoSize, DefaultProps } from '@co/styles';
import useStyles from './Spinner.style';

export interface SpinnerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  size?: CoSize | number;
  color?: CoColorPalette | CoColor | string;
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({ size = 'medium', color, className, co, ...props }, ref) => {
  const { classes, cx } = useStyles({ size, color }, { co, name: 'Spinner' });

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
    <div ref={ref} className={cx(classes.root, className)} {...props}>
      {spinner}
    </div>
  );
});

Spinner.displayName = '@co/core/Spinner';
