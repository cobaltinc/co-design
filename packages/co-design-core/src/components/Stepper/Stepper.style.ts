import { createStyles } from '@co-design/styles';

interface StackStyles {
  orientation?: 'horizontal' | 'vertical';
  isNeedGap?: boolean;
}

export default createStyles((theme, { orientation, isNeedGap }: StackStyles) => {
  const stepSize = theme.foundations.tokens.size.size_09;
  const stepsGap = theme.foundations.tokens.size.size_04;
  return {
    root: {
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: orientation === 'vertical' ? '100%' : 'auto',
      ...(isNeedGap ? { gap: stepsGap } : {}),
    },
    stepWrapper: {
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      flex: 1,
    },
    connector: {
      flex: '1 1 auto',
      margin: 0,
    },
    connectorActive: {
      borderColor: theme.foundations.tokens.color.border.border_primary,
      transition: 'border-color 0.3s ease',
    },
    verticalBottom: {
      margin: 'auto',
      height: '100%',
    },
    horizontalBottom: {
      position: 'absolute',
      top: stepSize / 2,
      left: `calc(-50% + ${stepSize / 2}px + ${stepsGap}px)`,
      width: `calc(100% - ${stepSize}px - ${stepsGap * 2}px)`,
    },
    verticalRight: {
      position: 'absolute',
      left: stepSize / 2,
      top: `calc(-50% + ${stepSize / 2}px + ${stepsGap}px)`,
      height: `calc(100% - ${stepsGap * 2}px)`,
    },
    horizontalRight: {},
    child: {},
  };
});
