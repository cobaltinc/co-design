import { useCoTheme } from '@co-design/styles';
import React, { useContext } from 'react';
import { Button, ButtonProps } from '../Button';
import { Group, GroupProps } from '../Group';
import { View } from '../View';
import { ModalsContext, ConfirmLabels } from './context';

export interface ConfirmModalProps {
  id?: string;
  children?: React.ReactNode;
  onCancel?(): void;
  onConfirm?(): void;
  closeOnConfirm?: boolean;
  closeOnCancel?: boolean;
  cancelProps?: ButtonProps<'button'>;
  confirmProps?: ButtonProps<'button'>;
  groupProps?: GroupProps;
  labels?: ConfirmLabels;
}

export const ConfirmModal = ({
  id,
  cancelProps,
  confirmProps,
  labels,
  closeOnConfirm = true,
  closeOnCancel = true,
  groupProps,
  onCancel,
  onConfirm,
  children,
}: ConfirmModalProps) => {
  const theme = useCoTheme();
  const ctx = useContext(ModalsContext);

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof cancelProps?.onClick === 'function' && cancelProps?.onClick(event);
    typeof onCancel === 'function' && onCancel();
    closeOnCancel && ctx?.closeModal(id);
  };

  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof confirmProps?.onClick === 'function' && confirmProps?.onClick(event);
    typeof onConfirm === 'function' && onConfirm();
    closeOnConfirm && ctx?.closeModal(id);
  };

  return (
    <>
      {children && <View co={{ marginBottom: theme.spacing.medium }}>{children}</View>}

      <Group position="right" {...groupProps}>
        <Button variant="ghost" {...cancelProps} onClick={handleCancel}>
          {cancelProps?.children || labels.cancel}
        </Button>

        <Button {...confirmProps} onClick={handleConfirm}>
          {confirmProps?.children || labels.confirm}
        </Button>
      </Group>
    </>
  );
};
