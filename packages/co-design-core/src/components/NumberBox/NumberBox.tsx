import React, { useEffect, useRef, useState } from 'react';
import { ClassNames, CoComponentProps } from '@co-design/styles';
import { NumberBoxIcon } from './NumberBoxIcon';
import { View } from '../View';
import useStyles from './NumberBox.style';
import { Count, CountRef } from './Count';
import { useNumberBoxContext } from './NumberBoxContext';

export type NumberBoxStylesNames = ClassNames<typeof useStyles>;

export interface NumberBoxProps extends CoComponentProps<NumberBoxStylesNames>, Omit<React.ComponentPropsWithoutRef<'input'>, 'onClick' | 'size'> {
  /** NumberBox 를 감싸는 요소를 클릭했을 때 발생할 이벤트를 지정합니다. */
  onClick?: React.MouseEventHandler<HTMLLabelElement>;

  size?: 'small' | 'medium';

  /** NumberBox 를 감싸는 요소에 속성을 전달합니다. */
  wrapperProps?: React.ComponentPropsWithoutRef<'label'> & { [key: string]: any };
}

export const NumberBox = ({
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
  onClick,
  size = 'small',
  className = '',
  style,
  wrapperProps,
  co,
  overrideStyles,
  children,
  ...props
}: NumberBoxProps) => {
  const { actions } = useNumberBoxContext();
  const countRef = useRef<CountRef>({ count: 0 });

  const [check, setCheck] = useState(checked);
  const { classes, cx } = useStyles(
    { checked: check, disabled, size },
    {
      overrideStyles,
      name: 'NumberBox',
    },
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    if (checked) {
      actions.increase();
    } else {
      actions.delete(countRef.current.count);
    }

    setCheck(checked);
    onChange?.(event);
  };

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  return (
    <View
      component="label"
      onClick={onClick}
      className={cx(classes.wrapper, className, {
        [classes.checked]: check,
        [classes.disabled]: disabled,
      })}
      co={co}
      style={style}
      {...wrapperProps}
    >
      <input
        type="checkbox"
        className={classes.input}
        name={name}
        checked={check}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        {...props}
      />
      <View className={classes.childrenWrapper}>
        {children}
        <View className={classes.checkWrapper}>
          <NumberBoxIcon className={classes.checkmark} />
          {check && <Count ref={countRef} className={classes.number} />}
        </View>
      </View>
    </View>
  );
};
