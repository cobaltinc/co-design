import React from 'react';
import { CoSize } from '@co-design/styles';
import { CloseButton } from '../IconButton/CloseButton';
import { ChevronIcon } from './ChevronIcon';

export interface SelectRightSectionProps {
  shouldClear: boolean;
  clearButtonLabel?: string;
  onClear?: () => void;
  size: CoSize;
  invalid?: boolean;
}

export const SelectRightSection = ({ shouldClear, clearButtonLabel, onClear, size, invalid }: SelectRightSectionProps) => {
  return shouldClear ? (
    <CloseButton variant="text" aria-label={clearButtonLabel} onClick={onClear} size={size} />
  ) : (
    <ChevronIcon invalid={invalid} size={size} />
  );
};

SelectRightSection.displayName = '@co-design/primitive/SelectRightSection';
