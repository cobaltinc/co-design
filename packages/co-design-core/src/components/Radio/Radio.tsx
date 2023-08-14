import React, { useContext, useState, useEffect } from 'react';
import RadioGroup from './RadioGroup';
import RadioContext from './RadioContext';
import useStyles from './Radio.style';
import { RadioIcon } from './RadioIcon';

export interface RadioProps {
  value?: string;
  name?: string;
  label?: string;
  labelColor?: string;
  checked?: boolean;
  block?: boolean;
  disabled?: boolean;
  onChange?(check: boolean, value?: string): void;
  className?: string;
  style?: React.CSSProperties;
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
  ...props
}) => {
  const { dispatch } = useContext(RadioContext);
  const [check, setCheck] = useState(checked);
  const { cx, classes } = useStyles(null, {
    name: 'Radio',
  });

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
    <label className={cx(classes.wrapper, { [classes.disabled]: disabled, [classes.block]: block })} style={style} {...props}>
      <input className={classes.input} type="radio" name={name} value={value} checked={check} disabled={disabled} onChange={handleChange} />
      <RadioIcon className={classes.radiomark} check={check} disabled={disabled} />
      {label ? (
        <span className={classes.text} style={{ color: labelColor }}>
          {label}
        </span>
      ) : null}
    </label>
  );
};

Radio.Group = RadioGroup;

export default Radio;
