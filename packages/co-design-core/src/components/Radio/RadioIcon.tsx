import React, { SVGProps } from 'react';
import { Check } from './icons/Check';
import { Default } from './icons/Default';

interface RadioIconProps extends SVGProps<SVGSVGElement> {
  check?: boolean;
}

export const RadioIcon = ({ check = false, ...restProps }: RadioIconProps) => {
  return check ? <Check {...restProps} /> : <Default {...restProps} />;
};
