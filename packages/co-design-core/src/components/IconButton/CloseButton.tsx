import React, { forwardRef } from 'react';
import { IconButton, IconButtonProps } from './IconButton';
import { CloseIcon } from './CloseIcon';

export type CloseButtonProps = Omit<IconButtonProps<'button'>, 'children'>;

type CloseButtonComponent = (props: CloseButtonProps) => React.ReactNode;

export const CloseButton: CloseButtonComponent & { displayName?: string } = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ size = 'medium', variant = 'text', ...props }: CloseButtonProps, ref) => {
    return (
      <IconButton size={size} variant={variant} ref={ref} {...props}>
        <CloseIcon />
      </IconButton>
    );
  },
);

CloseButton.displayName = '@co-design/core/CloseButton';
