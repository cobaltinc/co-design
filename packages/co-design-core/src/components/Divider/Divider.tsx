import React, { forwardRef } from 'react';
import { CoComponentProps, CoSpacing } from '@co-design/styles';
import useStyles from './Divider.style';
// import { Text } from '../Text';
import { View } from '../View';

export type DividerStylesNames = 'label';

export interface DividerProps extends CoComponentProps, React.ComponentPropsWithoutRef<'div'> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  margin?: CoSpacing | number;
  label?: React.ReactNode;
  labelPosition?: 'left' | 'center' | 'right';
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    { variant = 'solid', orientation = 'horizontal', margin = 'spacing3', label, labelPosition = 'center', className, ...props }: DividerProps,
    ref,
  ) => {
    const { classes, cx } = useStyles({ margin, variant }, { name: 'Divider' });

    const vertical = orientation === 'vertical';
    const horizontal = !vertical;
    const withLabel = !!label && horizontal;

    return (
      <View
        ref={ref}
        className={cx(
          {
            [classes.vertical]: vertical,
            [classes.horizontal]: horizontal,
            [classes.withLabel]: withLabel,
          },
          className,
        )}
        {...props}
      >
        {/* {!!label && horizontal && (
          <Text color={theme.colors.border} size="xs" sx={{ marginTop: 2 }} className={cx(classes.label, classes[labelPosition])}>
            {label}
          </Text>
        )} */}
      </View>
    );
  },
);

Divider.displayName = '@co-design/core/Divider';
