import React, { forwardRef } from 'react';
import { IconButton, IconButtonProps } from './IconButton';
import { CloseIcon } from './CloseIcon';

export type CloseButtonProps = Omit<IconButtonProps<'button'>, 'children'>;

type CloseButtonComponent = (props: CloseButtonProps) => React.ReactElement;

export const CloseButton: CloseButtonComponent & { displayName?: string } = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ size = 'medium', ...props }: CloseButtonProps, ref) => {
    return (
      <IconButton size={size} ref={ref} {...props}>
        <CloseIcon />
      </IconButton>
    );
  },
);

CloseButton.displayName = '@co-design/core/CloseButton';
