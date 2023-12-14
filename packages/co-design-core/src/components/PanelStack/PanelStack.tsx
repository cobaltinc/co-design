import React, { useCallback } from 'react';
import { useList, useTimeoutFn, useToggle } from '@co-design/hooks';
import { CoComponentProps, ClassNames, CoRadius, CoShadows, CoSpacing } from '@co-design/styles';
import { Text } from '../Text';
import { Paper } from '../Paper';
import { View } from '../View';
import { CoTransition, Transition } from '../Transition';
import useStyles from './PanelStack.style';
import { Divider } from '../Divider';
import { PanelsProvider } from './PanelsProvider';
import { IconButton } from '../IconButton';
import { Group } from '../Group';
import { ArrowLeft } from './ArrowLeft';

export type PanelStackStylesNames = ClassNames<typeof useStyles>;

export interface Panel<P> {
  title: string | React.ReactNode;
  body: React.ReactNode;
  props?: P;
}

export interface PanelStackProps<T extends Panel<object>> extends CoComponentProps<PanelStackStylesNames> {
  width: number | string;

  height: number | string;

  initialPanel?: T;

  /** PanelStack 컴포넌트에 shadow를 적용합니다. */
  shadow?: CoShadows;

  /** PanelStack 컴포넌트 body 영역에 padding을 적용합니다. */
  padding?: CoSpacing | number;

  /** PanelStack 컴포넌트의 radius를 정합니다. */
  radius?: CoRadius;

  /** PanelStack 컴포넌트가 등장하는 트랜지션을 정합니다. */
  transition?: CoTransition;

  /** 트랜지션이 실행되는 시간을 ms단위로 정합니다. */
  transitionDuration?: number;

  /** 트랜지션의 타이밍 함수를 정합니다. */
  transitionTimingFunction?: string;

  /** true일 경우 헤더 영역을 제거합니다. */
  hideHeaderButton?: boolean;

  /** */
  onPop?: (panel: T) => void;

  /** */
  onPush?: (panel: T) => void;
}

export const PanelStack = <T extends Panel<object>>({
  width,
  height,
  initialPanel,
  padding = 'large',
  shadow = 'large',
  radius = 'medium',
  transition = 'fade',
  transitionDuration = 100,
  transitionTimingFunction = 'ease',
  hideHeaderButton = false,
  onPop,
  onPush,
  className,
  co,
  overrideStyles,
  ...props
}: PanelStackProps<T>) => {
  const { classes, cx } = useStyles({ width, height, padding }, { overrideStyles, name: 'PanelStack' });

  const [panels, { append, pop }] = useList(initialPanel ? [initialPanel] : []);

  const [mount, toggleMount] = useToggle(true);
  const handlePushPanel = useCallback(
    (panel: T) => {
      onPush?.(panel);
      append(panel);
      toggleMount(false);
      pushAnimate();
    },
    [onPush, append, toggleMount],
  );

  const handlePopPanel = useCallback(() => {
    toggleMount(false);
    popAnimate();
  }, [onPop, pop]);

  const [pushAnimate] = useTimeoutFn(() => {
    toggleMount(true);
  }, transitionDuration);

  const [popAnimate] = useTimeoutFn(() => {
    toggleMount(true);
    onPop?.(panels[panels.length - 1]);
    pop();
  }, transitionDuration);

  const panelViews = panels.map((panel, index) => {
    return (
      <Transition
        key={index}
        mounted={panels.length - 1 === index && mount}
        transition={transition}
        duration={transitionDuration}
        timingFunction={transitionTimingFunction}
      >
        {(styles) => {
          return (
            <View className={classes.inner} style={styles}>
              {!hideHeaderButton && (
                <>
                  <Group spacing="small" align="center" className={classes.header}>
                    {index !== 0 && (
                      <IconButton variant="text" color="dark" size="small" className={classes.back} onClick={() => handlePopPanel()}>
                        <ArrowLeft />
                      </IconButton>
                    )}
                    <Text strong className={classes.title}>
                      {panel.title}
                    </Text>
                  </Group>

                  <Divider className={classes.divider} />
                </>
              )}

              <div className={classes.body}>{panel.body}</div>
            </View>
          );
        }}
      </Transition>
    );
  });

  return (
    <PanelsProvider panels={panels} onPop={handlePopPanel} onPush={handlePushPanel}>
      <Paper<'div'> className={cx(classes.root, className)} co={co} shadow={shadow} padding={padding} radius={radius} withBorder={false} {...props}>
        {panelViews}
      </Paper>
    </PanelsProvider>
  );
};

PanelStack.displayName = '@co-design/core/PanelStack';
