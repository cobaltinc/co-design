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
  /** If true drawer is mounted to the dom */
  opened: boolean;

  /** Called when drawer is closed (Escape key and click outside, depending on options) */
  onClose(): void;

  /** Drawer body position */
  position?: DrawerPosition;

  /** Drawer body width (right | left position) or height (top | bottom position), cannot exceed 100vh for height and 100% for width */
  size?: CoSize | 'full' | number;

  /** Drawer body shadow from theme or any css shadow value */
  shadow?: CoShadows;

  /** Drawer body padding from theme or number for padding in px */
  padding?: CoSpacing | number;

  /** Drawer z-index property */
  zIndex?: CoZIndex | number;

  /** Disables focus trap */
  noFocusTrap?: boolean;

  /** Disables scroll lock */
  noScrollLock?: boolean;

  /** Disable onClock trigger for outside events */
  noCloseOnClickOutside?: boolean;

  /** Disable onClock trigger for escape key press */
  noCloseOnEscape?: boolean;

  /** Drawer appear and disappear transition, see Transition component for full documentation */
  transition?: CoTransition;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Drawer transitionTimingFunction css property */
  transitionTimingFunction?: string;

  /** Removes overlay entirely */
  noOverlay?: boolean;

  /** Sets overlay opacity, defaults to 0.75 in light theme and to 0.85 in dark theme */
  overlayOpacity?: number;

  /** Sets overlay color, defaults to theme.black in light theme and to theme.colors.dark[9] in dark theme */
  overlayColor?: string;

  /** Drawer title, displayed in header before close button */
  title?: React.ReactNode;

  /** Hides close button, modal still can be closed with escape key and by clicking outside */
  hideCloseButton?: boolean;

  /** Close button aria-label */
  closeButtonLabel?: string;

  target?: HTMLDivElement;
}

const transitions: Record<DrawerPosition, CoTransition> = {
  top: 'slide-down',
  bottom: 'slide-up',
  left: 'slide-right',
  right: 'slide-left',
};

export const CoDrawer = ({
  className,
  opened,
  onClose,
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
  title,
  hideCloseButton,
  closeButtonLabel,
  overrideStyles,
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
      onExited={() => lockScroll(false)}
      onEntered={() => lockScroll(!noScrollLock && true)}
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
        <View
          className={cx(classes.root, { [classes.noOverlay]: noOverlay }, className)}
          role="dialog"
          aria-modal
          onMouseDown={() => !noCloseOnClickOutside && onClose()}
          {...props}
        >
          <Paper<'div'>
            onMouseDown={(event) => event.stopPropagation()}
            className={cx(classes.drawer, className)}
            ref={focusTrapRef}
            style={{ ...transitionStyles.drawer, zIndex: (zIndex in theme.zIndex ? theme.zIndex[zIndex] : zIndex) + 2 }}
            radius={0}
            tabIndex={-1}
            onKeyDownCapture={(event) => {
              const shouldTrigger = (event.target as any)?.getAttribute('data-mantine-stop-propagation') !== 'true';

              shouldTrigger && event.nativeEvent.code === 'Escape' && !noCloseOnEscape && onClose();
            }}
            shadow={shadow}
            padding={padding}
          >
            {(title || !hideCloseButton) && (
              <div className={classes.header}>
                <Text strong className={classes.title}>
                  {title}
                </Text>

                {!hideCloseButton && (
                  <CloseButton
                    variant="transparent"
                    color="dark"
                    size="small"
                    onClick={onClose}
                    aria-label={closeButtonLabel}
                    className={classes.closeButton}
                  />
                )}
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
