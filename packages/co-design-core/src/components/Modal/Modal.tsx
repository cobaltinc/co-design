/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useScrollLock, useFocusTrap, useFocusReturn, useId } from '@co-design/hooks';
import { CoComponentProps, ClassNames, CoZIndex, CoRadius, CoShadows, CoSpacing, CoSize } from '@co-design/styles';
import { CloseButton } from '../IconButton';
import { Text } from '../Text';
import { Paper } from '../Paper';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';
import { View } from '../View';
import { GroupedTransition, CoTransition } from '../Transition';
import useStyles from './Modal.style';

export type ModalStylesNames = ClassNames<typeof useStyles>;

export interface ModalProps extends CoComponentProps<ModalStylesNames>, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Modal 컴포넌트의 id를 정합니다. 설정하지 않은 경우 랜덤 생성된 id가 사용됩니다. */
  id?: string;

  /** true일 경우 Modal 컴포넌트가 마운트됩니다. */
  opened: boolean;

  /** Modal 타이틀을 정합니다. */
  title?: React.ReactNode;

  /** Modal 컴포넌트의 너비를 정합니다. */
  size?: CoSize | 'full' | number;

  /** Modal 컴포넌트에 shadow를 적용합니다. */
  shadow?: CoShadows;

  /** Modal 컴포넌트 body 영역에 padding을 적용합니다. */
  padding?: CoSpacing | number;

  /** Modal 컴포넌트의 radius를 정합니다. */
  radius?: CoRadius;

  /** Modal 컴포넌트의 z-index를 정합니다. */
  zIndex?: CoZIndex | number;

  /** Modal 컴포넌트에서 내용이 넘칠 경우에 대한 처리를 정합니다. */
  overflow?: 'outside' | 'inside';

  /** Modal 컴포넌트가 등장하는 트랜지션을 정합니다. */
  transition?: CoTransition;

  /** 트랜지션이 실행되는 시간을 ms단위로 정합니다. */
  transitionDuration?: number;

  /** 트랜지션의 타이밍 함수를 정합니다. */
  transitionTimingFunction?: string;

  /** 배경 Overlay의 투명도를 정합니다. */
  overlayOpacity?: number;

  /** 배경 Overlay의 색상을 정합니다. */
  overlayColor?: string;

  /** true일 경우 X 버튼을 제거합니다. */
  hideCloseButton?: boolean;

  /** true일 경우 Modal 컴포넌트 바깥을 클릭하면 모달이 닫힙니다. */
  closeOnClickOutside?: boolean;

  /** Modal 컴포넌트가 마운트될 요소를 정합니다. */
  target?: HTMLDivElement;

  /** Modal 컴포넌트가 사라질 때 실행됩니다. */
  onClose(): void;
}

export const CoModal = ({
  id,
  opened,
  children,
  title,
  size = 'medium',
  padding = 'large',
  shadow = 'large',
  radius = 'medium',
  overlayColor,
  overlayOpacity,
  overflow = 'outside',
  transition = 'pop',
  transitionDuration = 200,
  hideCloseButton = false,
  closeOnClickOutside = true,
  onClose,
  className,
  co,
  overrideStyles,
  ...props
}: ModalProps) => {
  const baseId = useId(id);
  const titleId = `${baseId}-title`;
  const bodyId = `${baseId}-body`;
  const { classes, cx, theme } = useStyles({ size, overflow }, { overrideStyles, name: 'Modal' });
  const focusTrapRef = useFocusTrap(opened);
  const _overlayOpacity = typeof overlayOpacity === 'number' ? overlayOpacity : theme.colorScheme === 'dark' ? 'opacity6' : 'opacity5';

  const [, lockScroll] = useScrollLock();
  useFocusReturn({ opened, transitionDuration });

  return (
    <GroupedTransition
      onExited={() => lockScroll(false)}
      onEntered={() => lockScroll(true)}
      mounted={opened}
      transitions={{
        modal: { duration: transitionDuration, transition },
        overlay: {
          duration: transitionDuration / 2,
          transition: 'fade',
          timingFunction: 'ease',
        },
      }}
    >
      {(transitionStyles) => (
        <View className={cx(classes.root, className)} co={co} {...props}>
          <div
            className={classes.inner}
            onClick={() => closeOnClickOutside && onClose()}
            onKeyDownCapture={(event) => {
              const shouldTrigger = (event.target as any)?.getAttribute('data-co-stop-propagation') !== 'true';
              shouldTrigger && event.nativeEvent.code === 'Escape' && onClose();
            }}
            ref={focusTrapRef}
          >
            <Paper<'div'>
              onClick={(event) => event.stopPropagation()}
              className={classes.modal}
              shadow={shadow}
              padding={padding}
              radius={radius}
              withBorder={false}
              role="dialog"
              aria-labelledby={titleId}
              aria-describedby={bodyId}
              aria-modal
              tabIndex={-1}
              style={{
                ...transitionStyles.modal,
                marginLeft: 'calc(var(--removed-scroll-width, 0px) * -1)',
                zIndex: 3,
              }}
            >
              {(title || !hideCloseButton) && (
                <div className={classes.header}>
                  <Text id={titleId} strong className={classes.title}>
                    {title}
                  </Text>

                  {!hideCloseButton && <CloseButton variant="transparent" color="gray" onClick={onClose} />}
                </div>
              )}

              <div id={bodyId} className={classes.body}>
                {children}
              </div>
            </Paper>
          </div>

          <div style={transitionStyles.overlay}>
            <Overlay
              zIndex={0}
              color={overlayColor || (theme.colorScheme === 'dark' ? theme.palettes.gray[9] : theme.colors.black)}
              opacity={_overlayOpacity}
            />
          </div>
        </View>
      )}
    </GroupedTransition>
  );
};

export const Modal = ({ zIndex = 'modal', target, ...props }: React.ComponentPropsWithoutRef<typeof CoModal>) => {
  return (
    <Portal zIndex={zIndex} target={target}>
      <CoModal {...props} />
    </Portal>
  );
};

Modal.displayName = '@co-design/core/Modal';
