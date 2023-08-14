import React from 'react';
import { Check } from './icons/Check';
import { DisabledCheck } from './icons/DisabledCheck';
import { Default } from './icons/Default';
import { Disabled } from './icons/Disabled';

interface RadioIconProps {
  check?: boolean;
  disabled?: boolean;
  className?: string;
}

export const RadioIcon = ({ check = false, disabled = false, className = '' }: RadioIconProps) => {
  return <span className={className}>{check ? disabled ? <DisabledCheck /> : <Check /> : disabled ? <Disabled /> : <Default />}</span>;
};
