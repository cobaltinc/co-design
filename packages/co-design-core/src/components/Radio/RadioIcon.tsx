import React from 'react';
import { Check } from './icons/Check';
import { DisabledCheck } from './icons/DisabledCheck';
import { Default } from './icons/Default';
import { Disabled } from './icons/Disabled';

interface RadioIconProps {
  check?: boolean;
  disabled?: boolean;
}

export const RadioIcon = ({ check = false, disabled = false }: RadioIconProps) => {
  return check ? disabled ? <DisabledCheck /> : <Check /> : disabled ? <Disabled /> : <Default />;
};
