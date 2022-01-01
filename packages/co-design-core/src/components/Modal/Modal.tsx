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
  /** Mounts modal if true */
  opened: boolean;

  /** Called when close button clicked and when escape key is pressed */
  onClose(): void;

  /** Modal title, displayed in header before close button */
  title?: React.ReactNode;

  /** Modal z-index property */
  zIndex?: CoZIndex | number;

  /** Control vertical overflow behavior */
  overflow?: 'outside' | 'inside';

  /** Hides close button, modal still can be closed with escape key and by clicking outside */
  hideCloseButton?: boolean;

  /** Overlay below modal opacity, defaults to 0.75 in light theme and to 0.85 in dark theme */
  overlayOpacity?: number;

  /** Overlay below modal color, defaults to theme.black in light theme and to theme.colors.dark[9] in dark theme */
  overlayColor?: string;

  /** Modal radius */
  radius?: CoRadius;

  /** Modal body width */
  size?: CoSize | 'full' | number;

  /** Modal body transition */
  transition?: CoTransition;

  /** Duration in ms of modal transitions, set to 0 to disable all animations */
  transitionDuration?: number;

  /** Modal body transitionTimingFunction, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Close button aria-label */
  closeButtonLabel?: string;

  /** id base, used to generate ids to connect modal title and body with aria- attributes, defaults to random id */
  id?: string;

  /** Modal shadow from theme or css value */
  shadow?: CoShadows;

  /** Modal padding from theme or number value for padding in px */
  padding?: CoSpacing;

  /** Should modal be closed when outside click was registered? */
  closeOnClickOutside?: boolean;
}

export const CoModal = ({
  id,
  opened,
  title,
  onClose,
  children,
  hideCloseButton = false,
  overlayOpacity,
  size = 'medium',
  transitionDuration = 200,
  closeButtonLabel,
  overlayColor,
  overflow = 'outside',
  transition = 'pop',
  padding = 'spacing4',
  shadow = 'large',
  radius = 'medium',
  closeOnClickOutside = true,
  className,
  co,
  overrideStyles,
  ...props
}: ModalProps) => {
  const baseId = useId(id);
  const titleId = `${baseId}-title`;
  const bodyId = `${baseId}-body`;
  const { classes, cx, theme } = useStyles({ size, overflow }, { co, overrideStyles, name: 'Modal' });
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
        <View className={cx(classes.root, className)} {...props}>
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

                  {!hideCloseButton && <CloseButton variant="transparent" color="dark" onClick={onClose} aria-label={closeButtonLabel} />}
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
              color={overlayColor || (theme.colorScheme === 'dark' ? theme.palettes.dark[9] : theme.colors.black)}
              opacity={_overlayOpacity}
            />
          </div>
        </View>
      )}
    </GroupedTransition>
  );
};

export const Modal = ({ zIndex = 'modal', ...props }: React.ComponentPropsWithoutRef<typeof CoModal>) => {
  return (
    <Portal zIndex={zIndex}>
      <CoModal {...props} />
    </Portal>
  );
};

Modal.displayName = '@co-design/core/Modal';
