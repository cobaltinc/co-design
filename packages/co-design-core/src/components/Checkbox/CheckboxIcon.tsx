import React from 'react';
import { Check } from './icons/Check';
import { DisabledCheck } from './icons/DisabledCheck';
import { Default } from './icons/Default';
import { Disabled } from './icons/Disabled';
import { Error } from './icons/Error';
import { Indeterminate } from './icons/Indeterminate';

interface CheckboxIconProps {
  check?: boolean;
  indeterminate?: boolean;
  error?: boolean;
  disabled?: boolean;
}

export const CheckboxIcon = ({ check = false, indeterminate = false, error = false, disabled = false }: CheckboxIconProps) => {
  return check ? (
    !error ? (
      disabled ? (
        <DisabledCheck />
      ) : (
        <Check />
      )
    ) : (
      <Error />
    )
  ) : indeterminate ? (
    <Indeterminate />
  ) : !error ? (
    disabled ? (
      <Disabled />
    ) : (
      <Default />
    )
  ) : (
    <Error />
  );
};
