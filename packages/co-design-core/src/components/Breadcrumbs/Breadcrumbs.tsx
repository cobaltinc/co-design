import React, { forwardRef } from 'react';
import { ClassNames, CoComponentProps, CoSpacing } from '@co-design/styles';
import { Text } from '../Text';
import { View } from '../View';
import useStyles from './Breadcrumbs.style';

export type BreadcrumbsStylesNames = ClassNames<typeof useStyles>;

export interface BreadcrumbsProps extends CoComponentProps<BreadcrumbsStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** Separator between breadcrumbs */
  separator?: React.ReactNode;

  /** React nodes that should be separated */
  children: React.ReactNode;

  spacing?: CoSpacing | number;
}

export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ children, separator = '/', spacing = 'small', className, co, overrideStyles, ...props }: BreadcrumbsProps, ref) => {
    const { classes, cx } = useStyles({ spacing }, { overrideStyles, name: 'Breadcrumbs' });

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
      <View ref={ref} className={cx(classes.root, className)} co={co} {...props}>
        {items}
      </View>
    );
  },
);

Breadcrumbs.displayName = '@co-design/core/Breadcrumbs';
