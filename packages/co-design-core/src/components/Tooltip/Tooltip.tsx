import React, { useRef } from 'react';
import { DefaultProps, CoZIndex, useCoTheme } from '@co-design/styles';
import { View } from '../View';
import { Portal } from '../Portal/Portal';
import { getFieldValue } from '../../utils';
import useStyles, { TooltipPlacement, TooltipTrigger } from './Tooltip.style';
import { useClickAway, useToggle } from '@co-design/hooks';
import { Transition, CoTransition } from '../Transition';

export interface TooltipProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  visible?: boolean;
  label: string;
  withArrow?: boolean;
  width?: number;
  placement?: TooltipPlacement;
  trigger?: TooltipTrigger;
  zIndex?: CoZIndex | number;
  transition?: CoTransition;
  transitionDuration?: number;
  transitionTimingFunction?: string;
}

const getPositionStyle = (placement: TooltipPlacement, target?: HTMLElement) => {
  if (!target) return { top: 0, left: 0 };

  let top = 0;
  let left = 0;
  const rect = target.getBoundingClientRect();
  const splited = placement.split('-');

  if (splited[0] === 'top') top = rect.top + window.pageYOffset;
  else if (splited[0] === 'right') left = rect.left + rect.width;
  else if (splited[0] === 'bottom') top = rect.top + rect.height + window.pageYOffset;
  else if (splited[0] === 'left') left = rect.left;

  if (splited[1] === 'top') top = rect.top + window.pageYOffset;
  else if (splited[1] === 'right') left = rect.left + rect.width;
  else if (splited[1] === 'bottom') top = rect.top + rect.height + window.pageYOffset;
  else if (splited[1] === 'left') left = rect.left;
  else {
    if (splited[0] === 'top' || splited[0] === 'bottom') left = rect.left + rect.width / 2;
    else if (splited[0] === 'left' || splited[0] === 'right') top = rect.top + rect.height / 2 + window.pageYOffset;
  }

  return { top, left };
};

export const Tooltip = ({
  children,
  visible = false,
  label,
  withArrow = true,
  width,
  placement = 'top',
  trigger = 'hover',
  zIndex,
  transition = 'fade',
  transitionDuration = 100,
  transitionTimingFunction = 'ease',
  className,
  co,
  ...props
}: TooltipProps) => {
  const theme = useCoTheme();
  const _zIndex = getFieldValue(zIndex, theme.zIndex) || theme.zIndex.dropdown;
  const { classes, cx } = useStyles(null, { co, name: 'Tooltip' });

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

  const contentStyle: React.CSSProperties = {
    width: width ? width : 'auto',
    whiteSpace: width ? 'normal' : 'nowrap',
    pointerEvents: visible ? 'all' : 'none',
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
      <Portal zIndex={_zIndex}>
        <Transition mounted={currentVisible} transition={transition} duration={transitionDuration} timingFunction={transitionTimingFunction}>
          {(styles) => (
            <View className={classes.balloon} style={{ ...positionStyle, ...styles }} ref={balloonRef} {...props}>
              <div className={cx(placement, classes.content)} style={contentStyle}>
                {label}
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

Tooltip.displayName = '@co-design/core/Tooltip';
