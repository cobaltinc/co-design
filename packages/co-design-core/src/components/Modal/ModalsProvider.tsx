import React, { useState } from 'react';
import { Modal } from './Modal';
import { useList } from '@co-design/hooks';
import { randomId } from './utils';
import { ModalsContext, ModalsContextProps, ModalSettings, ConfirmLabels, OpenConfirmModal, ModalState } from './context';
import { ConfirmModal } from './ConfirmModal';

export interface ContextModalProps {
  context: ModalsContextProps;
  id: string;
}

export interface ModalsProviderProps {
  children: React.ReactNode;
  modals?: Record<string, React.FC<ContextModalProps>>;
  modalProps?: ModalSettings;
  labels?: ConfirmLabels;
}

function extractConfirmModalProps(props: OpenConfirmModal) {
  if (!props) {
    return { confirmProps: {}, modalProps: {} };
  }

  const { id, children, onCancel, onConfirm, closeOnConfirm, closeOnCancel, cancelProps, confirmProps, groupProps, labels, ...others } = props;

  return { id, ...others };
}

export function ModalsProvider({ children, modalProps, labels, modals }: ModalsProviderProps) {
  const [state, handlers] = useList<ModalState>([]);
  const [currentModal, setCurrentModal] = useState<ModalState>({
    id: null,
    props: null,
    type: 'content',
  });
  const closeAll = () => handlers.setState([]);

  const openModal = (props: ModalSettings) => {
    const id = props.id || randomId();
    handlers.append({ id, props, type: 'content' });
    setCurrentModal({ id, props, type: 'content' });
    return id;
  };

  const openConfirmModal = (props: OpenConfirmModal) => {
    const id = props.id || randomId();
    handlers.append({ id, props, type: 'confirm' });
    setCurrentModal({ id, props, type: 'confirm' });
    return id;
  };

  const openContextModal = (modal: string, props: OpenConfirmModal) => {
    const id = props.id || randomId();
    handlers.append({ id, props, type: 'context', ctx: modal });
    setCurrentModal({ id, props, type: 'context', ctx: modal });
    return id;
  };

  const closeModal = (id: string) => {
    const index = state.findIndex((item) => item.id === id);
    if (state.length <= 1) {
      closeAll();
    } else {
      const modal = state.find((item) => item.id === id);
      modal?.props?.onClose?.();
      index !== -1 && handlers.remove(index);
      setCurrentModal(
        state[state.length - 2] || {
          id: null,
          props: null,
          type: 'content',
        },
      );
    }
  };

  const ContextModal = currentModal?.type === 'context' ? modals[currentModal?.ctx] : () => null;

  const ctx = {
    modals: state,
    openModal,
    openConfirmModal,
    openContextModal,
    closeModal,
    closeAll,
  };

  const content =
    currentModal?.type === 'context' ? (
      <ContextModal context={ctx} id={currentModal?.id} />
    ) : currentModal?.type === 'confirm' ? (
      <ConfirmModal {...currentModal.props} id={currentModal.id} labels={currentModal.props.labels || labels} />
    ) : (
      currentModal?.props?.children
    );

  return (
    <ModalsContext.Provider value={ctx}>
      <Modal
        {...modalProps}
        {...(currentModal?.type === 'confirm' ? extractConfirmModalProps(currentModal?.props) : currentModal?.props)}
        opened={state.length > 0}
        onClose={() => closeModal(currentModal?.id)}
      >
        {content}
      </Modal>

      {children}
    </ModalsContext.Provider>
  );
}
