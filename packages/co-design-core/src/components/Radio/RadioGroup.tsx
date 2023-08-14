import React, { useReducer, useEffect } from 'react';
import { RadioProps } from './Radio';
import { convertReactNodeTo } from '../../utils';
import RadioContext, { RadioItemType, RadioReducer } from './RadioContext';

export interface RadioGroupProps {
  children: React.ReactNode;
  defaultActive?: string;
  onChange?(items?: RadioItemType | RadioItemType[]): void;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, defaultActive, onChange, className = '', style, ...props }: RadioGroupProps) => {
  const [state, dispatch] = useReducer(RadioReducer, {
    active: (() => {
      if (defaultActive) {
        const radioItems = React.Children.toArray(children).map((radioComponent: any) => {
          const radioProps = (radioComponent as React.ReactElement<RadioProps>).props;
          return {
            value: radioProps.value,
            label: radioProps.label,
          };
        }) as RadioItemType[];

        return radioItems.find((radioItem) => radioItem.value && radioItem.value === defaultActive);
      }
    })(),
  });

  const radios = convertReactNodeTo<RadioProps>('Radio.Group', 'Radio', children).map((element, index, elements) => {
    const radioComponent = element as React.ReactElement<RadioProps>;
    return React.cloneElement<RadioProps>(radioComponent, {
      checked: radioComponent.props.value === (state?.active as any)?.value,
      style: {
        ...radioComponent.props.style,
      },
    });
  });

  useEffect(() => {
    onChange?.(state.active);
  }, [state.active]);

  return (
    <RadioContext.Provider value={{ state, dispatch }}>
      <div className={className} style={style} {...props}>
        {radios}
      </div>
    </RadioContext.Provider>
  );
};
