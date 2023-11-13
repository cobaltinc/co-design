import React, { useEffect } from 'react';
import { useScrollLock, useFocusTrap, useFocusReturn } from '@co-design/hooks';
import { ClassNames, CoComponentProps, CoShadows, CoSize, CoSpacing, CoZIndex } from '@co-design/styles';
import { Paper } from '../Paper';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';
import { Text } from '../Text';
import { View } from '../View';
import { CloseButton } from '../IconButton';
import { GroupedTransition, CoTransition } from '../Transition';
import useStyles, { DrawerPosition } from './Drawer.style';

export type DrawerStylesNames = Exclude<ClassNames<typeof useStyles>, 'noOverlay'>;

export interface DrawerProps extends CoComponentProps<DrawerStylesNames>, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** true인 경우 Drawer 컴포넌트가 열립니다. */
  opened: boolean;

  /** Drawer의 타이틀을 정합니다. */
  title?: React.ReactNode;

  /** Drawer 컴포넌트가 등장할 위치를 정합니다. */
  position?: DrawerPosition;

  /**
   * Drawer 컴포넌트의 크기를 지정합니다.
   * position 속성이 left 혹은 right일 경우 너비를
   * position 속성이 top 혹은 bottom일 경우 높이가 조정됩니다.
   */
  size?: CoSize | 'full' | number;

  /** Drawer 컴포넌트에 그림자를 적용합니다. */
  shadow?: CoShadows;

  /** Drawer 컴포넌트 내부 영역에 padding을 줍니다. */
  padding?: CoSpacing | number;

  /** Drawer 컴포넌트의 z-index를 정합니다. */
  zIndex?: CoZIndex | number;

  /** true일 경우 Drawer 컴포넌트로 focus를 옮겨오지 않습니다. */
  noFocusTrap?: boolean;

  /** true일 경우 스크롤 잠금을 해제합니다. */
  noScrollLock?: boolean;

  /** true일 경우 바깥 쪽을 클릭해도 Drawer가 닫히지 않습니다. */
  noCloseOnClickOutside?: boolean;

  /** true일 경우 ESC를 눌러도 Drawer가 닫히지 않습니다. */
  noCloseOnEscape?: boolean;

  /** transition 속성을 정의합니다. */
  transition?: CoTransition;

  /** Transition이 실행되는 시간을 ms 단위로 정합니다. */
  transitionDuration?: number;

  /** Drawer 컴포넌트에 transitionTimingFunction css 속성을 정의합니다. */
  transitionTimingFunction?: string;

  /** true일 경우 배경 Overlay를 제거합니다. */
  noOverlay?: boolean;

  /** Overlay의 opacity를 설정합니다. */
  overlayOpacity?: number;

  /** Overlay 색상을 정합니다. */
  overlayColor?: string;

  /** true일 경우 Close 버튼이 제거됩니다. */
  hideCloseButton?: boolean;

  /** Drawer 컴포넌트가 마운트될 요소를 정합니다. */
  target?: HTMLDivElement;

  /** Drawer 컴포넌트가 닫힐 때 실행됩니다. */
  onClose(): void;

  /** Drawer 컴포넌트가 열리는 진입 트랜지션이 시작되면 실행됩니다. */
  onEnter?(): void;

  /** Drawer 컴포넌트가 열리는 진입 트랜지션이 끝나면 실행됩니다. */
  onEntered?(): void;

  /** Drawer 컴포넌트가 닫히는 종료 트랜지션이 시작되면 실행됩니다. */
  onExit?(): void;

  /** Drawer 컴포넌트가 닫히는 종료 트랜지션이 끝나면 실행됩니다. */
  onExited?(): void;
}

const transitions: Record<DrawerPosition, CoTransition> = {
  top: 'slide-down',
  bottom: 'slide-up',
  left: 'slide-right',
  right: 'slide-left',
};

export const CoDrawer = ({
  opened,
  title,
  position = 'left',
  size = 'medium',
  noFocusTrap = false,
  noScrollLock = false,
  noCloseOnClickOutside = false,
  noCloseOnEscape = false,
  transition,
  transitionDuration = 250,
  transitionTimingFunction = 'ease',
  zIndex = 'modal',
  overlayColor,
  overlayOpacity,
  children,
  noOverlay = false,
  shadow = 'medium',
  padding = 'medium',
  hideCloseButton,
  onClose,
  className,
  overrideStyles,
  onEnter,
  onEntered,
  onExit,
  onExited,
  ...props
}: DrawerProps) => {
  const { classes, cx, theme } = useStyles({ size, position }, { overrideStyles, name: 'Drawer' });
  const focusTrapRef = useFocusTrap(!noFocusTrap && opened);

  const [, lockScroll] = useScrollLock();

  const drawerTransition = transition || transitions[position];
  const _overlayOpacity = typeof overlayOpacity === 'number' ? overlayOpacity : theme.colorScheme === 'dark' ? 0.85 : 0.75;

  const closeOnEscape = (event: KeyboardEvent) => {
    if (noFocusTrap && event.code === 'Escape' && !noCloseOnEscape) {
      onClose();
    }
  };

  useEffect(() => {
    if (noFocusTrap) {
      window.addEventListener('keydown', closeOnEscape);
      return () => window.removeEventListener('keydown', closeOnEscape);
    }
  }, [noFocusTrap]);

  useFocusReturn({ opened, transitionDuration });

  return (
    <GroupedTransition
      onExit={() => {
        if (onExit) onExit();
      }}
      onExited={() => {
        lockScroll(false);
        if (onExited) onExited();
      }}
      onEnter={() => {
        if (onEnter) onEnter();
      }}
      onEntered={() => {
        lockScroll(!noScrollLock && true);
        if (onEntered) onEntered();
      }}
      mounted={opened}
      transitions={{
        overlay: { duration: transitionDuration / 2, transition: 'fade', timingFunction: 'ease' },
        drawer: {
          duration: transitionDuration,
          transition: drawerTransition,
          timingFunction: transitionTimingFunction,
        },
      }}
    >
      {(transitionStyles) => (
        <View className={cx(classes.root, { [classes.noOverlay]: noOverlay }, className)} role="dialog" aria-modal {...props}>
          <Paper
            className={cx(classes.drawer, className)}
            ref={focusTrapRef}
            style={{ ...transitionStyles.drawer, zIndex: (zIndex in theme.zIndex ? theme.zIndex[zIndex] : zIndex) + 2 }}
            radius={0}
            tabIndex={-1}
            onKeyDownCapture={(event) => event.nativeEvent.code === 'Escape' && !noCloseOnEscape && onClose()}
            shadow={shadow}
            padding={padding}
            withBorder={false}
          >
            {(title || !hideCloseButton) && (
              <div className={classes.header}>
                <Text strong className={classes.title}>
                  {title}
                </Text>

                {!hideCloseButton && <CloseButton variant="text" color="gray" size="small" onClick={onClose} className={classes.closeButton} />}
              </div>
            )}
            {children}
          </Paper>

          {!noOverlay && (
            <div style={transitionStyles.overlay}>
              <Overlay
                className={classes.overlay}
                opacity={_overlayOpacity}
                zIndex={zIndex}
                color={overlayColor || (theme.colorScheme === 'dark' ? theme.palettes.gray[9] : theme.colors.black)}
                onMouseDown={() => !noCloseOnClickOutside && onClose()}
              />
            </div>
          )}
        </View>
      )}
    </GroupedTransition>
  );
};

export const Drawer = ({ zIndex = 'modal', target, ...props }: React.ComponentPropsWithoutRef<typeof CoDrawer>) => {
  return (
    <Portal zIndex={zIndex} target={target}>
      <CoDrawer {...props} />
    </Portal>
  );
};

Drawer.displayName = '@co-design/core/Drawer';
