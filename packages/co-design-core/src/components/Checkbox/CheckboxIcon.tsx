import { Check } from './icons/Check';
import { Default } from './icons/Default';
import { Indeterminate } from './icons/Indeterminate';
import { SVGProps } from 'react';

interface CheckboxIconProps extends SVGProps<SVGSVGElement> {
  check?: boolean;
  indeterminate?: boolean;
  error?: boolean;
  disabled?: boolean;
}

export const CheckboxIcon = ({ check = false, indeterminate = false, ...props }: CheckboxIconProps) => {
  return check ? <Check {...props} /> : indeterminate ? <Indeterminate {...props} /> : <Default {...props} />;
};
