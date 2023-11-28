import React, { useContext, useState, useEffect } from 'react';
import RadioGroup from './RadioGroup';
import RadioContext from './RadioContext';
import useStyles from './Radio.style';
import { RadioIcon } from './RadioIcon';
import { ClassNames, CoComponentProps } from '@co-design/styles';
import { View } from '../View';

export type RadioStylesNames = ClassNames<typeof useStyles>;

export interface RadioProps extends CoComponentProps<RadioStylesNames>, Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'value'> {
  /** Radio 의 value 를 지정합니다.  */
  value?: string;

  /** Radio 를 설명할 label 을 지정합니다.   */
  label?: string;

  /** Radio 를 설명할 label 의 색상을 지정합니다.   */
  labelColor?: string;

  /** Radio 를 block 상태로 지정합니다.  */
  block?: boolean;

  /** Change Event 시 발생할 함수를 지정합니다.  */
  onChange?(check: boolean, value?: string): void;

  /** Radio 를 감싸는 요소에 속성을 전달합니다. */
  wrapperProps?: React.ComponentPropsWithoutRef<'label'> & { [key: string]: any };
}

type IRadio<P> = React.FunctionComponent<P> & {
  Group: typeof RadioGroup;
};

const Radio: IRadio<RadioProps> = ({
  value,
  name,
  label,
  labelColor,
  checked = false,
  block = false,
  disabled,
  onChange,
  className = '',
  style,
  wrapperProps,
  co,
  overrideStyles,
  ...props
}) => {
  const { dispatch } = useContext(RadioContext);
  const [check, setCheck] = useState(checked);
  const { cx, classes } = useStyles(
    {
      check,
      disabled,
    },
    {
      overrideStyles,
      name: 'Radio',
    },
  );

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  const handleChange = () => {
    onChange?.(!check, value);
    setCheck(!check);
    dispatch?.({
      active: {
        label,
        value,
      },
    });
  };

  return (
    <View
      component="label"
      className={cx(classes.wrapper, { [classes.disabled]: disabled, [classes.block]: block }, className)}
      co={co}
      style={style}
      {...wrapperProps}
    >
      <input
        className={classes.input}
        type="radio"
        name={name}
        value={value}
        checked={check}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      <span className={classes.iconWrapper}>
        <RadioIcon className={classes.icon} check={check} />
      </span>
      {label ? (
        <span className={classes.text} style={{ color: labelColor }}>
          {label}
        </span>
      ) : null}
    </View>
  );
};

Radio.Group = RadioGroup;

export default Radio;
