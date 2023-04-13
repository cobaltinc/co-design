import React, { useRef } from 'react';
import { CoComponentProps, CoZIndex, useCoTheme, CoSpacing, ClassNames } from '@co-design/styles';
import { View } from '../View';
import { Portal } from '../Portal/Portal';
import { getFieldValue } from '../../utils';
import useStyles, { PopoverPlacement, PopoverTrigger } from './Popover.style';
import { useClickAway, useToggle, useUpdateEffect } from '@co-design/hooks';
import { CoTransition, Transition } from '../Transition';

export type PopoverStylesNames = ClassNames<typeof useStyles>;

export interface PopoverProps extends CoComponentProps<PopoverStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /**
   * true일 경우 Popover 컴포넌트를 보여줍니다.
   * Popover 컴포넌트를 직접 제어할 경우 사용하는 속성입니다.
   */
  opened?: boolean;

  /** Popover 컴포넌트에 포함시킬 요소를 넣습니다. */
  content: React.ReactNode;

  /** Popover 컴포넌트 컨텐츠 영역에 padding을 적용합니다. */
  contentPadding?: CoSpacing | number;

  /** Popover 컴포넌트에 화살표를 보여줄지 정합니다. */
  withArrow?: boolean;

  /** Popover 컴포넌트의 너비를 지정한 값으로 고정합니다. */
  width?: number;

  /** Popover 컴포넌트가 보여질 위치를 정합니다. */
  placement?: PopoverPlacement;

  /** Popover 컴포넌트를 등장시킬 이벤트를 정합니다. */
  trigger?: PopoverTrigger;

  /** Popover 컴포넌트의 z-index를 정합니다. */
  zIndex?: CoZIndex | number;

  /** Popover 컴포넌트가 마운트될 요소를 정합니다. */
  target?: HTMLDivElement;

  /** Popover 컴포넌트가 등장할 때 실행될 트랜지션을 정합니다. */
  transition?: CoTransition;

  /** 트랜지션이 실행되는 시간을 ms단위로 정합니다. */
  transitionDuration?: number;

  /** 트랜지션의 타이밍 함수를 정합니다. */
  transitionTimingFunction?: string;

  /** Popover가 열릴 경우 실행됩니다. */
  onOpen?(): void;

  /** Popover가 닫힐 경우 실행됩니다. */
  onClose?(): void;
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
  opened,
  content,
  contentPadding = 'medium',
  withArrow = true,
  width,
  placement = 'top',
  trigger = 'click',
  zIndex = 'dropdown',
  target,
  transition = 'fade',
  transitionDuration = 100,
  transitionTimingFunction = 'ease',
  onOpen,
  onClose,
  className,
  co,
  overrideStyles,
  ...props
}: PopoverProps) => {
  const theme = useCoTheme();
  const { classes, cx } = useStyles({ contentPadding }, { overrideStyles, name: 'Popover' });

  const [currentOpened, setCurrentOpened] = useToggle(opened);
  const balloonRef = useRef<HTMLDivElement>(null);
  const targetRef = useClickAway<HTMLDivElement>((e: MouseEvent) => {
    if (
      trigger === 'click' &&
      targetRef.current &&
      balloonRef.current &&
      !targetRef.current.contains(e.target as HTMLElement) &&
      !balloonRef.current.contains(e.target as HTMLElement)
    ) {
      setCurrentOpened(false);
    }
  });

  const handleMouseEnter = trigger === 'hover' ? () => setCurrentOpened(true) : undefined;
  const handleMouseLeave = trigger === 'hover' ? () => setCurrentOpened(false) : undefined;
  const handleClick =
    trigger === 'click'
      ? (e: React.MouseEvent) => {
          if (targetRef.current.contains(e.nativeEvent.target as HTMLElement)) {
            setCurrentOpened((old) => !old);
          }
        }
      : undefined;
  const handleFocus = trigger === 'focus' ? () => setCurrentOpened(true) : undefined;
  const handleBlur = trigger === 'focus' ? () => setCurrentOpened(false) : undefined;

  useUpdateEffect(() => {
    setCurrentOpened(opened);
  }, [opened]);

  useUpdateEffect(() => {
    if (currentOpened) onOpen?.();
    else onClose?.();
  }, [currentOpened]);

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
      co={co}
    >
      <Portal zIndex={getFieldValue(zIndex, theme.zIndex)} target={target}>
        <Transition
          mounted={opened === undefined ? currentOpened : opened}
          transition={transition}
          duration={transitionDuration}
          timingFunction={transitionTimingFunction}
        >
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
