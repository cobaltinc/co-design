import React, { useRef } from 'react';
import { ClassNames, CoComponentProps, CoZIndex, useCoTheme } from '@co-design/styles';
import { View } from '../View';
import { Portal } from '../Portal/Portal';
import { getFieldValue } from '../../utils';
import useStyles, { TooltipPlacement, TooltipTrigger } from './Tooltip.style';
import { useClickAway, useToggle, useUpdateEffect } from '@co-design/hooks';
import { Transition, CoTransition } from '../Transition';

export type TooltipStylesNames = ClassNames<typeof useStyles>;

export interface TooltipProps extends CoComponentProps<TooltipStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /**
   * true일 경우 Tooltip 컴포넌트를 보여줍니다.
   * Tooltip 컴포넌트를 직접 제어할 경우 사용하는 속성입니다.
   */
  visible?: boolean;

  /** Tooltip 컴포넌트가 보여줄 문자열을 정합니다. */
  label: string;

  /** Tooltip 컴포넌트에 화살표를 보여줄지 정합니다. */
  withArrow?: boolean;

  /** Tooltip 컴포넌트의 너비를 지정한 값으로 고정합니다. */
  width?: number;

  /** Tooltip 컴포넌트가 보여질 위치를 정합니다. */
  placement?: TooltipPlacement;

  /** Tooltip 컴포넌트를 등장시킬 이벤트를 정합니다. */
  trigger?: TooltipTrigger;

  /** Tooltip 컴포넌트의 z-index를 정합니다. */
  zIndex?: CoZIndex | number;

  /** Tooltip 컴포넌트가 마운트될 요소를 정합니다. */
  target?: HTMLDivElement;

  /** Tooltip 컴포넌트가 등장할 때 실행될 트랜지션을 정합니다. */
  transition?: CoTransition;

  /** 트랜지션이 실행되는 시간을 ms단위로 정합니다. */
  transitionDuration?: number;

  /** 트랜지션의 타이밍 함수를 정합니다. */
  transitionTimingFunction?: string;

  /** visible이 변경될 경우 실행됩니다. */
  onChangeVisible?(visible: boolean): boolean;
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
  zIndex = 'dropdown',
  target,
  transition = 'fade',
  transitionDuration = 100,
  transitionTimingFunction = 'ease',
  onChangeVisible,
  className,
  co,
  overrideStyles,
  ...props
}: TooltipProps) => {
  const theme = useCoTheme();
  const { classes, cx } = useStyles(null, { overrideStyles, name: 'Tooltip' });

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
      co={co}
    >
      <Portal zIndex={getFieldValue(zIndex, theme.zIndex)} target={target}>
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
