import React from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { CoComponentProps, Portal } from '@co-design/core';
// import { useReducedMotion } from '@co-design/hooks';
import { ToastsContext } from './ToastsContext';
import ToastContainer from './ToastContainer';
import useStyles from './ToastsProvider.style';
import useToastsState from './useToastsState';
import { CoZIndex } from '@co-design/styles';

const POSITIONS = ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'] as const;

export type ToastsProviderPositioning = ['top' | 'bottom', 'left' | 'right' | 'center'];

export interface ToastProviderProps extends CoComponentProps, React.ComponentPropsWithoutRef<'div'> {
  /** Notifications position */
  position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';

  /** Auto close timeout for all notifications, false to disable auto close, can be overwritten for individual notifications by showNotification function */
  autoClose?: number | false;

  /** Notification transitions duration, 0 to turn transitions off */
  transitionDuration?: number;

  /** Notification width in px, cannot exceed 100% */
  containerWidth?: number;

  /** Notification max-height in px, used for transitions */
  toastMaxHeight?: number;

  /** Maximum amount of notifications displayed at a time, other new notifications will be added to queue */
  limit?: number;

  /** Notifications container z-index */
  zIndex?: CoZIndex;
}

function getPositionStyles([vertical, horizontal]: ToastsProviderPositioning, containerWidth: number, spacing: number) {
  const styles: React.CSSProperties = {};

  vertical === 'top' && (styles.top = spacing);
  vertical === 'bottom' && (styles.bottom = spacing);

  horizontal === 'left' && (styles.left = spacing);
  horizontal === 'right' && (styles.right = spacing);
  horizontal === 'center' && (styles.left = `calc(50% - ${containerWidth / 2}px)`);

  return styles;
}

interface ToastStateStylesProps {
  state: TransitionStatus;
  maxHeight: number;
  positioning: ToastsProviderPositioning;
  transitionDuration: number;
}

const transforms = {
  left: 'translateX(-100%)',
  right: 'translateX(100%)',
  'top-center': 'translateY(-100%)',
  'bottom-center': 'translateY(100%)',
};

const noTransform = {
  left: 'translateX(0)',
  right: 'translateX(0)',
  'top-center': 'translateY(0)',
  'bottom-center': 'translateY(0)',
};

function getToastStateStyles({ state, maxHeight, positioning, transitionDuration }: ToastStateStylesProps): React.CSSProperties {
  const [vertical, horizontal] = positioning;
  const property = horizontal === 'center' ? `${vertical}-center` : horizontal;

  const commonStyles: React.CSSProperties = {
    opacity: 0,
    maxHeight,
    transform: transforms[property],
    transitionDuration: `${transitionDuration}ms, ${transitionDuration}ms, ${transitionDuration}ms`,
    transitionTimingFunction: 'cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear',
    transitionProperty: 'opacity, transform, max-height',
  };

  const inState: React.CSSProperties = {
    opacity: 1,
    transform: noTransform[property],
  };

  const outState: React.CSSProperties = {
    opacity: 0,
    maxHeight: 0,
    transform: transforms[property],
  };

  const transitionStyles = {
    entering: inState,
    entered: inState,
    exiting: outState,
    exited: outState,
  };

  return { ...commonStyles, ...transitionStyles[state] };
}

export function ToastsProvider({
  className,
  position = 'bottom-right',
  autoClose = 4000,
  transitionDuration = 250,
  containerWidth = 440,
  toastMaxHeight = 200,
  limit = 5,
  zIndex = 'toast',
  style,
  children,
  ...others
}: ToastProviderProps) {
  const { toasts, queue, showToast, updateToast, hideToast, clean, cleanQueue } = useToastsState({ limit });
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 1 : transitionDuration;
  const { classes, cx, theme } = useStyles();
  const positioning = (POSITIONS.includes(position) ? position : 'bottom-right').split('-') as ToastsProviderPositioning;

  const items = toasts.map((toast) => (
    <Transition key={toast.id} timeout={duration} unmountOnExit mountOnEnter onEnter={(node: any) => node.offsetHeight}>
      {(state) => (
        <ToastContainer
          toast={toast}
          onHide={hideToast}
          className={classes.toast}
          autoClose={autoClose}
          style={{
            ...getToastStateStyles({
              state,
              positioning,
              transitionDuration: duration,
              maxHeight: toastMaxHeight,
            }),
          }}
        />
      )}
    </Transition>
  ));

  return (
    <ToastsContext.Provider
      value={{
        toasts,
        queue,
        showToast,
        hideToast,
        updateToast,
        clean,
        cleanQueue,
      }}
    >
      <Portal zIndex={zIndex}>
        <div
          className={cx(classes.toasts, className)}
          style={{
            maxWidth: containerWidth,
            ...getPositionStyles(positioning, containerWidth, theme.spacing.medium),
            ...style,
          }}
          {...others}
        >
          <TransitionGroup>{items}</TransitionGroup>
        </div>
      </Portal>

      {children}
    </ToastsContext.Provider>
  );
}

ToastsProvider.displayName = '@co-design/Toast/ToastsProvider';
