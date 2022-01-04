import React, { useState, forwardRef } from 'react';
import * as ScrollArea from './ScrollArea';
import { ClassNames, CoComponentProps } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Scroll.style';

export type ScrollStylesNames = ClassNames<typeof useStyles>;

export interface ScrollProps extends CoComponentProps<ScrollStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** Scrollbar size in px */
  scrollbarSize?: number;

  /** Scrollbars type */
  type?: 'auto' | 'always' | 'scroll' | 'hover';

  /** Scroll hide delay in ms, for scroll and hover types only */
  scrollHideDelay?: number;

  /** Get viewport ref */
  viewportRef?: React.ForwardedRef<HTMLDivElement>;
}

export const Scroll = forwardRef<HTMLDivElement, ScrollProps>(
  (
    { children, scrollbarSize = 12, scrollHideDelay = 1000, type = 'hover', viewportRef, className, co, overrideStyles, ...props }: ScrollProps,
    ref,
  ) => {
    const [scrollbarHovered, setScrollbarHovered] = useState(false);
    const { classes, cx } = useStyles({ scrollbarSize, scrollbarHovered }, { name: 'ScrollArea', overrideStyles });

    return (
      <ScrollArea.Root type={type} scrollHideDelay={scrollHideDelay} ref={ref}>
        <View className={cx(classes.root, className)} co={co} {...props}>
          <ScrollArea.Viewport className={classes.viewport} ref={viewportRef}>
            {children}
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            orientation="horizontal"
            className={classes.scrollbar}
            forceMount
            onMouseEnter={() => setScrollbarHovered(true)}
            onMouseLeave={() => setScrollbarHovered(false)}
          >
            <ScrollArea.Thumb className={classes.thumb} />
          </ScrollArea.Scrollbar>
          <ScrollArea.Scrollbar
            orientation="vertical"
            className={classes.scrollbar}
            forceMount
            onMouseEnter={() => setScrollbarHovered(true)}
            onMouseLeave={() => setScrollbarHovered(false)}
          >
            <ScrollArea.Thumb className={classes.thumb} />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner className={classes.corner} />
        </View>
      </ScrollArea.Root>
    );
  },
);

Scroll.displayName = '@co-design/core/Scroll';
