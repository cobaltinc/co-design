import React from 'react';
import { ModalsProvider } from '../ModalsProvider';
import { useModals } from '../useModals';

export default {
  title: '@co-design/primitive/ModalsProvider',
  component: ModalsProvider,
  decorators: [
    (Story) => (
      <ModalsProvider>
        <Story />
      </ModalsProvider>
    ),
  ],
};

export const ContentModal = () => {
  const modals = useModals();

  const openModal = () =>
    modals.openModal({
      title: 'Title',
      children: <div>Lorem ipsum.</div>,
    });

  return <button onClick={openModal}>Open modal</button>;
};

export const ConfirmModal = () => {
  const modals = useModals();

  const openConfirmModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      labels: {
        cancel: 'Cancel',
        confirm: 'Confirm',
      },
      children: (
        <div>This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed.</div>
      ),
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  return <button onClick={openConfirmModal}>Open confirm modal</button>;
};

export const MultipleStep = () => {
  const modals = useModals();

  const openMultiStepModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      closeOnConfirm: false,
      labels: { confirm: 'Next modal', cancel: 'Close modal' },
      children: (
        <div>This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed.</div>
      ),
      onConfirm: () =>
        modals.openConfirmModal({
          title: 'This is modal at second layer',
          labels: { confirm: 'Close modal', cancel: 'Back' },
          closeOnConfirm: false,
          children: <div>When this modal is closed modals state will revert to first modal</div>,
          onConfirm: () => modals.closeAll(),
        }),
    });

  return <button onClick={openMultiStepModal}>Open multiple steps modal</button>;
};
