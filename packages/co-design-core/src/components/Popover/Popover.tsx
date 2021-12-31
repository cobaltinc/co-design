import React, { useRef } from 'react';
import { CoComponentProps, CoZIndex, useCoTheme, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import { Portal } from '../Portal/Portal';
import { getFieldValue } from '../../utils';
import useStyles, { PopoverPlacement, PopoverTrigger } from './Popover.style';
import { useClickAway, useToggle, useUpdateEffect } from '@co-design/hooks';
import { CoTransition, Transition } from '../Transition';

export interface PopoverProps extends CoComponentProps, React.ComponentPropsWithoutRef<'div'> {
  visible?: boolean;
  content: React.ReactNode;
  contentPadding?: CoSpacing | number;
  withArrow?: boolean;
  width?: number;
  placement?: PopoverPlacement;
  trigger?: PopoverTrigger;
  zIndex?: CoZIndex | number;
  transition?: CoTransition;
  transitionDuration?: number;
  transitionTimingFunction?: string;
  onChangeVisible?(visible: boolean): void;
}

const getPositionStyle = (placement: PopoverPlacement, target?: HTMLElement) => {
  if (!target) return { top: 0, left: 0 };

  let top = 0;
  let left = 0;
  const rect = target.getBoundingClientRect();
  const splited = placement.split('-');

  if (splited[0] === 'top') top = rect.top;
  else if (splited[0] === 'right') left = rect.left + rect.width;
  else if (splited[0] === 'bottom') top = rect.top + rect.height;
  else if (splited[0] === 'left') left = rect.left;

  if (splited[1] === 'top') top = rect.top;
  else if (splited[1] === 'right') left = rect.left + rect.width;
  else if (splited[1] === 'bottom') top = rect.top + rect.height;
  else if (splited[1] === 'left') left = rect.left;
  else {
    if (splited[0] === 'top' || splited[0] === 'bottom') left = rect.left + rect.width / 2;
    else if (splited[0] === 'left' || splited[0] === 'right') top = rect.top + rect.height / 2;
  }

  return { top, left };
};

export const Popover = ({
  children,
  visible = false,
  content,
  contentPadding = 'spacing3',
  withArrow = true,
  width,
  placement = 'top',
  trigger = 'click',
  zIndex = 'dropdown',
  transition = 'fade',
  transitionDuration = 100,
  transitionTimingFunction = 'ease',
  onChangeVisible,
  className,
  co,
  ...props
}: PopoverProps) => {
  const theme = useCoTheme();
  const { classes, cx } = useStyles({ contentPadding }, { co, name: 'Popover' });

  const [currentVisible, setCurrentVisible] = useToggle(visible);
  const balloonRef = useRef<HTMLDivElement>(null);
  const targetRef = useClickAway<HTMLDivElement>((e: MouseEvent) => {
    if (
      trigger === 'click' &&
      targetRef.current &&
      balloonRef.current &&
      !targetRef.current.contains(e.target as HTMLElement) &&
      !balloonRef.current.contains(e.target as HTMLElement)
    ) {
      setCurrentVisible(false);
    }
  });

  const handleMouseEnter = trigger === 'hover' ? () => setCurrentVisible(true) : undefined;
  const handleMouseLeave = trigger === 'hover' ? () => setCurrentVisible(false) : undefined;
  const handleClick =
    trigger === 'click'
      ? (e: React.MouseEvent) => {
          if (targetRef.current.contains(e.nativeEvent.target as HTMLElement)) {
            setCurrentVisible((old) => !old);
          }
        }
      : undefined;
  const handleFocus = trigger === 'focus' ? () => setCurrentVisible(true) : undefined;
  const handleBlur = trigger === 'focus' ? () => setCurrentVisible(false) : undefined;

  useUpdateEffect(() => {
    onChangeVisible?.(currentVisible);
  }, [currentVisible]);

  const contentStyle: React.CSSProperties = {
    width: width ? width : 'auto',
    whiteSpace: width ? 'normal' : 'nowrap',
  };
  const positionStyle = getPositionStyle(placement, targetRef.current);

  return (
    <View
      ref={targetRef}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cx(classes.root, className)}
    >
      <Portal zIndex={getFieldValue(zIndex, theme.zIndex)}>
        <Transition mounted={currentVisible} transition={transition} duration={transitionDuration} timingFunction={transitionTimingFunction}>
          {(styles) => (
            <View className={cx(placement, classes.balloon)} style={{ ...positionStyle, ...styles }} ref={balloonRef} {...props}>
              <div className={cx(placement, classes.content)} style={contentStyle}>
                {content}
              </div>
              {withArrow && <div className={cx(placement, classes.arrow)} />}
            </View>
          )}
        </Transition>
      </Portal>

      {children}
    </View>
  );
};

Popover.displayName = '@co-design/core/Popover';
