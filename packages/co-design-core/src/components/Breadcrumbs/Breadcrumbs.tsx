import React, { forwardRef } from 'react';
import { CoComponentProps, CoSpacing } from '@co-design/styles';
import { Text } from '../Text';
import { View } from '../View';
import useStyles from './Breadcrumbs.style';

export interface BreadcrumbsProps extends CoComponentProps, React.ComponentPropsWithoutRef<'div'> {
  /** Separator between breadcrumbs */
  separator?: React.ReactNode;

  /** React nodes that should be separated */
  children: React.ReactNode;

  spacing?: CoSpacing | number;
}

export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ children, separator = '/', spacing = 'spacing2', className, co, ...props }: BreadcrumbsProps, ref) => {
    const { classes, cx } = useStyles({ spacing }, { co, name: 'Breadcrumbs' });

    const items = React.Children.toArray(children).reduce((acc: any[], child: any, index, array) => {
      acc.push(React.cloneElement(child, { className: classes.breadcrumb, key: index }));

      if (index !== array.length - 1) {
        acc.push(
          <Text size="small" className={classes.separator} key={`separator-${index}`}>
            {separator}
          </Text>,
        );
      }

      return acc;
    }, []);

    return (
      <View className={cx(classes.root, className)} ref={ref} {...props}>
        {items}
      </View>
    );
  },
);

Breadcrumbs.displayName = '@co-design/core/Breadcrumbs';
